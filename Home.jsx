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

/* Liven-style floating tiles around the hero, desktop only (hidden <=900px via .lp-hero-float in index.html) */
function HeroFloatTile({ style, children }) {
  return (
    <div className="lp-hero-float" style={{
      position:'absolute', width:'clamp(64px,6vw,88px)', height:'clamp(64px,6vw,88px)',
      borderRadius:'20px', overflow:'hidden', zIndex:2,
      boxShadow:'0 14px 26px -10px rgba(15,45,55,.4)', border:'3px solid rgba(255,255,255,.92)',
      ...style }}>{children}</div>
  );
}
function HeroFloatTiles() {
  const mech = [
    { code:'inc', top:'6%',  left:'3%' , rot:-8 },
    { code:'fug', top:'50%', left:'1.5%', rot:6 },
    { code:'alc', top:'10%', right:'4%', rot:7 },
    { code:'bas', top:'52%', right:'2%', rot:-6 },
  ];
  /* 3 slots for real human photos, supplied later by Adrien. Neutral placeholder
     block with a descriptive aria-label standing in for alt text until then. */
  const photos = [
    { top:'30%', left:'10%', rot:5,  label:'Placeholder — real member photo 1' },
    { top:'76%', left:'8%',  rot:-7, label:'Placeholder — real member photo 2' },
    { top:'32%', right:'11%', rot:-5, label:'Placeholder — real member photo 3' },
  ];
  return (
    <>
      {mech.map(m=>(
        <HeroFloatTile key={m.code} style={{ top:m.top, left:m.left, right:m.right, transform:`rotate(${m.rot}deg)`, background:'linear-gradient(165deg,#ffffff,#eef6f7)' }}>
          <img src={`assets/archetypes/${m.code}_avatar.png`} alt="" style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }}/>
        </HeroFloatTile>
      ))}
      {photos.map(p=>(
        <HeroFloatTile key={p.label} style={{ top:p.top, left:p.left, right:p.right, transform:`rotate(${p.rot}deg)` }}>
          <div role="img" aria-label={p.label} style={{ width:'100%', height:'100%', display:'grid', placeItems:'center',
            background:'linear-gradient(150deg,#cfd8dc,#eceff1)', color:'#78909c' }}>
            <Icon name="users" size={22}/>
          </div>
        </HeroFloatTile>
      ))}
    </>
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

