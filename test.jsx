/* ============================================================================
   8LovePatterns — TEST FLOW  (v2 : entonnoir en deux temps)
   ----------------------------------------------------------------------------
   Rend les 33 écrans-question de window.LP_TEST, coupés en deux par la
   révélation partielle. Machine à étapes (pas de "chapitres" à l'écran) :
     Bloc 0 (5) · cadrage · Étage 1 A (8 axes) · Étage 1 B (8 mécanisme)
     → FIGEMENT → Halte 1 (révélation) · Halte 2 (intro Ancre + 1re question)
     · Étage 2 (5 questions d'Ancre restantes) · Étage 2 bis (6 sabotage)
     · écran de fin → résultat.
   Route sécure : Halte 1 sécure, Étage 2 sauté, résultat sécure sans offre.

   Kinds d'écran-question :
     · 'single'    — choix unique, auto-avance (Bloc 0, Ancre)
     · 'statement' — une affirmation sur l'échelle 5 degrés, auto-avance
                     (Étage 1 A + B, Sabotage)
   Barre de progression : une ligne fine en haut, se REMPLIT, jamais un chiffre.
   Aucun label entre crochets n'est rendu. Aucun score calculé ici.
   ========================================================================== */

/* Current-language text picker for { fr, en } objects. */
function useTx(){ const { lang } = useLang(); return (o)=> !o ? '' : (o[lang] != null ? o[lang] : (o.fr != null ? o.fr : o.en)); }

/* Live viewport width (drives the responsive statement scale). */
function useWidth(){
  const [w,setW] = useState(typeof window!=='undefined' ? window.innerWidth : 1200);
  useEffect(()=>{ const f=()=>setW(window.innerWidth); window.addEventListener('resize',f); return ()=>window.removeEventListener('resize',f); },[]);
  return w;
}

/* Fisher-Yates : renvoie une copie mélangée (ordre d'affichage). */
function lpShuffle(arr){
  const a = arr.slice();
  for(let i=a.length-1; i>0; i--){ const j = Math.floor(Math.random()*(i+1)); const t=a[i]; a[i]=a[j]; a[j]=t; }
  return a;
}

/* Inline **bold** renderer for verbatim halte texts. */
function InlineRich({ text }){
  const parts = String(text).split('**');
  return parts.map((s,i)=> i%2===1 ? <strong key={i}>{s}</strong> : <React.Fragment key={i}>{s}</React.Fragment>);
}

/* 5-level intensity ramp: neutral (not me) → the site green (completely me).
   Only the final, fully-saturated stop is the brand color; the rest are
   transitional blend tones, left as-is. */
const LP_RAMP = ['#A7A2BC','#8CA9AE','#6FB08C','#4AB87D','var(--cta)'];

/* ============================================================================
   STAGES — purely cosmetic. Each screen carries a `stage` key (tagged on the
   card list, see the ORCHESTRATOR) that drives two things and nothing else:
     · `icon`  — the small companion illustration sitting next to the fill-line.
                 Reused straight from assets/emoji (same 3D set as the homepage
                 hero stats), so no new art. Faceless ones only: the smiley sun
                 and the meditating figure read as childish next to a clinical
                 self-assessment.
     · `wash`  — a very low-alpha radial bloom layered over --hero-bg-grad.
   The stage NEVER decides what is asked, in what order, or how anything scores.

   Hues are the existing brand set, no new color invented:
     violet  #6B5CCB  rgb(107,92,203)   — --violet
     teal    #2C7E91  rgb(44,126,145)   — --fam-ancre
     amber   #F0B429  rgb(240,180,41)   — hero stars
     green   #59C021  rgb(89,192,33)    — --cta
   Phase A → Phase B is a WEIGHT SWAP between violet and teal, not a new
   palette: the eye registers a shift, never a cut. Everything cross-fades over
   .9s (see .lp-test-wash-layer), so no screen ever snaps to a new color. */
