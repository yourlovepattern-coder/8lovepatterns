/* ============================================================================
   8LovePatterns, i18n  (language widget + dictionary + context)
   ----------------------------------------------------------------------------
   Lightweight translation layer. Components call useLang() → { lang, setLang, t }.
   t('key') looks up the current language, falling back to English, then the key.
   Add a language by adding a block to LP_T; add a string by adding a key.
   Currently wired: header nav, language widget, home landing, footer.
   ========================================================================== */

const LP_LANGS = [
  { code:'en', label:'English',  short:'EN' },
  { code:'fr', label:'Français', short:'FR' },
];

const LP_T = {
  en: {
    'nav.patterns':'The Patterns', 'nav.science':'Science', 'nav.method':'Method', 'nav.premium':'Premium',
    'cta.reveal':'Reveal My Pattern',
    'hero.badge':'Free 5-minute relationship test · Private result',
    'hero.h1a':"You're not bad at love.", 'hero.h1b':"You're stuck in a protection pattern.",
    'hero.sub':'When love feels unsafe, something in you takes over. 8LovePatterns reveals your dominant pattern in 5 minutes, so you can stop repeating the same story.',
    'hero.cta2':'See the 8 Patterns',
    'trust.line':'Free · Private · No sign-up',
    'hero.seo':'An attachment-inspired relationship quiz for people who overthink, pull away, chase, shut down, or keep repeating the same relationship pattern.',
    'tb.eyebrow':'Science-backed, human-first',
    'tb.h':'Built on decades of research in attachment, emotion regulation, and relationship self-sabotage.',
    'tb.disclaimer':'Research-informed only. Not affiliated with or endorsed by any researcher or institution. An educational self-reflection tool, not a clinical diagnosis.',
    'promise.h2a':'The problem is not how you love.', 'promise.h2b':"It's what protects you when love feels unsafe.",
    'promise.b1':'Your dominant pattern', 'promise.b2':'What triggers it', 'promise.b3':'What it protects', 'promise.b4':'What to do when it takes over',
    'promise.cta':'Find Out What Takes Over',
    'teaser.eyebrow':'The 8 protection patterns', 'teaser.h2':'Meet the eight. One is running your love life.', 'teaser.cta':'Explore all 8 patterns', 'teaser.discover':'Discover',
    'final.h2':'Ready to meet your pattern?', 'final.sub':'5 minutes. A mirror that actually sounds like you. Free, and no sign-up.',
    'footer.tagline':'8LovePatterns reveals what protects you when love feels unsafe. A mirror, not a verdict.',
    'footer.test':'The test', 'footer.brand':'8LovePatterns',
    'footer.p8':'The 8 patterns', 'footer.about':'About', 'footer.privacy':'Privacy', 'footer.contact':'Contact',
    'footer.support':'Support', 'footer.supportNote':'We usually reply within 48 hours.',
    'footer.legal':'© 2026 8LovePatterns™',
    'footer.made':'Inspired by attachment theory. Made with care.',
    'intro.title':'Free relationship pattern test',
    'intro.lead':'A few honest minutes reveal the pattern that protects you when love feels unsafe. The test adapts to your answers, so its length changes with you.',
    'intro.s1t':'Take the test', 'intro.s1d':'Answer honestly, with your gut. There are no right answers, just what is true for you today.',
    'intro.s2t':'Meet your pattern', 'intro.s2d':'See what takes over when love feels unsafe: what triggers it, and what it protects.',
    'intro.s3t':'Go further', 'intro.s3d':'An optional playbook helps you recognize the pattern and respond differently.',
    'q.back':'Back', 'q.word':'Question', 'q.range':'usually 40 to 60',
    'scale.agree':'Agree', 'scale.disagree':'Disagree',
    'grip.header':'How much this pattern affects you',
    'grip.high':'Very often', 'grip.mid':'Sometimes', 'grip.low':'Rarely',
    'grip.high.d':'Your protection mechanism seems to weigh heavily in your life right now.',
    'grip.mid.d':'It still takes over in some important moments.',
    'grip.low.d':"It's still there, but it rarely runs your decisions now.",
    'lang.label':'Language',
  },
  fr: {
    'nav.patterns':'Les schémas', 'nav.science':'Science', 'nav.method':'Méthode', 'nav.premium':'Premium',
    'cta.reveal':'Révéler mon schéma',
    'hero.badge':'Test relationnel gratuit de 5 minutes · Résultat privé',
    'hero.h1a':"Tu n'es pas mauvais en amour.", 'hero.h1b':'Tu es coincé dans un schéma de protection.',
    'hero.sub':"Quand l'amour devient incertain, quelque chose en toi prend le relais. 8LovePatterns révèle ton schéma dominant en 5 minutes, pour arrêter de rejouer la même histoire.",
    'hero.cta2':'Voir les 8 schémas',
    'trust.line':'Gratuit · Privé · Sans inscription',
    'hero.seo':"Un test relationnel inspiré de la théorie de l'attachement, pour celles et ceux qui ruminent, prennent leurs distances, poursuivent, se ferment ou répètent le même schéma.",
    'tb.eyebrow':"Science à l'appui, humain d'abord",
    'tb.h':"Construit sur des décennies de recherche en attachement, régulation émotionnelle et auto-sabotage relationnel.",
    'tb.disclaimer':"Inspiré de la recherche uniquement. Sans affiliation ni caution d'aucun chercheur ni institution. Un outil de réflexion personnelle, pas un diagnostic clinique.",
    'promise.h2a':"Le problème n'est pas ta façon d'aimer.", 'promise.h2b':"C'est ce qui te protège quand l'amour devient incertain.",
    'promise.b1':'Ton schéma dominant', 'promise.b2':'Ce qui le déclenche', 'promise.b3':"Ce qu'il protège", 'promise.b4':'Quoi faire quand il prend le dessus',
    'promise.cta':'Découvrir ce qui prend le dessus',
    'teaser.eyebrow':'Les 8 schémas de protection', 'teaser.h2':"Découvre les huit. L'un dirige ta vie amoureuse.", 'teaser.cta':'Explorer les 8 schémas', 'teaser.discover':'Découvrir',
    'final.h2':'Prêt à rencontrer ton schéma ?', 'final.sub':'5 minutes. Un miroir qui te ressemble vraiment. Gratuit, et sans inscription.',
    'footer.tagline':"8LovePatterns révèle ce qui te protège quand l'amour devient incertain. Un miroir, pas un verdict.",
    'footer.test':'Le test', 'footer.brand':'8LovePatterns',
    'footer.p8':'Les 8 schémas', 'footer.about':'À propos', 'footer.privacy':'Confidentialité', 'footer.contact':'Contact',
    'footer.support':'Support', 'footer.supportNote':'Nous répondons en général sous 48 heures.',
    'footer.legal':'© 2026 8LovePatterns™',
    'footer.made':"Inspiré de la théorie de l'attachement. Fait avec soin.",
    'intro.title':'Test relationnel gratuit',
    'intro.lead':"Quelques minutes sincères révèlent le schéma qui te protège quand l'amour devient incertain. Le test s'adapte à tes réponses, sa longueur change avec toi.",
    'intro.s1t':'Passe le test', 'intro.s1d':"Réponds honnêtement, avec ton instinct. Il n'y a pas de bonne réponse, juste ce qui est vrai pour toi aujourd'hui.",
    'intro.s2t':'Rencontre ton schéma', 'intro.s2d':"Vois ce qui prend le dessus quand l'amour devient incertain : ce qui le déclenche, et ce qu'il protège.",
    'intro.s3t':'Va plus loin', 'intro.s3d':"Un guide optionnel t'aide à reconnaître le schéma et à réagir autrement.",
    'q.back':'Retour', 'q.word':'Question', 'q.range':'environ 40 à 60',
    'scale.agree':"D'accord", 'scale.disagree':"Pas d'accord",
    'grip.header':'À quel point ce mécanisme vous affecte',
    'grip.high':'Très souvent', 'grip.mid':'Parfois', 'grip.low':'Très peu',
    'grip.high.d':'Votre mécanisme de protection semble très imposant dans votre vie en ce moment.',
    'grip.mid.d':'Il prend encore le dessus dans certains moments importants.',
    'grip.low.d':'Il est encore là, mais il dirige rarement vos décisions désormais.',
    'lang.label':'Langue',
  },
};

