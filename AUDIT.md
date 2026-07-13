# 8LovePatterns — Full Site Audit (Inventory Only)

Branch: `preprod` · Generated 2026-07-12 · Scope: routes, rendered text, French-leak scan, SEO surface.
**No site files were modified as part of this audit.**

---

## 1. Route inventory

### 1.1 Static HTML files

| Path | Served as | Purpose |
|---|---|---|
| `index.html` | Static shell, no body content (`<div id="root">`) — all content is client-rendered React loaded via ~30 `<script>` tags (React 18.3.1 + Babel standalone, in-browser JSX transpile) | SPA entry point / homepage shell |
| `legal.html` | Static HTML | Terms of Sale / Privacy Policy / Legal Notice page — **all three sections are unpopulated "Content coming soon" placeholders** |
| `rapport.html` | Static HTML shell + heavy inline `<script>` | Post-purchase/post-quiz report delivery page; gates paid content behind Stripe session verification, falls back to demo/free report on error |
| `email-preview.html` | Static HTML, French UI chrome | Internal dev tool previewing the FR/EN order-confirmation email side by side. **Not blocked in robots.txt, no noindex meta, no auth** |
| `blog/index.html` | Static HTML | Blog landing page listing published articles |
| `blog/_article-template.html` | Static HTML, all `{{PLACEHOLDER}}` tokens | Confirmed **template only** — noindexed and disallowed in robots.txt, never published as a real page |
| `blog/why-do-i-push-people-away-when-someone-gets-close/index.html` | Static HTML | The one live, published blog article |

### 1.2 SPA routes (all served via `index.html`, client-rendered React, `App.jsx` state router — no URL changes except the one-time `/test` bootstrap)

| Route (`App.jsx` switch case) | Purpose | Source files | Status |
|---|---|---|---|
| `home` | Landing/marketing homepage | `Home.jsx`, `chrome.jsx`, `sections.jsx`, `ui.jsx`, `lang.jsx` | Live |
| `intro` (deep-linkable at `/test` via `_redirects`) | Entire free-test experience: intro splash → 33-question adaptive quiz → safety screen → free result reveal → $29 paywall offer, all as one internal state machine (chromeless, no Header/Footer) | `test.jsx`, `test_data.jsx`, `test_data_ancre.jsx`, `test_engine.jsx`, `test_result.jsx` | Live — the real product |
| `profils` | Grid/index of all 8 archetypes + the Anchor | `Profile.jsx` | Live |
| `profil` | Full written profile for one archetype | `Profile.jsx`, `content.jsx`, `profiles_content.js` | Live |
| `vente` | Sales/offer page for a specific archetype's paid report → Stripe checkout | `sales.jsx`, `stripe-config.jsx` | Live |
| `methode` | "About the method" / non-clinical positioning page | `pages.jsx` (`Method`) | Live |
| `science` | Research-basis/credibility page, reuses shared FAQ | `pages.jsx` (`Science`), `sections.jsx` | Live |
| `quiz`, `analyse` | Legacy 80-question quiz + "analyzing" loading screen | `flow.jsx`, `items.jsx`, `items_fr.js`, `engine.jsx` | **Dead code** — only reachable from `flow.jsx`'s own `Intro` component, which `App.jsx` never renders. `Analyse` even calls `go('result')`, a route that doesn't exist (falls back to Home). Shipped to the browser bundle but unreachable by any real user action. |
| *(no case)* | 404 / not-found | — | **No dedicated 404 screen exists.** Any unknown route silently falls back to `home` via the switch's `default`. |
| *(hidden dev tool)* | Design-preview tweaks panel | `tweaks.jsx`, `tweaks-panel.jsx` | Rendered unconditionally but returns `null` unless activated by a `postMessage` from a parent frame — never visible to real visitors. |

### 1.3 Cloudflare Pages Functions

| Route | File | Purpose |
|---|---|---|
| `POST /api/create-checkout` | `functions/api/create-checkout.js` | Stashes quiz result in KV, creates Stripe Checkout Session, returns hosted checkout URL |
| `POST /api/get-report-free` | `functions/api/get-report-free.js` | Stateless free-tier report assembly (zones:'free' only) |
| `GET /api/get-report` | `functions/api/get-report.js` | Verifies Stripe payment status server-side, returns full (free+paid) assembled report |
| `POST /api/save-report` | `functions/api/save-report.js` | Stores a client-built PDF (base64) in KV before Stripe redirect |
| `POST /api/stripe-webhook` | `functions/api/stripe-webhook.js` | Verifies Stripe signature, sends order-confirmation email via Resend on `checkout.session.completed` |
| `/ingest/*` | `functions/ingest/[[path]].js` | Reverse proxy to `eu.i.posthog.com` (analytics events) |
| `/ingest/static/*` | `functions/ingest/static/[[path]].js` | Reverse proxy to `eu-assets.i.posthog.com` (PostHog static assets) |

