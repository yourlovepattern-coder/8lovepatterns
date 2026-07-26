/* 8LovePatterns — homepage, rebuilt from the validated mockup.
   Section order is fixed and exhaustive: hero, the eight patterns, mini
   articles, science, FAQ. Nav and footer live in chrome.jsx. Anything that
   used to sit between these (loop module, anchor module, how-it-works band,
   support band, final CTA) was removed with the redesign — do not re-add a
   section here without a mockup for it.
   Layout classes are all `lp-hm-*` and live in index.html's <style>. */

/* The five gold stars under the hero CTA ship behind this flag. Flip to true
   to show them; nothing else in the hero changes. */
const SHOW_HERO_STARS = false;

/* Every CTA on this page is a real <a href="/test"> — crawlable, middle-
   clickable, keyboard-reachable — and this handler keeps the navigation
   inside the SPA. App.jsx's routeFromPath() already maps /test to the test
   intro screen, so a hard load of the pushed URL resolves to the same place. */
function testNav(go) {
  return function (e) {
    if (e && (e.metaKey || e.ctrlKey || e.shiftKey || e.button)) return;
    if (e) e.preventDefault();
    try {
      if (window.location.pathname.replace(/\/+$/, '') !== '/test') {
        history.pushState({ route: 'intro' }, '', '/test');
      }
    } catch (err) {}
    go('intro');
  };
}

/* ---- Hero floating cards ------------------------------------------------
   Seven animated WebP cards (three left, four right) plus three small white
   emoji cards, scattered around the headline exactly as in the mockup.
   Sizes are deliberately uneven, some portrait and some square.
   Every card is decorative: alt="" + aria-hidden.
   `dur` / `delay` / `rot` drive the per-card float (see .lp-hm-drift in
   index.html); the delays are all different so no two cards ever move in
   sync. The whole float is disabled under prefers-reduced-motion. */
const HERO_CARDS = [
  /* left */
  { src: 'couple2.webp',   w: 130, h: 172, top: '2%',  left: '6%',    dy: '-11px', r0: '-2deg', r1: '0deg',    dur: '7.4s', delay: '-0.4s' },
  { src: 'butterfly.webp', w: 108, h: 138, top: '33%', left: '-1%',   dy: '-9px',  r0: '1.5deg', r1: '-0.5deg', dur: '8.6s', delay: '-3.1s' },
  { src: 'flower.webp',    w: 122, h: 122, top: '63%', left: '8%',    dy: '-12px', r0: '-1deg',  r1: '1deg',    dur: '6.5s', delay: '-1.7s' },
  /* right */
  { src: 'happy.webp',     w: 108, h: 108, top: '3%',  right: '13%',  dy: '-10px', r0: '1deg',   r1: '-1deg',   dur: '8.1s', delay: '-2.6s' },
  { src: 'dance2.webp',    w: 96,  h: 138, top: '0%',  right: '-8%',  dy: '-8px',  r0: '-1.5deg', r1: '0.5deg', dur: '6.9s', delay: '-5.2s' },
  { src: 'wave.webp',      w: 112, h: 112, top: '19%', right: '1%',   dy: '-11px', r0: '2deg',   r1: '0deg',    dur: '7.9s', delay: '-0.9s' },
  { src: 'dance.webp',     w: 146, h: 140, top: '55%', right: '7%',   dy: '-12px', r0: '-1deg',  r1: '1.5deg',  dur: '8.9s', delay: '-4.3s' },
];

/* Small white square cards, each carrying one emoji. */
const HERO_EMOJI = [
  { src: 'love_discution.png', s: 62, top: '19%', left: '20%',  dy: '-10px', r0: '-3deg', r1: '1deg',  dur: '6.7s', delay: '-2.2s' },
  { src: 'coeur.png',          s: 68, top: '11%', right: '25%', dy: '-9px',  r0: '2deg',  r1: '-2deg', dur: '7.7s', delay: '-4.8s' },
  { src: 'coeur_puzzle.png',   s: 64, top: '70%', right: '17%', dy: '-11px', r0: '-2deg', r1: '2deg',  dur: '8.4s', delay: '-1.2s' },
];

/* The three cards kept on phones, where the scatter is replaced by a single
   centred row so the hero can never overflow horizontally. */
const HERO_CARDS_MOBILE = ['couple2.webp', 'happy.webp', 'wave.webp'];