const LangContext = React.createContext({ lang:'en', setLang:()=>{}, t:(k,f)=>f||k });
function useLang(){ return React.useContext(LangContext); }

/* Language switcher visibility. Flip to true to bring the EN/FR button back
   everywhere it's used (site navbar + quiz header) — nothing else to change. */
const SHOW_LANGUAGE_SWITCHER = false;

/* The header dropdown */
function LanguageWidget({ compact }) {
  if (!SHOW_LANGUAGE_SWITCHER) return null;
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const cur = LP_LANGS.find(l=>l.code===lang) || LP_LANGS[0];
  useEffect(()=>{
    function onDoc(e){ if(ref.current && !ref.current.contains(e.target)) setOpen(false); }
    document.addEventListener('mousedown', onDoc);
    return ()=> document.removeEventListener('mousedown', onDoc);
  },[]);
  return (
    <div ref={ref} style={{ position:'relative' }}>
      <button onClick={()=>setOpen(o=>!o)} aria-label="Select language"
        style={{ display:'inline-flex', alignItems:'center', gap:'7px', background:'none', cursor:'pointer',
          border:'1px solid var(--hairline)', borderRadius:'var(--r-pill)', padding: compact?'10px 14px':'8px 13px',
          fontFamily:'var(--font-body)', fontWeight:600, fontSize:'.92rem', color:'var(--ink-2)' }}>
        <Icon name="globe" size={16}/>
        <span>{cur.short}</span>
        <Icon name="chevron-down" size={14} style={{ transform: open?'rotate(180deg)':'none', transition:'transform .2s ease', opacity:.6 }}/>
      </button>
      {open && (
        <div style={{ position:'absolute', top:'calc(100% + 8px)', right:0, minWidth:170, zIndex:80,
          background:'var(--surface)', border:'1px solid var(--hairline)', borderRadius:'var(--r-md)',
          boxShadow:'var(--sh-md)', padding:'6px', display:'flex', flexDirection:'column', gap:'2px' }}>
          {LP_LANGS.map(l=>{
            const on = l.code===lang;
            return (
              <button key={l.code} onClick={()=>{ setLang(l.code); setOpen(false); }}
                style={{ display:'flex', alignItems:'center', justifyContent:'space-between', gap:'12px',
                  background: on?'var(--violet-soft)':'none', border:'none', cursor:'pointer', textAlign:'left',
                  padding:'10px 12px', borderRadius:'var(--r-sm)', fontFamily:'var(--font-body)', fontWeight:600,
                  fontSize:'.95rem', color: on?'var(--violet)':'var(--ink)' }}>
                <span>{l.label}</span>
                <span style={{ fontSize:'.74rem', fontWeight:700, color:'var(--ink-3)' }}>{l.short}{on?' ✓':''}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

Object.assign(window, { LP_LANGS, LP_T, LangContext, useLang, LanguageWidget });
