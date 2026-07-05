/* ============================================================================
   8LovePatterns — TEST CONTENT  (v2 : entonnoir en deux temps)
   ----------------------------------------------------------------------------
   33 questions, un tap chacune, coupées en deux par la révélation partielle :
     · BLOC 0     — On fait connaissance : sexe, âge (non scorés) + C1/C2/C3
     · ÉTAGE 1 A  — Les deux axes (8 items, échelle 5 degrés)      -> T.axes
     · ÉTAGE 1 B  — Le départage par mécanisme (8 items, 5 degrés)  -> T.c1
     · HALTE 1    — révélation partielle (texte du mécanisme figé)
     · HALTE 2    — intro de l'Ancre + 1re question d'Ancre
     · ÉTAGE 2    — Ancre du mécanisme (6 questions, variante jouée) -> T.ancre
     · ÉTAGE 2bis — Sabotage (6 questions, échelle 5 degrés)        -> T.c3

   DISPLAY RULE: chaque étiquette [label] (pattern / palier / axe / branche /
   repetition / securite / sexe / age / dimension) vit ICI comme donnée pour le
   moteur, JAMAIS rendue à l'écran. L'UI ne lit que .fr / .en.

   Marché anglophone : on sert .en partout. Les textes des haltes sont copiés
   VERBATIM depuis haltes-content-EN-v1.md (aucune reformulation) et rendus en
   anglais ; le FR retombe sur l'anglais tant que la VF n'est pas écrite.
   ========================================================================== */

/* The 5-level scale used by Étage 1 (A + B) and Étage 2 bis (sabotage).
   Scored 0..4 (Pas du tout moi = 0 … Tout à fait moi = 4) by the engine. */
const LP_TEST_SCALE = [
  { v:0, fr:'Pas du tout moi',   en:'Not me at all' },
  { v:1, fr:'Un peu moi',        en:'A little me' },
  { v:2, fr:'Moyen, ça dépend',  en:'In between, it depends' },
  { v:3, fr:'Plutôt moi',        en:'Mostly me' },
  { v:4, fr:'Tout à fait moi',   en:'Completely me' },
];

/* Kept for compatibility; the v2 flow no longer shows "Chapitre n sur 4". */
const LP_TEST_CHAPTERS = [
  { n:0, type:'cadrage',  fr:'Pour faire connaissance', en:'Getting to know you' },
  { n:1, type:'pattern',  fr:'Ta façon de réagir',      en:'How you react' },
  { n:2, type:'ancre',    fr:"Quand ça t'arrive",       en:'When it happens to you' },
  { n:3, type:'sabotage', fr:'Dans tes relations',      en:'In your relationships' },
];

/* ----------------------------------------------------------------------------
   BLOC 0 — ON FAIT CONNAISSANCE  (kind: 'single' — single choice, auto-advance)
   sexe + âge sont NON scorés (stockés dans contexte). C1/C2 = personnalisation,
   C3 = garde-fou sécurité (jamais scoré, priorité absolue, comportement inchangé).
   -------------------------------------------------------------------------- */
const LP_TEST_C0 = [
  { id:'SEX', chapter:0, kind:'single',
    situation:{ fr:"Pour commencer, tu es…", en:"To start, you are…" },
    options:[
      { sexe:'woman', fr:"Une femme",               en:"A woman" },
      { sexe:'man',   fr:"Un homme",                en:"A man" },
      { sexe:'na',    fr:"Je préfère ne pas dire",  en:"Prefer not to say" },
    ] },
  { id:'AGE', chapter:0, kind:'single',
    situation:{ fr:"Quel âge as-tu ?", en:"How old are you?" },
    options:[
      { age:'18-24', fr:"18-24 ans", en:"18-24" },
      { age:'25-34', fr:"25-34 ans", en:"25-34" },
      { age:'35-44', fr:"35-44 ans", en:"35-44" },
      { age:'45-54', fr:"45-54 ans", en:"45-54" },
      { age:'55+',   fr:"55 ans et plus", en:"55+" },
    ] },
  { id:'C1', chapter:0, kind:'single',
    situation:{
      fr:"Dis-moi où tu en es en ce moment. Il n'y a pas de bonne réponse, ça nous sert juste à te parler de ta vie à toi, pas de celle d'un autre.",
      en:"Tell me where you are right now. There is no right answer, it just lets us talk about your life, not someone else's." },
    options:[
      { branche:'couple',     fr:"Je suis en couple",                                   en:"I'm in a relationship" },
      { branche:'celibataire',fr:"Je suis célibataire",                                 en:"I'm single" },
      { branche:'rupture',    fr:"Je sors d'une rupture difficile",                     en:"I'm coming out of a hard breakup" },
      { branche:'flou',       fr:"C'est flou, ni vraiment ensemble ni vraiment séparés", en:"It's blurry, not really together and not really apart" },
    ] },
  { id:'C2', chapter:0, kind:'single',
    situation:{
      fr:"Quand tu repenses à tes histoires, est-ce que tu as l'impression de revivre un peu toujours la même chose ?",
      en:"When you look back on your relationships, do you feel like you keep living through a little of the same thing?" },
    options:[
      { repetition:'forte',     fr:"Oui, presque à chaque fois, les mêmes scénarios reviennent", en:"Yes, almost every time, the same scenarios come back" },
      { repetition:'partielle', fr:"Parfois, sur certains points seulement",                     en:"Sometimes, on certain points only" },
      { repetition:'faible',    fr:"Non, mes histoires sont assez différentes",                  en:"No, my relationships are quite different from each other" },
    ] },
  { id:'C3', chapter:0, kind:'single', safety:true,
    situation:{
      fr:"Dans ta relation actuelle ou la dernière, est-ce qu'il t'est arrivé d'avoir peur, de te sentir rabaissée souvent, ou de ne plus avoir le droit de voir tes proches ?",
      en:"In your current or last relationship, did it ever happen that you felt afraid, often put down, or no longer allowed to see the people close to you?" },
    options:[
      { securite:'ok',        fr:"Non, rien de tout ça",                          en:"No, none of that" },
      { securite:'vigilance', fr:"Parfois, je me suis sentie rabaissée ou pas libre", en:"Sometimes, I felt put down or not free" },
      { securite:'alerte',    fr:"Oui, plusieurs de ces choses",                   en:"Yes, several of these things" },
    ] },
];

