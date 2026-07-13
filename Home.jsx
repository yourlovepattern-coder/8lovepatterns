/* 8LovePatterns, Homepage — Apple Health / Liven anatomy rebuild.
   One hue per module (wash/mid/deep), white module cards floating on the
   gray-blue page shell, horizontal galleries, illustrative (never invented)
   data visuals. See colors_and_type.css for the module hue tokens. */

const GLYPH_ICON = { inc:'flame', gue:'eye', fug:'feather', alc:'compass', sau:'heart', mir:'star', cam:'route', bas:'shield' };

/* ---- Hero floating photo tile (Liven layout). Accepts img OR a muted
   looping video source so tiles can be swapped for footage later without
   touching markup — pass either `src` (image) or `video` (mp4/webm). ---- */
function HeroTile({ src, video, alt, size, style, className='' }) {
  const box = { lg:180, md:130, sm:90 }[size] || 130;
  return (
    <div className={`lp-hero-tile ${className}`.trim()} style={{ width:box, height:box, ...style }}>
      {video
        ? <video src={video} autoPlay muted loop playsInline aria-hidden="true"/>
        : <img src={src} alt={alt}/>}
    </div>
  );
}

/* Seven tiles scattered around the hero headline, sized/positioned like
   theliven.com/fr: 2 large, 3 medium, 2 small, asymmetric left/right. */
const HERO_TILES = [
  { size:'lg', top:'4%',  left:'2%',  src:'assets/photos/hero-tile-father-child-river.webp',
    alt:'Father holding his young child by a river at golden hour' },
  { size:'lg', top:'62%', right:'3%', src:'assets/photos/hero-tile-mother-daughter-laughing.webp',
    alt:'Mother and daughter laughing together outdoors' },
  { size:'md', top:'8%',  right:'16%', src:'assets/photos/hero-tile-forest-canopy.webp',
    alt:'Looking up through a green forest canopy at the sky' },
  { size:'md', top:'40%', left:'13%', src:'assets/photos/hero-tile-couple-coffee.webp',
    alt:'Couple sitting together on the floor holding mugs of coffee' },
  { size:'md', top:'80%', left:'20%', src:'assets/photos/hero-tile-hand-wildflowers.webp',
    alt:'A hand gently touching wildflowers in golden light' },
  { size:'sm', top:'26%', right:'1%', src:'assets/photos/hero-tile-man-therapy-couch.webp',
    alt:'Man lying back on a couch, reflective' },
  { size:'sm', top:'44%', right:'2%', src:'assets/photos/hero-tile-man-phone-bed.webp',
    alt:'Man lying in bed at night checking his phone' },
];
const HERO_TILES_MOBILE = [HERO_TILES[0], HERO_TILES[2], HERO_TILES[1]];

function HeroPhotoTiles() {
  return (
    <>
      {HERO_TILES.map(t=>(
        <HeroTile key={t.src} className="lp-hero-tile-desktop" size={t.size} src={t.src} alt={t.alt}
          style={{ top:t.top, left:t.left, right:t.right }}/>
      ))}
      <div className="lp-hero-tile-mobile-row">
        {HERO_TILES_MOBILE.map(t=> <HeroTile key={t.src} size="sm" src={t.src} alt={t.alt}/>)}
      </div>
    </>
  );
}

/* ---- Auto-advancing swipeable image carousel kept for the Loop gallery captions source ---- */
const LOOP_PHOTOS = [
  { cap:'The message you typed and deleted four times', src:'assets/photos/loop-message-deleted.webp',
    alt:'Hands holding a phone showing an unanswered text message that reads "Hi, hope it will be over soon"' },
  { cap:"Checking if they're online. Again.", src:'assets/photos/loop-checking-online.webp',
    alt:'Woman lying in bed checking her phone late at night while her partner sleeps turned away beside her' },
  { cap:'Going cold at dinner and not knowing why', src:'assets/photos/loop-going-cold.webp',
    alt:'Woman lying in bed with arms crossed, looking away, a wall of pillows between her and her partner' },
];

