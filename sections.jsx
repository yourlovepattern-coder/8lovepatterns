/* 8LovePatterns, trust + SEO sections (Science, comparison, searched-this, FAQ) */

/* ---- Compact scientific credibility strip ---- */
function CredibilityStrip() {
  return (
    <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:'8px',
      padding:'18px 22px', borderRadius:'var(--r-lg)', background:'var(--violet-soft)',
      border:'1px solid var(--hairline-2)', textAlign:'center', maxWidth:680, margin:'0 auto' }}>
      <div style={{ display:'flex', alignItems:'center', gap:'9px', color:'var(--encre)', fontWeight:600, fontSize:'.97rem', lineHeight:1.5, justifyContent:'center', flexWrap:'wrap' }}>
        <Icon name="shield" size={17} style={{ color:'var(--violet)', flexShrink:0 }}/>
        Based on research-backed principles from attachment theory, emotion regulation, schema therapy, and relationship self-sabotage.
      </div>
      <div style={{ fontSize:'.82rem', color:'var(--ink-3)', fontWeight:500 }}>
        Educational self-reflection tool · Not a clinical diagnosis
      </div>
    </div>
  );
}

/* ---- Science / research foundation (4 cards) ---- */
function ScienceSection({ go, band='var(--paper-2)' }) {
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
    <Section id="science" band={band}>
      <Container>
        <div style={{ textAlign:'center', maxWidth:640, margin:'0 auto 14px' }}>
          <Eyebrow color="var(--violet)">Science-backed, not clinically diagnostic</Eyebrow>
          <h2 className="lp-h1" style={{ marginTop:12 }}>Built on real psychology.<br/>Written for real people.</h2>
          <p className="lp-lead" style={{ marginTop:16 }}>
            8LovePatterns is grounded in established psychological research on adult attachment, emotion regulation, schema patterns, and relationship self-sabotage. The test is not a diagnosis. It is a research-informed mirror that helps you recognize the protection strategy that may take over when love feels unsafe.
          </p>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'18px', marginTop:40 }} className="lp-mech-grid">
          {cards.map(c=>(
            <div key={c.t} style={{ background:'var(--surface)', border:'1px solid var(--hairline)', borderRadius:'var(--r-lg)',
              padding:'26px', boxShadow:'var(--sh-xs)', display:'flex', flexDirection:'column', gap:'14px' }}>
              <span style={{ display:'grid', placeItems:'center', width:48, height:48, borderRadius:'14px', background:c.soft, color:c.c }}>
                <Icon name={c.ic} size={23}/>
              </span>
              <h3 className="lp-h4" style={{ margin:0 }}>{c.t}</h3>
              <p style={{ margin:0, color:'var(--ink-2)', lineHeight:1.58, fontSize:'.95rem' }}>{c.d}</p>
            </div>
          ))}
        </div>
        <p style={{ textAlign:'center', maxWidth:600, margin:'30px auto 0', color:'var(--ink-2)', lineHeight:1.6, fontSize:'1.02rem', textWrap:'pretty' }}>
          8LovePatterns does not reduce you to a label. It translates complex psychological mechanisms into clear, human patterns you can actually recognize.
        </p>
        <div style={{ marginTop:28, display:'flex', justifyContent:'center' }}>
          <Button size="lg" icon="arrow-right" onClick={()=>go('intro')}>Reveal My Pattern</Button>
        </div>
      </Container>
    </Section>
  );
}