/* ----------------------------------------------------------------------------
   ÉTAGE 1 — PHASE A : les deux axes  (kind: 'statement', échelle 5 degrés)
   Chaque item est tagué axe:'anxiete' (peur de la distance) ou axe:'evitement'
   (recul devant la proximité). Leur moyenne place la personne dans son quadrant
   ET fournit les coordonnées de la carte du rapport payant. Textes = spec v2.
   -------------------------------------------------------------------------- */
const LP_TEST_AXES = [
  { id:'AX1', axe:'anxiete',
    statement:{ fr:"Quand la personne que j'aime met du temps à répondre, mon esprit part tout de suite au pire.",
                en:"When the person I love takes a while to reply, my mind jumps straight to the worst." } },
  { id:'AX2', axe:'anxiete',
    statement:{ fr:"J'ai souvent besoin d'être rassuré sur le fait qu'on tient vraiment à moi.",
                en:"I often need reassurance that I'm really cared about." } },
  { id:'AX3', axe:'anxiete',
    statement:{ fr:"La peur qu'on finisse par me laisser n'est jamais très loin.",
                en:"The fear of being left in the end is never far away." } },
  { id:'AX4', axe:'anxiete',
    statement:{ fr:"Quand quelque chose cloche entre nous, je n'arrive plus à penser à autre chose.",
                en:"When something feels off between us, I can't think about anything else." } },
  { id:'AV1', axe:'evitement',
    statement:{ fr:"Quand quelqu'un devient trop proche, j'ai besoin de reprendre de la distance.",
                en:"When someone gets too close, I need to take some distance back." } },
  { id:'AV2', axe:'evitement',
    statement:{ fr:"Je préfère compter sur moi-même plutôt que de m'appuyer sur quelqu'un.",
                en:"I'd rather rely on myself than lean on someone." } },
  { id:'AV3', axe:'evitement',
    statement:{ fr:"Parler en profondeur de ce que je ressens me met mal à l'aise.",
                en:"Talking deeply about what I feel makes me uneasy." } },
  { id:'AV4', axe:'evitement',
    statement:{ fr:"Même en couple, je garde une part de moi que personne n'atteint.",
                en:"Even in a relationship, I keep a part of me no one reaches." } },
];

/* ----------------------------------------------------------------------------
   ÉTAGE 1 — PHASE B : le départage par mécanisme  (kind: 'statement', 5 degrés)
   Une affirmation très spécifique par mécanisme (un geste que seul lui fait).
   Chaque question porte UNE seule entrée reactions:[{pattern:'X'}] : le moteur
   lpPatternCalc les score sans modification (agnostique au nombre de réactions).
   La réponse est stockée en forme matrice {0:v} par le flux. Textes = spec v2.
   -------------------------------------------------------------------------- */
const LP_TEST_C1 = [
  { id:'B_GUE', kind:'statement', reactions:[{ pattern:'Guetteur' }],
    statement:{ fr:"Je surveille les petits signes, un message plus court, un ton différent, pour deviner si l'autre s'éloigne.",
                en:"I watch the small signs, a shorter text, a different tone, to guess if they're pulling away." } },
  { id:'B_MIR', kind:'statement', reactions:[{ pattern:'Miroir' }],
    statement:{ fr:"Quand je tiens à quelqu'un, je deviens ce qu'il attend, au point de ne plus savoir ce que moi je veux.",
                en:"When I care about someone, I become what they expect, until I no longer know what I want." } },
  { id:'B_SAU', kind:'statement', reactions:[{ pattern:'Sauveur' }],
    statement:{ fr:"Je me rends indispensable en réglant ses problèmes, ses besoins passent avant les miens.",
                en:"I make myself indispensable by fixing their problems, their needs come before mine." } },
  { id:'B_INC', kind:'statement', reactions:[{ pattern:'Incendiaire' }],
    statement:{ fr:"Quand je doute de l'autre, je provoque une tension juste pour voir s'il tient encore à moi.",
                en:"When I doubt them, I stir up tension just to see if they still care." } },
  { id:'B_FUG', kind:'statement', reactions:[{ pattern:'Fugitif' }],
    statement:{ fr:"Dès qu'une relation devient sérieuse, une partie de moi cherche déjà la sortie.",
                en:"As soon as it gets serious, a part of me is already looking for the exit." } },
  { id:'B_BAS', kind:'statement', reactions:[{ pattern:'Bastion' }],
    statement:{ fr:"Quand ça devient tendu, je me coupe de mes émotions et je me réfugie dans autre chose.",
                en:"When it gets tense, I cut off from my feelings and take refuge in something else." } },
  { id:'B_CAM', kind:'statement', reactions:[{ pattern:'Caméléon' }],
    statement:{ fr:"Je cache ce que je pense vraiment et je dis ce qui fera plaisir, pour éviter tout froid.",
                en:"I hide what I really think and say what will please, to avoid any friction." } },
  { id:'B_ALC', kind:'statement', reactions:[{ pattern:'Alchimiste' }],
    statement:{ fr:"Face à un problème de couple, je passe par l'analyse et la logique plutôt que par ce que je ressens.",
                en:"Facing a relationship problem, I go through analysis and logic rather than what I feel." } },
];