/* ---- Depth scale product shot: Clear -> Buried, framed as an app window ---- */
function AnchorScaleProduct() {
  const levels = ['Clear','Light','Felt','Deep','Buried'];
  const current = 2; // "Felt" — illustrative reading, not a real user's result
  return (
    <ProductCard>
      <div style={{ fontSize:'.72rem', fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:'var(--ink-3)', marginBottom:16 }}>
        Your depth today
      </div>
      <div style={{ display:'flex', height:12, borderRadius:6, overflow:'hidden', gap:3 }}>
        {levels.map((l,i)=>(
          <div key={l} style={{ flex:1, borderRadius:3,
            background: i<=current ? `color-mix(in srgb, var(--mod-anchor-mid) ${40+i*15}%, #DCEBF7)` : '#EDF2F6' }}/>
        ))}
      </div>
      <div style={{ display:'flex', justifyContent:'space-between', marginTop:10 }}>
        {levels.map((l,i)=>(
          <span key={l} style={{ fontSize:'.74rem', fontWeight: i===current?700:500,
            color: i===current?'var(--mod-anchor-mid)':'var(--ink-3)' }}>{l}</span>
        ))}
      </div>
      <div style={{ marginTop:18, padding:'12px 14px', borderRadius:14, background:'var(--mod-anchor-wash)',
        display:'flex', alignItems:'center', gap:10 }}>
        <span style={{ width:30, height:30, borderRadius:9, display:'grid', placeItems:'center', flexShrink:0,
          background:`linear-gradient(155deg, var(--mod-anchor-deep1), var(--mod-anchor-deep2))` }}>
          <Icon name="anchor" size={15} stroke={2} style={{ color:'#fff' }}/>
        </span>
        <p style={{ margin:0, fontSize:'.86rem', color:'var(--ink-1)', lineHeight:1.4 }}>Today's level: <b>Felt</b> — illustrative reading</p>
      </div>
    </ProductCard>
  );
}

/* ---- Bento card 1: mini calendar, weekly recurrence, illustrative ---- */
function LoopCalendarCard() {
  const hitIdx = new Set([3, 10, 17, 24]); // same weekday, four weeks — illustrative pattern only
  return (
    <div className="lp-bento-cell">
      <ModuleGlyph icon="route" deep1="var(--mod-loop-deep1)" deep2="var(--mod-loop-deep2)"/>
      <h3 className="lp-h4" style={{ margin:0 }}>The loop, seen over a month.</h3>
      <Reveal className="lp-calendar" style={{ marginTop:4 }}>
        {Array.from({length:28}).map((_,i)=>(
          <span key={i} className={hitIdx.has(i)?'hit is-visible':''} style={hitIdx.has(i)?{ transitionDelay:`${[...hitIdx].indexOf(i)*60}ms` }:undefined}/>
        ))}
      </Reveal>
      <p style={{ margin:'auto 0 0', color:'var(--ink-3)', fontSize:'.88rem' }}>Same trigger, same week, same ending.</p>
    </div>
  );
}

/* ---- Bento card 2: semicircular Anchor gauge ---- */
function AnchorGaugeCard() {
  const segColors = ['#DCEBF7','#B9D9F0','var(--mod-anchor-mid)','#1F6EA8','#14507E'];
  return (
    <div className="lp-bento-cell">
      <ModuleGlyph icon="compass" deep1="var(--mod-anchor-deep1)" deep2="var(--mod-anchor-deep2)"/>
      <h3 className="lp-h4" style={{ margin:0 }}>The Anchor gauge.</h3>
      <svg viewBox="0 0 200 110" style={{ width:'100%', maxWidth:220, margin:'4px auto 0' }}>
        {segColors.map((c,i)=>{
          const a0 = Math.PI - i*(Math.PI/5), a1 = Math.PI - (i+1)*(Math.PI/5);
          const x0=100+90*Math.cos(a0), y0=100-90*Math.sin(a0);
          const x1=100+90*Math.cos(a1), y1=100-90*Math.sin(a1);
          return <path key={i} d={`M ${x0} ${y0} A 90 90 0 0 1 ${x1} ${y1}`} stroke={c} strokeWidth="16" fill="none" strokeLinecap="round"/>;
        })}
        {(()=>{ const ang = Math.PI - 2.5*(Math.PI/5); const nx=100+62*Math.cos(ang), ny=100-62*Math.sin(ang);
          return <><line x1="100" y1="100" x2={nx} y2={ny} stroke="var(--ink-1)" strokeWidth="3" strokeLinecap="round"/>
          <circle cx="100" cy="100" r="6" fill="var(--ink-1)"/></>; })()}
      </svg>
      <p style={{ margin:'auto 0 0', color:'var(--ink-3)', fontSize:'.88rem' }}>Your depth today decides what helps today.</p>
    </div>
  );
}

