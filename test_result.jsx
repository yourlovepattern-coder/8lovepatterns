/* ============================================================================
   8LovePatterns — RÉSULTAT → OFFRE  (design validé, page unique)
   ----------------------------------------------------------------------------
   Portage 1:1 de offre-miroir-REFERENCE.html : le design est FIGÉ et fourni,
   on le reproduit à l'identique (bandes de couleur alternées, typographie,
   espacements base-8, carte Ancre signature, offre + buybox, science 2 axes,
   accordéon FAQ). Le CSS du gabarit est porté tel quel, scopé sous
   .lp-offer-layer, en réutilisant les tokens de colors_and_type.css (le teal
   = --fam-ancre, corail/or/paper/encre, Bricolage + Hanken). Seuls --teal-700,
   --teal-card et --rope sont définis localement (absents des tokens globaux).

   Bandes, dans l'ordre du gabarit :
     hero (teal) · loop (crème) · cost (indigo) · offer (crème) ·
     science (blanc) · faq + clôture (crème-2).

   RÈGLES : un seul mécanisme affiché (le figé, R.pattern_dominant), jamais de
   double titre ni de pourcentage. Passages par palier instanciés avec le cran
   réel (LP_ANCHOR_TIERS) ; l'offre vise un cran vers Clear. Rendu en couche
   plein écran (position:fixed) qui recouvre le shell du test — aucune nav,
   aucun widget de langue ; seule sortie = le CTA (startPlanCheckout inchangé).
   Le moteur, /functions et la route sécure (SecureResult) ne changent pas.
   ========================================================================== */
const { useState: rsUseState, useEffect: rsUseEffect, useRef: rsUseRef, useMemo: rsUseMemo } = React;

/* ---- Micro-textes (conservés : utilisés par la route sécure + l'écran d'attente) */
const LP_RESULT_TEXTS = {
  intro:   { fr:"Tes réponses dessinent un mécanisme précis.", en:"Your answers draw a precise mechanism." },
  retake: { fr:"Refaire le test", en:"Retake the test" },
  pendingTitle:{ fr:"Ton rapport est en préparation.", en:"Your report is in preparation." },
  pendingBody: { fr:"Le rapport complet rédigé arrive très bientôt. Ton résultat est gardé en attendant.",
                 en:"The complete written report is coming very soon. Your result is kept safe in the meantime." },
  pendingBack: { fr:"Revenir à mon résultat", en:"Back to my result" },
};

/* ---- Paliers d'Ancre NOMMÉS (surface -> fond), indexés par ancre_position -- *
   v0 Clear · v1 Slipping · v2 Snagged · v3 Hooked · v4 Buried. */
const LP_ANCHOR_TIERS = ['Clear', 'Slipping', 'Snagged', 'Hooked', 'Buried'];
/* Descriptions courtes du gabarit, universelles (mêmes 5 crans pour les 8). */
const LP_TIER_DESC = [
  'You feel it coming.',
  'You catch it live.',
  'You know, do it anyway.',
  'You understand it, always too late.',
  'The problem is the other person.',
];

/* ---- pattern key -> code archétype (art assets/archetypes/<code>.png) ----- */
const LP_PATTERN_CODE = {
  'Miroir':'mir', 'Fugitif':'fug', 'Bastion':'bas', 'Guetteur':'gue',
  'Sauveur':'sau', 'Caméléon':'cam', 'Alchimiste':'alc', 'Incendiaire':'inc',
};

/* ---- Bande science : 3 fondateurs (conservée : utilisée par la route sécure) */
const LP_SCIENCE = [
  { img:'bowlby', name:'John Bowlby',
    lines:['Father of attachment theory.', 'Proved the bonds we form early shape how we love for life.'] },
  { img:'ainsworth', name:'Mary Ainsworth',
    lines:['Mapped the attachment styles.', 'Showed why some people cling, some pull away, some feel secure.'] },
  { img:'hazan-shaver', name:'Hazan & Shaver',
    lines:['Brought it to adult love.', 'Found that romance runs on the same attachment system.'] },
];

/* ---- result_v2 bridge ----------------------------------------------------
   The live engine emits CAPITALIZED, accented pattern keys ('Miroir', ...).
   The secure report system keys on lowercase ASCII ids ('miroir', ...). */
const LP_PROFILE_KEY = {
  'Miroir':'miroir', 'Fugitif':'fugitif', 'Bastion':'bastion', 'Guetteur':'guetteur',
  'Sauveur':'sauveur', 'Caméléon':'cameleon', 'Alchimiste':'alchimiste', 'Incendiaire':'incendiaire',
};
function lpToProfileKey(k){ return LP_PROFILE_KEY[k] || (typeof k === 'string' ? k.toLowerCase() : k); }
function lpResultV2(R){
  return Object.assign({}, R, {
    pattern_dominant: lpToProfileKey(R.pattern_dominant),
    pattern_secondaire: lpToProfileKey(R.pattern_secondaire),
    ancre_variante: lpToProfileKey(R.ancre_variante),
  });
}
const LP_RESULT_V2_KEY = 'lovepattern_result_v2';

/* ===========================================================================
   COUCHE MOUVEMENT (conservée pour la route sécure)
   ----------------------------------------------------------------------------
   Principe de sûreté : l'état VISIBLE est toujours la base. La page-offre est
   STATIQUE (aucune révélation au scroll — le gabarit n'en a pas). InView reste
   pour SecureResult / ScienceBand.
   ======================================================================== */