const LP_TEST_STAGES = {
  intake: {
    icon: 'flower.png',
    wash: 'radial-gradient(78% 55% at 18% 6%, rgba(107,92,203,.07) 0%, rgba(107,92,203,0) 62%),'
        + 'radial-gradient(70% 52% at 88% 96%, rgba(240,180,41,.07) 0%, rgba(240,180,41,0) 60%)',
  },
  /* Phase A — les deux axes. Violet dominant. */
  axes: {
    icon: 'coeur_rose.png',
    wash: 'radial-gradient(80% 58% at 12% 4%, rgba(107,92,203,.10) 0%, rgba(107,92,203,0) 64%),'
        + 'radial-gradient(66% 50% at 92% 92%, rgba(44,126,145,.06) 0%, rgba(44,126,145,0) 60%)',
  },
  /* Phase B — le départage par mécanisme. Les poids violet/teal s'inversent. */
  mechanism: {
    icon: 'coeur_puzzle.png',
    wash: 'radial-gradient(80% 58% at 10% 6%, rgba(44,126,145,.11) 0%, rgba(44,126,145,0) 64%),'
        + 'radial-gradient(70% 52% at 94% 90%, rgba(107,92,203,.06) 0%, rgba(107,92,203,0) 60%)',
  },
  /* Halte 1 — la révélation. Le bloom passe au centre-haut : on arrive. */
  reveal: {
    icon: 'coeur_puzzle.png',
    wash: 'radial-gradient(90% 64% at 50% 0%, rgba(44,126,145,.13) 0%, rgba(44,126,145,0) 66%),'
        + 'radial-gradient(70% 52% at 88% 96%, rgba(240,180,41,.08) 0%, rgba(240,180,41,0) 60%)',
  },
  /* Étage 2 — l'Ancre, dans sa propre teinte (--fam-ancre). */
  anchor: {
    icon: 'anchor_2693.png',
    wash: 'radial-gradient(84% 60% at 14% 4%, rgba(44,126,145,.14) 0%, rgba(44,126,145,0) 64%),'
        + 'radial-gradient(68% 50% at 92% 94%, rgba(44,126,145,.07) 0%, rgba(44,126,145,0) 58%)',
  },
  /* Étage 2 bis — sabotage, puis l'écran de fin. Ambre : on referme. */
  sabotage: {
    icon: 'coeur_repare.png',
    wash: 'radial-gradient(80% 58% at 16% 6%, rgba(240,180,41,.09) 0%, rgba(240,180,41,0) 62%),'
        + 'radial-gradient(70% 52% at 90% 92%, rgba(89,192,33,.06) 0%, rgba(89,192,33,0) 58%)',
  },
};

/* ---- One scale dot (used by the statement scale) ------------------------ */
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
   SCREEN — single choice  (Bloc 0 + Ancre)
   ========================================================================== */
function SingleScreen({ q, value, onPick, compact }){
  const tx = useTx();
  return (
    <div>
      <h2 className="lp-h2" style={{ lineHeight:1.28, fontWeight:700, marginBottom: compact ? 'clamp(16px,2.4vw,24px)' : 'clamp(26px,3.4vw,40px)',
        fontSize: compact ? 'clamp(1.24rem, .98rem + .9vw, 1.6rem)' : 'clamp(1.4rem, 1.02rem + 1.15vw, 2rem)', textWrap:'balance' }}>{tx(q.situation)}</h2>
      <div style={{ display:'flex', flexDirection:'column', gap:'12px', maxWidth:660 }}>
        {q.options.map((opt,i)=>{
          const active = value===i;
          /* opt.emoji est optionnel : absent → le bouton rend exactement comme avant. */
          return <ChoiceButton key={i} active={active} onClick={()=>onPick(i)} label={tx(opt)} emoji={opt.emoji}/>;
        })}
      </div>
    </div>
  );
}

function ChoiceButton({ label, active, onClick, emoji }){
  const [h,setH] = useState(false);
  return (
    <button onClick={onClick} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
      style={{ display:'flex', alignItems:'center', gap: emoji ? '12px' : '15px', textAlign:'left', cursor:'pointer', width:'100%',
        padding:'17px 22px', borderRadius:'var(--r-lg)', fontFamily:'var(--font-body)', fontSize:'1.06rem', fontWeight:600,
        lineHeight:1.4, color: active?'#fff':'var(--ink)', background: active?'var(--cta)':'var(--surface)',
        border:`1.5px solid ${active?'var(--cta)':(h?'var(--violet)':'var(--hairline)')}`,
        boxShadow: h&&!active?'var(--sh-sm)':'var(--sh-xs)', transition:'all .16s ease', transform:h&&!active?'translateX(3px)':'none' }}>
      <span style={{ width:23, height:23, borderRadius:'50%', flexShrink:0, display:'grid', placeItems:'center',
        border:`2px solid ${active?'#fff':'var(--hairline-2)'}`, background:active?'rgba(255,255,255,.16)':'transparent' }}>
        {active && <Icon name="check" size={13}/>}
      </span>
      {/* Décoratif : aria-hidden pour que le lecteur d'écran lise le libellé seul. */}
      {emoji && (
        <span aria-hidden="true" style={{ fontSize:'1.3rem', lineHeight:1, flexShrink:0,
          transform: h ? 'scale(1.14)' : 'none', transition:'transform .16s ease' }}>{emoji}</span>
      )}
      <span>{label}</span>
    </button>
  );
}

