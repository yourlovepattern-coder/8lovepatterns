/* 8LovePatterns  .  Sales page (per-pattern premium report).
   Three layout directions, switchable from the Tweaks panel (Sales layout):
     editorial  . light, 16P-style, big figure on a tinted panel
     immersive  . full-bleed accent hero + sticky purchase bar
     report     . product-forward, numbered table of contents
   The "Continue" button calls window.LP_STRIPE.checkout(code) -> Stripe. */

/* ---- Bilingual sales content ------------------------------------------- */
const LP_SALES = {
  features: [
    { icon:'compass', en:'Your complete profile',                  fr:'Votre profil complet' },
    { icon:'flame',   en:'Your core fear',                         fr:'Votre peur centrale' },
    { icon:'eye',     en:'Your triggers',                          fr:'Vos d\u00e9clencheurs' },
    { icon:'route',   en:'Your repeating relationship script',     fr:'Votre sc\u00e9nario relationnel r\u00e9p\u00e9titif' },
    { icon:'shield',  en:'What you do when fear hits',             fr:'Ce que vous faites quand vous avez peur' },
    { icon:'heart',   en:'What the other person may feel',         fr:'Ce que l\u2019autre peut ressentir' },
    { icon:'users',   en:'How you behave in conflict',             fr:'Votre comportement en conflit' },
    { icon:'feather', en:'How you behave in a breakup',            fr:'Votre comportement en rupture' },
    { icon:'sparkle', en:'Your at-risk attractions',              fr:'Vos attirances \u00e0 risque' },
    { icon:'anchor',  en:'Your Anchor level',                      fr:'Votre niveau d\u2019Ancre' },
    { icon:'star',    en:'Your integrated version',                fr:'Votre version int\u00e9gr\u00e9e' },
    { icon:'check',   en:'Your first steps to grow',               fr:'Vos premi\u00e8res pistes d\u2019\u00e9volution' },
  ],
  t: {
    en: {
      back:'All patterns', eyebrow:'The complete report',
      sub:'Everything your free result only hinted at, written just for this pattern.',
      discover:'What you\u2019ll discover', inside:'What\u2019s inside',
      paragraph:'In the full report, you\u2019ll discover the precise triggers of your pattern, how it shows up in conflict, what it can stir in the other person, your relationship to breakups, your Anchor level, and the first steps to love without letting this pattern decide for you.',
      priceNote:'One-time payment \u00b7 Instant access',
      parts:'A 12-part personal report', continue:'Get my full report',
      trust:'Instant access, no subscription', secure:'Secure payment with Stripe',
      ctaTitle:'Meet yourself, fully.', titlePrefix:'The full', titleSuffix:'the full report.',
      howH:'How it works', howSub:'No account. No subscription. Your report is ready right after payment.',
      how1t:'You took the test', how1d:'Your answers are saved privately, on your device only.',
      how2t:'Secure $29 payment', how2d:'A one-time payment on Stripe\u2019s hosted, secure page.',
      how3t:'Instant access', how3d:'You land straight on your personalized premium report.',
    },
    fr: {
      back:'Tous les sch\u00e9mas', eyebrow:'Le rapport complet',
      sub:'Tout ce que votre r\u00e9sultat gratuit n\u2019a fait qu\u2019effleurer, \u00e9crit pour ce sch\u00e9ma.',
      discover:'Ce que vous allez d\u00e9couvrir', inside:'Ce qu\u2019il contient',
      paragraph:'Dans le rapport complet, vous d\u00e9couvrirez les d\u00e9clencheurs pr\u00e9cis de votre m\u00e9canisme, la mani\u00e8re dont il appara\u00eet en conflit, ce qu\u2019il peut provoquer chez l\u2019autre, votre rapport \u00e0 la rupture, votre niveau d\u2019Ancre, et les premi\u00e8res \u00e9tapes pour aimer sans laisser ce m\u00e9canisme d\u00e9cider \u00e0 votre place.',
      priceNote:'Paiement unique \u00b7 Acc\u00e8s imm\u00e9diat',
      parts:'Un rapport personnel en 12 parties', continue:'Obtenir mon rapport complet',
      trust:'Acc\u00e8s imm\u00e9diat, sans abonnement', secure:'Paiement s\u00e9curis\u00e9 avec Stripe',
      ctaTitle:'Rencontrez-vous, vraiment.', titlePrefix:'Le rapport complet', titleSuffix:'',
      howH:'Comment \u00e7a marche', howSub:'Sans compte. Sans abonnement. Votre rapport est pr\u00eat juste apr\u00e8s le paiement.',
      how1t:'Vous avez pass\u00e9 le test', how1d:'Vos r\u00e9ponses sont enregistr\u00e9es en priv\u00e9, sur votre appareil uniquement.',
      how2t:'Paiement s\u00e9curis\u00e9 de 29 $', how2d:'Un paiement unique sur la page s\u00e9curis\u00e9e de Stripe.',
      how3t:'Acc\u00e8s imm\u00e9diat', how3d:'Vous arrivez directement sur votre rapport premium personnalis\u00e9.',
    },
  },
};

