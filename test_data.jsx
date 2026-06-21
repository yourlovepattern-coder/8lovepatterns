/* ============================================================================
   8LovePatterns — TEST CONTENT  (source of truth = "Document de référence")
   ----------------------------------------------------------------------------
   27 screens across 4 chapters. One question per screen.
     · Chapter 0 — Pour faire connaissance : 3 cadrage questions (single choice)
     · Chapter 1 — Ta façon de réagir      : 12 pattern questions (matrix, 5 levels)
     · Chapter 2 — Quand ça t'arrive        : 6 Anchor questions (single, 5 paliers)
     · Chapter 3 — Dans tes relations       : 6 sabotage questions (statement, 5 levels)

   DISPLAY RULE: every bracketed [label] from the reference doc lives here ONLY as
   a data field (pattern / palier / dimension / axe / branche / repetition /
   securite). It is used by the (separately coded) scoring engine and is NEVER
   rendered on screen. The UI in test.jsx only ever reads .fr / .en text.

   French is the validated copy from the brief. English is a faithful, tone-matched
   draft (tutoiement → warm "you", no em dashes) for the EN/FR language widget.
   ========================================================================== */

/* The 5-level scale used by Chapter 1 (matrix) and Chapter 3 (statements).
   Scored 0..4 (Pas du tout moi = 0 … Tout à fait moi = 4) by the engine. */
const LP_TEST_SCALE = [
  { v:0, fr:'Pas du tout moi',   en:'Not me at all' },
  { v:1, fr:'Un peu moi',        en:'A little me' },
  { v:2, fr:'Moyen, ça dépend',  en:'In between, it depends' },
  { v:3, fr:'Plutôt moi',        en:'Mostly me' },
  { v:4, fr:'Tout à fait moi',   en:'Completely me' },
];

/* The four chapters (n is the reference-doc number; display is "Chapitre n sur 4"). */
const LP_TEST_CHAPTERS = [
  { n:0, type:'cadrage',  fr:'Pour faire connaissance', en:'Getting to know you' },
  { n:1, type:'pattern',  fr:'Ta façon de réagir',      en:'How you react' },
  { n:2, type:'ancre',    fr:"Quand ça t'arrive",       en:'When it happens to you' },
  { n:3, type:'sabotage', fr:'Dans tes relations',      en:'In your relationships' },
];

/* ----------------------------------------------------------------------------
   CHAPTER 0 — CADRAGE  (kind: 'single' — single choice, auto-advance)
   -------------------------------------------------------------------------- */
