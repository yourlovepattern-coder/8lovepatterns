/* 8LovePatterns, header + footer (English) */

function Header({ go, route }) {
  const [open, setOpen] = useState(false);
  const { t } = useLang();
  const links = [
    { k:'profils', label:t('nav.patterns') },
    { k:'science', label:t('nav.science') },
    { k:'methode', label:t('nav.method') },
    { k:'premium', label:t('nav.premium') },
  ];
  return (
    <header style={{ position:'sticky', top:0, zIndex:50, background:'rgba(251,247,241,.82)',
      backdropFilter:'blur(12px)', WebkitBackdropFilter:'blur(12px)', borderBottom:'1px solid var(--hairline)' }}>
      <Container style={{ display:'flex', alignItems:'center', justifyContent:'space-between', height:72 }}>
        <Logo onClick={()=>go('home')}/>
        <nav style={{ display:'flex', alignItems:'center', gap:'4px' }} className="lp-desktop-nav">
          {links.map(l=>(
            <button key={l.k} onClick={()=>go(l.k)} style={{ background:'none', border:'none', cursor:'pointer',
              fontFamily:'var(--font-body)', fontWeight:600, fontSize:'.97rem', padding:'9px 15px', borderRadius:'var(--r-pill)',
              color: route===l.k?'var(--encre)':'var(--ink-2)' }}>{l.label}</button>
          ))}
          <div style={{ width:6 }}></div>
          <LanguageWidget/>
          <div style={{ width:6 }}></div>
          <Button size="sm" onClick={()=>go('intro')}>{t('cta.reveal')}</Button>
        </nav>
        <div style={{ display:'none', alignItems:'center', gap:'10px' }} className="lp-burger-wrap">
          <LanguageWidget compact/>
          <button onClick={()=>setOpen(o=>!o)} style={{ background:'none', border:'none', cursor:'pointer', color:'var(--encre)' }}>
            <Icon name={open?'x':'menu'} size={26}/>
          </button>
        </div>
      </Container>
      {open && (
        <div style={{ borderTop:'1px solid var(--hairline)', background:'var(--paper)' }}>
          <Container style={{ padding:'14px 0 20px', display:'flex', flexDirection:'column', gap:'4px' }}>
            {links.map(l=>(
              <button key={l.k} onClick={()=>{go(l.k);setOpen(false);}} style={{ textAlign:'left', background:'none', border:'none',
                fontFamily:'var(--font-body)', fontWeight:600, fontSize:'1.05rem', padding:'12px 4px', color:'var(--ink-2)' }}>{l.label}</button>
            ))}
            <div style={{ height:8 }}></div>
            <Button full onClick={()=>{go('intro');setOpen(false);}}>{t('cta.reveal')}</Button>
          </Container>
        </div>
      )}
    </header>
  );
}

function Footer({ go }) {
  const { t } = useLang();
  const cols = [
    { h:t('footer.test'), items:[[t('cta.reveal'),'intro'],[t('footer.p8'),'profils'],[t('nav.science'),'science'],[t('nav.method'),'methode']] },
    { h:t('footer.brand'), items:[[t('nav.premium'),'premium'],[t('footer.about'),'methode'],[t('footer.privacy'),'home'],[t('footer.contact'),'home']] },
  ];
  const supportEmail = 'support@8lovepatterns.com';
  return (
    <footer style={{ background:'var(--encre)', color:'rgba(255,255,255,.7)', padding:'72px 0 40px' }}>
      <Container>
        <div style={{ display:'grid', gridTemplateColumns:'1.5fr 1fr 1fr 1fr', gap:'40px', alignItems:'start' }} className="lp-footer-grid">
          <div style={{ maxWidth:340 }}>
            <Logo light/>
            <p style={{ marginTop:16, fontSize:'.95rem', lineHeight:1.6, color:'rgba(255,255,255,.62)' }}>
              {t('footer.tagline')}
            </p>
          </div>
          {cols.map(c=>(
            <div key={c.h}>
              <div style={{ fontWeight:700, color:'#fff', marginBottom:14, fontSize:'.95rem' }}>{c.h}</div>
              <div style={{ display:'flex', flexDirection:'column', gap:'10px' }}>
                {c.items.map(([label,k])=>(
                  <button key={label} onClick={()=>go(k)} style={{ textAlign:'left', background:'none', border:'none', cursor:'pointer',
                    color:'rgba(255,255,255,.66)', fontFamily:'var(--font-body)', fontSize:'.92rem', padding:0 }}>{label}</button>
                ))}
              </div>
            </div>
          ))}
          <div>
            <div style={{ fontWeight:700, color:'#fff', marginBottom:14, fontSize:'.95rem' }}>{t('footer.support')}</div>
            <div style={{ display:'flex', flexDirection:'column', gap:'10px' }}>
              <a href={`mailto:${supportEmail}`} style={{ color:'rgba(255,255,255,.66)', textDecoration:'none',
                fontSize:'.92rem', display:'inline-flex', alignItems:'center', gap:'8px', width:'fit-content' }}>
                <Icon name="mail" size={15}/>{supportEmail}
              </a>
              <span style={{ color:'rgba(255,255,255,.42)', fontSize:'.82rem', lineHeight:1.5 }}>{t('footer.supportNote')}</span>
            </div>
          </div>
        </div>
        <div style={{ marginTop:52, paddingTop:24, borderTop:'1px solid rgba(255,255,255,.12)', display:'flex',
          justifyContent:'space-between', flexWrap:'wrap', gap:'12px', fontSize:'.82rem', color:'rgba(255,255,255,.5)' }}>
          <span>{t('footer.legal')}</span>
          <span>{t('footer.made')}</span>
        </div>
      </Container>
    </footer>
  );
}

Object.assign(window, { Header, Footer });
