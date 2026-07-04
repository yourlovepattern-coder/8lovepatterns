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
      "It looks like you live by a quiet rule: as long as you're what they need, they have no reason to leave. So you read a room fast, you catch a mood shift before it's spoken, and by the time you've noticed it you're already becoming the version that keeps things smooth. It rarely feels like a decision. Most days it feels like being you.",
      "If this fits, you know the strange part already. The closeness works. People relax around you, they call you easygoing, the one who never makes a fuss. And somewhere in all that harmony your own preferences go quiet. Someone asks what you want, or just where you'd like to eat, and there's a blank where the answer should be. Researchers who study this describe it the same way: the question of what you want gets overwritten, again and again, by what's wanted of you, until the signal goes faint.",
      "People who answer the way you have tend to say the same thing. One cooler reply can take over a whole afternoon. And inside a relationship that looks fine from the outside, they often feel alone in it, close to someone who never quite met the real them.",
      "We call this pattern **The Mirror**.",
    ],
    after: [
      "A pattern like this grows for a reason. You learned it early, when reading people and adjusting to them was what kept you safe, and it worked well enough that it stopped feeling like a strategy and started feeling like your personality. What stays hidden for now is the part that changes everything: how early you catch the reflex, and how much say you still have once it starts. Two people carry the same pattern and live very different lives depending on that one thing.",
    ],
  },
  'Guetteur': {
    head: "Halfway there. Something is already showing.",
    body: [
      "It looks like you live by a quiet rule: what you see coming can't blindside you. So you track things other people never register. A reply that lands slower than usual, a hug that ends half a second early, a tone one shade cooler than yesterday. You notice before you've decided to look, and once you've noticed, you start building the case.",
      "If this fits, you know the strange part already. The watching feels like protection. If you can spot the leaving early enough, it can never blindside you. But you're never off duty. Even the good evenings get scanned for evidence, and reassurance works for about an hour before the checking starts again.",
      "People who answer the way you have describe the same exhaustion. A silence anyone else would read as neutral sets off an alarm in the body, and the alarm doesn't care that you know better. Researchers who study this call it hypervigilance: a nervous system that learned, somewhere along the way, to treat love and danger as neighbors. It's tiring in a way that's hard to explain to someone who doesn't live it.",
      "We call this pattern **The Watcher**.",
    ],
    after: [
      "A pattern like this grows for a reason. You learned it where attention was the difference between being cared for and being missed, and watching worked. It kept you a step ahead of the hurt often enough that it stopped feeling like a skill and started feeling like who you are. What stays hidden for now is the part that changes everything: how early you catch yourself scanning, and whether you can set the evidence down once you've picked it up. Two people carry the same pattern and live very different lives depending on that.",
    ],
  },
  'Sauveur': {
    head: "Halfway there. Something is already showing.",
    body: [
      "It looks like you live by a quiet rule: someone who needs you won't leave you. So you see what's missing in someone before they've said it, and you step in to supply it. Their problem becomes your project, sometimes before they've asked, and taking care of things is how you say the things you don't say out loud.",
      "If this fits, you know the strange part already. Being needed feels like being loved, and for long stretches the two are impossible to tell apart. People lean on you. They say they don't know what they'd do without you, and it lands like warmth. Meanwhile your own needs go to the back of the line so quietly that even you stop hearing them.",
      "People who answer the way you have tend to notice the cost late. The tiredness that doesn't sleep off. The flicker of resentment when nobody thinks to ask how you are, followed fast by guilt for feeling it. Researchers describe the same trade: when love gets earned through what you do, being known for who you are starts to feel unsafe. And if the person you're carrying gets better, a small panic can show up right where the relief should be.",
      "We call this pattern **The Savior**.",
    ],
    after: [
      "A pattern like this grows for a reason. You learned it where love was something you earned by being useful, and it worked. Useful got you kept. It worked well enough that it stopped feeling like a role and started feeling like your worth. What stays hidden for now is the part that changes everything: how early you feel the pull to step in, and how much of you is left when you resist it. Two people carry the same pattern and live very different lives depending on that.",
    ],
  },
  'Incendiaire': {
    head: "Halfway there. Something is already showing.",
    body: [
      "It looks like you live by a quiet rule: you can survive their anger, but not their silence. So when you feel someone drifting, something in you moves to force contact, any contact. A sharp question, a test, a spark you already know will catch.",
      "If this fits, you know the strange part already. A fight, even a painful one, is still connection. Couples therapists hear it from people who carry this pattern in almost the same words every time: at least when we're fighting, I know you're still here. The flare is a question wearing armor. It asks whether they still care, in the only dialect that feels safe to ask it in.",
      "People who answer the way you have know the after. The shame that arrives once the smoke clears, sometimes minutes later, when you can see the crater and remember lighting the match. Researchers call these protest behaviors: moves designed to force a response from someone who feels out of reach. They tend to get the response, and lose the reach.",
      "We call this pattern **The Arsonist**.",
    ],
    after: [
      "A pattern like this grows for a reason. You learned it where calm never stayed safe for long, and where being loud was the surest way to be found. It worked. The fire got answered when nothing else did, and over time it stopped feeling like an emergency signal and started feeling like your temperament. What stays hidden for now is the part that changes everything: the length of the gap between the spark and the strike, and how much say you keep inside that gap. Two people carry the same pattern and live very different lives depending on it.",
    ],
  },
  'Fugitif': {
    head: "Halfway there. Something is already showing.",
    body: [
      "It looks like you live by a quiet rule: nothing can trap you if you never fully arrive. So some part of you keeps a bag packed. Things can be good, genuinely good, and still a quiet inventory runs in the background: where the exits are, what leaving would cost, who you'd be on the other side of it. The closer someone gets, the louder the inventory.",
      "If this fits, you know the strange part already. You want the closeness. That's the part people miss about you. But when it actually arrives, it can feel like a room slowly shrinking, and the urge to go shows up precisely when things start to matter. Leaving first means never being left. It works the way a fire escape works: you end up safe, and you end up outside.",
      "People who answer the way you have describe a string of almosts. Relationships that ended right as they turned real. A freedom that feels strangely like loss once the door has shut behind you. Researchers who study this say the urge was never about not wanting love; it's a nervous system that learned closeness and captivity can feel identical from the inside.",
      "We call this pattern **The Runaway**.",
    ],
    after: [
      "A pattern like this grows for a reason. You learned it where depending on someone didn't end well, and distance became the one thing that never betrayed you. It worked well enough that it stopped feeling like an escape and started feeling like your nature. What stays hidden for now is the part that changes everything: how early you feel the exit opening, and whether staying is still a choice by the time you do. Two people carry the same pattern and live very different lives depending on that.",
    ],
  },
  'Bastion': {
    head: "Halfway there. Something is already showing.",
    body: [
      "It looks like you live by a quiet rule: if you need no one, no one can hurt you. So when things get heavy, you go quiet and hold. The feelings don't flood you in the moment; they file somewhere out of reach, and what's left is calm, practical, a little far away. People in your life have probably called it coldness. From the inside it's closer to a door easing shut on its own.",
      "If this fits, you know the strange part already. The calm is real, and it's also the trick. You don't feel less than other people. You feel later. Hours later, sometimes days, sometimes only once the whole thing is over and there's no one left to tell. In the moment there's mostly quiet, and the old certainty that you can handle this alone, because you've always had to.",
      "People who answer the way you have often learn the price from the outside. A partner who stopped knocking. A breakup speech with the same sentence in it: I never felt like I could reach you. Researchers describe the mechanism as deactivation, a nervous system that mutes the signal rather than risk the flood, and the people who love you keep reading that silence as indifference.",
      "We call this pattern **The Bastion**.",
    ],
    after: [
      "A pattern like this grows for a reason. You learned it where needing someone was a risk that rarely paid, and self-reliance was the one strategy that never let you down. It worked well enough that it stopped feeling like armor and started feeling like your character. What stays hidden for now is the part that changes everything: how early you feel the door closing, and whether you can still hold it open a crack. Two people carry the same pattern and live very different lives depending on that.",
    ],
  },
  'Caméléon': {
    head: "Halfway there. Something is already showing.",
    body: [
      "It looks like you live by a quiet rule: no one leaves someone who never causes a problem. So you read what this particular person wants to hear, and that's what comes out. Your real opinion stays inside, folded small. Most people around you would say you're wonderfully easy to get along with, and every one of them would be describing the costume.",
      "If this fits, you know the strange part already. Never fighting looks, from the outside, like a great relationship. That's the trap of it. Years can go by without one real argument, and without one moment where somebody met the person underneath all the agreeing. And you know the quiet shame that follows a yes you didn't mean. It shows up a beat after the words do, every time.",
      "People who answer the way you have describe feeling invisible in plain sight, cared for by people who have never actually met them. Researchers link it to a learned reflex sometimes called fawning: when disagreement once meant danger, agreement becomes armor. The body says no while the mouth says yes, and the gap between the two gets wider every year it goes unspoken.",
      "We call this pattern **The Chameleon**.",
    ],
    after: [
      "A pattern like this grows for a reason. You learned it where your real reactions caused trouble, and blending in bought you peace. It worked well enough that it stopped feeling like hiding and started feeling like politeness, or kindness, or just your personality. What stays hidden for now is the part that changes everything: how early you feel yourself folding, and whether your real answer can survive the moment. Two people carry the same pattern and live very different lives depending on that.",
    ],
  },
  'Alchimiste': {
    head: "Halfway there. Something is already showing.",
    body: [
      "It looks like you live by a quiet rule: what you can explain can't drown you. So you meet feelings the way you meet problems: you take them apart. Something hurts, and within minutes you have the diagram, the likely cause, the pattern it fits, maybe even the attachment style it maps onto. There's a decent chance you've read more about all of this than anyone you know. Understanding is your first language.",
      "If this fits, you know the strange part already. Understanding lets you describe the pain without ever touching it. You can lay out your feelings in clean, accurate terms and still go blank when someone asks what you feel right now, in this room. The analysis is true. None of it is felt. And the people close to you can sense that difference, even when they can't put words on it.",
      "People who answer the way you have tend to hear the same feedback in different phrasings: you feel managed, not met. Researchers call the mechanism intellectualization, a mind that files each emotion under things I understand so the body never has to carry it. It works. And it leaves whoever loves you having a conversation with the file.",
      "We call this pattern **The Alchemist**.",
    ],
    after: [
      "A pattern like this grows for a reason. You learned it where feelings were unwelcome or unsafe, and thinking was the one room you controlled. Turning pain into ideas worked well enough that it stopped feeling like a defense and started feeling like intelligence. What stays hidden for now is the part that changes everything: how early you catch the retreat into analysis, and whether the feeling ever gets its turn. Two people carry the same pattern and live very different lives depending on that.",
    ],
  },
};

