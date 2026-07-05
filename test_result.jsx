/* ============================================================================
   8LovePatterns — RÉSULTAT → OFFRE  (v3, page unique)
   ----------------------------------------------------------------------------
   Portage de page-offre-miroir-nu-v3.md : la vue mécanisme est une page-offre
   d'un seul scroll, dans l'ordre exact des 9 blocs de la v3.
     1. Reconnaissance (nom du mécanisme figé + quiet rule)
     2. La boucle (étapes courtes, point d'ancrage en gras)
     3. L'échelle d'Ancre (Clear → Buried, YOU ARE HERE)
     4. Le coût (agitation, juste après YOU ARE HERE)
     5. Le pont = ouverture de l'offre (le mouvement + les 5 livrables)
     6. Risque, prix, action (garantie, ancrage de prix, CTA, livraison)
     7. La science (carte 2 axes visible + lock card propre + fondateurs)
     8. Micro-FAQ
     9. Clôture (urgence honnête, CTA)

   RÈGLES v3 (non négociables) :
     · UN seul mécanisme affiché : le figé (R.pattern_dominant). Aucun double
       titre, aucun pourcentage nulle part.
     · AUCUNE barre de navigation, aucun widget de langue : la page-offre est
       rendue en couche plein écran (position:fixed) qui recouvre le shell du
       test (test.jsx, hors périmètre). La seule sortie est le CTA.
     · Copy Mirror verbatim (EN). Les passages {palier} s'instancient avec le
       cran réel du testeur (LP_ANCHOR_TIERS) ; le mouvement vise un cran vers
       Clear (variante « hold it » si déjà Clear).
   Le moteur ne change pas. Le garde-fou sécurité passe toujours avant. La route
   sécure NE rend PAS cette page (inchangée). Objet technique en ?lpdev=1.
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
   COUCHE MOUVEMENT (premium, sobre)
   ----------------------------------------------------------------------------
   Principe de sûreté : l'état VISIBLE est toujours la base. Le mouvement n'est
   ajouté QUE sous prefers-reduced-motion: no-preference, et les révélations au
   scroll ne s'arment que si JS + IntersectionObserver sont là.
   ======================================================================== */
function lpReducedMotion(){
  try { return !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches); } catch(e){ return false; }
}
/* Révélation au scroll. Base = visible ; on n'arme l'état caché que si motion
   autorisé ET IntersectionObserver dispo. */
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

/* Feuille de styles d'animation, injectée une fois par l'écran de résultat. */
function ResultMotionStyles(){
  return <style>{`
    /* Révélation au scroll (transform + opacity) */
    .lp-inview.is-armed{ opacity:0; transform:translateY(var(--y,16px)); will-change:transform,opacity; }
    .lp-inview.is-armed.is-in{ opacity:1; transform:none;
      transition: opacity .6s cubic-bezier(.22,.61,.36,1) var(--d,0ms), transform .6s cubic-bezier(.22,.61,.36,1) var(--d,0ms); }

    /* Survols premium (courts, user-initiated) */
    .lp-sci-card{ transition: transform .24s cubic-bezier(.22,.61,.36,1), box-shadow .24s ease; }
    .lp-sci-card:hover{ transform:translateY(-6px); box-shadow:var(--sh-md); }
    .lp-sci-portrait{ transition: transform .3s cubic-bezier(.22,.61,.36,1); }
    .lp-sci-card:hover .lp-sci-portrait{ transform:scale(1.045); }
    .lp-lock-card{ transition: transform .24s cubic-bezier(.22,.61,.36,1), box-shadow .24s ease, border-color .24s ease; }
    .lp-lock-card:hover{ transform:translateY(-4px); box-shadow:var(--sh-sm); border-color:color-mix(in srgb, var(--encre) 22%, var(--hairline)); }

    /* Chorégraphie d'arrivée : UNIQUEMENT si le mouvement est permis */
    @media (prefers-reduced-motion: no-preference){
      .lp-anim-perso{ opacity:0; animation: lpPersoIn .75s cubic-bezier(.22,.61,.36,1) .05s both; will-change:transform,opacity; }
      .lp-anim-fade{ opacity:0; animation: lpFade .5s ease-out both; }
    }
    @keyframes lpPersoIn{ from{ opacity:0; transform:translateY(26px) scale(.96); } to{ opacity:1; transform:none; } }
    @keyframes lpFade{ from{ opacity:0; } to{ opacity:1; } }
  `}</style>;
}

