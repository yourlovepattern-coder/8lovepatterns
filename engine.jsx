/* ============================================================================
   8LovePatterns — Adaptive scoring engine  (MVP, calibration-ready)
   ----------------------------------------------------------------------------
   Pure logic. The item bank lives in items.jsx (window.LP_RAW_ITEMS), so weights
   stay easy to read and edit there. This file implements:
     • weighted multidimensional scoring (8 archetypes on 9 latent dimensions)
     • Anchor as a TRANSVERSAL regulation factor (never a 9th profile)
     • grip (emprise) of the dominant mechanism, moderated by the Anchor
     • internal confidence + 3-phase adaptive selection + intelligent stop 40–60

   Weights are hand-set priors, meant to be re-calibrated later on real data.
   8LovePatterns is a relationship self-reflection tool — not a clinical diagnosis.

   The engine works in the bank's archetype namespace (French keys), and maps the
   final dominant to the site's short codes (inc/gue/cam/sau/bas/fug/alc/mir).
   ========================================================================== */

/* ---- Latent dimensions -------------------------------------------------- */
const LP_DIMENSIONS = [
  'pursuit_intensity','hypervigilance','self_adaptation','rescuing',
  'emotional_fortress','withdrawal','intellectualization','external_validation',
  'anchor_regulation',
];

/* Archetype keys used inside the bank → primary latent dimension */
const LP_ARCH_DIM = {
  incendiaire:'pursuit_intensity', guetteur:'hypervigilance', cameleon:'self_adaptation',
  sauveur:'rescuing', bastion:'emotional_fortress', fugitif:'withdrawal',
  alchimiste:'intellectualization', miroir:'external_validation',
};
const LP_ARCH = Object.keys(LP_ARCH_DIM);

/* Bank archetype name → site short code (used by Result / Profile / data.jsx) */
const LP_CODE = {
  incendiaire:'inc', guetteur:'gue', cameleon:'cam', sauveur:'sau',
  bastion:'bas', fugitif:'fug', alchimiste:'alc', miroir:'mir',
};

/* Grand strategy per archetype (public copy) */
const LP_STRATEGY = {
  incendiaire:'I pursue', miroir:'I pursue', guetteur:'I control', alchimiste:'I control',
  cameleon:'I erase myself', sauveur:'I erase myself', bastion:'I protect myself', fugitif:'I flee',
};

/* 5-level Likert; converted to -2..+2 (lpVal) */
const LP_LIKERT = [
  { v:5, label:'Completely' }, { v:4, label:'Somewhat' }, { v:3, label:'In between' },
  { v:2, label:'Not really' }, { v:1, label:'Not at all' },
];
function lpVal(likert){ return (likert||3) - 3; }   // 1..5 → -2..+2

/* Adaptive bounds */
const LP_MIN = 40;
const LP_MAX = 60;

/* ---- Bank indexes ------------------------------------------------------- */
const LP_ITEMS = (window.LP_RAW_ITEMS || []).slice();
const LP_BY_ID = {};
LP_ITEMS.forEach(it => { LP_BY_ID[it.id] = it; });

/* The archetype an item most strongly raises (max positive weight) */
function lpPrimaryArch(item){
  let best=null, bw=0;
  for (const k in item.archetypeWeights){ const w=item.archetypeWeights[k]; if(w>bw){ bw=w; best=k; } }
  return best;
}
/* For an anchor_contextualized item, the mechanism it regulates = the (dampened)
   archetype key present in its weights (most negative). */
function lpAnchorContext(item){
  let ctx=null, mn=0;
  for (const k in item.archetypeWeights){ const w=item.archetypeWeights[k]; if(w<mn){ mn=w; ctx=k; } }
  return ctx || lpPrimaryArch(item);
}

/* Phase-1 core: all phase==='core' items, ordered for variety (round-robin the
   per-archetype mechanism items, then weave in core contrast + Anchor items).
   The bank ships ~23 core items → "≈22–24 fixed core". */
const LP_CORE_ORDER = (function(){
  const core = LP_ITEMS.filter(i => i.phase==='core');
  const mech = core.filter(i => i.itemType==='mechanism' || i.itemType==='situation');
  const rest = core.filter(i => i.itemType!=='mechanism' && i.itemType!=='situation');
  const byArch = {}; LP_ARCH.forEach(a => byArch[a] = mech.filter(i => lpPrimaryArch(i)===a));
  const order = [];
  for (let round=0; round<4; round++){
    LP_ARCH.forEach(a => { if(byArch[a][round]) order.push(byArch[a][round].id); });
  }
  // weave the remaining core items (anchors + contrasts) roughly every 5
  rest.forEach((it,k)=>{ const pos = Math.min(order.length, 4 + k*5); order.splice(pos, 0, it.id); });
  return order;
})();

