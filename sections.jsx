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
      d:'Attachment research measures two things, and neither of them is a category. How much reassurance you need to feel safe, and how much closeness costs you. Fraley and Waller showed in 1998 that these run as continuous dimensions rather than four boxes, which is why nobody is fully one type. You’re a position on a map, and the position moves.' },
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

/* ---- The people who figured this out (Science page, founders grid) ---- */
function FounderCard({ f }) {
  const [imgOk, setImgOk] = useState(true);
  const initials = f.name.split(/\s|&/).filter(Boolean).map(w=>w[0]).slice(0,2).join('');
  return (
    <div style={{ background:'var(--surface)', border:'1px solid var(--hairline)', borderTop:`3px solid ${f.accent}`,
      borderRadius:'var(--r-lg)', padding:'22px', boxShadow:'var(--sh-xs)', display:'flex', flexDirection:'column', gap:'14px' }}>
      <div style={{ aspectRatio:'1', borderRadius:'18px', overflow:'hidden', background:f.soft, flexShrink:0 }}>
        {imgOk
          ? <img src={`assets/science/${f.img}.webp`} alt={`Portrait of ${f.name}`} onError={()=>setImgOk(false)}
              style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }}/>
          : <div style={{ width:'100%', height:'100%', display:'grid', placeItems:'center' }}>
              <span style={{ fontFamily:'var(--font-display)', fontWeight:800, fontSize:'1.5rem', color:f.accent }}>{initials}</span>
            </div>}
      </div>
      <h3 className="lp-h4" style={{ margin:0, color:f.accent }}>{f.name}</h3>
      <p style={{ margin:0, color:'var(--ink-2)', lineHeight:1.58, fontSize:'.95rem' }}>{f.text}</p>
    </div>
  );
}
function FoundersSection() {
  const founders = [
    { key:'bowlby', img:'bowlby', name:'John Bowlby', accent:'var(--fam-poursuis)', soft:'var(--fam-poursuis-soft)',
      text:'Working with children separated from their parents after the war, Bowlby noticed something the psychiatry of his time had no room for. The distress wasn’t a symptom to be managed. It was a strategy. A child who cannot reach a parent will do whatever gets that parent back, and will keep doing it long after the parent is gone.' },
    { key:'ainsworth', img:'ainsworth', name:'Mary Ainsworth', accent:'var(--fam-fuis)', soft:'var(--fam-fuis-soft)',
      text:'Ainsworth put Bowlby’s idea in a room. She watched what one-year-olds did when their mother left and came back, and found that their reactions sorted into patterns so consistent you could predict them. Some protested. Some pretended not to care. The ones who could show their distress and be comforted were the ones who went back to playing.' },
    { key:'hazan-shaver', img:'hazan-shaver', name:'Hazan & Shaver', accent:'var(--fam-efface)', soft:'var(--fam-efface-soft)',
      text:'In 1987 they asked a simple question that changed the field: do adults do this too? They ran a survey in a newspaper, and the answer came back in the same three shapes Ainsworth had found in toddlers. What you do when your partner goes quiet for six hours has a history.' },
    { key:'mikulincer-shaver', img:'mikulincer-shaver', name:'Mikulincer & Shaver', accent:'var(--fam-protege)', soft:'var(--fam-protege-soft)',
      text:'Decades of work later, they named the two moves underneath everything else. Hyperactivation: turn the volume up until someone responds. Deactivation: turn the feeling off until it stops mattering. Most people run one of the two, and most people don’t notice they’re running it.' },
  ];
  return (
    <Module>
      <Container>
        <div style={{ textAlign:'center', maxWidth:640, margin:'0 auto 14px' }}>
          <Eyebrow color="var(--fam-ancre)">The people who figured this out</Eyebrow>
          <h2 className="lp-h1" style={{ marginTop:12, color:'var(--head)' }}>70 years of research to understand why love feels unsafe.</h2>
          <p className="lp-lead" style={{ marginTop:16 }}>
            None of this started with us. It started in a hospital ward in London, and it has been tested on tens of thousands of people since.
          </p>
        </div>
        <div className="lp-founders-grid" style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'18px', marginTop:40 }}>
          {founders.map(f=> <FounderCard key={f.key} f={f}/>)}
        </div>
        <p style={{ textAlign:'center', maxWidth:560, margin:'30px auto 0', color:'var(--ink-2)', lineHeight:1.6, fontSize:'1.02rem', textWrap:'pretty' }}>
          Every mechanism in this test traces back to this work. We didn’t add a theory. We built a way to find yours.
        </p>
      </Container>
    </Module>
  );
}

