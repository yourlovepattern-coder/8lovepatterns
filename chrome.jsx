/* 8LovePatterns, header + footer (English) */

function Header({ go, route }) {
  const [open, setOpen] = useState(false);
  const { t } = useLang();
  const links = [
    { k:'profils', label:t('nav.patterns') },
    { k:'science', label:t('nav.science') },
    { k:'methode', label:t('nav.method') },
    { k:'blog', label:'Blog', href:'/blog' },
  ];
  return (
    <div className="lp-nav-wrap">
      <header className={`lp-nav-pill ${open?'is-open':''}`}>
        <Container className="lp-nav-inner" style={{ display:'flex', alignItems:'center', justifyContent:'space-between', height:64, padding:'0 20px' }}>
          <Logo onClick={()=>go('home')} size={19}/>
          <nav style={{ display:'flex', alignItems:'center', gap:'4px' }} className="lp-desktop-nav">
            {links.map(l=>(
              l.href
                ? <a key={l.k} href={l.href} className="lp-nav-link" style={{ display:'inline-flex', alignItems:'center', textDecoration:'none',
                    fontFamily:'var(--font-body)', fontWeight:600, fontSize:'.94rem', padding:'11px 15px', borderRadius:'var(--r-pill)',
                    color:'var(--ink-2)' }}>{l.label}</a>
                : <button key={l.k} onClick={()=>go(l.k)} className="lp-nav-link" style={{ background:'none', border:'none', cursor:'pointer',
                    fontFamily:'var(--font-body)', fontWeight:600, fontSize:'.94rem', padding:'11px 15px', borderRadius:'var(--r-pill)',
                    color: route===l.k?'var(--ink-1)':'var(--ink-2)' }}>{l.label}</button>
            ))}
            {SHOW_LANGUAGE_SWITCHER && (<>
              <div style={{ width:6 }}></div>
              <LanguageWidget/>
              <div style={{ width:6 }}></div>
            </>)}
            <Button size="sm" onClick={()=>go('intro')}>{t('cta.reveal')}</Button>
          </nav>
          <div style={{ display:'none', alignItems:'center', gap:'6px' }} className="lp-burger-wrap">
            {/* Shortened label + a dedicated size override (see .lp-nav-mobile-cta
                in index.html): the full "Reveal My Pattern" pill, even at the
                "sm" size, overflows a 375px nav pill once the logo and burger
                are also in the row — Button's own size/variant presets always
                win over an inline style prop, so the override has to live in
                a stylesheet rule with !important. */}
            <Button className="lp-nav-mobile-cta" onClick={()=>go('intro')}>Take the test</Button>
            <LanguageWidget compact/>
            <button onClick={()=>setOpen(o=>!o)} className="lp-icon-btn" style={{ background:'none', border:'none', cursor:'pointer', color:'var(--encre)' }}
              aria-label={open?'Close menu':'Open menu'}>
              <Icon name={open?'x':'menu'} size={24}/>
            </button>
          </div>
        </Container>
        {open && (
          <div style={{ borderTop:'1px solid var(--hairline)' }}>
            <Container style={{ padding:'14px 20px 20px', display:'flex', flexDirection:'column', gap:'4px' }}>
              {links.map(l=>(
                l.href
                  ? <a key={l.k} href={l.href} className="lp-nav-link" style={{ textAlign:'left', textDecoration:'none',
                      fontFamily:'var(--font-body)', fontWeight:600, fontSize:'1.05rem', padding:'12px 4px', color:'var(--ink-2)', borderRadius:'var(--r-sm)' }}>{l.label}</a>
                  : <button key={l.k} onClick={()=>{go(l.k);setOpen(false);}} className="lp-nav-link" style={{ textAlign:'left', background:'none', border:'none',
                      fontFamily:'var(--font-body)', fontWeight:600, fontSize:'1.05rem', padding:'12px 4px', color:'var(--ink-2)', borderRadius:'var(--r-sm)' }}>{l.label}</button>
              ))}
              <div style={{ height:8 }}></div>
              <Button full onClick={()=>{go('intro');setOpen(false);}}>{t('cta.reveal')}</Button>
            </Container>
          </div>
        )}
      </header>
    </div>
  );
}

/* One entry per network. `href` goes straight to the real profile URL — no
   custom instagram:// scheme: iOS Safari and Android Chrome/WebView already
   intercept a plain instagram.com link via Instagram's own universal/app
   links and offer to open the app straight to this profile when it's
   installed, falling back to the mobile web profile when it isn't. A custom
   URI scheme would be LESS reliable (breaks with no app-not-found fallback
   in several in-app browsers) for no real gain. Add a row here to add a
   network; nothing else in the footer needs to change. */
