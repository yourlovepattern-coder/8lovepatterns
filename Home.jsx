/* 8LovePatterns, Homepage (short, 16P-inspired: promise · proof · patterns · CTA) */

/* Torn top edge */
function ZigTop() {
  const w=1440, h=34, teeth=26; let d=`M0,${h} L0,14`;
  for(let i=0;i<=teeth;i++){ const x=Math.round((w/teeth)*i); const y=i%2===0?2:22; d+=` L${x},${y}`; }
  d+=` L${w},14 L${w},${h} Z`;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" aria-hidden="true"
      style={{ position:'absolute', top:-1, left:0, width:'100%', height:h, display:'block', zIndex:1 }}>
      <path d={d} fill="var(--paper)"/>
    </svg>
  );
}
function WaveBottom() {
  return (
    <svg viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true"
      style={{ position:'absolute', bottom:-1, left:0, width:'100%', height:90, display:'block', zIndex:1 }}>
      <path d="M0,90 L0,52 C220,16 460,16 720,42 C980,68 1220,70 1440,40 L1440,90 Z" fill="var(--paper)"/>
    </svg>
  );
}

/* The scene: every pattern gathered around the anchor-heart */
function HeroScene() {
  const cast = [
    { code:'mir', left:7,  h:13 }, { code:'cam', left:19, h:16 },
    { code:'sau', left:30, h:19 }, { code:'alc', left:40, h:16 },
    { code:'gue', left:60, h:17 }, { code:'bas', left:71, h:20 },
    { code:'fug', left:82, h:16 }, { code:'inc', left:93, h:14 },
  ];
  return (
    <div style={{ position:'relative', width:'100%', height:'clamp(250px,27vw,400px)', marginTop:'clamp(14px,2vw,30px)' }}>
      {cast.map(c=>(
        <img key={c.code} src={`assets/archetypes/${c.code}.png`} alt="" style={{
          position:'absolute', bottom:'62px', left:`${c.left}%`, transform:'translateX(-50%)',
          height:`clamp(92px, ${c.h}vw, ${c.h*9}px)`, width:'auto', zIndex:2,
          filter:'drop-shadow(0 16px 14px rgba(15,45,55,.22))' }}/>
      ))}
      <img src="assets/logo_mascot.png" alt="The Anchor, 8LovePatterns" style={{
        position:'absolute', bottom:'58px', left:'50%', transform:'translateX(-50%)', zIndex:3,
        height:'clamp(168px, 23vw, 320px)', width:'auto', filter:'drop-shadow(0 24px 22px rgba(15,45,55,.3))' }}/>
    </div>
  );
}

function TrustLine({ light }) {
  const c = light ? 'rgba(255,255,255,.72)' : 'var(--ink-3)';
  const { t } = useLang();
  return (
    <div style={{ marginTop:20, color:c, fontSize:'.9rem', display:'flex', gap:'8px', justifyContent:'center', alignItems:'center', flexWrap:'wrap' }}>
      <Icon name="lock" size={15}/> {t('trust.line')}
    </div>
  );
}

/* Full-body character card for the homepage teaser */
function PatternChip({ arch, go }) {
  const [h,setH]=useState(false);
  const fam = window.FAMILIES[arch.family];
  return (
    <button onClick={()=>go('profil',arch.code)} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
      title={arch.name}
      style={{ cursor:'pointer', border:'none', padding:0, background:'none', width:'100%', textAlign:'left',
        display:'flex', flexDirection:'column', transition:'transform .22s ease', transform: h?'translateY(-6px)':'none' }}>
      {/* Character stage */}
      <div style={{ position:'relative', borderRadius:'var(--r-lg) var(--r-lg) 0 0', overflow:'hidden',
        background:`linear-gradient(165deg, ${arch.soft} 0%, color-mix(in srgb, ${fam.color} 14%, var(--surface)) 100%)`,
        borderBottom:`3px solid ${h?fam.color:'transparent'}`, transition:'border-color .2s ease' }}>
        {/* soft halo behind figure */}
        <div style={{ position:'absolute', inset:0, background:`radial-gradient(120% 80% at 50% 100%, ${fam.color}22, transparent 60%)`,
          opacity: h?1:0, transition:'opacity .25s ease' }}></div>
        <img src={`assets/archetypes/${arch.code}.png`} alt={arch.name}
          style={{ position:'relative', display:'block', width:'82%', margin:'18px auto -2px', aspectRatio:'621/843',
            objectFit:'contain', objectPosition:'bottom',
            filter: h?'drop-shadow(0 14px 16px rgba(15,45,55,.28))':'drop-shadow(0 8px 12px rgba(15,45,55,.16))',
            transform: h?'scale(1.05)':'scale(1)', transformOrigin:'bottom center', transition:'all .25s ease' }}/>
      </div>
      {/* Label plate */}
      <div style={{ background:'var(--surface)', border:'1px solid var(--hairline)', borderTop:'none',
        borderRadius:'0 0 var(--r-lg) var(--r-lg)', padding:'14px 16px 16px',
        boxShadow: h?'var(--sh-md)':'var(--sh-xs)', transition:'box-shadow .2s ease',
        display:'flex', flexDirection:'column', gap:'8px', flex:1 }}>
        <div style={{ fontSize:'.66rem', fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:fam.color }}>{fam.label}</div>
        <div className="lp-h4" style={{ fontSize:'1.18rem', lineHeight:1.1 }}>{arch.name}</div>
        <div style={{ display:'flex', alignItems:'center', gap:'6px', marginTop:'2px',
          color: h?fam.color:'var(--ink-3)', fontWeight:600, fontSize:'.85rem', transition:'color .2s ease' }}>
          {window.useLang().t('teaser.discover')} <Icon name="arrow-right" size={15} style={{ transform: h?'translateX(3px)':'none', transition:'transform .2s ease' }}/>
        </div>
      </div>
    </button>
  );
}

