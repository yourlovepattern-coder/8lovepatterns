/* 8LovePatterns — primitives UI partagées (Babel global) */
const { useState, useRef, useEffect } = React;

/* ---- Icônes (sous-ensemble Lucide, inline pour robustesse React) ---- */
const ICONS = {
  'arrow-right':'<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  'arrow-left':'<path d="M19 12H5"/><path d="m12 19-7-7 7-7"/>',
  'chevron-right':'<path d="m9 18 6-6-6-6"/>',
  'chevron-down':'<path d="m6 9 6 6 6-6"/>',
  'check':'<path d="M20 6 9 17l-5-5"/>',
  'lock':'<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  'sparkle':'<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .962 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.962 0z"/>',
  'heart':'<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
  'shield':'<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1Z"/>',
  'eye':'<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/>',
  'compass':'<circle cx="12" cy="12" r="10"/><path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36z"/>',
  'anchor':'<path d="M12 22V8"/><circle cx="12" cy="5" r="3"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/>',
  'menu':'<path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/>',
  'globe':'<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',
  'x':'<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  'star':'<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"/>',
  'flame':'<path d="M12 2c1 3 3 4.5 3 8a3 3 0 0 1-6 0c0-1 .5-2 1-2.5C9 9 8 10.5 8 13a4 4 0 0 0 8 0c0-4-3-6-4-11"/>',
  'users':'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  'feather':'<path d="M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z"/><path d="M16 8 2 22"/><path d="M17.5 15H9"/>',
  'route':'<circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/><circle cx="18" cy="5" r="3"/>',
  'mail':'<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
};
function Icon({ name, size=20, stroke=1.75, className='', style={} }) {
  return React.createElement('svg', {
    className, width:size, height:size, viewBox:'0 0 24 24', fill:'none',
    stroke:'currentColor', strokeWidth:stroke, strokeLinecap:'round', strokeLinejoin:'round',
    style, 'aria-hidden':true, dangerouslySetInnerHTML:{ __html: ICONS[name]||'' }
  });
}

/* ---- Boutons ---- */
function Button({ children, variant='primary', size='md', icon, iconLeft, onClick, href, full, style={}, type, static: isStatic }) {
  const base = {
    fontFamily:'var(--font-body)', fontWeight:700, cursor:'pointer', border:'none',
    display:'inline-flex', alignItems:'center', justifyContent:'center', gap:'.55em',
    borderRadius:'var(--r-pill)',
    transitionProperty:'transform, background-color, box-shadow, color, opacity',
    transitionDuration:'.2s', transitionTimingFunction:'cubic-bezier(.22,.61,.36,1)',
    textDecoration:'none', whiteSpace:'nowrap', width: full?'100%':'auto', ...style,
  };
  const sizes = {
    sm:{ padding:'9px 18px', fontSize:'.9rem' },
    md:{ padding:'14px 26px', fontSize:'1.02rem' },
    lg:{ padding:'18px 34px', fontSize:'1.12rem' },
  };
  const variants = {
    primary:{ background:'var(--cta)', color:'#fff', boxShadow:'var(--sh-cta)' },
    dark:{ background:'var(--encre)', color:'#fff', boxShadow:'var(--sh-md)' },
    secondary:{ background:'transparent', color:'var(--encre)', boxShadow:'inset 0 0 0 1.5px var(--encre)' },
    ghost:{ background:'transparent', color:'var(--violet)', padding:'10px 8px' },
    light:{ background:'#fff', color:'var(--encre)', boxShadow:'var(--sh-sm)' },
  };
  const [hover, setHover] = useState(false);
  const [pressed, setPressed] = useState(false);
  const hoverStyle = hover ? ({
    primary:{ background:'var(--cta-600)', transform:'translateY(-1px)' },
    dark:{ transform:'translateY(-1px)' },
    secondary:{ background:'var(--encre)', color:'#fff' },
    ghost:{ opacity:.7 },
    light:{ transform:'translateY(-1px)', boxShadow:'var(--sh-md)' },
  }[variant]) : {};
  const pressStyle = (pressed && !isStatic) ? { transform:'scale(.96)' } : {};
  const endPress = ()=>setPressed(false);
  const props = {
    onClick, type, style:{ ...base, ...sizes[size], ...variants[variant], ...hoverStyle, ...pressStyle },
    onMouseEnter:()=>setHover(true), onMouseLeave:()=>{ setHover(false); endPress(); },
    onMouseDown:()=>setPressed(true), onMouseUp:endPress,
    onTouchStart:()=>setPressed(true), onTouchEnd:endPress, onTouchCancel:endPress,
  };
  const content = [ iconLeft && React.createElement(Icon,{key:'l',name:iconLeft,size:size==='lg'?20:18}),
    React.createElement('span',{key:'t'},children),
    icon && React.createElement(Icon,{key:'r',name:icon,size:size==='lg'?20:18}) ];
  return href ? React.createElement('a',{...props,href},content) : React.createElement('button',props,content);
}