const SOCIALS = [
  { name:'Instagram', href:'https://www.instagram.com/8lovepatterns/', icon:'instagram' },
  /* Pinterest's mark is a solid glyph, not a stroke-drawn outline like the
     rest of ICONS — `filled` swaps the <Icon> to fill:currentColor/stroke:none
     so it doesn't render as an empty outline. */
  { name:'Pinterest', href:'https://fr.pinterest.com/8LovePatterns/', icon:'pinterest', filled:true },
];

function Footer({ go }) {
  const { t } = useLang();
  const cols = [
    { h:t('footer.test'), items:[[t('cta.reveal'),'intro'],[t('footer.p8'),'profils'],[t('nav.science'),'science'],[t('nav.method'),'methode']] },
    { h:t('footer.brand'), items:[[t('footer.about'),'methode'],[t('footer.privacy'),'/legal.html#privacy'],['Legal','/legal.html'],[t('footer.contact'),'mailto:support@8lovepatterns.com']] },
  ];
  const supportEmail = 'support@8lovepatterns.com';
  /* Dark-blue -> blue vertical gradient with white text (see --footer-grad in
     colors_and_type.css). The wordmark keeps its historical rendering here:
     no `accent` prop, unlike the header. */
  return (
    <footer className="lp-footer" style={{ background:'var(--footer-grad)', color:'var(--footer-text)', padding:'72px 0 40px' }}>
      <Container>
        <div style={{ display:'grid', gridTemplateColumns:'1.5fr 1fr 1fr 1fr', gap:'40px', alignItems:'start' }} className="lp-footer-grid">
          <div style={{ maxWidth:340 }}>
            <Logo light/>
            <p style={{ marginTop:16, fontSize:'.95rem', lineHeight:1.6, color:'rgba(255,255,255,.82)' }}>
              {t('footer.tagline')}
            </p>
            <div style={{ display:'flex', gap:'10px', marginTop:20 }}>
              {SOCIALS.map(s=>(
                <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer"
                  aria-label={s.name} className="lp-footer-social">
                  <Icon name={s.icon} size={18} style={s.filled ? { fill:'currentColor', stroke:'none' } : {}}/>
                </a>
              ))}
            </div>
          </div>
          {cols.map(c=>(
            <div key={c.h}>
              <div style={{ fontWeight:700, color:'#fff', marginBottom:14, fontSize:'.95rem' }}>{c.h}</div>
              <div style={{ display:'flex', flexDirection:'column', gap:'10px' }}>
                {c.items.map(([label,k])=>(
                  (k.charAt(0)==='/' || k.startsWith('mailto:'))
                    ? <a key={label} href={k} style={{ textAlign:'left', color:'rgba(255,255,255,.82)', textDecoration:'none',
                        fontFamily:'var(--font-body)', fontSize:'.92rem', padding:0, width:'fit-content' }}>{label}</a>
                    : <button key={label} onClick={()=>go(k)} style={{ textAlign:'left', background:'none', border:'none', cursor:'pointer',
                        color:'rgba(255,255,255,.82)', fontFamily:'var(--font-body)', fontSize:'.92rem', padding:0 }}>{label}</button>
                ))}
              </div>
            </div>
          ))}
          <div>
            <div style={{ fontWeight:700, color:'#fff', marginBottom:14, fontSize:'.95rem' }}>{t('footer.support')}</div>
            <div style={{ display:'flex', flexDirection:'column', gap:'10px' }}>
              <a href={`mailto:${supportEmail}`} style={{ color:'rgba(255,255,255,.82)', textDecoration:'none',
                fontSize:'.92rem', display:'inline-flex', alignItems:'center', gap:'8px', width:'fit-content' }}>
                <Icon name="mail" size={15}/>{supportEmail}
              </a>
              <span style={{ color:'rgba(255,255,255,.58)', fontSize:'.82rem', lineHeight:1.5 }}>{t('footer.supportNote')}</span>
            </div>
          </div>
        </div>
        <div style={{ marginTop:52, paddingTop:24, borderTop:'1px solid rgba(255,255,255,.18)', display:'flex',
          justifyContent:'space-between', flexWrap:'wrap', gap:'12px', fontSize:'.82rem', color:'rgba(255,255,255,.62)' }}>
          <span>{t('footer.legal')}</span>
          <span>{t('footer.made')}</span>
        </div>
      </Container>
    </footer>
  );
}

Object.assign(window, { Header, Footer });
