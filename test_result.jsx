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
   1. HERO — l'ancre qui plonge + le perso révélé
   ======================================================================== */
function ResultHero({ R, isMixte, dominantName, secondaireName, code, tier, phrase, force, signature, intro, presence, anchorLabel }){
  const pos = R.ancre_position;                 // 0 surface (Clear) .. 4 fond (Buried)
  const depthPct = 9 + pos * 19.5;              // ancre étagée sur la hauteur : 9 / 28.5 / 48 / 67.5 / 87 %
  const [bgOk, setBgOk] = rsUseState(true);
  const [anchorOk, setAnchorOk] = rsUseState(true);
  const [persoOk, setPersoOk] = rsUseState(true);

  return (
    <section style={{ position:'relative', overflow:'hidden', width:'100%', minHeight:'clamp(580px, 90vh, 880px)',
      /* repli si le décor illustré n'est pas (encore) fourni : dégradé surface -> profondeurs */
      background:'linear-gradient(180deg, color-mix(in srgb, var(--fam-ancre) 24%, var(--paper)) 0%, color-mix(in srgb, var(--fam-ancre) 55%, var(--encre)) 52%, var(--corail) 100%)' }}>
      <style>{`
        @keyframes lp-dive { 0%{ transform:translate(-50%,-300%); opacity:0; } 55%{ opacity:1; } 100%{ transform:translate(-50%,-50%); opacity:1; } }
        .lp-hero-anchor { animation: lp-dive 1.8s cubic-bezier(.45,0,.2,1) both; }
        @media (prefers-reduced-motion: reduce){ .lp-hero-anchor { animation: none; } }
        .lp-hero-content { grid-template-columns: 1fr; }
        @media (min-width: 881px){
          .lp-hero-content { grid-template-columns: minmax(0,1fr) auto; }
          .lp-hero-perso { align-self: end; justify-self: center; width: clamp(190px, 22vw, 300px); }
        }
        @media (max-width: 880px){
          .lp-hero-perso { position:absolute; right:3%; bottom:0; width:clamp(120px,32vw,180px); z-index:1; }
        }
      `}</style>

      {/* 1. FOND illustré : couvre tout le hero */}
      {bgOk && (
        <img src="assets/hero/water-depths.png" alt="" aria-hidden="true" onError={()=>setBgOk(false)}
          style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', objectPosition:'center top', zIndex:0 }}/>
      )}

      {/* 2. ANCRE : superposée au-dessus du fond, animée, profondeur = palier d'Ancre */}
      <div className="lp-hero-anchor" style={{ position:'absolute', left:'clamp(8%,11vw,13%)', top:`${depthPct}%`,
        transform:'translate(-50%,-50%)', width:'clamp(46px,9vw,72px)', height:'clamp(46px,9vw,72px)', zIndex:1, display:'grid', placeItems:'center' }}>
        {anchorOk
          ? <img src="assets/hero/anchor-dive.png" alt="" aria-hidden="true" onError={()=>setAnchorOk(false)}
              style={{ width:'100%', height:'100%', objectFit:'contain', filter:'drop-shadow(0 10px 16px rgba(0,0,0,.5))' }}/>
          : <span style={{ display:'grid', placeItems:'center', width:'100%', height:'100%', borderRadius:'50%',
              background:'var(--surface)', color:'var(--encre)', boxShadow:'0 8px 20px -4px rgba(0,0,0,.5)' }}><Icon name="anchor" size={26}/></span>}
      </div>

      {/* 3. CONTENU : à côté, le perso + le texte (voile derrière le texte pour le contraste) */}
      <div className="lp-hero-content" style={{ position:'relative', zIndex:2, minHeight:'inherit', maxWidth:1200, margin:'0 auto',
        display:'grid', alignItems:'center', gap:'clamp(18px,3vw,40px)',
        padding:'clamp(40px,8vw,90px) clamp(20px,5vw,56px) clamp(40px,8vw,90px) clamp(78px,22vw,200px)' }}>
        <Reveal style={{ width:'100%', maxWidth:560 }}>
          <div style={{ background:'color-mix(in srgb, var(--paper) 64%, transparent)', backdropFilter:'blur(8px)', WebkitBackdropFilter:'blur(8px)',
            border:'1px solid color-mix(in srgb, #fff 55%, transparent)', borderRadius:'var(--r-xl)',
            padding:'clamp(22px,4vw,38px)', boxShadow:'0 22px 60px -24px rgba(15,20,45,.55)' }}>
            <p style={{ margin:0, fontSize:'.95rem', fontWeight:600, color:'var(--ink-2)' }}>{intro}</p>
            <h1 style={{ fontFamily:'var(--font-display)', fontWeight:800, letterSpacing:'-.02em', color:'var(--ink)',
              fontSize: isMixte ? 'clamp(1.9rem, 1rem + 4vw, 3rem)' : 'clamp(2.3rem, 1.3rem + 4.5vw, 3.9rem)',
              lineHeight:1.06, margin:'12px 0 0', textWrap:'balance' }}>
              {isMixte
                ? <span>{dominantName}<span style={{ color:'var(--ink-3)', fontWeight:400, padding:'0 .3em' }}>&amp;</span>{secondaireName}</span>
                : dominantName}
            </h1>
            <p style={{ margin:'14px 0 0', fontFamily:'var(--font-display)', fontWeight:600,
              fontSize:'clamp(1.08rem, .95rem + .8vw, 1.4rem)', lineHeight:1.4, color:'var(--corail)', textWrap:'balance' }}>
              {signature}
            </p>

            <div style={{ display:'flex', flexWrap:'wrap', gap:'10px', marginTop:22 }}>
              <span style={{ display:'inline-flex', alignItems:'center', gap:'7px', padding:'9px 18px', borderRadius:'var(--r-pill)',
                background:'var(--encre)', color:'#fff', fontWeight:700, fontSize:'.96rem' }}>
                {lpFill(presence, { N: force })}
              </span>
              <span style={{ display:'inline-flex', alignItems:'center', gap:'8px', padding:'9px 18px', borderRadius:'var(--r-pill)',
                background:'var(--surface)', border:'1.5px solid color-mix(in srgb, var(--fam-ancre) 55%, transparent)', color:'var(--fam-ancre)', fontWeight:700, fontSize:'.96rem' }}>
                <Icon name="anchor" size={15}/> {anchorLabel}: {tier}
              </span>
            </div>
            <p style={{ margin:'16px 0 0', fontSize:'1.02rem', lineHeight:1.6, color:'var(--ink)', fontStyle:'italic' }}>
              &laquo;&nbsp;{phrase}&nbsp;&raquo;
            </p>
          </div>
        </Reveal>

        {/* le perso du mécanisme révélé (art existant) */}
        {persoOk
          ? <img className="lp-hero-perso" src={`assets/archetypes/${code}.png`} alt={dominantName} onError={()=>setPersoOk(false)}
              style={{ height:'auto', filter:'drop-shadow(0 22px 28px rgba(15,20,45,.5))' }}/>
          : null}
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
      <div style={{ width:96, height:96, margin:'0 auto 16px', borderRadius:'50%', overflow:'hidden',
        background:'color-mix(in srgb, var(--fam-ancre) 14%, #fff)', display:'grid', placeItems:'center' }}>
        {imgOk
          ? <img src={`assets/science/${s.img}.png`} alt={s.name} onError={()=>setImgOk(false)}
              style={{ width:'100%', height:'100%', objectFit:'cover' }}/>
          : <span style={{ fontFamily:'var(--font-display)', fontWeight:800, fontSize:'1.7rem', color:'var(--fam-ancre)' }}>{initials}</span>}
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
   3. PROFIL GRATUIT COMPLET — zone "free" réassemblée (tunnel sécurisé)
   Réutilise EXACTEMENT les blocs free de _content/*.js, rendus par
   window.LP_RENDER (le même renderer que rapport.html). On retire le bloc
   'cta' de fin : la porte payante est gérée par la section 7.
   ======================================================================== */
function FreeReport({ R }){
  const lang = (window.useLang && window.useLang().lang) || 'en';
  const mountRef = rsUseRef(null);
  const [state, setState] = rsUseState('loading');   // loading | done | empty

  rsUseEffect(()=>{
    let alive = true;
    setState('loading');
    const payload = { result: lpResultV2(R), lang: lang === 'fr' ? 'fr' : 'en' };
    fetch('/api/get-report-free', { method:'POST', headers:{ 'content-type':'application/json' }, body: JSON.stringify(payload) })
      .then(r=>{ if(!r.ok) throw new Error('status '+r.status); return r.json(); })
      .then(report=>{
        if(!alive) return;
        const blocks = (report.free || []).filter(b=> b && b.type !== 'cta');
        const mount = mountRef.current;
        if(!blocks.length || !window.LP_RENDER || !mount){ setState('empty'); return; }
        window.LP_RENDER._accent = (report.meta && report.meta.accent) || '#46934A';
        window.LP_RENDER._code = (report.meta && report.meta.code) || 'mir';
        mount.innerHTML = '';
        blocks.forEach(b=>{ try { mount.appendChild(window.LP_RENDER.renderBlock(b, {})); } catch(e){} });
        setState('done');
      })
      .catch(()=>{ if(alive) setState('empty'); });
    return ()=>{ alive = false; };
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
   4. LIGNE DE VALEUR PERÇUE
   ======================================================================== */
function ValueLine(){
  return (
    <section style={{ maxWidth:680, margin:'clamp(40px,6vw,72px) auto 0', padding:'0 clamp(20px,5vw,40px)' }}>
      <div style={{ background:'var(--fam-ancre-soft)', border:'1px solid color-mix(in srgb, var(--fam-ancre) 30%, transparent)',
        borderRadius:'var(--r-xl)', padding:'clamp(26px,4vw,40px)' }}>
        <p style={{ margin:0, fontFamily:'var(--font-display)', fontWeight:600, fontSize:'clamp(1.15rem,1rem+.7vw,1.5rem)',
          lineHeight:1.5, color:'var(--ink)', textWrap:'pretty' }}>
          Your pattern isn't a flaw. Attachment research shows it's a protection strategy your mind built to keep you safe. Once you see it, you can change it.
        </p>
      </div>
    </section>
  );
}

/* ===========================================================================
   5. SCEAU THÉRAPEUTE — placeholder structuré (aucun nom/photo inventés)
   ======================================================================== */
function TherapistSeal(){
  return (
    <section style={{ maxWidth:680, margin:'clamp(28px,4vw,40px) auto 0', padding:'0 clamp(20px,5vw,40px)' }}>
      <div style={{ display:'flex', alignItems:'center', gap:'16px', justifyContent:'center', flexWrap:'wrap',
        background:'var(--surface)', border:'1px solid var(--hairline)', borderRadius:'var(--r-lg)', padding:'18px 22px' }}>
        {/* photo placeholder */}
        <div style={{ width:56, height:56, borderRadius:'50%', flexShrink:0, border:'2px dashed var(--hairline-2)',
          display:'grid', placeItems:'center', color:'var(--ink-3)', background:'var(--paper-2)' }}>
          <Icon name="users" size={22}/>
        </div>
        <div style={{ display:'flex', alignItems:'center', gap:'10px', color:'var(--ink-2)', fontSize:'.98rem', fontWeight:600 }}>
          <span style={{ display:'grid', placeItems:'center', width:24, height:24, borderRadius:'50%', flexShrink:0,
            background:'rgba(63,160,107,.14)', color:'var(--positive)' }}><Icon name="check" size={14}/></span>
          <span>Content reviewed by [Full Name], [licensed credential]</span>
        </div>
      </div>
    </section>
  );
}

/* ===========================================================================
   6. AVIS CLIENTS — placeholder structuré (aucun faux avis)
   ======================================================================== */
function ReviewsPlaceholder(){
  return (
    <section style={{ maxWidth:880, margin:'clamp(36px,5vw,56px) auto 0', padding:'0 clamp(20px,5vw,40px)' }}>
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
  const mirrorKey = isMixte ? R.ancre_variante : R.pattern_dominant;
  const PT = X.patterns[mirrorKey] || X.patterns[R.pattern_dominant] || { signature:{ fr:'', en:'' } };
  const code = LP_PATTERN_CODE[R.pattern_dominant] || 'mir';
  const tier = LP_ANCHOR_TIERS[R.ancre_position] || '';
  const phrase = tx(T.paliers.find(p=>p.v===R.ancre_position) || { fr:'', en:'' });

  return (
    <div>
      {/* 1 — HERO */}
      <ResultHero
        R={R} isMixte={isMixte}
        dominantName={tx(patOf(R.pattern_dominant))}
        secondaireName={tx(patOf(R.pattern_secondaire))}
        code={code} tier={tier} phrase={phrase}
        force={R.pattern_dominant_score}
        signature={tx(PT.signature)}
        intro={tx(X.intro)}
        presence={tx(isMixte ? X.presenceMixte : X.presence)}
        anchorLabel={tx(X.anchorLabel)}
      />

      {/* 2 — BANDE SCIENCE */}
      <ScienceBand/>

      {/* 3 — PROFIL GRATUIT COMPLET (zone "free") */}
      <Reveal><FreeReport R={R}/></Reveal>

      {/* 4 — LIGNE DE VALEUR PERÇUE */}
      <Reveal><ValueLine/></Reveal>

      {/* 5 — SCEAU THÉRAPEUTE (placeholder) */}
      <TherapistSeal/>

      {/* 6 — AVIS CLIENTS (placeholder) */}
      <ReviewsPlaceholder/>

      {/* 7 — RAPPORT PAYANT + garantie + CTA */}
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