/* ===========================================================================
   OFFRE v3 — helpers par mécanisme
   ----------------------------------------------------------------------------
   Le nom de marque + la boucle sont lus dans window.LP_FREE_CONTENT (chargé
   AVANT ce fichier, cf. index.html) : le nom affiché ici est exactement celui
   du rapport ("The Watcher", "The Savior", ...). Les données d'offre (quiet
   rule, index d'ancrage de boucle, coût, livrables) vivent dans LP_TEST.offer.
   ======================================================================== */
function lpOffer(){ return (window.LP_TEST && window.LP_TEST.offer) || { quiet:{}, loopAnchor:{}, cost:{}, deliver:{} }; }
function lpMechName(R){
  const k = lpToProfileKey(R.pattern_dominant);
  const fc = window.LP_FREE_CONTENT && window.LP_FREE_CONTENT[k];
  if(fc && fc.nom) return fc.nom;
  const T = window.LP_TEST;
  const p = (T && T.patterns || []).find(x=>x.key===R.pattern_dominant);
  return (p && p.en) || 'The Mirror';
}
function lpMechShort(R){ return lpMechName(R).replace(/^the\s+/i, ''); }
function lpTierName(pos){ return LP_ANCHOR_TIERS[Math.max(0, Math.min(4, pos|0))]; }
function lpNextTier(pos){ return LP_ANCHOR_TIERS[Math.max(0, Math.min(4, pos|0) - 1)]; }   /* un cran vers Clear */
function lpLoopSteps(R){
  const k = lpToProfileKey(R.pattern_dominant);
  const fc = window.LP_FREE_CONTENT && window.LP_FREE_CONTENT[k];
  if(fc && Array.isArray(fc.blocks)){
    const v = fc.blocks.map(b=>b && b.visual).filter(x=> x && x.kind==='loop')[0];
    if(v && Array.isArray(v.steps)) return v.steps;
  }
  return [];
}

/* Titre de bloc partagé (display). */
function OfferH2({ children, style }){
  return <h2 style={{ fontFamily:'var(--font-display)', fontWeight:800, letterSpacing:'-.015em', color:'var(--ink)',
    fontSize:'clamp(1.5rem,1.12rem+1.5vw,2.15rem)', lineHeight:1.12, margin:0, textWrap:'balance', ...style }}>{children}</h2>;
}

/* ---- BLOC 1 — La reconnaissance ------------------------------------------ */
function OfferReco({ R }){
  const [ok, setOk] = rsUseState(true);
  const mech = lpMechName(R);
  const quiet = lpOffer().quiet[R.pattern_dominant] || '';
  const code = LP_PATTERN_CODE[R.pattern_dominant] || 'mir';
  return (
    <section style={{ background:'var(--paper)', padding:'clamp(30px,6vw,64px) clamp(20px,5vw,40px) clamp(26px,4vw,44px)' }}>
      <div style={{ maxWidth:760, margin:'0 auto', textAlign:'center' }}>
        <p className="lp-anim-fade" style={{ margin:'0 0 clamp(14px,2vw,20px)', fontSize:'.72rem', fontWeight:800,
          letterSpacing:'.14em', textTransform:'uppercase', color:'var(--fam-ancre)' }}>
          Your result · Built on 70 years of attachment research
        </p>
        <h1 className="lp-anim-fade" style={{ animationDelay:'.06s', fontFamily:'var(--font-display)', fontWeight:800,
          letterSpacing:'-.02em', color:'var(--ink)', fontSize:'clamp(2.4rem,1.5rem+3.6vw,3.9rem)', lineHeight:1.04, margin:0, textWrap:'balance' }}>
          You're {mech}.
        </h1>
        <p className="lp-anim-fade" style={{ animationDelay:'.14s', margin:'clamp(16px,2.4vw,22px) auto 0', maxWidth:560,
          fontSize:'1.12rem', lineHeight:1.6, color:'var(--ink)', textWrap:'pretty' }}>
          <span style={{ fontWeight:700 }}>Your quiet rule:</span> {quiet}
        </p>
        {ok && (
          <img className="lp-anim-perso" src={`assets/archetypes/${code}.png`} alt={mech} onError={()=>setOk(false)}
            style={{ width:'auto', height:'clamp(150px,24vw,230px)', maxWidth:'100%', display:'block',
              margin:'clamp(20px,3vw,30px) auto 0', filter:'drop-shadow(0 22px 28px rgba(15,20,45,.24))' }}/>
        )}
        <p style={{ margin:'clamp(18px,3vw,26px) auto 0', maxWidth:600, fontSize:'1.02rem', lineHeight:1.62, color:'var(--ink-2)', textWrap:'pretty' }}>
          A pattern is not a personality type. It's your loudest strategy, the one that takes over first. That's why knowing better has never been enough.
        </p>
      </div>
    </section>
  );
}

