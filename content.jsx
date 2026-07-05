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

  // reload when the pattern OR the language changes (this is what makes the
  // widget translate the profile text live)
  React.useEffect(()=>{ if(ref.current){ ref.current.innerHTML = load() || defaultHtml; } }, [code, lang]);

  if(!defaultHtml && (!a || !a.hook)) return <LpPara>Content unavailable.</LpPara>;

  return (
    <div>
      {/* Content */}
      <div ref={ref} className="lp-prose-rich" style={{ '--prof': a.accent }}></div>
    </div>
  );
}

Object.assign(window, { ProfileBody, LpPara });