/* ============================================================================
   SCORING — recomputed from scratch on every answer (cheap, deterministic).
   ========================================================================== */
function LP_score(answers){
  const archRaw={}, archMax={}, archPos={}, archFacets={};
  const dimRaw={}, dimMax={};
  let anchorRaw=0, anchorMax=0, anchorItems=0;     // anchorItems = dedicated anchor items only
  const anchorCtxByArch={};                        // normalized anchor responses per regulated archetype
  const contrastPairs={};                          // answered contrast items per "a|b"

  LP_ARCH.forEach(a=>{ archRaw[a]=0; archMax[a]=0; archPos[a]=0; archFacets[a]=new Set(); });
  LP_DIMENSIONS.forEach(d=>{ dimRaw[d]=0; dimMax[d]=0; });

  for (const id in answers){
    const it = LP_BY_ID[id]; if(!it) continue;
    const val = lpVal(answers[id]);                // -2..+2

    // 1–3 · archetypes (positive AND negative weights both count)
    for (const k in it.archetypeWeights){
      const w = it.archetypeWeights[k];
      if(archRaw[k]===undefined){ archRaw[k]=0; archMax[k]=0; archPos[k]=0; archFacets[k]=new Set(); }
      archRaw[k] += val*w;
      archMax[k] += 2*Math.abs(w);
      if(w>0){ archPos[k] += 1; if(it.facet) archFacets[k].add(it.facet); }
    }
    // 4 · latent dimensions (primary full, secondary half)
    if(it.primaryDimension && dimRaw[it.primaryDimension]!==undefined){ dimRaw[it.primaryDimension]+=val; dimMax[it.primaryDimension]+=2; }
    if(it.secondaryDimension && dimRaw[it.secondaryDimension]!==undefined){ dimRaw[it.secondaryDimension]+=val*0.5; dimMax[it.secondaryDimension]+=1; }
    // 5 · Anchor (any item with anchorWeight contributes; only dedicated items are "counted")
    if(it.anchorWeight){
      anchorRaw += val*it.anchorWeight; anchorMax += 2*Math.abs(it.anchorWeight);
      if(it.itemType==='anchor_direct' || it.itemType==='anchor_contextualized'){
        anchorItems++;
        if(it.itemType==='anchor_contextualized'){
          const ctx = lpAnchorContext(it);
          if(ctx) (anchorCtxByArch[ctx]=anchorCtxByArch[ctx]||[]).push((val+2)/4*100);
        }
      }
    }
    // 7 · contrast pair bookkeeping
    if(it.itemType==='contrast' && it.discriminatesBetween && it.discriminatesBetween.length===2){
      const key = it.discriminatesBetween.slice().sort().join('|');
      contrastPairs[key]=(contrastPairs[key]||0)+1;
    }
  }

  // normalize raw[-max,+max] → 0..100 (50 = neutral / unmeasured)
  const norm = (raw,max)=> max>0 ? Math.round(((raw+max)/(2*max))*100) : 50;

  const archScore={}; LP_ARCH.forEach(a=> archScore[a]=norm(archRaw[a],archMax[a]));
  const dimScore={};  LP_DIMENSIONS.forEach(d=> dimScore[d]=norm(dimRaw[d],dimMax[d]));
  const anchorScore = norm(anchorRaw, anchorMax);

  const ranking = LP_ARCH.map(a=>({ code:a, score:archScore[a], items:archPos[a]||0,
    facets:(archFacets[a]?archFacets[a].size:0) })).sort((x,y)=> y.score-x.score);

  const top1=ranking[0], top2=ranking[1], top3=ranking[2];
  const gap = top1.score - top2.score;

  return { archScore, dimScore, anchorScore, anchorItems, anchorCtxByArch,
    contrastPairs, ranking, top1, top2, top3, gap, archFacets, archPos,
    answeredCount: Object.keys(answers).length };
}

/* ---- Grip (emprise) of the dominant mechanism --------------------------- *
   emprise ≈ activation of the leader + intensity − contextual Anchor for that
   same leader − general Anchor. High Anchor → the pattern is more "integrated". */
