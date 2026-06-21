/* ============================================================================
   LovePattern  .  REPORT ASSEMBLER  (pure logic, no content, no DOM)
   ----------------------------------------------------------------------------
   Turns a profile's BLOCK definitions + a test-result CONTEXT into a resolved,
   ordered report, split into a free zone and a paid zone.

   This file is the ONLY place that knows the assembly rules. It runs:
     . server-side inside netlify/functions/get-report.mjs (the gated path)
     . at build time to pre-render the offline demo payload

   It is NEVER shipped to the browser: the browser only receives the JSON this
   produces, and only the zones the visitor is entitled to.

   The engine (test_engine.jsx -> LP_ENGINE.computeResultat) already emits
   everything we key on: pattern_dominant, pattern_secondaire, ancre_position
   (0..4), ancre_bascule, contexte.statut, contexte.repetition, securite,
   sabotage_principal. We derive a small ctx from it and resolve blocks.

   House rule: never the long dash. Commas, colons, periods only.
   ============================================================================ */

/* ---- the 8 profile display names (EN delivery) ------------------------- *
   Values are English for the EN launch; keys and codes are unchanged. These are
   the VALUES substituted into prose via {{profil}} / {{pattern_secondaire}},
   so they must match the language of the _content modules. (Swap back to the
   French set for a FR build.) */
export const LP_PROFILE_NAMES = {
  incendiaire: 'The Arsonist', guetteur: 'The Watcher', fugitif: 'The Runaway',
  alchimiste: 'The Alchemist', sauveur: 'The Savior', miroir: 'The Mirror',
  cameleon: 'The Chameleon', bastion: 'The Bastion',
};
export const LP_PROFILE_CODE = {
  incendiaire: 'inc', guetteur: 'gue', fugitif: 'fug', alchimiste: 'alc',
  sauveur: 'sau', miroir: 'mir', cameleon: 'cam', bastion: 'bas',
};

/* ---- build the ctx the blocks read, from a raw engine result ------------ *
   `result` is the object returned by LP_ENGINE.computeResultat (see
   test_engine.jsx). We tolerate partial objects (demo / older shapes).      */
export function buildContext(result, opts = {}) {
  const r = result || {};
  const lang = opts.lang === 'en' ? 'en' : 'fr';
  const profil = r.pattern_dominant || r.profilDominant || 'miroir';
  const secondaire = r.pattern_secondaire || null;
  const palier = (r.ancre_position != null) ? Number(r.ancre_position) : 2;
  const bascule = (r.ancre_bascule != null) ? Number(r.ancre_bascule) : palier;
  const lib = (o) => (o && (o[lang] || o.fr)) || '';
  return {
    lang,
    profil,
    code: LP_PROFILE_CODE[profil] || 'mir',
    nom: LP_PROFILE_NAMES[profil] || profil,
    dominantScore: r.pattern_dominant_score != null ? Math.round(r.pattern_dominant_score) : null,

    secondaire,
    secondaireNom: secondaire ? (LP_PROFILE_NAMES[secondaire] || secondaire) : '',
    secondaireScore: r.pattern_secondaire_score != null ? Math.round(r.pattern_secondaire_score) : null,

    palier,
    palierLibelle: lib(r.ancre_position_libelle),
    bascule,
    basculeLibelle: lib(r.ancre_bascule_libelle),
    basculeDeeper: bascule > palier,   // deeper palier = larger index (0 surface, 4 fond)

    statut: (r.contexte && r.contexte.statut) || null,           // couple | celibataire | rupture
    repetition: (r.contexte && r.contexte.repetition) || null,   // forte | ...
    securite: r.securite || 'ok',                                // ok | vigilance | alerte
    sabotage: r.sabotage_principal || null,
    axe: r.axe || null,
    profilType: r.profil_type || 'net',
    scoresPattern: r.tous_les_scores_pattern || {},
    dateTest: r.dateTest || Date.now(),
  };
}

/* ---- {{variable}} interpolation ---------------------------------------- *
   Known tokens map onto ctx. Unknown tokens are left untouched so an authoring
   typo is visible rather than silently blanked.                              */