/* ---- layout selector, driven by the Tweaks panel ----------------------- */
function useSalesLayout() {
  const [v, setV] = useState(() => window.LP_SALES_LAYOUT || 'editorial');
  useEffect(() => {
    const h = (e) => {
      if (e.detail && e.detail.salesLayout) setV(e.detail.salesLayout);
      else if (window.LP_SALES_LAYOUT) setV(window.LP_SALES_LAYOUT);
    };
    window.addEventListener('tweakchange', h);
    return () => window.removeEventListener('tweakchange', h);
  }, []);
  return v;
}

/* ---- shared bits ------------------------------------------------------- */
function SalesPrice({ st, align='left', light }) {
  const cmp = window.LP_STRIPE.priceCompareLabel;
  return (
    <div style={{ display:'flex', flexDirection:'column', gap:'4px', alignItems: align==='center'?'center':'flex-start' }}>
      <div style={{ display:'flex', alignItems:'baseline', gap:'12px' }}>
        <span className="lp-display" style={{ fontSize:'clamp(2.6rem,2rem+2.4vw,3.6rem)', lineHeight:1, color: light?'#fff':'var(--encre)' }}>
          {window.LP_STRIPE.priceLabel}
        </span>
        {cmp ? <span style={{ fontSize:'1.3rem', textDecoration:'line-through', color: light?'rgba(255,255,255,.6)':'var(--ink-3)' }}>{cmp}</span> : null}
      </div>
      <span style={{ fontSize:'.95rem', fontWeight:600, color: light?'rgba(255,255,255,.78)':'var(--ink-3)' }}>{st.priceNote}</span>
    </div>
  );
}

function SalesTrust({ st, light, center }) {
  const c1 = light ? 'rgba(255,255,255,.9)' : 'var(--ink-2)';
  const c2 = light ? 'rgba(255,255,255,.62)' : 'var(--ink-3)';
  return (
    <div style={{ display:'flex', flexDirection:'column', gap:'7px', alignItems: center?'center':'flex-start', marginTop:'16px' }}>
      <span style={{ display:'inline-flex', alignItems:'center', gap:'8px', color:c1, fontWeight:600, fontSize:'.95rem' }}>
        <Icon name="check" size={17}/> {st.trust}
      </span>
      <span style={{ display:'inline-flex', alignItems:'center', gap:'8px', color:c2, fontSize:'.86rem' }}>
        <Icon name="lock" size={14}/> {st.secure}
      </span>
    </div>
  );
}

