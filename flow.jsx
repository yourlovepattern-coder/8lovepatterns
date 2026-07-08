/* 8LovePatterns, Intro, Questionnaire, Analysis (English) */

/* 16P-style horizontal scale, Disagree on the LEFT, Agree on the RIGHT */
function CircleScale({ value, onPick }) {
  const { t } = useLang();
  // left → right : disagree (violet) … agree (green)
  const pts = [
    { v:1, c:'var(--violet)', size:66 },
    { v:2, c:'var(--violet)', size:54 },
    { v:3, c:'#9A86C4', size:42 },
    { v:4, c:'#3FA06B', size:54 },
    { v:5, c:'#3FA06B', size:66 },
  ];
  return (
    <div style={{ display:'flex', alignItems:'center', gap:'clamp(12px,2.2vw,22px)', flexWrap:'nowrap' }}>
      <span style={{ color:'var(--violet)', fontWeight:700, fontSize:'1.05rem', whiteSpace:'nowrap' }}>{t('scale.disagree')}</span>
      {pts.map(p=>{
        const active = value===p.v;
        return (
          <button key={p.v} onClick={()=>onPick(p.v)} aria-label={`Level ${p.v}`}
            className="lp-scale-dot"
            style={{ width:p.size, height:p.size, borderRadius:'50%', cursor:'pointer', flexShrink:0,
              border:`2.5px solid ${p.c}`, background: active?p.c:'transparent',
              boxShadow: active?`0 6px 16px -4px ${p.c}`:'none',
              '--dot-c':p.c, transition:'all .16s ease', padding:0 }}>
          </button>
        );
      })}
      <span style={{ color:'#3FA06B', fontWeight:700, fontSize:'1.05rem', whiteSpace:'nowrap' }}>{t('scale.agree')}</span>
    </div>
  );
}

