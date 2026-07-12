/* 8LovePatterns, Public pattern pages + library (English) */

/* The eight patterns only. The Anchor is not a pattern — it's the center
   they orbit, presented separately below the grid (see AnchorBand). */
const CAST_ORDER = ['inc','gue','fug','alc','sau','bas','cam','mir'];

function ProfilsIndex({ go }) {
  const fams = ['poursuis','fuis','controle','efface','protege'];
  return (
    <div>
      <Module>
        <Container style={{ textAlign:'center' }}>
          <Eyebrow color="var(--cta)">The 8 protection patterns</Eyebrow>
          <h1 className="lp-h1" style={{ marginTop:12, color:'var(--head)' }}>The eight protection patterns.</h1>
          <p className="lp-lead" style={{ marginTop:14, maxWidth:560, marginInline:'auto', color:'var(--body-2)' }}>
            Eight ways of protecting love, all orbiting one secure center. Tap any character to meet them.
          </p>
        </Container>
        <Container style={{ marginTop:32 }}>
          <div className="lp-fam-legend">
            {fams.map(fk=>{
              const fam = window.FAMILIES[fk];
              return (
                <div key={fk}>
                  <span style={{ width:11, height:11, borderRadius:'50%', background:fam.color, flexShrink:0 }}></span>
                  <span style={{ fontWeight:700, color:'var(--head)', fontSize:'.92rem' }}>{fam.label}</span>
                  <span style={{ color:'var(--ink-3)', fontSize:'.86rem' }}>· {fam.fear}</span>
                </div>
              );
            })}
          </div>
          <div className="lp-cast">
            {CAST_ORDER.map(code=> <CastTile key={code} code={code} go={go}/>)}
          </div>
          <AnchorBand go={go}/>
        </Container>
      </Module>
    </div>
  );
}

function CastTile({ code, go }) {
  const a = window.ARCHETYPES.find(x=>x.code===code);
  const fam = window.FAMILIES[a.family];
  const c = a.accent;
  const grad = `linear-gradient(180deg, color-mix(in srgb, ${c} 22%, #fff) 0%, color-mix(in srgb, ${c} 9%, #fff) 52%, #fff 100%)`;
  return (
    <button
      className="lp-cast-tile"
      onClick={()=>go('profil',a.code)}
      aria-label={`${a.name}, ${fam.label}`}
      style={{
        '--fam': c,
        '--tile-grad': grad,
        '--tile-edge': `color-mix(in srgb, ${c} 24%, #fff)`,
        '--tile-foot': `color-mix(in srgb, ${c} 7%, #fff)`,
      }}>
      <span className="lp-cast-go"><Icon name="arrow-right" size={18}/></span>
      <span className="lp-cast-fig">
        <img src={`assets/archetypes/${a.code}.webp`} alt={a.name}/>
      </span>
      <span className="lp-cast-label">
        <span className="lp-cast-fam"><span style={{ width:8, height:8, borderRadius:'50%', background:c, display:'inline-block' }}></span>{fam.label}</span>
        <span className="lp-cast-name" style={{ display:'block' }}>{a.name}</span>
        <span className="lp-cast-tag" style={{ display:'block' }}>{a.tagline}</span>
      </span>
    </button>
  );
}

/* The Anchor isn't a ninth tile in the grid above — it's the direction all
   eight point toward. Deliberately not a card: full-width, horizontal,
   radial gradient instead of the tile's flat wash, and two distinct exits
   rather than one whole-card tap — the portrait meets the Anchor itself,
   the text CTA explains where the scale behind it lives (Method). */
function AnchorBand({ go }) {
  const a = window.ANCRE;
  const c = a.accent;
  return (
    <div className="lp-hero-grid" style={{ marginTop:'clamp(28px,4vw,44px)', display:'grid',
      gridTemplateColumns:'.8fr 1.2fr', gap:'clamp(20px,3vw,40px)', alignItems:'center',
      borderRadius:'var(--r-xl)', overflow:'hidden', padding:'clamp(28px,4vw,44px)',
      background:`radial-gradient(120% 140% at 20% 20%, color-mix(in srgb, ${c} 20%, #fff) 0%, color-mix(in srgb, ${c} 7%, #fff) 55%, #fff 100%)`,
      border:`1px solid color-mix(in srgb, ${c} 22%, #fff)` }}>
      <button onClick={()=>go('profil','anc')} aria-label={`Meet ${a.name}`}
        style={{ display:'flex', justifyContent:'center', background:'none', border:'none', padding:0, cursor:'pointer' }}>
        <img src={`assets/archetypes/${a.code}.webp`} alt={a.name} style={{ width:'100%', maxWidth:220, height:'auto',
          filter:'drop-shadow(0 14px 18px rgba(20,16,45,.18))' }}/>
      </button>
      <div>
        <Eyebrow color={c}>The secure center</Eyebrow>
        <h2 className="lp-h2" style={{ marginTop:10, color:'var(--head)' }}>Not a pattern. The direction they all point toward.</h2>
        <p style={{ marginTop:12, color:'var(--body-2)', lineHeight:1.6 }}>{a.hook} {a.tagline}</p>
        <div style={{ marginTop:20 }}>
          <Button size="md" icon="arrow-right" onClick={()=>go('methode')}>See how the Anchor works</Button>
        </div>
      </div>
    </div>
  );
}