/* ---- Bento card 3: typographic "33" ---- */
function CountCard() {
  return (
    <div className="lp-bento-cell">
      <ModuleGlyph icon="check" deep1="var(--mod-how-deep1)" deep2="var(--mod-how-deep2)"/>
      <h3 className="lp-h4" style={{ margin:0 }}>Five minutes, thirty-three questions.</h3>
      <div style={{ margin:'6px 0 0', fontFamily:'var(--font-display)', fontWeight:700, fontSize:'clamp(3rem,2.4rem+2vw,4.2rem)',
        lineHeight:1, color:'var(--mod-how-mid)' }}>33</div>
      <p style={{ margin:'auto 0 0', color:'var(--ink-3)', fontSize:'.88rem' }}>questions · 5 minutes · 2 research axes</p>
    </div>
  );
}

/* ---- Bento card 4: photo-quote (testimonial-ready slot) ---- */
function PhotoQuoteCard() {
  return (
    <div className="lp-bento-cell" style={{ position:'relative', padding:0, minHeight:280, overflow:'hidden' }}>
      <img src="assets/photos/hero-late-night-phone.webp" alt="Woman lying in bed at night, checking her phone"
        style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover',
          outline:'1px solid rgba(0,0,0,.1)', outlineOffset:'-1px' }}/>
      <div style={{ position:'absolute', inset:0, background:'linear-gradient(180deg, rgba(0,0,0,.05), rgba(0,0,0,.65))' }}/>
      <div style={{ position:'relative', marginTop:'auto', padding:'22px 22px 24px', color:'#fff' }}>
        <span style={{ fontSize:'2rem', fontFamily:'Georgia,serif', opacity:.7, lineHeight:1 }}>&ldquo;</span>
        <p style={{ margin:'4px 0 0', fontWeight:600, fontSize:'1.05rem', lineHeight:1.4, textWrap:'pretty' }}>
          I knew exactly what I was doing. I did it anyway.
        </p>
      </div>
    </div>
  );
}

/* ---- Patterns module: minimal glyph cards, no character illustration ---- */
function PatternGlyphCard({ arch, go }) {
  const [h,setH] = useState(false);
  return (
    <button onClick={()=>go('profil',arch.code)} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
      className="lp-lift" style={{ cursor:'pointer', border:'none', textAlign:'left', width:'100%',
        background:'#fff', borderRadius:'var(--r-card)', boxShadow:'var(--sh-1)',
        padding:'22px', display:'flex', flexDirection:'column', gap:12 }}>
      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
        <span className="lp-glyph" style={{ background:arch.accent }}>
          <Icon name={GLYPH_ICON[arch.code]||'star'} size={19} stroke={2} style={{ color:'#fff' }}/>
        </span>
        <span style={{ width:100, height:100, borderRadius:'50%', flexShrink:0, position:'relative',
          background:`radial-gradient(120% 100% at 50% 100%, ${arch.soft} 0%, transparent 70%)` }}>
          <img src={`assets/archetypes/${arch.code}.webp`} alt="" style={{ position:'absolute', bottom:0, left:'50%',
            transform:'translateX(-50%)', height:'100%', width:'auto', objectFit:'contain', objectPosition:'bottom',
            filter:'drop-shadow(0 6px 10px rgba(0,0,0,.14))' }}/>
        </span>
      </div>
      <h3 className="lp-h4" style={{ margin:0 }}>{arch.name}</h3>
      <p style={{ margin:0, color:'var(--ink-3)', fontSize:'.92rem', lineHeight:1.45 }}>{arch.tagline}</p>
      <span style={{ display:'flex', alignItems:'center', gap:6, marginTop:'auto', color: h?arch.accent:'var(--ink-3)',
        fontWeight:600, fontSize:'.85rem', transition:'color .2s ease' }}>
        Discover <Icon name="arrow-right" size={14} style={{ transform: h?'translateX(3px)':'none', transition:'transform .2s ease' }}/>
      </span>
    </button>
  );
}

/* ---- Pain-entry chips (Liven multi-door pattern) ---- */
function PainEntryChips({ go }) {
  const chips = [
    { label:'Why do I push people away', entry:'push_away' },
    { label:'Why do I need constant reassurance', entry:'reassurance' },
    { label:'Why do I keep picking fights', entry:'picking_fights' },
    { label:'Why do I feel trapped when it gets serious', entry:'feel_trapped' },
  ];
  function click(entry){
    try { window.LP_track && window.LP_track('pain_entry_click', { entry }); } catch(e){}
    try { window.LP_PH && window.LP_PH('pain_entry_click', { entry }); } catch(e){}
    go('intro', null, { entry });
  }
  return (
    <div className="lp-chip-row">
      {chips.map(c=>(
        <button key={c.entry} className="lp-pain-chip" onClick={()=>click(c.entry)} data-track={`pain:${c.entry}`}>
          {c.label}
        </button>
      ))}
    </div>
  );
}