**`netlify/functions/_content/*.js`** (alchimiste/bastion/cameleon/fugitif/guetteur/incendiaire/miroir/sauveur.js) — **not dead code** despite the legacy directory name. Actively imported by `functions/api/get-report.js`, `functions/api/get-report-free.js`, `report-engine/assembler.mjs`, and `tools/build-free-content.mjs`. Only stale is the `netlify/` path name; no actual Netlify handler files exist anymore (referenced only in comments as historical documentation).

**Other legacy/dead content confirmed unreachable in production:** `flow.jsx`, `items.jsx`, `items_fr.js`, `engine.jsx`, and `profiles.js`'s `window.PROFILES` (diverging draft copy, never referenced by any component — loaded on every page load via `index.html:273` but never read, a dead ~110KB payload). `content/*.txt` files are raw French PDF-extract source, confirmed never imported by any JS.

---

## 2. Rendered text dump

### 2.1 Static pages

#### `index.html`
- Title: `8LovePatterns: Free Relationship Pattern Test | Attachment-Inspired Quiz`
- No visible body text (SPA shell). Contains a 10-Q&A FAQPage JSON-LD block (English, crawlable, not directly visible): "What is a relationship protection pattern?", "Is 8LovePatterns an attachment style quiz?", "What is my attachment style?", "Why do I get anxious when they don't text back?", "Why do I pull away when someone gets close?", "Why do I sabotage relationships?", "Am I anxious or avoidant?", "Can my relationship pattern change?", "Is this a love language test?", "Is 8LovePatterns scientifically proven?"
- Loads `items_fr.js` (French quiz content) and GA4 with placeholder ID `G-XXXXXXXXXX` (unconfigured) unconditionally.

#### `legal.html`
- H1 "Legal"; intro "Everything about how 8LovePatterns is sold, how your data is handled, and who is behind the site. Plain language wherever the law allows it."; badge "Last updated: July 2026"
- Nav: "Terms of Sale" / "Privacy Policy" / "Legal Notice" (in-page anchors `#terms`/`#privacy`/`#notice`, English only, no French version)
- Section 1 "Terms of Sale": *"Content coming soon. This section will cover: what you're buying, pricing and payment, instant delivery, your right of withdrawal and how it interacts with immediate access, our 7-day guarantee, and how to reach us."*
- Section 2 "Privacy Policy": *"Content coming soon. This section will cover: the data collected (email, questionnaire answers, payment handled by Stripe), the services we rely on, retention periods, and your rights under GDPR."*
- Section 3 "Legal Notice": *"Content coming soon. This section will identify the publisher (ROWV AND CO), the publication director, registration details, contact information, and the hosting provider."*
- Footer: "© 2026 8LovePatterns · ROWV AND CO" / "Back to 8lovepatterns.com"

#### `rapport.html`
- Static chrome: "LovePattern" (header), "Print", "Retake the test", "Loading your report…", "Legal" (footer link)
- Dynamically injected (inline script): "What comes next is your plan.", "The move that lifts you from your level, your second mechanism, the compatibility, and the reading chosen for exactly where you are. Assembled on the server, delivered only after payment.", "Get my plan, $29", "We couldn't find your report", "Retake the test to generate your report."
- On error/demo fallback: loads bundled `demo/rapport-miroir-p2.json` (hardcoded "Miroir"/"Mirror" demo report) with zero visible error message to the user.

#### `email-preview.html` (internal dev tool, French UI)
- H1 "Email de confirmation"; subtitle "Aperçu fidèle du mail que le client reçoit après paiement, avec son rapport en PDF joint."
- Column headers "🇫🇷 Français" / "🇬🇧 English"; label "Objet :" / "Subject: "
- Renders both language variants of the transactional email via `email-template.mjs` (`buildOrderEmail`), sample profile names "Le Fugitif" (fr) / "The Runaway" (en)

#### `blog/index.html`
- H1 "The 8LovePatterns Blog"; intro "Plain-language writing on attachment, relationship patterns, and the protective habits that take over when love feels unsafe. Grounded in the same research behind the test."
- Post entry: "July 7, 2026" / "Why Do I Push People Away When Someone Gets Close?" / "Why the urge to create distance shows up right when a relationship starts to feel real, where the pattern comes from, and whether it can change." / "Read the article →"
- Footer: "Back to 8lovepatterns.com" / "© 2026 8LovePatterns · ROWV AND CO"

