/* 8LovePatterns, Result reveal (English) */

function Result({ go, code='bas', data=null }) {
  const arch = code==='anc' ? window.ANCRE : (window.ARCHETYPES.find(a=>a.code===code)||window.ARCHETYPES[7]);
  const fam = window.FAMILIES[arch.family];
  const gripLevel = data?.gripLevel || arch.emprise;     // computed grip, falls back to static
  const anchorLabel = data?.anchorLabel || 'Developing';
  const anchorCopy = {
    'Steady':'Your regulation runs strong: you can often feel the reflex without letting it drive. This pattern is more a colour than a controller.',
    'Developing':'Your regulation is growing. In calm moments you can name the reflex; under pressure it can still take the wheel.',
    'Still forming':'Your regulation is still finding its feet. Right now the pattern tends to choose for you before you get to choose.',
  }[anchorLabel];
  return (
    <div>
      {/* Reveal banner */}
      <div style={{ background:`linear-gradient(180deg, ${arch.soft} 0%, var(--paper) 100%)`, paddingTop:'48px' }}>
        <Container narrow style={{ textAlign:'center' }}>
          <Eyebrow color={arch.accent}>Your dominant pattern is</Eyebrow>
          <div style={{ margin:'24px auto 0', width:184 }}>
            <Avatar code={arch.code} size={184}/>
          </div>
          <h1 className="lp-display" style={{ fontSize:'clamp(2.6rem,1.8rem+3vw,3.8rem)', marginTop:20, color:'var(--encre)' }}>{arch.name}</h1>
          <p className="lp-quote" style={{ fontSize:'1.4rem', marginTop:8 }}>{arch.motto}</p>
          <div style={{ display:'flex', justifyContent:'center', marginTop:24 }}>
            <div style={{ background:'#fff', borderRadius:'var(--r-lg)', padding:'18px 26px', boxShadow:'var(--sh-sm)', border:'1px solid var(--hairline)' }}>
              <EmpriseTag level={gripLevel}/>
            </div>
          </div>
        </Container>
      </div>

      <Section style={{ padding:'44px 0 clamp(48px,7vw,90px)' }}>
        <Container style={{ maxWidth:740 }}>
          <div style={{ display:'flex', alignItems:'center', gap:'10px', marginBottom:'28px', padding:'14px 18px',
            background:'#D6ECE3', borderRadius:'var(--r-md)', color:'#2F6B45' }}>
            <Icon name="check" size={20}/>
            <span style={{ fontWeight:600, fontSize:'.97rem' }}>This is your free result, your mirror. Take a moment with it.</span>
          </div>

          <ProfileBody code={arch.code}/>

          {/* The Anchor, transversal regulation factor (never a 9th profile) */}
          <div style={{ marginTop:'40px', background:'var(--fam-ancre-soft)', border:'1px solid var(--hairline)',
            borderRadius:'var(--r-lg)', padding:'clamp(24px,3vw,34px)' }}>
            <div style={{ display:'flex', alignItems:'center', gap:'12px', marginBottom:'12px' }}>
              <span style={{ display:'grid', placeItems:'center', width:44, height:44, borderRadius:'13px', background:'#fff', color:'var(--fam-ancre)' }}>
                <Icon name="anchor" size={22}/>
              </span>
              <div>
                <div style={{ fontSize:'.72rem', fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:'var(--ink-3)' }}>Your Anchor</div>
                <div className="lp-h4" style={{ color:'var(--fam-ancre)' }}>{anchorLabel} regulation</div>
              </div>
            </div>
            <p style={{ margin:0, color:'var(--ink-2)', lineHeight:1.6 }}>{anchorCopy}</p>
            <p style={{ margin:'14px 0 0', color:'var(--ink)', lineHeight:1.6, fontWeight:600 }}>
              Where to grow next: {arch.reset}
            </p>
          </div>

          {/* Disclaimer */}
          <p style={{ marginTop:'26px', color:'var(--ink-3)', fontSize:'.82rem', lineHeight:1.6, textAlign:'center', textWrap:'pretty' }}>
            8LovePatterns is not a medical or psychological diagnosis. It's a personal-reflection tool, inspired by attachment psychology, emotion regulation, relational schemas, and protective mechanisms, to help you better understand your relationship dynamics.
          </p>
        </Container>
      </Section>

      {/* Premium CTA */}
      <Section style={{ padding:'0 0 clamp(56px,9vw,110px)' }}>
        <Container narrow>
          <div style={{ position:'relative', overflow:'hidden', borderRadius:'var(--r-xl)', padding:'clamp(34px,5vw,56px)',
            background:'linear-gradient(135deg, var(--encre), var(--encre-700))', color:'#fff' }}>
            <div style={{ position:'absolute', top:'-30%', right:'-8%', width:'46%', aspectRatio:'1', borderRadius:'50%',
              background:'radial-gradient(circle, rgba(199,151,63,.34), transparent 70%)' }}></div>
            <div style={{ position:'relative' }}>
              <Chip soft="rgba(255,255,255,.14)" color="#fff"><Icon name="lock" size={14}/> Full playbook</Chip>
              <h2 className="lp-h1" style={{ color:'#fff', marginTop:16 }}>The free test named your pattern. Premium gives you the playbook.</h2>
              <p style={{ color:'rgba(255,255,255,.74)', marginTop:14, fontSize:'1.08rem', maxWidth:540 }}>
                Your triggers, blind spots, conflict loops, compatibility dynamics, and a 7-day reset plan to stop repeating the same story, for the {arch.name}.
              </p>
              <div style={{ display:'flex', gap:'14px', marginTop:26, flexWrap:'wrap' }}>
                <Button size="lg" onClick={()=>go('vente', arch.code)} icon="arrow-right">Get My Full Report</Button>
                <Button size="lg" variant="light" onClick={()=>go('profils')}>See the other patterns</Button>
              </div>
              <button onClick={()=>{ window.location.href='premium-report.html'; }}
                style={{ marginTop:18, background:'none', border:'none', cursor:'pointer', color:'rgba(255,255,255,.7)',
                  fontFamily:'var(--font-body)', fontWeight:600, fontSize:'.92rem', textDecoration:'underline', textUnderlineOffset:'3px', padding:0 }}>
                Preview my premium report (demo) &#8594;
              </button>
            </div>
          </div>
          <div style={{ textAlign:'center', marginTop:22 }}>
            <Button variant="ghost" onClick={()=>go('intro')}>Retake the test</Button>
          </div>
        </Container>
      </Section>
    </div>
  );
}
Object.assign(window, { Result });
