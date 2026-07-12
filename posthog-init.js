/* ============================================================================
   8LovePatterns  .  PostHog (first-party proxy, EU, consent-gated)
   ----------------------------------------------------------------------------
   Single shared loader for every page. Include once in the <head>:

       <script src="posthog-init.js"></script>

   . First-party: served through the Netlify reverse proxy at /ingest (see
     netlify.toml), so tracker blockers don't cut analytics.
   . cookieless_mode:'on_reject' — two states gated by a thin consent banner:
       BEFORE any choice, and AFTER "Decline":
         anonymous + cookieless. PostHog stores NOTHING in the browser, no IP,
         no session replay. The visitor is still counted via a privacy-
         preserving hash computed on PostHog's servers. Funnel events still fire,
         anonymously.
       AFTER "Accept" (posthog.opt_in_capturing()):
         full tracking — persistent identity, country/geo, and session replay.
   . Session replay is enabled SDK-side with default input masking kept
     (maskAllInputs:true → no sensitive text captured). It only runs once the
     visitor opts in (cookieless mode has no storage to record into).
   . posthog.identify() is NEVER called anywhere in this codebase.

   Loader snippet below is the official posthog-js HTML snippet, verbatim. This
   file adds window.LP_PH(name, props) (safe event sender) and a minimal consent
   banner. Everything is non-blocking and never throws: if PostHog fails to load,
   tracking is a silent no-op and the site/checkout are unaffected.
   ============================================================================ */

!(function (t, e) {
  var o, n, p, r;
  e.__SV ||
    ((window.posthog = e),
    (e._i = []),
    (e.init = function (i, s, a) {
      function g(t, e) {
        var o = e.split(".");
        (2 == o.length && ((t = t[o[0]]), (e = o[1])),
          (t[e] = function () {
            t.push([e].concat(Array.prototype.slice.call(arguments, 0)));
          }));
      }
      (((p = t.createElement("script")).type = "text/javascript"),
        (p.crossOrigin = "anonymous"),
        (p.async = !0),
        (p.src =
          s.api_host.replace(".i.posthog.com", "-assets.i.posthog.com") + "/static/array.js"),
        (r = t.getElementsByTagName("script")[0]).parentNode.insertBefore(p, r));
      var u = e;
      for (
        void 0 !== a ? (u = e[a] = []) : (a = "posthog"),
          u.people = u.people || [],
          u.toString = function (t) {
            var e = "posthog";
            return ("posthog" !== a && (e += "." + a), t || (e += " (stub)"), e);
          },
          u.people.toString = function () {
            return u.toString(1) + ".people (stub)";
          },
          o =
            "init capture register register_once register_for_session unregister unregister_for_session getFeatureFlag getFeatureFlagResult isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey getNextSurveyStep identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty createPersonProfile opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing debug".split(
              " ",
            ),
          n = 0;
        n < o.length;
        n++
      )
        g(u, o[n]);
      e._i.push([i, s, a]);
    }),
    (e.__SV = 1));
})(document, window.posthog || []);

try {
  posthog.init("phc_vd3omJWY4gS4mVk3iqS8dX6TMLu5uQGdfGfbyM7G8fNJ", {
    api_host: "https://8lovepatterns.com/ingest",   // first-party reverse proxy (netlify.toml)
    ui_host: "https://eu.posthog.com",
    defaults: "2026-05-30",
    cookieless_mode: "on_reject",                    // anonymous until the visitor accepts
    /* Session replay on, default input masking kept (no sensitive text). Replay
       only records after opt-in (cookieless mode has nowhere to store it). */
    disable_session_recording: false,
    session_recording: { maskAllInputs: true },
  });
} catch (e) {
  /* never let analytics break the page */
}

/* Safe event sender used across the funnel. Silent no-op if PostHog is absent
   or fails. Never throws. Do NOT add identify() — forbidden in this mode. */
window.LP_PH = function (name, props) {
  try {
    if (window.posthog && typeof window.posthog.capture === "function") {
      window.posthog.capture(name, props || {});
    }
  } catch (e) {}
};