/* ----------------------------------------------------------------------------
   ÉTAGE 2 — ANCRE, variante Miroir  (kind: 'single' — 5 paliers)
   Les 7 autres variantes vivent dans test_data_ancre.jsx. Le flux joue la
   variante du mécanisme figé à la fin de l'Étage 1. [palier=N] = donnée moteur.
   Le palier 4 est toujours écrit pour paraître légitime, jamais un aveu.
   -------------------------------------------------------------------------- */
const LP_TEST_C2_MIROIR = [
  { id:'A1', chapter:2, kind:'single', variant:'Miroir',
    situation:{
      fr:"Tu sens que tu commences à t'effacer, à devenir ce qui plaît à l'autre. En vrai, qu'est-ce qui se passe le plus souvent ?",
      en:"You feel yourself starting to fade, becoming what pleases the other person. Honestly, what happens most often?" },
    options:[
      { palier:0, fr:"Je le sens venir, et de plus en plus souvent je m'arrête pour dire ce que moi je veux", en:"I feel it coming, and more and more often I stop to say what I want" },
      { palier:1, fr:"Je me surprends en train de le faire, pendant que ça arrive",                  en:"I catch myself doing it, while it's happening" },
      { palier:2, fr:"Je sais très bien que je m'efface, et je le fais quand même",                  en:"I know full well that I'm fading, and I do it anyway" },
      { palier:3, fr:"Je m'en rends compte plus tard, souvent quand la relation va déjà mal",        en:"I realize it later, often when the relationship is already going badly" },
      { palier:4, fr:"Honnêtement je ne m'efface pas, je fais juste ce qu'il faut pour que ça marche", en:"Honestly I don't fade, I just do what it takes to make it work" },
    ] },
  { id:'A2', chapter:2, kind:'single', variant:'Miroir',
    situation:{
      fr:"Quand l'autre veut quelque chose et que toi tu voulais autre chose, comment ça se passe en toi ?",
      en:"When the other person wants something and you wanted something else, how does it go inside you?" },
    options:[
      { palier:0, fr:"Je repère le réflexe de céder et je choisis souvent de dire mon vrai avis",    en:"I spot the urge to give in and I often choose to say what I really think" },
      { palier:1, fr:"Je me vois céder en direct, même si je n'arrive pas toujours à m'arrêter",     en:"I watch myself give in live, even if I can't always stop it" },
      { palier:2, fr:"Je sais que je vais céder, je le vois venir, et je cède quand même",           en:"I know I'm going to give in, I see it coming, and I give in anyway" },
      { palier:3, fr:"Je réalise après coup que j'ai encore abandonné ce que je voulais",           en:"I realize afterward that I gave up what I wanted again" },
      { palier:4, fr:"Ça ne me dérange pas, ce qu'il veut me va vraiment la plupart du temps",       en:"It doesn't bother me, what they want genuinely suits me most of the time" },
    ] },
  { id:'A3', chapter:2, kind:'single', variant:'Miroir',
    situation:{
      fr:"Tu te rends compte que tu as donné ton avis pour faire plaisir, pas parce que tu le pensais. Quand est-ce que tu t'en aperçois ?",
      en:"You realize you gave your opinion to please, not because you meant it. When do you notice it?" },
    options:[
      { palier:0, fr:"Souvent juste avant de parler, et je rattrape pour dire le vrai",             en:"Often just before I speak, and I catch it to say the true thing" },
      { palier:1, fr:"Au moment où les mots sortent, je sens que ce n'est pas tout à fait moi",      en:"As the words come out, I feel that it's not quite me" },
      { palier:2, fr:"Pendant que je le dis, je sais que je mens un peu, et je continue",            en:"While I'm saying it, I know I'm bending the truth a little, and I keep going" },
      { palier:3, fr:"Bien plus tard, en y repensant le soir ou le lendemain",                       en:"Much later, thinking back that evening or the next day" },
      { palier:4, fr:"Je ne dis pas ça pour faire plaisir, je pense vraiment ce que je dis",         en:"I don't say it to please, I really mean what I say" },
    ] },
  { id:'A4', chapter:2, kind:'single', variant:'Miroir',
    situation:{
      fr:"Dans une relation, à quel moment vois-tu que tu es en train de te perdre dans l'autre ?",
      en:"In a relationship, at what point do you see that you're losing yourself in the other person?" },
    options:[
      { palier:0, fr:"Très tôt, dès les premiers signes, et je remets de la distance saine",        en:"Very early, at the first signs, and I restore a healthy distance" },
      { palier:1, fr:"Pendant que ça arrive, je sens que je me dilue",                               en:"While it's happening, I feel myself dissolving" },
      { palier:2, fr:"Je le vois clairement et je n'arrive pas encore à m'en empêcher",              en:"I see it clearly and I can't quite stop myself yet" },
      { palier:3, fr:"Quand c'est déjà bien avancé, parfois quand l'autre me le reproche",           en:"When it's already well underway, sometimes when the other points it out" },
      { palier:4, fr:"Je ne me perds pas, c'est juste comme ça que j'aime, à fond",                  en:"I don't lose myself, that's just how I love, all in" },
    ] },
  { id:'A5', chapter:2, kind:'single', variant:'Miroir',
    situation:{
      fr:"Quand l'autre te demande ce que toi tu veux vraiment, qu'est-ce qui se passe ?",
      en:"When the other person asks what you really want, what happens?" },
    options:[
      { palier:0, fr:"Je sais répondre, j'ai gardé le contact avec mes propres envies",             en:"I can answer, I've stayed in touch with my own desires" },
      { palier:1, fr:"Je cherche, et je me rends compte sur le moment que j'ai du mal",              en:"I search, and right then I realize that I struggle" },
      { palier:2, fr:"Je sais que je devrais avoir une réponse à moi, mais je donne la sienne",      en:"I know I should have an answer of my own, but I give theirs" },
      { palier:3, fr:"Je réponds vite, et c'est après que je vois que ce n'était pas mon vrai désir", en:"I answer quickly, and only afterward do I see it wasn't my real desire" },
      { palier:4, fr:"Ce que je veux, c'est qu'on soit bien tous les deux, c'est sincère",           en:"What I want is for us both to be happy, and I mean it" },
    ] },
  { id:'A6', chapter:2, kind:'single', variant:'Miroir',
    situation:{
      fr:"Après une période où tu t'es beaucoup adapté à l'autre, comment tu reviens à toi ?",
      en:"After a stretch where you adapted a lot to the other person, how do you come back to yourself?" },
    options:[
      { palier:0, fr:"Je le sens venir avant l'épuisement et je reprends mon espace à temps",        en:"I feel it coming before exhaustion and I reclaim my space in time" },
      { palier:1, fr:"Je m'en aperçois en cours de route et j'essaie de rééquilibrer",               en:"I notice it along the way and I try to rebalance" },
      { palier:2, fr:"Je vois que je me suis effacé, mais je n'ose pas encore reprendre ma place",   en:"I see that I've faded, but I don't yet dare take my place back" },
      { palier:3, fr:"Je ne le comprends qu'une fois vidé, ou quand ça explose",                     en:"I only understand it once I'm drained, or when it blows up" },
      { palier:4, fr:"Je ne ressens pas ce besoin, m'adapter à l'autre ne me coûte pas",             en:"I don't feel that need, adapting to the other person costs me nothing" },
    ] },
];

