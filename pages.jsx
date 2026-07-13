/* 8LovePatterns, Method (English) */

function Method({ go }) {
  const principles = [
    ['heart','A mirror, not a verdict',"We don't tell you who you are. We reflect a strategy you use, one you can change."],
    ['shield','No judgment','A protection pattern is never a flaw. It made sense once. We treat it that way.'],
    ['eye','One dominant result','No numeric scores, no anxious ranking. The pattern that weighs most today, told clearly.'],
    ['route','Built for change','Every result ends with a concrete next step. Recognition only matters if it opens a path.'],
  ];
  const tiers = ['Clear', 'Slipping', 'Snagged', 'Hooked', 'Buried'];
  const anchorColor = window.ANCRE.accent;
  return (
    <div>
      <Module>
        <Container narrow style={{ textAlign:'center' }}>
          <Eyebrow color="var(--cta)">Method</Eyebrow>
          <h1 className="lp-h1" style={{ marginTop:12, color:'var(--head)' }}>A mirror, not a verdict.</h1>
          <p className="lp-lead" style={{ marginTop:14, color:'var(--body-2)' }}>
            8LovePatterns is built to help you recognize yourself without judgment. One clear result, written in human language, with a concrete step to take. For the research it draws on, see <button onClick={()=>go('science')} style={{ background:'none', border:'none', padding:0, cursor:'pointer', color:'var(--accent-sky)', font:'inherit', fontWeight:700, textDecoration:'underline', textUnderlineOffset:'3px' }}>the Science page</button>.
          </p>
        </Container>
        <Container style={{ marginTop:36 }}>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'18px' }} className="lp-2col">
            {principles.map(([ic,t,d])=>(
              <div key={t} className="lp-lift" style={{ background:'#fff', border:'1px solid var(--hairline)', borderRadius:'var(--r-card)', padding:'26px', boxShadow:'var(--sh-1)' }}>
                <span style={{ display:'grid', placeItems:'center', width:46, height:46, borderRadius:'13px', background:'var(--cta-soft)', color:'var(--cta-600)' }}><Icon name={ic} size={22}/></span>
                <h3 className="lp-h4" style={{ marginTop:16, color:'var(--head)' }}>{t}</h3>
                <p style={{ color:'var(--body-2)', lineHeight:1.6, marginTop:8 }}>{d}</p>
              </div>
            ))}
          </div>
        </Container>
        <Container narrow style={{ marginTop:18 }}>
          <div className="lp-hero-grid" style={{ display:'grid', gridTemplateColumns:'auto 1fr', gap:'clamp(22px,3vw,34px)', alignItems:'center',
            borderRadius:'var(--r-xl)', padding:'clamp(26px,4vw,40px)',
            background:`radial-gradient(120% 140% at 15% 15%, color-mix(in srgb, ${anchorColor} 18%, #fff) 0%, color-mix(in srgb, ${anchorColor} 6%, #fff) 55%, #fff 100%)`,
            border:`1px solid color-mix(in srgb, ${anchorColor} 22%, #fff)` }}>
            <img src="assets/archetypes/anc.webp" alt="The Anchor" style={{ width:130, height:'auto', flexShrink:0,
              filter:'drop-shadow(0 12px 16px rgba(20,16,45,.16))' }}/>
            <div>
              <Eyebrow color={anchorColor}>The Anchor</Eyebrow>
              <h3 className="lp-h4" style={{ marginTop:8, color:'var(--head)' }}>How deep, not just what.</h3>
              <p style={{ color:'var(--body-2)', lineHeight:1.6, marginTop:8 }}>
                Your answers place you on five levels, Clear to Buried. Shallow needs a reminder in the moment. Deep needs a plan that works before the moment, because in it, you're not reachable. Your report is written for your level, and it aims at the next one up, never a leap to Clear.
              </p>
              <div style={{ display:'flex', flexWrap:'wrap', gap:'8px', marginTop:16 }}>
                {tiers.map(t=>(
                  <span key={t} style={{ padding:'5px 13px', borderRadius:'var(--r-pill)', fontSize:'.8rem', fontWeight:700,
                    color:anchorColor, background:`color-mix(in srgb, ${anchorColor} 12%, #fff)` }}>{t}</span>
                ))}
              </div>
              <div style={{ marginTop:18 }}>
                <Button size="sm" variant="secondary" icon="arrow-right" onClick={()=>go('profil','anc')}>Meet the Anchor</Button>
              </div>
            </div>
          </div>
        </Container>
      </Module>

      <Module>
        <Container narrow>
          <div style={{ background:'#fff', border:'1px solid var(--hairline)', borderRadius:'var(--r-card)', padding:'clamp(28px,4vw,44px)', boxShadow:'var(--sh-1)' }}>
            <Icon name="anchor" size={32} style={{ color:'var(--or)' }}/>
            <h2 className="lp-h2" style={{ marginTop:14, color:'var(--head)' }}>What 8LovePatterns is not.</h2>
            <div style={{ display:'flex', flexDirection:'column', gap:'12px', marginTop:18 }}>
              {['A medical or psychological diagnosis','Therapy, or a substitute for a professional','A fixed "for life" personality test','A tool to label or judge other people'].map(t=>(
                <div key={t} style={{ display:'flex', gap:'11px', alignItems:'center', color:'var(--body-2)' }}>
                  <span style={{ display:'grid', placeItems:'center', width:24, height:24, borderRadius:'50%', background:'var(--paper-2)', color:'var(--ink-3)', flexShrink:0 }}><Icon name="x" size={14}/></span>
                  {t}
                </div>
              ))}
            </div>
            <p style={{ marginTop:22, color:'var(--ink-3)', fontSize:'.92rem', lineHeight:1.6 }}>
              No result is a life sentence. Your pattern is a starting point, not a label. If you're going through real distress, please talk to a professional.
            </p>
          </div>
          <div style={{ textAlign:'center', marginTop:32 }}>
            <Button size="lg" icon="arrow-right" onClick={()=>go('intro')}>Reveal My Pattern</Button>
          </div>
        </Container>
      </Module>
    </div>
  );
}