/* ============================================================================
   CONSENT BANNER  .  thin, non-intrusive, bilingual (FR/EN)
   ----------------------------------------------------------------------------
   "Accept" -> posthog.opt_in_capturing() (full tracking + replay). "Decline" ->
   nothing: cookieless_mode:'on_reject' keeps PostHog anonymous + cookieless
   (visitor still counted, no storage, no IP, no replay). The choice is stored in
   a strictly-necessary localStorage key (allowed without consent) so the banner
   never reappears. Fully wrapped in try/catch — can never block the page.
   ============================================================================ */
(function () {
  var CONSENT_KEY = "lp_consent"; // 'accepted' | 'rejected'

  function getConsent() { try { return localStorage.getItem(CONSENT_KEY); } catch (e) { return null; } }
  function setConsent(v) { try { localStorage.setItem(CONSENT_KEY, v); } catch (e) {} }
  function optInFull() { try { if (window.posthog && window.posthog.opt_in_capturing) window.posthog.opt_in_capturing(); } catch (e) {} }

  /* Re-apply a prior "accept" on every load — cookieless mode doesn't persist
     PostHog's own consent, so we restore it from our key. */
  try { if (getConsent() === "accepted") optInFull(); } catch (e) {}

  function lang() {
    try {
      var l = localStorage.getItem("lp_lang") || document.documentElement.lang || "en";
      return /^fr/i.test(l) ? "fr" : "en";
    } catch (e) { return "en"; }
  }

  var TXT = {
    fr: { msg: "Nous utilisons PostHog pour la mesure d’audience de ce site. Tu peux accepter ou refuser.", accept: "Accepter", reject: "Refuser", aria: "Consentement à la mesure d’audience" },
    en: { msg: "Nothing here is tracked to you personally. We just want to know which pages actually help people, so we can write more of those.", accept: "Accept", reject: "Decline", aria: "Audience measurement consent" },
  };

  function buildBanner() {
    try {
      if (getConsent()) return;                       // already decided: never show again
      if (!document.body) { document.addEventListener("DOMContentLoaded", buildBanner, { once: true }); return; }
      if (document.getElementById("lp-consent")) return;

      var t = TXT[lang()];
      var bar = document.createElement("div");
      bar.id = "lp-consent";
      bar.setAttribute("role", "dialog");
      bar.setAttribute("aria-label", t.aria);
      bar.style.cssText = [
        "position:fixed", "left:12px", "right:12px", "bottom:12px", "z-index:2147483000",
        "max-width:760px", "margin:0 auto", "box-sizing:border-box",
        "display:flex", "align-items:center", "justify-content:center", "gap:14px", "flex-wrap:wrap",
        "background:var(--paper,#FBF7F1)", "color:var(--ink,#211C46)",
        "border:1px solid var(--hairline,#EAE3D7)", "border-radius:14px",
        "box-shadow:0 12px 34px -12px rgba(33,28,70,.34)",
        "padding:12px 16px",
        "font-family:var(--font-body,system-ui,sans-serif)", "font-size:13.5px", "line-height:1.45",
      ].join(";");

      var msg = document.createElement("span");
      msg.textContent = t.msg;
      msg.style.cssText = "flex:1 1 280px;min-width:200px;";

      var btns = document.createElement("div");
      btns.style.cssText = "display:flex;gap:8px;flex-shrink:0;";

      /* Equal visual weight: identical size, padding, and contrast for both buttons. */
      var btnBase = "cursor:pointer;border:none;border-radius:999px;padding:8px 18px;font-weight:700;font-size:13px;font-family:inherit;";

      var reject = document.createElement("button");
      reject.type = "button";
      reject.textContent = t.reject;
      reject.style.cssText = btnBase + "background:var(--ink,#211C46);color:#fff;";

      var accept = document.createElement("button");
      accept.type = "button";
      accept.textContent = t.accept;
      accept.style.cssText = btnBase + "background:var(--corail,#EE6352);color:#fff;";

      function close() { try { bar.remove(); } catch (e) {} }
      accept.addEventListener("click", function () { setConsent("accepted"); optInFull(); close(); });
      reject.addEventListener("click", function () { setConsent("rejected"); close(); });

      btns.appendChild(reject);
      btns.appendChild(accept);
      bar.appendChild(msg);
      bar.appendChild(btns);
      document.body.appendChild(bar);
    } catch (e) {}
  }

  buildBanner();
})();
