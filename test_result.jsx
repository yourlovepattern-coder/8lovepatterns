/* ============================================================================
   8LovePatterns — ÉCRAN DE RÉSULTAT GRATUIT (page de valeur perçue)
   ----------------------------------------------------------------------------
   Refonte orientée valeur perçue avant achat. De haut en bas :
     1. HERO illustré, quasi pleine page : ancre qui plonge (asset commun) +
        perso du mécanisme (art existant) + nom, force %, palier d'Ancre NOMMÉ,
        phrase vécue.
     2. Bande SCIENCE « 70 years of attachment research » (3 fondateurs).
     3. PROFIL GRATUIT COMPLET du mécanisme (zone "free") — réassemblé par le
        tunnel sécurisé /api/get-report-free et rendu par window.LP_RENDER, donc
        STRICTEMENT le même contenu free que rapport.html (_content/*.js).
     4. Ligne de valeur perçue.
     5. Sceau thérapeute (placeholder structuré, sans nom/photo inventés).
     6. Avis clients (placeholder structuré, aucun faux avis).
     7. Rapport complet payant + garantie 7 jours + CTA.
   Le moteur ne change pas, seul l'affichage. Le garde-fou sécurité (alerte)
   passe toujours avant. L'objet technique n'apparaît qu'avec ?lpdev=1.
   ========================================================================== */
const { useState: rsUseState, useEffect: rsUseEffect, useRef: rsUseRef, useMemo: rsUseMemo } = React;

/* ---- Micro-textes (FR validé du document + EN fidèle) -------------------- */
const LP_RESULT_TEXTS = {
  intro:   { fr:"Tes réponses dessinent un mécanisme précis.", en:"Your answers draw a precise mechanism." },
  presence:{ fr:"Présent chez toi à {N} %", en:"Present in you at {N}%" },
  presenceMixte:{ fr:"Présents chez toi à {N} % chacun", en:"Present in you at {N}% each" },
  melange: { fr:"Un autre mécanisme est très proche derrière. Ton rapport en tient compte.",
             en:"Another mechanism is right behind it. Your report takes it into account." },
  mixte:   { fr:"Deux mécanismes cohabitent chez toi à parts égales. C'est rare, et ça change la lecture.",
             en:"Two mechanisms live in you in equal measure. It is rare, and it changes the reading." },
  surface:    { fr:"Surface", en:"Surface" },
  fond:       { fr:"Fond", en:"Bottom" },
  anchorLabel:{ fr:"Ton Ancre", en:"Your Anchor" },
  porteTitle:   { fr:"Ton rapport complet est prêt", en:"Your complete report is ready" },
  porteAccroche:{ fr:"Ce que tu viens de lire, c'est la surface. Ton rapport complet descend là où ça se joue vraiment.",
                  en:"What you just read is the surface. Your complete report goes down to where it really plays out." },
  cards: [
    { title:{ fr:"Ton deuxième mécanisme", en:"Your second mechanism" },
      teaser:{ fr:"Un autre schéma est presque aussi fort chez toi. Il change toute la lecture.",
               en:"Another pattern is almost as strong in you. It changes the whole reading." } },
    { title:{ fr:"Ta boucle complète", en:"Your complete loop" },
      teaser:{ fr:"Le scénario exact que tu rejoues, étape par étape, et où il se casse.",
               en:"The exact scenario you keep replaying, step by step, and where it breaks." } },
    { title:{ fr:"Ton levier de sabotage", en:"Your sabotage lever" },
      teaser:{ fr:"La façon précise dont ton mécanisme abîme tes relations, mesurée par tes réponses.",
               en:"The precise way your mechanism damages your relationships, measured by your answers." } },
    { title:{ fr:"Ta carte des 8 schémas", en:"Your map of the 8 patterns" },
      teaser:{ fr:"Tes scores détaillés sur les huit mécanismes.",
               en:"Your detailed scores across the eight mechanisms." } },
    { title:{ fr:"En couple : ta dynamique", en:"In a relationship: your dynamic" },
      teaser:{ fr:"Comment ton schéma danse avec celui de l'autre, et pourquoi vous tournez en rond.",
               en:"How your pattern dances with the other person's, and why you keep going in circles." } },
    { title:{ fr:"Ton premier pas", en:"Your first step" },
      teaser:{ fr:"Le seul geste à faire cette semaine, adapté à ta profondeur d'Ancre.",
               en:"The one thing to do this week, adapted to your Anchor depth." } },
  ],
  cta:    { fr:"Obtenir mon rapport complet", en:"Get my full report" },
  retake: { fr:"Refaire le test", en:"Retake the test" },
  guarantee: { fr:"Garantie 7 jours, remboursé si le rapport ne te parle pas.",
               en:"7-day money-back guarantee if the report doesn't speak to you." },
  pendingTitle:{ fr:"Ton rapport est en préparation.", en:"Your report is in preparation." },
  pendingBody: { fr:"Le rapport complet rédigé arrive très bientôt. Ton résultat est gardé en attendant.",
                 en:"The complete written report is coming very soon. Your result is kept safe in the meantime." },
  pendingBack: { fr:"Revenir à mon résultat", en:"Back to my result" },

  patterns: {
    'Incendiaire': {
      signature:{ fr:"Tu mets le feu pour vérifier qu'on t'aime.", en:"You set fires to check that you are loved." } },
    'Miroir': {
      signature:{ fr:"Tu te reflètes pour te sentir exister dans le lien.", en:"You mirror the other to feel you exist in the bond." } },
    'Fugitif': {
      signature:{ fr:"Tu pars avant qu'on puisse te quitter.", en:"You leave before anyone can leave you." } },
    'Bastion': {
      signature:{ fr:"Tu te protèges si bien qu'on ne t'atteint plus.", en:"You protect yourself so well that no one reaches you anymore." } },
    'Guetteur': {
      signature:{ fr:"Tu surveilles l'amour au lieu de le vivre.", en:"You watch over love instead of living it." } },
    'Sauveur': {
      signature:{ fr:"Tu te rends indispensable pour être sûr d'être gardé.", en:"You make yourself indispensable to be sure you are kept." } },
    'Caméléon': {
      signature:{ fr:"Tu deviens ce qu'on attend pour ne pas être rejeté.", en:"You become what is expected so you will not be rejected." } },
    'Alchimiste': {
      signature:{ fr:"Tu comprends tout pour ne rien sentir.", en:"You understand everything so you feel nothing." } },
  },
};

