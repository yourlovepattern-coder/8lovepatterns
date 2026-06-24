/* ============================================================================
   LovePattern  .  CLIENT-SIDE FREE-ONLY ASSEMBLER  (browser, plain script)
   ----------------------------------------------------------------------------
   Faithful port of report-engine/assembler.mjs, with two guarantees:
     . runs in the browser as window.LP_FREE_ASSEMBLE(content, result, {lang})
     . ONLY ever assembles the FREE zone. It is fed window.LP_FREE_CONTENT,
       a bundle that contains free blocks only (no paid content exists in it),
       and it never emits a paid array. The paid tunnel (get-report) stays the
       sole door to paid content.

   Used by the result page as the offline / fallback path so the free profile
   always shows, even when /api/get-report-free is unreachable. The resolution
   rules (interpolation, byPalier, callouts, visual data) match the server 1:1,
   so the rendered text is identical, word for word.
   House rule: never the long dash.
   ============================================================================ */
(function () {
  /* EN delivery names/codes, identical to assembler.mjs */
  var LP_PROFILE_NAMES = {
    incendiaire: 'The Arsonist', guetteur: 'The Watcher', fugitif: 'The Runaway',
    alchimiste: 'The Alchemist', sauveur: 'The Savior', miroir: 'The Mirror',
    cameleon: 'The Chameleon', bastion: 'The Bastion',
  };
  var LP_PROFILE_CODE = {
    incendiaire: 'inc', guetteur: 'gue', fugitif: 'fug', alchimiste: 'alc',
    sauveur: 'sau', miroir: 'mir', cameleon: 'cam', bastion: 'bas',
  };

  function buildContext(result, opts) {
    opts = opts || {};
    var r = result || {};
    var lang = opts.lang === 'en' ? 'en' : 'fr';
    var profil = r.pattern_dominant || r.profilDominant || 'miroir';
    var secondaire = r.pattern_secondaire || null;
    var palier = (r.ancre_position != null) ? Number(r.ancre_position) : 2;
    var bascule = (r.ancre_bascule != null) ? Number(r.ancre_bascule) : palier;
    var lib = function (o) { return (o && (o[lang] || o.fr)) || ''; };
    return {
      lang: lang,
      profil: profil,
      code: LP_PROFILE_CODE[profil] || 'mir',
      nom: LP_PROFILE_NAMES[profil] || profil,
      dominantScore: r.pattern_dominant_score != null ? Math.round(r.pattern_dominant_score) : null,
      secondaire: secondaire,
      secondaireNom: secondaire ? (LP_PROFILE_NAMES[secondaire] || secondaire) : '',
      secondaireScore: r.pattern_secondaire_score != null ? Math.round(r.pattern_secondaire_score) : null,
      palier: palier,
      palierLibelle: lib(r.ancre_position_libelle),
      bascule: bascule,
      basculeLibelle: lib(r.ancre_bascule_libelle),
      basculeDeeper: bascule > palier,
      statut: (r.contexte && r.contexte.statut) || null,
      repetition: (r.contexte && r.contexte.repetition) || null,
      securite: r.securite || 'ok',
      sabotage: r.sabotage_principal || null,
      axe: r.axe || null,
      profilType: r.profil_type || 'net',
      scoresPattern: r.tous_les_scores_pattern || {},
      dateTest: r.dateTest || 0,
    };
  }

  function interp(str, ctx) {
    if (str == null) return '';
    var map = {
      profil: ctx.nom,
      profil_dominant: ctx.nom,
      pattern_dominant: ctx.nom,
      pattern_dominant_score: ctx.dominantScore != null ? ctx.dominantScore + '%' : '',
      pattern_secondaire: ctx.secondaireNom,
      pattern_secondaire_score: ctx.secondaireScore != null ? ctx.secondaireScore + '%' : '',
      ancre_position: ctx.palier,
      ancre_position_libelle: ctx.palierLibelle,
      ancre_bascule: ctx.bascule,
      ancre_bascule_libelle: ctx.basculeLibelle,
      statut: ctx.statut || '',
      sabotage_principal: ctx.sabotage || '',
    };
    return String(str).replace(/\{\{\s*(\w+)\s*\}\}/g, function (m, k) {
      return (map[k] != null && map[k] !== '') ? map[k] : (map[k] === '' ? '' : m);
    });
  }

  function pickByPalier(val, ctx) {
    if (val == null) return null;
    if (typeof val !== 'object' || Array.isArray(val) || val.byPalier === undefined) return val;
    var bp = val.byPalier || {};
    if (bp[ctx.palier] != null) return bp[ctx.palier];
    if (val.default != null) return val.default;
    var keys = Object.keys(bp).map(Number).sort(function (a, b) { return Math.abs(a - ctx.palier) - Math.abs(b - ctx.palier); });
    return keys.length ? bp[keys[0]] : '';
  }

  function pickBySecondaire(val, ctx) {
    if (val == null || typeof val !== 'object' || val.bySecondaire === undefined) return val;
    var bs = val.bySecondaire || {};
    return (ctx.secondaire && bs[ctx.secondaire] != null) ? bs[ctx.secondaire] : (val.default != null ? val.default : '');
  }

  function resolveText(val, ctx) {
    val = pickBySecondaire(pickByPalier(val, ctx), ctx);
    if (Array.isArray(val)) {
      return val
        .map(function (p) { return pickBySecondaire(pickByPalier(p, ctx), ctx); })
        .map(function (p) { return interp(p, ctx); })
        .filter(Boolean);
    }
    return interp(val, ctx);
  }

  function condPasses(cond, ctx) {
    if (!cond) return true;
    if (cond.ifFlag) return !!ctx[cond.ifFlag];
    if (cond.if) {
      return Object.keys(cond.if).every(function (k) {
        var want = cond.if[k];
        return Array.isArray(want) ? want.indexOf(ctx[k]) !== -1 : ctx[k] === want;
      });
    }
    return true;
  }

  function resolveCallouts(list, ctx) {
    if (!Array.isArray(list)) return [];
    return list
      .filter(function (c) { return condPasses(c, ctx); })
      .map(function (c) { return { tone: c.tone || 'note', text: interp(resolveText(c.text, ctx), ctx) }; })
      .filter(function (c) { return c.text; });
  }

  function computeVisualData(visual, ctx) {
    switch (visual && visual.kind) {
      case 'anchorScale':
        return { position: ctx.palier, bascule: ctx.bascule, libelle: ctx.palierLibelle };
      default:
        return {};
    }
  }

  function resolveBlock(def, ctx) {
    if (def.when && !condPasses(def.when, ctx)) return null;
    var out = { id: def.id, type: def.type, zone: def.zone || 'free' };
    if (def.kicker) out.kicker = interp(resolveText(def.kicker, ctx), ctx);
    if (def.title) out.title = interp(resolveText(def.title, ctx), ctx);
    if (def.lead) out.lead = interp(resolveText(def.lead, ctx), ctx);
    if (def.paras) out.paras = [].concat(resolveText(def.paras, ctx)).filter(Boolean);
    if (def.callouts) out.callouts = resolveCallouts(def.callouts, ctx);
    if (def.type === 'visual') {
      out.visual = def.visual;
      out.data = computeVisualData(def.visual, ctx);
    }
    if (def.type === 'cta') out.cta = { label: interp(resolveText(def.label, ctx), ctx) };
    return out;
  }

  /* FREE ZONE ONLY. Paid blocks are not present in window.LP_FREE_CONTENT and
     are never produced here. */
  function assembleFree(content, result, opts) {
    opts = opts || {};
    var ctx = buildContext(result, opts);
    var free = [];
    (content.blocks || []).forEach(function (def) {
      var zone = def.zone || 'free';
      if (zone !== 'free') return;
      var b = resolveBlock(def, ctx);
      if (b) free.push(b);
    });
    return {
      meta: {
        profil: ctx.profil, code: ctx.code, nom: ctx.nom, accent: content.accent || '#46934A',
        palier: ctx.palier, palierLibelle: ctx.palierLibelle,
      },
      free: free,
    };
  }

  window.LP_FREE_ASSEMBLE = assembleFree;
})();