/* ----------------------------------------------------------------------------
   ÉTAGE 2 bis — SABOTAGE  (kind: 'statement' — échelle 5 degrés)
   Inchangé. Adossé aux 3 dimensions de la Relationship Sabotage Scale.
   [dimension] et [axe] sont des données moteur.
   -------------------------------------------------------------------------- */
const LP_TEST_C3 = [
  { id:'S1', chapter:3, kind:'statement', dimension:'defensivite',
    statement:{
      fr:"Quand il y a un souci dans le couple, j'ai souvent l'impression d'être injustement blâmé.",
      en:"When there's an issue in the relationship, I often feel unfairly blamed." } },
  { id:'S2', chapter:3, kind:'statement', dimension:'defensivite',
    statement:{
      fr:"Quand on me fait une critique, mon premier réflexe est de me défendre ou de me fermer.",
      en:"When I'm criticized, my first reflex is to defend myself or shut down." } },
  { id:'S3', chapter:3, kind:'statement', dimension:'confiance', axe:'poursuivant',
    statement:{
      fr:"J'ai besoin de savoir ce que fait l'autre pour me sentir tranquille.",
      en:"I need to know what the other person is doing to feel at ease." } },
  { id:'S4', chapter:3, kind:'statement', dimension:'confiance', axe:'poursuivant',
    statement:{
      fr:"Il m'arrive de vérifier des choses (messages, réseaux, emploi du temps) pour me rassurer.",
      en:"Sometimes I check things (messages, social media, schedule) to reassure myself." } },
  { id:'S5', chapter:3, kind:'statement', dimension:'competences',
    statement:{
      fr:"Quand on est en désaccord, j'ai du mal à me mettre à la place de l'autre sur le moment.",
      en:"When we disagree, I find it hard to put myself in the other person's shoes in the moment." } },
  { id:'S6', chapter:3, kind:'statement', dimension:'competences',
    statement:{
      fr:"Admettre mes torts ou accepter qu'on me dise comment m'améliorer, ce n'est pas facile pour moi.",
      en:"Admitting I'm wrong, or accepting being told how to improve, is not easy for me." } },
];