/* Auto-advancing, swipeable image carousel with dot indicators (Liven-style) */
function LoopCarousel() {
  const slides = [
    'The message you typed and deleted four times',
    "Checking if they're online. Again.",
    'Going cold at dinner and not knowing why',
    "Apologizing to end it, not because you're sorry",
    'Promising yourself next time will be different',
  ];
  const [i, setI] = useState(0);
  const touchX = useRef(null);
  useEffect(()=>{
    const id = setInterval(()=> setI(v=>(v+1)%slides.length), 5000);
    return ()=>clearInterval(id);
  }, [slides.length]);
  function onTouchStart(e){ touchX.current = e.touches[0].clientX; }
  function onTouchEnd(e){
    if(touchX.current==null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if(Math.abs(dx)>40){ setI(v => (v + (dx<0?1:-1) + slides.length) % slides.length); }
    touchX.current = null;
  }
  return (
    <div>
      <div onTouchStart={onTouchStart} onTouchEnd={onTouchEnd} style={{ position:'relative', borderRadius:'var(--r-xl)',
        overflow:'hidden', aspectRatio:'4/5', background:'linear-gradient(150deg,#cfd8dc,#eceff1)', boxShadow:'var(--sh-md)' }}>
        {slides.map((cap,idx)=>(
          <div key={cap} style={{ position:'absolute', inset:0, opacity: idx===i?1:0,
            transition:'opacity .5s ease', pointerEvents: idx===i?'auto':'none' }}>
            {/* Placeholder photo slot — real member photos to be supplied by Adrien */}
            <div role="img" aria-label={`Placeholder photo — ${cap}`} style={{ position:'absolute', inset:0,
              display:'grid', placeItems:'center', color:'#78909c' }}>
              <Icon name="users" size={34}/>
            </div>
            <div style={{ position:'absolute', left:0, right:0, bottom:0, padding:'22px 22px 26px',
              background:'linear-gradient(0deg, rgba(0,0,0,.62), transparent)' }}>
              <p style={{ color:'#fff', fontWeight:600, fontSize:'1.02rem', lineHeight:1.4, margin:0, textWrap:'pretty' }}>{cap}</p>
            </div>
          </div>
        ))}
      </div>
      <div style={{ display:'flex', justifyContent:'center', gap:'8px', marginTop:16 }}>
        {slides.map((_,idx)=>(
          <button key={idx} onClick={()=>setI(idx)} aria-label={`Go to slide ${idx+1}`}
            style={{ width: idx===i?22:8, height:8, borderRadius:'4px', border:'none', cursor:'pointer',
              background: idx===i?'var(--corail)':'var(--hairline-2)', transition:'all .25s ease', padding:0 }}/>
        ))}
      </div>
    </div>
  );
}

/* Depth scale sketch, Clear -> Buried. Labeled placeholder until a real asset exists. */
function AnchorScale() {
  const levels = ['Clear','Light','Felt','Deep','Buried'];
  return (
    <div style={{ background:'var(--surface)', border:'1px solid var(--hairline)', borderRadius:'var(--r-lg)', padding:'20px 22px', width:'100%', boxSizing:'border-box' }}>
      <div style={{ fontSize:'.72rem', fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:'var(--ink-3)', marginBottom:14 }}>
        Depth scale — placeholder sketch
      </div>
      <div style={{ display:'flex', height:10, borderRadius:6, overflow:'hidden' }}>
        {levels.map((l,i)=>(
          <div key={l} style={{ flex:1, background:`color-mix(in srgb, var(--corail) ${20+i*20}%, var(--hairline-2))` }}/>
        ))}
      </div>
      <div style={{ display:'flex', justifyContent:'space-between', marginTop:10 }}>
        {levels.map(l=> <span key={l} style={{ fontSize:'.72rem', fontWeight:600, color:'var(--ink-3)' }}>{l}</span>)}
      </div>
    </div>
  );
}

/* CREDIBILITY, merged strip + science cards under one heading */
function CredibilitySection() {
  const cards = [
    { ic:'anchor',  c:'#2C7E91', soft:'#E4F0F2', t:'Adult attachment',
      d:'Attachment research studies how people respond to closeness, distance, trust, dependence, conflict, and fear of rejection. Many models describe two major dimensions: attachment anxiety and attachment avoidance.' },
    { ic:'heart',   c:'var(--corail)', soft:'var(--corail-soft)', t:'Emotional regulation',
      d:'When connection feels threatened, people regulate emotions differently. Some seek reassurance and intensify. Others withdraw, suppress, rationalize, or disconnect.' },
    { ic:'compass', c:'var(--violet)', soft:'var(--violet-soft)', t:'Schema patterns',
      d:'Schema therapy describes how early unmet emotional needs can become recurring patterns in adult relationships. These patterns can shape who feels familiar, what feels safe, and what triggers protection.' },
    { ic:'route',   c:'#9A7321', soft:'var(--or-soft)', t:'Relationship self-sabotage',
      d:'Research on relationship self-sabotage shows that fear, defensiveness, trust difficulty, and protective behaviors can keep people stuck in repeating romantic cycles.' },
  ];
  return (
    <Section band="var(--paper-2)">
      <Container>
        <div style={{ textAlign:'center', maxWidth:640, margin:'0 auto 8px' }}>
          <Eyebrow color="var(--violet)">Science-backed, not clinically diagnostic</Eyebrow>
          <h2 className="lp-h1" style={{ marginTop:12 }}>Built on 50 years of attachment research.<br/>Not a diagnosis, a mirror.</h2>
          <div style={{ marginTop:10, fontSize:'.82rem', color:'var(--ink-3)', fontWeight:500 }}>
            Educational self-reflection tool · Not a clinical diagnosis
          </div>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'16px', marginTop:26 }} className="lp-mech-grid">
          {cards.map(c=>(
            <div key={c.t} style={{ background:'var(--surface)', border:'1px solid var(--hairline)', borderRadius:'var(--r-lg)',
              padding:'22px', boxShadow:'var(--sh-xs)', display:'flex', flexDirection:'column', gap:'12px' }}>
              <span style={{ display:'grid', placeItems:'center', width:44, height:44, borderRadius:'13px', background:c.soft, color:c.c }}>
                <Icon name={c.ic} size={21}/>
              </span>
              <h3 className="lp-h4" style={{ margin:0 }}>{c.t}</h3>
              <p style={{ margin:0, color:'var(--ink-2)', lineHeight:1.55, fontSize:'.93rem' }}>{c.d}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* HOW IT WORKS, three numbered steps */
function HowItWorksSection({ go }) {
  const steps = [
    'Answer 33 questions. No sign-up, nothing stored with your name.',
    'See your pattern and how deep it currently runs.',
    'Get the one move that loosens it, matched to your level.',
  ];
  return (
    <Section>
      <Container narrow style={{ textAlign:'center' }}>
        <h2 className="lp-h1">Five minutes. Then you're holding the map.</h2>
        <div style={{ display:'flex', flexDirection:'column', gap:22, marginTop:36, textAlign:'left' }}>
          {steps.map((s,i)=>(
            <div key={s} style={{ display:'flex', gap:18, alignItems:'flex-start' }}>
              <span style={{ flexShrink:0, display:'grid', placeItems:'center', width:40, height:40, borderRadius:'50%',
                background:'var(--corail-soft)', color:'var(--corail)', fontWeight:800, fontFamily:'var(--font-display)', fontSize:'1.1rem' }}>{i+1}</span>
              <p style={{ margin:0, color:'var(--ink-2)', fontSize:'1.05rem', lineHeight:1.6, paddingTop:8 }}>{s}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop:32, display:'flex', justifyContent:'center' }}>
          <Button size="lg" icon="arrow-right" onClick={()=>go('intro')}>Reveal My Pattern</Button>
        </div>
      </Container>
    </Section>
  );
}

/* LOOP, the repeating story that isn't bad luck */
function LoopSection({ go }) {
  return (
    <Section band="var(--paper-2)">
      <Container>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'clamp(32px,5vw,64px)', alignItems:'center' }} className="lp-2col">
          <div>
            <h2 className="lp-h1">Different person.<br/><span style={{ color:'var(--corail)' }}>Same ending.</span></h2>
            <p className="lp-lead" style={{ marginTop:16 }}>
              The 2am reread. The fight you started to feel something. The silence you couldn't break. It's not bad luck. It's a loop, and loops can be mapped.
            </p>
            <div style={{ marginTop:26 }}>
              <Button size="lg" icon="arrow-right" onClick={()=>go('intro')}>Reveal My Pattern</Button>
            </div>
          </div>
          <LoopCarousel/>
        </div>
      </Container>
    </Section>
  );
}

function Home({ go }) {
  const { t } = useLang();
  return (
    <div>
      {/* HERO, promise + CTA */}
      <section style={{ position:'relative', overflow:'hidden', color:'#fff',
        background:'linear-gradient(180deg, var(--lp-hero-a, #2E8294) 0%, var(--lp-hero-b, #236B7C) 100%)' }}>
        <ZigTop/>
        <HeroFloatTiles/>
        <Container style={{ position:'relative', zIndex:2, textAlign:'center', paddingTop:'clamp(40px,6vw,72px)' }}>
          <div style={{ display:'inline-flex' }}>
            <Chip soft="rgba(255,255,255,.16)" color="#fff"><Icon name="sparkle" size={14}/> {t('hero.badge')}</Chip>
          </div>
          <h1 className="lp-display" style={{ color:'#fff', maxWidth:900, margin:'18px auto 0' }}>
            {t('hero.h1a')}<br/>{t('hero.h1b')}
          </h1>
          <p style={{ color:'rgba(255,255,255,.86)', fontSize:'1.18rem', lineHeight:1.55, maxWidth:580, margin:'18px auto 0', textWrap:'pretty' }}>
            When love feels unsafe, something in you takes over. Find out what, before it decides for you again.
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

      {/* LOOP, different person same ending */}
      <LoopSection go={go}/>

      {/* ANCHOR, the depth gap between knowing and doing */}
      <Section style={{ padding:'clamp(44px,6vw,84px) 0' }}>
        <Container>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'clamp(32px,5vw,64px)', alignItems:'center' }} className="lp-2col">
            <div>
              <h2 className="lp-h1">You already know what you do.<br/><span style={{ color:'var(--corail)' }}>Knowing it hasn't stopped you.</span></h2>
              <p className="lp-lead" style={{ marginTop:16 }}>
                That gap is the Anchor: how deep the pattern runs in you right now. Shallow, you catch it in time. Deep, you watch yourself do it anyway. Every other test skips the one measure that decides what actually helps.
              </p>
              <div style={{ marginTop:26 }}>
                <Button size="lg" icon="arrow-right" onClick={()=>go('intro')}>Reveal My Pattern</Button>
              </div>
            </div>
            <div style={{ display:'flex', flexDirection:'column', gap:24, alignItems:'center' }}>
              <img src="assets/archetypes/anc.png" alt="The Anchor" style={{ width:'56%', maxWidth:220, height:'auto', filter:'drop-shadow(0 16px 20px rgba(15,45,55,.2))' }}/>
              <AnchorScale/>
            </div>
          </div>
        </Container>
      </Section>

      {/* PATTERNS TEASER, the cast, front and center */}
      <Section band="var(--paper-2)">
        <Container>
          <div style={{ textAlign:'center', maxWidth:620, margin:'0 auto 40px' }}>
            <h2 className="lp-h1">Meet the eight things that take over.</h2>
            <p className="lp-lead" style={{ marginTop:14 }}>One of them runs your loop. Five minutes to find out which.</p>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'22px', alignItems:'stretch' }} className="lp-mech-grid">
            {window.ARCHETYPES.map(a=> <PatternChip key={a.code} arch={a} go={go}/>)}
          </div>
          <div style={{ marginTop:36, display:'flex', justifyContent:'center', gap:'14px', flexWrap:'wrap' }}>
            <Button size="lg" variant="secondary" icon="arrow-right" onClick={()=>go('profils')}>{t('teaser.cta')}</Button>
          </div>
        </Container>
      </Section>

      {/* HOW IT WORKS, three steps to the report */}
      <HowItWorksSection go={go}/>

      {/* CREDIBILITY, merged strip + science cards */}
      <CredibilitySection/>

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