function LP_grip(state){
  const top1 = state.top1.code;
  const activation = state.top1.score;                                   // 0..100
  const ctx = state.anchorCtxByArch[top1];
  const ctxAnchor = (ctx && ctx.length) ? (ctx.reduce((s,v)=>s+v,0)/ctx.length) : null;
  let grip = activation
    - 0.45 * Math.max(0, state.anchorScore - 50)                         // general regulation
    - 0.40 * (ctxAnchor!=null ? Math.max(0, ctxAnchor - 50) : 0);        // regulation of THIS mechanism
  grip = Math.round(Math.max(0, Math.min(100, grip)));
  let level = 'Emerging';
  if(grip >= 66) level = 'Very active';
  else if(grip < 42) level = 'Integrated';
  return { gripScore:grip, gripLevel:level, ctxAnchor };
}

/* ---- Internal confidence in the dominant result ------------------------- */
function LP_confidence(state){
  const strength = state.top1.score;
  const sep      = Math.min(state.gap*5, 100);
  const coverage = Math.min((state.top1.facets/4)*100, 100);
  return Math.round(Math.max(0, Math.min(100, 0.45*strength + 0.40*sep + 0.15*coverage)));
}

/* ============================================================================
   PHASE 3 · INTELLIGENT STOP
   ========================================================================== */
function LP_shouldStop(state, answeredCount){
  if(answeredCount >= LP_MAX) return true;
  if(answeredCount < LP_MIN)  return false;

  const conf      = LP_confidence(state);
  const top1Items = state.top1.items;                 // items touching the leader
  const facets    = state.top1.facets;                // distinct facets covered
  const anchorOK  = state.anchorItems >= 3;           // ≥3 dedicated Anchor items
  const pairClose = state.gap < 10;
  const pairKey   = [state.top1.code, state.top2.code].sort().join('|');
  const contrastForPair = state.contrastPairs[pairKey] || 0;

  if(top1Items < 4) return false;                     // ≥4 items on the leader
  if(facets    < 3) return false;                     // several facets covered
  if(!anchorOK)     return false;                     // Anchor measured enough
  if(pairClose && contrastForPair < 2) return false;  // close pair needs ≥2 contrasts
  if(conf >= 70 && state.gap >= 10) return true;      // confident & separated → stop
  return false;
}

/* ============================================================================
   PHASE 2 · ADAPTIVE SELECTION — pick the most informative next item.
   ========================================================================== */
function LP_selectNext(state, asked){
  const askedSet = new Set(asked);
  const unused = LP_ITEMS.filter(i => !askedSet.has(i.id));
  if(!unused.length) return null;

  const t1 = state.top1.code, t2 = state.top2.code, t3 = state.top3.code;
  const top = [t1,t2,t3];
  const coveredT1 = state.archFacets[t1] || new Set();

  // 1 — close leaders → separate them with a contrast item
  if(state.gap < 12){
    let c = unused.filter(i => i.itemType==='contrast'
      && i.discriminatesBetween.includes(t1) && i.discriminatesBetween.includes(t2));
    if(c.length) return c[0].id;
    c = unused.filter(i => i.itemType==='contrast'
      && (i.discriminatesBetween.includes(t1) || i.discriminatesBetween.includes(t2)));
    if(c.length) return c[0].id;
  }
  // 2 — leader clear but Anchor under-measured → contextualized Anchor on the leader
  if(state.anchorItems < 3 || !(state.anchorCtxByArch[t1])){
    let c = unused.filter(i => i.itemType==='anchor_contextualized' && lpAnchorContext(i)===t1);
    if(c.length) return c[0].id;
    c = unused.filter(i => i.itemType==='anchor_direct' || i.itemType==='anchor_contextualized');
    if(c.length) return c[0].id;
  }
  // 3 — broaden facet coverage of the leader
  let c = unused.filter(i => (i.archetypeWeights[t1]||0) > 0 && i.facet && !coveredT1.has(i.facet));
  if(c.length) return c[0].id;
  // 4 — otherwise, the item that informs the most-probable profiles
  c = unused.filter(i => Object.keys(i.archetypeWeights).some(k => top.includes(k) && i.archetypeWeights[k] > 0));
  if(c.length) return c[0].id;
  // 5 — fallback
  return unused[0].id;
}

/* Estimated length label for the progress UI (adaptive, not fixed) */
function LP_estimatedTotal(){ return 'usually 40–60'; }

/* ============================================================================
   PUBLIC RESULT — one dominant profile is shown; everything else stays internal.
   ========================================================================== */