/* ============================================================================
   HALTES — textes des écrans de révélation et d'intro (VERBATIM, EN).
   Source: haltes-content-EN-v1.md. Aucune reformulation. `**...**` marque le
   gras inline (rendu par le flux). Sélection par la clé du mécanisme figé.
   ========================================================================== */

/* Écran de cadrage — début de l'Étage 1 (universel). */
const LP_HALTE_FRAMING = {
  head: "Before we start, one thing.",
  body: [
    "Answer for your life as it is now. Your relationship if you're in one, or how you've tended to be in relationships lately. If something from your past still runs today, count it. We're looking for the pattern that's steering you now.",
  ],
};

/* HALTE 1 — révélations partielles, une par mécanisme (~400 mots, verbatim). */
const LP_HALTE_REVEALS = {
  'Miroir': {
    head: "Halfway there. Something is already showing.",
    body: [
      "It looks like you live by a quiet rule: as long as you're what they need, they have no reason to leave. So you read a room fast, and by the time you've caught a mood shift you're already becoming the version that keeps it smooth.",
      "The catch is one you know. Someone asks what you want, even where to eat, and there's a blank where the answer should be. You end up close to people who never quite met the real you.",
      "We call this pattern **The Mirror**.",
    ],
    after: [
      "You learned it somewhere it kept you safe, so it stopped feeling like a strategy. What matters now is how early you catch the reflex, and how much say you keep once it starts.",
    ],
  },
  'Guetteur': {
    head: "Halfway there. Something is already showing.",
    body: [
      "It looks like you live by a quiet rule: what you see coming can't blindside you. So you track what others miss, a reply a shade slower, a hug that ends early, and once you've noticed you start building the case.",
      "You're never off duty. Reassurance holds for an hour, then the scanning starts again, and a silence anyone else would call neutral sets off an alarm you can't talk down.",
      "We call this pattern **The Watcher**.",
    ],
    after: [
      "You learned it where attention was the difference between being held and being missed, so it feels like care. What matters now is how early you catch the scanning, and whether you can set the evidence down.",
    ],
  },
  'Sauveur': {
    head: "Halfway there. Something is already showing.",
    body: [
      "It looks like you live by a quiet rule: someone who needs you won't leave you. So you see what's missing before it's said and step in to supply it, and their problem becomes your project before they've asked.",
      "Being needed feels like being loved, and for long stretches you can't tell them apart. Meanwhile your own needs slip to the back of the line so quietly you stop hearing them, until the resentment shows up and the guilt right after it.",
      "We call this pattern **The Savior**.",
    ],
    after: [
      "You learned it where love was earned by being useful, so it feels like your worth. What matters now is how early you feel the pull to fix, and how much of you is left when you don't.",
    ],
  },
  'Incendiaire': {
    head: "Halfway there. Something is already showing.",
    body: [
      "It looks like you live by a quiet rule: you can survive their anger, but not their silence. So when you feel someone drift, something in you moves to force contact, a sharp question, a test, a spark you know will catch.",
      "A fight is still connection. While it burns, you know they're still there. Then the smoke clears and the shame arrives, and you can see the crater and remember lighting the match.",
      "We call this pattern **The Arsonist**.",
    ],
    after: [
      "You learned it where calm never stayed safe and loud got you found, so it feels like your temperament. What matters now is the gap between the spark and the strike, and how much say you keep inside it.",
    ],
  },
  'Fugitif': {
    head: "Halfway there. Something is already showing.",
    body: [
      "It looks like you live by a quiet rule: nothing can trap you if you never fully arrive. So part of you keeps a bag packed, and the closer someone gets, the louder it runs.",
      "You want the closeness, that's the part people miss. But when it arrives the room seems to shrink, and the urge to go shows up exactly when things start to matter. Leaving first means never being left.",
      "We call this pattern **The Runaway**.",
    ],
    after: [
      "You learned it where depending on someone didn't end well, so distance feels like safety. What matters now is how early you feel the exit open, and whether staying is still a choice by the time you do.",
    ],
  },
  'Bastion': {
    head: "Halfway there. Something is already showing.",
    body: [
      "It looks like you live by a quiet rule: if you need no one, no one can hurt you. So when things get heavy you go quiet and hold, and the feelings file somewhere out of reach while you stay calm and a little far away.",
      "You don't feel less than other people. You feel later, sometimes once it's all over and there's no one left to tell. The people who love you keep reading that silence as indifference.",
      "We call this pattern **The Bastion**.",
    ],
    after: [
      "You learned it where needing someone rarely paid, so self-reliance feels like your character. What matters now is how early you feel the door closing, and whether you can hold it open a crack.",
    ],
  },
  'Caméléon': {
    head: "Halfway there. Something is already showing.",
    body: [
      "It looks like you live by a quiet rule: no one leaves someone who never causes a problem. So you read what this person wants to hear and that's what comes out, while your real opinion stays folded small.",
      "Never fighting looks like a great relationship from the outside. That's the trap. Years pass without one real argument and without anyone meeting the person under all the agreeing, and a yes you didn't mean leaves a small shame a beat behind it.",
      "We call this pattern **The Chameleon**.",
    ],
    after: [
      "You learned it where your real reactions caused trouble, so blending in feels like kindness. What matters now is how early you feel yourself folding, and whether your real answer survives the moment.",
    ],
  },
  'Alchimiste': {
    head: "Halfway there. Something is already showing.",
    body: [
      "It looks like you live by a quiet rule: what you can explain can't drown you. So you meet feelings the way you meet problems, and within minutes you have the cause, the pattern, maybe the very style it maps onto.",
      "Understanding lets you describe the pain without touching it. You can lay it out in clean terms and still go blank when someone asks what you feel right now, and the people close to you feel managed, not met.",
      "We call this pattern **The Alchemist**.",
    ],
    after: [
      "You learned it where feelings were unsafe and thinking was the room you controlled, so it feels like intelligence. What matters now is how early you catch the retreat into analysis, and whether the feeling gets its turn.",
    ],
  },
};