/* ============================================================================
   SCREEN — statement on the 5-level scale  (Étage 1 A + B, Sabotage)
   ========================================================================== */
function StatementScreen({ q, value, onPick }){
  const tx = useTx();
  const scale = window.LP_TEST.scale;
  const narrow = useWidth() < 620;
  return (
    <div>
      <div style={{ display:'inline-flex', alignItems:'center', gap:'9px', marginBottom:'18px' }}>
        <span style={{ fontSize:'.74rem', fontWeight:800, letterSpacing:'.12em', textTransform:'uppercase', color:'var(--ink-3)', whiteSpace:'nowrap' }}>
          {tx({ fr:'À quel point est-ce toi ?', en:'How much is this you?' })}
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
                color: value===s.v?'#fff':'var(--ink)', background: value===s.v?'var(--cta)':'var(--surface)',
                border:`1.5px solid ${value===s.v?'var(--cta)':'var(--hairline)'}`, boxShadow:'var(--sh-xs)', transition:'all .16s ease' }}>
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
   PROGRESS — une ligne fine en haut, qui se REMPLIT (jamais un chiffre)
   ----------------------------------------------------------------------------
   L'illustration compagne vit ICI, collée à la ligne, et pas flottante dans un
   coin : c'est exactement « accompagner la progression » sans jamais disputer
   la place à la question, et ça tient tel quel sur mobile. Elle change à chaque
   étape, ce qui donne un sentiment d'avancée SANS afficher de nom de chapitre
   ni de chiffre (règle du flux v2 : machine à étapes, pas de chapitres).
   ========================================================================== */
function TopProgress({ fill, stage }){
  const cfg = LP_TEST_STAGES[stage] || LP_TEST_STAGES.intake;
  const [iconOk,setIconOk] = useState(true);
  const pct = Math.round(Math.max(0,Math.min(1,fill))*100);
  return (
    <div className="lp-tp">
      {iconOk && (
        /* key = remonte l'<img> à chaque changement d'étape, ce qui rejoue
           l'animation d'entrée. onError : si l'asset manque, la ligne reste. */
        <img key={cfg.icon} className="lp-tp-icon" src={`assets/emoji/${cfg.icon}`}
          alt="" aria-hidden="true" onError={()=>setIconOk(false)}/>
      )}
      <div className="lp-tp-track" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={pct}>
        <div className="lp-tp-fill" style={{ width:`${pct}%` }}/>
      </div>
    </div>
  );
}

/* ============================================================================
   WASH — le dégradé doux derrière la zone de question.
   ----------------------------------------------------------------------------
   Toutes les couches sont montées en permanence et on ne bascule QUE l'opacité :
   un cross-fade d'opacité s'interpole proprement partout, alors qu'une
   transition sur `background` avec des gradients ne s'anime pas de façon fiable
   selon les navigateurs. Six divs vides, pointer-events:none, aucun coût réel.
   ========================================================================== */
function TestWash({ stage }){
  const active = LP_TEST_STAGES[stage] ? stage : 'intake';
  return (
    <div className="lp-test-wash" aria-hidden="true">
      {Object.keys(LP_TEST_STAGES).map(k=>(
        <div key={k} className="lp-test-wash-layer"
          style={{ background: LP_TEST_STAGES[k].wash, opacity: k===active ? 1 : 0 }}/>
      ))}
    </div>
  );
}

/* ============================================================================
   HALTE — prose verbatim (cadrage, révélation, intro Ancre)
   ========================================================================== */