/* ---- Layout ---- */
const Container = ({ children, narrow, style }) =>
  <div style={{ maxWidth: narrow?'var(--maxw-readable)':'var(--maxw)', margin:'0 auto', padding:'0 var(--gutter)', ...style }}>{children}</div>;

const Eyebrow = ({ children, color }) =>
  <div className="lp-eyebrow" style={{ color: color||'var(--ink-3)' }}>{children}</div>;

/* ---- Marque ---- */
function Logo({ light, size=22, onClick }) {
  return (
    <div onClick={onClick} style={{ display:'flex', alignItems:'center', gap:'9px', cursor:'pointer', userSelect:'none' }}>
      <span style={{ display:'grid', placeItems:'center', width:size+10, height:size+10, borderRadius:'50%',
        background: light?'rgba(255,255,255,.14)':'var(--encre)', color: light?'#fff':'#fff' }}>
        <Icon name="anchor" size={size*0.62} stroke={2}/>
      </span>
      <span style={{ fontFamily:'var(--font-display)', fontWeight:800, fontSize:size*0.92, letterSpacing:'-.02em',
        color: light?'#fff':'var(--encre)' }}>
        8Love<span style={{ color:'var(--corail)' }}>Patterns</span>
      </span>
    </div>
  );
}

/* ---- Avatar archétype ---- */
function archByCode(code){ return code==='anc' ? window.ANCRE : (window.ARCHETYPES.find(a=>a.code===code)||{}); }
function Avatar({ code, size=120, ring=true }) {
  const a = archByCode(code); const accent = a.accent || 'var(--violet)';
  return (
    <div style={{ width:size, height:size, borderRadius:'50%', position:'relative',
      background: a.soft||'var(--paper-2)', boxShadow: ring?'var(--sh-sm)':'none',
      outline: ring?`2px solid ${accent}`:'none', outlineOffset:'3px',
      overflow:'hidden', flexShrink:0 }}>
      <img src={`assets/archetypes/${code}_avatar.webp`} alt="" style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }}/>
    </div>
  );
}

/* ---- Puce famille ---- */
const FamilyDot = ({ family, size=9 }) =>
  <span style={{ width:size, height:size, borderRadius:'50%', background:(window.FAMILIES[family]||{}).color, display:'inline-block', flexShrink:0 }}/>;

/* ---- Chip / tag ---- */
const Chip = ({ children, color, soft }) =>
  <span style={{ display:'inline-flex', alignItems:'center', gap:'7px', padding:'6px 13px', borderRadius:'var(--r-pill)',
    background: soft||'var(--violet-soft)', color: color||'var(--violet)', fontSize:'.82rem', fontWeight:700,
    fontFamily:'var(--font-body)' }}>{children}</span>;

/* ---- Indicateur d'emprise ---- */
function EmpriseTag({ level }) {
  const { t } = window.useLang();
  // gripLevel → frequency/affect graduation: green (rarely) … red (very often)
  const map = {
    'Very active': { pct:0.9,  c:'#D8564A', key:'high' },
    'Emerging':    { pct:0.55, c:'#C7973F', key:'mid'  },
    'Integrated':  { pct:0.25, c:'#3FA06B', key:'low'  },
  };
  const m = map[level] || map['Emerging'];
  return (
    <div style={{ display:'flex', flexDirection:'column', gap:'9px', textAlign:'left' }}>
      <div style={{ fontSize:'.72rem', fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:'var(--ink-3)' }}>{t('grip.header')}</div>
      <div style={{ display:'flex', alignItems:'center', gap:'11px' }}>
        <div style={{ width:150, height:7, borderRadius:'4px', background:'var(--hairline)', overflow:'hidden' }}>
          <div style={{ width:`${m.pct*100}%`, height:'100%', background:m.c, borderRadius:'4px' }}/>
        </div>
        <span style={{ fontWeight:800, color:m.c, fontSize:'1rem' }}>{t('grip.'+m.key)}</span>
      </div>
      <p style={{ margin:'2px 0 0', color:'var(--ink-2)', fontSize:'.92rem', lineHeight:1.5, maxWidth:420 }}>{t('grip.'+m.key+'.d')}</p>
    </div>
  );
}

/* ---- Barre de progression ---- */
const ProgressBar = ({ value, color='var(--corail)', height=8 }) =>
  <div style={{ width:'100%', height, borderRadius:'4px', background:'var(--hairline)', overflow:'hidden' }}>
    <div style={{ width:`${Math.max(0,Math.min(100,value))}%`, height:'100%', background:color, borderRadius:'4px',
      transition:'width .4s cubic-bezier(.22,.61,.36,1)' }}/>
  </div>;

/* ---- Section helper ---- */
const Section = ({ children, band, style, id }) =>
  <section id={id} style={{ padding:'clamp(56px,9vw,118px) 0', background: band||'transparent', ...style }}>{children}</section>;

