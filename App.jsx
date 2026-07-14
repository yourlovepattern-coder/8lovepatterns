/* 8LovePatterns — App + routeur simple */

/* Routes that get a real, shareable URL. Everything else (quiz, analyse,
   intro, vente) is a flow step: no SEO value, and giving it a URL would let
   the browser's Back button land mid-flow with half-built state. go() only
   calls pushState for a route listed here; routeFromPath() only ever
   resolves TO a route listed here (plus the special-cased /test -> intro).
   Keep in sync with the exact-path rules in _redirects. */
function pathForRoute(route, code) {
  switch (route) {
    case 'home': return '/';
    case 'science': return '/science';
    case 'methode': return '/method';
    case 'profils': return '/patterns';
    case 'profil': {
      const slug = (window.PATTERN_SLUGS && window.PATTERN_SLUGS[code]) || 'the-bastion';
      return '/patterns/' + slug;
    }
    default: return null; // quiz, analyse, intro, vente: never touch the URL
  }
}

/* Inverse of pathForRoute(), plus the one legacy special case (/test). Used
   both for the initial boot state and for popstate. Unknown paths fall back
   to 'home' rather than a 404 — the SPA has no not-found screen. */
function routeFromPath(pathname) {
  const p = (pathname || '/').replace(/\/+$/, '').toLowerCase() || '/';
  if (p === '/test') return { route: 'intro' };
  if (p === '/science') return { route: 'science' };
  if (p === '/method') return { route: 'methode' };
  if (p === '/patterns') return { route: 'profils' };
  if (p.indexOf('/patterns/') === 0) {
    const slug = p.slice('/patterns/'.length);
    const code = window.SLUG_TO_PATTERN && window.SLUG_TO_PATTERN[slug];
    return code ? { route: 'profil', code } : { route: 'profils' };
  }
  return { route: 'home' };
}

/* Per-page <title>/<meta description>/<link canonical>. Only routes with a
   real URL are listed — flow steps (quiz/analyse/intro/vente) keep whatever
   meta the last real page set, since they're never indexed or shared. */
const ROUTE_META = {
  home: {
    title: '8LovePatterns: Free Relationship Pattern Test | Attachment-Inspired Quiz',
    description: 'Take the free 5-minute 8LovePatterns test to reveal the protection pattern that takes over when love feels unsafe. A science-backed, attachment-inspired relationship quiz for anxious, avoidant, overthinking, and repeating relationship patterns.',
  },
  science: {
    title: 'The Research Behind 8LovePatterns | Attachment Science Explained',
    description: 'See the psychological research behind 8LovePatterns: adult attachment theory, emotion regulation, and defense mechanisms translated into 8 clear relationship protection patterns. Science-informed, not a clinical diagnosis.',
  },
  methode: {
    title: 'Our Method: How 8LovePatterns Reads Your Relationship Pattern',
    description: 'No numeric scores, no anxious ranking. Learn how 8LovePatterns turns your answers into one clear, judgment-free result, and a concrete next step to stop the pattern from running the show.',
  },
  profils: {
    title: 'The 8 Relationship Protection Patterns | 8LovePatterns',
    description: "Meet the eight protection patterns, from the Arsonist who intensifies at the first sign of distance to the Bastion who keeps love at arm's length. Find out which one runs your relationships.",
  },
};

const PATTERN_META = {
  inc: {
    title: 'The Arsonist Pattern: Why You Intensify When You Feel Distance',
    description: 'The Arsonist turns up the intensity the moment fear rises, pushing, provoking, testing, because a storm feels safer than silence. Discover the fear behind this relationship pattern and how to shift it.',
  },
  gue: {
    title: 'The Watcher Pattern: Why You Scan for Signs of Rejection',
    description: 'The Watcher reads every micro-signal, a shorter text, a shift in tone, to avoid being caught off guard by a goodbye. See what drives this hyper-vigilant relationship pattern and how to quiet the radar.',
  },
  fug: {
    title: 'The Runaway Pattern: Why You Need Distance When It Gets Close',
    description: "The Runaway creates space the moment emotional pressure builds, going quiet to breathe where expectations can't reach. Learn what this distancing relationship pattern protects, and how to leave the door open.",
  },
  alc: {
    title: 'The Alchemist Pattern: Why You Fall for Who They Could Be',
    description: 'The Alchemist falls for potential, not the person in front of them, and stays through the version that never arrives. See what this pattern protects, and how to love who is actually there.',
  },
  sau: {
    title: 'The Savior Pattern: Why You Love by Fixing and Carrying',
    description: 'The Savior becomes indispensable to secure their place, carrying what was never theirs to carry. See why this self-erasing relationship pattern breeds quiet resentment, and how to receive without giving back.',
  },
  mir: {
    title: 'The Mirror Pattern: Why You Become What Keeps You Wanted',
    description: "The Mirror reshapes itself into whatever holds a partner's interest, until there's no outline left to come back to. See what this pattern is protecting, and how to exist without performing.",
  },
  cam: {
    title: 'The Chameleon Pattern: Why You Adapt Until You Disappear',
    description: 'The Chameleon reads what a partner wants and becomes it, flawlessly, to avoid ever disappointing them. Discover why this adaptive relationship pattern erases your own preferences, and how to state one true want.',
  },
  bas: {
    title: 'The Bastion Pattern: Why You Guard Your Heart So Closely',
    description: 'The Bastion keeps a safe distance and controls who reaches which depth, opening the gate slowly and never all the way. Learn what this guarded relationship pattern protects, and how to build intimacy in small deposits.',
  },
  // No 'anc' entry: the secure profile has no public page — see PATTERN_SLUGS
  // in data.jsx. metaForRoute() below falls back to PATTERN_META.bas if a
  // 'profil' route were ever reached with code 'anc', which can't happen
  // through any public link or URL.
};