function HalteProse({ data, code }){
  const [imgOk,setImgOk] = useState(true);
  /* Mobile: la halte est une pause, pas une lecture. On resserre l'interligne
     et on réduit l'illustration pour que le bouton Continue (Halte 1) et la
     première question d'Ancre (Halte 2) tiennent au-dessus de la ligne. */
  const narrow = useWidth() < 620;
  const pStyle = { margin: narrow ? '0 0 .5em' : '0 0 1.05em', fontSize: narrow ? '.98rem' : '1.08rem',
    lineHeight: narrow ? 1.4 : 1.7, color:'var(--ink)', textWrap:'pretty' };
  return (
    <div style={{ maxWidth:720, margin:'0 auto' }}>
      <h1 style={{ fontFamily:'var(--font-display)', fontWeight:800, letterSpacing:'-.02em', color:'var(--ink)',
        fontSize: narrow ? 'clamp(1.4rem,1.15rem+1.3vw,1.72rem)' : 'clamp(1.6rem, 1.15rem + 1.6vw, 2.4rem)',
        lineHeight:1.1, margin: narrow ? '0 0 9px' : '0 0 clamp(18px,2.6vw,26px)', textWrap:'balance' }}>
        <InlineRich text={data.head}/>
      </h1>
      {(data.body||[]).map((p,i)=>(
        <p key={i} style={pStyle}><InlineRich text={p}/></p>
      ))}
      {code && imgOk && (
        <div style={{ textAlign:'center', margin: narrow ? '8px 0' : 'clamp(22px,3.4vw,34px) 0' }}>
          <img src={`assets/archetypes/${code}.webp`} alt="" onError={()=>setImgOk(false)}
            style={{ width:'auto', height: narrow ? '60px' : 'clamp(200px,34vw,300px)', maxWidth:'100%', display:'inline-block',
              filter: narrow ? 'drop-shadow(0 8px 12px rgba(15,20,45,.2))' : 'drop-shadow(0 22px 26px rgba(15,20,45,.26))' }}/>
        </div>
      )}
      {(data.after||[]).map((p,i)=>(
        <p key={i} style={pStyle}><InlineRich text={p}/></p>
      ))}
    </div>
  );
}

/* ============================================================================
   ORCHESTRATOR
   ========================================================================== */
