/* 8LovePatterns, Public pattern pages + library (English) */

/* Order places the Anchor dead-center of a 3×3, the eight patterns orbiting it */
const CAST_ORDER = ['inc','gue','fug','alc','anc','sau','bas','cam','mir'];

function ProfilsIndex({ go }) {
  const fams = ['poursuis','fuis','controle','efface','protege'];
  return (
    <div>
      <Section style={{ padding:'clamp(40px,6vw,72px) 0 30px' }}>
        <Container style={{ textAlign:'center' }}>
          <Eyebrow color="var(--violet)">The 8 protection patterns</Eyebrow>
          <h1 className="lp-h1" style={{ marginTop:12 }}>The eight patterns, and the Anchor.</h1>
          <p className="lp-lead" style={{ marginTop:14, maxWidth:560, marginInline:'auto' }}>
            Eight ways of protecting love, orbiting the one secure center. Tap any character to meet them.
          </p>
        </Container>
      </Section>
      <Section style={{ padding:'0 0 clamp(50px,8vw,96px)' }}>
        <Container>
          <div className="lp-fam-legend">
            {fams.map(fk=>{
              const fam = window.FAMILIES[fk];
              return (
                <div key={fk}>
                  <span style={{ width:11, height:11, borderRadius:'50%', background:fam.color, flexShrink:0 }}></span>
                  <span style={{ fontWeight:700, color:'var(--ink)', fontSize:'.92rem' }}>{fam.label}</span>
                  <span style={{ color:'var(--ink-3)', fontSize:'.86rem' }}>· {fam.fear}</span>
                </div>
              );
            })}
          </div>
          <div className="lp-cast">
            {CAST_ORDER.map(code=> <CastTile key={code} code={code} go={go}/>)}
          </div>
        </Container>
      </Section>
    </div>
  );
}

function CastTile({ code, go }) {
  const isAncre = code==='anc';
  const a = isAncre ? window.ANCRE : window.ARCHETYPES.find(x=>x.code===code);
  const fam = window.FAMILIES[a.family];
  const c = a.accent;
  const grad = isAncre
    ? `radial-gradient(125% 95% at 50% 16%, color-mix(in srgb, ${c} 34%, #fff) 0%, color-mix(in srgb, ${c} 14%, #fff) 50%, #fff 100%)`
    : `linear-gradient(180deg, color-mix(in srgb, ${c} 22%, #fff) 0%, color-mix(in srgb, ${c} 9%, #fff) 52%, #fff 100%)`;
  return (
    <button
      className={`lp-cast-tile${isAncre?' is-anchor':''}`}
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
        <img src={`assets/archetypes/${a.code}.png`} alt={a.name}/>
      </span>
      <span className="lp-cast-label">
        {isAncre
          ? <span className="lp-cast-chip"><Icon name="star" size={12}/> The secure center</span>
          : <span className="lp-cast-fam"><span style={{ width:8, height:8, borderRadius:'50%', background:c, display:'inline-block' }}></span>{fam.label}</span>}
        <span className="lp-cast-name" style={{ display:'block' }}>{a.name}</span>
        <span className="lp-cast-tag" style={{ display:'block' }}>{a.tagline}</span>
      </span>
    </button>
  );
}

function Profile({ go, code='bas' }) {
  const arch = code==='anc' ? window.ANCRE : (window.ARCHETYPES.find(a=>a.code===code)||window.ARCHETYPES[7]);
  const fam = window.FAMILIES[arch.family];
  return (
    <div>
      <div style={{ position:'relative', overflow:'hidden', color:'#fff',
        background:`linear-gradient(105deg, color-mix(in srgb, ${arch.accent} 62%, #20183a) 0%, ${arch.accent} 80%)` }}>
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
              <img src={`assets/archetypes/${arch.code}.png`} alt={arch.name} style={{
                display:'block', width:'100%', maxWidth:'320px', marginLeft:'auto', height:'auto',
                filter:'drop-shadow(0 18px 22px rgba(15,20,45,.35))' }}/>
            </div>
          </div>
        </Container>
      </div>

      <Section style={{ padding:'40px 0 clamp(56px,8vw,100px)' }}>
        <Container style={{ maxWidth:740 }}>
          <ProfileBody code={arch.code}/>

          <div style={{ marginTop:'40px', textAlign:'center', paddingTop:'clamp(24px,4vw,36px)', borderTop:'1px solid var(--hairline)' }}>
            <h2 className="lp-h2" style={{ marginTop:0 }}>Want to discover your own pattern?</h2>
            <p className="lp-lead" style={{ marginTop:12, maxWidth:440, marginInline:'auto' }}>
              Take the test for free and find out which mechanism takes over when love gets uncertain.
            </p>
            <div style={{ marginTop:24, display:'flex', justifyContent:'center' }}>
              <Button size="lg" icon="arrow-right" onClick={()=>go('intro')}>Take the free test</Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}

Object.assign(window, { Profile, ProfilsIndex });