function FeatureChecklist({ st, accent, cols=2 }) {
  return (
    <div style={{ display:'grid', gridTemplateColumns:`repeat(${cols}, 1fr)`, gap:'12px' }} className="lp-sales-feat">
      {LP_SALES.features.map((f, i) => (
        <div key={i} style={{ display:'flex', alignItems:'center', gap:'13px', background:'var(--surface)',
          border:'1px solid var(--hairline)', borderRadius:'var(--r-md)', padding:'13px 16px' }}>
          <span style={{ display:'grid', placeItems:'center', width:38, height:38, borderRadius:'11px', flexShrink:0,
            background:`color-mix(in srgb, ${accent} 14%, #fff)`, color:accent }}>
            <Icon name={f.icon} size={19}/>
          </span>
          <span style={{ fontWeight:600, color:'var(--ink)', fontSize:'1rem', lineHeight:1.3 }}>{f.en && st.lang==='fr' ? f.fr : f.en}</span>
        </div>
      ))}
    </div>
  );
}

function DiscoveryNote({ st, accent }) {
  return (
    <div style={{ borderLeft:`4px solid ${accent}`, paddingLeft:'24px', margin:'0 auto', maxWidth:680 }}>
      <p style={{ margin:0, fontSize:'1.18rem', lineHeight:1.7, color:'var(--ink)', textWrap:'pretty' }}>{st.paragraph}</p>
    </div>
  );
}

/* ======================================================================== */
function SalesPage({ go, code='bas' }) {
  const layout = useSalesLayout();
  const { lang } = useLang();
  const arch = window.archByCode(code);

  // Analytics: visitor is looking at a premium report offer
  useEffect(()=>{
    if(window.LP_track) window.LP_track('view_item', {
      currency: 'USD', value: 29, items: [ window.LP_reportItem(code) ]
    });
  }, [code]);
  const fam = window.FAMILIES[arch.family];
  const st = { ...(LP_SALES.t[lang] || LP_SALES.t.en), lang };
  const accent = arch.accent;
  const title = lang==='fr'
    ? `${st.titlePrefix} : ${arch.name}.`
    : `${arch.name}: ${st.titleSuffix}`;

  const props = { go, arch, fam, st, accent, title, code };
  if (layout === 'immersive') return <SalesImmersive {...props}/>;
  if (layout === 'report')    return <SalesReport {...props}/>;
  return <SalesEditorial {...props}/>;
}