const LP_TEST_C0 = [
  { id:'C1', chapter:0, kind:'single',
    situation:{
      fr:"Pour commencer, dis-moi où tu en es en ce moment. Il n'y a pas de bonne réponse, ça nous sert juste à te parler de ta vie à toi, pas de celle d'un autre.",
      en:"To start, tell me where you are right now. There is no right answer, it just lets us talk about your life, not someone else's." },
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
   CHAPTER 1 — PATTERN  (kind: 'matrix' — rate EACH of 5 reactions, 5-level scale)
   The [Pattern] label on each reaction is data only.
   -------------------------------------------------------------------------- */
const LP_TEST_C1 = [
  { id:'P1', chapter:1, kind:'matrix',
    situation:{
      fr:"Tu envoies un message à la personne qui compte pour toi, et plusieurs heures passent sans réponse. Qu'est-ce qui se passe en toi ?",
      en:"You send a message to the person who matters to you, and several hours go by with no reply. What happens inside you?" },
    reactions:[
      { pattern:'Guetteur',    fr:"Je relis nos derniers échanges pour trouver ce que j'aurais pu dire de travers", en:"I reread our last exchanges to find what I might have said wrong" },
      { pattern:'Fugitif',     fr:"Je me détache un peu, je me prépare déjà à ce que ça se termine",                en:"I detach a little, I'm already bracing for it to end" },
      { pattern:'Bastion',     fr:"Je m'occupe, je me dis que ça ne me touche pas tant que ça",                     en:"I keep busy, I tell myself it doesn't really get to me" },
      { pattern:'Incendiaire', fr:"J'ai envie de relancer, voire de provoquer une réaction pour ne pas rester dans le vide", en:"I want to push again, even provoke a reaction so I'm not left hanging" },
      { pattern:'Miroir',      fr:"Je cherche ce que je pourrais faire pour que tout redevienne fluide entre nous", en:"I look for what I could do to make things flow smoothly between us again" },
    ] },
  { id:'P2', chapter:1, kind:'matrix',
    situation:{
      fr:"La relation devient sérieuse, l'autre veut se rapprocher, se projeter. Ta réaction la plus spontanée ?",
      en:"The relationship gets serious, the other person wants to get closer, to plan ahead. Your most spontaneous reaction?" },
    reactions:[
      { pattern:'Fugitif',   fr:"Je me sens un peu à l'étroit, j'ai besoin de garder mon espace",        en:"I feel a bit cramped, I need to keep my space" },
      { pattern:'Miroir',    fr:"Je deviens ce qu'il attend, je m'ajuste à sa vision de nous",           en:"I become what they expect, I adjust to their vision of us" },
      { pattern:'Alchimiste',fr:"J'analyse si c'est raisonnable, je réfléchis avant de ressentir",       en:"I analyze whether it's reasonable, I think before I feel" },
      { pattern:'Guetteur',  fr:"Je me demande s'il est vraiment fiable, je reste sur mes gardes",       en:"I wonder if they're really reliable, I stay on my guard" },
      { pattern:'Sauveur',   fr:"Je m'investis encore plus dans ce que je peux lui apporter",           en:"I invest even more in what I can bring to them" },
    ] },
  { id:'P3', chapter:1, kind:'matrix',
    situation:{
      fr:"Vous vous disputez, le ton monte. Qu'est-ce que tu fais le plus souvent ?",
      en:"You're arguing, the tone rises. What do you do most often?" },
    reactions:[
      { pattern:'Bastion',     fr:"Je me ferme, je me tais, je quitte la pièce pour me calmer",            en:"I shut down, I go quiet, I leave the room to calm down" },
      { pattern:'Incendiaire', fr:"J'en rajoute, je hausse le ton, au moins on se parle vraiment",         en:"I push harder, I raise my voice, at least we're really talking" },
      { pattern:'Caméléon',    fr:"Je cède vite, je dis ce qu'il faut pour que ça s'arrête",               en:"I give in fast, I say whatever it takes to make it stop" },
      { pattern:'Alchimiste',  fr:"J'explique calmement, je rationalise, je garde le contrôle de mes émotions", en:"I explain calmly, I rationalize, I keep control of my emotions" },
      { pattern:'Miroir',      fr:"Je cherche à réparer tout de suite, à retrouver l'accord coûte que coûte", en:"I try to repair it right away, to get back in sync at any cost" },
    ] },
  { id:'P4', chapter:1, kind:'matrix',
    situation:{
      fr:"Tu rencontres quelqu'un qui te plaît vraiment, au tout début. Comment tu te comportes ?",
      en:"You meet someone you really like, at the very beginning. How do you behave?" },
    reactions:[
      { pattern:'Caméléon', fr:"Je m'adapte à ce qu'il aime, je sens ce qu'il attend et je deviens ça",  en:"I adapt to what they like, I sense what they expect and I become that" },
      { pattern:'Bastion',  fr:"Je garde une part de distance, je ne montre pas tout de suite que je tiens à lui", en:"I keep some distance, I don't show right away that I care" },
      { pattern:'Guetteur', fr:"J'observe le moindre signe pour deviner s'il est sincère",              en:"I watch the smallest sign to guess whether they're sincere" },
      { pattern:'Sauveur',  fr:"Je me rends vite indispensable, j'anticipe ses besoins",                en:"I quickly make myself indispensable, I anticipate their needs" },
      { pattern:'Fugitif',  fr:"Une partie de moi cherche déjà la sortie au cas où",                    en:"A part of me is already looking for the exit, just in case" },
    ] },
  { id:'P5', chapter:1, kind:'matrix',
    situation:{
      fr:"L'autre traverse une période difficile et a besoin de soutien. Ce que tu fais ?",
      en:"The other person is going through a hard time and needs support. What do you do?" },
    reactions:[
      { pattern:'Sauveur',   fr:"Je me rends disponible à fond, ses problèmes passent avant les miens",  en:"I make myself fully available, their problems come before mine" },
      { pattern:'Alchimiste',fr:"Je l'aide en cherchant des solutions concrètes, j'analyse ce qu'il faut faire", en:"I help by looking for concrete solutions, I analyze what needs doing" },
      { pattern:'Caméléon',  fr:"Je m'ajuste à son humeur pour ne surtout pas ajouter de tension",       en:"I adjust to their mood so I don't add any tension" },
      { pattern:'Fugitif',   fr:"Je suis là, mais je garde une distance pour ne pas être absorbé",        en:"I'm there, but I keep a distance so I don't get absorbed" },
      { pattern:'Guetteur',  fr:"Je m'inquiète de ce que ça veut dire pour nous, est-ce qu'il va s'éloigner", en:"I worry about what it means for us, whether they'll drift away" },
    ] },
  { id:'P6', chapter:1, kind:'matrix',
    situation:{
      fr:"Tu sens que l'autre est un peu plus froid que d'habitude, sans explication.",
      en:"You sense the other person is a little colder than usual, with no explanation." },
    reactions:[
      { pattern:'Bastion',     fr:"Je me prépare intérieurement à être déçu, je me protège en prenant les devants", en:"I brace myself inwardly for disappointment, I protect myself by getting ahead of it" },
      { pattern:'Incendiaire', fr:"Je provoque une explication, quitte à créer une tension pour savoir",  en:"I force a conversation, even creating tension just to know" },
      { pattern:'Miroir',      fr:"Je deviens plus attentif, plus parfait, pour qu'il revienne vers moi",  en:"I become more attentive, more perfect, so they come back to me" },
      { pattern:'Guetteur',    fr:"Je décortique tout ce qu'il a dit ou fait récemment pour comprendre",   en:"I pick apart everything they recently said or did to understand" },
      { pattern:'Fugitif',     fr:"Je me dis que c'est peut-être mieux de prendre mes distances aussi",    en:"I tell myself maybe it's better to keep my distance too" },
    ] },
  { id:'P7', chapter:1, kind:'matrix',
    situation:{
      fr:"Une personne te fait un compliment sincère et te montre qu'elle tient vraiment à toi. Ce qui se passe en toi ?",
      en:"Someone gives you a sincere compliment and shows you they really care. What happens inside you?" },
    reactions:[
      { pattern:'Guetteur', fr:"J'ai du mal à le croire, je cherche ce qu'il y a derrière",            en:"I find it hard to believe, I look for what's behind it" },
      { pattern:'Bastion',  fr:"Je me sens mal à l'aise avec autant de proximité, je minimise",         en:"I feel uneasy with so much closeness, I play it down" },
      { pattern:'Sauveur',  fr:"Ça me touche, et aussitôt j'ai envie de lui rendre au double",          en:"It touches me, and right away I want to give back double" },
      { pattern:'Miroir',   fr:"Je me demande si je mérite ça, si je suis à la hauteur de ce qu'il voit en moi", en:"I wonder if I deserve it, if I live up to what they see in me" },
      { pattern:'Fugitif',  fr:"Je profite du moment mais je reste sur la réserve sur la suite",        en:"I enjoy the moment but stay guarded about what comes next" },
    ] },
  { id:'P8', chapter:1, kind:'matrix',
    situation:{
      fr:"Tu n'es pas d'accord avec l'autre sur quelque chose qui compte pour toi. Comment tu gères ?",
      en:"You disagree with the other person about something that matters to you. How do you handle it?" },
    reactions:[
      { pattern:'Caméléon',    fr:"Je garde ça pour moi, je n'ose pas dire le fond de ma pensée",          en:"I keep it to myself, I don't dare say what I really think" },
      { pattern:'Alchimiste',  fr:"Je le dis, mais de façon très posée et argumentée, sans laisser l'émotion parler", en:"I say it, but very calmly and with arguments, without letting emotion speak" },
      { pattern:'Miroir',      fr:"Je finis par m'aligner sur son avis pour préserver l'harmonie",         en:"I end up aligning with their view to keep the peace" },
      { pattern:'Incendiaire', fr:"Je peux m'emporter, monter dans les tours pour que ça bouge",           en:"I can flare up, get worked up so that something moves" },
      { pattern:'Bastion',     fr:"Je me braque et je me referme plutôt que de continuer à en parler",     en:"I dig in and close up rather than keep talking about it" },
    ] },
  { id:'P9', chapter:1, kind:'matrix',
    situation:{
      fr:"La relation se termine, ou tu sens qu'elle pourrait se terminer. Ta réaction ?",
      en:"The relationship is ending, or you sense it could end. Your reaction?" },
    reactions:[
      { pattern:'Bastion',     fr:"Je me jette dans le travail ou autre chose, je tiens à distance ce que je ressens", en:"I throw myself into work or something else, I keep what I feel at arm's length" },
      { pattern:'Incendiaire', fr:"Je tente tout pour raviver le lien, quitte à provoquer des scènes intenses", en:"I try everything to revive the bond, even causing intense scenes" },
      { pattern:'Sauveur',     fr:"Je cherche désespérément ce que j'ai mal fait pour le réparer",          en:"I desperately search for what I did wrong so I can fix it" },
      { pattern:'Alchimiste',  fr:"Je rationalise, je m'explique pourquoi c'était logique que ça finisse",  en:"I rationalize, I explain to myself why it was logical for it to end" },
      { pattern:'Fugitif',     fr:"Une partie de moi se détache avant même que ce soit fini, pour souffrir moins", en:"A part of me detaches before it's even over, to hurt less" },
    ] },
  { id:'P10', chapter:1, kind:'matrix',
    situation:{
      fr:"Tu es en couple et tout va bien, c'est calme et stable depuis un moment. Comment tu vis cette tranquillité ?",
      en:"You're in a relationship and all is well, it's been calm and stable for a while. How do you live that calm?" },
    reactions:[
      { pattern:'Incendiaire', fr:"Je me sens bien, mais une voix se demande si ce n'est pas trop calme, s'il tient encore à moi", en:"I feel good, but a voice wonders if it's too calm, whether they still care" },
      { pattern:'Guetteur',    fr:"Je guette les signes que ça pourrait se dégrader, je reste vigilant",    en:"I watch for signs it could go downhill, I stay vigilant" },
      { pattern:'Fugitif',     fr:"Je commence à me sentir un peu enfermé, j'ai besoin d'air",              en:"I start to feel a bit boxed in, I need air" },
      { pattern:'Sauveur',     fr:"J'en profite pour m'occuper encore mieux de lui et de nous",            en:"I use it to take even better care of them and of us" },
      { pattern:'Miroir',      fr:"Je me fonds dans cette vie à deux, au point de ne plus savoir ce que moi je veux", en:"I dissolve into life as a couple, to the point of no longer knowing what I want" },
    ] },
  { id:'P11', chapter:1, kind:'matrix',
    situation:{
      fr:"L'autre te demande ce que tu veux vraiment, ce dont tu as besoin. Ta réaction honnête ?",
      en:"The other person asks what you really want, what you need. Your honest reaction?" },
    reactions:[
      { pattern:'Caméléon',  fr:"Je réponds ce qui lui fera plaisir plutôt que ce que je pense vraiment",  en:"I answer what will please them rather than what I really think" },
      { pattern:'Miroir',    fr:"J'ai du mal à savoir, je me suis tellement adapté que je ne sais plus",   en:"I struggle to know, I've adapted so much that I'm not sure anymore" },
      { pattern:'Alchimiste',fr:"Je réponds par une analyse, j'explique plus que je ne ressens",           en:"I answer with an analysis, I explain more than I feel" },
      { pattern:'Bastion',   fr:"Je reste vague, je n'aime pas trop me livrer là-dessus",                  en:"I stay vague, I don't much like opening up about that" },
      { pattern:'Guetteur',  fr:"Je dis surtout que je veux être sûr de lui, savoir qu'il est là pour de vrai", en:"I mostly say I want to be sure of them, to know they're really here" },
    ] },
  { id:'P12', chapter:1, kind:'matrix',
    situation:{
      fr:"Après une dispute, le calme est revenu. Comment tu reviens vers l'autre ?",
      en:"After an argument, calm has returned. How do you come back toward the other person?" },
    reactions:[
      { pattern:'Incendiaire', fr:"J'attends de voir s'il fait le premier pas, je teste un peu s'il tient à réparer", en:"I wait to see if they make the first move, I test a little whether they want to repair it" },
      { pattern:'Caméléon',    fr:"Je reviens en m'excusant, même si au fond je ne suis pas sûr d'avoir eu tort", en:"I come back apologizing, even if deep down I'm not sure I was wrong" },
      { pattern:'Bastion',     fr:"Je reprends comme si de rien n'était, je n'aime pas remuer tout ça",      en:"I pick up as if nothing happened, I don't like stirring all that up" },
      { pattern:'Sauveur',     fr:"Je reviens en prenant soin de lui, en faisant un geste pour lui",        en:"I come back by taking care of them, doing something kind for them" },
      { pattern:'Guetteur',    fr:"Je veux qu'on en reparle à fond pour tout comprendre et être sûr que c'est réglé", en:"I want us to talk it all the way through, to understand everything and be sure it's settled" },
    ] },
];

/* ----------------------------------------------------------------------------
   CHAPTER 2 — ANCRE  (kind: 'single' — single choice among 5 paliers)
   NOTE: these 6 questions are ADAPTED to the dominant pattern from Chapter 1.
   The Miroir variant is shipped here (per the brief); the engine will swap in the
   right variant once scoring runs. The [palier=N] label is data only.
   The deepest palier (4) is always written to sound legitimate, never an admission.
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
   CHAPTER 3 — SABOTAGE  (kind: 'statement' — one statement, 5-level scale)
   Backed by the 3 dimensions of the Relationship Sabotage Scale.
   [dimension] and optional [axe] are data only.
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

/* All 8 Anchor variants: Miroir (here) + the 7 from test_data_ancre.jsx
   (loaded BEFORE this file). The flow picks the variant matching the dominant
   pattern detected in Chapter 1. */
const LP_ANCRE_ALL = Object.assign({ 'Miroir': LP_TEST_C2_MIROIR }, window.LP_ANCRE_VARIANTS || {});

/* Default ordered test (27 screens), Miroir variant. The flow rebuilds this
   list dynamically once the Chapter 1 dominant pattern is known. */
const LP_TEST_QUESTIONS = [].concat(LP_TEST_C0, LP_TEST_C1, LP_TEST_C2_MIROIR, LP_TEST_C3);

const LP_TEST = {
  scale: LP_TEST_SCALE,
  chapters: LP_TEST_CHAPTERS,
  questions: LP_TEST_QUESTIONS,
  c0: LP_TEST_C0, c1: LP_TEST_C1, c3: LP_TEST_C3,
  ancre: LP_ANCRE_ALL,
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
