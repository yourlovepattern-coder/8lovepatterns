/* 8LovePatterns — homepage, rebuilt from the validated mockup.
   Section order is fixed and exhaustive: hero, the eight patterns, mini
   articles, science, FAQ. Nav and footer live in chrome.jsx. Anything that
   used to sit between these (loop module, anchor module, how-it-works band,
   support band, final CTA) was removed with the redesign — do not re-add a
   section here without a mockup for it.
   Layout classes are all `lp-hm-*` and live in index.html's <style>. */

/* The five gold stars under the hero CTA ship behind this flag. */
const SHOW_HERO_STARS = true;

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
   Measured directly off docs/mockup-home.png (percentages of the hero's own
   width/height — the 1280px "stage" cap from a previous pass is gone, the
   mockup spreads cards from ~12% to ~92% of the FULL window). Every card in
   the mockup is a perfect square; width is a % of hero width and
   aspect-ratio:1 (see .lp-hm-float in index.html) derives the height so
   cards stay square at every viewport width instead of just at 2560px.
   Two constellations, left of the title and right of it, each with
   partial card-on-card overlap — no cards live below the numbers row.
   Files were matched by opening each one and looking at the scene, not by
   filename: butterfly.webp and dance.webp don't correspond to anything in
   the mockup and are dropped from the desktop hero (still used by the
   mobile cluster below, untouched by this pass). The mockup's family-photo
   card (bottom-right, warm indoor scene, 3 people) has no matching asset
   anywhere in assets/hero/ — left out, flagged in the report, nothing
   substituted for it.
   Every card is decorative: alt="" + aria-hidden.
   `dur` / `delay` / `rot` drive the per-card float (see .lp-hm-drift in
   index.html); the delays are all different so no two cards ever move in
   sync. The whole float is disabled under prefers-reduced-motion. */
/* left/top values are the mockup-measured ones EXCEPT where noted — the
   center column is a fixed 640px regardless of window width, so it eats a
   much bigger share of the hero at 1440px than at 2560px, and several cards
   that were clear at 2560 (matching the mockup exactly) intruded on the
   column at 1440. Fixed two ways, verified by measuring both widths rather
   than computing once and assuming: cards near the top of the hero are
   pushed up further, clearing the column vertically regardless of window
   width (robust at any width, since it doesn't depend on the column's
   variable horizontal footprint); flower and puzzle, which sit lower and
   can't reasonably move up without leaving their mockup-matched area, are
   nudged further out horizontally instead. */
const HERO_CARDS = [
  /* left constellation */
  { src: 'couple2.webp', w: '5.63%', top: '22.1%', left: '12.7%', dy: '-11px', r0: '-2deg',  r1: '0deg',   dur: '7.4s', delay: '-0.4s' },
  { src: 'happy.webp',   w: '7.47%', top: '2.5%',  left: '14%',   dy: '-9px',  r0: '0.5deg', r1: '-1deg',  dur: '8.6s', delay: '-3.1s' }, /* top nudged up + left nudged out (was 6.8% / 21.9%): the vertical-only fix pushed it too close to the nav, so this one clears horizontally instead, with extra margin so 1280px clears too */
  { src: 'flower.webp',  w: '5.84%', top: '38.7%', left: '15.5%', dy: '-12px', r0: '-1deg',  r1: '1deg',   dur: '6.5s', delay: '-1.7s' }, /* left nudged out (was 22.7%), extra margin so 1280px clears too */
  /* right constellation */
  { src: 'dance2.webp',                    w: '5.37%', top: '3%',    left: '72.7%', dy: '-8px',  r0: '1deg',    r1: '-0.5deg', dur: '6.9s', delay: '-5.2s' }, /* top nudged up (was 8.7%) — clears the column vertically */
  { src: 'wave.webp',                      w: '5.42%', top: '12.2%', left: '83%',   dy: '-11px', r0: '-1.5deg', r1: '0.5deg', dur: '7.9s', delay: '-0.9s' },
  { src: 'hero-tile-forest-canopy.webp',   w: '4.02%', top: '7.9%',  left: '87.2%', dy: '-10px', r0: '2deg',    r1: '0deg',    dur: '8.1s', delay: '-2.6s' },
];