/* ---- Module: white app-card floating on the gray-blue page shell, wash gradient inside ---- */
function Module({ wash, children, style, id }) {
  return (
    <section id={id} style={{ padding:'10px var(--gutter) 0' }}>
      <div className="lp-module-card" style={{ maxWidth:'var(--maxw)', margin:'0 auto',
        background: wash ? `linear-gradient(180deg, #FFFFFF 0%, ${wash} 100%)` : '#fff', ...style }}>
        <div style={{ padding:'clamp(48px,7vw,88px) clamp(24px,5vw,64px)' }}>{children}</div>
      </div>
    </section>
  );
}

/* ---- Reveal-on-scroll (IntersectionObserver, fires once) ---- */
function Reveal({ children, as='div', style, className='' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(()=>{
    const el = ref.current;
    if(!el) return;
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{ if(e.isIntersecting){ setVisible(true); obs.disconnect(); } });
    }, { threshold: 0.15 });
    obs.observe(el);
    return ()=>obs.disconnect();
  }, []);
  return React.createElement(as, {
    ref, style,
    className: `lp-reveal-init ${visible?'is-visible':''} ${className}`.trim(),
  }, children);
}

/* ---- Module glyph: rounded-square gradient icon (Apple/Liven app-icon row).
   size="lg" (section-title lead icon) is retired site-wide from this one spot. ---- */
function ModuleGlyph({ icon, deep1, deep2, size='' }) {
  if (size === 'lg') return null;
  return (
    <span className="lp-glyph" style={{ background:`linear-gradient(155deg, ${deep1}, ${deep2})` }}>
      <Icon name={icon} size={20} stroke={2}/>
    </span>
  );
}

/* ---- Horizontal scroll-snap gallery with round nav buttons on desktop ---- */
function Gallery({ children }) {
  const ref = useRef(null);
  function scrollBy(dir){
    const el = ref.current; if(!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior:'smooth' });
  }
  return (
    <div>
      <div className="lp-gallery-nav">
        <button aria-label="Previous" onClick={()=>scrollBy(-1)}><Icon name="arrow-left" size={18}/></button>
        <button aria-label="Next" onClick={()=>scrollBy(1)}><Icon name="arrow-right" size={18}/></button>
      </div>
      <div className="lp-gallery" ref={ref}>{children}</div>
    </div>
  );
}

/* ---- PhotoCard: full-bleed photo, caption below ---- */
function PhotoCard({ src, alt, caption }) {
  return (
    <div className="lp-card-photo lp-lift">
      <div style={{ aspectRatio:'4/5', overflow:'hidden' }}>
        <img src={src} alt={alt} style={{ width:'100%', height:'100%', objectFit:'cover', display:'block',
          outline:'1px solid rgba(0,0,0,.1)', outlineOffset:'-1px' }}/>
      </div>
      {caption && <p style={{ margin:0, padding:'14px 16px 18px', color:'var(--ink-3)', fontSize:'.92rem', lineHeight:1.4 }}>{caption}</p>}
    </div>
  );
}

/* ---- StatCard: deep-gradient claim card, module-tinted ---- */
function StatCard({ icon, deep1, deep2, claim, support, footnote }) {
  return (
    <div className="lp-card-stat lp-lift" style={{ background:`linear-gradient(155deg, ${deep1}, ${deep2})`, padding:'26px 24px', color:'#fff',
      display:'flex', flexDirection:'column', gap:14, minHeight:280, aspectRatio:'4/5', boxSizing:'border-box' }}>
      <span style={{ width:40, height:40, borderRadius:12, background:'rgba(255,255,255,.18)', display:'grid', placeItems:'center' }}>
        <Icon name={icon} size={20} stroke={2}/>
      </span>
      <p style={{ margin:'auto 0 0', fontWeight:650, fontSize:'clamp(1.5rem,1.3rem+1vw,1.9rem)', lineHeight:1.2, textWrap:'pretty' }}>
        {claim}{footnote && <sup style={{ fontSize:'.55em', marginLeft:2 }}>{footnote}</sup>}
      </p>
      <p style={{ margin:0, fontSize:'.95rem', lineHeight:1.5, opacity:.88, textWrap:'pretty' }}>{support}</p>
    </div>
  );
}

/* ---- ProductCard: our own product UI on a neutral card, app-window framed ---- */
function ProductCard({ children, windowChrome=true }) {
  return (
    <div className="lp-card-product lp-lift" style={{ padding: windowChrome?0:'22px' }}>
      {windowChrome && (
        <div style={{ display:'flex', gap:6, padding:'14px 16px 0' }}>
          <span style={{ width:10, height:10, borderRadius:'50%', background:'#E3DCD2' }}/>
          <span style={{ width:10, height:10, borderRadius:'50%', background:'#E3DCD2' }}/>
          <span style={{ width:10, height:10, borderRadius:'50%', background:'#E3DCD2' }}/>
        </div>
      )}
      <div style={{ padding: windowChrome?'18px 20px 22px':0 }}>{children}</div>
    </div>
  );
}

Object.assign(window, { Icon, Button, Container, Eyebrow, Logo, Avatar, archByCode, FamilyDot, Chip, EmpriseTag, ProgressBar, Section,
  Module, Reveal, ModuleGlyph, Gallery, PhotoCard, StatCard, ProductCard });
