# 8LovePatterns — Brancher l'envoi automatique du rapport par e-mail

Ce guide met en route le « robot » qui envoie au client son rapport en PDF, par
e-mail, automatiquement après le paiement. À faire **ensemble**, une seule fois.

Rien à coder : tout le code est déjà là. Tu vas juste créer 1 compte, copier 2-3
codes secrets, et cocher quelques cases.

---

## Vue d'ensemble (ce qui se passe)

1. Le client clique « Obtenir mon rapport complet ».
2. Son rapport est fabriqué en PDF et mis de côté en sécurité.
3. Il paie sur Stripe et saisit son e-mail.
4. Stripe prévient notre robot, qui lui envoie le mail chaleureux + le PDF.

Pour que les étapes 2 à 4 marchent, le site doit pouvoir « exécuter des
automatisations ». Pour ça, on relie le site à **GitHub** (Netlify s'occupe du
reste tout seul). Bonus : plus besoin de re-glisser le dossier à la main pour
mettre à jour le site.

---

## Étape 1 — Relier le site à GitHub (le déploiement automatique)

> Pourquoi : le glisser-déposer ne sait pas faire tourner les automatisations.
> Une fois relié à GitHub, chaque mise à jour se publiera toute seule.

On le fera ensemble (je te guiderai pour créer un compte GitHub gratuit et y
déposer le dossier `website`). C'est l'étape la plus « nouvelle », mais une fois
faite, elle est faite pour toujours.

Quand ce sera branché, Netlify lira automatiquement :
- `netlify.toml` (la config),
- le dossier `netlify/functions/` (le robot).

---

## Étape 2 — Créer un compte Resend (l'envoi d'e-mails)

1. Va sur **resend.com**, crée un compte gratuit.
2. Menu **Domains** → **Add Domain** → tape `8lovepatterns.com`.
3. Resend affiche **3 enregistrements DNS** (type TXT et CNAME, pour prouver que
   tu as le droit d'envoyer depuis ton domaine).
4. Ajoute-les chez **IONOS** (onglet DNS, comme on l'a déjà fait). Reporte
   exactement les valeurs données par Resend.
5. Reviens sur Resend et clique **Verify**. Quand c'est vert, tu peux envoyer
   depuis `support@8lovepatterns.com`.
6. Menu **API Keys** → **Create API Key** → copie la clé (commence par `re_...`).
   Garde-la, on la colle à l'étape 4. **Ne la partage avec personne.**

---

## Étape 3 — Créer le webhook Stripe (le signal de paiement)

1. Dans Stripe : **Développeurs** → **Webhooks** → **Ajouter un endpoint**.
2. URL de l'endpoint :
   ```
   https://8lovepatterns.com/api/stripe-webhook
   ```
3. Événement à écouter : **`checkout.session.completed`** (tu peux n'ajouter que
   celui-là).
4. Valide. Stripe affiche un **« Secret de signature »** qui commence par
   `whsec_...`. Copie-le. **Ne le partage avec personne.**

> Fais-le une fois en mode **Test** (pour nos essais), puis une fois en mode
> **Réel** au lancement. Chaque mode a son propre `whsec_...`.

---

## Étape 4 — Coller les secrets dans Netlify

Dans Netlify : ton site → **Site configuration** → **Environment variables** →
**Add a variable**. Ajoute :

| Nom (exact)             | Valeur                                  |
|-------------------------|-----------------------------------------|
| `RESEND_API_KEY`        | la clé `re_...` (étape 2)               |
| `STRIPE_WEBHOOK_SECRET` | le secret `whsec_...` (étape 3)         |

(Optionnel) `MAIL_FROM` = `8LovePatterns <support@8lovepatterns.com>` si tu veux
changer le nom d'expéditeur.

> Ces variables vivent **dans Netlify**, jamais dans le code. C'est le coffre-fort.

---

## Étape 5 — Régler la redirection du lien de paiement

Sur ton **lien de paiement Stripe** → options **« Après le paiement »** →
**« Rediriger les clients vers votre site »** → colle :
```
https://8lovepatterns.com/rapport.html
```
(Ça ramène l'acheteur sur son rapport à l'écran. L'e-mail, lui, part de toute
façon grâce au robot.)

---

## Étape 6 — Passer en mode réel

Dans `stripe-config.jsx` (je le fais avec toi) :
1. `simulate: true`  →  **`simulate: false`**
2. `linkAll`  →  remplace le lien **test** (`buy.stripe.com/test_...`) par ton
   lien **réel** (`buy.stripe.com/...`).

Puis on republie (automatique via GitHub).

---

## Étape 7 — Tester de bout en bout

1. En mode **Test** Stripe, fais un faux achat avec la carte de test
   `4242 4242 4242 4242` (n'importe quelle date future + n'importe quel CVC).
2. Vérifie que tu reçois bien le mail avec le PDF à l'adresse saisie.
3. Si oui : bascule tout en mode **Réel** (clé webhook réelle + lien réel) et
   tu es en ligne. 🎉

---

## En cas de souci (où regarder)

- **Netlify → Functions → Logs** : montre ce que le robot a fait (ou l'erreur).
- **Stripe → Webhooks → ton endpoint** : montre si Stripe a bien appelé le robot
  et la réponse reçue.
- **Resend → Emails** : montre les e-mails partis (ou refusés).

Pas de mail reçu ? 9 fois sur 10 c'est : domaine Resend pas encore « vérifié »,
ou une variable d'environnement mal collée. On vérifie ensemble.