/* HALTE 2 — intros de l'Ancre, une par mécanisme (courtes, verbatim). */
const LP_HALTE_ANCHOR_INTROS = {
  'Miroir': {
    head: "One last thing, and it matters most.",
    body: [
      "You run The Mirror. The Anchor measures how deep it goes: how early you feel yourself start to reflect someone, and how much say you keep once you do. Everything in your result is built on it.",
      "Six questions, your life now. Answer with what actually happens, even when the honest one is the less flattering one.",
    ],
  },
  'Guetteur': {
    head: "One last thing, and it matters most.",
    body: [
      "You run The Watcher. The Anchor measures how deep it goes: how early you notice the scanning, and whether you can put the evidence down. Everything in your result is built on it.",
      "Six questions, your life now. Answer with what actually happens, even when the honest one is the less flattering one.",
    ],
  },
  'Sauveur': {
    head: "One last thing, and it matters most.",
    body: [
      "You run The Savior. The Anchor measures how deep it goes: how early the pull to fix hits, and how much of you is left when you resist it. Everything in your result is built on it.",
      "Six questions, your life now. Answer with what actually happens, even when the honest one is the less flattering one.",
    ],
  },
  'Incendiaire': {
    head: "One last thing, and it matters most.",
    body: [
      "You run The Arsonist. The Anchor measures how deep it goes: the gap between the spark and the strike, and how much say you keep inside it. Everything in your result is built on it.",
      "Six questions, your life now. Answer with what actually happens, even when the honest one is the less flattering one.",
    ],
  },
  'Fugitif': {
    head: "One last thing, and it matters most.",
    body: [
      "You run The Runaway. The Anchor measures how deep it goes: how early the exit opens, and whether staying is still a choice. Everything in your result is built on it.",
      "Six questions, your life now. Answer with what actually happens, even when the honest one is the less flattering one.",
    ],
  },
  'Bastion': {
    head: "One last thing, and it matters most.",
    body: [
      "You run The Bastion. The Anchor measures how deep it goes: how early the door closes, and whether you can hold it open. Everything in your result is built on it.",
      "Six questions, your life now. Answer with what actually happens, even when the honest one is the quieter one.",
    ],
  },
  'Caméléon': {
    head: "One last thing, and it matters most.",
    body: [
      "You run The Chameleon. The Anchor measures how deep it goes: how early you feel yourself fold, and whether your real answer survives. Everything in your result is built on it.",
      "Six questions, your life now. Answer with what actually happens, even when the honest one is the less flattering one.",
    ],
  },
  'Alchimiste': {
    head: "One last thing, and it matters most.",
    body: [
      "You run The Alchemist. The Anchor measures how deep it goes: how early you retreat into analysis, and whether the feeling gets a turn. Everything in your result is built on it.",
      "Six questions, your life now. Answer with what actually happens, even when the honest one is the less flattering one.",
    ],
  },
};

/* Route sécure — HALTE 1 (les deux axes bas) et page résultat, verbatim (brief). */
const LP_HALTE_SECURE_REVEAL = {
  head: "Halfway there. Something unusual is showing.",
  body: [
    "Most people who take this test show one clear pattern by now. Your answers don't. So far, it looks like no pattern is steering you: low alarm at distance, low pull away from closeness. That's the region attachment researchers call secure, and it's rarer than people think, especially among those who seek out a test like this one.",
    "A few more questions to check it properly. Answer them the same way, with what actually happens.",
  ],
};
const LP_HALTE_SECURE_RESULT = {
  head: "Clear. That's rare.",
  body: [
    "Your answers place you low on both of the dimensions attachment research measures: the fear of distance, and the pull away from closeness. In plain terms, when things wobble in your relationships, you still hold the wheel. You can feel hurt without building a case, need someone without disappearing into them, and take space without packing a bag.",
    "This is the region researchers call secure, and it's the direction every pattern in this test points toward. You're already standing where the map leads.",
    "Nothing to fix here, and we won't pretend otherwise. If someone you care about struggles where you don't, this test is the kind of thing that starts a real conversation.",
  ],
};

const LP_HALTES = {
  framing:      LP_HALTE_FRAMING,
  reveals:      LP_HALTE_REVEALS,
  anchorIntros: LP_HALTE_ANCHOR_INTROS,
  secureReveal: LP_HALTE_SECURE_REVEAL,
  secureResult: LP_HALTE_SECURE_RESULT,
};