#### `blog/_article-template.html`
- Confirmed unpublished template — all body content is `{{PLACEHOLDER}}` tokens. Static chrome only: "8LovePatterns", "Home" / "Blog" breadcrumb, "Frequently asked questions", "References", "← All articles", "Back to 8lovepatterns.com", "© 2026 8LovePatterns · ROWV AND CO"

#### `blog/why-do-i-push-people-away-when-someone-gets-close/index.html`
Full published article (English, long-form). Structure: H1 "Why Do I Push People Away When Someone Gets Close?" → byline → 7 sections ("The distancing usually starts before anything goes wrong", "What pushing people away actually looks like", "Where the pattern comes from", "Why it feels like a choice when it isn't", "Pushing people away is not the same as not wanting closeness", "Can this pattern actually change?", "Seeing your specific version of the pattern") → CTA "Take the free test" (→ `/test`) → 4-item FAQ → disclaimer "This article is educational and is not a clinical diagnosis. If your relationship patterns are causing you distress, a licensed therapist can help you work with them directly." → 4 academic references (Bowlby 1969; Mikulincer & Shaver 2016; Roisman et al. 2002; Fraley & Waller 1998).
- **Note:** mid-article image is an unrendered placeholder box (`.bl-fig-ph`) — the real `<img>` is commented out in the live published page.

#### `robots.txt`
```
User-agent: *
Allow: /
Disallow: /rapport
Disallow: /blog/_article-template
[repeated per-bot for GPTBot, OAI-SearchBot, ChatGPT-User, PerplexityBot, ClaudeBot, Claude-Web, Google-Extended]
Sitemap: https://8lovepatterns.com/sitemap.xml
```
`email-preview.html` and `legal.html` are **not** disallowed here.

#### `sitemap.xml`
3 URLs only: `/` (priority 1.0), `/blog/` (0.8), `/blog/why-do-i-push-people-away-when-someone-gets-close/` (0.7).

### 2.2 SPA route text (condensed — full bilingual strings captured during research)

- **`home`**: Hero "You're not bad at love. / You're stuck in a protection pattern." + sub, CTAs "Reveal My Pattern" / "See the 8 Patterns", Promise section, Patterns teaser, Final CTA, CredibilityStrip, ScienceSection (4 research cards), comparison table (vs attachment quiz / love language test / personality test), "SearchedThis" (10 search-style questions), 10-item FAQ, TrustBanner, Header nav ("The Patterns", "Science", "Method"), Footer (see §4 nav/footer), EmpriseTag widget, language picker. Every string has a matched French counterpart via `lang.jsx`.
- **`intro`/`/test`**: TestIntro splash ("Let's start gently." / "Begin"), quiz chrome ("Back", "Private" lock label, progress bar with **no numeric "Question X of Y" text**), SafetyScreen (triggered by a safety-flag intake answer) — includes an **unfilled placeholder**: *"Slot for real resources (helplines, support services, links) to be inserted here by the team."* — no real crisis-line links exist. 33-question adaptive bank (intake, axis statements, mechanism statements, per-archetype "anchor" questions, sabotage statements) fully bilingual. Result/offer screen: tier descriptions, founder science cards (Bowlby, Ainsworth, Hazan & Shaver), offer block "Take the helm back", price **"$29"**, "7-day money-back guarantee", 7-item FAQ, secure-route share screen. **The entire offer/paywall section is English-only, not run through the translation system**, unlike the rest of the bilingual site.
- **`quiz`/`analyse`** (dead code): "Question {i}/{total}" (80 total), "We're reading between your lines.", rotating loading lines, then calls a nonexistent `result` route.
- **`profils`**: "The eight patterns, and the Anchor." + per-archetype tiles.
- **`profil`**: Full bilingual long-form profile per archetype (9 codes: inc, gue, cam, sau, bas, fug, alc, mir, anc), closing upsell "Want to discover your own pattern?" → "Take the free test". Fallback "Content unavailable."
- **`vente`**: 12-item feature checklist, "The complete report", CTA "Get my full report" / FR "Obtenir mon rapport complet". States price as **"Secure 9 € payment"** and fires a `view_item` analytics event with `value: 9, currency: 'EUR'` — **inconsistent with the actual $29 USD charged at checkout** (`stripe-config.jsx`).
- **`methode`**: "A mirror, not a verdict.", 4 principle cards, "What 8LovePatterns is not" list, disclaimer.
- **`science`**: "The research behind your patterns.", validation-limits disclosure, reuses shared FAQ.

---

## 3. French-leak scan