function Intro({ go, onResult }) {
  const core = window.LP_CORE_ORDER;
  const byId = window.LP_BY_ID;
  const { t, lang } = useLang();

  const phases = [
    ['feather','#2C7E91','#E4F0F2','Step 1', t('intro.s1t'), t('intro.s1d')],
    ['heart','#3FA06B','#D9EFE2','Step 2', t('intro.s2t'), t('intro.s2d')],
    ['compass','#6B5CCB','#ECE9FB','Step 3', t('intro.s3t'), t('intro.s3d')],
  ];

  // Adaptive flow: `order` is the questions asked so far (starts with the fixed
  // core). After the core is consumed, the engine appends the next best item.
  const [answers,setAnswers] = useState({});
  const [order,setOrder] = useState(core);
  const [idx,setIdx] = useState(0);
  const [leaving,setLeaving] = useState(false);

  // Analytics: the visitor started the test
  useEffect(()=>{
    window.LP_track && window.LP_track('quiz_start', { quiz_type:'adaptive' });   // legacy GA name
    window.LP_PH && window.LP_PH('test_started', { quiz_type:'adaptive' });        // canonical funnel event
  }, []);

  const answeredCount = Object.keys(answers).length;     // answered before current
  const currentId = order[idx];
  const item = byId[currentId];

  function finish(allAnswers){
    const result = window.LP_deriveResult(allAnswers);
    if(window.LP_track) window.LP_track('quiz_complete', {      // legacy GA name
      questions_answered: Object.keys(allAnswers).length,
      dominant: result && result.dominant
    });
    if(window.LP_PH) window.LP_PH('test_completed', {           // canonical funnel event
      questions_answered: Object.keys(allAnswers).length,
      dominant: result && result.dominant
    });
    onResult && onResult(result);                        // hands code + internal data up
    go('analyse');
  }

  function pick(v){
    const nextAnswers = { ...answers, [currentId]:v };
    setLeaving(true);
    setTimeout(()=>{
      const count = Object.keys(nextAnswers).length;
      const state = window.LP_score(nextAnswers);
      if(window.LP_shouldStop(state, count)){ finish(nextAnswers); return; }

      if(idx+1 < order.length){
        // still inside the pre-queued core
        setAnswers(nextAnswers); setIdx(idx+1); setLeaving(false); window.scrollTo(0,0);
      } else {
        // adaptive: pick the most informative next item
        const nextId = window.LP_selectNext(state, order);
        if(!nextId){ finish(nextAnswers); return; }
        setAnswers(nextAnswers); setOrder([...order, nextId]); setIdx(idx+1); setLeaving(false); window.scrollTo(0,0);
      }
    }, 240);
  }
  function back(){
    if(idx===0){ go('home'); return; }
    setLeaving(true);
    setTimeout(()=>{ setIdx(idx-1); setLeaving(false); window.scrollTo(0,0); }, 160);
  }

  // progress bar: 0→80% across the first 40, 80→100% across 40→60
  const n = answeredCount;
  const pct = n < window.LP_MIN ? (n/window.LP_MIN)*80 : 80 + ((n-window.LP_MIN)/(window.LP_MAX-window.LP_MIN))*20;

  if(!item) return null;

  return (
    <div>
      {/* Directions, only on the very first question */}
      {idx===0 && (
        <Section style={{ padding:'clamp(34px,5vw,60px) 0 0' }}>
          <Container style={{ textAlign:'center', maxWidth:1080 }}>
            <Avatar code="anc" size={92}/>
            <h1 className="lp-h1" style={{ marginTop:18 }}>{t('intro.title')}</h1>
            <p className="lp-lead" style={{ marginTop:14, maxWidth:540, marginInline:'auto' }}>
              {t('intro.lead')}
            </p>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'24px', marginTop:42, textAlign:'left' }} className="lp-mech-grid">
              {phases.map(([ic,c,soft,step,title,d])=>(
                <div key={title} style={{ background:soft, border:`1.5px solid ${c}2e`,
                  borderRadius:'var(--r-xl)', padding:'clamp(28px,2.6vw,38px)',
                  boxShadow:'var(--sh-sm)', display:'flex', flexDirection:'column', gap:'15px' }}>
                  <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                    <span style={{ display:'grid', placeItems:'center', width:58, height:58, borderRadius:'17px', background:c, color:'#fff', boxShadow:`0 8px 18px -6px ${c}` }}><Icon name={ic} size={28}/></span>
                    <span style={{ fontSize:'.72rem', fontWeight:800, letterSpacing:'.12em', textTransform:'uppercase', color:'#fff',
                      background:c, padding:'6px 13px', borderRadius:'var(--r-pill)' }}>{step}</span>
                  </div>
                  <div className="lp-h3" style={{ color:c }}>{title}</div>
                  <p style={{ margin:0, color:'var(--ink-2)', lineHeight:1.6, fontSize:'1rem' }}>{d}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* The test, one adaptive question at a time */}
      <Section band="var(--surface)" style={{ padding:'clamp(28px,4vw,44px) 0 0', marginTop: idx===0?'clamp(34px,5vw,56px)':0 }}>
        <Container>
          {/* Fixed-height stage: the question area always occupies one standard
              screen, so the answer buttons and the footer below never shift up or
              down with the length of the statement. */}
          <div style={{ display:'flex', flexDirection:'column', minHeight:'calc(100vh - 188px)' }}>
            {/* Progress */}
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'10px' }}>
              <button onClick={back} style={{ display:'inline-flex', alignItems:'center', gap:'5px', background:'none',
                border:'none', cursor:'pointer', color:'var(--ink-2)', fontFamily:'var(--font-body)', fontWeight:600, fontSize:'.9rem', padding:0 }}>
                <Icon name="arrow-left" size={16}/> {t('q.back')}
              </button>
              <span style={{ fontSize:'.85rem', fontWeight:700, color:'var(--ink-2)' }}>{t('q.word')} {n+1} <span style={{ color:'var(--ink-3)' }}>· {t('q.range')}</span></span>
            </div>
            <ProgressBar value={pct} color="var(--corail)"/>

            {/* Statement + scale form a constant-height block (the statement has a
                reserved min-height), centred in the stage. Because the block height
                never changes, the answer dots and the footer below stay put no
                matter how long the question is. */}
            <div style={{ flex:1, display:'flex', flexDirection:'column', justifyContent:'center',
              opacity:leaving?0:1, transform:leaving?'translateY(8px)':'none', transition:'all .22s cubic-bezier(.22,.61,.36,1)' }}>
              <h2 className="lp-h2" style={{ lineHeight:1.26, fontWeight:700, marginBottom:'34px', maxWidth:'100%',
                minHeight:'3.9em', display:'flex', alignItems:'flex-end',
                fontSize:'clamp(1.45rem, 1.05rem + 1.15vw, 2rem)', textWrap:'balance' }}>{window.LP_itemText ? window.LP_itemText(item, lang) : item.text}</h2>
              <CircleScale value={answers[item.id]} onPick={pick}/>
            </div>

            <div style={{ display:'flex', alignItems:'center', gap:'9px', padding:'clamp(18px,3vw,28px) 0', color:'var(--ink-3)', fontSize:'.88rem' }}>
              <Icon name="lock" size={15}/> {t('trust.line')}
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}

function Quiz({ go, onFinish }) {
  const Q = window.QUESTIONS;
  const SCALE = window.SCALE;
  const [i,setI] = useState(0);
  const [answers,setAnswers] = useState({});
  const [leaving,setLeaving] = useState(false);
  const total = 80;
  const q = Q[i % Q.length];
  const progress = (i/Q.length)*100;

  function pick(v){
    setAnswers(a=>({ ...a, [q.id]:v }));
    setLeaving(true);
    setTimeout(()=>{
      if(i >= Q.length-1){ onFinish(); go('analyse'); }
      else { setI(i+1); setLeaving(false); }
    }, 260);
  }
  function back(){ if(i>0){ setLeaving(true); setTimeout(()=>{ setI(i-1); setLeaving(false); },180);} }

  return (
    <div style={{ minHeight:'calc(100vh - 72px)', display:'flex', flexDirection:'column', background:'var(--paper)' }}>
      <div style={{ position:'sticky', top:72, zIndex:10, background:'var(--paper)', padding:'18px 0 14px', borderBottom:'1px solid var(--hairline)' }}>
        <Container narrow>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'10px' }}>
            <button onClick={back} disabled={i===0} style={{ display:'inline-flex', alignItems:'center', gap:'5px', background:'none',
              border:'none', cursor:i===0?'default':'pointer', color:i===0?'var(--ink-3)':'var(--ink-2)', opacity:i===0?.4:1,
              fontFamily:'var(--font-body)', fontWeight:600, fontSize:'.9rem', padding:0 }}>
              <Icon name="arrow-left" size={16}/> Back
            </button>
            <span style={{ fontSize:'.85rem', fontWeight:700, color:'var(--ink-2)' }}>Question {i+1} <span style={{ color:'var(--ink-3)' }}>/ {total}</span></span>
          </div>
          <ProgressBar value={progress} color="var(--corail)"/>
        </Container>
      </div>

      <div style={{ flex:1, display:'flex', alignItems:'center', justifyContent:'center', padding:'40px 0 64px' }}>
        <Container narrow>
          <div style={{ opacity:leaving?0:1, transform:leaving?'translateY(10px)':'none', transition:'all .26s cubic-bezier(.22,.61,.36,1)' }}>
            <div style={{ textAlign:'center', marginBottom:'40px' }}>
              <div style={{ display:'inline-flex', alignItems:'center', gap:'8px', marginBottom:'22px' }}>
                <FamilyDot family={q.fam}/>
                <span style={{ fontSize:'.74rem', fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:'var(--ink-3)' }}>How true is this for you?</span>
              </div>
              <h2 className="lp-h2" style={{ maxWidth:560, margin:'0 auto', lineHeight:1.25 }}>{q.text}</h2>
            </div>
            <div style={{ display:'flex', flexDirection:'column', gap:'11px', maxWidth:520, margin:'0 auto' }}>
              {SCALE.map(s=>{
                const active = answers[q.id]===s.v;
                return <ScaleOption key={s.v} s={s} active={active} onClick={()=>pick(s.v)}/>;
              })}
            </div>
            <p style={{ textAlign:'center', marginTop:26, color:'var(--ink-3)', fontSize:'.9rem' }}>
              There's no right answer. Answer with your instinct, not your ideal.
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
}

