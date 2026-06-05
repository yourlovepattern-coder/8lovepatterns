/* 8LovePatterns, pattern body renderer (English, structured) */

function LpPara({ children, lead }) {
  return <p style={{ margin:'0 0 1.05em', fontSize: lead?'1.4rem':'20px', lineHeight: lead?1.55:1.72,
    color: lead?'var(--ink)':'var(--ink)', textWrap:'pretty' }}>{children}</p>;
}

function PatternSection({ icon, label, accent, children }) {
  return (
    <div style={{ background:'var(--surface)', border:'1px solid var(--hairline)', borderRadius:'var(--r-lg)', padding:'22px 24px', boxShadow:'var(--sh-xs)' }}>
      <div style={{ display:'flex', alignItems:'center', gap:'10px', marginBottom:'9px' }}>
        <span style={{ display:'grid', placeItems:'center', width:34, height:34, borderRadius:'10px', background:accent+'1a', color:accent }}><Icon name={icon} size={18}/></span>
        <span style={{ fontSize:'.72rem', fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:'var(--ink-3)' }}>{label}</span>
      </div>
      <div style={{ color:'var(--ink)', lineHeight:1.62, fontSize:'1.02rem' }}>{children}</div>
    </div>
  );
}

/* Profile body = a small rich-text editor: pick Title / Subtitle / Text per line,
   apply bold / italic / color. Content is per-language (switches with the widget);
   edits persist per pattern AND per language in localStorage. */
function ProfileBody({ code }) {
  const a = archByCode(code);
  const lang = (window.useLang && window.useLang().lang) || 'en';
  const ref = React.useRef(null);
  const fr = lang === 'fr';

  // per-language default content; fall back to English, then any available language
  const bank = window.LP_PROFILE_HTML || {};
  const defaultHtml = (bank[lang] && bank[lang][code]) || (bank.en && bank.en[code]) || '';
  const key = 'lp_profile_v2_' + code + '_' + lang;   // edits are language-specific
  function load(){ try { return localStorage.getItem(key); } catch(e){ return null; } }
  function persist(){ if(ref.current){ try { localStorage.setItem(key, ref.current.innerHTML); } catch(e){} } }

  // reload when the pattern OR the language changes (this is what makes the
  // widget translate the profile text live)
  React.useEffect(()=>{ if(ref.current){ ref.current.innerHTML = load() || defaultHtml; } }, [code, lang]);

  function run(cmd, val){ document.execCommand(cmd, false, val); if(ref.current) ref.current.focus(); persist(); }
  function block(tag){ run('formatBlock', tag); }
  function reset(){ try { localStorage.removeItem(key); } catch(e){} if(ref.current) ref.current.innerHTML = defaultHtml; }

  if(!defaultHtml && (!a || !a.hook)) return <LpPara>Content unavailable.</LpPara>;

  const swatches = [a.accent, '#211C46', '#EE6352', '#2C7E91'];
  const btn = { display:'inline-flex', alignItems:'center', gap:'5px', background:'var(--surface)', border:'1px solid var(--hairline)',
    borderRadius:'var(--r-sm)', padding:'7px 11px', cursor:'pointer', font:'inherit', fontFamily:'var(--font-body)',
    fontWeight:600, fontSize:'.86rem', color:'var(--ink-2)' };

  return (
    <div>
      {/* Formatting toolbar */}
      <div className="lp-fmt-bar" style={{ position:'sticky', top:'80px', zIndex:20, display:'flex', flexWrap:'wrap', alignItems:'center', gap:'7px',
        background:'rgba(251,247,241,.92)', backdropFilter:'blur(8px)', WebkitBackdropFilter:'blur(8px)',
        border:'1px solid var(--hairline)', borderRadius:'var(--r-pill)', padding:'8px 10px', marginBottom:'22px', boxShadow:'var(--sh-xs)' }}>
        <button onMouseDown={e=>e.preventDefault()} onClick={()=>block('h2')} style={btn} title="Title">{fr?'Titre':'Title'}</button>
        <button onMouseDown={e=>e.preventDefault()} onClick={()=>block('h3')} style={btn} title="Subtitle">{fr?'Sous-titre':'Subtitle'}</button>
        <button onMouseDown={e=>e.preventDefault()} onClick={()=>block('p')} style={btn} title="Text">{fr?'Texte':'Text'}</button>
        <span style={{ width:1, height:22, background:'var(--hairline)', margin:'0 3px' }}></span>
        <button onMouseDown={e=>e.preventDefault()} onClick={()=>run('bold')} style={{ ...btn, fontWeight:800 }} title="Bold">B</button>
        <button onMouseDown={e=>e.preventDefault()} onClick={()=>run('italic')} style={{ ...btn, fontStyle:'italic' }} title="Italic">I</button>
        <span style={{ width:1, height:22, background:'var(--hairline)', margin:'0 3px' }}></span>
        {swatches.map(col=>(
          <button key={col} onMouseDown={e=>e.preventDefault()} onClick={()=>run('foreColor', col)} title="Color"
            style={{ width:24, height:24, borderRadius:'50%', border:'2px solid var(--surface)', boxShadow:'0 0 0 1px var(--hairline)', background:col, cursor:'pointer', padding:0 }}></button>
        ))}
        <span style={{ flex:1 }}></span>
        <button onMouseDown={e=>e.preventDefault()} onClick={reset} style={{ ...btn, color:'var(--ink-3)' }} title="Reset">{fr?'Réinitialiser':'Reset'}</button>
      </div>

      {/* Editable content */}
      <div ref={ref} className="lp-prose-rich lp-editable" style={{ '--prof': a.accent }}
        contentEditable suppressContentEditableWarning
        onInput={persist} onBlur={persist} spellCheck={true}></div>
    </div>
  );
}

Object.assign(window, { ProfileBody, LpPara });