/* ---- BLOC 2 — La boucle -------------------------------------------------- */
function OfferLoop({ R }){
  const steps = lpLoopSteps(R);
  const anchorIdx = lpOffer().loopAnchor[R.pattern_dominant];
  return (
    <section style={{ background:'var(--paper-2)', padding:'clamp(40px,6vw,72px) clamp(20px,5vw,40px)' }}>
      <div style={{ maxWidth:680, margin:'0 auto' }}>
        <InView><OfferH2>Here's the loop your answers describe.</OfferH2></InView>
        <ol style={{ listStyle:'none', margin:'clamp(22px,3vw,30px) 0 0', padding:0 }}>
          {steps.map((s,i)=>{
            const isAnchor = i === anchorIdx;
            return (
              <InView key={i} delay={i*60}>
                <li style={{ display:'flex', gap:'14px', alignItems:'flex-start', padding:'9px 0' }}>
                  <span style={{ display:'grid', placeItems:'center', width:26, height:26, borderRadius:'50%', flexShrink:0, marginTop:2,
                    background: isAnchor?'var(--fam-ancre)':'var(--paper)', color: isAnchor?'#fff':'var(--ink-3)',
                    border:`1.5px solid ${isAnchor?'var(--fam-ancre)':'var(--hairline-2)'}`, fontSize:'.8rem', fontWeight:700 }}>{i+1}</span>
                  <div style={{ minWidth:0 }}>
                    <p style={{ margin:0, fontSize:'1.06rem', lineHeight:1.5, color:'var(--ink)', fontWeight: isAnchor?700:500, textWrap:'pretty' }}>{s}</p>
                    {isAnchor && (
                      <p style={{ margin:'6px 0 0', fontSize:'.98rem', lineHeight:1.5, color:'var(--fam-ancre)', fontWeight:600, textWrap:'pretty' }}>
                        This split second is your anchor point: the moment the pattern takes the helm. Everything in the Map is aimed at it.
                      </p>
                    )}
                  </div>
                </li>
              </InView>
            );
          })}
        </ol>
        <p style={{ margin:'clamp(20px,3vw,28px) 0 0', fontSize:'1.06rem', lineHeight:1.6, color:'var(--ink)', fontWeight:600 }}>
          A loop you can't see runs you. This one just became visible.
        </p>
      </div>
    </section>
  );
}