function Home({ go }) {
  const { t } = useLang();
  const promises = [
    ['compass', t('promise.b1')],
    ['flame', t('promise.b2')],
    ['shield', t('promise.b3')],
    ['route', t('promise.b4')],
  ];
  return (
    <div>
      {/* HERO, promise + CTA */}
      <section style={{ position:'relative', overflow:'hidden', color:'#fff',
        background:'linear-gradient(180deg, var(--lp-hero-a, #2E8294) 0%, var(--lp-hero-b, #236B7C) 100%)' }}>
        <ZigTop/>
        <Container style={{ position:'relative', zIndex:2, textAlign:'center', paddingTop:'clamp(40px,6vw,72px)' }}>
          <div style={{ display:'inline-flex' }}>
            <Chip soft="rgba(255,255,255,.16)" color="#fff"><Icon name="sparkle" size={14}/> {t('hero.badge')}</Chip>
          </div>
          <h1 className="lp-display" style={{ color:'#fff', maxWidth:900, margin:'18px auto 0' }}>
            {t('hero.h1a')}<br/>{t('hero.h1b')}
          </h1>
          <p style={{ color:'rgba(255,255,255,.86)', fontSize:'1.18rem', lineHeight:1.55, maxWidth:580, margin:'18px auto 0', textWrap:'pretty' }}>
            {t('hero.sub')}
          </p>
          <div style={{ display:'flex', gap:'14px', justifyContent:'center', marginTop:28, flexWrap:'wrap' }}>
            <Button size="lg" icon="arrow-right" onClick={()=>go('intro')}>{t('cta.reveal')}</Button>
            <Button size="lg" variant="light" onClick={()=>go('profils')}>{t('hero.cta2')}</Button>
          </div>
          <TrustLine light/>
        </Container>
        <HeroScene/>
        <WaveBottom/>
      </section>

      {/* SCIENCE / SOCIAL-PROOF TRUST BANNER */}
      <TrustBanner/>

      {/* PROMISE, brand weapon + what you'll learn */}
      <Section style={{ padding:'clamp(44px,6vw,84px) 0' }}>
        <Container narrow style={{ textAlign:'center' }}>
          <h2 className="lp-h1">{t('promise.h2a')}<br/><span style={{ color:'var(--corail)' }}>{t('promise.h2b')}</span></h2>
          <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'center', gap:'12px', marginTop:30 }}>
            {promises.map(([ic,label])=>(
              <span key={label} style={{ display:'inline-flex', alignItems:'center', gap:'9px', padding:'10px 18px',
                borderRadius:'var(--r-pill)', background:'var(--surface)', border:'1px solid var(--hairline)',
                boxShadow:'var(--sh-xs)', fontWeight:600, color:'var(--ink)', fontSize:'.96rem' }}>
                <Icon name={ic} size={17} style={{ color:'var(--corail)' }}/> {label}
              </span>
            ))}
          </div>
          <div style={{ marginTop:30, display:'flex', justifyContent:'center' }}>
            <Button size="lg" icon="arrow-right" onClick={()=>go('intro')}>{t('promise.cta')}</Button>
          </div>
        </Container>
      </Section>

      {/* PATTERNS TEASER, the cast, front and center */}
      <Section band="var(--paper-2)">
        <Container>
          <div style={{ textAlign:'center', maxWidth:620, margin:'0 auto 40px' }}>
            <h2 className="lp-h1">{t('teaser.h2')}</h2>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'22px', alignItems:'stretch' }} className="lp-mech-grid">
            {window.ARCHETYPES.map(a=> <PatternChip key={a.code} arch={a} go={go}/>)}
          </div>
          <div style={{ marginTop:36, display:'flex', justifyContent:'center', gap:'14px', flexWrap:'wrap' }}>
            <Button size="lg" variant="secondary" icon="arrow-right" onClick={()=>go('profils')}>{t('teaser.cta')}</Button>
          </div>
        </Container>
      </Section>

      {/* FINAL CTA */}
      <Section style={{ padding:'clamp(48px,7vw,90px) 0 clamp(56px,9vw,110px)' }}>
        <Container>
          <div style={{ position:'relative', overflow:'hidden', borderRadius:'var(--r-xl)', padding:'clamp(40px,6vw,72px)',
            background:'linear-gradient(135deg, var(--encre) 0%, var(--encre-700) 60%, #3A2F77 100%)', textAlign:'center' }}>
            <div style={{ position:'absolute', top:'-40%', right:'-10%', width:'50%', aspectRatio:'1', borderRadius:'50%',
              background:'radial-gradient(circle, rgba(var(--lp-glow, 238,99,82),.32), transparent 70%)' }}></div>
            <div style={{ position:'relative' }}>
              <h2 className="lp-h1" style={{ color:'#fff' }}>{t('final.h2')}</h2>
              <p style={{ color:'rgba(255,255,255,.74)', fontSize:'1.12rem', marginTop:14, maxWidth:500, marginInline:'auto' }}>
                {t('final.sub')}
              </p>
              <div style={{ marginTop:28, display:'flex', justifyContent:'center' }}>
                <Button size="lg" icon="arrow-right" onClick={()=>go('intro')}>{t('cta.reveal')}</Button>
              </div>
              <TrustLine light/>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
Object.assign(window, { Home });