/* White square cards, each carrying one emoji. Sized as a % of hero width
   too (matching the photo cards' ~4% scale in the mockup), not a fixed px
   size, for the same reason — keeps their clearance from the center column
   consistent across viewport widths instead of just at 2560px. */
const HERO_EMOJI = [
  { src: 'love_comptability.png', w: '4.34%', top: '3%',    left: '27.6%', dy: '-9px',  r0: '2deg',  r1: '-2deg', dur: '7.7s', delay: '-4.8s' }, /* top nudged up (was 18.5%) — clears the column vertically */
  { src: 'coeur_repare.png',      w: '4.21%', top: '3%',    left: '64.6%', dy: '-10px', r0: '-3deg', r1: '1deg',  dur: '6.7s', delay: '-2.2s' }, /* top nudged up (was 11.2%) — clears the column vertically */
  { src: 'puzzle.png',            w: '3.74%', top: '49.4%', left: '78.5%', dy: '-11px', r0: '-2deg', r1: '2deg',  dur: '8.4s', delay: '-1.2s' }, /* left nudged out (was 70.4%), extra margin so 1280px clears too */
];

function heroFloatStyle(c) {
  return {
    width: c.w, top: c.top, left: c.left,
    '--dy': c.dy, '--r0': c.r0, '--r1': c.r1, '--dur': c.dur, '--delay': c.delay,
  };
}

function HeroFloatingCards() {
  return (
    <div className="lp-hm-floats" aria-hidden="true">
      {HERO_CARDS.map(c => (
        <div key={c.src} className="lp-hm-float lp-hm-drift" style={heroFloatStyle(c)}>
          <img src={`assets/hero/${c.src}`} alt="" aria-hidden="true"/>
        </div>
      ))}
      {HERO_EMOJI.map(c => (
        <div key={c.src} className="lp-hm-emoji lp-hm-drift" style={heroFloatStyle(c)}>
          <img src={`assets/emoji/${c.src}`} alt="" aria-hidden="true"/>
        </div>
      ))}
    </div>
  );
}

/* ---- Mobile photo cluster (theliven.com structure, not its style): one
   dominant tile (~55% of screen width) with 5 smaller, rotated satellites
   overlapping its edges, the whole thing capped at ~40% of viewport height.
   Reuses the same hero photos as the desktop float — no new assets. ---- */
const CLUSTER_MAIN = 'couple2.webp';
const CLUSTER_SATELLITES = [
  { src: 'butterfly.webp', w: '26%', top: '4%',  left: '6%',  rot: '-4deg', z: 2 },
  { src: 'flower.webp',    w: '30%', top: '56%', left: '2%',  rot: '3deg',  z: 3 },
  { src: 'happy.webp',     w: '18%', top: '0%',  left: '60%', rot: '4deg',  z: 2 },
  { src: 'dance2.webp',    w: '24%', top: '58%', left: '64%', rot: '-3deg', z: 3 },
  { src: 'wave.webp',      w: '15%', top: '32%', left: '82%', rot: '2deg',  z: 5 },
];

function HeroMobileCluster() {
  return (
    <div className="lp-hm-cluster" aria-hidden="true">
      {CLUSTER_SATELLITES.map(s => (
        <div key={s.src} className="lp-hm-cluster-sat"
          style={{ width: s.w, top: s.top, left: s.left, transform: `rotate(${s.rot})`, zIndex: s.z }}>
          <img src={`assets/hero/${s.src}`} alt="" aria-hidden="true"/>
        </div>
      ))}
      <div className="lp-hm-cluster-main">
        <img src={`assets/hero/${CLUSTER_MAIN}`} alt="" aria-hidden="true"/>
      </div>
    </div>
  );
}