function lpReducedMotion(){
  try { return !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches); } catch(e){ return false; }
}
function InView({ children, delay=0, y=16, style, className='' }){
  const ref = rsUseRef(null);
  const [armed] = rsUseState(()=> !lpReducedMotion() && typeof IntersectionObserver !== 'undefined');
  const [inView, setInView] = rsUseState(false);
  rsUseEffect(()=>{
    if(!armed){ return; }
    const node = ref.current; if(!node) return;
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{ if(e.isIntersecting){ setInView(true); io.disconnect(); } });
    }, { rootMargin:'0px 0px -8% 0px', threshold:0.08 });
    io.observe(node);
    return ()=> io.disconnect();
  }, [armed]);
  const cls = 'lp-inview' + (armed?' is-armed':'') + (inView?' is-in':'') + (className?(' '+className):'');
  return <div ref={ref} className={cls} style={{ '--d': delay+'ms', '--y': y+'px', ...style }}>{children}</div>;
}
function ResultMotionStyles(){
  return <style>{`
    .lp-inview.is-armed{ opacity:0; transform:translateY(var(--y,16px)); will-change:transform,opacity; }
    .lp-inview.is-armed.is-in{ opacity:1; transform:none;
      transition: opacity .6s cubic-bezier(.22,.61,.36,1) var(--d,0ms), transform .6s cubic-bezier(.22,.61,.36,1) var(--d,0ms); }
    .lp-sci-card{ transition: transform .24s cubic-bezier(.22,.61,.36,1), box-shadow .24s ease; }
    .lp-sci-card:hover{ transform:translateY(-6px); box-shadow:var(--sh-md); }
    .lp-sci-portrait{ transition: transform .3s cubic-bezier(.22,.61,.36,1); }
    .lp-sci-card:hover .lp-sci-portrait{ transform:scale(1.045); }
    @media (prefers-reduced-motion: no-preference){
      .lp-anim-perso{ opacity:0; animation: lpPersoIn .75s cubic-bezier(.22,.61,.36,1) .05s both; will-change:transform,opacity; }
      .lp-anim-fade{ opacity:0; animation: lpFade .5s ease-out both; }
    }
    @keyframes lpPersoIn{ from{ opacity:0; transform:translateY(26px) scale(.96); } to{ opacity:1; transform:none; } }
    @keyframes lpFade{ from{ opacity:0; } to{ opacity:1; } }
  `}</style>;
}

/* ===========================================================================
   OFFRE — helpers par mécanisme (le figé uniquement)
   ======================================================================== */
function lpOffer(){ return (window.LP_TEST && window.LP_TEST.offer) || { quiet:{}, region:{}, loop:{}, loopAnchor:{}, cost:{}, deliver:{} }; }
function lpMechName(R){
  const k = lpToProfileKey(R.pattern_dominant);
  const fc = window.LP_FREE_CONTENT && window.LP_FREE_CONTENT[k];
  if(fc && fc.nom) return fc.nom;
  const T = window.LP_TEST;
  const p = ((T && T.patterns) || []).find(x=>x.key===R.pattern_dominant);
  return (p && p.en) || 'The Mirror';
}
function lpMechShort(R){ return lpMechName(R).replace(/^the\s+/i, ''); }
function lpTierName(pos){ return LP_ANCHOR_TIERS[Math.max(0, Math.min(4, pos|0))]; }
function lpNextTier(pos){ return LP_ANCHOR_TIERS[Math.max(0, Math.min(4, pos|0) - 1)]; }   /* un cran vers Clear */
function lpRegion(R){ return lpOffer().region[R.pattern_dominant] || 'anxious'; }
/* boucle : Miroir = 5 étapes validées ; les autres = visuel loop free_content. */
function lpLoop(R){
  const o = lpOffer().loop[R.pattern_dominant];
  if(o && Array.isArray(o.steps)) return { steps:o.steps, anchor:(o.anchor==null?2:o.anchor) };
  const k = lpToProfileKey(R.pattern_dominant);
  const fc = window.LP_FREE_CONTENT && window.LP_FREE_CONTENT[k];
  let steps = [];
  if(fc && Array.isArray(fc.blocks)){
    const v = fc.blocks.map(b=>b && b.visual).filter(x=> x && x.kind==='loop')[0];
    if(v && Array.isArray(v.steps)) steps = v.steps;
  }
  const a = lpOffer().loopAnchor[R.pattern_dominant];
  return { steps, anchor:(a==null?2:a) };
}
/* coût : { lead, punch }. Miroir verbatim ; autres = paragraphe milieu Halte 1. */
function lpCost(R){
  const c = lpOffer().cost[R.pattern_dominant];
  if(c && typeof c === 'object') return { lead:c.lead||'', punch:c.punch||'' };
  const rv = (((window.LP_TEST.haltes||{}).reveals||{})[R.pattern_dominant] || {}).body || [];
  return { lead: rv[1] || rv[0] || '', punch:'' };
}
/* 5 livrables : Miroir = tableau validé ; autres = objet interim -> 5 cartes. */
function lpDeliverables(R){
  const d = lpOffer().deliver[R.pattern_dominant];
  if(Array.isArray(d)) return d;
  const o = d || {};
  return [
    { name:o.catch, benefit:o.catchB },
    { name:'The 30-Day transformation plan', benefit:'A day-by-day path to take the helm back, built for where you are.' },
    { name:o.kit, benefit:o.kitB },
    { name:"What you don't see", benefit:o.blindB },
    { name:'Your reading list', benefit:'The right next step to keep going, chosen for you.' },
  ];
}