function heroFloatStyle(c) {
  return {
    width: c.w, height: c.h, top: c.top, left: c.left, right: c.right,
    '--dy': c.dy, '--r0': c.r0, '--r1': c.r1, '--dur': c.dur, '--delay': c.delay,
  };
}

function HeroFloatingCards() {
  return (
    <div className="lp-hm-floats" aria-hidden="true">
      {HERO_CARDS.map(c => (
        <div key={c.src} className="lp-hm-float lp-hm-drift" style={heroFloatStyle(c)}>
          <img src={`public/assets/hero/${c.src}`} alt="" aria-hidden="true"/>
        </div>
      ))}
      {HERO_EMOJI.map(c => (
        <div key={c.src} className="lp-hm-emoji lp-hm-drift"
          style={heroFloatStyle({ ...c, w: c.s, h: c.s })}>
          <img src={`public/assets/emoji/${c.src}`} alt="" aria-hidden="true"/>
        </div>
      ))}
    </div>
  );
}

function HeroMobileRow() {
  return (
    <div className="lp-hm-float-row" aria-hidden="true">
      {HERO_CARDS_MOBILE.map(src => (
        <div key={src} className="lp-hm-float-sm">
          <img src={`public/assets/hero/${src}`} alt="" aria-hidden="true"/>
        </div>
      ))}
    </div>
  );
}

/* ---- Hero proof row: three numbers, each under its own visual ---- */
const STAT_AVATARS = ['inc', 'gue', 'sau', 'bas'];

function HeroStats() {
  return (
    <div className="lp-hm-stats">
      <div className="lp-hm-stat">
        <div className="lp-hm-stat-vis">
          <span className="lp-hm-avatars">
            {STAT_AVATARS.map(code => (
              <img key={code} src={`assets/archetypes/${code}_avatar.webp`} alt="" aria-hidden="true"/>
            ))}
            <img className="badge" src="public/assets/emoji/certified.png" alt="" aria-hidden="true"/>
          </span>
        </div>
        <p className="lp-hm-stat-txt">
          Built on<br/>
          <b className="lp-hm-stat-big-sm">50 YEARS</b><br/>
          of attachment research.
        </p>
      </div>

      <div className="lp-hm-stat">
        <div className="lp-hm-stat-vis">
          <img className="lp-hm-stat-emoji" src="public/assets/emoji/coeur_puzzle.png" alt="" aria-hidden="true"/>
        </div>
        <p className="lp-hm-stat-txt">
          <b className="lp-hm-stat-big">8</b><br/>
          Attachment patterns identified
        </p>
      </div>

      <div className="lp-hm-stat">
        <div className="lp-hm-stat-vis">
          <img className="lp-hm-stat-emoji" src="public/assets/emoji/anchor_2693.png" alt="" aria-hidden="true"/>
        </div>
        <p className="lp-hm-stat-txt">
          <b className="lp-hm-stat-big-sm">30 days</b><br/>
          transformation plan
        </p>
      </div>
    </div>
  );
}

function HeroStars() {
  if (!SHOW_HERO_STARS) return null;
  return (
    <div className="lp-hm-stars" aria-hidden="true">
      {[0, 1, 2, 3, 4].map(i => <Icon key={i} name="star" size={20}/>)}
    </div>
  );
}

/* ---- Section 2: the eight patterns ---- */
function PatternCard({ arch, go }) {
  return (
    <button className="lp-hm-pcard lp-lift" onClick={() => go('profil', arch.code)}>
      <span className="lp-hm-pcard-fig">
        <img src={`assets/archetypes/${arch.code}.webp`} alt="" aria-hidden="true"/>
      </span>
      <h3 className="lp-hm-pcard-name">{arch.name}</h3>
      <p className="lp-hm-pcard-desc">{arch.tagline}</p>
      <span className="lp-hm-pcard-go">Discover →</span>
    </button>
  );
}

/* ---- Section 3: mini articles ---- */
const MINI_ARTICLES = [
  {
    img: 'mini_blog_01.webp',
    label: 'Pattern research',
    title: 'One step at a time',
    text: 'The Anchor measures how deep your defense mechanism runs. The better you get at catching the early signs, the more of your own reaction you get to keep.',
  },
  {
    img: 'mini_blog_02.webp',
    label: 'New habits',
    title: "Your pattern doesn't define you",
    text: 'Your defenses were never the enemy. They kept something safe once, and most people find that accepting that is where the movement actually starts.',
  },
  {
    img: 'mini_blog_03.webp',
    label: 'New habits',
    title: 'Move at your own pace',
    text: "Everyone arrives with a different history, so your answers shape a plan built around your profile rather than a general template. Decades of automatic reactions don't unwind overnight, and that's fine.",
  },
];