/* ---- Paliers d'Ancre NOMMÉS (mapping validé, surface -> fond) ------------ *
   v0 Clear · v1 Slipping · v2 Snagged · v3 Hooked · v4 Buried. La phrase
   vécue de chaque palier reste celle du repo (window.LP_TEST.paliers). */
const LP_ANCHOR_TIERS = ['Clear', 'Slipping', 'Snagged', 'Hooked', 'Buried'];

/* ---- pattern key -> code archétype (art assets/archetypes/<code>.png) ----- */
const LP_PATTERN_CODE = {
  'Miroir':'mir', 'Fugitif':'fug', 'Bastion':'bas', 'Guetteur':'gue',
  'Sauveur':'sau', 'Caméléon':'cam', 'Alchimiste':'alc', 'Incendiaire':'inc',
};

/* ---- Bande science : 3 fondateurs (portraits illustrés fournis) ---------- */
const LP_SCIENCE = [
  { img:'bowlby', name:'John Bowlby',
    lines:['Father of attachment theory.', 'Proved the bonds we form early shape how we love for life.'] },
  { img:'ainsworth', name:'Mary Ainsworth',
    lines:['Mapped the attachment styles.', 'Showed why some people cling, some pull away, some feel secure.'] },
  { img:'hazan-shaver', name:'Hazan & Shaver',
    lines:['Brought it to adult love.', 'Found that romance runs on the same attachment system.'] },
];

/* ---- helpers -------------------------------------------------------------- */
function lpFill(s, map){ return s.replace(/\{(\w+)\}/g, (m,k)=> map[k]!=null ? map[k] : m); }

/* Apparition progressive : 100% CSS (.lp-reveal), état final VISIBLE comme base.*/
function Reveal({ children, style, delay=0 }){
  return <div className="lp-reveal" style={{ '--d': delay+'ms', ...style }}>{children}</div>;
}

