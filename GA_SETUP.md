# 8LovePatterns . Installer Google Analytics (guide complet)

Ce guide t'accompagne de zéro jusqu'à voir tes premières données : pages vues, clics,
temps passé, mises au panier, achats et rentabilité de tes pubs (ROAS).

Pas besoin de toucher au code : tout est déjà branché. Tu dois juste **coller ton
identifiant Google** à deux endroits, puis lire tes rapports dans Google Analytics.

---

## 1. D'abord, une mise au point honnête sur le "backend"

Tu as demandé de "travailler le backend". Voici la réalité, et c'est une bonne nouvelle :

- 8LovePatterns est un site **sans serveur** (React qui tourne dans le navigateur, plus
  Stripe pour le paiement). Il n'y a donc pas de backend à modifier.
- Google Analytics 4 (GA4) est **conçu exactement pour ça**. Le "pixel" Google est un
  petit script qui vit dans la page et envoie les événements directement aux serveurs
  de Google. C'est Google qui héberge le backend d'analytics, gratuitement.
- Tout le travail technique est déjà fait. Le site envoie déjà à Google, au bon moment,
  tous les événements importants (voir le tableau plus bas). Il ne manque que **ton
  identifiant**.

> Le seul cas où un vrai backend serait utile : vérifier les paiements côté serveur
> (Stripe webhooks) pour ne compter que les achats réellement encaissés. Pour un MVP,
> la méthode standard (compter l'achat quand l'acheteur revient sur sa page rapport)
> est largement suffisante. Voir la section 9.

---

## 2. Créer ton compte et ta propriété GA4 (5 min)

1. Va sur **https://analytics.google.com** et connecte-toi avec un compte Google.
2. **Administration** (la roue dentée en bas à gauche) > **Créer** > **Propriété**.
3. Nom de la propriété : `8LovePatterns`. Choisis le fuseau horaire et la devise **EUR**.
   (La devise sert aux rapports de revenus.)
4. Renseigne le secteur d'activité, puis valide.
5. À l'écran "Collecte de données", choisis la plateforme **Web**.
6. URL du site : `https://lovepattern.com` (ou ton domaine). Nom du flux : `8LovePatterns Web`.
7. Clique **Créer le flux**.

Tu arrives sur l'écran du flux de données. Note bien **l'ID de mesure** en haut à droite :
il ressemble à `G-XXXXXXXXXX`. C'est la seule chose dont tu as besoin.

---

## 3. Coller ton ID dans le site (2 min, l'étape clé)

Ouvre **deux fichiers** et remplace `G-XXXXXXXXXX` par ton vrai ID :

1. `ui_kits/website/index.html` : tout en haut, dans le bloc
   `GOOGLE ANALYTICS 4 . 8LovePatterns tracking pixel`. Modifie la ligne :
   ```js
   window.LP_GA_ID = "G-XXXXXXXXXX";   // <-- mets ton ID GA4 ici
   ```
2. `ui_kits/website/premium-report.html` : même bloc en haut, **même ID**.

C'est tout. Le tracking s'active automatiquement dès qu'un ID valide (commençant par `G-`)
est présent. Tant que tu laisses `G-XXXXXXXXXX`, rien n'est envoyé (mode désactivé), ce qui
est pratique pour tester en local sans polluer tes données.

> Astuce mise en ligne : si tu déploies via un hébergeur, refais ce remplacement dans la
> version déployée, ou garde l'ID directement dans le code source que tu publies.

---

## 4. Vérifier que ça marche (3 min)

1. Mets `window.LP_GA_DEBUG = true;` dans `index.html` (juste sous la ligne de l'ID).
   Recharge la page : chaque événement s'affiche dans la **console** du navigateur
   (clic droit > Inspecter > onglet Console). Tu verras `[GA] page_view`, `[GA] quiz_start`, etc.
2. Dans Google Analytics : **Administration > DebugView**. Ouvre le site en parallèle,
   clique partout, lance le test. Les événements apparaissent en direct (quelques secondes
   de délai). C'est la preuve que le pixel parle bien à Google.
3. Quand tout est bon, remets `window.LP_GA_DEBUG = false;` pour la prod.

> Les **rapports standard** (Temps réel, Acquisition, etc.) mettent souvent 24 à 48 h à se
> remplir la première fois. DebugView, lui, est instantané. Ne panique pas si "Temps réel"
> semble vide au début.

---

## 5. Ce qui est déjà suivi pour toi

Tout part vers GA4 automatiquement. Voici la liste :

| Événement GA4      | Quand il part                                  | À quoi il sert |
|--------------------|------------------------------------------------|----------------|
| `page_view`        | À chaque changement d'écran (accueil, test, résultat, vente...) | Voir le parcours et les pages populaires |
| `ui_click`         | À chaque clic sur un bouton ou un lien (avec le texte du bouton) | Comprendre **sur quoi** les gens cliquent |
| `language_change`  | Quand on bascule EN / FR                        | Mesurer l'usage des langues |
| `quiz_start`       | Au démarrage du test                            | Taux de gens qui se lancent |
| `quiz_complete`    | Test terminé (avec nb de questions + profil obtenu) | Taux de complétion, profils dominants |
| `view_item`        | Affichage d'une page de vente (rapport premium) | Intérêt produit |
| `add_to_cart`      | Clic sur "Obtenir mon rapport" (départ checkout) | Intention d'achat |
| `begin_checkout`   | Au moment de partir vers le paiement            | Entrée dans le tunnel d'achat |
| `purchase`         | Arrivée de l'acheteur sur sa page rapport (9 EUR) | **Revenu, conversions, ROAS** |

Le **temps passé** sur le site et la **profondeur de scroll** sont mesurés
automatiquement par GA4 (fonction "Mesure améliorée", activée par défaut sur ton flux web).
Tu n'as rien à faire pour ça.

---

## 6. Lire les rapports utiles dans GA4

- **Temps réel** : qui est sur le site maintenant, sur quelle page.
- **Engagement > Pages et écrans** : pages les plus vues, temps moyen par page.
- **Engagement > Événements** : clique sur `ui_click` puis explore le paramètre
  `link_text` pour voir le classement des boutons les plus cliqués. (Voir section 7 pour
  rendre ce paramètre visible.)
- **Monétisation > Achats e-commerce** : nombre d'achats, revenu total, revenu par profil.
- **Acquisition > Acquisition de trafic** : d'où viennent tes visiteurs (Google, pubs,
  réseaux, direct).