function MiniArticles({ go }) {
  const nav = testNav(go);
  return (
    <section className="lp-hm-mini">
      {MINI_ARTICLES.map(a => (
        <article key={a.title} className="lp-hm-mini-card">
          <img className="lp-hm-mini-bg" src={`public/assets/mini/${a.img}`} alt="" aria-hidden="true"/>
          <span className="lp-hm-mini-veil" aria-hidden="true"/>
          <div className="lp-hm-mini-body">
            <span className="lp-hm-mini-label">{a.label}</span>
            <h3 className="lp-hm-mini-title">{a.title}</h3>
            <p className="lp-hm-mini-text">{a.text}</p>
            <Button variant="light" size="sm" href="/test" onClick={nav}>Take the free test</Button>
          </div>
        </article>
      ))}
    </section>
  );
}

/* ---- Section 4: science ---- */
const SCIENCE_CARDS = [
  { t: 'Bowlby (1969)', d: 'Founding work on attachment as a survival system in close relationships.' },
  { t: 'Hazan & Shaver (1987)', d: 'Extended attachment theory into adult romantic relationships.' },
  { t: 'Mikulincer & Shaver (2016)', d: 'Mapped anxious and avoidant strategies for regulating closeness and fear.' },
  { t: 'Fraley & Waller (1998)', d: 'Evidence for attachment styles as continuous dimensions, not fixed boxes.' },
];

/* ---- Section 5: FAQ ------------------------------------------------------
   Native <details>/<summary> accordion (first item open by default). The
   answers are the ones already published in the site's FAQ; every question
   in the mockup's list has one, so all ten render and all ten are mirrored
   into the FAQPage JSON-LD in index.html — keep the two in sync. */
const HOME_FAQ = [
  ['What is a relationship protection pattern?', 'A relationship protection pattern is the automatic strategy you may use when intimacy, conflict, uncertainty, or fear of rejection makes you feel emotionally exposed. You may chase, withdraw, scan, fix, adapt, control, rescue, or shut down.'],
  ['Is 8LovePatterns an attachment style quiz?', '8LovePatterns is attachment-inspired, but it is not limited to classic labels like anxious, avoidant, secure, or disorganized. It focuses on the specific role you fall into when love feels unsafe.'],
  ['What is my attachment style?', 'Your attachment style describes how you tend to respond to closeness, distance, trust, dependence, and fear of rejection. 8LovePatterns uses attachment-informed ideas, but it translates them into more specific relationship protection patterns.'],
  ["Why do I get anxious when they don't text back?", 'A delayed reply can feel threatening when your system is sensitive to disconnection. For some people, uncertainty triggers reassurance-seeking, overthinking, testing, or emotional urgency. 8LovePatterns helps you identify what takes over in that moment.'],
  ['Why do I pull away when someone gets close?', 'Pulling away can be a protection strategy. When closeness starts to feel overwhelming, distance can feel like safety. 8LovePatterns helps you understand whether withdrawal is your automatic way of staying protected.'],
  ['Why do I sabotage relationships?', 'Many people do not sabotage love because they do not care. They sabotage when connection starts to feel dangerous, uncertain, or too vulnerable. 8LovePatterns helps you recognize the pattern before it chooses for you.'],
  ['Am I anxious or avoidant?', 'You may recognize anxious or avoidant tendencies, but most people are more nuanced than one label. 8LovePatterns helps identify the specific protection role that appears when attachment, fear, or conflict is activated.'],
  ['Can my relationship pattern change?', 'Yes. Patterns are not life sentences. Awareness, emotional regulation, secure relationships, therapy, and consistent practice can help people respond differently over time.'],
  ['Is this a love language test?', 'No. Love language tests focus on how you give and receive affection. 8LovePatterns focuses on what protects you when affection feels uncertain, threatened, or unsafe.'],
  ['Is 8LovePatterns scientifically proven?', '8LovePatterns is science-backed and research-informed. It is grounded in established psychological research on adult attachment, emotion regulation, schema patterns, and defensive responses. The 8LovePatterns test itself is not a clinical diagnosis and does not replace therapy.'],
];