/* ---- result_v2 bridge ----------------------------------------------------
   The live engine emits CAPITALIZED, accented pattern keys ('Miroir', ...).
   The secure report system keys on lowercase ASCII ids ('miroir', ...). We
   bridge here when persisting / posting the result the server reads. */
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
   1. EN-TÊTE — le mécanisme révélé (HÉROS) + échelle d'Ancre (secondaire)
   ----------------------------------------------------------------------------
   Hiérarchie : le PERSO en pied du mécanisme domine (grand, entier), avec son
   nom + sa force %. L'échelle de profondeur d'Ancre (Clear -> Buried) est un
   panneau secondaire compact, à côté en desktop / dessous en mobile.
   ======================================================================== */
function AnchorLadderHero({ isMixte, dominantName, secondaireName, code, force, intro, presence, rows, surface, fond }){
  const [persoOk, setPersoOk] = rsUseState(true);
  const [anchorOk, setAnchorOk] = rsUseState(true);
  const dotBg = (v)=> `color-mix(in srgb, var(--fam-ancre) ${24 + v*16}%, var(--paper))`;

  return (
    <section style={{ background:'var(--paper)', borderBottom:'1px solid var(--hairline)' }}>
      <style>{`
        .lp-hd-grid{ display:grid; grid-template-columns:1fr; gap:clamp(24px,4vw,46px); align-items:center; }
        @media (min-width:861px){ .lp-hd-grid{ grid-template-columns:1.08fr .92fr; } }
      `}</style>
      <div style={{ maxWidth:1080, margin:'0 auto', padding:'clamp(28px,5vw,56px) clamp(20px,5vw,44px) clamp(30px,4vw,48px)' }}>
        <div className="lp-hd-grid">

          {/* HÉROS : grand perso en pied + nom + force % */}
          <Reveal>
            <div style={{ textAlign:'center' }}>
              {persoOk
                ? <img src={`assets/archetypes/${code}.png`} alt={dominantName} onError={()=>setPersoOk(false)}
                    style={{ width:'auto', height:'clamp(270px,44vw,410px)', maxWidth:'100%', display:'block', margin:'0 auto',
                      filter:'drop-shadow(0 26px 30px rgba(15,20,45,.28))' }}/>
                : null}
              <p style={{ margin:'clamp(8px,1.6vw,16px) 0 0', fontSize:'.86rem', fontWeight:700, letterSpacing:'.03em', color:'var(--ink-3)' }}>{intro}</p>
              <h1 style={{ fontFamily:'var(--font-display)', fontWeight:800, letterSpacing:'-.02em', color:'var(--ink)',
                fontSize: isMixte ? 'clamp(2rem,1.2rem+3.4vw,3.2rem)' : 'clamp(2.4rem,1.5rem+3.6vw,3.9rem)', lineHeight:1.05, margin:'6px 0 0', textWrap:'balance' }}>
                {isMixte
                  ? <span>{dominantName}<span style={{ color:'var(--ink-3)', fontWeight:400, padding:'0 .25em' }}>&amp;</span>{secondaireName}</span>
                  : dominantName}
              </h1>
              <div style={{ marginTop:16 }}>
                <span style={{ display:'inline-flex', alignItems:'center', gap:'7px', padding:'10px 22px', borderRadius:'var(--r-pill)',
                  background:'var(--encre)', color:'#fff', fontWeight:700, fontSize:'1rem' }}>{lpFill(presence, { N: force })}</span>
              </div>
            </div>
          </Reveal>

          {/* SECONDAIRE : échelle de profondeur d'Ancre, compacte */}
          <Reveal delay={70}>
            <div style={{ background:'var(--surface)', border:'1px solid var(--hairline)', borderRadius:'var(--r-xl)',
              padding:'clamp(16px,2.4vw,24px)', boxShadow:'var(--sh-xs)' }}>
              <div style={{ display:'flex', alignItems:'center', gap:'8px', marginBottom:'10px' }}>
                <Icon name="anchor" size={15} style={{ color:'var(--fam-ancre)' }}/>
                <span style={{ fontSize:'.68rem', fontWeight:800, letterSpacing:'.12em', textTransform:'uppercase', color:'var(--ink-3)' }}>Your Anchor depth</span>
              </div>
              <div style={{ position:'relative' }}>
                <div style={{ fontSize:'.6rem', fontWeight:800, letterSpacing:'.1em', textTransform:'uppercase', color:'var(--ink-3)', paddingLeft:'48px', marginBottom:'4px' }}>{surface}</div>

                {/* rail vertical : surface claire -> fond sombre */}
                <div aria-hidden="true" style={{ position:'absolute', left:'18px', top:'26px', bottom:'26px', width:'3px', borderRadius:'2px', zIndex:0,
                  background:'linear-gradient(180deg, color-mix(in srgb, var(--fam-ancre) 30%, #fff), var(--fam-ancre) 55%, var(--encre))' }}/>

                {rows.map(row=>(
                  <div key={row.v} style={{ position:'relative', zIndex:1, display:'grid', gridTemplateColumns:'37px 1fr', gap:'11px', alignItems:'center',
                    padding:'7px 10px 7px 0', marginBottom:'2px', borderRadius:'var(--r-md)',
                    background: row.here ? 'var(--fam-ancre-soft)' : 'transparent',
                    boxShadow: row.here ? 'inset 0 0 0 1.5px var(--fam-ancre)' : 'none' }}>
                    {/* marqueur : ancre au palier de l'utilisateur, sinon un point de profondeur */}
                    <div style={{ display:'grid', placeItems:'center', width:37, height:37 }}>
                      {row.here
                        ? <div style={{ width:37, height:37, borderRadius:'50%', display:'grid', placeItems:'center', background:'var(--surface)',
                            boxShadow:'0 0 0 2px var(--fam-ancre), 0 5px 12px -4px rgba(0,0,0,.3)' }}>
                            {anchorOk
                              ? <img src="assets/hero/anchor-dive.png" alt="" aria-hidden="true" onError={()=>setAnchorOk(false)}
                                  style={{ width:22, height:22, objectFit:'contain' }}/>
                              : <Icon name="anchor" size={18} style={{ color:'var(--fam-ancre)' }}/>}
                          </div>
                        : <span style={{ width:12, height:12, borderRadius:'50%', background:dotBg(row.v), boxShadow:'0 0 0 3px var(--surface)' }}/>}
                    </div>
                    {/* contenu : nom du palier + phrase vécue */}
                    <div style={{ minWidth:0 }}>
                      <div style={{ display:'flex', alignItems:'center', gap:'7px', flexWrap:'wrap' }}>
                        <span style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:'.95rem',
                          color: row.here ? 'var(--fam-ancre)' : 'var(--ink)' }}>{row.name}</span>
                        {row.here && (
                          <span style={{ fontSize:'.58rem', fontWeight:800, letterSpacing:'.06em', textTransform:'uppercase', color:'#fff',
                            background:'var(--fam-ancre)', padding:'2px 7px', borderRadius:'var(--r-pill)' }}>You are here</span>
                        )}
                      </div>
                      <p style={{ margin:'1px 0 0', fontSize:'.82rem', lineHeight:1.4,
                        color: row.here ? 'var(--ink)' : 'var(--ink-3)', fontWeight: row.here ? 500 : 400, textWrap:'pretty' }}>{row.phrase}</p>
                    </div>
                  </div>
                ))}

                <div style={{ fontSize:'.6rem', fontWeight:800, letterSpacing:'.1em', textTransform:'uppercase', color:'var(--ink-3)', paddingLeft:'48px', marginTop:'4px' }}>{fond}</div>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}