**Context:** the site implements a genuine, working FR/EN toggle (`lang.jsx`, gated on `localStorage.lp_lang`, default `'en'`). The large majority of French strings in the repo are intentional, correctly-gated bilingual content (verified 1:1 key parity in `test_data.jsx`, `test_data_ancre.jsx`, `test.jsx`), not leaks. Below are only the hits that matter for a compliance/QA pass.

### Confirmed user-visible leaks
1. **`functions/api/stripe-webhook.js:64`** — `let lang = 'fr', profileName = '';` — the transactional order-confirmation email defaults to **French** unless the KV order record is found and explicitly has `order.lang === 'en'`. Given the known Cloudflare KV binding gotcha (see project memory), any order-lookup miss silently sends a French confirmation email ("Ton rapport 8LovePatterns est arrivé") to a customer who bought in English. **Highest-severity finding in this audit.**
2. **`email-preview.html`** — entire UI chrome is French ("Email de confirmation", "Aperçu fidèle du mail que le client reçoit après paiement, avec son rapport en PDF joint.", "Objet :"), not blocked by robots.txt, no noindex meta, no auth gate — publicly reachable if deployed as-is.

### Latent risk (currently mitigated, backwards default direction)
3. `functions/api/create-checkout.js:61` — `body.lang === 'en' ? 'en' : 'fr'` — feeds Stripe Checkout's hosted-page `locale` param. Currently safe because the client always sends `lang` explicitly.
4. `functions/api/get-report-free.js:45` — same backwards-default pattern.
5. `report-engine/assembler.mjs:42` / `assembler.client.js:32` — same pattern; combined with a `lib()` helper that falls back to `.fr` on any lookup miss, could inject a French clause mid-sentence into an English report if the `lang` chain upstream ever breaks.

### Internal / non-rendered (not leaks, listed for completeness)
- All `fr:` blocks in `lang.jsx`, `test_data.jsx`, `test_data_ancre.jsx`, `profiles_content.js`, `items_fr.js`, `sales.jsx` — correctly gated bilingual content.
- `profiles.js` (`window.PROFILES`) — unused dead French draft data, loaded on every page (`index.html:273`) but never read by any component. Unnecessary payload/exposure (inspectable via view-source), not a rendered-page leak.
- `content/*.txt` (sau/mir/inc/gue/fug/cam/bas/anc.txt) — raw French PDF-extract source, never imported by any JS.
- French code comments in `engine.jsx`, `test_engine.jsx`, `ui.jsx`, `colors_and_type.css`, and dead field `niveauAncre` (written once, never read).
- README.md, SETUP_EMAIL.md, RAPPORT_SETUP.md, GA_SETUP.md — developer docs, not deployed app surface.
- PostHog consent banner (`posthog-init.js`) — correctly gated, defaults `'en'`, `<html lang="en">` hardcoded on every real page.
- Stripe checkout locale — **see item 3 above**; no separate hardcoded French forcing found beyond that backwards default.
- **404 page**: N/A — no dedicated 404 page exists at all (see §1.2); the fallback is the English `home` route, so no French-leak risk there, but flagged again as a gap.

**Total files with French-language hits: 32. Confirmed user-visible leaks: 2. Latent/backwards-default risk: 3. Internal/non-rendered: ~27.**

---

## 4. SEO surface check

| Page | Title | Meta description | Canonical | og:image | Meta keywords |
|---|---|---|---|---|---|
| `index.html` | "8LovePatterns: Free Relationship Pattern Test \| Attachment-Inspired Quiz" | Present | `https://8lovepatterns.com/` | **Missing** | Present (19 terms) |
| `legal.html` | "Legal — 8LovePatterns" | Present | `https://8lovepatterns.com/legal.html` | **Missing** (no og: tags at all) | **Missing** |
| `rapport.html` | "Your report, LovePattern" | **Missing** | **Missing** | **Missing** | **Missing** (noindex — acceptable) |
| `email-preview.html` | "Email preview, 8LovePatterns" | **Missing** | **Missing** | **Missing** | **Missing** (no noindex either — flagged in §3) |
| `blog/index.html` | "Blog \| 8LovePatterns" | Present | `https://8lovepatterns.com/blog/` | **Missing** | **Missing** |
| `blog/_article-template.html` | `{{TITLE_TAG}}` (placeholder, correctly noindexed) | placeholder | placeholder | placeholder | **Missing** |
| `blog/why-do-i-push-people-away.../index.html` | Present (minor phrasing mismatch vs H1: "When They Get Close?" vs "When Someone Gets Close?") | Present | Present | Present (`distancing-loop.svg`) | **Missing** |