function metaForRoute(route, code) {
  if (route === 'profil') return PATTERN_META[code] || PATTERN_META.bas;
  return ROUTE_META[route] || null; // null for quiz/analyse/intro/vente: leave meta untouched
}

function applyMeta(route, code) {
  const meta = metaForRoute(route, code);
  if (!meta) return;
  document.title = meta.title;
  let desc = document.querySelector('meta[name="description"]');
  if (!desc) { desc = document.createElement('meta'); desc.setAttribute('name', 'description'); document.head.appendChild(desc); }
  desc.setAttribute('content', meta.description);
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) { canonical = document.createElement('link'); canonical.setAttribute('rel', 'canonical'); document.head.appendChild(canonical); }
  const path = pathForRoute(route, code) || '/';
  canonical.setAttribute('href', 'https://8lovepatterns.com' + path);
}

function App() {
  // /test is a real, shareable URL (ads, Reddit, blog CTAs) that drops the
  // visitor straight onto the test intro screen — the same state the homepage
  // hero button opens via go('intro'). Cloudflare rewrites /test (and every
  // other URL in pathForRoute) to this SPA shell (see _redirects); we just
  // read the path to pick the opening screen and archetype code.
  const initial = (()=>{ try { return routeFromPath(window.location.pathname); } catch(e){ return { route:'home' }; } })();
  const [route, setRoute] = useState(initial.route);
  const [code, setCode] = useState(initial.code || 'bas');     // archétype affiché (profil/résultat)
  const [result, setResult] = useState('bas');  // résultat « obtenu » au test
  const [resultData, setResultData] = useState(null); // full engine result (internal data)
  const [lang, setLangState] = useState(()=>{ try { return localStorage.getItem('lp_lang') || 'en'; } catch(e){ return 'en'; } });
  const scroller = useRef(null);

  function setLang(l){ setLangState(l); try { localStorage.setItem('lp_lang', l); } catch(e){} window.LP_track && window.LP_track('language_change', { language:l }); }
  useEffect(()=>{ document.documentElement.lang = lang; }, [lang]);
  // translation helper bound to the current language (English fallback, then key)
  const t = (key, fallback)=>{
    const dict = (window.LP_T && (window.LP_T[lang] || window.LP_T.en)) || {};
    if(dict[key]!==undefined) return dict[key];
    if(window.LP_T && window.LP_T.en[key]!==undefined) return window.LP_T.en[key];
    return fallback!==undefined ? fallback : key;
  };
  // Analytics: tell GA about every screen change (this app never reloads)
  useEffect(()=>{ window.LP_ROUTE = route; window.LP_pageview && window.LP_pageview(route); }, [route]);
  // SEO: keep <title>/<meta description>/<link canonical> in sync with the
  // routes that have a real URL (see metaForRoute — flow steps are skipped).
  useEffect(()=>{ applyMeta(route, code); }, [route, code]);

  // Browser Back/Forward. Only ever resolves to a route in pathForRoute's
  // list (or 'intro' for the literal /test URL) because those are the only
  // paths that can ever be in the history stack: go() never calls pushState
  // for quiz/analyse/intro/vente, so there is no history entry to pop back
  // into mid-quiz. A Back press during the quiz instead pops to whatever
  // real page was open before the quiz started — the quiz's in-memory state
  // is simply left behind, not corrupted or half-restored.
  useEffect(()=>{
    function onPopState(){
      const next = routeFromPath(window.location.pathname);
      if (next.code) setCode(next.code);
      setRoute(next.route);
      window.scrollTo(0,0);
    }
    window.addEventListener('popstate', onPopState);
    return ()=> window.removeEventListener('popstate', onPopState);
  }, []);

  function go(r, c) {
    if (c) { setCode(c); }
    setRoute(r);
    const path = pathForRoute(r, c !== undefined ? c : code);
    if (path !== null) {
      const current = window.location.pathname.replace(/\/+$/, '') || '/';
      if (current !== path) { try { history.pushState({ route:r, code:c }, '', path); } catch(e){} }
    }
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
      <div className="lp-root" ref={scroller} style={{ minHeight:'100vh', background:'var(--page-bg)' }}>
        {!chromeless && <Header go={go} route={route}/>}
        <main>{page}</main>
        {!chromeless && <Footer go={go}/>}
        <LpTweaks/>
      </div>
    </LangContext.Provider>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