/* ===========================================================================
   2. BANDE SCIENCE — 70 years of attachment research
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
          {LP_SCIENCE.map((s)=> <ScienceCard key={s.img} s={s}/>)}
        </div>
      </div>
    </section>
  );
}
function ScienceCard({ s }){
  const [imgOk, setImgOk] = rsUseState(true);
  const initials = s.name.split(/\s|&/).filter(Boolean).map(w=>w[0]).slice(0,2).join('');
  return (
    <div style={{ background:'var(--surface)', border:'1px solid var(--hairline)', borderRadius:'var(--r-lg)',
      padding:'clamp(22px,3vw,30px)', boxShadow:'var(--sh-xs)', textAlign:'center' }}>
      {/* portrait illustré en pied (fond transparent) : contain, posé en bas */}
      <div style={{ height:'clamp(160px,42vw,200px)', margin:'0 auto 14px', display:'flex', alignItems:'flex-end', justifyContent:'center' }}>
        {imgOk
          ? <img src={`assets/science/${s.img}.png`} alt={s.name} onError={()=>setImgOk(false)}
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
   PROFIL GRATUIT COMPLET — zone "free" du mécanisme
   ----------------------------------------------------------------------------
   Affiche les blocs zone:'free' de _content/<profil>.js (prose, visuels
   anchorScale/loop/spilloverTable), au mot près, rendus par window.LP_RENDER.
   Deux sources, dans l'ordre :
     1. /api/get-report-free  (vérité serveur, avec timeout) ;
     2. fallback CLIENT si le tunnel ne répond pas : window.LP_FREE_ASSEMBLE
        + window.LP_FREE_CONTENT (free uniquement, jamais de payant), donc le
        profil gratuit s'affiche partout, même sans la fonction Netlify.
   Le bloc 'cta' final est retiré : la porte payante est gérée plus bas.
   ======================================================================== */
function FreeReport({ R }){
  const lang = (window.useLang && window.useLang().lang) || 'en';
  const mountRef = rsUseRef(null);
  const [state, setState] = rsUseState('loading');   // loading | done | empty

  rsUseEffect(()=>{
    let alive = true;
    setState('loading');
    const resultV2 = lpResultV2(R);
    const profil = resultV2.pattern_dominant;
    const wantLang = lang === 'fr' ? 'fr' : 'en';

    /* rend les blocs free d'un rapport assemblé (serveur OU client) */
    function renderReport(report){
      const blocks = ((report && report.free) || []).filter(b=> b && b.type !== 'cta');
      const mount = mountRef.current;
      if(!blocks.length || !window.LP_RENDER || !mount) return false;
      window.LP_RENDER._accent = (report.meta && report.meta.accent) || '#46934A';
      window.LP_RENDER._code = (report.meta && report.meta.code) || 'mir';
      mount.innerHTML = '';
      blocks.forEach(b=>{ try { mount.appendChild(window.LP_RENDER.renderBlock(b, {})); } catch(e){} });
      return true;
    }

    /* fallback : assemblage du free côté client (aucun contenu payant impliqué) */
    function clientFallback(){
      try {
        if(window.LP_FREE_ASSEMBLE && window.LP_FREE_CONTENT && window.LP_FREE_CONTENT[profil]){
          const report = window.LP_FREE_ASSEMBLE(window.LP_FREE_CONTENT[profil], resultV2, { lang: wantLang });
          if(alive && renderReport(report)){ setState('done'); return; }
        }
      } catch(e){}
      if(alive) setState('empty');
    }

    /* 1) tunnel serveur d'abord, avec timeout pour ne pas rester bloqué */
    const ctrl = (typeof AbortController !== 'undefined') ? new AbortController() : null;
    const to = setTimeout(()=>{ if(ctrl) ctrl.abort(); }, 6000);
    fetch('/api/get-report-free', { method:'POST', headers:{ 'content-type':'application/json' },
      body: JSON.stringify({ result: resultV2, lang: wantLang }), signal: ctrl ? ctrl.signal : undefined })
      .then(r=>{ if(!r.ok) throw new Error('status '+r.status); return r.json(); })
      .then(report=>{ clearTimeout(to); if(!alive) return; if(!renderReport(report)) clientFallback(); else setState('done'); })
      .catch(()=>{ clearTimeout(to); clientFallback(); });

    return ()=>{ alive = false; clearTimeout(to); if(ctrl){ try { ctrl.abort(); } catch(e){} } };
  }, [R, lang]);

  return (
    <section className="lp-freezone" style={{ display: state==='empty' ? 'none' : 'block',
      maxWidth:880, margin:'0 auto', padding:'clamp(36px,6vw,72px) clamp(20px,5vw,40px) 0' }}>
      <style>{`
        .lp-freezone .rp-kicker{ display:inline-block; font-size:.72rem; font-weight:800; letter-spacing:.12em; text-transform:uppercase; }
        .lp-freezone .rp-display{ font-family:var(--font-display); font-weight:800; letter-spacing:-.01em; }
        .lp-freezone .rp-h2{ font-family:var(--font-display); font-weight:800; font-size:clamp(1.5rem,1.1rem+1.4vw,2.1rem); line-height:1.1; letter-spacing:-.015em; }
        .lp-freezone .rp-p{ margin:0 0 1.05em; font-size:1.08rem; line-height:1.72; color:var(--ink); text-wrap:pretty; }
        .lp-freezone .rp-p:last-child{ margin-bottom:0; }
        .lp-freezone .rp-block:first-child{ margin-top:0 !important; }
        @media (max-width:720px){ .lp-freezone .rp-loop{ grid-template-columns:1fr !important; } .lp-freezone .rp-compat{ grid-template-columns:1fr !important; } }
      `}</style>
      {state==='loading' && (
        <div style={{ textAlign:'center', padding:'40px 0', color:'var(--ink-3)' }}>
          <div style={{ width:28, height:28, margin:'0 auto', borderRadius:'50%', border:'3px solid var(--hairline)',
            borderTopColor:'var(--corail)', animation:'lp-spin 1s linear infinite' }}/>
          <style>{`@keyframes lp-spin{to{transform:rotate(360deg)}}`}</style>
        </div>
      )}
      <div ref={mountRef}/>
    </section>
  );
}

/* ===========================================================================
   AVIS CLIENTS — placeholder structuré (aucun faux avis)
   ======================================================================== */
function ReviewsPlaceholder(){
  return (
    <section style={{ maxWidth:880, margin:'clamp(28px,4vw,40px) auto 0', padding:'0 clamp(20px,5vw,40px)' }}>
      <div style={{ textAlign:'center', marginBottom:'20px' }}>
        <span style={{ fontSize:'.72rem', fontWeight:800, letterSpacing:'.14em', textTransform:'uppercase', color:'var(--ink-3)' }}>
          [ Customer reviews, to be added ]
        </span>
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(240px, 1fr))', gap:'14px' }}>
        {[0,1,2].map(i=>(
          <div key={i} style={{ background:'var(--surface)', border:'1.5px dashed var(--hairline-2)', borderRadius:'var(--r-lg)', padding:'20px 22px' }}>
            <div style={{ display:'flex', alignItems:'center', gap:'12px', marginBottom:'12px' }}>
              <div style={{ width:40, height:40, borderRadius:'50%', background:'var(--paper-2)', border:'1px dashed var(--hairline-2)' }}/>
              <span style={{ color:'var(--ink-3)', fontWeight:600, fontSize:'.92rem' }}>[ Customer name ]</span>
            </div>
            <p style={{ margin:0, color:'var(--ink-3)', fontSize:'.94rem', lineHeight:1.55, fontStyle:'italic' }}>[ Review text to be added ]</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ===========================================================================
   7. RAPPORT COMPLET PAYANT + garantie 7 jours + CTA
   ======================================================================== */
function PaidReportBlock({ X, tx, onCta, onRestart }){
  return (
    <Reveal>
      <section style={{ maxWidth:880, margin:'clamp(48px,7vw,80px) auto 0', padding:'0 clamp(20px,5vw,40px) clamp(48px,7vw,80px)' }}>
        <h2 style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:'clamp(1.5rem,1.1rem+1.4vw,2rem)',
          color:'var(--ink)', margin:0, textAlign:'center' }}>{tx(X.porteTitle)}</h2>
        <p className="lp-lead" style={{ margin:'14px auto 0', maxWidth:520, textAlign:'center' }}>{tx(X.porteAccroche)}</p>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(260px, 1fr))', gap:'14px', marginTop:'clamp(26px,4vw,38px)' }}>
          {X.cards.map((c,i)=>(
            <div key={i} style={{ background:'var(--surface)', border:'1px solid var(--hairline)', borderRadius:'var(--r-lg)',
              padding:'18px 20px', boxShadow:'var(--sh-xs)', position:'relative', overflow:'hidden' }}>
              <div style={{ display:'flex', alignItems:'center', gap:'10px', marginBottom:'9px' }}>
                <span style={{ display:'grid', placeItems:'center', width:30, height:30, borderRadius:'50%', flexShrink:0,
                  background:'var(--paper-2)', color:'var(--ink-3)' }}><Icon name="lock" size={15}/></span>
                <span style={{ fontWeight:700, fontSize:'1.02rem', color:'var(--ink)' }}>{tx(c.title)}</span>
              </div>
              <p style={{ margin:0, fontSize:'.93rem', lineHeight:1.5, color:'var(--ink-2)' }}>{tx(c.teaser)}</p>
              <div aria-hidden="true" style={{ marginTop:'13px', filter:'blur(4px)', userSelect:'none', pointerEvents:'none' }}>
                <div style={{ height:9, borderRadius:'5px', background:'var(--hairline)', width:'92%' }}></div>
                <div style={{ height:9, borderRadius:'5px', background:'var(--hairline)', width:'78%', marginTop:'7px' }}></div>
                <div style={{ height:9, borderRadius:'5px', background:'var(--hairline)', width:'85%', marginTop:'7px' }}></div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:'12px', marginTop:'clamp(28px,4vw,40px)' }}>
          <Button size="lg" icon="arrow-right" onClick={onCta}>{tx(X.cta)}</Button>
          <div style={{ display:'inline-flex', alignItems:'center', gap:'8px', color:'var(--ink-3)', fontSize:'.9rem', fontWeight:600 }}>
            <Icon name="shield" size={15}/> {tx(X.guarantee)}
          </div>
          <Button variant="ghost" onClick={onRestart}>{tx(X.retake)}</Button>
        </div>
      </section>
    </Reveal>
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
   L'ÉCRAN DE RÉSULTAT GRATUIT (assemblage des 7 sections)
   ======================================================================== */
function TestResult({ answers, ancreVariant, onRestart, go }){
  const tx = useTx();
  const T = window.LP_TEST;
  const X = LP_RESULT_TEXTS;
  const R = rsUseMemo(()=> window.LP_ENGINE.computeResultat(answers, ancreVariant), [answers, ancreVariant]);
  const [gateDone,setGateDone] = rsUseState(R.securite!=='alerte');
  const [pending,setPending] = rsUseState(false);
  const dev = /[?&]lpdev=1/.test(window.location.search);

  /* Persist the engine result (profile-key shape the server reads) for the CTA
     and for rapport.html's success_url round-trip. */
  rsUseEffect(()=>{
    try { localStorage.setItem(LP_RESULT_V2_KEY, JSON.stringify(lpResultV2(R))); } catch(e){}
  }, [R]);

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
  if(pending) return <PendingReport onBack={()=>setPending(false)}/>;

  const patOf = k => T.patterns.find(p=>p.key===k) || { key:k, fr:k, en:k };
  const isMixte = R.profil_type==='mixte';
  const code = LP_PATTERN_CODE[R.pattern_dominant] || 'mir';
  /* les 5 paliers nommés (surface -> fond) + phrase vécue du repo, palier joué surligné */
  const ladderRows = LP_ANCHOR_TIERS.map((nm, v)=> ({
    v, name: nm,
    phrase: tx(T.paliers.find(p=>p.v===v) || { fr:'', en:'' }),
    here: v === R.ancre_position,
  }));

  return (
    <div>
      {/* EN-TÊTE COMPACT — échelle de profondeur de l'Ancre */}
      <AnchorLadderHero
        isMixte={isMixte}
        dominantName={tx(patOf(R.pattern_dominant))}
        secondaireName={tx(patOf(R.pattern_secondaire))}
        code={code}
        force={R.pattern_dominant_score}
        intro={tx(X.intro)}
        presence={tx(isMixte ? X.presenceMixte : X.presence)}
        rows={ladderRows}
        surface={tx(X.surface)} fond={tx(X.fond)}
      />

      {/* 1 — PROFIL GRATUIT COMPLET (zone "free") */}
      <Reveal><FreeReport R={R}/></Reveal>

      {/* 2 — PREUVE : bande science (3 fondateurs) + avis clients */}
      <ScienceBand/>
      <ReviewsPlaceholder/>

      {/* 3 — CTA rapport complet + garantie 7 jours */}
      <PaidReportBlock X={X} tx={tx} onCta={startPlanCheckout} onRestart={onRestart}/>

      {/* objet technique : uniquement en mode développement (?lpdev=1) */}
      {dev && (
        <div style={{ maxWidth:880, margin:'0 auto', padding:'0 clamp(20px,5vw,40px) 40px' }}>
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