/* ---- Hero proof row: three numbers, each under its own visual. The
   archetype-avatar stack is gone (corrections pass) — certified2.png alone
   carries the "Built on 50 years" claim. ---- */
function HeroStats() {
  return (
    <div className="lp-hm-stats">
      <div className="lp-hm-stat">
        <div className="lp-hm-stat-vis">
          {/* Wide-format image (3 headshots + badge) — sized on its own,
              not the shared 56px .lp-hm-stat-emoji, or it's unreadable. */}
          <img className="lp-hm-stat-emoji-wide" src="assets/emoji/certified2.png" alt="" aria-hidden="true"/>
        </div>
        <p className="lp-hm-stat-txt">
          Built on<br/>
          <b className="lp-hm-stat-big-sm">50 YEARS</b><br/>
          of attachment research.
        </p>
      </div>

      <div className="lp-hm-stat">
        <div className="lp-hm-stat-vis">
          <img className="lp-hm-stat-emoji" src="assets/emoji/coeur_puzzle.png" alt="" aria-hidden="true"/>
        </div>
        <p className="lp-hm-stat-txt">
          <b className="lp-hm-stat-big">8</b><br/>
          Attachment patterns identified
        </p>
      </div>

      <div className="lp-hm-stat">
        <div className="lp-hm-stat-vis">
          <img className="lp-hm-stat-emoji" src="assets/emoji/anchor_2693.png" alt="" aria-hidden="true"/>
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
    text: 'The Anchor measures how deep your defense runs. The earlier you catch the signs, the more of your reaction stays yours.',
  },
  {
    img: 'mini_blog_02.webp',
    label: 'New habits',
    title: "Your pattern doesn't define you",
    text: 'Your defenses were never the enemy. They kept something safe once, and accepting that is where movement usually starts.',
  },
  {
    img: 'mini_blog_03.webp',
    label: 'New habits',
    title: 'Move at your own pace',
    text: "Your answers shape a plan built around your profile, not a template. Decades of automatic reactions don't unwind overnight, and that's fine.",
  },
];

function MiniArticles({ go }) {
  const nav = testNav(go);
  return (
    <section className="lp-hm-mini">
      {MINI_ARTICLES.map(a => (
        <article key={a.title} className="lp-hm-mini-card">
          <img className="lp-hm-mini-bg" src={`assets/mini/${a.img}`} alt="" aria-hidden="true"/>
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

      {/* ---- HERO ----------------------------------------------------------
          HeroFloatingCards is positioned against the full .lp-hm-hero
          section (no width cap — see index.html), a sibling of
          .lp-hm-hero-inner which centers the text column at a fixed 640px
          regardless of window width. Children of .lp-hm-hero-content use a
          flex `order` so the mobile breakpoint can reflow to
          cluster/title/sub/cta/stats without touching the desktop order
          (title/stats/sub/cta/stars) or duplicating markup. */}
      <section className="lp-hm-hero">
        <HeroFloatingCards/>
        <div className="lp-hm-hero-inner">
          <div className="lp-hm-hero-content">
            <HeroMobileCluster/>
            <h1 className="lp-hm-title">Attachment Style Test:<br/>Stop Reliving the Same Heartbreak</h1>
            <HeroStats/>
            <p className="lp-hm-sub">
              Only 5 minutes to get a <span className="lp-hm-coral">description many people say hits closer than they expected</span> of how your{' '}
              <br/><span className="lp-hm-coral">attachment pattern works</span> and why you do things the way you do.
            </p>
            <div className="lp-hm-cta-row">
              <Button variant="primary" size="lg" icon="arrow-right" href="/test" onClick={nav}>Take the free test</Button>
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
            <Button variant="primary" size="lg" icon="arrow-right" href="/test" onClick={nav}>Take the free test</Button>
          </div>
        </div>
      </section>

      {/* ---- FAQ ---- */}
      <HomeFAQ/>
    </div>
  );
}
Object.assign(window, { Home });