function ScaleOption({ s, active, onClick }) {
  const [h,setH] = useState(false);
  return (
    <button onClick={onClick} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
      style={{ display:'flex', alignItems:'center', gap:'14px', textAlign:'left', cursor:'pointer',
        padding:'16px 20px', borderRadius:'var(--r-pill)', fontFamily:'var(--font-body)', fontSize:'1.02rem', fontWeight:600,
        color: active?'#fff':'var(--ink)', background: active?'var(--encre)':'var(--surface)',
        border:`1.5px solid ${active?'var(--encre)':(h?'var(--violet)':'var(--hairline)')}`,
        boxShadow: h&&!active?'var(--sh-sm)':'var(--sh-xs)', transition:'all .16s ease', transform:h&&!active?'translateX(2px)':'none' }}>
      <span style={{ width:22, height:22, borderRadius:'50%', flexShrink:0, display:'grid', placeItems:'center',
        border:`2px solid ${active?'#fff':'var(--hairline-2)'}`, background:active?'rgba(255,255,255,.15)':'transparent' }}>
        {active && <Icon name="check" size={13}/>}
      </span>
      {s.label}
    </button>
  );
}

function Analyse({ go }) {
  const [step,setStep] = useState(0);
  const lines = ['Reading your answers…','Spotting the active patterns…','Identifying your dominant one…','Preparing your mirror…'];
  useEffect(()=>{
    const t1 = setInterval(()=> setStep(s=> s<lines.length-1 ? s+1 : s), 750);
    const t2 = setTimeout(()=> go('result'), 3400);
    return ()=>{ clearInterval(t1); clearTimeout(t2); };
  },[]);
  return (
    <div style={{ minHeight:'calc(100vh - 72px)', display:'grid', placeItems:'center', background:'var(--encre)', color:'#fff' }}>
      <div style={{ textAlign:'center', padding:'0 24px' }}>
        <div style={{ width:130, height:130, margin:'0 auto', borderRadius:'50%', position:'relative', display:'grid', placeItems:'center' }}>
          <div style={{ position:'absolute', inset:0, borderRadius:'50%', border:'3px solid rgba(255,255,255,.14)',
            borderTopColor:'var(--corail)', animation:'lp-spin 1s linear infinite' }}></div>
          <Icon name="anchor" size={48} style={{ color:'var(--or)' }}/>
        </div>
        <h2 className="lp-h2" style={{ color:'#fff', marginTop:34 }}>We're reading between your lines.</h2>
        <p style={{ color:'rgba(255,255,255,.6)', marginTop:14, height:24, transition:'all .3s' }}>{lines[step]}</p>
        <style>{`@keyframes lp-spin{to{transform:rotate(360deg)}}`}</style>
      </div>
    </div>
  );
}

Object.assign(window, { Intro, Quiz, Analyse });