/* ---- A. Editorial (light, 16P-style) ----------------------------------- */
function SalesEditorial({ go, arch, fam, st, accent, title, code }) {
  return (
    <div>
      <Container style={{ paddingTop:'26px' }}>
        <button onClick={()=>go('profil', code)} style={{ display:'inline-flex', alignItems:'center', gap:'6px', background:'none',
          border:'none', cursor:'pointer', color:'var(--ink-3)', fontFamily:'var(--font-body)', fontWeight:600, fontSize:'.92rem', padding:0 }}>
          <Icon name="arrow-left" size={16}/> {st.back}
        </button>
      </Container>

      <Section style={{ padding:'clamp(24px,4vw,48px) 0 clamp(40px,6vw,72px)' }}>
        <Container>
          <div style={{ display:'grid', gridTemplateColumns:'1.05fr .95fr', gap:'clamp(28px,4vw,64px)', alignItems:'center' }} className="lp-hero-grid">
            <div>
              <div style={{ display:'inline-flex', alignItems:'center', gap:'8px', marginBottom:'14px' }}>
                <FamilyDot family={arch.family}/>
                <span style={{ fontSize:'.72rem', fontWeight:800, letterSpacing:'.1em', textTransform:'uppercase', color:accent }}>{st.eyebrow}</span>
              </div>
              <h1 className="lp-display" style={{ fontSize:'clamp(2.3rem,1.6rem+2.6vw,3.6rem)', lineHeight:1.05, color:'var(--encre)', margin:0 }}>{title}</h1>
              <p className="lp-lead" style={{ marginTop:14, maxWidth:480 }}>{st.sub}</p>
              <div style={{ marginTop:'26px' }}><SalesPrice st={st}/></div>
              <div style={{ marginTop:'22px' }}>
                <Button size="lg" icon="arrow-right" onClick={()=>window.LP_STRIPE.checkout(code)}>{st.continue}</Button>
              </div>
              <SalesTrust st={st}/>
            </div>
            <div style={{ position:'relative' }}>
              <div style={{ position:'relative', borderRadius:'var(--r-xl)', overflow:'hidden', aspectRatio:'4/5',
                background:`radial-gradient(120% 90% at 50% 12%, color-mix(in srgb, ${accent} 30%, #fff) 0%, color-mix(in srgb, ${accent} 12%, #fff) 52%, #fff 100%)`,
                border:`1px solid color-mix(in srgb, ${accent} 22%, #fff)`, boxShadow:'var(--sh-lg)' }}>
                <img src={`assets/archetypes/${code}.png`} alt={arch.name} style={{ position:'absolute', bottom:0, left:'50%', transform:'translateX(-50%)',
                  height:'92%', width:'auto', maxWidth:'94%', objectFit:'contain', filter:'drop-shadow(0 18px 22px rgba(20,16,45,.22))' }}/>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section band="var(--paper-2)" style={{ padding:'clamp(48px,7vw,90px) 0' }}>
        <Container>
          <h2 className="lp-h2" style={{ textAlign:'center', color:'var(--encre)' }}>{st.discover}</h2>
          <p style={{ textAlign:'center', color:'var(--ink-3)', marginTop:8, marginBottom:34 }}>{st.parts}</p>
          <FeatureChecklist st={st} accent={accent} cols={2}/>
          <div style={{ marginTop:46 }}><DiscoveryNote st={st} accent={accent}/></div>
        </Container>
      </Section>

      <SalesHowItWorks st={st} accent={accent}/>
      <SalesFinalCTA go={go} arch={arch} st={st} accent={accent} code={code}/>
    </div>
  );
}