/* ---- Comparison: 8LovePatterns vs other tools ---- */
function Comparison({ go }) {
  const rows = [
    ['Attachment style quiz','How you relate to closeness, distance, dependence, and rejection','The specific protection role you fall into under emotional pressure', false],
    ['Love language test','How you give and receive affection','What you do when affection feels uncertain or threatened', false],
    ['Personality test','Broad traits and preferences','Your relationship autopilot during conflict, fear, or vulnerability', false],
    ['8LovePatterns','Your protection pattern in love','Designed as a mirror, not a diagnosis', true],
  ];
  return (
    <Section band="var(--paper-2)">
      <Container>
        <div style={{ textAlign:'center', maxWidth:660, margin:'0 auto 36px' }}>
          <Eyebrow color="var(--corail)">How it's different</Eyebrow>
          <h2 className="lp-h1" style={{ marginTop:12 }}>8LovePatterns is not just another attachment quiz.</h2>
          <p className="lp-lead" style={{ marginTop:14 }}>
            Attachment style quizzes often focus on broad categories like anxious, avoidant, secure, or disorganized. Love language tests focus on how you give and receive affection. 8LovePatterns looks at a different layer: what protects you when love feels unsafe.
          </p>
        </div>
        <div style={{ overflowX:'auto', borderRadius:'var(--r-lg)', border:'1px solid var(--hairline)', boxShadow:'var(--sh-xs)' }}>
          <table style={{ width:'100%', borderCollapse:'collapse', minWidth:560, background:'var(--surface)' }}>
            <thead>
              <tr style={{ background:'var(--paper-2)' }}>
                {['Tool','What it explains','What it may miss'].map(h=>(
                  <th key={h} style={{ textAlign:'left', padding:'16px 20px', fontFamily:'var(--font-body)', fontWeight:700,
                    fontSize:'.78rem', letterSpacing:'.1em', textTransform:'uppercase', color:'var(--ink-3)',
                    borderBottom:'1px solid var(--hairline)' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map(([tool,exp,miss,hi])=>(
                <tr key={tool} style={{ background: hi?'var(--corail-soft)':'transparent' }}>
                  <td style={{ padding:'18px 20px', borderBottom:'1px solid var(--hairline)', verticalAlign:'top' }}>
                    <span style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:'1.02rem', color: hi?'var(--corail-600)':'var(--encre)' }}>{tool}</span>
                  </td>
                  <td style={{ padding:'18px 20px', borderBottom:'1px solid var(--hairline)', verticalAlign:'top', color:'var(--ink-2)', lineHeight:1.55, fontSize:'.95rem' }}>{exp}</td>
                  <td style={{ padding:'18px 20px', borderBottom:'1px solid var(--hairline)', verticalAlign:'top', color: hi?'var(--encre)':'var(--ink-2)', fontWeight: hi?600:400, lineHeight:1.55, fontSize:'.95rem' }}>{miss}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{ marginTop:30, display:'flex', justifyContent:'center' }}>
          <Button size="lg" variant="secondary" icon="arrow-right" onClick={()=>go('intro')}>Discover My Protection Pattern</Button>
        </div>
      </Container>
    </Section>
  );
}

/* ---- Reusable accordion item ---- */
function AccordionItem({ q, a, open, onToggle, accent='var(--violet)' }) {
  const [hover,setHover] = useState(false);
  return (
    <div style={{ borderBottom:'1px solid var(--hairline)' }}>
      <button onClick={onToggle} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
        style={{ width:'100%', textAlign:'left', background:'none', border:'none', cursor:'pointer',
          display:'flex', alignItems:'center', justifyContent:'space-between', gap:'16px',
          padding:'20px 4px', fontFamily:'var(--font-display)', fontWeight:600, fontSize:'1.08rem',
          color: (open||hover)?'var(--encre)':'var(--ink)', lineHeight:1.35 }}>
        <span style={{ textWrap:'pretty' }}>{q}</span>
        <span style={{ flexShrink:0, color:accent, transform: open?'rotate(180deg)':'none', transition:'transform .25s ease' }}>
          <Icon name="chevron-down" size={20}/>
        </span>
      </button>
      {open && a && (
        <p style={{ margin:'0 4px', padding:'0 0 22px', color:'var(--ink-2)', lineHeight:1.65, fontSize:'1rem', maxWidth:680, textWrap:'pretty' }}>{a}</p>
      )}
    </div>
  );
}

/* ---- SEO emotional question mirror ---- */
function SearchedThis({ go }) {
  const items = [
    "Why do I get anxious when they don't text back?",
    'Why do I pull away when someone gets close?',
    'Why do I overthink every message?',
    'Why do I chase emotionally unavailable people?',
    'Why do I shut down during conflict?',
    'Why do I get attached so easily?',
    'Why do I test people I care about?',
    'Why do I sabotage relationships when things start to feel real?',
    'Why do I keep dating the same person in a different body?',
    'Am I anxious, avoidant, or something else?',
  ];
  const [open,setOpen] = useState(null);
  return (
    <Section band="var(--encre)" style={{ padding:'clamp(52px,8vw,100px) 0' }}>
      <Container narrow>
        <div style={{ textAlign:'center', marginBottom:30 }}>
          <Eyebrow color="rgba(255,255,255,.55)">You're not the only one asking</Eyebrow>
          <h2 className="lp-h1" style={{ color:'#fff', marginTop:12 }}>If you've ever searched this,<br/>8LovePatterns was built for you.</h2>
        </div>
        <div style={{ background:'rgba(255,255,255,.05)', border:'1px solid rgba(255,255,255,.12)', borderRadius:'var(--r-xl)', padding:'8px 26px' }}>
          {items.map((q,i)=>(
            <div key={q} style={{ borderBottom: i<items.length-1?'1px solid rgba(255,255,255,.1)':'none' }}>
              <button onClick={()=>setOpen(open===i?null:i)}
                style={{ width:'100%', textAlign:'left', background:'none', border:'none', cursor:'pointer',
                  display:'flex', alignItems:'center', justifyContent:'space-between', gap:'16px', padding:'18px 0',
                  fontFamily:'var(--font-display)', fontWeight:600, fontSize:'1.06rem', color:'#fff', lineHeight:1.35 }}>
                <span style={{ display:'flex', alignItems:'center', gap:'13px' }}>
                  <Icon name="compass" size={18} style={{ color:'var(--or)', flexShrink:0 }}/>
                  <span style={{ textWrap:'pretty' }}>{q}</span>
                </span>
                <Icon name="arrow-right" size={18} style={{ color:'rgba(255,255,255,.45)', flexShrink:0 }}/>
              </button>
            </div>
          ))}
        </div>
        <p style={{ textAlign:'center', color:'rgba(255,255,255,.72)', lineHeight:1.65, fontSize:'1.05rem', margin:'28px auto 0', maxWidth:600, textWrap:'pretty' }}>
          8LovePatterns helps you name the automatic pattern that appears when connection starts to feel unsafe, without reducing you to a diagnosis.
        </p>
        <div style={{ marginTop:28, display:'flex', justifyContent:'center' }}>
          <Button size="lg" icon="arrow-right" onClick={()=>go('intro')}>Take the Free Test</Button>
        </div>
      </Container>
    </Section>
  );
}

/* ---- FAQ (SEO) ---- */
function FAQ() {
  const faqs = [
    ['What is a relationship protection pattern?','A relationship protection pattern is the automatic strategy you may use when intimacy, conflict, uncertainty, or fear of rejection makes you feel emotionally exposed. You may chase, withdraw, scan, fix, adapt, control, rescue, or shut down.'],
    ['Is 8LovePatterns an attachment style quiz?','8LovePatterns is attachment-inspired, but it is not limited to classic labels like anxious, avoidant, secure, or disorganized. It focuses on the specific role you fall into when love feels unsafe.'],
    ['What is my attachment style?','Your attachment style describes how you tend to respond to closeness, distance, trust, dependence, and fear of rejection. 8LovePatterns uses attachment-informed ideas, but it translates them into more specific relationship protection patterns.'],
    ["Why do I get anxious when they don't text back?",'A delayed reply can feel threatening when your system is sensitive to disconnection. For some people, uncertainty triggers reassurance-seeking, overthinking, testing, or emotional urgency. 8LovePatterns helps you identify what takes over in that moment.'],
    ['Why do I pull away when someone gets close?','Pulling away can be a protection strategy. When closeness starts to feel overwhelming, distance can feel like safety. 8LovePatterns helps you understand whether withdrawal is your automatic way of staying protected.'],
    ['Why do I sabotage relationships?','Many people do not sabotage love because they do not care. They sabotage when connection starts to feel dangerous, uncertain, or too vulnerable. 8LovePatterns helps you recognize the pattern before it chooses for you.'],
    ['Am I anxious or avoidant?','You may recognize anxious or avoidant tendencies, but most people are more nuanced than one label. 8LovePatterns helps identify the specific protection role that appears when attachment, fear, or conflict is activated.'],
    ['Can my relationship pattern change?','Yes. Patterns are not life sentences. Awareness, emotional regulation, secure relationships, therapy, and consistent practice can help people respond differently over time.'],
    ['Is this a love language test?','No. Love language tests focus on how you give and receive affection. 8LovePatterns focuses on what protects you when affection feels uncertain, threatened, or unsafe.'],
    ['Is 8LovePatterns scientifically proven?','8LovePatterns is science-backed and research-informed. It is grounded in established psychological research on adult attachment, emotion regulation, schema patterns, and defensive responses. The 8LovePatterns test itself is not a clinical diagnosis and does not replace therapy.'],
  ];
  const [open,setOpen] = useState(0);
  return (
    <Section band="var(--paper-2)">
      <Container narrow>
        <div style={{ textAlign:'center', marginBottom:26 }}>
          <Eyebrow color="var(--violet)">Questions, answered gently</Eyebrow>
          <h2 className="lp-h1" style={{ marginTop:12 }}>Relationship Pattern FAQ</h2>
        </div>
        <div style={{ background:'var(--surface)', border:'1px solid var(--hairline)', borderRadius:'var(--r-xl)', padding:'8px 28px', boxShadow:'var(--sh-xs)' }}>
          {faqs.map(([q,a],i)=>(
            <AccordionItem key={q} q={q} a={a} open={open===i} onToggle={()=>setOpen(open===i?null:i)}/>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ---- Science / social-proof trust banner (text-based institution badges) ---- */
function TrustBanner() {
  const { t } = useLang();
  return (
    <Section style={{ padding:'clamp(28px,4vw,52px) 0' }}>
      <Container>
        <div style={{ position:'relative', overflow:'hidden', borderRadius:'var(--r-xl)',
          background:'linear-gradient(135deg, var(--encre) 0%, var(--encre-700) 70%, #3A2F77 100%)',
          padding:'clamp(28px,4vw,44px)', maxWidth:820, margin:'0 auto', textAlign:'center',
          boxShadow:'var(--sh-lg)' }}>
          <div style={{ position:'absolute', top:'-50%', left:'-10%', width:'45%', aspectRatio:'1', borderRadius:'50%',
            background:'radial-gradient(circle, rgba(199,151,63,.18), transparent 70%)' }}></div>
          <div style={{ position:'relative' }}>
            <Eyebrow color="var(--or)">{t('tb.eyebrow')}</Eyebrow>
            <p className="lp-h3" style={{ marginTop:14, color:'#fff', maxWidth:600, marginInline:'auto', textWrap:'pretty', fontWeight:600 }}>
              {t('tb.h')}
            </p>
            <p style={{ marginTop:16, color:'rgba(255,255,255,.5)', lineHeight:1.55, fontSize:'.8rem', maxWidth:560, marginInline:'auto', textWrap:'pretty' }}>
              {t('tb.disclaimer')}
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

Object.assign(window, { CredibilityStrip, ScienceSection, Comparison, AccordionItem, SearchedThis, FAQ, TrustBanner });