---

## 7. Voir le détail des clics (paramètres personnalisés)

GA4 reçoit `link_text` et `screen` avec chaque `ui_click`, mais pour les voir dans les
rapports il faut les déclarer une fois comme **dimensions personnalisées** :

1. **Administration > Définitions personnalisées > Créer des dimensions personnalisées**.
2. Crée-en deux :
   - Nom : `Texte du clic` . Portée : **Événement** . Paramètre : `link_text`
   - Nom : `Écran` . Portée : **Événement** . Paramètre : `screen`
3. (Optionnel) `dominant` (profil obtenu au test), `language`, `transaction_id` de la même façon.

Compte ~24 h avant que ces dimensions se remplissent dans les rapports.

---

## 8. Marquer tes conversions (pour mesurer ce qui rapporte)

1. **Administration > Événements** (ou "Événements clés" selon la version).
2. Active comme **conversion / événement clé** : `purchase`, et si tu veux aussi
   `begin_checkout` et `quiz_complete`.
3. Ces événements deviennent tes objectifs et alimentent le calcul du retour sur pub.

---

## 9. Mesurer la rentabilité des pubs (ROAS) avec Google Ads

Le ROAS = revenu généré / argent dépensé en pub. Pour que Google le calcule :

1. Crée un compte **Google Ads** (https://ads.google.com) si tu n'en as pas.
2. Dans GA4 : **Administration > Associations de produits > Google Ads** > associe ton
   compte Ads. Cela importe automatiquement tes conversions `purchase` dans Ads.
3. (Recommandé pour les pubs) Récupère ton **ID Google Ads** (format `AW-XXXXXXXXX`)
   et colle-le dans les deux fichiers, à la ligne juste sous l'ID GA4 :
   ```js
   window.LP_ADS_ID = "AW-XXXXXXXXX";
   ```
   Le site enverra alors aussi les conversions directement à Google Ads.
4. Dans Google Ads, tes rapports de campagne afficheront le **coût**, les **conversions**,
   le **revenu** et le **ROAS** (colonne "Valeur de conv. / coût"). Comme chaque achat
   envoie `value: 9` et `currency: EUR`, Google sait combien chaque pub a rapporté.

> Pour suivre **quelle campagne** amène quel visiteur, ajoute des paramètres UTM à tes
> liens de pub (ex. `?utm_source=facebook&utm_campaign=test_gratuit`). GA4 les lit tout seul
> dans "Acquisition de trafic".

---

## 10. RGPD / cookies (obligatoire en France et en Europe)

Google Analytics dépose des cookies et traite des données personnelles. En Europe, tu dois
**recueillir le consentement** des visiteurs avant de déclencher le tracking publicitaire.

Pour rester simple et conforme, deux options :

- **Bandeau de consentement (CMP)** : installe un outil comme Axeptio, Cookiebot ou
  Didomi. Ils gèrent le bandeau "Accepter / Refuser" et bloquent GA tant que l'utilisateur
  n'a pas accepté.
- **Consent Mode v2 de Google** : à coupler avec le bandeau, pour ajuster ce que Google
  collecte selon le choix de l'utilisateur. Voici le réglage par défaut à coller **juste
  avant** le bloc `gtag('js', new Date())` dans les deux pages, si tu pars sur cette voie :
  ```js
  gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
    wait_for_update: 500
  });
  ```
  Puis, quand l'utilisateur accepte via ton bandeau, appelle :
  ```js
  gtag('consent', 'update', {
    ad_storage: 'granted', ad_user_data: 'granted',
    ad_personalization: 'granted', analytics_storage: 'granted'
  });
  ```

> Je n'ai pas activé le Consent Mode par défaut pour ne pas bloquer tes tests. Avant
> d'envoyer du vrai trafic publicitaire, mets en place un bandeau de consentement : c'est
> une obligation légale, et certaines régies (Google Ads inclus) le demandent.

---

## 11. (Alternative pro) Google Tag Manager

Si un jour tu veux ajouter d'autres pixels (Meta/Facebook, TikTok, Pinterest...) sans
retoucher le code, passe par **Google Tag Manager** (GTM). Le site pousse déjà tout dans
`window.dataLayer`, donc GTM peut tout récupérer. Mais pour démarrer, la méthode de ce
guide (GA4 direct) est plus simple et suffit largement.

---

## Récapitulatif express

1. Crée une propriété GA4, récupère ton ID `G-XXXXXXXXXX`.
2. Colle-le dans `index.html` ET `premium-report.html`.
3. Vérifie dans DebugView (avec `LP_GA_DEBUG = true`).
4. Déclare `link_text` / `screen` en dimensions personnalisées.
5. Marque `purchase` comme conversion.
6. Associe Google Ads + colle ton `AW-...` pour le ROAS.
7. Installe un bandeau de consentement avant le trafic pub.

Tout le reste (envoi des événements, revenus, temps passé) est déjà géré par le code.
