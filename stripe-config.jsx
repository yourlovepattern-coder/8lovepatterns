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
  priceLabel: '9 \u20AC',
  priceCompareLabel: '',        // e.g. '19 \u20AC' for a crossed-out anchor price. '' = none.
  currency: 'eur',

  /* MVP test switch. true = simulate (no Stripe, no email). false = go live.
     Flip to false ONLY once the Netlify functions are deployed (SETUP_EMAIL.md). */
  simulate: false,

  /* Where the buyer lands after payment (instant on-screen report). Also use
     this exact page as the success URL on the Stripe Payment Link. */
  successUrl: 'premium-report.html',

  /* Endpoint that stashes the pre-built PDF for the robot to email. */
  saveEndpoint: '/api/save-report',

  /* localStorage flag set the moment a purchase starts (soft, MVP-only). */
  unlockKey: 'lovepattern_premium',

  /* ----  ONE LINK FOR ALL PATTERNS  --------------------------------------
     You chose a single Payment Link reused for every profile (same 9 EUR, the
     report adapts to the buyer). Paste it here.
     NOTE: the value below is your Stripe TEST link, kept so we can test the
     whole robot end to end. Before real launch, replace it with your LIVE
     link (buy.stripe.com/... without "test_"). */
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

/* Build the buyer's report as a PDF, in an isolated iframe that loads
   premium-report.html?gen=1. The iframe renders the report from localStorage
   (same origin, so the buyer's result is available) and posts the PDF base64
   back. Isolation avoids any global-name clash with the main app scripts. */
LP_STRIPE._buildReportPdfViaIframe = function () {
  return new Promise(function (resolve) {
    var done = false;
    var ifr = document.createElement('iframe');
    function finish(val) {
      if (done) return; done = true;
      try { window.removeEventListener('message', onMsg); } catch (e) {}
      try { ifr.remove(); } catch (e) {}
      resolve(val || null);
    }
    function onMsg(e) {
      if (e && e.data && e.data.type === 'lp_pdf') finish(e.data.pdf);
    }
    window.addEventListener('message', onMsg);
    ifr.setAttribute('aria-hidden', 'true');
    ifr.style.cssText = 'position:fixed;left:-100000px;top:0;width:900px;height:1400px;border:0;opacity:0;pointer-events:none;';
    ifr.src = 'premium-report.html?gen=1';
    document.body.appendChild(ifr);
    setTimeout(function () { finish(null); }, 25000); // safety net
  });
};

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
LP_STRIPE.checkout = async function (code) {
  const url = this.resolveLink(code);

  /* Analytics: record purchase intent before we navigate away. */
  let txid = '';
  try {
    const items = (window.LP_reportItem) ? [window.LP_reportItem(code)] : [];
    txid = 'lp_' + Date.now() + '_' + Math.random().toString(36).slice(2, 8);
    localStorage.setItem('lp_txid', txid);
    localStorage.setItem('lp_tx_code', code || '');
    if (window.LP_track) {
      window.LP_track('add_to_cart',    { currency: 'EUR', value: 9, items: items });
      window.LP_track('begin_checkout', { currency: 'EUR', value: 9, items: items, transaction_id: txid });
    }
  } catch (e) {}

  /* SIMULATION or no link: go straight to the on-screen report (no robot). */
  if (this.simulate || !url) {
    console.info('[8LovePatterns] ' + (this.simulate
      ? 'Simulation mode ON. Set LP_STRIPE.simulate=false (and deploy the functions) to go live.'
      : 'No Stripe link configured. Simulating payment.'));
    this.markUnlocked(code);
    window.location.href = this.successUrl;
    return false;
  }

  /* LIVE: pre-build the report for email, stash it, then hand off to Stripe. */
  const overlay = this._showPreparing();
  try {
    const resultData = (window.LP_loadResultData && window.LP_loadResultData())
      || lpSafeParse(localStorage.getItem('lovepattern_resultData'));
    if (resultData) {
      const id = 'rep_' + Date.now() + '_' + Math.random().toString(36).slice(2, 8);
      const arch = window.archByCode ? window.archByCode(code) : null;
      const lang = (document.documentElement.lang === 'fr' || localStorage.getItem('lp_lang') === 'fr') ? 'fr' : 'en';
      const pdf = await this._buildReportPdfViaIframe();
      if (pdf) {
        await fetch(this.saveEndpoint, {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({ id: id, pdf: pdf, lang: lang, profileName: arch ? arch.name : '' }),
        }).catch(function () {});
        this.markUnlocked(code);
        const sep = url.indexOf('?') === -1 ? '?' : '&';
        window.location.href = url + sep + 'client_reference_id=' + encodeURIComponent(id);
        return true;
      }
    }
  } catch (e) {
    console.warn('[8LovePatterns] Could not pre-build the report for email; continuing to payment.', e);
  }

  /* Fallback: proceed to Stripe without a stashed report (the robot will just
     skip the attachment for this one). Payment still works. */
  this.markUnlocked(code);
  if (overlay) overlay.remove();
  window.location.href = url;
  return true;
};

window.LP_STRIPE = LP_STRIPE;
