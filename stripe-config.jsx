/* ============================================================================
   8LovePatterns  .  PREMIUM CHECKOUT  +  AUTOMATIC EMAIL DELIVERY
   ----------------------------------------------------------------------------
   Purchase flow:

      free result  ->  "Get my full report"  ->  offer page (sales)
      ->  checkout():
           1. build the buyer's personalized report as a PDF (in the browser)
           2. stash it server-side (POST /api/save-report) under a random id
           3. hand off to Stripe, passing that id as client_reference_id
      ->  Stripe hosted checkout (buyer pays + types their email)
      ->  on success, Stripe calls /api/stripe-webhook (the "robot"), which
          fetches the stashed PDF and emails it to the buyer (see
          netlify/functions/ + email-template.mjs). Buyer also lands back on
          premium-report.html for the instant on-screen version.

   ----  TWO MODES  ----------------------------------------------------------
   . SIMULATION (default): simulate:true. The pay button skips Stripe and the
     robot, and opens the report directly. Use it to test the funnel with no
     Stripe / no email setup.
   . LIVE: simulate:false + a real Payment Link in `linkAll` (or per code in
     `links`). Requires the Netlify functions deployed and the env vars set
     (see SETUP_EMAIL.md). On the Payment Link, set the success URL to your
     deployed premium-report.html.

   Setup walkthroughs: STRIPE_SETUP.md (payment) and SETUP_EMAIL.md (robot).
   ============================================================================ */

const LP_STRIPE = {
  /* Price shown on the offer page (display only). The real charge is whatever
     the Stripe Payment Link itself says. Keep them in sync. */
  priceLabel: '$29',
  priceCompareLabel: '',        // e.g. '$49' for a crossed-out anchor price. '' = none.
  currency: 'usd',             // base presentment currency; Stripe Adaptive Pricing localizes at checkout.

  /* MVP test switch. true = simulate (no Stripe, no email). false = go live.
     Flip to false ONLY once the Netlify functions are deployed (SETUP_EMAIL.md). */
  simulate: false,

  /* Where the buyer lands after payment (instant on-screen report). Also use
     this exact page as the success URL on the Stripe Payment Link. */
  successUrl: 'rapport.html',

  /* Endpoint that stashes the pre-built PDF for the robot to email. */
  saveEndpoint: '/api/save-report',

  /* localStorage flag set the moment a purchase starts (soft, MVP-only). */
  unlockKey: 'lovepattern_premium',

  /* ----  ONE LINK FOR ALL PATTERNS  --------------------------------------
     You chose a single Payment Link reused for every profile (same 9 EUR, the
     report adapts to the buyer). Paste it here.
     LIVE link in use (real money). The previous TEST link was
     buy.stripe.com/test_00w14ndsb67I1Yyb3V6oo00 if you ever need to test again. */
  linkAll: 'https://buy.stripe.com/3cIdR93RBfIi32C2xp6oo01',

  /* Optional: a different link per pattern (overrides linkAll for that code).
     Leave empty unless you want per-profile Stripe stats. */
  links: {
    inc: '', gue: '', fug: '', alc: '', sau: '', mir: '', cam: '', bas: '',
    // anc (The Anchor) is the secure center. It is not sold.
  },
};