/* ---- Feuille de styles du gabarit, portée verbatim et scopée -------------- */
function OfferStyles(){
  return <style>{`
  .lp-offer-layer{
    --teal:var(--fam-ancre); --teal-soft:var(--fam-ancre-soft);
    --teal-700:#236575; --teal-card:#3B8A9C; --rope:#F0D9B5;
    --sp-3:var(--s-3); --sp-4:var(--s-4); --sp-5:var(--s-5); --sp-6:var(--s-6); --sp-7:var(--s-7); --sp-8:var(--s-8);
    font-family:var(--font-body); color:var(--ink); line-height:1.5; -webkit-font-smoothing:antialiased;
    overflow-x:hidden;
  }
  /* colonne centrée : borne les enfants à la largeur pour qu'ils s'enroulent
     (sinon un item flex align-items:center prend sa largeur max-content et
     déborde en mobile). */
  .lp-offer-layer .hero-left{ width:100%; }
  .lp-offer-layer .hero-left > *{ max-width:100%; }
  .lp-offer-layer *{ box-sizing:border-box; margin:0; padding:0; }
  .lp-offer-layer h1,.lp-offer-layer h2,.lp-offer-layer h3{ font-family:var(--font-display); letter-spacing:-.02em; line-height:1.04; text-wrap:balance; }
  .lp-offer-layer h1{ font-size:clamp(2.8rem,2rem + 3.6vw,4.6rem); font-weight:800; }
  .lp-offer-layer h2{ font-size:clamp(2rem,1.5rem + 2.4vw,3.1rem); font-weight:800; }
  .lp-offer-layer p{ text-wrap:pretty; }
  .lp-offer-layer strong,.lp-offer-layer b{ font-weight:800; }
  .lp-offer-layer .wrap{ max-width:1120px; margin:0 auto; padding:0 24px; }
  .lp-offer-layer section{ padding:var(--sp-8) 0; }
  .lp-offer-layer .band-teal{ background:var(--teal); color:#fff; }
  .lp-offer-layer .band-teal h2{ color:#fff; }
  .lp-offer-layer .band-cream{ background:var(--paper); }
  .lp-offer-layer .band-cream2{ background:var(--paper-2); }
  .lp-offer-layer .band-white{ background:var(--surface); }
  .lp-offer-layer .band-ink{ background:var(--encre); color:#fff; }
  .lp-offer-layer .band-ink h2{ color:#fff; }

  /* ===== HERO ===== */
  .lp-offer-layer .hero{ padding:var(--sp-8) 0; }
  .lp-offer-layer .hero-grid{ display:grid; grid-template-columns:minmax(0,1fr) minmax(0,1.15fr); gap:var(--sp-8); align-items:center; }
  .lp-offer-layer .hero-left{ text-align:center; display:flex; flex-direction:column; align-items:center; }
  .lp-offer-layer .hero-left h1{ color:#fff; margin-bottom:var(--sp-5); }
  .lp-offer-layer .hero-left .rule{ font-size:clamp(1.4rem,1rem + 1.4vw,1.9rem); font-weight:700; color:#EAF5F7; line-height:1.25; margin-bottom:var(--sp-7); max-width:16ch; }
  .lp-offer-layer .heart-wrap{ position:relative; width:min(340px,80%); margin-bottom:var(--sp-7); }
  .lp-offer-layer .heart-wrap .spark{ position:absolute; color:#fff; font-size:1.4rem; opacity:.9; }
  .lp-offer-layer .heart-wrap .s1{ top:2%; left:6%; } .lp-offer-layer .heart-wrap .s2{ top:6%; right:10%; } .lp-offer-layer .heart-wrap .s3{ bottom:4%; left:16%; }
  .lp-offer-layer .heart{ width:100%; aspect-ratio:1/0.92; display:block; }
  .lp-offer-layer .heart-fig{ position:absolute; left:50%; top:50%; transform:translate(-50%,-52%); width:62%; height:auto; pointer-events:none; }
  .lp-offer-layer .hero-left .caption{ font-family:var(--font-display); font-weight:800; font-size:1rem; letter-spacing:.06em; text-transform:uppercase; color:#BEE1E7; }

  /* carte Ancre */
  .lp-offer-layer .anchor-card{ position:relative; overflow:visible; background:var(--teal-card); border-radius:34px; padding:var(--sp-8) var(--sp-7) var(--sp-8) 0; min-height:560px; }
  .lp-offer-layer .rope-svg{ position:absolute; left:26px; top:22px; height:calc(100% + 8px); width:120px; z-index:1; pointer-events:none; }
  .lp-offer-layer .tiers{ position:relative; z-index:2; padding-left:150px; display:flex; flex-direction:column; justify-content:space-between; min-height:496px; }
  .lp-offer-layer .htier{ display:flex; align-items:baseline; gap:var(--sp-6); }
  .lp-offer-layer .htier .nm{ font-family:var(--font-display); font-weight:800; font-size:1.9rem; color:#fff; line-height:1; min-width:135px; }
  .lp-offer-layer .htier .ds{ font-size:1.15rem; color:#CFE6EA; }
  .lp-offer-layer .htier.here{ margin-left:-118px; background:#fff; border-radius:100px; padding:16px 28px 16px 20px; align-items:center; gap:var(--sp-5); box-shadow:0 18px 40px -12px rgba(0,0,0,.45); z-index:3; }
  .lp-offer-layer .pill-illus{ width:56px; height:56px; flex-shrink:0; border-radius:50%; background:var(--corail-soft); display:flex; align-items:center; justify-content:center; overflow:hidden; }
  .lp-offer-layer .pill-illus img{ width:100%; height:100%; object-fit:contain; }
  .lp-offer-layer .htier.here .hbox{ min-width:120px; }
  .lp-offer-layer .htier.here .hbox .nm2{ font-family:var(--font-display); font-weight:800; font-size:1.9rem; color:var(--corail); line-height:.95; }
  .lp-offer-layer .htier.here .hbox .yah{ font-family:var(--font-body); font-weight:800; font-size:.82rem; letter-spacing:.1em; color:var(--teal-700); margin-top:2px; }
  .lp-offer-layer .htier.here .ds{ color:var(--ink-2); font-size:1.2rem; font-weight:500; }

  /* ===== LOOP ===== */
  .lp-offer-layer .loop h2{ text-align:center; margin-bottom:var(--sp-7); }
  .lp-offer-layer .loop-list{ max-width:680px; margin:0 auto; }
  .lp-offer-layer .loop-row{ display:flex; align-items:center; gap:var(--sp-5); padding:var(--sp-3) 0; font-size:1.3rem; font-weight:600; color:var(--ink-2); }
  .lp-offer-layer .loop-row .n{ width:42px; height:42px; flex-shrink:0; border-radius:50%; background:var(--paper-2); color:var(--ink-3); display:flex; align-items:center; justify-content:center; font-weight:800; font-family:var(--font-display); }
  .lp-offer-layer .loop-anchor{ background:var(--teal-soft); border-radius:18px; padding:var(--sp-5) var(--sp-6); display:flex; gap:var(--sp-5); align-items:flex-start; margin:var(--sp-4) 0; }
  .lp-offer-layer .loop-anchor .n{ width:50px; height:50px; flex-shrink:0; border-radius:50%; background:var(--teal); color:#fff; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:1.45rem; font-family:var(--font-display); }
  .lp-offer-layer .loop-anchor .big{ font-family:var(--font-display); font-weight:800; font-size:1.55rem; color:var(--teal-700); margin-bottom:4px; }
  .lp-offer-layer .loop-anchor .sub{ font-size:1.1rem; color:var(--ink-2); line-height:1.4; }
  .lp-offer-layer .loop .kicker{ text-align:center; font-size:1.5rem; font-weight:800; color:var(--ink); margin-top:var(--sp-6); font-family:var(--font-display); }

  /* ===== COST ===== */
  .lp-offer-layer .cost{ text-align:center; }
  .lp-offer-layer .cost h2{ max-width:14ch; margin:0 auto var(--sp-5); }
  .lp-offer-layer .cost p{ font-size:clamp(1.3rem,1rem + 1vw,1.65rem); color:#D9D5EA; max-width:24ch; margin:0 auto; line-height:1.35; }
  .lp-offer-layer .cost p b{ color:#fff; display:block; margin-top:var(--sp-4); font-size:1.15em; }

  /* ===== OFFER ===== */
  .lp-offer-layer .offer .eyebrow{ color:var(--corail-600); text-align:center; font-weight:800; letter-spacing:.1em; text-transform:uppercase; font-size:.95rem; margin-bottom:var(--sp-4); }
  .lp-offer-layer .offer h2{ text-align:center; margin-bottom:var(--sp-5); }
  .lp-offer-layer .offer h2 .hl{ color:var(--corail); text-transform:uppercase; }
  .lp-offer-layer .offer .bridge{ text-align:center; font-size:1.4rem; color:var(--ink-2); max-width:56ch; margin:0 auto var(--sp-8); line-height:1.4; }
  .lp-offer-layer .offer .bridge b{ color:var(--ink); }
  .lp-offer-layer .offer-grid{ display:grid; grid-template-columns:minmax(0,1.15fr) minmax(0,1fr); gap:var(--sp-8); align-items:start; max-width:980px; margin:0 auto; }
  .lp-offer-layer .whats-included{ font-family:var(--font-display); font-weight:800; font-size:1.15rem; color:var(--violet); margin-bottom:var(--sp-5); }
  .lp-offer-layer .deliverables{ display:flex; flex-direction:column; gap:var(--sp-6); }
  .lp-offer-layer .deliverable{ display:flex; gap:var(--sp-5); align-items:flex-start; }
  .lp-offer-layer .deliverable .ic{ width:48px; height:48px; flex-shrink:0; border-radius:12px; background:#F2ECDF; display:flex; align-items:center; justify-content:center; }
  .lp-offer-layer .deliverable .ic svg{ color:#22B573; }
  .lp-offer-layer .deliverable .dname{ font-family:var(--font-display); font-weight:800; font-size:1.3rem; margin-bottom:2px; color:var(--ink); }
  .lp-offer-layer .deliverable .dbenefit{ font-size:1.05rem; color:var(--ink-2); line-height:1.35; }
  .lp-offer-layer .buybox .pname{ font-family:var(--font-display); font-weight:800; font-size:1.9rem; color:var(--ink); line-height:1.05; margin-bottom:var(--sp-4); }
  .lp-offer-layer .buybox{ background:var(--surface); border:2px solid var(--hairline); border-radius:24px; padding:var(--sp-7) var(--sp-6); text-align:center; position:sticky; top:20px; }
  .lp-offer-layer .price{ font-family:var(--font-display); font-weight:800; font-size:3.6rem; line-height:1; color:var(--ink); }
  .lp-offer-layer .price .once{ font-size:1.2rem; color:var(--ink-2); font-weight:600; }
  .lp-offer-layer .anchor-line{ font-size:1.05rem; color:var(--ink-2); margin:var(--sp-4) 0 var(--sp-6); line-height:1.4; }
  .lp-offer-layer .cta{ display:inline-flex; align-items:center; gap:12px; font-family:var(--font-display); font-weight:800; font-size:1.4rem; color:#fff; background:var(--corail); padding:22px 44px; border:0; border-radius:100px; text-decoration:none; cursor:pointer; transition:background .18s,transform .18s; box-shadow:0 14px 34px -10px rgba(238,99,82,.55); width:100%; justify-content:center; }
  .lp-offer-layer .cta:hover{ background:var(--corail-600); transform:translateY(-2px); }
  .lp-offer-layer .cta svg{ width:26px; height:26px; }
  .lp-offer-layer .guarantee-line{ font-size:1.05rem; color:var(--ink-2); margin-top:var(--sp-5); font-weight:600; }
  .lp-offer-layer .guarantee-line b{ color:var(--teal-700); }

  /* ===== SCIENCE ===== */
  .lp-offer-layer .science{ text-align:center; }
  .lp-offer-layer .science h2{ margin-bottom:var(--sp-4); }
  .lp-offer-layer .science .intro{ font-size:1.2rem; color:var(--ink-2); max-width:44ch; margin:0 auto var(--sp-7); line-height:1.5; }
  .lp-offer-layer .science .intro b{ color:var(--ink); }
  .lp-offer-layer .mapbox{ max-width:560px; margin:0 auto; }
  .lp-offer-layer .map-grid{ display:grid; grid-template-columns:1fr 1fr; gap:12px; }
  .lp-offer-layer .quad{ padding:var(--sp-8) var(--sp-5); border-radius:18px; font-family:var(--font-display); font-weight:800; font-size:1.15rem; color:var(--ink-3); background:var(--paper-2); position:relative; }
  .lp-offer-layer .quad.you{ background:var(--teal); color:#fff; box-shadow:0 16px 40px -14px rgba(44,126,145,.6); }
  .lp-offer-layer .quad.you .tag{ position:absolute; top:12px; left:50%; transform:translateX(-50%); font-family:var(--font-body); font-weight:800; font-size:.7rem; letter-spacing:.12em; background:#fff; color:var(--teal-700); padding:3px 10px; border-radius:100px; }
  .lp-offer-layer .quad.you .lockchip{ display:inline-flex; align-items:center; gap:6px; margin-top:8px; font-family:var(--font-body); font-size:.85rem; font-weight:600; color:#CFE6EA; }
  .lp-offer-layer .map-caption{ margin-top:var(--sp-5); font-size:1.1rem; color:var(--ink-2); max-width:44ch; margin-left:auto; margin-right:auto; line-height:1.45; }
  .lp-offer-layer .map-caption b{ color:var(--ink); }
  .lp-offer-layer .axis-note{ margin-top:var(--sp-4); font-weight:800; letter-spacing:.05em; text-transform:uppercase; color:var(--ink-3); font-size:.8rem; }
  .lp-offer-layer .founders{ margin-top:var(--sp-6); font-size:1.05rem; color:var(--ink-3); font-weight:700; }

  /* ===== FAQ ===== */
  .lp-offer-layer .faq h2{ text-align:center; margin-bottom:var(--sp-7); }
  .lp-offer-layer .acc{ max-width:760px; margin:0 auto var(--sp-8); }
  .lp-offer-layer details{ background:var(--surface); border:2px solid var(--hairline); border-radius:16px; margin-bottom:var(--sp-4); overflow:hidden; }
  .lp-offer-layer summary{ list-style:none; cursor:pointer; padding:var(--sp-5) var(--sp-6); font-family:var(--font-display); font-weight:800; font-size:1.3rem; color:var(--ink); display:flex; justify-content:space-between; align-items:center; gap:var(--sp-4); }
  .lp-offer-layer summary::-webkit-details-marker{ display:none; }
  .lp-offer-layer summary .pm{ color:var(--teal); font-size:1.8rem; font-weight:400; line-height:1; transition:transform .2s; }
  .lp-offer-layer details[open] summary .pm{ transform:rotate(45deg); }
  .lp-offer-layer details .a{ padding:0 var(--sp-6) var(--sp-5); font-size:1.15rem; color:var(--ink-2); line-height:1.5; }
  .lp-offer-layer .faq-close{ text-align:center; max-width:560px; margin:0 auto; }
  .lp-offer-layer .faq-close .illus{ width:220px; height:170px; margin:0 auto var(--sp-5); border-radius:20px; background:var(--paper-2); display:flex; align-items:center; justify-content:center; color:var(--ink-3); font-weight:600; border:2px dashed var(--hairline); overflow:hidden; }
  .lp-offer-layer .faq-close .illus img{ max-width:100%; max-height:100%; object-fit:contain; }
  .lp-offer-layer .faq-close h3{ font-family:var(--font-display); font-weight:800; font-size:2rem; margin-bottom:var(--sp-3); color:var(--ink); }
  .lp-offer-layer .faq-close p{ font-size:1.15rem; color:var(--ink-2); margin-bottom:var(--sp-6); }
  .lp-offer-layer .faq-close p b{ color:var(--ink); }
  .lp-offer-layer .faq-close .cta{ width:auto; display:inline-flex; }

  @media(max-width:860px){
    .lp-offer-layer .hero-grid,.lp-offer-layer .offer-grid{ grid-template-columns:minmax(0,1fr); gap:var(--sp-7); }
    .lp-offer-layer .buybox{ position:static; }
    .lp-offer-layer .anchor-card{ min-height:0; padding:var(--sp-7) var(--sp-6) var(--sp-7) 0; }
    .lp-offer-layer .tiers{ padding-left:130px; min-height:440px; }
  }
  @media(max-width:520px){
    .lp-offer-layer .htier .nm,.lp-offer-layer .htier.here .hbox .nm2{ font-size:1.4rem; }
    .lp-offer-layer .htier .nm{ min-width:82px; }
    .lp-offer-layer .htier{ gap:var(--s-4); }
    .lp-offer-layer .htier .ds{ font-size:1rem; }
    .lp-offer-layer .rope-svg{ left:12px; width:78px; }
    .lp-offer-layer .tiers{ padding-left:90px; }
    .lp-offer-layer .htier.here{ margin-left:-78px; gap:var(--s-3); padding:12px 16px 12px 14px; }
    .lp-offer-layer .pill-illus{ width:42px; height:42px; }
    .lp-offer-layer .htier.here .hbox{ min-width:auto; }
    .lp-offer-layer .htier.here .ds{ font-size:1rem; }
    .lp-offer-layer .loop-row{ font-size:1.15rem; }
    .lp-offer-layer .price{ font-size:2.9rem; }
    .lp-offer-layer .cta{ font-size:1.2rem; }
  }
  `}</style>;
}