/* ---- B. Immersive (full-bleed accent + sticky bar) --------------------- */
function SalesImmersive({ go, arch, fam, st, accent, title, code }) {
  return (
    <div style={{ paddingBottom:'84px' }}>
      <div style={{ position:'relative', overflow:'hidden',
        background:`linear-gradient(150deg, color-mix(in srgb, ${accent} 70%, #20183a) 0%, ${accent} 78%)` }}>
        <div style={{ position:'absolute', top:'-22%', right:'-6%', width:'48%', aspectRatio:'1', borderRadius:'50%',
          background:'radial-gradient(circle, rgba(255,255,255,.22), transparent 70%)' }}></div>
        <Container style={{ position:'relative', zIndex:2, paddingTop:'26px' }}>
          <button onClick={()=>go('profil', code)} style={{ display:'inline-flex', alignItems:'center', gap:'6px', background:'none',
            border:'none', cursor:'pointer', color:'rgba(255,255,255,.82)', fontFamily:'var(--font-body)', fontWeight:600, fontSize:'.92rem', padding:0 }}>
            <Icon name="arrow-left" size={16}/> {st.back}
          </button>
        </Container>
        <Container style={{ position:'relative', zIndex:2 }}>
          <div style={{ display:'grid', gridTemplateColumns:'1.05fr .95fr', gap:'clamp(20px,3vw,52px)', alignItems:'end',
            paddingTop:'clamp(20px,3vw,40px)' }} className="lp-hero-grid">
            <div style={{ paddingBottom:'clamp(34px,5vw,62px)' }}>
              <span style={{ display:'inline-flex', alignItems:'center', gap:'8px', padding:'6px 13px', borderRadius:'var(--r-pill)',
                background:'rgba(255,255,255,.16)', color:'#fff', fontWeight:700, fontSize:'.78rem', letterSpacing:'.06em', textTransform:'uppercase' }}>
                <Icon name="sparkle" size={13}/> {st.eyebrow}
              </span>
              <h1 className="lp-display" style={{ fontSize:'clamp(2.4rem,1.7rem+2.8vw,4rem)', lineHeight:1.04, color:'#fff', margin:'16px 0 0' }}>{title}</h1>
              <p style={{ marginTop:14, maxWidth:470, color:'rgba(255,255,255,.9)', fontSize:'1.18rem', lineHeight:1.5, textWrap:'pretty' }}>{st.sub}</p>
              <div style={{ marginTop:'26px' }}><SalesPrice st={st} light/></div>
              <SalesTrust st={st} light/>
            </div>
            <div style={{ position:'relative', alignSelf:'end', minHeight:'1px' }}>
              <img src={`assets/archetypes/${code}.png`} alt={arch.name} style={{ display:'block', width:'100%', maxWidth:'360px',
                marginLeft:'auto', height:'auto', filter:'drop-shadow(0 20px 26px rgba(15,20,45,.4))' }}/>
            </div>
          </div>
        </Container>
      </div>

      <Section style={{ padding:'clamp(48px,7vw,92px) 0', background:'var(--encre)' }}>
        <Container>
          <h2 className="lp-h2" style={{ textAlign:'center', color:'#fff' }}>{st.discover}</h2>
          <p style={{ textAlign:'center', color:'rgba(255,255,255,.6)', marginTop:8, marginBottom:34 }}>{st.parts}</p>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gap:'12px' }} className="lp-sales-feat">
            {LP_SALES.features.map((f, i) => (
              <div key={i} style={{ display:'flex', alignItems:'center', gap:'13px', background:'rgba(255,255,255,.06)',
                border:'1px solid rgba(255,255,255,.12)', borderRadius:'var(--r-md)', padding:'13px 16px' }}>
                <span style={{ display:'grid', placeItems:'center', width:38, height:38, borderRadius:'11px', flexShrink:0,
                  background:`color-mix(in srgb, ${accent} 30%, transparent)`, color:'#fff' }}>
                  <Icon name={f.icon} size={19}/>
                </span>
                <span style={{ fontWeight:600, color:'#fff', fontSize:'1rem', lineHeight:1.3 }}>{st.lang==='fr'?f.fr:f.en}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop:46, maxWidth:680, marginInline:'auto' }}>
            <p style={{ margin:0, fontSize:'1.18rem', lineHeight:1.7, color:'rgba(255,255,255,.88)', textWrap:'pretty',
              borderLeft:`4px solid ${accent}`, paddingLeft:'24px' }}>{st.paragraph}</p>
          </div>
        </Container>
      </Section>

      <SalesHowItWorks st={st} accent={accent}/>

      {/* sticky purchase bar */}
      <div style={{ position:'fixed', left:0, right:0, bottom:0, zIndex:40, background:'rgba(255,255,255,.92)',
        backdropFilter:'blur(12px)', WebkitBackdropFilter:'blur(12px)', borderTop:'1px solid var(--hairline)', boxShadow:'0 -8px 30px -12px rgba(20,20,43,.18)' }}>
        <Container style={{ display:'flex', alignItems:'center', justifyContent:'space-between', gap:'16px', height:74 }}>
          <div style={{ display:'flex', alignItems:'baseline', gap:'10px', minWidth:0 }}>
            <span className="lp-display" style={{ fontSize:'1.7rem', color:'var(--encre)', lineHeight:1 }}>{window.LP_STRIPE.priceLabel}</span>
            <span style={{ color:'var(--ink-3)', fontSize:'.9rem', fontWeight:600, whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis' }}>{st.trust}</span>
          </div>
          <Button size="md" icon="arrow-right" onClick={()=>window.LP_STRIPE.checkout(code)}>{st.continue}</Button>
        </Container>
      </div>
    </div>
  );
}

/* ---- C. Report (product-forward, numbered TOC) ------------------------- */
function SalesReport({ go, arch, fam, st, accent, title, code }) {
  return (
    <div>
      <Container style={{ paddingTop:'26px' }}>
        <button onClick={()=>go('profil', code)} style={{ display:'inline-flex', alignItems:'center', gap:'6px', background:'none',
          border:'none', cursor:'pointer', color:'var(--ink-3)', fontFamily:'var(--font-body)', fontWeight:600, fontSize:'.92rem', padding:0 }}>
          <Icon name="arrow-left" size={16}/> {st.back}
        </button>
      </Container>

      <Section style={{ padding:'clamp(24px,4vw,48px) 0 clamp(40px,6vw,72px)' }}>
        <Container>
          <div style={{ display:'grid', gridTemplateColumns:'1fr .8fr', gap:'clamp(28px,4vw,60px)', alignItems:'center' }} className="lp-hero-grid">
            <div>
              <div style={{ display:'inline-flex', alignItems:'center', gap:'8px', marginBottom:'14px' }}>
                <FamilyDot family={arch.family}/>
                <span style={{ fontSize:'.72rem', fontWeight:800, letterSpacing:'.1em', textTransform:'uppercase', color:accent }}>{st.eyebrow}</span>
              </div>
              <h1 className="lp-display" style={{ fontSize:'clamp(2.3rem,1.6rem+2.6vw,3.5rem)', lineHeight:1.05, color:'var(--encre)', margin:0 }}>{title}</h1>
              <p className="lp-lead" style={{ marginTop:14, maxWidth:470 }}>{st.sub}</p>
              <div style={{ marginTop:'24px' }}><SalesPrice st={st}/></div>
              <div style={{ marginTop:'22px' }}>
                <Button size="lg" icon="arrow-right" onClick={()=>window.LP_STRIPE.checkout(code)}>{st.continue}</Button>
              </div>
              <SalesTrust st={st}/>
            </div>
            {/* report "cover" */}
            <div style={{ position:'relative' }}>
              <div style={{ borderRadius:'var(--r-lg)', overflow:'hidden', background:'#fff', border:'1px solid var(--hairline)',
                boxShadow:'var(--sh-lg)' }}>
                <div style={{ position:'relative', height:'clamp(180px,24vw,240px)',
                  background:`radial-gradient(120% 100% at 70% 0%, color-mix(in srgb, ${accent} 32%, #fff), color-mix(in srgb, ${accent} 12%, #fff))` }}>
                  <img src={`assets/archetypes/${code}.png`} alt={arch.name} style={{ position:'absolute', bottom:0, right:'8%',
                    height:'94%', width:'auto', filter:'drop-shadow(0 14px 16px rgba(20,16,45,.25))' }}/>
                  <div style={{ position:'absolute', top:16, left:18, fontSize:'.7rem', fontWeight:800, letterSpacing:'.14em',
                    textTransform:'uppercase', color:accent }}>8LovePatterns</div>
                </div>
                <div style={{ padding:'20px 22px' }}>
                  <div className="lp-h4" style={{ color:'var(--encre)' }}>{arch.name}</div>
                  <div style={{ display:'flex', alignItems:'center', gap:'8px', marginTop:8, color:'var(--ink-3)', fontSize:'.9rem' }}>
                    <Icon name="check" size={15} style={{ color:accent }}/> {st.parts}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section band="var(--paper-2)" style={{ padding:'clamp(48px,7vw,90px) 0' }}>
        <Container narrow>
          <h2 className="lp-h2" style={{ color:'var(--encre)' }}>{st.inside}</h2>
          <div style={{ marginTop:24, borderTop:'1px solid var(--hairline)' }}>
            {LP_SALES.features.map((f, i) => (
              <div key={i} style={{ display:'flex', alignItems:'center', gap:'18px', padding:'17px 4px', borderBottom:'1px solid var(--hairline)' }}>
                <span className="lp-display" style={{ fontSize:'1.15rem', color:accent, width:34, flexShrink:0, fontVariantNumeric:'tabular-nums' }}>
                  {String(i+1).padStart(2,'0')}
                </span>
                <span style={{ flex:1, fontWeight:600, color:'var(--ink)', fontSize:'1.1rem' }}>{st.lang==='fr'?f.fr:f.en}</span>
                <span style={{ color:`color-mix(in srgb, ${accent} 80%, var(--ink-3))` }}><Icon name={f.icon} size={20}/></span>
              </div>
            ))}
          </div>
          <div style={{ marginTop:42 }}><DiscoveryNote st={st} accent={accent}/></div>
        </Container>
      </Section>

      <SalesHowItWorks st={st} accent={accent}/>
      <SalesFinalCTA go={go} arch={arch} st={st} accent={accent} code={code}/>
    </div>
  );
}

/* ---- shared "how it works" explainer (the buying journey) -------------- */
function SalesHowItWorks({ st, accent }) {
  const steps = [
    ['feather', st.how1t, st.how1d],
    ['lock',    st.how2t, st.how2d],
    ['sparkle', st.how3t, st.how3d],
  ];
  return (
    <Section style={{ padding:'clamp(40px,6vw,72px) 0' }}>
      <Container>
        <h2 className="lp-h2" style={{ textAlign:'center', color:'var(--encre)' }}>{st.howH}</h2>
        <p style={{ textAlign:'center', color:'var(--ink-3)', marginTop:8, marginBottom:34, maxWidth:560, marginInline:'auto' }}>{st.howSub}</p>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'16px' }} className="lp-mech-grid">
          {steps.map(([ic,t,d],i)=>(
            <div key={i} style={{ position:'relative', background:'var(--surface)', border:'1px solid var(--hairline)',
              borderRadius:'var(--r-lg)', padding:'26px 24px', boxShadow:'var(--sh-xs)' }}>
              <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'14px' }}>
                <span style={{ display:'grid', placeItems:'center', width:46, height:46, borderRadius:'13px',
                  background:`color-mix(in srgb, ${accent} 14%, #fff)`, color:accent }}><Icon name={ic} size={22}/></span>
                <span className="lp-display" style={{ fontSize:'1.6rem', color:`color-mix(in srgb, ${accent} 40%, var(--hairline))`, lineHeight:1 }}>{i+1}</span>
              </div>
              <div className="lp-h4" style={{ color:'var(--encre)', marginBottom:'6px' }}>{t}</div>
              <p style={{ margin:0, color:'var(--ink-2)', lineHeight:1.55, fontSize:'.98rem' }}>{d}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ---- shared closing CTA (editorial + report) --------------------------- */
function SalesFinalCTA({ go, arch, st, accent, code }) {
  return (
    <Section style={{ padding:'0 0 clamp(56px,9vw,110px)' }}>
      <Container narrow>
        <div style={{ position:'relative', overflow:'hidden', borderRadius:'var(--r-xl)', padding:'clamp(34px,5vw,56px)', textAlign:'center',
          background:`linear-gradient(140deg, color-mix(in srgb, ${accent} 70%, #20183a), ${accent})`, color:'#fff' }}>
          <div style={{ position:'absolute', top:'-30%', right:'-8%', width:'46%', aspectRatio:'1', borderRadius:'50%',
            background:'radial-gradient(circle, rgba(255,255,255,.22), transparent 70%)' }}></div>
          <div style={{ position:'relative' }}>
            <h2 className="lp-h1" style={{ color:'#fff', margin:0 }}>{st.ctaTitle}</h2>
            <div style={{ marginTop:18, display:'flex', justifyContent:'center' }}><SalesPrice st={st} align="center" light/></div>
            <div style={{ marginTop:24, display:'flex', justifyContent:'center' }}>
              <Button size="lg" variant="light" icon="arrow-right" onClick={()=>window.LP_STRIPE.checkout(code)}>{st.continue}</Button>
            </div>
            <div style={{ display:'flex', justifyContent:'center' }}><SalesTrust st={st} light center/></div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

Object.assign(window, { SalesPage });
