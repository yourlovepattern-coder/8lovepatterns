/* ============================================================================
   8LovePatterns — TEST FLOW  (formatting only; the scoring engine is separate)
   ----------------------------------------------------------------------------
   Renders the 27 screens from window.LP_TEST: intro → 4 chapters → provisional
   result. Three screen kinds:
     · 'single'    — single choice, auto-advances (chapters 0 and 2)
     · 'matrix'    — rate EACH of 5 reactions on the 5-level scale (chapter 1)
     · 'statement' — one statement on the 5-level scale, auto-advances (chapter 3)
   No bracketed label is ever rendered. No score is computed here. The result
   screen is a layout shell; the safety gate (Q-C3 = alerte) is a display rule.
   ========================================================================== */

/* Current-language text picker for { fr, en } objects. */
function useTx(){ const { lang } = useLang(); return (o)=> !o ? '' : (o[lang] != null ? o[lang] : (o.fr != null ? o.fr : o.en)); }

/* Live viewport width (drives the responsive matrix). */
function useWidth(){
  const [w,setW] = useState(typeof window!=='undefined' ? window.innerWidth : 1200);
  useEffect(()=>{ const f=()=>setW(window.innerWidth); window.addEventListener('resize',f); return ()=>window.removeEventListener('resize',f); },[]);
  return w;
}

/* 5-level intensity ramp: neutral (not me) → coral (completely me). */
const LP_RAMP = ['#A7A2BC','#C49A93','#DC8870','#EA7058','#EE6352'];

/* ---- One scale dot (used by matrix + statement) ------------------------- */
function ScaleDot({ v, size=30, active, onPick, label }){
  const c = LP_RAMP[v];
  const [h,setH] = useState(false);
  return (
    <button onClick={onPick} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
      aria-label={label} title={label}
      style={{ width:size, height:size, borderRadius:'50%', cursor:'pointer', padding:0, flexShrink:0,
        border:`2.5px solid ${c}`, background: active ? c : (h ? `color-mix(in srgb, ${c} 18%, transparent)` : 'transparent'),
        boxShadow: active ? `0 5px 14px -4px ${c}` : 'none',
        transform: active ? 'scale(1.04)' : (h ? 'scale(1.06)' : 'none'),
        transition:'all .16s ease' }}>
    </button>
  );
}

/* ============================================================================
   SCREEN — single choice  (chapters 0 + 2)
   ========================================================================== */
function SingleScreen({ q, value, onPick }){
  const tx = useTx();
  return (
    <div>
      <h2 className="lp-h2" style={{ lineHeight:1.28, fontWeight:700, marginBottom:'clamp(26px,3.4vw,40px)',
        fontSize:'clamp(1.4rem, 1.02rem + 1.15vw, 2rem)', textWrap:'balance' }}>{tx(q.situation)}</h2>
      <div style={{ display:'flex', flexDirection:'column', gap:'12px', maxWidth:660 }}>
        {q.options.map((opt,i)=>{
          const active = value===i;
          return <ChoiceButton key={i} active={active} onClick={()=>onPick(i)} label={tx(opt)}/>;
        })}
      </div>
    </div>
  );
}

function ChoiceButton({ label, active, onClick }){
  const [h,setH] = useState(false);
  return (
    <button onClick={onClick} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
      style={{ display:'flex', alignItems:'center', gap:'15px', textAlign:'left', cursor:'pointer', width:'100%',
        padding:'17px 22px', borderRadius:'var(--r-lg)', fontFamily:'var(--font-body)', fontSize:'1.06rem', fontWeight:600,
        lineHeight:1.4, color: active?'#fff':'var(--ink)', background: active?'var(--encre)':'var(--surface)',
        border:`1.5px solid ${active?'var(--encre)':(h?'var(--violet)':'var(--hairline)')}`,
        boxShadow: h&&!active?'var(--sh-sm)':'var(--sh-xs)', transition:'all .16s ease', transform:h&&!active?'translateX(3px)':'none' }}>
      <span style={{ width:23, height:23, borderRadius:'50%', flexShrink:0, display:'grid', placeItems:'center',
        border:`2px solid ${active?'#fff':'var(--hairline-2)'}`, background:active?'rgba(255,255,255,.16)':'transparent' }}>
        {active && <Icon name="check" size={13}/>}
      </span>
      <span>{label}</span>
    </button>
  );
}

/* ============================================================================
   SCREEN — statement on the 5-level scale  (chapter 3)
   ========================================================================== */