/* ---- The Anchor (Science page, static 5-tier scale, no active marker) ---- */
function AnchorScalePreview({ tiers }) {
  return (
    <div className="lp-anchor-preview">
      <svg className="lp-ap-rope" viewBox="0 0 120 560" fill="none" preserveAspectRatio="xMidYMin meet" aria-hidden="true">
        <path d="M60 8 C88 90 34 160 60 250 C86 340 34 400 58 470" stroke="#F0D9B5" strokeWidth="7" strokeLinecap="round"/>
        <g stroke="#fff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none">
          <circle cx="57" cy="484" r="9"/>
          <line x1="57" y1="493" x2="57" y2="552"/>
          <line x1="40" y1="510" x2="74" y2="510"/>
          <path d="M31 528 C31 548 43 556 57 556 C71 556 83 548 83 528"/>
          <path d="M24 522l7 7 8-8"/>
          <path d="M90 522l-7 7-8-8"/>
        </g>
      </svg>
      <div className="lp-ap-tiers">
        {tiers.map(t=>(
          <div key={t.name} className="lp-ap-tier">
            <span className="nm">{t.name}</span>
            <span className="ds">{t.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
function AnchorSection() {
  const tiers = [
    { name:'Clear', desc:'You feel it coming.' },
    { name:'Slipping', desc:'You catch it live.' },
    { name:'Snagged', desc:'You know, and do it anyway.' },
    { name:'Hooked', desc:'You understand it, always too late.' },
    { name:'Buried', desc:'The problem is the other person.' },
  ];
  return (
    <Module>
      <Container narrow>
        <div style={{ textAlign:'center', maxWidth:640, margin:'0 auto 14px' }}>
          <Eyebrow color="var(--fam-ancre)">The Anchor</Eyebrow>
          <h2 className="lp-h1" style={{ marginTop:12, color:'var(--head)' }}>Seeing the pattern and stopping it are two different problems.</h2>
        </div>
        <div style={{ marginTop:28, display:'flex', flexDirection:'column', gap:'18px' }}>
          <p style={{ color:'var(--body-2)', lineHeight:1.65, fontSize:'1.05rem' }}>
            Attachment research is clear on one thing that surprises people: patterns do change in adulthood. Mary Main’s work at Berkeley found adults who had every reason to be insecure, difficult childhoods and real relational damage, who nevertheless related to others with the coherence of someone who’d been safe all along. The field calls this earned security, and it is one of the most robust findings in the literature.
          </p>
          <p style={{ color:'var(--body-2)', lineHeight:1.65, fontSize:'1.05rem' }}>
            But the same research is just as clear about what doesn’t move the needle. Insight on its own rarely changes an attachment pattern. Reading about avoidance, naming your own, understanding exactly where it came from, all of that raises awareness and leaves the behavior intact, particularly under stress, which is precisely when the pattern runs.
          </p>
          <p style={{ color:'var(--body-2)', lineHeight:1.65, fontSize:'1.05rem' }}>
            So awareness is not the finish line. It’s the thing that creates a choice where there used to be a reflex.
          </p>
          <p style={{ color:'var(--body-2)', lineHeight:1.65, fontSize:'1.05rem' }}>
            The Anchor measures that gap. Not what you are, and not what happened to you. How much room you currently have between the moment the mechanism fires and the moment you act on it.
          </p>
        </div>
        <div style={{ marginTop:40 }}>
          <AnchorScalePreview tiers={tiers}/>
        </div>
        <p style={{ textAlign:'center', maxWidth:560, margin:'30px auto 0', color:'var(--ink-2)', lineHeight:1.6, fontSize:'1.02rem', textWrap:'pretty' }}>
          The free test tells you which mechanism runs your loop, and where you’re anchored right now. Moving up a level takes repetition, not information. That part is the work.
        </p>
      </Container>
    </Module>
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
function FAQ({ embedded }) {
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
  const body = (
    <div style={{ maxWidth: embedded?680:'none', margin: embedded?'0 auto':0 }}>
      <div style={{ textAlign:'center', maxWidth:640, margin:'0 auto 26px' }}>
        <h2 className={embedded?'lp-module-h':'lp-h1'} style={embedded?{ fontSize:'clamp(2rem,1.6rem+2vw,2.8rem)' }:undefined}>Relationship Pattern FAQ.</h2>
      </div>
      <div style={{ background:'#fff', border: embedded?'none':'1px solid var(--hairline)', borderRadius:'var(--r-card)',
        padding:'8px 28px', boxShadow: embedded?'none':'var(--sh-xs)' }}>
        {faqs.map(([q,a],i)=>(
          <AccordionItem key={q} q={q} a={a} open={open===i} onToggle={()=>setOpen(open===i?null:i)}/>
        ))}
      </div>
    </div>
  );
  if (embedded) return body;
  return (
    <Section band="var(--paper-2)">
      <Container narrow>{body}</Container>
    </Section>
  );
}

/* ---- Science / social-proof trust banner (text-based institution badges) ---- */
function TrustBanner() {
  const { t } = useLang();
  return (
    <Section style={{ padding:'clamp(28px,4vw,52px) 0' }}>
      <Container>
        <div style={{ background:'var(--surface)', border:'1px solid var(--hairline)', borderRadius:'var(--r-xl)',
          padding:'clamp(28px,4vw,44px)', maxWidth:820, margin:'0 auto', textAlign:'center',
          boxShadow:'var(--sh-xs)' }}>
          <Eyebrow>{t('tb.eyebrow')}</Eyebrow>
          <p className="lp-h3" style={{ marginTop:14, color:'var(--ink)', maxWidth:600, marginInline:'auto', textWrap:'pretty', fontWeight:600 }}>
            {t('tb.h')}
          </p>
          <p style={{ marginTop:16, color:'var(--ink-3)', lineHeight:1.55, fontSize:'.8rem', maxWidth:560, marginInline:'auto', textWrap:'pretty' }}>
            {t('tb.disclaimer')}
          </p>
        </div>
      </Container>
    </Section>
  );
}

Object.assign(window, { CredibilityStrip, ScienceSection, FoundersSection, AnchorSection, Comparison, AccordionItem, SearchedThis, FAQ, TrustBanner });