function Science({ go }) {
  return (
    <div>
      <Module>
        <Container narrow style={{ textAlign:'center' }}>
          <Eyebrow color="var(--cta)">Science-backed, not clinically diagnostic</Eyebrow>
          <h1 className="lp-h1" style={{ marginTop:12, color:'var(--head)' }}>The research behind your patterns.</h1>
          <p className="lp-lead" style={{ marginTop:14, color:'var(--body-2)' }}>
            8LovePatterns translates established psychological research into clear, human patterns. It is a research-informed mirror, not a clinical diagnosis, and never a replacement for therapy.
          </p>
          <div style={{ marginTop:26 }}>
            <CredibilityStrip/>
          </div>
        </Container>
      </Module>

      <FoundersSection/>

      <ScienceSection go={go} band="transparent"/>

      <AnchorSection/>

      <Module>
        <Container narrow>
          <div style={{ background:'#fff', border:'1px solid var(--hairline)', borderRadius:'var(--r-card)', padding:'clamp(28px,4vw,44px)', boxShadow:'var(--sh-1)' }}>
            <Icon name="shield" size={30} style={{ color:'var(--accent-sky)' }}/>
            <h2 className="lp-h2" style={{ marginTop:14, color:'var(--head)' }}>What we can, and can't, say.</h2>
            <p style={{ marginTop:14, color:'var(--body-2)', lineHeight:1.65 }}>
              The psychological mechanisms behind 8LovePatterns are supported by research. The 8LovePatterns test itself has not been through a formal psychometric validation study, so we don't claim it is clinically validated.
            </p>
            <div style={{ display:'flex', flexDirection:'column', gap:'12px', marginTop:20 }}>
              {[
                ['check','Grounded in adult attachment research, emotion regulation, and schema principles', true],
                ['check','Research-informed and science-backed', true],
                ['x','Not a clinical diagnosis or psychometric instrument', false],
                ['x','Not therapy, treatment, or a substitute for a professional', false],
              ].map(([ic,t,positive])=>(
                <div key={t} style={{ display:'flex', gap:'11px', alignItems:'center', color:'var(--body-2)' }}>
                  <span style={{ display:'grid', placeItems:'center', width:24, height:24, borderRadius:'50%',
                    background: positive?'var(--cta-soft)':'var(--paper-2)', color: positive?'var(--cta-600)':'var(--ink-3)', flexShrink:0 }}><Icon name={ic} size={14}/></span>
                  {t}
                </div>
              ))}
            </div>
          </div>
          <div style={{ textAlign:'center', marginTop:32 }}>
            <Button size="lg" icon="arrow-right" onClick={()=>go('intro')}>Reveal My Pattern</Button>
          </div>
        </Container>
      </Module>

      <Module>
        <FAQ embedded/>
      </Module>
    </div>
  );
}

Object.assign(window, { Method, Science });