/* CTA flèche partagée. */
function CtaArrow(){
  return <svg viewBox="0 0 24 24" fill="none"><path d="M4 12h16m0 0l-7-7m7 7l-7 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}

/* ---- HERO (teal) --------------------------------------------------------- */
function OfferHero({ R }){
  const [ok, setOk] = rsUseState(true);
  const mech = lpMechName(R);
  const q = lpOffer().quiet[R.pattern_dominant] || '';
  const rule = q ? q.charAt(0).toUpperCase() + q.slice(1) : '';
  const code = LP_PATTERN_CODE[R.pattern_dominant] || 'mir';
  const here = R.ancre_position|0;
  return (
    <section className="band-teal hero">
      <div className="wrap">
        <div className="hero-grid">
          <div className="hero-left">
            <h1>You're {mech}.</h1>
            <p className="rule">{rule}</p>
            <div className="heart-wrap">
              <span className="spark s1">✦</span><span className="spark s2">✦</span><span className="spark s3">✦</span>
              <svg className="heart" viewBox="0 0 100 92" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 88 C10 60 4 34 22 20 C36 9 48 20 50 32 C52 20 64 9 78 20 C96 34 90 60 50 88 Z" fill="#fff"/>
              </svg>
              {ok && <img className="heart-fig" src={`assets/archetypes/${code}.png`} alt={mech} onError={()=>setOk(false)}/>}
            </div>
            <div className="caption">Your result based on 70 years of research</div>
          </div>

          <div className="hero-right">
            <div className="anchor-card">
              <svg className="rope-svg" viewBox="0 0 120 560" fill="none" preserveAspectRatio="xMidYMin meet">
                <path d="M60 8 C88 90 34 160 60 250 C86 340 34 400 58 470" stroke="var(--rope)" strokeWidth="7" strokeLinecap="round"/>
                <g stroke="#fff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none">
                  <circle cx="57" cy="484" r="9"/>
                  <line x1="57" y1="493" x2="57" y2="552"/>
                  <line x1="40" y1="510" x2="74" y2="510"/>
                  <path d="M31 528 C31 548 43 556 57 556 C71 556 83 548 83 528"/>
                  <path d="M24 522l7 7 8-8"/>
                  <path d="M90 522l-7 7-8-8"/>
                </g>
              </svg>
              <div className="tiers">
                {LP_ANCHOR_TIERS.map((t,i)=> i===here ? (
                  <div key={t} className="htier here">
                    <span className="pill-illus"></span>
                    <div className="hbox"><div className="nm2">{t}</div><div className="yah">YOU ARE HERE</div></div>
                    <span className="ds">{LP_TIER_DESC[i]}</span>
                  </div>
                ) : (
                  <div key={t} className="htier"><span className="nm">{t}</span><span className="ds">{LP_TIER_DESC[i]}</span></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- LOOP (crème) -------------------------------------------------------- */
function OfferLoop({ R }){
  const { steps, anchor } = lpLoop(R);
  return (
    <section className="band-cream loop">
      <div className="wrap">
        <h2>The loop your answers describe.</h2>
        <div className="loop-list">
          {steps.map((s,i)=> i===anchor ? (
            <div key={i} className="loop-anchor">
              <span className="n">{i+1}</span>
              <div>
                <div className="big">{s}</div>
                <div className="sub">Right here. This split second is your anchor point, the moment the pattern takes the helm. Everything in the Map is aimed at it.</div>
              </div>
            </div>
          ) : (
            <div key={i} className="loop-row"><span className="n">{i+1}</span><span>{s}</span></div>
          ))}
          <div className="kicker">A loop you couldn't see was running you.</div>
        </div>
      </div>
    </section>
  );
}

/* ---- COST (indigo) ------------------------------------------------------- */
function OfferCost({ R }){
  /* Un profil au cran Clear tient déjà la barre : aucun coût à payer, on masque
     entièrement le bloc (pas de bande « Clear has a price »). */
  if((R.ancre_position|0) === 0) return null;
  const tier = lpTierName(R.ancre_position);
  const c = lpCost(R);
  return (
    <section className="band-ink cost">
      <div className="wrap">
        <h2>{tier} has a price.</h2>
        <p>{c.lead}{c.punch ? <b>{c.punch}</b> : null}</p>
      </div>
    </section>
  );
}

/* ---- OFFER (crème) + buybox ---------------------------------------------- */
function OfferOffer({ R, onCta, pattern }){
  const ref = rsUseRef(null);
  const fired = rsUseRef(false);
  rsUseEffect(()=>{
    const fire = ()=>{ if(fired.current) return; fired.current = true;
      window.LP_PH && window.LP_PH('paywall_viewed', pattern ? { pattern } : {});   // legacy name
      window.LP_PH && window.LP_PH('offer_viewed', pattern ? { pattern } : {}); };   // canonical funnel event
    const node = ref.current;
    if(!node || typeof IntersectionObserver === 'undefined'){ fire(); return; }
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{ if(e.isIntersecting){ fire(); io.disconnect(); } });
    }, { threshold:0.2 });
    io.observe(node);
    return ()=> io.disconnect();
  }, []);

  const tier = lpTierName(R.ancre_position);
  const next = lpNextTier(R.ancre_position);
  const isClear = (R.ancre_position|0) === 0;
  const mechShort = lpMechShort(R);
  const items = lpDeliverables(R);

  return (
    <section ref={ref} className="band-cream offer">
      <div className="wrap">
        <div className="eyebrow">One move changes this</div>
        {isClear
          ? <h2>You're holding the helm.</h2>
          : <h2>From <span className="hl">{tier}</span> to <span className="hl">{next}</span>.</h2>}
        <p className="bridge">{isClear
          ? <>Your job now is keeping it. The Map helps you <b>hold the position you've reached</b>.</>
          : <>Catch the shift while it happens, instead of on the way home. Learn how to <b>take the helm back in 30 days</b>.</>}</p>
        <div className="offer-grid">
          <div>
            <div className="whats-included">What's included</div>
            <div className="deliverables">
              {items.map((it,i)=>(
                <div key={i} className="deliverable">
                  <div className="ic"><svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M4 12.5l5 5L20 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
                  <div><div className="dname">{it.name}</div><div className="dbenefit">{it.benefit}</div></div>
                </div>
              ))}
            </div>
          </div>
          <div className="buybox">
            <div className="pname">Your {mechShort} Anchor Map</div>
            <div className="price">$29 <span className="once">once</span></div>
            <p className="anchor-line">Full access to take the helm back from the pattern that's been running you.</p>
            <button type="button" className="cta" onClick={onCta}>Take the helm back <CtaArrow/></button>
            <p className="guarantee-line"><b>7-day money-back guarantee.</b><br/>Instant access, yours forever.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- SCIENCE (blanc) ----------------------------------------------------- */
function OfferScience({ R }){
  const region = lpRegion(R);
  const quads = [
    { key:'anxious', label:'The anxious side' },
    { key:'both',    label:'Both at once' },
    { key:'secure',  label:'Secure' },
    { key:'distant', label:'The distant side' },
  ];
  return (
    <section className="band-white science">
      <div className="wrap">
        <h2>Backed by real science.</h2>
        <p className="intro">Attachment runs on two dials: how much you <b>fear distance</b>, and how much you <b>pull from closeness</b>. Together they place you in one of four regions.</p>
        <div className="mapbox">
          <div className="map-grid">
            {quads.map(qd=>{
              const you = qd.key === region;
              return (
                <div key={qd.key} className={'quad' + (you ? ' you' : '')}>
                  {you && <span className="tag">YOUR REGION</span>}
                  {qd.label}
                  {you && <div className="lockchip"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><rect x="5" y="11" width="14" height="9" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M8 11V8a4 4 0 018 0v3" stroke="currentColor" strokeWidth="2"/></svg>exact spot in your Map</div>}
                </div>
              );
            })}
          </div>
          <div className="axis-note">↑ Fear of distance&nbsp;&nbsp;·&nbsp;&nbsp;Pull from closeness →</div>
          <p className="map-caption">Your free result already shows your region. <b>Your exact point on the map, and what it means, is in your full Map.</b></p>
          <p className="founders">Grounded in the work of Bowlby, Ainsworth, and Hazan &amp; Shaver.</p>
        </div>
      </div>
    </section>
  );
}

/* ---- FAQ (crème-2) + clôture --------------------------------------------- */
function OfferFaq({ R, onCta }){
  const [ok, setOk] = rsUseState(true);
  const tier = lpTierName(R.ancre_position);
  const next = lpNextTier(R.ancre_position);
  const isClear = (R.ancre_position|0) === 0;
  const mechShort = lpMechShort(R);
  const code = LP_PATTERN_CODE[R.pattern_dominant] || 'mir';
  return (
    <section className="band-cream2 faq">
      <div className="wrap">
        <h2>Before you decide.</h2>
        <div className="acc">
          <details open>
            <summary>What exactly am I getting?<span className="pm">+</span></summary>
            <div className="a">A personalized report built from your answers, your {mechShort} Anchor Map. It lays out the exact loop running you, your spot on the anchor scale, and the science map with your own coordinates, then hands you a practical set to work with: the catch move, a 30-day plan, a kit for the hardest moments, your blind spot, and a reading list. It opens on screen and stays yours to reread.</div>
          </details>
          <details>
            <summary>Is it a subscription?<span className="pm">+</span></summary>
            <div className="a">No. $29, once, and the Map is yours to keep. No free trial that quietly turns into a monthly charge, nothing to cancel later, nothing that renews. You pay one time and that's the end of it.</div>
          </details>
          <details>
            <summary>How do I get my Map after I pay?<span className="pm">+</span></summary>
            <div className="a">The moment payment goes through, your full Map opens on screen. A private link also lands in your inbox, so you can come back to it any time from any device. No account to create, nothing to install.</div>
          </details>
          <details>
            <summary>When will I actually see a change?<span className="pm">+</span></summary>
            <div className="a">The Map itself shifts something on day one, most people say seeing the loop named this precisely is the first time it stops feeling like a character flaw. The movement takes longer. The 30-day plan is built to {isClear ? <>deepen the hold you already have on the helm</> : <>carry you from {tier} to {next}</>}, one caught moment at a time, because it never tries to fight the whole pattern at once. No one changes a decade-old reflex in a weekend, and anyone promising that is selling something else.</div>
          </details>
          <details>
            <summary>Can I get a refund?<span className="pm">+</span></summary>
            <div className="a">Yes. Seven days, full refund, one email to support@8lovepatterns.com. You don't have to explain why or fill out anything.</div>
          </details>
          <details>
            <summary>What happens to my answers?<span className="pm">+</span></summary>
            <div className="a">They exist to build your Map, nothing else. No account is created, we never sell your data, and your report sits behind a private link that only you receive.</div>
          </details>
          <details>
            <summary>How do I reach you if something goes wrong?<span className="pm">+</span></summary>
            <div className="a">One email to support@8lovepatterns.com and a real person answers, usually within a day. A link that won't open, a question about your Map, a refund, anything at all.</div>
          </details>
        </div>
        <div className="faq-close">
          <div className="illus">
            {ok
              ? <img src={`assets/archetypes/${code}.png`} alt={mechShort} onError={()=>setOk(false)}/>
              : '[ illustration ]'}
          </div>
          <h3>Your {mechShort} Anchor Map</h3>
          <p>{isClear
            ? <>Keep the helm, for <b>$29, once</b>.</>
            : <>Move from {tier} to {next}, for <b>$29, once</b>.</>}</p>
          <button type="button" className="cta" onClick={onCta}>Take the helm back <CtaArrow/></button>
        </div>
      </div>
    </section>
  );
}

/* ===========================================================================
   BANDE SCIENCE — 3 fondateurs (route sécure seulement)
   ======================================================================== */
function ScienceBand(){
  return (
    <section style={{ background:'var(--paper-2)', padding:'clamp(44px,7vw,80px) clamp(20px,5vw,48px)' }}>
      <div style={{ maxWidth:1000, margin:'0 auto' }}>
        <div style={{ textAlign:'center', marginBottom:'clamp(28px,4vw,44px)' }}>
          <span style={{ fontSize:'.74rem', fontWeight:800, letterSpacing:'.16em', textTransform:'uppercase', color:'var(--fam-ancre)' }}>
            70 years of attachment research
          </span>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(240px, 1fr))', gap:'clamp(16px,2.5vw,26px)' }}>
          {LP_SCIENCE.map((s,i)=> <InView key={s.img} delay={i*80}><ScienceCard s={s}/></InView>)}
        </div>
      </div>
    </section>
  );
}
function ScienceCard({ s }){
  const [imgOk, setImgOk] = rsUseState(true);
  const initials = s.name.split(/\s|&/).filter(Boolean).map(w=>w[0]).slice(0,2).join('');
  return (
    <div className="lp-sci-card" style={{ background:'var(--surface)', border:'1px solid var(--hairline)', borderRadius:'var(--r-lg)',
      padding:'clamp(22px,3vw,30px)', boxShadow:'var(--sh-xs)', textAlign:'center', height:'100%' }}>
      <div style={{ height:'clamp(160px,42vw,200px)', margin:'0 auto 14px', display:'flex', alignItems:'flex-end', justifyContent:'center' }}>
        {imgOk
          ? <img className="lp-sci-portrait" src={`assets/science/${s.img}.png`} alt={s.name} onError={()=>setImgOk(false)}
              style={{ maxHeight:'100%', maxWidth:'94%', width:'auto', height:'auto', objectFit:'contain',
                filter:'drop-shadow(0 12px 16px rgba(15,20,45,.18))' }}/>
          : <div style={{ alignSelf:'center', width:96, height:96, borderRadius:'50%', display:'grid', placeItems:'center',
              background:'color-mix(in srgb, var(--fam-ancre) 14%, #fff)' }}>
              <span style={{ fontFamily:'var(--font-display)', fontWeight:800, fontSize:'1.7rem', color:'var(--fam-ancre)' }}>{initials}</span>
            </div>}
      </div>
      <h3 style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:'1.18rem', color:'var(--ink)', margin:'0 0 10px' }}>{s.name}</h3>
      {s.lines.map((l,i)=>(
        <p key={i} style={{ margin: i===0?'0':'6px 0 0', fontSize:'.96rem', lineHeight:1.5,
          color: i===0?'var(--ink)':'var(--ink-2)', fontWeight: i===0?600:400 }}>{l}</p>
      ))}
    </div>
  );
}

/* ===========================================================================
   PAGE RÉSULTAT SÉCURE — honnête, valorisante, SANS offre. INCHANGÉE.
   ======================================================================== */
function SecureResult({ onRestart }){
  const tx = useTx();
  const data = (window.LP_TEST.haltes && window.LP_TEST.haltes.secureResult) || { head:'', body:[] };
  const [shared, setShared] = rsUseState(false);

  function onShare(){
    const url = (window.location && window.location.origin) ? window.location.origin : 'https://8lovepatterns.com';
    const shareData = { title: '8LovePatterns', text: "I came out Clear on the 8LovePatterns attachment test.", url };
    try {
      if(navigator.share){ navigator.share(shareData).catch(()=>{}); return; }
    } catch(e){}
    try {
      if(navigator.clipboard && navigator.clipboard.writeText){
        navigator.clipboard.writeText(url).then(()=>{ setShared(true); setTimeout(()=>setShared(false), 2200); }).catch(()=>{});
      }
    } catch(e){}
  }

  return (
    <div>
      <ResultMotionStyles/>
      <section style={{ background:'var(--paper)', borderBottom:'1px solid var(--hairline)' }}>
        <div style={{ maxWidth:720, margin:'0 auto', padding:'clamp(40px,7vw,90px) clamp(20px,5vw,44px) clamp(32px,5vw,60px)', textAlign:'center' }}>
          <div className="lp-anim-perso" style={{ display:'grid', placeItems:'center', width:78, height:78, borderRadius:'50%', margin:'0 auto 22px',
            background:'var(--fam-ancre-soft)', color:'var(--fam-ancre)' }}><Icon name="anchor" size={34}/></div>
          <h1 className="lp-anim-fade" style={{ animationDelay:'.15s', fontFamily:'var(--font-display)', fontWeight:800, letterSpacing:'-.02em',
            color:'var(--ink)', fontSize:'clamp(2.2rem,1.5rem+3vw,3.4rem)', lineHeight:1.06, margin:0, textWrap:'balance' }}>{data.head}</h1>
        </div>
      </section>

      <section style={{ maxWidth:660, margin:'0 auto', padding:'clamp(32px,6vw,60px) clamp(20px,5vw,40px) 0' }}>
        {(data.body||[]).map((p,i)=>(
          <InView key={i} delay={i*70}>
            <p style={{ margin:'0 0 1.15em', fontSize:'1.12rem', lineHeight:1.72, color:'var(--ink)', textWrap:'pretty' }}>{p}</p>
          </InView>
        ))}
        <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:'14px', marginTop:'clamp(30px,5vw,46px)' }}>
          <Button size="lg" onClick={onShare}>{tx({ fr:"Partager", en:'Share this' })}</Button>
          {shared && <span style={{ color:'var(--fam-ancre)', fontSize:'.88rem', fontWeight:700 }}>{tx({ fr:'Lien copié', en:'Link copied' })}</span>}
          <Button variant="ghost" onClick={onRestart}>{tx(LP_RESULT_TEXTS.retake)}</Button>
        </div>
      </section>

      <ScienceBand/>
    </div>
  );
}

/* ---- écran provisoire d'achat --------------------------------------------- */
function PendingReport({ onBack }){
  const tx = useTx();
  const X = LP_RESULT_TEXTS;
  return (
    <div style={{ maxWidth:560, margin:'clamp(40px,10vw,110px) auto 0', textAlign:'center' }}>
      <div style={{ display:'grid', placeItems:'center', width:64, height:64, borderRadius:'50%', margin:'0 auto 20px',
        background:'var(--or-soft)', color:'#8A6516' }}><Icon name="sparkle" size={28}/></div>
      <h1 className="lp-h1">{tx(X.pendingTitle)}</h1>
      <p className="lp-lead" style={{ marginTop:14 }}>{tx(X.pendingBody)}</p>
      <div style={{ marginTop:28 }}>
        <Button variant="dark" onClick={onBack}>{tx(X.pendingBack)}</Button>
      </div>
    </div>
  );
}

/* ===========================================================================
   L'ÉCRAN DE RÉSULTAT — aiguillage sécurité / sécure / attente / OFFRE
   ======================================================================== */
function TestResult({ answers, frozen, onRestart, go }){
  const R = rsUseMemo(()=> window.LP_ENGINE.computeResultat(answers, frozen), [answers, frozen]);
  const [gateDone,setGateDone] = rsUseState(R.securite!=='alerte');
  const [pending,setPending] = rsUseState(false);
  const dev = /[?&]lpdev=1/.test(window.location.search);

  /* Persist the engine result (profile-key shape the server reads) for the CTA
     and for rapport.html's success_url round-trip. Skipped on the secure route. */
  rsUseEffect(()=>{
    if(R.secure) return;
    try { localStorage.setItem(LP_RESULT_V2_KEY, JSON.stringify(lpResultV2(R))); } catch(e){}
  }, [R]);

  /* Analytics : le résultat gratuit est à l'écran (une fois, hors écran d'attente). */
  const resultViewedRef = rsUseRef(false);
  rsUseEffect(()=>{
    if(gateDone && !pending && !resultViewedRef.current){
      resultViewedRef.current = true;
      window.LP_PH && window.LP_PH('result_viewed', R.secure ? { secure:true } : { pattern: R.pattern_dominant });
    }
  }, [gateDone, pending, R]);

  /* Analytics : la PAGE D'OFFRE est affichée — signal net "offre montrée",
     indépendant du scroll (contrairement à paywall_viewed/offer_viewed) et
     EXCLUANT la route secure. Réutilise !R.secure, la condition qui gouverne
     l'affichage du bloc d'offre / CTA (voir le `if(R.secure) return` plus bas).
     Fire une seule fois au montage du résultat d'offre (garde useRef). */
  const offerPageLoadedRef = rsUseRef(false);
  rsUseEffect(()=>{
    if(gateDone && !pending && !R.secure && !offerPageLoadedRef.current){
      offerPageLoadedRef.current = true;
      window.LP_PH && window.LP_PH('offer_page_loaded', { pattern: R.pattern_dominant });
    }
  }, [gateDone, pending, R]);

  function startPlanCheckout(){
    try {
      if (window.LP_STRIPE && typeof window.LP_STRIPE.checkoutSession === 'function') {
        window.LP_STRIPE.checkoutSession(lpResultV2(R));
        return;
      }
    } catch(e){}
    setPending(true);   /* fallback if stripe-config is unavailable */
  }

  /* Sécurité = alerte : l'écran de soutien passe TOUJOURS avant (inchangé). */
  if(R.securite==='alerte' && !gateDone){
    return <SafetyScreen onContinue={()=>setGateDone(true)} go={go}/>;
  }

  /* Route sécure : page honnête et valorisante, AUCUNE offre ni CTA d'achat. */
  if(R.secure){
    return <SecureResult onRestart={onRestart}/>;
  }

  if(pending) return <PendingReport onBack={()=>setPending(false)}/>;

  /* --- OFFRE : design validé, page unique, en couche plein écran (aucune nav,
     aucun widget de langue). Un seul mécanisme : le figé. --- */
  return (
    <div className="lp-offer-layer" style={{ position:'fixed', inset:0, zIndex:60, overflowY:'auto',
      WebkitOverflowScrolling:'touch', background:'var(--paper)' }}>
      <OfferStyles/>
      <OfferHero R={R}/>
      <OfferLoop R={R}/>
      <OfferCost R={R}/>
      <OfferOffer R={R} onCta={startPlanCheckout} pattern={R.pattern_dominant}/>
      <OfferScience R={R}/>
      <OfferFaq R={R} onCta={startPlanCheckout}/>

      {dev && (
        <div style={{ maxWidth:880, margin:'0 auto', padding:'0 24px 40px' }}>
          <details>
            <summary style={{ cursor:'pointer', fontWeight:700, fontSize:'.88rem', color:'var(--ink-3)' }}>Objet résultat (dev)</summary>
            <pre style={{ marginTop:10, background:'var(--paper-2)', border:'1px solid var(--hairline)', borderRadius:'var(--r-md)',
              padding:'14px 16px', fontSize:'.76rem', lineHeight:1.5, overflowX:'auto', color:'var(--ink-2)' }}>{JSON.stringify(R, null, 2)}</pre>
          </details>
        </div>
      )}
    </div>
  );
}

Object.assign(window, { TestResult, LP_RESULT_TEXTS });
