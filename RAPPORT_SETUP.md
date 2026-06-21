# Rapport client : gabarit + assemblage sécurisé

Ce document décrit le nouveau système de rapport : un **gabarit unique** rempli par
**assemblage de blocs**, et un **verrouillage côté serveur** du contenu payant.
Règle maison respectée partout : jamais de tiret long.

---

## 1. Vue d'ensemble

```
test (LP_ENGINE.computeResultat)  ->  profil, palier, secondaire, statut, ...
        │
        ▼
  rapport.html (zone gratuite, publique)  ──clic "Recevoir mon plan"──►
        │                                                              │
        │                                          POST /api/create-checkout
        │                                          (stocke le résultat sous un token,
        │                                           crée la session Stripe)
        │                                                              │
        │                                                Stripe (page de paiement)
        │                                                              │
        ▼                                       success_url: rapport.html?session_id=...
  rapport.html  ──GET /api/get-report?session_id=...──►  Stripe: payé ?  ──► assemble
        ◄───────────── JSON (gratuit + payant de CETTE personne) ───────────────┘
```

Le navigateur ne reçoit **jamais** le contenu payant avant le paiement. La clé
secrète Stripe ne vit que dans les fonctions Netlify. `payment_status === 'paid'`
vient directement de Stripe, impossible à falsifier côté client.

---

## 2. Les fichiers

| Fichier | Rôle | Côté |
|---|---|---|
| `report-engine/assembler.mjs` | Logique d'assemblage (interpolation `{{}}`, conditions `si`, ordre). Aucun contenu. | serveur + build |
| `report-engine/render.js` | Rendu DOM du gabarit : VISUEL 1 à 5, cartes livre, zones. | navigateur |
| `netlify/functions/_content/miroir.js` | **Blocs de contenu** du Miroir (gratuit + payant), indexés par palier / secondaire / conditions. | **serveur uniquement** |
| `netlify/functions/create-checkout.mjs` | Crée la session Stripe, stocke le résultat sous un token. | serveur |
| `netlify/functions/get-report.mjs` | **La porte.** Vérifie le paiement, assemble, renvoie le rapport. | serveur |
| `netlify/functions/stripe-webhook.mjs` | Envoie l'email de confirmation avec le lien sécurisé. | serveur |
| `rapport.html` | Page du rapport. Prod : appelle get-report. Démo : charge le JSON local. | navigateur |
| `demo/rapport-miroir-p2.json` | Aperçu hors ligne (Miroir palier 2), assemblé à partir des blocs. | navigateur |

Le dossier `_content` commence par un underscore : Netlify ne le sert jamais comme
fichier statique et ne le traite pas comme une fonction. Il est seulement **bundlé**
dans `get-report`. C'est là que vit le contenu payant.

---

## 3. À configurer dans Netlify (variables d'environnement)

| Variable | Pour | Exemple |
|---|---|---|
| `STRIPE_SECRET_KEY` | create-checkout + get-report | `sk_live_...` (ou `sk_test_...`) |
| `STRIPE_WEBHOOK_SECRET` | webhook | `whsec_...` |
| `RESEND_API_KEY` | email | `re_...` |
| `SITE_URL` | liens (optionnel) | `https://8lovepatterns.com` |
| `STRIPE_PRICE_ID` | prix (optionnel) | `price_...` (sinon prix de 9,00 EUR en dur) |
| `MAIL_FROM` | email (optionnel) | `LovePattern <support@8lovepatterns.com>` |

Côté Stripe : un seul prix à 9 EUR, paiement unique, suffit pour les 8 profils
(le rapport s'adapte). Crée un **endpoint webhook** vers `/api/stripe-webhook` et
abonne-le à `checkout.session.completed`.

---

## 4. Le système de blocs

Chaque profil a un fichier `_content/<profil>.js` qui exporte `{ profil, code, nom,
accent, blocks }`. Chaque bloc porte une `zone` (`free` ou `paid`) et un `type`
(`prose`, `visual`, `exercises`, `bookcards`, `identityCard`, `cta`, `disclaimer`).

Indexation sur les sorties du moteur :

- **par palier** : `champ: { byPalier: { '2': ... }, default: ... }`
- **par secondaire** : `champ: { bySecondaire: { guetteur: ... }, default: ... }`
- **conditions** : `callouts: [{ if: { statut: 'rupture' }, text }]`, `{ ifFlag: 'basculeDeeper', text }`

Variables `{{}}` disponibles : `profil`, `pattern_secondaire`,
`pattern_secondaire_score`, `pattern_dominant_score`, `ancre_position`,
`ancre_position_libelle`, `ancre_bascule`, `statut`, `sabotage_principal`.

État de rédaction du Miroir : **palier 2 écrit** (le rapport de référence). Les
paliers 0, 1, 3, 4 sont des `default` marqués `[à écrire : ...]`. Remplis
`byPalier['0']`, `['1']`, `['3']`, `['4']` pour activer ces cases. Les 7 autres
profils : dupliquer `miroir.js`, puis ajouter `import` + entrée dans le registre
`CONTENT` de `get-report.mjs`.

Cartes livre : remplis `title / author / price / url / cover` par livre dans le bloc
`lectures` (saisie manuelle, la plus fiable). Tant que `url` est vide, la carte
affiche un repère « lien d'affiliation à ajouter ».

---

## 5. Aperçu

- Gabarit complet (gratuit + payant) : `rapport.html?demo=1`
- État avant paiement (zone gratuite + bouton) : `rapport.html?free=1`
- Après paiement réel : `rapport.html?session_id=cs_...` (Stripe live requis)

---

## 6. Bascule à finir avant la mise en ligne

Le moteur émet déjà tout (profil, palier 0 à 4, secondaire, statut). Reste à :

1. **Persister le résultat v2.** Dans l'écran de résultat (`test_result.jsx`),
   enregistrer l'objet `R` du moteur sous `localStorage['lovepattern_result_v2']`,
   et faire pointer le CTA « Recevoir mon plan » vers `LP_STRIPE.checkoutSession()`
   (déjà ajouté dans `stripe-config.jsx`) ou vers `rapport.html?free=1`.
2. **Écrire le contenu manquant** (paliers 0/1/3/4 du Miroir, puis les 7 autres
   profils) dans `_content/`.
3. **Retirer la fuite actuelle.** `premium-report.html` charge encore tous les
   `premium-data/*.js` dans le navigateur : à supprimer (ou rediriger vers
   `rapport.html`) une fois la bascule faite, sinon le contenu reste lisible sans
   payer. C'est le point qui motivait toute cette refonte.