function LP_deriveResult(answers){
  const state = LP_score(answers);
  const grip  = LP_grip(state);
  const conf  = LP_confidence(state);

  const a = state.anchorScore;
  let anchorLabel = 'Developing';
  if(a >= 66) anchorLabel = 'Steady';
  else if(a < 42) anchorLabel = 'Still forming';

  const dims = LP_DIMENSIONS.filter(d=>d!=='anchor_regulation')
    .map(d=>({ d, s:state.dimScore[d] })).sort((x,y)=>y.s-x.s);

  const toCode = r => ({ code:LP_CODE[r.code], arch:r.code, score:r.score });

  return {
    dominant: LP_CODE[state.top1.code],            // ← the only public field used by Result
    strategy: LP_STRATEGY[state.top1.code],
    // ----- internal data (kept for future calibration; not shown publicly) -----
    top: [toCode(state.top1), toCode(state.top2), toCode(state.top3)],
    archScore: state.archScore,
    dimScore: state.dimScore,
    anchorScore: state.anchorScore,
    anchorLabel,
    gripScore: grip.gripScore,
    gripLevel: grip.gripLevel,                     // 'Very active' | 'Emerging' | 'Integrated'
    confidence: conf,
    strongDims: dims.slice(0,3).map(x=>x.d),
    weakDims: dims.slice(-3).map(x=>x.d),
    askedCount: state.answeredCount,
    facetsCovered: state.top1.facets,
  };
}

/* ============================================================================
   PREMIUM  .  resultData  (saved to localStorage for the premium report page)
   ----------------------------------------------------------------------------
   The premium report (premium-report.html) is a separate page. It does NOT run
   the engine; it only reads the object we save here. This keeps the funnel
   simple: the test computes everything once, stores it, the report reads it.

   We reuse the rich scores the engine already produced (no second scoring
   system). The 8 measured archetype scores become user-facing "trigger
   dimensions", plus the Anchor. Everything is normalized 0..100.
   ========================================================================== */

/* localStorage key used by the premium report page. */
const LP_RESULT_KEY = 'lovepattern_resultData';

/* Bank archetype name → premium trigger-dimension id (1:1, both are measured). */
const LP_DIM_OF_ARCH = {
  incendiaire:'chaudFroid', guetteur:'silence', alchimiste:'hyperanalyse',
  sauveur:'sauvetage', bastion:'controle', fugitif:'distance',
  cameleon:'effacement', miroir:'flouRelationnel',
};

/* Anchor level from the 0..100 anchor score, per the product thresholds:
     0..39  → Très actif   (very active)
     40..69 → En progression (in progress)
     70..100→ Intégré       (integrated)                                       */
function LP_anchorLevel(anchorScore){
  if(anchorScore >= 70) return 'Intégré';
  if(anchorScore >= 40) return 'En progression';
  return 'Très actif';
}

/* Build the resultData object from a full engine result (LP_deriveResult). */
function LP_buildResultData(result){
  const A = result.archScore || {};
  const dimensions = {};
  for(const arch in LP_DIM_OF_ARCH){
    dimensions[LP_DIM_OF_ARCH[arch]] = (A[arch] != null ? A[arch] : 50);
  }
  dimensions.ancre = result.anchorScore != null ? result.anchorScore : 50;

  // top 3 trigger dimensions (Anchor excluded) by score → declencheurs principaux
  const declencheursPrincipaux = Object.keys(dimensions)
    .filter(id => id !== 'ancre')
    .sort((a,b) => dimensions[b] - dimensions[a])
    .slice(0,3);

  const dominantArch = (result.top && result.top[0] && result.top[0].arch) || 'bastion';

  return {
    profilDominant: dominantArch,                 // full bank key (e.g. "incendiaire")
    code: result.dominant,                        // short code (e.g. "inc")
    scoreProfil: (result.top && result.top[0] && result.top[0].score) || 50,
    strategy: result.strategy || '',
    niveauAncre: LP_anchorLevel(dimensions.ancre),
    gripLevel: result.gripLevel || 'Emerging',
    dimensions,
    declencheursPrincipaux,                        // array of dimension ids
    dateTest: new Date().toISOString(),
  };
}

/* Build + persist. Called by App.onResult right after the test finishes. */
function LP_saveResultData(result){
  try {
    const data = LP_buildResultData(result);
    localStorage.setItem(LP_RESULT_KEY, JSON.stringify(data));
    return data;
  } catch(e){ return null; }
}

Object.assign(window, {
  LP_DIMENSIONS, LP_ARCH, LP_ARCH_DIM, LP_CODE, LP_STRATEGY, LP_LIKERT, LP_MIN, LP_MAX,
  LP_ITEMS, LP_BY_ID, LP_CORE_ORDER,
  LP_score, LP_grip, LP_confidence, LP_shouldStop, LP_selectNext,
  LP_estimatedTotal, LP_deriveResult,
  LP_RESULT_KEY, LP_DIM_OF_ARCH, LP_anchorLevel, LP_buildResultData, LP_saveResultData,
});