/* All 8 Anchor variants: Miroir (here) + the 7 from test_data_ancre.jsx
   (loaded BEFORE this file). The flow picks the variant matching the dominant
   pattern figé at the end of Étage 1. */
const LP_ANCRE_ALL = Object.assign({ 'Miroir': LP_TEST_C2_MIROIR }, window.LP_ANCRE_VARIANTS || {});

/* ============================================================================
   OFFRE (v3) — données par mécanisme lues par test_result.jsx.
   ----------------------------------------------------------------------------
   La page résultat → offre v3 est presque entièrement de la copy PARTAGÉE
   (verbatim, EN) vivant dans test_result.jsx. Seuls quelques éléments varient
   par mécanisme, et ils vivent ici :
     · quiet      — la « quiet rule » du hero (verbatim, fournie par le brief) ;
     · region     — le pôle affiché sur la carte science (anxious/distant/both) ;
     · loop       — la boucle validée de Miroir (5 étapes) ; les 7 autres
                    retombent sur le visuel loop de free_content + loopAnchor ;
     · loopAnchor — l'index de l'étape « le pattern prend la barre » ;
     · cost       — { lead, punch } du bloc coût (Miroir seul ; les 7 autres
                    retombent sur le paragraphe du milieu de leur Halte 1) ;
     · deliver    — les 5 livrables. Miroir = tableau {name, benefit} validé ;
                    les 7 autres = objet interim monté en 5 cartes côté rendu.
   Miroir est VERBATIM (page-offre-miroir-nu-v3.md). Les 7 autres mécanismes
   n'ont pas encore été portés à la marque « Anchor Map » côté rapport payant :
   leurs libellés ici sont des INTERIMS ancrés sur la boucle + la quiet rule,
   à remplacer par une passe de copy dédiée (comme les interims de coût). */
const LP_OFFER = {
  quiet: {
    'Miroir':      `as long as you're what they need, they have no reason to leave.`,
    'Guetteur':    `what you see coming can't blindside you.`,
    'Sauveur':     `someone who needs you won't leave you.`,
    'Incendiaire': `you can survive their anger, but not their silence.`,
    'Fugitif':     `nothing can trap you if you never fully arrive.`,
    'Bastion':     `if you need no one, no one can hurt you.`,
    'Caméléon':    `no one leaves someone who never causes a problem.`,
    'Alchimiste':  `what you can explain can't drown you.`,
  },
  /* Index (0-based) de l'étape de la boucle où TU exécutes ta stratégie —
     « the moment the pattern takes the helm ». Aligné sur les steps du visuel
     loop de free_content.client.js. */
  loopAnchor: {
    'Miroir':2, 'Bastion':2, 'Fugitif':2, 'Guetteur':2, 'Alchimiste':2,
    'Caméléon':1, 'Sauveur':1, 'Incendiaire':1,
  },
  /* Carte science — région (pôle) par mécanisme. anxious / distant / both. */
  region: {
    'Miroir':'anxious', 'Guetteur':'anxious', 'Sauveur':'anxious', 'Incendiaire':'anxious',
    'Fugitif':'distant', 'Bastion':'distant',
    'Caméléon':'both', 'Alchimiste':'both',
  },
  /* BLOC LOOP — Miroir : boucle 5 étapes validée (gabarit, point d'ancrage
     = étape 3, index 2). Les 7 autres retombent sur le visuel loop (4 étapes)
     de free_content.client.js + l'index loopAnchor. */
  loop: {
    'Miroir': { anchor:2, steps:[
      `Their mood shifts. A tone, a silence, a shorter reply.`,
      `You feel it before a word is said.`,
      `You become what they need.`,
      `Your own wants go quiet.`,
      `Resentment, then emptiness. Then it restarts.`,
    ] },
  },
  /* BLOC 4 — coût. { lead, punch }. Miroir verbatim gabarit ; les 7 autres
     retombent sur le paragraphe du milieu de leur Halte 1 (interim, sans punch). */
  cost: {
    'Miroir': { lead:`Every year, "what do you want?" takes longer to answer.`, punch:`I don't know who I am without them.` },
  },
  /* BLOC 5 — les livrables. Miroir = les 5 titres-transformation validés du
     gabarit (tableau {name, benefit}). Les 7 autres = interim (objet
     catch/kit/blind ci-dessous), montés en 5 cartes par test_result.jsx. */
  deliver: {
    'Miroir': [
      { name:`The Mirror Catch analysis`,              benefit:`We show you the exact pattern running you, named and mapped.` },
      { name:`The 30-Day transformation plan`,         benefit:`A day-by-day path to take the helm back, built for where you are.` },
      { name:`Your way back in the hardest moment`,    benefit:`The 90-second rescue for when you feel yourself starting to disappear.` },
      { name:`Finally understand why closeness hurts`, benefit:`The hidden reason love keeps landing on a version of you, and never on you.` },
      { name:`Your reading list`,                      benefit:`The right next step to keep going, chosen for you.` },
    ],
    'Guetteur': {
      catch:  `The Alarm Catch`,
      catchB: `one line that stops the scanning mid-conversation, before you start building the case.`,
      kit:    `When the Surge Hits`,
      kitB:   `the pocket kit for the moment the search for proof takes over.`,
      blindB: `the blind spot that keeps you watching and never reassured.`,
    },
    'Sauveur': {
      catch:  `The Savior Catch`,
      catchB: `one line that stops the rescue mid-conversation, before their problem becomes your project.`,
      kit:    `Before You Take It On`,
      kitB:   `the pocket kit for the moment you start carrying their weight as your own.`,
      blindB: `the blind spot that keeps you needed and never chosen.`,
    },
    'Incendiaire': {
      catch:  `The Arsonist Catch`,
      catchB: `one line that stops the test mid-conversation, before the spark catches.`,
      kit:    `Before You Strike`,
      kitB:   `the pocket kit for the moment you feel the spark rising and reach for the match.`,
      blindB: `the blind spot that keeps you close through fire and never at peace.`,
    },
    'Fugitif': {
      catch:  `The Runaway Catch`,
      catchB: `one line that stops the pull to the door mid-conversation, before distance decides for you.`,
      kit:    `Before You Run`,
      kitB:   `the pocket kit for the moment the exit opens and the room starts to shrink.`,
      blindB: `the blind spot that keeps you free and never held.`,
    },
    'Bastion': {
      catch:  `The Bastion Catch`,
      catchB: `one line that stops the shutdown mid-conversation, before the door closes.`,
      kit:    `Before You Shut Down`,
      kitB:   `the pocket kit for the moment you feel yourself going cold and far away.`,
      blindB: `the blind spot that keeps you safe and never reached.`,
    },
    'Caméléon': {
      catch:  `The Chameleon Catch`,
      catchB: `one line that stops the fold mid-conversation, before your real answer disappears.`,
      kit:    `Before You Fold`,
      kitB:   `the pocket kit for the moment you feel your real opinion folding small.`,
      blindB: `the blind spot that keeps you liked and never known.`,
    },
    'Alchimiste': {
      catch:  `The Alchemist Catch`,
      catchB: `one line that stops the retreat into analysis mid-conversation, before the feeling gets filed away.`,
      kit:    `Before You Explain It Away`,
      kitB:   `the pocket kit for the moment feeling turns into analysis.`,
      blindB: `the blind spot that keeps you understood and never touched.`,
    },
  },
};

