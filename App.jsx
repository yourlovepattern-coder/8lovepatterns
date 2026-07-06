/* 8LovePatterns — App + routeur simple */
function App() {
  // /test is a real, shareable URL (ads, Reddit, blog CTAs) that drops the
  // visitor straight onto the test intro screen — the same state the homepage
  // hero button opens via go('intro'). Cloudflare rewrites /test to this SPA
  // shell (see _redirects); we just read the path to pick the opening screen.
  const [route, setRoute] = useState(()=>{
    try { return window.location.pathname.replace(/\/+$/,'').toLowerCase()==='/test' ? 'intro' : 'home'; }
    catch(e){ return 'home'; }
  });
  const [code, setCode] = useState('bas');     // archétype affiché (profil/résultat)
  const [result, setResult] = useState('bas');  // résultat « obtenu » au test
  const [resultData, setResultData] = useState(null); // full engine result (internal data)
  const [lang, setLangState] = useState(()=>{ try { return localStorage.getItem('lp_lang') || 'en'; } catch(e){ return 'en'; } });
  const scroller = useRef(null);

  function setLang(l){ setLangState(l); try { localStorage.setItem('lp_lang', l); } catch(e){} window.LP_track && window.LP_track('language_change', { language:l }); }
  useEffect(()=>{ document.documentElement.lang = lang; }, [lang]);
  // Analytics: tell GA about every screen change (this app never reloads)
  useEffect(()=>{ window.LP_ROUTE = route; window.LP_pageview && window.LP_pageview(route); }, [route]);
  // translation helper bound to the current language (English fallback, then key)
  const t = (key, fallback)=>{
    const dict = (window.LP_T && (window.LP_T[lang] || window.LP_T.en)) || {};
    if(dict[key]!==undefined) return dict[key];
    if(window.LP_T && window.LP_T.en[key]!==undefined) return window.LP_T.en[key];
    return fallback!==undefined ? fallback : key;
  };

  function go(r, c) {
    if (c) { setCode(c); }
    setRoute(r);
    requestAnimationFrame(()=>{ if(scroller.current) scroller.current.scrollTop = 0; window.scrollTo(0,0); });
  }
  function onResult(res) {
    // engine hands up the dominant archetype + all internal scores
    setResult(res.dominant); setCode(res.dominant); setResultData(res);
    // persist a clean resultData object for the premium report page
    if(window.LP_saveResultData) window.LP_saveResultData(res);
  }

  const chromeless = route==='quiz' || route==='analyse' || route==='intro';
  let page;
  switch(route){
    case 'home': page = <Home go={go}/>; break;
    case 'intro': page = <LoveTest go={go}/>; break;
    case 'quiz': page = <Quiz go={go} onFinish={()=>{}}/>; break;
    case 'analyse': page = <Analyse go={go}/>; break;
    case 'profils': page = <ProfilsIndex go={go}/>; break;
    case 'profil': page = <Profile go={go} code={code}/>; break;
    case 'vente': page = <SalesPage go={go} code={code}/>; break;
    case 'methode': page = <Method go={go}/>; break;
    case 'science': page = <Science go={go}/>; break;
    default: page = <Home go={go}/>;
  }

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      <div className="lp-root" ref={scroller} style={{ minHeight:'100vh', background:'var(--paper)' }}>
        {!chromeless && <Header go={go} route={route}/>}
        <main>{page}</main>
        {!chromeless && <Footer go={go}/>}
        <LpTweaks/>
      </div>
    </LangContext.Provider>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