function interp(str, ctx) {
  if (str == null) return '';
  const map = {
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
  return String(str).replace(/\{\{\s*(\w+)\s*\}\}/g, (m, k) => (map[k] != null && map[k] !== '' ? map[k] : (map[k] === '' ? '' : m)));
}

/* ---- pick a value that may vary by palier ------------------------------ *
   A field can be a plain string/array, or { byPalier: { '2': X }, default: Y }.
   Falls back to default, then to the nearest authored palier, then ''.       */
function pickByPalier(val, ctx) {
  if (val == null) return null;
  if (typeof val !== 'object' || Array.isArray(val) || val.byPalier === undefined) return val;
  const bp = val.byPalier || {};
  if (bp[ctx.palier] != null) return bp[ctx.palier];
  if (val.default != null) return val.default;
  const keys = Object.keys(bp).map(Number).sort((a, b) => Math.abs(a - ctx.palier) - Math.abs(b - ctx.palier));
  return keys.length ? bp[keys[0]] : '';
}

/* same idea, keyed by the secondary mechanism */
function pickBySecondaire(val, ctx) {
  if (val == null || typeof val !== 'object' || val.bySecondaire === undefined) return val;
  const bs = val.bySecondaire || {};
  return (ctx.secondaire && bs[ctx.secondaire] != null) ? bs[ctx.secondaire] : (val.default != null ? val.default : '');
}

function resolveText(val, ctx) {
  val = pickBySecondaire(pickByPalier(val, ctx), ctx);
  if (Array.isArray(val)) {
    return val
      .map((p) => pickBySecondaire(pickByPalier(p, ctx), ctx))
      .map((p) => interp(p, ctx))
      .filter(Boolean);
  }
  return interp(val, ctx);
}

/* a conditional fragment: { if: {key:value...}, text } or { ifFlag:'basculeDeeper', text } */
function condPasses(cond, ctx) {
  if (!cond) return true;
  if (cond.ifFlag) return !!ctx[cond.ifFlag];
  if (cond.if) {
    return Object.keys(cond.if).every((k) => {
      const want = cond.if[k];
      return Array.isArray(want) ? want.indexOf(ctx[k]) !== -1 : ctx[k] === want;
    });
  }
  return true;
}

/* resolve an array of conditional fragments down to the ones that apply */
function resolveCallouts(list, ctx) {
  if (!Array.isArray(list)) return [];
  return list
    .filter((c) => condPasses(c, ctx))
    .map((c) => ({ tone: c.tone || 'note', text: interp(resolveText(c.text, ctx), ctx) }))
    .filter((c) => c.text);
}

/* ---- resolve a single block definition into a render-ready block -------- */
function resolveBlock(def, ctx) {
  // a whole block can be gated by a condition
  if (def.when && !condPasses(def.when, ctx)) return null;

  const out = { id: def.id, type: def.type, zone: def.zone || 'free' };
  if (def.kicker) out.kicker = interp(resolveText(def.kicker, ctx), ctx);
  if (def.title) out.title = interp(resolveText(def.title, ctx), ctx);
  if (def.lead) out.lead = interp(resolveText(def.lead, ctx), ctx);

  if (def.paras) out.paras = [].concat(resolveText(def.paras, ctx)).filter(Boolean);
  if (def.callouts) out.callouts = resolveCallouts(def.callouts, ctx);

  // visuals carry a spec the renderer draws; we feed live values in
  if (def.type === 'visual') {
    out.visual = def.visual;
    out.data = computeVisualData(def.visual, ctx);
  }
  if (def.type === 'bookcards') {
    const bk = pickByPalier(def.books, ctx) || [];
    out.books = (Array.isArray(bk) ? bk : []).map((b) => ({
      title: b.title, author: b.author, price: b.price || '', url: b.url || '',
      cover: b.cover || '', blurb: interp(b.blurb || '', ctx),
    }));
  }
  if (def.type === 'exercises') {
    const exs = pickByPalier(def.exercises, ctx) || [];
    out.exercises = (Array.isArray(exs) ? exs : []).map((e) => ({
      label: interp(resolveText(e.label, ctx), ctx),
      body: interp(resolveText(e.body, ctx), ctx),
    }));
  }
  if (def.type === 'cta') out.cta = { label: interp(resolveText(def.label, ctx), ctx) };
  if (def.type === 'identityCard') { out.fields = resolveIdentityFields(def, ctx); }

  return out;
}

/* the synthesis identity card (VISUEL 4) reads straight from ctx */
function resolveIdentityFields(def, ctx) {
  return {
    profil: ctx.nom,
    dominantScore: ctx.dominantScore,
    secondaire: ctx.secondaireNom,
    secondaireScore: ctx.secondaireScore,
    palier: ctx.palier,
    palierLibelle: ctx.palierLibelle,
    bascule: ctx.bascule,
    sabotage: ctx.sabotage,
    axe: ctx.axe,
  };
}

/* visuals: the assembler only computes the data; the renderer owns the look. */
function computeVisualData(visual, ctx) {
  switch (visual && visual.kind) {
    case 'anchorScale':
      return { position: ctx.palier, bascule: ctx.bascule, libelle: ctx.palierLibelle };
    default:
      return {};
  }
}

/* ============================================================================
   MAIN  .  assembleReport(content, result, opts) -> { meta, free, paid }
   `zones` lets the caller drop the paid zone entirely (unpaid visitor).
   ========================================================================== */
export function assembleReport(content, result, opts = {}) {
  const ctx = buildContext(result, opts);
  const wantPaid = opts.zones !== 'free';   // 'free' = free only; default = both

  const free = [];
  const paid = [];
  (content.blocks || []).forEach((def) => {
    const zone = def.zone || 'free';
    if (zone === 'paid' && !wantPaid) return;
    const b = resolveBlock(def, ctx);
    if (!b) return;
    (zone === 'paid' ? paid : free).push(b);
  });

  return {
    meta: {
      profil: ctx.profil, code: ctx.code, nom: ctx.nom, accent: content.accent || '#46934A',
      palier: ctx.palier, palierLibelle: ctx.palierLibelle,
      secondaire: ctx.secondaire, secondaireNom: ctx.secondaireNom,
      statut: ctx.statut, lang: ctx.lang, dateTest: ctx.dateTest,
      hasPaid: wantPaid && paid.length > 0,
    },
    free,
    paid: wantPaid ? paid : [],
  };
}