function LoveTest({ go }){
  const T = window.LP_TEST;
  const tx = useTx();
  const narrow = useWidth() < 620;                 // fold-sensitive spacing on mobile

  const [phase,setPhase] = useState('intro');      // 'intro' | 'test' | 'result'
  const [index,setIndex] = useState(0);
  const [answers,setAnswers] = useState({});

  /* Mécanisme figé à la fin de l'Étage 1 (avant la révélation). Contient
     { secure, axes, dominant, secondaire } et ne change plus ensuite : la
     révélation, l'intro d'Ancre et la variante jouée se lisent dessus. */
  const [frozen,setFrozen] = useState(null);

  /* Ordre d'affichage mélangé, stable pour la session (Phase A avant Phase B). */
  const shuffleRef = React.useRef(null);
  if(!shuffleRef.current){
    shuffleRef.current = { axes: lpShuffle(T.axes), phaseB: lpShuffle(T.c1) };
  }

  /* Partie fixe (pré-figement) : Bloc 0 · cadrage · Étage 1 A · Étage 1 B.
     `stage` est une étiquette PUREMENT COSMÉTIQUE (icône + wash, cf.
     LP_TEST_STAGES). Elle n'entre dans aucun calcul : ni l'ordre, ni le nombre,
     ni le contenu des cartes ne changent, et goForward/answerQuestion ne la
     lisent jamais. */
  const pre = React.useMemo(()=> []
    .concat(T.c0.map(q=>({ type:'q', q, stage:'intake' })))
    .concat([{ type:'framing', stage:'intake' }])
    .concat(shuffleRef.current.axes.map(q=>({ type:'q', q, stage:'axes' })))
    .concat(shuffleRef.current.phaseB.map(q=>({ type:'q', q, phaseB:true, stage:'mechanism' })))
  , [T]);

  /* Liste complète : la partie post-figement dépend du mécanisme/route figés. */
  const cards = React.useMemo(()=>{
    if(!frozen) return pre;
    const post = [{ type:'reveal', stage:'reveal' }];
    if(!frozen.secure){
      const aq = (T.ancre && T.ancre[frozen.dominant]) || T.ancre['Miroir'];
      post.push({ type:'anchorIntro', q: aq[0], stage:'anchor' });
      for(let i=1;i<aq.length;i++) post.push({ type:'q', q: aq[i], stage:'anchor' });
    }
    T.c3.forEach(q=> post.push({ type:'q', q, stage:'sabotage' }));
    post.push({ type:'preResult', stage:'sabotage' });
    return pre.concat(post);
  }, [pre, frozen, T]);

  const card = cards[index];
  const stage = (card && card.stage) || 'intake';

  /* Barre : nb de questions répondues / total du parcours. Avant le figement,
     on projette le parcours mécanisme (33) pour poser la révélation à ~65 % ;
     après, on prend le total réel (secure : moins de questions, recalage muet). */
  const qCards = cards.filter(c=> c.type==='q' || c.type==='anchorIntro');
  const answered = qCards.filter(c=> answers[c.q.id] != null).length;
  const total = frozen ? qCards.length : 33;
  const fill = total ? answered/total : 0;

  /* Dev hook (read-only). */
  useEffect(()=>{ window.__lpState = { answers, frozen }; }, [answers, frozen]);

  /* Analytics : quiz_started (le questionnaire commence) / quiz_completed
     (dernière réponse validée, passage au résultat). Inchangés. */
  const phasePrevRef = React.useRef(phase);
  React.useEffect(()=>{
    if(phase !== phasePrevRef.current){
      if(phase==='test'){ window.LP_PH && window.LP_PH('quiz_started', { test_type:'love_test' }); }
      else if(phase==='result'){ window.LP_PH && window.LP_PH('quiz_completed', { questions_answered: Object.keys(answers).length }); }
      phasePrevRef.current = phase;
    }
  }, [phase]);

  /* Analytics : reveal_viewed à l'affichage de la révélation partielle (1 fois). */
  const revealFiredRef = React.useRef(false);
  React.useEffect(()=>{
    if(card && card.type==='reveal' && !revealFiredRef.current){
      revealFiredRef.current = true;
      window.LP_PH && window.LP_PH('reveal_viewed', frozen && frozen.secure ? { secure:true } : { pattern: frozen ? frozen.dominant : null });
    }
  }, [index, card, frozen]);

  /* ---- navigation --------------------------------------------------------- *
     Transitions pilotées 100% par l'état React : on change d'étape tout de
     suite, et chaque écran (keyé par index) se monte/démonte proprement avec
     une animation d'ENTRÉE CSS. Pas de setTimeout ni d'animation de sortie qui
     laisserait React démonter un nœud texte déjà déplacé par un script tiers
     (traduction navigateur, analytics) — c'est ce qui provoquait le crash
     removeChild pendant le passage au résultat. */
  function goForward(currentAnswers){
    const nextI = index + 1;
    if(!frozen && nextI === pre.length){
      /* Fin de l'Étage 1 : on fige le mécanisme (ou la route sécure). */
      setFrozen(window.LP_ENGINE.freeze(currentAnswers || answers));
      setIndex(nextI);
    } else if(nextI < cards.length){
      setIndex(nextI);
    } else {
      setPhase('result');
    }
    window.scrollTo(0,0);
  }
  function goBack(){
    if(index===0){ setPhase('intro'); return; }
    setIndex(index-1);
    window.scrollTo(0,0);
  }
  function answerQuestion(c, value){
    const stored = c.phaseB ? { 0: value } : value;   /* Phase B en forme matrice */
    const next = { ...answers, [c.q.id]: stored };
    setAnswers(next);
    goForward(next);
  }

  /* ---- intro splash ---- */
  if(phase==='intro'){
    return <TestShell go={go} stage="intake"><TestIntro onStart={()=>{ setPhase('test'); setIndex(0); window.scrollTo(0,0); }}/></TestShell>;
  }

  /* ---- result ---- */
  if(phase==='result'){
    return <TestShell go={go} stage="reveal">
      <TestResult answers={answers} frozen={frozen}
        onRestart={()=>{ setAnswers({}); setFrozen(null); setIndex(0); revealFiredRef.current=false;
          shuffleRef.current = { axes: lpShuffle(T.axes), phaseB: lpShuffle(T.c1) }; setPhase('intro'); window.scrollTo(0,0); }}
        go={go}/>
    </TestShell>;
  }

  /* ---- a screen (question or halte) ---- */
  const isQuestion = card && (card.type==='q' || card.type==='anchorIntro');

  let body = null;
  if(card.type==='q'){
    const q = card.q;
    if(card.phaseB){
      const v = answers[q.id] ? answers[q.id][0] : undefined;
      body = <StatementScreen q={q} value={v} onPick={(val)=>answerQuestion(card, val)}/>;
    } else if(q.kind==='single'){
      body = <SingleScreen q={q} value={answers[q.id]} onPick={(i)=>answerQuestion(card, i)}/>;
    } else {
      body = <StatementScreen q={q} value={answers[q.id]} onPick={(val)=>answerQuestion(card, val)}/>;
    }
  } else if(card.type==='framing'){
    body = <div>
      <HalteProse data={T.haltes.framing}/>
      <div style={{ textAlign:'center', marginTop: narrow ? '10px' : 'clamp(28px,4vw,42px)' }}>
        <Button size="lg" icon="arrow-right" onClick={()=>goForward()}>{tx({ fr:'Continuer', en:'Continue' })}</Button>
      </div>
    </div>;
  } else if(card.type==='reveal'){
    const secure = frozen && frozen.secure;
    const data = secure ? T.haltes.secureReveal : (T.haltes.reveals[frozen.dominant] || T.haltes.reveals['Miroir']);
    const code = secure ? null : (LP_HALTE_CODE[frozen.dominant] || 'mir');
    body = <div>
      <HalteProse data={data} code={code}/>
      <div style={{ textAlign:'center', marginTop: narrow ? '10px' : 'clamp(28px,4vw,42px)' }}>
        <Button size="lg" icon="arrow-right" onClick={()=>goForward()}>{tx({ fr:'Continuer', en:'Continue' })}</Button>
      </div>
    </div>;
  } else if(card.type==='anchorIntro'){
    const data = T.haltes.anchorIntros[frozen.dominant] || T.haltes.anchorIntros['Miroir'];
    body = <div style={{ maxWidth:720, margin:'0 auto' }}>
      <HalteProse data={data}/>
      <div style={{ marginTop:'clamp(22px,3vw,32px)', paddingTop:'clamp(18px,2.6vw,26px)', borderTop:'1px solid var(--hairline)' }}>
        <SingleScreen q={card.q} value={answers[card.q.id]} onPick={(i)=>answerQuestion(card, i)} compact/>
      </div>
    </div>;
  } else if(card.type==='preResult'){
    body = <div style={{ maxWidth:620, margin:'clamp(20px,6vw,60px) auto 0', textAlign:'center' }}>
      <div style={{ display:'grid', placeItems:'center', width:60, height:60, borderRadius:'50%', margin:'0 auto 18px',
        background:'var(--fam-ancre-soft)', color:'var(--fam-ancre)' }}><Icon name="anchor" size={26}/></div>
      <h1 className="lp-h1">{tx({ fr:"C'est tout ce qu'on avait à te demander.", en:"That's everything we needed to ask." })}</h1>
      <p className="lp-lead" style={{ marginTop:14 }}>{tx({ fr:"Ton résultat est prêt.", en:"Your result is ready." })}</p>
      <div style={{ marginTop:28 }}>
        <Button size="lg" icon="arrow-right" onClick={()=>goForward()}>{tx({ fr:'Voir mon résultat', en:'See my result' })}</Button>
      </div>
    </div>;
  }

  return (
    <TestShell go={go} stage={stage}>
      <div style={{ display:'flex', flexDirection:'column', minHeight:'calc(100vh - 132px)' }}>
        <TopProgress fill={fill} stage={stage}/>

        {/* Chaque écran est keyé : React démonte l'ancien / monte le nouveau en
            entier (niveau élément), jamais une réconciliation de nœud texte en
            place. L'animation est purement une ENTRÉE, sans timer de sortie. */}
        <div style={{ flex:1, display:'flex', flexDirection:'column', justifyContent:'center',
          padding: narrow ? '8px 0' : 'clamp(20px,3.4vw,40px) 0' }}>
          <div key={index} className="lp-step">{body}</div>
        </div>

        {/* footer: Back (+ Private on question screens). Le libellé Privé reste
            TOUJOURS monté (on bascule la visibilité) pour ne jamais retirer son
            nœud texte pendant une transition. */}
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', gap:'16px',
          padding:'clamp(14px,2.4vw,22px) 0', borderTop:'1px solid var(--hairline)' }}>
          <button onClick={goBack} style={{ display:'inline-flex', alignItems:'center', gap:'6px', background:'none',
            border:'none', cursor:'pointer', color:'var(--ink-2)', fontFamily:'var(--font-body)', fontWeight:600, fontSize:'.92rem', padding:0 }}>
            <Icon name="arrow-left" size={16}/> {tx({ fr:'Retour', en:'Back' })}
          </button>
          <span style={{ display:'inline-flex', alignItems:'center', gap:'6px', color:'var(--ink-3)', fontSize:'.82rem', fontWeight:600,
            visibility: isQuestion ? 'visible' : 'hidden' }}>
            <Icon name="lock" size={14}/> {tx({ fr:'Privé', en:'Private' })}
          </span>
        </div>
      </div>
    </TestShell>
  );
}