/* Resolve the link to use for a given pattern code. */
LP_STRIPE.resolveLink = function (code) {
  const perCode = this.links && this.links[code];
  if (perCode && /^https?:\/\//.test(perCode)) return perCode;
  if (this.linkAll && /^https?:\/\//.test(this.linkAll)) return this.linkAll;
  return '';
};
/* True once a usable https link exists for this pattern. */
LP_STRIPE.isConfigured = function (code) { return !!this.resolveLink(code); };

/* Record that a purchase was started (soft, optimistic, MVP-only). */
LP_STRIPE.markUnlocked = function (code) {
  try { localStorage.setItem(this.unlockKey, JSON.stringify({ paid: true, code: code || null, ts: Date.now() })); } catch (e) {}
};
LP_STRIPE.isUnlocked = function () {
  try { const v = JSON.parse(localStorage.getItem(this.unlockKey) || 'null'); return !!(v && v.paid); } catch (e) { return false; }
};

/* ---- helpers ----------------------------------------------------------- */
function lpSafeParse(s){ try { return JSON.parse(s); } catch (e) { return null; } }

/* Full-screen "preparing" overlay shown while the PDF is built. */
LP_STRIPE._showPreparing = function () {
  try {
    const lang = (document.documentElement.lang === 'fr' || localStorage.getItem('lp_lang') === 'fr') ? 'fr' : 'en';
    const msg = lang === 'fr' ? 'Pr\u00e9paration de ton rapport s\u00e9curis\u00e9\u2026' : 'Preparing your secure report\u2026';
    const o = document.createElement('div');
    o.setAttribute('data-lp-preparing', '');
    o.style.cssText = 'position:fixed;inset:0;z-index:99999;background:rgba(33,28,70,.72);backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);display:flex;align-items:center;justify-content:center;';
    o.innerHTML =
      '<div style="background:#fff;border-radius:18px;padding:24px 30px;font-family:var(--font-body),system-ui,sans-serif;color:#211C46;font-weight:600;font-size:15px;display:flex;align-items:center;gap:14px;box-shadow:0 24px 56px -16px rgba(33,28,70,.45);">' +
        '<span style="width:20px;height:20px;border:3px solid #EAE3D7;border-top-color:#EE6352;border-radius:50%;display:inline-block;animation:lpspin .8s linear infinite;"></span>' +
        '<span>' + msg + '</span>' +
      '</div>' +
      '<style>@keyframes lpspin{to{transform:rotate(360deg)}}</style>';
    document.body.appendChild(o);
    return o;
  } catch (e) { return null; }
};

/* ---- the buy button --------------------------------------------------- */
/* LEGACY ENTRYPOINT, now delegated to the secure v2 flow.
   The old Payment-Link + premium-report.html PDF path was the original content
   leak (paid content rendered client-side). Every buy button (sales page,
   result screen) now routes through the server-gated Checkout Session: the
   browser posts its test result, gets a Stripe URL, pays, and only then does
   /api/get-report assemble and return the paid content. `code` is ignored: the
   report is built from the stored result_v2, which already carries the profile. */
LP_STRIPE.checkout = function (code) {
  return this.checkoutSession();
};

window.LP_STRIPE = LP_STRIPE;

/* ============================================================================
   SECURE FLOW (v2)  .  server-created Checkout Session + server-gated report
   ----------------------------------------------------------------------------
   Replaces the static Payment Link for the new block-assembled report. The
   browser never receives paid content: it posts its test result, gets a Stripe
   URL, pays, and lands on rapport.html?session_id=... where /api/get-report
   verifies the payment and returns ONLY this person's report.

   Wiring: the test-result screen persists the new-engine result under
   'lovepattern_result_v2', then the "Recevoir mon plan" CTA calls
   LP_STRIPE.checkoutSession(). See RAPPORT_SETUP.md.
   ============================================================================ */
LP_STRIPE.RESULT_V2_KEY = 'lovepattern_result_v2';
LP_STRIPE.createEndpoint = '/api/create-checkout';

LP_STRIPE.loadResultV2 = function () {
  try { return JSON.parse(localStorage.getItem(this.RESULT_V2_KEY) || 'null'); } catch (e) { return null; }
};

LP_STRIPE.checkoutSession = async function (result) {
  result = result || this.loadResultV2();
  const lang = (document.documentElement.lang === 'fr' || localStorage.getItem('lp_lang') === 'fr') ? 'fr' : 'en';

  /* Analytics: purchase intent before navigating away. */
  try {
    if (window.LP_track) window.LP_track('begin_checkout', { currency: 'USD', value: 29 });
  } catch (e) {}
  /* PostHog (cookieless, non-blocking). No invented amount: we only attach the
     price label actually shown on screen, if any. The real charged amount is
     captured later, on purchase_completed, from the Stripe session. */
  try {
    if (window.LP_PH) {
      var phProps = {};
      if (this.priceLabel) phProps.displayed_price = this.priceLabel;
      window.LP_PH('checkout_started', phProps);
    }
  } catch (e) {}

  /* SIMULATION: no Stripe configured. Open the report in demo mode. */
  if (this.simulate || !result) {
    console.info('[LovePattern] Simulation or no result. Opening demo report.');
    window.location.href = 'rapport.html?demo=1';
    return false;
  }

  const overlay = this._showPreparing ? this._showPreparing() : null;
  try {
    const res = await fetch(this.createEndpoint, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ result: result, lang: lang }),
    });
    const data = await res.json();
    if (data && data.url) { window.location.href = data.url; return true; }
    console.error('[LovePattern] create-checkout returned no url:', data);
  } catch (e) {
    console.error('[LovePattern] create-checkout failed:', e);
  }
  if (overlay) overlay.remove();
  /* Fallback: keep the buyer on the free report rather than stranding them. */
  window.location.href = 'rapport.html?free=1';
  return false;
};