/* ---- BLOC 3 — L'échelle d'Ancre ------------------------------------------ */
function OfferScale({ R }){
  const here = R.ancre_position|0;
  return (
    <section style={{ background:'var(--paper)', padding:'clamp(40px,6vw,72px) clamp(20px,5vw,40px)' }}>
      <div style={{ maxWidth:760, margin:'0 auto' }}>
        <InView><OfferH2 style={{ textAlign:'center' }}>The Anchor scale: who's holding the helm?</OfferH2></InView>
        <div style={{ display:'flex', justifyContent:'space-between', gap:'10px', margin:'clamp(22px,3vw,30px) 0 10px',
          fontSize:'.68rem', fontWeight:800, letterSpacing:'.08em', textTransform:'uppercase', color:'var(--ink-3)' }}>
          <span>You hold the helm</span>
          <span>The pattern holds it</span>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(5, 1fr)', gap:'6px' }}>
          {LP_ANCHOR_TIERS.map((t,i)=>{
            const active = i === here;
            return (
              <div key={t} style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:'8px',
                padding:'14px 4px', borderRadius:'var(--r-md)',
                background: active ? 'var(--fam-ancre)' : 'var(--surface)',
                border:`1px solid ${active ? 'var(--fam-ancre)' : 'var(--hairline)'}`,
                boxShadow: active ? 'var(--sh-sm)' : 'none' }}>
                <span style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:'clamp(.82rem,.72rem+.4vw,1rem)',
                  color: active ? '#fff' : 'var(--ink)', textAlign:'center', lineHeight:1.1 }}>{t}</span>
                {active && (
                  <span style={{ fontSize:'.56rem', fontWeight:800, letterSpacing:'.06em', textTransform:'uppercase',
                    color:'var(--fam-ancre)', background:'#fff', padding:'2px 6px', borderRadius:'var(--r-pill)', textAlign:'center', lineHeight:1.2 }}>
                    You are here
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---- BLOC 4 — Le coût (agitation) ---------------------------------------- */
function OfferCost({ R }){
  const tier = lpTierName(R.ancre_position);
  const T = window.LP_TEST;
  let body = lpOffer().cost[R.pattern_dominant];
  if(!body){
    const rv = ((T.haltes.reveals[R.pattern_dominant] || {}).body) || [];
    body = rv[1] || rv[0] || '';
  }
  return (
    <section style={{ background:'var(--encre)', color:'#fff', padding:'clamp(44px,7vw,80px) clamp(20px,5vw,40px)' }}>
      <div style={{ maxWidth:660, margin:'0 auto', textAlign:'center' }}>
        <OfferH2 style={{ color:'#fff' }}>Left running, {tier} has a price.</OfferH2>
        <p style={{ margin:'clamp(16px,2.4vw,22px) auto 0', maxWidth:560, fontSize:'1.12rem', lineHeight:1.66,
          color:'rgba(255,255,255,.88)', textWrap:'pretty' }}>{body}</p>
      </div>
    </section>
  );
}

/* ---- BLOC 5 — Le pont = ouverture de l'offre ----------------------------- */
function OfferBridge({ R }){
  const tier = lpTierName(R.ancre_position);
  const next = lpNextTier(R.ancre_position);
  const mechShort = lpMechShort(R);
  const isClear = (R.ancre_position|0) === 0;
  const d = lpOffer().deliver[R.pattern_dominant] || lpOffer().deliver['Miroir'] || {};
  const items = [
    { name:d.catch, benefit:d.catchB },
    { name:'The 30-Day Plan', benefit:`one small move a day, tuned to ${tier}.` },
    { name:d.kit, benefit:d.kitB },
    { name:"What You Don't See", benefit:d.blindB },
    { name:'Your Reading List', benefit:`the one book to read at ${tier}, not a pile.` },
  ];
  return (
    <section style={{ background:'var(--paper)', padding:'clamp(44px,7vw,80px) clamp(20px,5vw,40px)' }}>
      <div style={{ maxWidth:720, margin:'0 auto' }}>
        {isClear ? (
          <p style={{ margin:0, fontSize:'1.2rem', lineHeight:1.55, color:'var(--ink)', fontWeight:700, textAlign:'center' }}>
            Your job now is keeping the helm.
          </p>
        ) : (
          <div style={{ textAlign:'center' }}>
            <p style={{ margin:0, fontSize:'1.18rem', lineHeight:1.5, color:'var(--ink)', fontWeight:700, textWrap:'balance' }}>
              There's one move that changes this. It isn't becoming Clear by Friday.
            </p>
            <p style={{ margin:'clamp(14px,2vw,18px) auto 0', maxWidth:600, fontSize:'1.06rem', lineHeight:1.65, color:'var(--ink-2)', textWrap:'pretty' }}>
              From {tier}, the real move is {next}: catching the shift while it happens, instead of understanding it on the way home. People make that move in weeks. The {mechShort} Anchor Map is built for exactly that move, and nothing else.
            </p>
          </div>
        )}

        <OfferH2 style={{ textAlign:'center', margin:'clamp(30px,4vw,44px) 0 0' }}>Your {mechShort} Anchor Map</OfferH2>

        <div style={{ display:'grid', gridTemplateColumns:'1fr', gap:'12px', margin:'clamp(24px,3vw,32px) 0 0' }}>
          {items.map((it,i)=>(
            <InView key={i} delay={i*60}>
              <div style={{ display:'flex', gap:'14px', alignItems:'flex-start', background:'var(--surface)',
                border:'1px solid var(--hairline)', borderRadius:'var(--r-lg)', padding:'16px 20px', boxShadow:'var(--sh-xs)' }}>
                <span style={{ color:'var(--fam-ancre)', flexShrink:0, marginTop:2 }}><Icon name="check" size={18}/></span>
                <p style={{ margin:0, fontSize:'1.02rem', lineHeight:1.5, color:'var(--ink-2)', textWrap:'pretty' }}>
                  <span style={{ fontWeight:700, color:'var(--ink)' }}>{it.name}</span> · {it.benefit}
                </p>
              </div>
            </InView>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- BLOC 6 — Risque, prix, action (closing) ----------------------------- */
function OfferClose({ R, onCta, pattern }){
  /* Analytics : le paywall (prix visible) est apparu. Une fois, au scroll. */
  const ref = rsUseRef(null);
  const fired = rsUseRef(false);
  rsUseEffect(()=>{
    const fire = ()=>{ if(fired.current) return; fired.current = true;
      window.LP_PH && window.LP_PH('paywall_viewed', pattern ? { pattern } : {}); };
    const node = ref.current;
    if(!node || typeof IntersectionObserver === 'undefined'){ fire(); return; }
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{ if(e.isIntersecting){ fire(); io.disconnect(); } });
    }, { threshold:0.2 });
    io.observe(node);
    return ()=> io.disconnect();
  }, []);
  return (
    <section ref={ref} style={{ background:'var(--paper-2)', padding:'clamp(44px,7vw,80px) clamp(20px,5vw,40px)' }}>
      <div style={{ maxWidth:600, margin:'0 auto', textAlign:'center' }}>
        <p style={{ margin:0, fontSize:'1.1rem', lineHeight:1.62, color:'var(--ink)', textWrap:'pretty' }}>
          <strong>The 7-day read-it test.</strong> If the Map doesn't show you something about yourself you couldn't see before, one email and you're refunded. No form, no reason needed.
        </p>
        <p style={{ margin:'clamp(16px,2.4vw,22px) auto 0', fontSize:'1.06rem', lineHeight:1.62, color:'var(--ink-2)', textWrap:'pretty' }}>
          A single therapy session runs $150. The Map is $29, once, and it's the map you'd want to walk in with.
        </p>
        <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:'12px', marginTop:'clamp(26px,4vw,36px)' }}>
          <Button size="lg" icon="arrow-right" onClick={onCta}>Take the helm back</Button>
          <span style={{ color:'var(--ink-3)', fontSize:'.9rem', fontWeight:600 }}>$29, once · instant access on your phone · yours forever</span>
        </div>
      </div>
    </section>
  );
}

/* ---- BLOC 7 — La science (carte 2 axes visible + lock card propre) ------- */
function OfferAxisMap(){
  const cell = (label, soft)=> (
    <div style={{ display:'grid', placeItems:'center', textAlign:'center', padding:'12px 8px', minHeight:'clamp(74px,15vw,116px)',
      background: soft ? 'var(--fam-ancre-soft)' : 'transparent' }}>
      <span style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:'clamp(.9rem,.78rem+.5vw,1.12rem)', color:'var(--ink)', lineHeight:1.15 }}>{label}</span>
    </div>
  );
  return (
    <div style={{ margin:'clamp(24px,4vw,36px) auto 0', maxWidth:520 }}>
      <div style={{ display:'grid', gridTemplateColumns:'auto 1fr', gap:'10px', alignItems:'stretch' }}>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'center' }}>
          <span style={{ writingMode:'vertical-rl', transform:'rotate(180deg)', fontSize:'.66rem', fontWeight:800,
            letterSpacing:'.08em', textTransform:'uppercase', color:'var(--ink-3)', whiteSpace:'nowrap' }}>
            Fear of distance ↑
          </span>
        </div>
        <div style={{ border:'1px solid var(--hairline)', borderRadius:'var(--r-lg)', overflow:'hidden', background:'var(--surface)',
          display:'grid', gridTemplateColumns:'1fr 1fr', gridTemplateRows:'1fr 1fr' }}>
          <div style={{ borderRight:'1px solid var(--hairline)', borderBottom:'1px solid var(--hairline)' }}>{cell('The anxious side')}</div>
          <div style={{ borderBottom:'1px solid var(--hairline)' }}>{cell('Both at once')}</div>
          <div style={{ borderRight:'1px solid var(--hairline)' }}>{cell('Secure', true)}</div>
          <div>{cell('The distant side')}</div>
        </div>
      </div>
      <div style={{ textAlign:'center', marginTop:'8px', paddingLeft:'clamp(14px,3vw,26px)' }}>
        <span style={{ fontSize:'.66rem', fontWeight:800, letterSpacing:'.08em', textTransform:'uppercase', color:'var(--ink-3)' }}>Pull from closeness →</span>
      </div>
    </div>
  );
}
function OfferScience(){
  return (
    <section style={{ background:'var(--paper-2)', padding:'clamp(44px,7vw,80px) clamp(20px,5vw,40px)' }}>
      <div style={{ maxWidth:780, margin:'0 auto', textAlign:'center' }}>
        <InView><OfferH2>Built on the research, not on a guru.</OfferH2></InView>
        <p style={{ margin:'clamp(16px,2.4vw,22px) auto 0', maxWidth:600, fontSize:'1.06rem', lineHeight:1.65, color:'var(--ink-2)', textWrap:'pretty' }}>
          Attachment science measures two things about you: how loudly you fear distance, and how hard you pull back from closeness. Crossed, they draw a map with four regions. Nobody is a type. Everyone is a point on it.
        </p>
        <InView><OfferAxisMap/></InView>
        <div className="lp-lock-card" style={{ margin:'clamp(18px,3vw,26px) auto 0', maxWidth:440, display:'flex', alignItems:'center', gap:'12px', justifyContent:'center',
          background:'var(--surface)', border:'1px solid var(--hairline)', borderRadius:'var(--r-lg)', padding:'15px 22px', boxShadow:'var(--sh-xs)' }}>
          <span style={{ display:'grid', placeItems:'center', width:34, height:34, borderRadius:'50%', flexShrink:0, background:'var(--paper-2)', color:'var(--ink-3)' }}><Icon name="lock" size={16}/></span>
          <span style={{ fontSize:'.98rem', color:'var(--ink)', textAlign:'left' }}><strong>Your exact coordinates</strong> · revealed in your full Map</span>
        </div>
        <p style={{ margin:'clamp(22px,3vw,30px) auto 0', maxWidth:560, fontSize:'.96rem', lineHeight:1.6, color:'var(--ink-3)' }}>
          Bowlby, Ainsworth, Hazan &amp; Shaver: seventy years of research sit behind this page.
        </p>
        <div style={{ marginTop:'clamp(22px,3vw,30px)' }}>
          <span style={{ fontSize:'.72rem', fontWeight:800, letterSpacing:'.14em', textTransform:'uppercase', color:'var(--ink-3)' }}>
            [ Reader quotes, to be added ]
          </span>
        </div>
      </div>
    </section>
  );
}