function Home({ go }) {
  const { t } = useLang();
  return (
    <div>
      {/* HERO — directly on the neutral page background, no card, no wash */}
      <section className="lp-hero-wrap" style={{ padding:'clamp(48px,7vw,84px) var(--gutter) clamp(32px,5vw,56px)' }}>
        <HeroPhotoTiles/>
        <Container style={{ textAlign:'center', position:'relative', zIndex:2 }}>
          <h1 className="lp-module-h" style={{ maxWidth:920, margin:'14px auto 0' }}>
            Stop reliving the same heartbreak.
          </h1>
          <p className="lp-module-lead" style={{ margin:'20px auto 0' }}>
            When love feels unsafe, <span style={{ color:'var(--mod-loop-mid)', fontWeight:600 }}>something in you takes over</span>. Find out what, before it decides for you again.
          </p>
          <div style={{ display:'flex', gap:14, justifyContent:'center', marginTop:28, flexWrap:'wrap' }}>
            <Button size="lg" icon="arrow-right" onClick={()=>go('intro')}>Reveal My Pattern</Button>
          </div>
          <div style={{ marginTop:18, color:'var(--ink-3)', fontSize:'.9rem' }}>Free · Private · No sign-up</div>
        </Container>
      </section>

      {/* LOOP MODULE — warm */}
      <Module wash="var(--mod-loop-wash)">
        <Reveal>
          <ModuleGlyph icon="route" deep1="var(--mod-loop-deep1)" deep2="var(--mod-loop-deep2)" size="lg"/>
          <h2 className="lp-module-h" style={{ marginTop:20, maxWidth:640 }}>Different person. Same ending.</h2>
          <p className="lp-module-lead" style={{ marginTop:16 }}>
            The 2am reread. The fight you started to feel something. The silence you couldn't break. It's not bad luck. <span style={{ color:'var(--mod-loop-mid)', fontWeight:600 }}>It's a loop, and loops can be mapped.</span>
          </p>
        </Reveal>
        <div style={{ marginTop:36 }}>
          <Gallery>
            {LOOP_PHOTOS.map(p=> <PhotoCard key={p.src} src={p.src} alt={p.alt} caption={p.cap}/>)}
            <StatCard icon="heart" deep1="var(--mod-loop-deep1)" deep2="var(--mod-loop-deep2)"
              claim="The urge to distance shows up before anything goes wrong."
              support="Distancing and reassurance-seeking are documented attachment strategies, not character flaws."
              footnote={<a href="#ref-1" style={{ color:'inherit' }}>1</a>}/>
          </Gallery>
        </div>
        <div style={{ marginTop:8, display:'flex', justifyContent:'center' }}>
          <Button size="lg" icon="arrow-right" onClick={()=>go('intro')}>Reveal My Pattern</Button>
        </div>
      </Module>

      {/* ANCHOR MODULE — sky */}
      <Module wash="var(--mod-anchor-wash)">
        <Reveal>
          <ModuleGlyph icon="anchor" deep1="var(--mod-anchor-deep1)" deep2="var(--mod-anchor-deep2)" size="lg"/>
          <h2 className="lp-module-h" style={{ marginTop:20, maxWidth:640 }}>The Anchor.</h2>
          <p className="lp-module-lead" style={{ marginTop:16 }}>
            You already know what you do. Knowing it hasn't stopped you. That gap is <span style={{ color:'var(--mod-anchor-mid)', fontWeight:600 }}>how deep the pattern runs in you right now</span>. Shallow, you catch it in time. Deep, you watch yourself do it anyway. Every other test skips the one measure that decides what actually helps.
          </p>
        </Reveal>
        <div style={{ marginTop:36 }}>
          <Gallery>
            <AnchorScaleProduct/>
            <StatCard icon="compass" deep1="var(--mod-anchor-deep1)" deep2="var(--mod-anchor-deep2)"
              claim="Same pattern. Five possible depths."
              support="Your level decides what actually helps — a reminder in the moment, or a plan for before it."/>
            <PhotoCard src="assets/photos/hero-quiet-distance.webp"
              alt="Woman sitting alone on a bed, knees pulled in, looking down quietly"
              caption="The quiet distance nobody asked about"/>
          </Gallery>
        </div>
        <div style={{ marginTop:8, display:'flex', justifyContent:'center' }}>
          <Button size="lg" icon="arrow-right" onClick={()=>go('intro')}>Reveal My Pattern</Button>
        </div>

        {/* BENTO STAT GRID — illustrative visuals, placed right after the Anchor module */}
        <Reveal style={{ marginTop:56 }}>
          <div className="lp-bento">
            <LoopCalendarCard/>
            <AnchorGaugeCard/>
            <CountCard/>
            <PhotoQuoteCard/>
          </div>
          <p style={{ marginTop:14, textAlign:'center', color:'var(--ink-3)', fontSize:'.8rem' }}>Visualizations are illustrative.</p>
        </Reveal>
      </Module>

      {/* PATTERNS — plain, directly on the page (no card), like Liven's review strip */}
      <section style={{ padding:'clamp(48px,7vw,84px) var(--gutter)' }}>
        <Container>
          <Reveal style={{ textAlign:'center', maxWidth:640, margin:'0 auto' }}>
            <h2 className="lp-module-h">Meet the eight things that take over.</h2>
            <p className="lp-module-lead" style={{ margin:'16px auto 0' }}>One of them runs your loop. Five minutes to find out which.</p>
          </Reveal>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'18px', marginTop:36 }} className="lp-mech-grid">
            {window.ARCHETYPES.map(a=> <PatternGlyphCard key={a.code} arch={a} go={go}/>)}
          </div>
          <div style={{ marginTop:32, display:'flex', justifyContent:'center' }}>
            <Button size="lg" variant="secondary" icon="arrow-right" onClick={()=>go('profils')}>{t('teaser.cta')}</Button>
          </div>
        </Container>
      </section>

      {/* HOW IT WORKS — full-bleed saturated green gradient, Apple accent moment, glass step cards */}
      <section style={{ background:`linear-gradient(160deg, var(--mod-how-bold1) 0%, var(--mod-how-bold2) 100%)`,
        boxShadow:'var(--sh-band-highlight)', padding:'clamp(48px,7vw,84px) var(--gutter)', textAlign:'center' }}>
        <Container narrow>
          <Reveal>
            <h2 className="lp-module-h" style={{ color:'#fff' }}>Five minutes. Then the map.</h2>
          </Reveal>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:18, marginTop:36, maxWidth:820, marginInline:'auto' }} className="lp-mech-grid">
            {[
              'Answer 33 questions. No sign-up, nothing stored with your name.',
              'See your pattern and how deep it currently runs.',
              'Get the one move that loosens it, matched to your level.',
            ].map((s,i)=>(
              <div key={s} className="lp-glass-card" style={{ padding:'24px 20px', textAlign:'left' }}>
                <span style={{ display:'inline-grid', placeItems:'center', width:36, height:36, borderRadius:'50%',
                  background:'rgba(255,255,255,.22)', color:'#fff', fontWeight:700, fontFamily:'var(--font-display)', fontSize:'1rem' }}>{i+1}</span>
                <p style={{ margin:'14px 0 0', color:'#fff', fontSize:'1rem', lineHeight:1.5 }}>{s}</p>
              </div>
            ))}
          </div>
          <div style={{ maxWidth:820, marginInline:'auto' }}>
            <PainEntryChips go={go}/>
          </div>
          <div style={{ marginTop:32, display:'flex', justifyContent:'center' }}>
            <Button size="lg" variant="light" icon="arrow-right" onClick={()=>go('intro')}>Reveal My Pattern</Button>
          </div>
        </Container>
      </section>

      {/* CREDIBILITY — full-bleed teal wash, no card, Apple diagonal-section style */}
      <section style={{ background:`linear-gradient(180deg, #FFFFFF 0%, var(--mod-cred-wash) 100%)`, padding:'clamp(48px,7vw,84px) var(--gutter)' }}>
        <Container>
          <Reveal style={{ textAlign:'center', maxWidth:660, margin:'0 auto' }}>
            <ModuleGlyph icon="shield" deep1="var(--mod-cred-deep1)" deep2="var(--mod-cred-deep2)" size="lg" style={{ margin:'0 auto' }}/>
            <h2 className="lp-module-h" style={{ marginTop:20 }}>Built on 50 years of attachment research.</h2>
            <p className="lp-module-lead" style={{ margin:'16px auto 0' }}>
              <span style={{ color:'var(--mod-cred-mid)', fontWeight:600 }}>Not a diagnosis, a mirror.</span> Educational self-reflection tool · Not a clinical diagnosis.
            </p>
          </Reveal>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:16, marginTop:36 }} className="lp-mech-grid">
            {[
              { t:'Bowlby (1969)', d:'Founding work on attachment as a survival system in close relationships.' },
              { t:'Hazan & Shaver (1987)', d:'Extended attachment theory into adult romantic relationships.' },
              { t:'Mikulincer & Shaver (2016)', d:'Mapped anxious and avoidant strategies for regulating closeness and fear.' },
              { t:'Fraley & Waller (1998)', d:'Evidence for attachment styles as continuous dimensions, not fixed boxes.' },
            ].map(c=>(
              <div key={c.t} className="lp-lift" style={{ background:'#fff', borderRadius:'var(--r-card)', boxShadow:'var(--sh-1)', padding:'22px' }}>
                <h3 className="lp-h4" style={{ margin:0, color:'var(--mod-cred-mid)' }}>{c.t}</h3>
                <p style={{ margin:'10px 0 0', color:'var(--ink-3)', fontSize:'.9rem', lineHeight:1.5 }}>{c.d}</p>
              </div>
            ))}
          </div>
          <div style={{ maxWidth:680, margin:'30px auto 0', fontSize:'.82rem', color:'var(--ink-3)', lineHeight:1.7 }}>
            <ol style={{ paddingLeft:18, margin:0 }}>
              <li id="ref-1">Mikulincer, M. &amp; Shaver, P. R. (2016). <i>Attachment in Adulthood: Structure, Dynamics, and Change.</i></li>
              <li id="ref-2">Bowlby, J. (1969). <i>Attachment and Loss, Vol. 1.</i></li>
              <li id="ref-3">Hazan, C. &amp; Shaver, P. (1987). Romantic love conceptualized as an attachment process.</li>
              <li id="ref-4">Fraley, R. C. &amp; Waller, N. G. (1998). Adult attachment patterns: A test of the typological model.</li>
            </ol>
            <p style={{ marginTop:14 }}>8LovePatterns is educational and is not a clinical diagnosis.</p>
          </div>
        </Container>
      </section>

      {/* FAQ — restyled to system */}
      <Module>
        <FAQ embedded/>
      </Module>

      {/* GRADIENT SUPPORT BAND — pre-footer */}
      <section style={{ padding:'0 var(--gutter) clamp(56px,8vw,100px)' }}>
        <div className="lp-support-band" style={{ maxWidth:'var(--maxw)', margin:'0 auto' }}>
          <h2 className="lp-module-h" style={{ color:'#fff', fontSize:'clamp(2rem,1.6rem+2vw,2.8rem)' }}>A question before you start.</h2>
          <p style={{ margin:'14px auto 0', color:'rgba(255,255,255,.88)', fontSize:'1.05rem' }}>
            support@8lovepatterns.com — we usually reply within 48 hours.
          </p>
          <div style={{ marginTop:26 }}>
            <Button size="lg" variant="light" href="mailto:support@8lovepatterns.com">Email us</Button>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ padding:'0 var(--gutter) clamp(56px,9vw,110px)' }}>
        <div style={{ maxWidth:'var(--maxw)', margin:'0 auto', borderRadius:'var(--r-module)', padding:'clamp(40px,6vw,72px)',
          background:'linear-gradient(160deg, var(--mod-how-bold1) 0%, var(--mod-how-bold2) 100%)', boxShadow:'var(--sh-band-highlight)', textAlign:'center' }}>
          <h2 className="lp-module-h" style={{ color:'#fff', fontSize:'clamp(2rem,1.6rem+2vw,2.8rem)' }}>The pattern repeats until someone looks at it. Be the one who looks.</h2>
          <div style={{ marginTop:28, display:'flex', justifyContent:'center' }}>
            <Button size="lg" icon="arrow-right" onClick={()=>go('intro')}>Reveal My Pattern</Button>
          </div>
          <div style={{ marginTop:20, color:'rgba(255,255,255,.72)', fontSize:'.9rem', display:'flex', gap:'8px', justifyContent:'center', alignItems:'center', flexWrap:'wrap' }}>
            <Icon name="lock" size={15}/> Free · 5 minutes · Private
          </div>
        </div>
      </section>
    </div>
  );
}
Object.assign(window, { Home });