**robots.txt**: allows all crawlers including named AI bots (GPTBot, OAI-SearchBot, ChatGPT-User, PerplexityBot, ClaudeBot, Claude-Web, Google-Extended); disallows `/rapport` and `/blog/_article-template`; references sitemap. **Does not disallow `email-preview.html`.**

**sitemap.xml**: exists, 3 URLs (home, blog index, the one article). SPA-internal routes (`/profils`, `/vente`, `/methode`, `/science`, etc.) are correctly not separately indexed since they're not real URLs.

### Nav / footer link inventory

**Header (`chrome.jsx`)**: "The Patterns" → `profils`, "Science" → `science`, "Method" → `methode`, CTA "Reveal My Pattern" → `intro`. (Hidden on `quiz`/`analyse`/`intro` routes.)

**Footer (`chrome.jsx`)**:
- "The test" column: "Reveal My Pattern" → `intro`, "The 8 patterns" → `profils`, "Science" → `science`, "Method" → `methode`
- "8LovePatterns" column: "About" → `methode` (no separate About page), **"Privacy" → `home`** (mislabeled — does not go to `/legal.html#privacy`), "Legal" → `/legal.html` (correct), **"Contact" → `home`** (mislabeled — no real contact surface)
- "Support" column: `support@8lovepatterns.com` (mailto), "We usually reply within 48 hours."
- Bottom bar: "© 2026 8LovePatterns™", "Inspired by attachment theory. Made with care."

**legal.html**: logo → `/`; in-page nav "Terms of Sale"/"Privacy Policy"/"Legal Notice" → `#terms`/`#privacy`/`#notice`; footer "© 2026 8LovePatterns · ROWV AND CO" / "Back to 8lovepatterns.com" → `/`

**blog pages**: logo → `/`; breadcrumb "Home"/"Blog" → `/` / `/blog/`; article CTA "Take the free test" → `/test`; footer "← All articles" → `/blog/`, "Back to 8lovepatterns.com" → `/`

**Support email**: `support@8lovepatterns.com` appears in the footer (mailto), in the outbound confirmation email body (`email-template.mjs`), and as the Resend `MAIL_FROM`/`reply_to` sender. No other email addresses or social links found anywhere in the reviewed scope.

**Broken/mislabeled links flag**: Footer "Privacy" and "Contact" both route to the homepage instead of real content — combined with `legal.html`'s unpopulated Privacy Policy section, there is currently **no reachable, real Privacy Policy or Contact page** on the site despite both being labeled and linked from the footer.

---

## 5. Summary

- **French leaks found: 2 confirmed user-visible** (Stripe-webhook order-confirmation email defaulting to French on KV lookup miss; `email-preview.html`'s French dev-tool chrome, publicly reachable). **3 latent/backwards-default risks** in `create-checkout.js`, `get-report-free.js`, `assembler.mjs`/`assembler.client.js` (currently mitigated by correct client calls, but fail open toward French).
- **Routes — static vs client-rendered:**
  - Static HTML: `legal.html`, `rapport.html` (shell only), `email-preview.html`, `blog/index.html`, `blog/_article-template.html` (unpublished template), the one published blog article.
  - Client-rendered SPA (all via `index.html`): `home`, `intro`/`/test`, `profils`, `profil`, `vente`, `methode`, `science` — plus dead/unreachable `quiz`/`analyse`.
  - No dedicated 404 route exists anywhere (SPA falls back to `home`; there's no static 404 either).
- **Missing SEO elements:** og:image missing on `index.html`, `legal.html`, `rapport.html`, `email-preview.html`, and `blog/index.html` (present only on the one live article and the template). Meta keywords missing everywhere except `index.html`. `rapport.html` and `email-preview.html` have no meta description or canonical. `email-preview.html` has no noindex/robots protection at all.
- **Missing/broken footer links:** "Privacy" and "Contact" both silently route to the homepage instead of real destinations; `legal.html`'s Privacy Policy, Terms of Sale, and Legal Notice sections are all unpopulated placeholders — so no real Privacy Policy or Contact page currently exists on the live site despite being linked.
- **Other notable non-French findings surfaced during the inventory** (not requested but material to a full audit): price/currency inconsistency between the `vente` sales page ("9 €") and actual Stripe checkout ($29 USD); an unfilled crisis-resource placeholder in the quiz's safety screen; dead legacy code (`flow.jsx`, `items.jsx`, `items_fr.js`, `engine.jsx`, `profiles.js`) still shipped to production; silent (no user-facing message) payment-failure/demo fallback in `stripe-config.jsx`.

**No fixes were applied. This document is inventory only, per task instructions.**