function HomeFAQ() {
  return (
    <section className="lp-hm-faq">
      <div className="lp-hm-faq-card">
        <h2 className="lp-hm-h2 lp-hm-faq-h">Relationship<br/>Pattern FAQ.</h2>
        <div className="lp-hm-faq-list">
          {HOME_FAQ.map(([q, a], i) => (
            <details key={q} className="lp-hm-faq-item" open={i === 0}>
              <summary>
                <span>{q}</span>
                <Icon name="chevron-down" size={18}/>
              </summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Home({ go }) {
  const nav = testNav(go);
  return (
    <div className="lp-hm">

      {/* ---- HERO ---- */}
      <section className="lp-hm-hero">
        <div className="lp-hm-hero-inner">
          <HeroFloatingCards/>
          <div className="lp-hm-hero-content">
            <HeroMobileRow/>
            <h1 className="lp-hm-title">Stop reliving the<br/>same heartbreak.</h1>
            <HeroStats/>
            <p className="lp-hm-sub">
              Only 5 minutes to get a <span className="lp-hm-coral">"freakishly accurate"</span> description of how your{' '}
              <br/><span className="lp-hm-coral">attachment pattern works</span> and why you do things the way you do.
            </p>
            <div className="lp-hm-cta-row">
              <Button variant="green" size="lg" icon="arrow-right" href="/test" onClick={nav}>Take the free test</Button>
            </div>
            <HeroStars/>
          </div>
        </div>
      </section>

      {/* ---- THE EIGHT PATTERNS ---- */}
      <section className="lp-hm-patterns">
        <div className="lp-hm-wrap">
          <h2 className="lp-hm-h2">Meet the eight<br/>patterns that<br/>take over.</h2>
          <p className="lp-hm-h2-sub">One of them runs your loop. Five minutes to find out which.</p>
          <div className="lp-hm-pgrid">
            {window.ARCHETYPES.map(a => <PatternCard key={a.code} arch={a} go={go}/>)}
          </div>
          <div className="lp-hm-cta-row">
            <a className="lp-hm-outline" href="/patterns"
              onClick={(e) => { if (e.metaKey || e.ctrlKey || e.shiftKey || e.button) return; e.preventDefault(); go('profils'); }}>
              Explore all 8 patterns →
            </a>
          </div>
        </div>
      </section>

      {/* ---- MINI ARTICLES ---- */}
      <MiniArticles go={go}/>

      {/* ---- SCIENCE ---- */}
      <section className="lp-hm-science">
        <div className="lp-hm-wrap">
          <h2 className="lp-hm-h2">Built on 50 years<br/>of attachment<br/>research.</h2>
          <p className="lp-hm-h2-sub">
            <span className="lp-hm-teal">Not a diagnosis, a mirror.</span>{' '}
            <span className="lp-hm-grey">Educational self-reflection tool · Not a clinical diagnosis.</span>
          </p>
          <div className="lp-hm-sci-grid">
            {SCIENCE_CARDS.map(c => (
              <div key={c.t} className="lp-hm-sci-card">
                <h3>{c.t}</h3>
                <p>{c.d}</p>
              </div>
            ))}
          </div>
          <div className="lp-hm-refs">
            <ol>
              <li id="ref-1">Mikulincer, M. &amp; Shaver, P. R. (2016). <i>Attachment in Adulthood: Structure, Dynamics, and Change.</i></li>
              <li id="ref-2">Bowlby, J. (1969). <i>Attachment and Loss, Vol. 1.</i></li>
              <li id="ref-3">Hazan, C. &amp; Shaver, P. (1987). <i>Romantic love conceptualized as an attachment process.</i></li>
              <li id="ref-4">Fraley, R. C. &amp; Waller, N. G. (1998). <i>Adult attachment patterns: A test of the typological model.</i></li>
            </ol>
            <p>8LovePatterns is educational and is not a clinical diagnosis.</p>
          </div>
          <div className="lp-hm-cta-row">
            <Button variant="green" size="lg" icon="arrow-right" href="/test" onClick={nav}>Take the free test</Button>
          </div>
        </div>
      </section>

      {/* ---- FAQ ---- */}
      <HomeFAQ/>
    </div>
  );
}
Object.assign(window, { Home });