/* ---- BLOC 8 — La micro-FAQ ----------------------------------------------- */
function OfferFaq({ R }){
  const tier = lpTierName(R.ancre_position);
  const mechShort = lpMechShort(R);
  const qa = [
    { q:'"I already know I do this."', a:`${tier} means exactly that: you know, after the fact. The Map works on the gap between knowing and changing.` },
    { q:'"Why not free advice?"',      a:`Free advice is written for everyone. This is built for the ${mechShort} at ${tier}.` },
    { q:'"What if it’s not me?"',  a:`That's what the 7 days are for.` },
    { q:'"Is it a subscription?"',     a:`No. $29, once.` },
  ];
  return (
    <section style={{ background:'var(--paper)', padding:'clamp(44px,7vw,80px) clamp(20px,5vw,40px)' }}>
      <div style={{ maxWidth:680, margin:'0 auto' }}>
        {qa.map((x,i)=>(
          <InView key={i} delay={i*50}>
            <div style={{ padding:'clamp(14px,2vw,18px) 0', borderTop: i===0 ? 'none' : '1px solid var(--hairline)' }}>
              <p style={{ margin:0, fontWeight:700, fontSize:'1.05rem', color:'var(--ink)' }}>{x.q}</p>
              <p style={{ margin:'6px 0 0', fontSize:'1.02rem', lineHeight:1.6, color:'var(--ink-2)', textWrap:'pretty' }}>{x.a}</p>
            </div>
          </InView>
        ))}
      </div>
    </section>
  );
}