function Profile({ go, code='bas' }) {
  const arch = code==='anc' ? window.ANCRE : (window.ARCHETYPES.find(a=>a.code===code)||window.ARCHETYPES[7]);
  const fam = window.FAMILIES[arch.family];
  return (
    <div>
      <div style={{ position:'relative', overflow:'hidden', color:'#fff', borderRadius:'0 0 var(--r-module) var(--r-module)',
        background:`linear-gradient(105deg, color-mix(in srgb, ${arch.accent} 62%, #14142B) 0%, ${arch.accent} 80%)` }}>
        <Container style={{ position:'relative', zIndex:2, paddingTop:'28px', paddingBottom:'0' }}>
          <button onClick={()=>go('profils')} style={{ display:'inline-flex', alignItems:'center', gap:'6px', background:'none', border:'none',
            cursor:'pointer', color:'rgba(255,255,255,.82)', fontFamily:'var(--font-body)', fontWeight:600, fontSize:'.92rem', padding:0, marginBottom:'18px' }}>
            <Icon name="arrow-left" size={16}/> {window.useLang().t('q.back')==='Retour'?'Tous les schémas':'All patterns'}
          </button>
          <div style={{ display:'grid', gridTemplateColumns:'1.25fr .75fr', gap:'24px', alignItems:'end', minHeight:'clamp(220px,26vw,330px)' }} className="lp-profile-head">
            <div style={{ paddingBottom:'clamp(28px,4vw,52px)' }}>
              <div style={{ display:'inline-flex', alignItems:'center', gap:'9px', padding:'7px 15px', borderRadius:'var(--r-pill)',
                background:'rgba(255,255,255,.16)', marginBottom:'18px' }}>
                <span style={{ width:9, height:9, borderRadius:'50%', background:'#fff' }}></span>
                <span style={{ fontWeight:700, fontSize:'.82rem', letterSpacing:'.12em', textTransform:'uppercase', color:'#fff' }}>fears {fam.fear.toLowerCase()}</span>
              </div>
              <h1 className="lp-display" style={{ fontSize:'clamp(2.8rem,1.9rem+3.4vw,4.6rem)', color:'#fff', margin:0 }}>{arch.name}</h1>
              <div className="lp-h2" style={{ color:'#fff', fontWeight:700, marginTop:'6px', opacity:.96 }}>{fam.label}</div>
              <p style={{ marginTop:14, maxWidth:520, color:'rgba(255,255,255,.88)', fontSize:'1.2rem', lineHeight:1.5, textWrap:'pretty' }}>{arch.tagline}</p>
            </div>
            <div style={{ position:'relative', alignSelf:'end', minHeight:'1px' }}>
              <img src={`assets/archetypes/${arch.code}.webp`} alt={arch.name} style={{
                display:'block', width:'100%', maxWidth:'320px', marginLeft:'auto', height:'auto',
                filter:'drop-shadow(0 18px 22px rgba(15,20,45,.35))' }}/>
            </div>
          </div>
        </Container>
      </div>

      <Module>
        <Container style={{ maxWidth:740 }}>
          <ProfileBody code={arch.code}/>

          <div style={{ marginTop:'40px', textAlign:'center', paddingTop:'clamp(24px,4vw,36px)', borderTop:'1px solid var(--hairline)' }}>
            <h2 className="lp-h2" style={{ marginTop:0, color:'var(--head)' }}>Want to discover your own pattern?</h2>
            <p className="lp-lead" style={{ marginTop:12, maxWidth:440, marginInline:'auto', color:'var(--body-2)' }}>
              Take the test for free and find out which mechanism takes over when love gets uncertain.
            </p>
            <div style={{ marginTop:24, display:'flex', justifyContent:'center' }}>
              <Button size="lg" icon="arrow-right" onClick={()=>go('intro')}>Take the free test</Button>
            </div>
          </div>
        </Container>
      </Module>
    </div>
  );
}

Object.assign(window, { Profile, ProfilsIndex });
