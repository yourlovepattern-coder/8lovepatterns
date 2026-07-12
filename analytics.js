/* ============================================================================
   8LovePatterns . Analytics layer  (Google Analytics 4 + Google Ads)
   ----------------------------------------------------------------------------
   This single file is the ONLY place 8LovePatterns talks to Google Analytics.
   Every screen and button routes through window.LP_track / window.LP_pageview,
   so the rest of the app never has to touch gtag directly.

   To switch tracking ON: open index.html and premium-report.html, find the
   block that says "PASTE YOUR MEASUREMENT ID", and replace G-XXXXXXXXXX with
   your real GA4 id. Nothing here needs to change.

   Full step by step walkthrough: GA_SETUP.md (same folder).
   ============================================================================ */

(function () {
  var LP = (window.LP_ANALYTICS = window.LP_ANALYTICS || {});

  /* Price of the premium report. Keep in sync with stripe-config.jsx priceLabel.
     Used as the "value" of add_to_cart / begin_checkout / purchase so Google can
     compute revenue and the return on your ad spend (ROAS). */
  LP.reportPrice = 29;
  LP.currency = 'USD';

  /* True only when a real GA4 id has been pasted in the page. */
  function gaConfigured() {
    return typeof window.LP_GA_ID === 'string' && window.LP_GA_ID.indexOf('G-') === 0 && !/X{4,}/.test(window.LP_GA_ID);
  }

  /* ---- core event sender. Safe no-op when GA is not configured. ---------- */
  window.LP_track = function (name, params) {
    params = params || {};
    try {
      if (typeof window.gtag === 'function') window.gtag('event', name, params);
    } catch (e) {}
    if (window.LP_GA_DEBUG) {
      console.log('%c[GA] ' + name, 'color:#6B5CCB;font-weight:700', params);
    }
  };

  /* ---- single page app "page view" -------------------------------------- */
  /* The app never reloads, so we tell GA about each screen change ourselves. */
  var ROUTE_TITLES = {
    home: 'Home', intro: 'Test', quiz: 'Test', analyse: 'Analyzing',
    result: 'Free result', profils: 'All patterns', profil: 'Pattern profile',
    vente: 'Sales / Offer', premium: 'Premium info', methode: 'Method', science: 'Science'
  };
  window.LP_pageview = function (route, extra) {
    var title = ROUTE_TITLES[route] || route || 'home';
    var path = '/' + (route || 'home');
    try {
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'page_view', Object.assign({
          page_title: '8LovePatterns . ' + title,
          page_location: location.origin + location.pathname + '#' + (route || 'home'),
          page_path: path
        }, extra || {}));
      }
    } catch (e) {}
    if (window.LP_GA_DEBUG) console.log('%c[GA] page_view ' + path, 'color:#2C7E91;font-weight:700');
  };

  /* ---- ecommerce item builder ------------------------------------------- */
  /* Returns the GA4 "item" object describing a premium report for a pattern. */
  window.LP_reportItem = function (code) {
    var arch = (window.archByCode && code) ? window.archByCode(code) : null;
    return {
      item_id: 'report_' + (code || 'unknown'),
      item_name: 'Premium report' + (arch ? ' . ' + arch.name : ''),
      item_category: 'premium_report',
      item_variant: code || 'unknown',
      price: LP.reportPrice,
      quantity: 1
    };
  };

  /* ---- automatic click tracking ----------------------------------------- */
  /* Captures clicks on every button / link so you can see what visitors press,
     without hand tagging each element. Sends a "ui_click" event carrying the
     button label and the screen it happened on. Add data-track="my label" to
     any element to override the auto label. */
  function labelOf(el) {
    var t = (el.getAttribute && (el.getAttribute('data-track') || el.getAttribute('aria-label'))) || '';
    if (!t) t = (el.textContent || '').trim();
    return t.replace(/\s+/g, ' ').slice(0, 80);
  }
  document.addEventListener('click', function (e) {
    var el = e.target;
    var hit = el && el.closest && el.closest('button, a, [role=button]');
    if (!hit) return;
    var label = labelOf(hit);
    if (!label) return;
    var params = {
      link_text: label,
      element: hit.tagName.toLowerCase(),
      screen: window.LP_ROUTE || (document.body && document.body.getAttribute('data-lp-route')) || 'report'
    };
    if (hit.tagName.toLowerCase() === 'a') params.link_url = hit.getAttribute('href') || '';
    window.LP_track('ui_click', params);
  }, true);

  if (window.LP_GA_DEBUG && !gaConfigured()) {
    console.log('%c[GA] debug ON but no Measurement ID set yet. Events are logged here but not sent. See GA_SETUP.md.', 'color:#C2410C');
  }
})();