/* ---- BLOC 9 — La clôture (urgence honnête) ------------------------------- */
function OfferCloseFinal({ onCta }){
  return (
    <section style={{ background:'var(--paper-2)', padding:'clamp(44px,7vw,80px) clamp(20px,5vw,40px)' }}>
      <div style={{ maxWidth:620, margin:'0 auto', textAlign:'center' }}>
        <OfferH2>The pattern doesn't wait. Neither should you.</OfferH2>
        <p style={{ margin:'clamp(16px,2.4vw,22px) auto 0', maxWidth:540, fontSize:'1.06rem', lineHeight:1.65, color:'var(--ink-2)', textWrap:'pretty' }}>
          The most common thing people say once they finally see their pattern clearly: I wish I'd seen this sooner. Sooner is today.
        </p>
        <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:'12px', marginTop:'clamp(26px,4vw,36px)' }}>
          <Button size="lg" icon="arrow-right" onClick={onCta}>Take the helm back</Button>
          <span style={{ color:'var(--ink-3)', fontSize:'.9rem', fontWeight:600 }}>$29, once · 7-day refund</span>
        </div>
      </div>
    </section>
  );
}

/* ---- Footer légal minimal (aucune nav) ----------------------------------- */
function OfferLegal(){
  return (
    <footer style={{ background:'var(--paper)', borderTop:'1px solid var(--hairline)', padding:'clamp(26px,4vw,40px) 20px', textAlign:'center' }}>
      <div style={{ color:'var(--ink-3)', fontSize:'.82rem', lineHeight:1.7 }}>
        <div>© 8LovePatterns</div>
        <a href="mailto:support@8lovepatterns.com" style={{ color:'var(--ink-3)', textDecoration:'none' }}>support@8lovepatterns.com</a>
      </div>
    </footer>
  );
}