/* HALTE 2 — intros de l'Ancre, une par mécanisme (courtes, verbatim). */
const LP_HALTE_ANCHOR_INTROS = {
  'Miroir': {
    head: "One thing changes how you read everything that follows.",
    body: [
      "Knowing you run The Mirror names the pattern. It doesn't tell you how much it's costing you. Decades of attachment research point the same way: patterns like this sit on a dial, not in a set of boxes, and everyone lands somewhere on it. What shapes your relationships is where you land, how early you feel yourself start to reflect someone, and how much say you keep once it starts.",
      "That's what the Anchor measures, and everything in your result is built on it.",
      "Six questions. Same lens as before, your life now. Answer with what actually happens, even when the honest option is the less flattering one.",
    ],
  },
  'Guetteur': {
    head: "One thing changes how you read everything that follows.",
    body: [
      "Knowing you run The Watcher names the pattern. It doesn't tell you how much of your life it patrols. Decades of attachment research point the same way: patterns like this sit on a dial, not in a set of boxes, and everyone lands somewhere on it. What shapes your relationships is where you land, how early you notice the scanning start, and whether you can put the evidence down.",
      "That's what the Anchor measures, and everything in your result is built on it.",
      "Six questions. Same lens as before, your life now. Answer with what actually happens, even when the honest option is the less flattering one.",
    ],
  },
  'Sauveur': {
    head: "One thing changes how you read everything that follows.",
    body: [
      "Knowing you run The Savior names the pattern. It doesn't tell you what it's costing you. Decades of attachment research point the same way: patterns like this sit on a dial, not in a set of boxes, and everyone lands somewhere on it. What shapes your relationships is where you land, how early you feel the pull to fix, and how much of you is left when you don't.",
      "That's what the Anchor measures, and everything in your result is built on it.",
      "Six questions. Same lens as before, your life now. Answer with what actually happens, even when the honest option is the less flattering one.",
    ],
  },
  'Incendiaire': {
    head: "One thing changes how you read everything that follows.",
    body: [
      "Knowing you run The Arsonist names the pattern. It doesn't tell you how much keeps burning down. Decades of attachment research point the same way: patterns like this sit on a dial, not in a set of boxes, and everyone lands somewhere on it. What shapes your relationships is where you land, the gap between the spark and the strike, and how much say you keep inside it.",
      "That's what the Anchor measures, and everything in your result is built on it.",
      "Six questions. Same lens as before, your life now. Answer with what actually happens, even when the honest option is the less flattering one.",
    ],
  },
  'Fugitif': {
    head: "One thing changes how you read everything that follows.",
    body: [
      "Knowing you run The Runaway names the pattern. It doesn't tell you how many rooms you've already left. Decades of attachment research point the same way: patterns like this sit on a dial, not in a set of boxes, and everyone lands somewhere on it. What shapes your relationships is where you land, how early you feel the exit opening, and whether staying is still a choice.",
      "That's what the Anchor measures, and everything in your result is built on it.",
      "Six questions. Same lens as before, your life now. Answer with what actually happens, even when the honest option is the less flattering one.",
    ],
  },
  'Bastion': {
    head: "One thing changes how you read everything that follows.",
    body: [
      "Knowing you run The Bastion names the pattern. It doesn't tell you how thick the wall has gotten. Decades of attachment research point the same way: patterns like this sit on a dial, not in a set of boxes, and everyone lands somewhere on it. What shapes your relationships is where you land, how early you feel the door closing, and whether you can hold it open.",
      "That's what the Anchor measures, and everything in your result is built on it.",
      "Six questions. Same lens as before, your life now. Answer with what actually happens, even when the honest option is the quieter one.",
    ],
  },
  'Caméléon': {
    head: "One thing changes how you read everything that follows.",
    body: [
      "Knowing you run The Chameleon names the pattern. It doesn't tell you how much of you has gone quiet. Decades of attachment research point the same way: patterns like this sit on a dial, not in a set of boxes, and everyone lands somewhere on it. What shapes your relationships is where you land, how early you feel yourself folding, and whether your real answer survives.",
      "That's what the Anchor measures, and everything in your result is built on it.",
      "Six questions. Same lens as before, your life now. Answer with what actually happens, even when the honest option is the less flattering one.",
    ],
  },
  'Alchimiste': {
    head: "One thing changes how you read everything that follows.",
    body: [
      "Knowing you run The Alchemist names the pattern. It doesn't tell you what never gets felt. Decades of attachment research point the same way: patterns like this sit on a dial, not in a set of boxes, and everyone lands somewhere on it. What shapes your relationships is where you land, how early you catch the retreat into analysis, and whether the feeling gets a turn.",
      "That's what the Anchor measures, and everything in your result is built on it.",
      "Six questions. Same lens as before, your life now. Answer with what actually happens, even when the honest option is the less flattering one.",
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