/* pattern key -> code archétype (image de la révélation, art existant du profil) */
const LP_HALTE_CODE = {
  'Miroir':'mir', 'Fugitif':'fug', 'Bastion':'bas', 'Guetteur':'gue',
  'Sauveur':'sau', 'Caméléon':'cam', 'Alchimiste':'alc', 'Incendiaire':'inc',
};

/* ---- shared shell: slim header + centered column -------------------------
   Background is the same blue-gray -> white wash as the homepage hero
   (--hero-bg-grad), not the old cream/green — see block F. The per-stage wash
   is layered ON TOP of that base, never replacing it.
   Every /test style rule lives in this one <style> (it used to sit inside the
   question branch, which left the intro and result screens without it). */
function TestShell({ children, go, stage }){
  return (
    <div style={{ minHeight:'100vh', background:'var(--hero-bg-grad)', display:'flex', flexDirection:'column', position:'relative' }}>
      <style>{`
        /* ---- soft per-stage background wash ---- */
        .lp-test-wash { position:fixed; inset:0; z-index:0; pointer-events:none; }
        .lp-test-wash-layer { position:absolute; inset:0; transition:opacity .9s ease; }

        /* ---- progress row: companion illustration + fill-line ---- */
        .lp-tp { display:flex; align-items:center; gap:12px; margin:0 0 clamp(24px,3.6vw,40px); }
        .lp-tp-icon { width:30px; height:30px; object-fit:contain; display:block; flex-shrink:0;
          filter: drop-shadow(0 3px 6px rgba(20,20,43,.16)); }
        .lp-tp-track { flex:1; min-width:0; height:6px; border-radius:999px;
          background:rgba(20,20,43,.08); overflow:hidden; }
        /* Deux verts très proches : même écrasé à 5 % de remplissage le dégradé
           reste lisible, là où un teal -> vert franc virerait au dégradé comprimé
           dès les premiers écrans. Le bord légèrement teinté raccroche la ligne
           aux washes teal sans quitter le vert de marque. */
        .lp-tp-fill { height:100%; border-radius:999px;
          background:linear-gradient(90deg, color-mix(in srgb, var(--cta) 72%, #2C7E91) 0%, var(--cta) 100%);
          box-shadow:0 0 10px -2px color-mix(in srgb, var(--cta) 55%, transparent);
          transition:width .45s cubic-bezier(.22,.61,.36,1); }

        @media (prefers-reduced-motion: no-preference){
          .lp-step { animation: lpStepIn .28s cubic-bezier(.22,.61,.36,1) both; will-change:transform,opacity; }
          .lp-tp-icon { animation: lpIconIn .5s cubic-bezier(.22,.61,.36,1) both; }
        }
        @keyframes lpStepIn { from{ opacity:0; transform:translateY(10px); } to{ opacity:1; transform:none; } }
        @keyframes lpIconIn { from{ opacity:0; transform:translateY(4px) scale(.82); } to{ opacity:1; transform:none; } }
        @media (prefers-reduced-motion: reduce){
          .lp-test-wash-layer, .lp-tp-fill { transition:none; }
        }
        @media (max-width: 620px){
          .lp-tp-icon { width:26px; height:26px; }
          .lp-tp { gap:10px; }
        }
      `}</style>
      <TestWash stage={stage}/>
      <header style={{ position:'relative', zIndex:1, display:'flex', alignItems:'center', justifyContent:'space-between',
        padding:'18px clamp(20px,5vw,48px)', borderBottom:'1px solid var(--hairline)' }}>
        <Logo size={20} onClick={()=>go('home')}/>
        <LanguageWidget/>
      </header>
      <div style={{ position:'relative', zIndex:1, flex:1, width:'100%', maxWidth:'var(--maxw)', margin:'0 auto', padding:'clamp(22px,4vw,40px) clamp(20px,5vw,48px)' }}>
        {children}
      </div>
    </div>
  );
}