function StatementScreen({ q, value, onPick }){
  const tx = useTx();
  const scale = window.LP_TEST.scale;
  const narrow = useWidth() < 620;
  return (
    <div>
      <div style={{ display:'inline-flex', alignItems:'center', gap:'9px', marginBottom:'18px' }}>
        <span style={{ fontSize:'.74rem', fontWeight:800, letterSpacing:'.12em', textTransform:'uppercase', color:'var(--ink-3)', whiteSpace:'nowrap' }}>
          {useTx()({ fr:'À quel point est-ce toi ?', en:'How much is this you?' })}
        </span>
      </div>
      <h2 className="lp-h2" style={{ lineHeight:1.28, fontWeight:700, marginBottom:'clamp(30px,4vw,48px)',
        fontSize:'clamp(1.45rem, 1.05rem + 1.2vw, 2.05rem)', textWrap:'balance', maxWidth:760 }}>{tx(q.statement)}</h2>

      {narrow ? (
        <div style={{ display:'flex', flexDirection:'column', gap:'11px', maxWidth:560 }}>
          {scale.map(s=>(
            <button key={s.v} onClick={()=>onPick(s.v)}
              style={{ display:'flex', alignItems:'center', gap:'14px', textAlign:'left', cursor:'pointer', width:'100%',
                padding:'15px 19px', borderRadius:'var(--r-lg)', fontFamily:'var(--font-body)', fontSize:'1.04rem', fontWeight:600,
                color: value===s.v?'#fff':'var(--ink)', background: value===s.v?'var(--encre)':'var(--surface)',
                border:`1.5px solid ${value===s.v?'var(--encre)':'var(--hairline)'}`, boxShadow:'var(--sh-xs)', transition:'all .16s ease' }}>
              <span style={{ width:18, height:18, borderRadius:'50%', flexShrink:0, border:`3px solid ${LP_RAMP[s.v]}`,
                background: value===s.v?LP_RAMP[s.v]:'transparent' }}></span>
              {tx(s)}
            </button>
          ))}
        </div>
      ) : (
        <div style={{ display:'grid', gridTemplateColumns:'repeat(5, 1fr)', gap:'8px', maxWidth:660 }}>
          {scale.map(s=>(
            <div key={s.v} onClick={()=>onPick(s.v)}
              style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:'14px', cursor:'pointer', padding:'8px 4px' }}>
              <ScaleDot v={s.v} size={34 + s.v*8} active={value===s.v} onPick={()=>onPick(s.v)} label={tx(s)}/>
              <span style={{ fontSize:'.82rem', fontWeight:600, textAlign:'center', lineHeight:1.3,
                color: value===s.v?'var(--ink)':'var(--ink-3)' }}>{tx(s)}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ============================================================================
   SCREEN — matrix: rate each of 5 reactions  (chapter 1)
   ========================================================================== */
function MatrixScreen({ q, value, onChange }){
  const tx = useTx();
  const scale = window.LP_TEST.scale;
  const narrow = useWidth() < 860;
  const set = (ri, v)=> onChange({ ...(value||{}), [ri]: v });

  return (
    <div>
      <h2 className="lp-h2" style={{ lineHeight:1.28, fontWeight:700, marginBottom:'8px',
        fontSize:'clamp(1.32rem, 1rem + 1.05vw, 1.85rem)', textWrap:'balance', maxWidth:880 }}>{tx(q.situation)}</h2>
      <p style={{ margin:'0 0 clamp(20px,2.6vw,30px)', color:'var(--ink-3)', fontSize:'.95rem', fontWeight:600 }}>
        {tx({ fr:'Note chacune de ces réactions selon ce qui te ressemble.', en:'Rate each of these reactions by how much it sounds like you.' })}
      </p>

      {narrow ? (
        /* ---- stacked (mobile) ---- */
        <div style={{ display:'flex', flexDirection:'column', gap:'12px' }}>
          {q.reactions.map((r,ri)=>{
            const v = value ? value[ri] : undefined;
            return (
              <div key={ri} style={{ background:'var(--surface)', border:`1.5px solid ${v!=null?'var(--hairline-2)':'var(--hairline)'}`,
                borderRadius:'var(--r-lg)', padding:'16px 18px', boxShadow:'var(--sh-xs)' }}>
                <div style={{ fontSize:'1.02rem', fontWeight:600, lineHeight:1.42, color:'var(--ink)', textWrap:'pretty' }}>{tx(r)}</div>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginTop:'14px' }}>
                  {scale.map(s=> <ScaleDot key={s.v} v={s.v} size={32} active={v===s.v} onPick={()=>set(ri,s.v)} label={tx(s)}/> )}
                </div>
                <div style={{ display:'flex', justifyContent:'space-between', marginTop:'7px', color:'var(--ink-3)', fontSize:'.72rem', fontWeight:600 }}>
                  <span>{tx(scale[0])}</span><span>{tx(scale[4])}</span>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* ---- aligned grid (desktop): labels header + 5 reaction rows ---- */
        <div>
          <div style={{ display:'grid', gridTemplateColumns:'minmax(0,1fr) repeat(5, clamp(58px,6vw,82px))', alignItems:'end',
            gap:'0 4px', paddingBottom:'10px', borderBottom:'1px solid var(--hairline)' }}>
            <span></span>
            {scale.map(s=>(
              <span key={s.v} style={{ textAlign:'center', fontSize:'.72rem', fontWeight:700, lineHeight:1.22, color:'var(--ink-3)', padding:'0 2px' }}>{tx(s)}</span>
            ))}
          </div>
          {q.reactions.map((r,ri)=>{
            const v = value ? value[ri] : undefined;
            const done = v!=null;
            return (
              <div key={ri} style={{ display:'grid', gridTemplateColumns:'minmax(0,1fr) repeat(5, clamp(58px,6vw,82px))',
                alignItems:'center', gap:'0 4px', padding:'15px 0', borderBottom:'1px solid var(--hairline)' }}>
                <span style={{ fontSize:'1.04rem', fontWeight:600, lineHeight:1.4, color: done?'var(--ink)':'var(--ink-2)', paddingRight:'18px', textWrap:'pretty' }}>{tx(r)}</span>
                {scale.map(s=>(
                  <span key={s.v} style={{ display:'grid', placeItems:'center' }}>
                    <ScaleDot v={s.v} size={30} active={v===s.v} onPick={()=>set(ri,s.v)} label={tx(s)}/>
                  </span>
                ))}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

/* ============================================================================
   CHAPTER PROGRESS — name + "Chapitre n sur 4" + 4 segment bars
   ========================================================================== */
function ChapterProgress({ chapters, current, fills }){
  const tx = useTx();
  const ch = chapters[current];
  return (
    <div>
      <div style={{ display:'flex', alignItems:'baseline', gap:'12px', marginBottom:'9px', flexWrap:'wrap' }}>
        <span style={{ fontSize:'.74rem', fontWeight:800, letterSpacing:'.13em', textTransform:'uppercase', color:'var(--corail)', whiteSpace:'nowrap' }}>
          {tx({ fr:`Chapitre ${ch.n} sur 4`, en:`Chapter ${ch.n} of 4` })}
        </span>
        <span style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:'1.05rem', color:'var(--ink)', letterSpacing:'-.01em' }}>{tx(ch)}</span>
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:'7px' }}>
        {chapters.map((c,i)=>(
          <div key={c.n} style={{ height:7, borderRadius:'4px', background:'var(--hairline)', overflow:'hidden' }}>
            <div style={{ width:`${Math.round((fills[i]||0)*100)}%`, height:'100%', borderRadius:'4px',
              background: i<current ? 'var(--or)' : 'var(--corail)', transition:'width .4s cubic-bezier(.22,.61,.36,1)' }}/>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ============================================================================
   ORCHESTRATOR
   ========================================================================== */
function LoveTest({ go }){
  const T = window.LP_TEST;
  const chapters = T.chapters;
  const tx = useTx();

  const [phase,setPhase] = useState('intro');      // 'intro' | 'test' | 'result'
  const [index,setIndex] = useState(0);
  const [answers,setAnswers] = useState({});        // by question id
  const [leaving,setLeaving] = useState(false);

  /* Anchor variant: frozen at the moment the person ARRIVES at Chapter 2,
     using the exact Section 1 calculation. Never recomputed afterwards: the
     Anchor is measured on the variant that was actually played. A perfect tie
     at the result stage (profil mixte) only changes the report display. */
  const [ancreVariant,setAncreVariant] = useState(null);
  const leading = ancreVariant || window.LP_ENGINE.patternCalc(answers).dominant;
  const Q = React.useMemo(()=> [].concat(T.c0, T.c1, (T.ancre && T.ancre[leading]) || T.ancre['Miroir'], T.c3), [leading]);
  /* Dev hook (debugging + future integrations). Read-only. */
  useEffect(()=>{ window.__lpState = { answers, ancreVariant }; }, [answers, ancreVariant]);

  /* Analytics (cookieless, non-blocking). quiz_started when the questionnaire
     actually begins; quiz_completed when the last answer is validated and the
     flow crosses into the result phase (score computed downstream). Fires on
     each real transition, so a retake counts as a fresh start. */
  const phasePrevRef = React.useRef(phase);
  React.useEffect(()=>{
    if(phase !== phasePrevRef.current){
      if(phase==='test'){ window.LP_PH && window.LP_PH('quiz_started', { test_type:'love_test' }); }
      else if(phase==='result'){ window.LP_PH && window.LP_PH('quiz_completed', { questions_answered: Object.keys(answers).length }); }
      phasePrevRef.current = phase;
    }
  }, [phase]);

  const q = Q[index];
  const curChapter = q ? q.chapter : 0;
  const fills = chapters.map(ch=>{
    const total = Q.filter(x=>x.chapter===ch.n).length;
    const before = Q.slice(0,index).filter(x=>x.chapter===ch.n).length;
    if(ch.n < curChapter) return 1;
    if(ch.n === curChapter) return total ? before/total : 0;
    return 0;
  });

  function setAnswer(v){ setAnswers(a=>({ ...a, [q.id]: v })); }

  function go_next(){
    setLeaving(true);
    setTimeout(()=>{
      const next = index+1;
      /* Crossing into Chapter 2: freeze the Anchor variant on the pattern
         leading right now (Section 1 calc). Kept for the rest of the test. */
      if(ancreVariant==null && Q[next] && Q[next].chapter===2){
        setAncreVariant(window.LP_ENGINE.patternCalc(answers).dominant);
      }
      if(next < Q.length){ setIndex(next); setLeaving(false); window.scrollTo(0,0); }
      else { setPhase('result'); setLeaving(false); window.scrollTo(0,0); }
    }, 230);
  }
  function go_back(){
    if(index===0){ setPhase('intro'); return; }
    setLeaving(true);
    setTimeout(()=>{ setIndex(index-1); setLeaving(false); window.scrollTo(0,0); }, 180);
  }
  function pickSingle(v){ setAnswer(v); setLeaving(true);
    setTimeout(()=>{ if(index+1<Q.length){ setIndex(index+1);} else { setPhase('result'); } setLeaving(false); window.scrollTo(0,0); }, 240); }

  /* ---- intro splash ---- */
  if(phase==='intro'){
    return <TestShell go={go}>
      <TestIntro chapters={chapters} onStart={()=>{ setPhase('test'); setIndex(0); window.scrollTo(0,0); }}/>
    </TestShell>;
  }

  /* ---- result ---- */
  if(phase==='result'){
    return <TestShell go={go}>
      <TestResult answers={answers} ancreVariant={ancreVariant} onRestart={()=>{ setAnswers({}); setAncreVariant(null); setIndex(0); setPhase('intro'); window.scrollTo(0,0); }} go={go}/>
    </TestShell>;
  }

  /* ---- a question ---- */
  const v = answers[q.id];
  const isMatrix = q.kind==='matrix';
  const matrixComplete = isMatrix && v && Object.keys(v).length===q.reactions.length;
  const globalN = index+1;

  return (
    <TestShell go={go}>
      <div style={{ display:'flex', flexDirection:'column', minHeight:'calc(100vh - 132px)' }}>
        <ChapterProgress chapters={chapters} current={curChapter} fills={fills}/>

        <div style={{ flex:1, display:'flex', flexDirection:'column', justifyContent:'center', padding:'clamp(26px,4vw,48px) 0',
          opacity:leaving?0:1, transform:leaving?'translateY(10px)':'none', transition:'all .24s cubic-bezier(.22,.61,.36,1)' }}>
          {q.kind==='single'    && <SingleScreen    q={q} value={v} onPick={pickSingle}/>}
          {q.kind==='statement' && <StatementScreen q={q} value={v} onPick={(val)=>{ setAnswer(val); pickSingle(val); }}/>}
          {q.kind==='matrix'    && <MatrixScreen    q={q} value={v} onChange={setAnswer}/>}
        </div>

        {/* footer: back · counter · (continue for matrix) */}
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', gap:'16px',
          padding:'clamp(14px,2.4vw,22px) 0', borderTop:'1px solid var(--hairline)' }}>
          <button onClick={go_back} style={{ display:'inline-flex', alignItems:'center', gap:'6px', background:'none',
            border:'none', cursor:'pointer', color:'var(--ink-2)', fontFamily:'var(--font-body)', fontWeight:600, fontSize:'.92rem', padding:0 }}>
            <Icon name="arrow-left" size={16}/> {tx({ fr:'Retour', en:'Back' })}
          </button>

          <span style={{ fontSize:'.85rem', fontWeight:700, color:'var(--ink-3)' }}>
            {tx({ fr:'Question', en:'Question' })} {globalN} <span style={{ color:'var(--ink-3)', opacity:.7 }}>/ {Q.length}</span>
          </span>

          {isMatrix
            ? <Button size="md" icon="arrow-right" onClick={go_next} style={ matrixComplete?{}:{ opacity:.4, pointerEvents:'none' } }>
                {tx({ fr:'Continuer', en:'Continue' })}
              </Button>
            : <span style={{ display:'inline-flex', alignItems:'center', gap:'6px', color:'var(--ink-3)', fontSize:'.82rem', fontWeight:600 }}>
                <Icon name="lock" size={14}/> {tx({ fr:'Privé', en:'Private' })}
              </span>}
        </div>
      </div>
    </TestShell>
  );
}

/* ---- shared shell: slim header + centered column ------------------------ */
function TestShell({ children, go }){
  return (
    <div style={{ minHeight:'100vh', background:'var(--paper)', display:'flex', flexDirection:'column' }}>
      <header style={{ display:'flex', alignItems:'center', justifyContent:'space-between',
        padding:'18px clamp(20px,5vw,48px)', borderBottom:'1px solid var(--hairline)', background:'var(--paper)' }}>
        <Logo size={20} onClick={()=>go('home')}/>
        <LanguageWidget/>
      </header>
      <div style={{ flex:1, width:'100%', maxWidth:'var(--maxw)', margin:'0 auto', padding:'clamp(22px,4vw,40px) clamp(20px,5vw,48px)' }}>
        {children}
      </div>
    </div>
  );
}

/* ---- intro splash ------------------------------------------------------- */
function TestIntro({ chapters, onStart }){
  const tx = useTx();
  const meta = {
    0:{ fr:'Trois questions pour situer où tu en es.',          en:'Three questions to place where you are.',          n:3 },
    1:{ fr:'Des scènes du quotidien, et ce qui monte en toi.',  en:'Everyday scenes, and what rises in you.',          n:12 },
    2:{ fr:'À quel moment tu arrives encore à te reprendre.',   en:'When you can still catch yourself in time.',        n:6 },
    3:{ fr:'Ce que ton mécanisme change dans tes relations.',   en:'What your mechanism changes in your relationships.', n:6 },
  };
  return (
    <div style={{ maxWidth:760, margin:'clamp(10px,4vw,46px) auto 0' }}>
      <div style={{ textAlign:'center' }}>
        <Avatar code="anc" size={84}/>
        <h1 className="lp-h1" style={{ marginTop:18 }}>{tx({ fr:'On commence en douceur.', en:"Let's start gently." })}</h1>
        <p className="lp-lead" style={{ marginTop:14, maxWidth:560, marginInline:'auto' }}>
          {tx({ fr:"27 écrans, une question à la fois, en 4 chapitres. Réponds avec ton instinct, il n'y a pas de bonne réponse. On parle de ta vie à toi.",
                en:"27 screens, one question at a time, in 4 chapters. Answer with your gut, there is no right answer. We're talking about your life." })}
        </p>
      </div>

      <div style={{ display:'flex', flexDirection:'column', gap:'12px', marginTop:'clamp(30px,4vw,44px)' }}>
        {chapters.map(ch=>(
          <div key={ch.n} style={{ display:'flex', alignItems:'center', gap:'18px', background:'var(--surface)',
            border:'1px solid var(--hairline)', borderRadius:'var(--r-lg)', padding:'18px 22px', boxShadow:'var(--sh-xs)' }}>
            <span style={{ display:'grid', placeItems:'center', width:42, height:42, borderRadius:'50%', flexShrink:0,
              background:'var(--encre)', color:'#fff', fontFamily:'var(--font-display)', fontWeight:800, fontSize:'1.05rem' }}>{ch.n}</span>
            <div style={{ flex:1 }}>
              <div style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:'1.12rem', color:'var(--ink)' }}>{tx(ch)}</div>
              <div style={{ color:'var(--ink-2)', fontSize:'.96rem', lineHeight:1.45 }}>{tx(meta[ch.n])}</div>
            </div>
            <span style={{ fontSize:'.8rem', fontWeight:700, color:'var(--ink-3)', whiteSpace:'nowrap' }}>{meta[ch.n].n} {tx({ fr:'questions', en:'questions' })}</span>
          </div>
        ))}
      </div>

      <div style={{ textAlign:'center', marginTop:'clamp(28px,4vw,40px)' }}>
        <Button size="lg" icon="arrow-right" onClick={onStart}>{tx({ fr:'Commencer', en:'Begin' })}</Button>
        <div style={{ display:'inline-flex', alignItems:'center', gap:'8px', marginTop:18, color:'var(--ink-3)', fontSize:'.9rem' }}>
          <Icon name="lock" size={15}/> {tx({ fr:'Tes réponses restent privées, sans inscription.', en:'Your answers stay private, no sign-up.' })}
        </div>
      </div>
    </div>
  );
}

/* TestResult (écran de résultat gratuit, séquence en 5 temps) vit dans
   test_result.jsx. SafetyScreen reste ici et est exporté pour lui. */

/* ---- safety screen (Q-C3 = alerte) -------------------------------------- */
function SafetyScreen({ onContinue, go }){
  const tx = useTx();
  return (
    <div style={{ maxWidth:660, margin:'clamp(10px,5vw,56px) auto 0' }}>
      <div style={{ display:'grid', placeItems:'center', width:64, height:64, borderRadius:'50%', margin:'0 auto',
        background:'var(--fam-ancre-soft)', color:'var(--fam-ancre)' }}>
        <Icon name="heart" size={30}/>
      </div>
      <h1 className="lp-h1" style={{ textAlign:'center', marginTop:20 }}>{tx({ fr:"Avant tout, prenons soin de toi.", en:'Before anything, let\u2019s take care of you.' })}</h1>
      <p className="lp-lead" style={{ marginTop:14, textAlign:'center' }}>
        {tx({ fr:"Certaines de tes réponses parlent d'avoir eu peur, de t'être sentie rabaissée ou pas libre. Ça compte plus que n'importe quel résultat de test. Tu n'as pas à porter ça seule.",
              en:"Some of your answers speak of feeling afraid, put down, or not free. That matters more than any test result. You don't have to carry it alone." })}
      </p>

      <div style={{ marginTop:26, background:'var(--surface)', border:'1px solid var(--hairline)', borderRadius:'var(--r-xl)', padding:'24px 26px', boxShadow:'var(--sh-sm)' }}>
        <div style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:'1.12rem', color:'var(--ink)' }}>
          {tx({ fr:"Si tu te sens en danger, parle à quelqu'un de confiance.", en:'If you feel unsafe, talk to someone you trust.' })}
        </div>
        <p style={{ margin:'12px 0 0', color:'var(--ink-2)', lineHeight:1.6, fontSize:'1rem' }}>
          {tx({ fr:"Un proche, un médecin, un professionnel, ou une association près de chez toi peuvent t'écouter et t'aider, sans jugement.",
                en:'A loved one, a doctor, a professional, or a local support service can listen and help, without judgment.' })}
        </p>
        <div style={{ marginTop:16, border:'1px dashed var(--hairline-2)', borderRadius:'var(--r-md)', padding:'14px 16px',
          color:'var(--ink-3)', fontSize:'.9rem', lineHeight:1.5, background:'var(--paper)' }}>
          {tx({ fr:"Emplacement pour les ressources réelles (lignes d'écoute, associations, liens) à insérer ici par l'équipe.",
                en:'Slot for real resources (helplines, support services, links) to be inserted here by the team.' })}
        </div>
      </div>

      <div style={{ textAlign:'center', marginTop:28, display:'flex', flexDirection:'column', gap:'14px', alignItems:'center' }}>
        <Button variant="dark" onClick={onContinue}>{tx({ fr:'Continuer vers mon aperçu', en:'Continue to my preview' })}</Button>
        <button onClick={()=>go('home')} style={{ background:'none', border:'none', cursor:'pointer', color:'var(--ink-3)',
          fontFamily:'var(--font-body)', fontWeight:600, fontSize:'.92rem' }}>{tx({ fr:"Revenir à l'accueil", en:'Back to home' })}</button>
      </div>
    </div>
  );
}

Object.assign(window, { LoveTest, SafetyScreen, useTx });
