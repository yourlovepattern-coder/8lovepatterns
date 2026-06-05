# 8LovePatterns — UI Kit (site web)

High-fidelity, interactive recreation of the 8LovePatterns™ web product. React (inline JSX via Babel), no build step. Open `index.html`.

> This is a **design recreation** for prototyping — cosmetic, not production logic. The quiz shows a representative extract (the real product has ~80 questions) and the result is randomised, not scored.

## Run
Open `index.html`. It loads React 18 + Babel from CDN, then the files below. All design tokens come from the root `colors_and_type.css`; archetype art from `assets/`.

## Pages / flow (simple state router in `App.jsx`)
`home → intro → quiz → analyse → result`, plus `profils` (library), `profil` (public archetype page), `premium`, `methode`. Header/footer hidden during quiz & analyse.

## Files
| File | Role |
|---|---|
| `index.html` | Shell: fonts, responsive CSS, script load order, mount |
| `data.jsx` | `FAMILIES` (5 stratégies + Ancre), `ARCHETYPES` (meta: name, family, accent, tagline, motto, emprise), `SCALE`, `QUESTIONS` extract → `window.*` |
| `profiles.js` | `window.PROFILES` — full long-form copy of each fiche (hook + intro + sections), parsed from the client PDFs (`content/*.txt`) |
| `ui.jsx` | Primitives: `Icon` (inline Lucide subset), `Button`, `Container`, `Eyebrow`, `Logo`, `Avatar`, `FamilyDot`, `Chip`, `EmpriseTag`, `ProgressBar`, `Section` |
| `content.jsx` | `ProfileBody` — renders a fiche (hook, intro, section titles, the « Vous êtes peut-être… » box, the closing message) |
| `chrome.jsx` | `Header` (sticky, blur, mobile burger) + `Footer` |
| `Home.jsx` | Landing: orbiting-figures hero, promise band, 8 mechanisms grid, result-format, social proof, final CTA |
| `flow.jsx` | `Intro`, `Quiz` (one question at a time, 5-pt scale, progress), `Analyse` (loading) |
| `Result.jsx` | Result reveal: archetype header + emprise + full free fiche + premium CTA |
| `Profile.jsx` | `ProfilsIndex` (library grouped by stratégie) + `Profile` (public archetype page) |
| `pages.jsx` | `Premium` (free vs paid), `Method` (methodology / "ce que ce n'est pas") |
| `App.jsx` | Router + mount |
| `content/*.txt` | Cleaned source text of each fiche |

## Notes
- Components are shared across Babel scripts via `Object.assign(window, {…})` and referenced by bare name (resolved at render time).
- French copy throughout. Tone rules live in the root `README.md` → CONTENT FUNDAMENTALS.
- Avatars share one disc colour per family for instant grouping; profile/result pages theme their header band to the family colour.
