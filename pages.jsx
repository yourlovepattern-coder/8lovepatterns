/* 8LovePatterns, Method (English) */

function Method({ go }) {
  const principles = [
    ['heart','A mirror, not a verdict',"We don't tell you who you are. We reflect a strategy you use, one you can change."],
    ['shield','No judgment','A protection pattern is never a flaw. It made sense once. We treat it that way.'],
    ['eye','One dominant result','No numeric scores, no anxious ranking. The pattern that weighs most today, told clearly.'],
    ['route','Built for change','Every result ends with a concrete next step. Recognition only matters if it opens a path.'],
    ['anchor','The Anchor: how deep, not just what',"Your answers place you on five levels, Clear to Buried. Shallow needs a reminder in the moment. Deep needs a plan that works before the moment, because in it, you're not reachable. Your report is written for your level, and it aims at the next one up, never a leap to Clear."],
  ];
  return (
    <div>
      <Section style={{ padding:'clamp(40px,6vw,72px) 0 40px' }}>
        <Container narrow style={{ textAlign:'center' }}>
          <Eyebrow color="var(--violet)">Method</Eyebrow>
          <h1 className="lp-h1" style={{ marginTop:12 }}>A mirror, not a verdict.</h1>
          <p className="lp-lead" style={{ marginTop:14 }}>
            8LovePatterns is built to help you recognize yourself without judgment. One clear result, written in human language, with a concrete step to take. For the research it draws on, see <button onClick={()=>go('science')} style={{ background:'none', border:'none', padding:0, cursor:'pointer', color:'var(--violet)', font:'inherit', fontWeight:700, textDecoration:'underline', textUnderlineOffset:'3px' }}>the Science page</button>.
          </p>
        </Container>
      </Section>

      <Section style={{ padding:'0 0 56px' }}>
        <Container>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'18px' }} className="lp-2col">
            {principles.map(([ic,t,d])=>(
              <div key={t} style={{ background:'var(--surface)', border:'1px solid var(--hairline)', borderRadius:'var(--r-lg)', padding:'26px', boxShadow:'var(--sh-xs)' }}>
                <span style={{ display:'grid', placeItems:'center', width:46, height:46, borderRadius:'13px', background:'var(--corail-soft)', color:'var(--corail)' }}><Icon name={ic} size={22}/></span>
                <h3 className="lp-h4" style={{ marginTop:16 }}>{t}</h3>
                <p style={{ color:'var(--ink-2)', lineHeight:1.6, marginTop:8 }}>{d}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section band="var(--paper-2)" style={{ padding:'clamp(48px,7vw,84px) 0' }}>
        <Container narrow>
          <div style={{ background:'#fff', border:'1px solid var(--hairline)', borderRadius:'var(--r-xl)', padding:'clamp(28px,4vw,44px)', boxShadow:'var(--sh-sm)' }}>
            <Icon name="anchor" size={32} style={{ color:'var(--or)' }}/>
            <h2 className="lp-h2" style={{ marginTop:14 }}>What 8LovePatterns is not.</h2>
            <div style={{ display:'flex', flexDirection:'column', gap:'12px', marginTop:18 }}>
              {['A medical or psychological diagnosis','Therapy, or a substitute for a professional','A fixed "for life" personality test','A tool to label or judge other people'].map(t=>(
                <div key={t} style={{ display:'flex', gap:'11px', alignItems:'center', color:'var(--ink-2)' }}>
                  <span style={{ display:'grid', placeItems:'center', width:24, height:24, borderRadius:'50%', background:'var(--corail-soft)', color:'var(--corail)', flexShrink:0 }}><Icon name="x" size={14}/></span>
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
      </Section>
    </div>
  );
}

function Science({ go }) {
  return (
    <div>
      <Section style={{ padding:'clamp(40px,6vw,72px) 0 8px' }}>
        <Container narrow style={{ textAlign:'center' }}>
          <Eyebrow color="var(--violet)">Science-backed, not clinically diagnostic</Eyebrow>
          <h1 className="lp-h1" style={{ marginTop:12 }}>The research behind your patterns.</h1>
          <p className="lp-lead" style={{ marginTop:14 }}>
            8LovePatterns translates established psychological research into clear, human patterns. It is a research-informed mirror, not a clinical diagnosis, and never a replacement for therapy.
          </p>
          <div style={{ marginTop:26 }}>
            <CredibilityStrip/>
          </div>
        </Container>
      </Section>

      <ScienceSection go={go} band="transparent"/>

      <Section band="var(--paper-2)" style={{ padding:'clamp(48px,7vw,84px) 0' }}>
        <Container narrow>
          <div style={{ background:'#fff', border:'1px solid var(--hairline)', borderRadius:'var(--r-xl)', padding:'clamp(28px,4vw,44px)', boxShadow:'var(--sh-sm)' }}>
            <Icon name="shield" size={30} style={{ color:'var(--violet)' }}/>
            <h2 className="lp-h2" style={{ marginTop:14 }}>What we can, and can't, say.</h2>
            <p style={{ marginTop:14, color:'var(--ink-2)', lineHeight:1.65 }}>
              The psychological mechanisms behind 8LovePatterns are supported by research. The 8LovePatterns test itself has not been through a formal psychometric validation study, so we don't claim it is clinically validated.
            </p>
            <div style={{ display:'flex', flexDirection:'column', gap:'12px', marginTop:20 }}>
              {[
                ['check','Grounded in adult attachment research, emotion regulation, and schema principles', 'var(--positive)'],
                ['check','Research-informed and science-backed', 'var(--positive)'],
                ['x','Not a clinical diagnosis or psychometric instrument', 'var(--corail)'],
                ['x','Not therapy, treatment, or a substitute for a professional', 'var(--corail)'],
              ].map(([ic,t,c])=>(
                <div key={t} style={{ display:'flex', gap:'11px', alignItems:'center', color:'var(--ink-2)' }}>
                  <span style={{ display:'grid', placeItems:'center', width:24, height:24, borderRadius:'50%', background: c==='var(--positive)'?'rgba(63,160,107,.12)':'var(--corail-soft)', color:c, flexShrink:0 }}><Icon name={ic} size={14}/></span>
                  {t}
                </div>
              ))}
            </div>
          </div>
          <div style={{ textAlign:'center', marginTop:32 }}>
            <Button size="lg" icon="arrow-right" onClick={()=>go('intro')}>Reveal My Pattern</Button>
          </div>
        </Container>
      </Section>

      <FAQ/>
    </div>
  );
}

Object.assign(window, { Method, Science });