/* ===========================================================================
   2. BANDE SCIENCE — 70 years of attachment research (route sécure seulement)
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
   PAGE RÉSULTAT SÉCURE  (les deux axes bas) — honnête, valorisante, SANS offre
   ----------------------------------------------------------------------------
   Décision verrouillée (brief) : pas d'offre, pas de CTA d'achat. Texte VERBATIM
   (window.LP_TEST.haltes.secureResult). INCHANGÉ.
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

      {/* Preuve : bande science (crédibilité), pas d'offre. */}
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
   L'ÉCRAN DE RÉSULTAT — aiguillage sécurité / sécure / attente / OFFRE v3
   ======================================================================== */
function TestResult({ answers, frozen, onRestart, go }){
  const T = window.LP_TEST;
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

  /* Analytics (cookieless, non-blocking): the free result is on screen. Fires
     once, only after the safety gate has been cleared and not on the interim
     purchase screen. */
  const resultViewedRef = rsUseRef(false);
  rsUseEffect(()=>{
    if(gateDone && !pending && !resultViewedRef.current){
      resultViewedRef.current = true;
      window.LP_PH && window.LP_PH('result_viewed', R.secure ? { secure:true } : { pattern: R.pattern_dominant });
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

  /* --- OFFRE v3 : page unique, en couche plein écran (aucune nav, aucun widget
     de langue). La seule sortie est le CTA. Un seul mécanisme : le figé. --- */
  return (
    <div className="lp-offer-layer" style={{ position:'fixed', inset:0, zIndex:60, overflowY:'auto',
      WebkitOverflowScrolling:'touch', background:'var(--paper)' }}>
      <ResultMotionStyles/>
      <OfferReco R={R}/>
      <OfferLoop R={R}/>
      <OfferScale R={R}/>
      <OfferCost R={R}/>
      <OfferBridge R={R}/>
      <OfferClose R={R} onCta={startPlanCheckout} pattern={R.pattern_dominant}/>
      <OfferScience/>
      <OfferFaq R={R}/>
      <OfferCloseFinal onCta={startPlanCheckout}/>
      <OfferLegal/>

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