/* ---- intro splash ------------------------------------------------------- */
function TestIntro({ onStart }){
  const tx = useTx();
  return (
    <div style={{ maxWidth:620, margin:'clamp(20px,6vw,80px) auto 0', textAlign:'center' }}>
      <Avatar code="anc" size={84}/>
      <h1 className="lp-h1" style={{ marginTop:18, fontFamily:'var(--font-display)', fontWeight:800, letterSpacing:'-0.02em' }}>{tx({ fr:'On commence en douceur.', en:'Free Love pattern test' })}</h1>
      <p className="lp-lead" style={{ marginTop:14, maxWidth:520, marginInline:'auto' }}>
        {tx({ fr:"Une question à la fois. Réponds avec ton instinct, il n'y a pas de bonne réponse. On parle de ta vie à toi, telle qu'elle est aujourd'hui.",
              en:"One question at a time. Answer with your gut, there is no right answer. We're talking about your life, as it is today." })}
      </p>
      <div style={{ marginTop:'clamp(28px,4vw,40px)' }}>
        <Button size="lg" icon="arrow-right" onClick={onStart}>{tx({ fr:'Commencer', en:'Begin' })}</Button>
        <div style={{ display:'inline-flex', alignItems:'center', gap:'8px', marginTop:18, color:'var(--ink-3)', fontSize:'.9rem' }}>
          <Icon name="lock" size={15}/> {tx({ fr:'Tes réponses restent privées, sans inscription.', en:'Your answers stay private, no sign-up.' })}
        </div>
      </div>
    </div>
  );
}