/* Representative default (Miroir path). The flow rebuilds its own step list. */
const LP_TEST_QUESTIONS = [].concat(LP_TEST_C0, LP_TEST_AXES, LP_TEST_C1, LP_TEST_C2_MIROIR, LP_TEST_C3);

const LP_TEST = {
  scale: LP_TEST_SCALE,
  chapters: LP_TEST_CHAPTERS,
  questions: LP_TEST_QUESTIONS,
  c0: LP_TEST_C0,
  axes: LP_TEST_AXES,   /* Étage 1 Phase A — les deux axes */
  c1: LP_TEST_C1,       /* Étage 1 Phase B — le départage par mécanisme */
  c3: LP_TEST_C3,       /* Étage 2 bis — sabotage */
  ancre: LP_ANCRE_ALL,
  haltes: LP_HALTES,
  offer: LP_OFFER,   /* v3 : données par mécanisme de la page résultat → offre */
  /* Anchor palier reference (engine + result use these; not shown as a list). */
  paliers: [
    { v:0, fr:"Je le sens venir et je peux faire autrement", en:"I feel it coming and I can do otherwise" },
    { v:1, fr:"Je me rends compte sur le moment",            en:"I notice it in the moment" },
    { v:2, fr:"Je sais que je le fais, et je le fais quand même", en:"I know I'm doing it, and I do it anyway" },
    { v:3, fr:"Je comprends, mais toujours après coup",      en:"I understand, but always after the fact" },
    { v:4, fr:"Pour moi, le problème c'est l'autre",         en:"For me, the problem is the other person" },
  ],
  /* The 8 patterns, ordered, with their family hue (for the result chart). */
  patterns: [
    { key:'Miroir',      fr:'Le Miroir',      en:'The Mirror',      fam:'efface' },
    { key:'Fugitif',     fr:'Le Fugitif',     en:'The Runner',      fam:'fuis' },
    { key:'Bastion',     fr:'Le Bastion',     en:'The Fortress',    fam:'protege' },
    { key:'Guetteur',    fr:'Le Guetteur',    en:'The Watcher',     fam:'poursuis' },
    { key:'Sauveur',     fr:'Le Sauveur',     en:'The Rescuer',     fam:'efface' },
    { key:'Caméléon',    fr:'Le Caméléon',    en:'The Chameleon',   fam:'efface' },
    { key:'Alchimiste',  fr:"L'Alchimiste",   en:'The Alchemist',   fam:'controle' },
    { key:'Incendiaire', fr:"L'Incendiaire",  en:'The Firestarter', fam:'poursuis' },
  ],
  /* The 3 sabotage dimensions (for the result). */
  sabotage: [
    { key:'defensivite', fr:'Défensivité',            en:'Defensiveness' },
    { key:'confiance',   fr:'Difficulté de confiance', en:'Trust difficulty' },
    { key:'competences', fr:'Déficit de compétences',  en:'Skills deficit' },
  ],
};

Object.assign(window, { LP_TEST });