/* TestResult (écran de résultat gratuit) et SecureResult vivent dans
   test_result.jsx. SafetyScreen reste ici et est exporté pour lui. */

/* ---- safety screen (Q-C3 = alerte) -------------------------------------- */
/* Plain style, no archetype colors or maritime metaphor, English only. */
function SafetyScreen({ onContinue, go }){
  return (
    <div style={{ maxWidth:660, margin:'clamp(10px,5vw,56px) auto 0' }}>
      <h1 className="lp-h1" style={{ textAlign:'center', marginTop:20, color:'#1a1a1a' }}>Before you continue</h1>
      <p className="lp-lead" style={{ marginTop:14, textAlign:'center', color:'#333' }}>
        Something in what you just answered suggests you might be carrying more than this test is built to hold. That matters more than any result on this page.
      </p>

      <div style={{ marginTop:26, background:'#fff', border:'1px solid #ddd', borderRadius:8, padding:'24px 26px' }}>
        <ul style={{ margin:0, padding:'0 0 0 20px', color:'#1a1a1a', lineHeight:1.7, fontSize:'1rem' }}>
          <li>988 Suicide &amp; Crisis Lifeline — call or text 988, free, confidential, anytime.</li>
          <li>Crisis Text Line — text HOME to 741741.</li>
          <li>If you're in immediate danger, call 911.</li>
          <li>Outside the United States, findahelpline.com lists free crisis lines by country.</li>
        </ul>
      </div>

      <p style={{ marginTop:20, textAlign:'center', color:'#333' }}>You can close this now. If you'd rather keep going, that's okay too.</p>

      <div style={{ textAlign:'center', marginTop:28, display:'flex', flexDirection:'column', gap:'14px', alignItems:'center' }}>
        <Button variant="dark" onClick={onContinue}>I'm okay, continue</Button>
        <button onClick={()=>go('home')} style={{ background:'none', border:'none', cursor:'pointer', color:'#555',
          fontFamily:'inherit', fontWeight:600, fontSize:'.92rem' }}>Exit</button>
      </div>
    </div>
  );
}

Object.assign(window, { LoveTest, SafetyScreen, useTx });
