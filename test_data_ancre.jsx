/* ============================================================================
   8LovePatterns — CHAPITRE 2 (ANCRE) : les 7 variantes par pattern
   ----------------------------------------------------------------------------
   Source: uploads/8lovepatterns_Ancre_7_variantes.md (la variante Miroir vit
   dans test_data.jsx). Même structure partout: 5 réponses dans le même ordre
   logique, palier 0 (le plus libre) → palier 4 (le plus enfoncé). L'étiquette
   [palier=N] est une donnée pour le moteur, JAMAIS affichée.
   Règle d'or: la réponse palier=4 paraît toujours légitime, jamais un aveu.
   IDs préfixés par variante pour que changer de variante (retour en arrière au
   Chapitre 1) ne réutilise jamais des réponses périmées.
   Charger AVANT test_data.jsx.
   ========================================================================== */

window.LP_ANCRE_VARIANTS = {

/* ---------------- FUGITIF (prendre de la distance, fuir l'intimité) ------ */
'Fugitif': [
  { id:'Fugitif-A1', chapter:2, kind:'single', variant:'Fugitif',
    situation:{
      fr:"Tu sens le besoin de prendre de la distance alors que la relation se rapproche. En vrai, qu'est-ce qui se passe le plus souvent ?",
      en:"You feel the need to pull away just as the relationship gets closer. Honestly, what happens most often?" },
    options:[
      { palier:0, fr:"Je le sens venir, et de plus en plus je choisis de rester au lieu de fuir", en:"I feel it coming, and more and more I choose to stay instead of running" },
      { palier:1, fr:"Je me surprends en train de m'éloigner, pendant que je le fais", en:"I catch myself pulling away, while I'm doing it" },
      { palier:2, fr:"Je sais très bien que je prends la fuite, et je le fais quand même", en:"I know full well that I'm running, and I do it anyway" },
      { palier:3, fr:"Je comprends que j'ai fui seulement plus tard, quand le lien est déjà cassé", en:"I only understand that I ran later, when the bond is already broken" },
      { palier:4, fr:"Je ne fuis pas, j'ai juste besoin de mon espace et c'est sain", en:"I don't run, I just need my space and that's healthy" },
    ] },
  { id:'Fugitif-A2', chapter:2, kind:'single', variant:'Fugitif',
    situation:{
      fr:"Quand quelqu'un commence à compter vraiment pour toi, comment ça se passe ?",
      en:"When someone starts to really matter to you, how does it go?" },
    options:[
      { palier:0, fr:"Je repère le réflexe de reculer et je reste présent malgré l'inconfort", en:"I spot the urge to back away and I stay present despite the discomfort" },
      { palier:1, fr:"Je me vois mettre de la distance en direct, sans toujours pouvoir l'arrêter", en:"I watch myself put distance in real time, without always being able to stop it" },
      { palier:2, fr:"Je sais que je vais m'éloigner, je le vois venir, et je m'éloigne quand même", en:"I know I'm going to pull away, I see it coming, and I pull away anyway" },
      { palier:3, fr:"Je réalise après coup que j'ai encore saboté quelque chose de bien", en:"I realize afterward that I sabotaged something good again" },
      { palier:4, fr:"Je préfère juste les gens qui ne sont pas trop collants, rien d'anormal", en:"I just prefer people who aren't too clingy, nothing wrong with that" },
    ] },
  { id:'Fugitif-A3', chapter:2, kind:'single', variant:'Fugitif',
    situation:{
      fr:"Tu trouves une raison de douter de la relation au moment où elle devient sérieuse. Quand t'en aperçois-tu ?",
      en:"You find a reason to doubt the relationship just as it gets serious. When do you notice?" },
    options:[
      { palier:0, fr:"Souvent tout de suite, je vois que c'est ma peur qui parle et je reste", en:"Often right away, I see it's my fear talking and I stay" },
      { palier:1, fr:"Au moment où je commence à chercher les défauts de l'autre", en:"The moment I start looking for the other person's flaws" },
      { palier:2, fr:"Pendant que je liste ses défauts, je sais que je me cherche une sortie", en:"While I'm listing their flaws, I know I'm looking for a way out" },
      { palier:3, fr:"Bien plus tard, en repensant à ceux que j'ai laissés filer", en:"Much later, thinking back on the ones I let slip away" },
      { palier:4, fr:"Je ne me cherche pas d'excuse, ces relations n'étaient juste pas les bonnes", en:"I'm not making excuses, those relationships just weren't the right ones" },
    ] },
  { id:'Fugitif-A4', chapter:2, kind:'single', variant:'Fugitif',
    situation:{
      fr:"À quel moment vois-tu que tu es en train de te désengager d'une histoire ?",
      en:"At what point do you see that you're disengaging from a relationship?" },
    options:[
      { palier:0, fr:"Très tôt, dès les premiers signes, et je choisis de m'investir quand même", en:"Very early, at the first signs, and I choose to invest anyway" },
      { palier:1, fr:"Pendant que ça arrive, je sens que je me retire", en:"While it's happening, I feel myself withdrawing" },
      { palier:2, fr:"Je le vois clairement et je n'arrive pas encore à me retenir", en:"I see it clearly and I can't quite hold myself back yet" },
      { palier:3, fr:"Quand l'autre me dit qu'il me sent absent, parfois trop tard", en:"When the other person tells me I feel absent, sometimes too late" },
      { palier:4, fr:"Je ne me désengage pas, je suis juste quelqu'un d'indépendant", en:"I don't disengage, I'm just an independent person" },
    ] },
  { id:'Fugitif-A5', chapter:2, kind:'single', variant:'Fugitif',
    situation:{
      fr:"L'autre te demande de t'engager un peu plus. Qu'est-ce qui se passe ?",
      en:"The other person asks you to commit a little more. What happens?" },
    options:[
      { palier:0, fr:"Je sens la panique monter et je choisis d'en parler plutôt que de fuir", en:"I feel the panic rise and I choose to talk about it rather than run" },
      { palier:1, fr:"Je cherche à gagner du temps, et je vois bien que c'est de l'évitement", en:"I try to buy time, and I can see it's avoidance" },
      { palier:2, fr:"Je sais que je devrais avancer, mais je freine quand même", en:"I know I should move forward, but I hold back anyway" },
      { palier:3, fr:"Je dis oui sur le moment, puis je me ferme sans comprendre pourquoi", en:"I say yes in the moment, then I shut down without understanding why" },
      { palier:4, fr:"Je veux juste que ça aille à mon rythme, c'est légitime", en:"I just want it to go at my pace, that's legitimate" },
    ] },
  { id:'Fugitif-A6', chapter:2, kind:'single', variant:'Fugitif',
    situation:{
      fr:"Après avoir mis de la distance, comment tu reviens vers l'autre ?",
      en:"After putting distance between you, how do you come back to the other person?" },
    options:[
      { palier:0, fr:"Je sens le mur monter avant qu'il soit trop haut et je reviens à temps", en:"I feel the wall going up before it gets too high and I come back in time" },
      { palier:1, fr:"Je m'aperçois en route que je me suis isolé et j'essaie de revenir", en:"I notice along the way that I've isolated myself and I try to come back" },
      { palier:2, fr:"Je vois que je me suis coupé, mais je n'ose pas encore me rouvrir", en:"I see that I've cut myself off, but I don't dare open up again yet" },
      { palier:3, fr:"Je ne comprends qu'une fois seul à quel point je me suis éloigné", en:"I only understand once I'm alone how far I've drifted" },
      { palier:4, fr:"Je ne ressens pas ce besoin de revenir, la distance me convient", en:"I don't feel that need to come back, the distance suits me" },
    ] },
],

/* ---------------- BASTION (se murer, contrôler, ne pas montrer ses failles) */
'Bastion': [
  { id:'Bastion-A1', chapter:2, kind:'single', variant:'Bastion',
    situation:{
      fr:"Tu sens que tu te fermes, que tu remontes ton mur quand ça devient émotionnel. Qu'est-ce qui se passe le plus souvent ?",
      en:"You feel yourself closing up, raising your wall when things get emotional. What happens most often?" },
    options:[
      { palier:0, fr:"Je le sens venir, et de plus en plus je choisis de m'ouvrir un peu", en:"I feel it coming, and more and more I choose to open up a little" },
      { palier:1, fr:"Je me surprends en train de me fermer, pendant que ça arrive", en:"I catch myself closing up, while it's happening" },
      { palier:2, fr:"Je sais très bien que je me mure, et je le fais quand même", en:"I know full well that I'm walling up, and I do it anyway" },
      { palier:3, fr:"Je comprends que je me suis fermé seulement plus tard", en:"I only understand that I shut down later" },
      { palier:4, fr:"Je ne me ferme pas, je gère juste mes émotions à ma façon", en:"I don't shut down, I just handle my emotions my own way" },
    ] },
  { id:'Bastion-A2', chapter:2, kind:'single', variant:'Bastion',
    situation:{
      fr:"Quand l'autre veut que tu te livres, que tu montres ce que tu ressens, comment ça se passe ?",
      en:"When the other person wants you to open up, to show what you feel, how does it go?" },
    options:[
      { palier:0, fr:"Je repère le réflexe de me protéger et je choisis souvent de me livrer un peu", en:"I spot the urge to protect myself and I often choose to share a little" },
      { palier:1, fr:"Je me vois esquiver en direct, même si je n'arrive pas toujours à m'arrêter", en:"I watch myself dodge in real time, even if I can't always stop it" },
      { palier:2, fr:"Je sais que je vais me dérober, je le vois venir, et je me dérobe quand même", en:"I know I'm going to deflect, I see it coming, and I deflect anyway" },
      { palier:3, fr:"Je réalise après coup que j'ai encore tenu l'autre à distance", en:"I realize afterward that I kept the other person at arm's length again" },
      { palier:4, fr:"Je n'ai pas besoin de tout déballer, je suis quelqu'un de solide", en:"I don't need to spill everything, I'm a solid person" },
    ] },
  { id:'Bastion-A3', chapter:2, kind:'single', variant:'Bastion',
    situation:{
      fr:"Tu te rends compte que tu as caché ce que tu ressentais vraiment. Quand est-ce que tu t'en aperçois ?",
      en:"You realize you hid what you were really feeling. When do you notice?" },
    options:[
      { palier:0, fr:"Souvent juste avant, et je choisis de dire le vrai malgré la gêne", en:"Often just before, and I choose to say the true thing despite the discomfort" },
      { palier:1, fr:"Au moment où je donne une réponse neutre alors que ça bout dedans", en:"The moment I give a neutral answer while it's boiling inside" },
      { palier:2, fr:"Pendant que je fais comme si tout allait bien, je sais que je mens", en:"While I'm acting like everything is fine, I know I'm lying" },
      { palier:3, fr:"Bien plus tard, quand l'autre me reproche de ne jamais m'ouvrir", en:"Much later, when the other person blames me for never opening up" },
      { palier:4, fr:"Je ne cache rien, je ne vois juste pas l'intérêt de tout étaler", en:"I'm not hiding anything, I just don't see the point of laying it all out" },
    ] },
  { id:'Bastion-A4', chapter:2, kind:'single', variant:'Bastion',
    situation:{
      fr:"À quel moment vois-tu que tu t'es coupé de l'autre derrière ton mur ?",
      en:"At what point do you see that you've cut yourself off behind your wall?" },
    options:[
      { palier:0, fr:"Très tôt, et je choisis de baisser ma garde volontairement", en:"Very early, and I choose to lower my guard on purpose" },
      { palier:1, fr:"Pendant que ça arrive, je sens que je me verrouille", en:"While it's happening, I feel myself locking up" },
      { palier:2, fr:"Je le vois clairement et je n'arrive pas encore à me rouvrir", en:"I see it clearly and I can't quite open up again yet" },
      { palier:3, fr:"Quand l'autre est déjà parti ou épuisé d'essayer de m'atteindre", en:"When the other person is already gone, or exhausted from trying to reach me" },
      { palier:4, fr:"Je ne me coupe pas, j'ai juste besoin de garder le contrôle", en:"I don't cut myself off, I just need to stay in control" },
    ] },
  { id:'Bastion-A5', chapter:2, kind:'single', variant:'Bastion',
    situation:{
      fr:"L'autre te demande ce que tu ressens vraiment, là, maintenant. Qu'est-ce qui se passe ?",
      en:"The other person asks what you're really feeling, right now. What happens?" },
    options:[
      { palier:0, fr:"Je sais répondre, j'ai gardé le contact avec mes émotions", en:"I can answer, I've stayed in touch with my emotions" },
      { palier:1, fr:"Je cherche, et je me rends compte sur le moment que c'est verrouillé", en:"I search, and right then I realize it's locked away" },
      { palier:2, fr:"Je sais ce que je ressens, mais je donne une réponse neutre quand même", en:"I know what I feel, but I give a neutral answer anyway" },
      { palier:3, fr:"Je réponds que ça va, et c'est après que je vois que non", en:"I answer that I'm fine, and only afterward do I see that I wasn't" },
      { palier:4, fr:"Je vais bien, je ne vois pas pourquoi j'en ferais toute une histoire", en:"I'm fine, I don't see why I'd make a big deal out of it" },
    ] },
  { id:'Bastion-A6', chapter:2, kind:'single', variant:'Bastion',
    situation:{
      fr:"Après t'être beaucoup protégé, comment tu reviens vers l'autre ?",
      en:"After protecting yourself for a long stretch, how do you come back to the other person?" },
    options:[
      { palier:0, fr:"Je sens l'isolement venir et je rouvre la porte à temps", en:"I feel the isolation coming and I open the door again in time" },
      { palier:1, fr:"Je m'en aperçois en route et j'essaie de me rendre plus accessible", en:"I notice along the way and I try to make myself more reachable" },
      { palier:2, fr:"Je vois que je me suis enfermé, mais je n'ose pas encore baisser la garde", en:"I see that I've locked myself in, but I don't dare lower my guard yet" },
      { palier:3, fr:"Je ne le comprends qu'une fois seul, ou quand l'autre abandonne", en:"I only understand once I'm alone, or when the other person gives up" },
      { palier:4, fr:"Je ne ressens pas ce besoin, mon autonomie ne me coûte rien", en:"I don't feel that need, my independence costs me nothing" },
    ] },
],

/* ---------------- GUETTEUR (hypervigilance, scruter, analyser, vérifier) -- */
'Guetteur': [
  { id:'Guetteur-A1', chapter:2, kind:'single', variant:'Guetteur',
    situation:{
      fr:"Tu sens que tu commences à scruter les signes, à analyser le moindre détail du comportement de l'autre. Qu'est-ce qui se passe le plus souvent ?",
      en:"You feel yourself starting to scan for signs, analyzing every detail of the other person's behavior. What happens most often?" },
    options:[
      { palier:0, fr:"Je le sens venir, et de plus en plus je choisis de ne pas partir en analyse", en:"I feel it coming, and more and more I choose not to spiral into analysis" },
      { palier:1, fr:"Je me surprends en train de tout décortiquer, pendant que je le fais", en:"I catch myself picking everything apart, while I'm doing it" },
      { palier:2, fr:"Je sais très bien que je surinterprète, et je continue quand même", en:"I know full well that I'm over-reading, and I keep going anyway" },
      { palier:3, fr:"Je comprends que je me suis monté la tête seulement plus tard", en:"I only understand that I worked myself up later" },
      { palier:4, fr:"Je ne surinterprète pas, je suis juste lucide sur ce qui se passe", en:"I'm not over-reading, I'm just clear-eyed about what's going on" },
    ] },
  { id:'Guetteur-A2', chapter:2, kind:'single', variant:'Guetteur',
    situation:{
      fr:"Un doute s'installe sur l'autre, sur sa sincérité. Comment ça se passe en toi ?",
      en:"A doubt sets in about the other person, about their sincerity. How does it go inside you?" },
    options:[
      { palier:0, fr:"Je repère le réflexe de chercher des preuves et je choisis souvent de lâcher", en:"I spot the urge to look for proof and I often choose to let it go" },
      { palier:1, fr:"Je me vois partir en enquête en direct, sans toujours pouvoir m'arrêter", en:"I watch myself launch an investigation in real time, without always being able to stop" },
      { palier:2, fr:"Je sais que je vais tout passer au crible, je le vois venir, et je le fais", en:"I know I'm going to comb through everything, I see it coming, and I do it" },
      { palier:3, fr:"Je réalise après coup que je me suis encore fait un film", en:"I realize afterward that I made up a story in my head again" },
      { palier:4, fr:"Je ne me fais pas de film, j'ai juste un bon instinct pour ces choses", en:"I'm not making up stories, I just have good instincts for these things" },
    ] },
  { id:'Guetteur-A3', chapter:2, kind:'single', variant:'Guetteur',
    situation:{
      fr:"Tu te rends compte que tu as cherché une preuve que quelque chose n'allait pas. Quand t'en aperçois-tu ?",
      en:"You realize you went looking for proof that something was wrong. When do you notice?" },
    options:[
      { palier:0, fr:"Souvent juste avant, et je choisis de faire confiance malgré le doute", en:"Often just before, and I choose to trust despite the doubt" },
      { palier:1, fr:"Au moment où je commence à relire les messages ou à vérifier", en:"The moment I start rereading messages or checking" },
      { palier:2, fr:"Pendant que je vérifie, je sais que je devrais m'arrêter, et je continue", en:"While I'm checking, I know I should stop, and I keep going" },
      { palier:3, fr:"Bien plus tard, quand je vois que mes soupçons étaient infondés", en:"Much later, when I see my suspicions were unfounded" },
      { palier:4, fr:"Je ne cherche pas de preuve, je vérifie juste ce qui est normal de vérifier", en:"I'm not looking for proof, I just check what's normal to check" },
    ] },
  { id:'Guetteur-A4', chapter:2, kind:'single', variant:'Guetteur',
    situation:{
      fr:"À quel moment vois-tu que ta vigilance prend toute la place ?",
      en:"At what point do you see that your vigilance is taking over?" },
    options:[
      { palier:0, fr:"Très tôt, et je choisis de relâcher la surveillance volontairement", en:"Very early, and I choose to ease off the watching on purpose" },
      { palier:1, fr:"Pendant que ça arrive, je sens que je deviens obsédé par les signes", en:"While it's happening, I feel myself getting obsessed with the signs" },
      { palier:2, fr:"Je le vois clairement et je n'arrive pas encore à lâcher", en:"I see it clearly and I can't quite let go yet" },
      { palier:3, fr:"Quand l'autre se sent fliqué et me le reproche, parfois trop tard", en:"When the other person feels watched and calls me out, sometimes too late" },
      { palier:4, fr:"Je ne suis pas obsédé, je fais juste attention, c'est de la prudence", en:"I'm not obsessed, I just pay attention, it's prudence" },
    ] },
  { id:'Guetteur-A5', chapter:2, kind:'single', variant:'Guetteur',
    situation:{
      fr:"L'autre te demande de lui faire confiance, simplement. Qu'est-ce qui se passe ?",
      en:"The other person asks you to simply trust them. What happens?" },
    options:[
      { palier:0, fr:"J'y arrive, j'ai appris à calmer mon alarme intérieure", en:"I manage it, I've learned to quiet my inner alarm" },
      { palier:1, fr:"J'essaie, et je vois bien sur le moment que mon esprit cherche déjà des failles", en:"I try, and right then I can see my mind already hunting for cracks" },
      { palier:2, fr:"Je sais que je devrais lâcher, mais je continue à guetter quand même", en:"I know I should let go, but I keep watching anyway" },
      { palier:3, fr:"Je dis que je lui fais confiance, et c'est après que je recommence à douter", en:"I say I trust them, and afterward I start doubting again" },
      { palier:4, fr:"Je fais confiance à ceux qui le méritent, je vérifie, c'est tout", en:"I trust those who earn it, I verify, that's all" },
    ] },
  { id:'Guetteur-A6', chapter:2, kind:'single', variant:'Guetteur',
    situation:{
      fr:"Après une période où tu as beaucoup surveillé, comment tu reviens à un état apaisé ?",
      en:"After a stretch of heavy watching, how do you come back to a calm state?" },
    options:[
      { palier:0, fr:"Je sens l'hypervigilance monter et je la calme à temps", en:"I feel the hypervigilance rising and I calm it in time" },
      { palier:1, fr:"Je m'en aperçois en route et j'essaie de relâcher la pression", en:"I notice along the way and I try to release the pressure" },
      { palier:2, fr:"Je vois que je suis en alerte permanente, mais je n'arrive pas encore à couper", en:"I see that I'm on permanent alert, but I can't switch it off yet" },
      { palier:3, fr:"Je ne le comprends qu'une fois épuisé, ou quand l'autre craque", en:"I only understand once I'm exhausted, or when the other person breaks" },
      { palier:4, fr:"Je ne ressens pas ce besoin, rester attentif ne me fatigue pas", en:"I don't feel that need, staying watchful doesn't tire me" },
    ] },
],

/* ---------------- SAUVEUR (se rendre indispensable, réparer l'autre) ------ */
'Sauveur': [
  { id:'Sauveur-A1', chapter:2, kind:'single', variant:'Sauveur',
    situation:{
      fr:"Tu sens que tu te mets à porter l'autre, à faire passer ses besoins avant les tiens. Qu'est-ce qui se passe le plus souvent ?",
      en:"You feel yourself starting to carry the other person, putting their needs before yours. What happens most often?" },
    options:[
      { palier:0, fr:"Je le sens venir, et de plus en plus je choisis de penser aussi à moi", en:"I feel it coming, and more and more I choose to think of myself too" },
      { palier:1, fr:"Je me surprends en train de m'oublier pour lui, pendant que je le fais", en:"I catch myself forgetting me for them, while I'm doing it" },
      { palier:2, fr:"Je sais très bien que je m'efface derrière son besoin, et je le fais quand même", en:"I know full well that I disappear behind their need, and I do it anyway" },
      { palier:3, fr:"Je comprends que je me suis encore sacrifié seulement plus tard", en:"I only understand that I sacrificed myself again later" },
      { palier:4, fr:"Je ne me sacrifie pas, j'aime juste aider les gens que j'aime", en:"I don't sacrifice myself, I just love helping the people I love" },
    ] },
  { id:'Sauveur-A2', chapter:2, kind:'single', variant:'Sauveur',
    situation:{
      fr:"L'autre va mal. Comment ça se passe en toi ?",
      en:"The other person is struggling. How does it go inside you?" },
    options:[
      { palier:0, fr:"Je repère le réflexe de tout porter et je choisis souvent de poser une limite", en:"I spot the urge to carry it all and I often choose to set a limit" },
      { palier:1, fr:"Je me vois m'oublier complètement en direct, sans toujours pouvoir m'arrêter", en:"I watch myself disappear completely in real time, without always being able to stop" },
      { palier:2, fr:"Je sais que je vais me mettre de côté, je le vois venir, et je le fais", en:"I know I'm going to put myself aside, I see it coming, and I do it" },
      { palier:3, fr:"Je réalise après coup que j'ai encore tout donné sans rien garder", en:"I realize afterward that I gave everything again and kept nothing" },
      { palier:4, fr:"Ce n'est pas un sacrifice, prendre soin des autres me rend heureux", en:"It's not a sacrifice, taking care of others makes me happy" },
    ] },
  { id:'Sauveur-A3', chapter:2, kind:'single', variant:'Sauveur',
    situation:{
      fr:"Tu te rends compte que tu as fait passer son besoin avant le tien, encore. Quand t'en aperçois-tu ?",
      en:"You realize you put their need before yours, again. When do you notice?" },
    options:[
      { palier:0, fr:"Souvent juste avant, et je choisis de dire mon besoin à moi aussi", en:"Often just before, and I choose to voice my own need too" },
      { palier:1, fr:"Au moment où je sens que je donne plus que je ne reçois", en:"The moment I feel I'm giving more than I receive" },
      { palier:2, fr:"Pendant que je donne, je sais que je m'épuise, et je continue", en:"While I'm giving, I know I'm wearing myself out, and I keep going" },
      { palier:3, fr:"Bien plus tard, quand le ressentiment finit par sortir", en:"Much later, when the resentment finally comes out" },
      { palier:4, fr:"Je ne compte pas, donner fait partie de qui je suis", en:"I don't keep score, giving is part of who I am" },
    ] },
  { id:'Sauveur-A4', chapter:2, kind:'single', variant:'Sauveur',
    situation:{
      fr:"À quel moment vois-tu que tu te perds dans le rôle de celui qui répare ?",
      en:"At what point do you see that you're losing yourself in the fixer role?" },
    options:[
      { palier:0, fr:"Très tôt, et je choisis de laisser l'autre se débrouiller un peu", en:"Very early, and I choose to let the other person manage a little" },
      { palier:1, fr:"Pendant que ça arrive, je sens que je m'efface derrière ma mission", en:"While it's happening, I feel myself fading behind my mission" },
      { palier:2, fr:"Je le vois clairement et je n'arrive pas encore à arrêter de réparer", en:"I see it clearly and I can't quite stop fixing yet" },
      { palier:3, fr:"Quand je suis vidé, ou quand on me reproche d'étouffer l'autre", en:"When I'm drained, or when I'm told I'm smothering the other person" },
      { palier:4, fr:"Je ne me perds pas, aider c'est ce qui donne du sens à ma vie", en:"I'm not losing myself, helping is what gives my life meaning" },
    ] },
  { id:'Sauveur-A5', chapter:2, kind:'single', variant:'Sauveur',
    situation:{
      fr:"L'autre te demande ce que toi tu attends de la relation. Qu'est-ce qui se passe ?",
      en:"The other person asks what you expect from the relationship. What happens?" },
    options:[
      { palier:0, fr:"Je sais répondre, j'ai gardé le contact avec mes propres besoins", en:"I can answer, I've stayed in touch with my own needs" },
      { palier:1, fr:"Je cherche, et je me rends compte sur le moment que je n'y pense jamais", en:"I search, and right then I realize I never think about it" },
      { palier:2, fr:"Je sais que j'ai des besoins, mais je dis que ça va, que c'est lui le sujet", en:"I know I have needs, but I say I'm fine, that they're the subject" },
      { palier:3, fr:"Je réponds que je n'ai besoin de rien, et c'est après que je vois que si", en:"I answer that I don't need anything, and only afterward do I see that I do" },
      { palier:4, fr:"Mon bonheur, c'est de le rendre heureux, c'est sincère", en:"My happiness is making them happy, and I mean it" },
    ] },
  { id:'Sauveur-A6', chapter:2, kind:'single', variant:'Sauveur',
    situation:{
      fr:"Après t'être beaucoup donné, comment tu reviens à toi ?",
      en:"After giving so much, how do you come back to yourself?" },
    options:[
      { palier:0, fr:"Je sens l'épuisement venir et je reprends du temps pour moi à temps", en:"I feel the exhaustion coming and I take time for myself before it's too late" },
      { palier:1, fr:"Je m'en aperçois en route et j'essaie de rééquilibrer", en:"I notice along the way and I try to rebalance" },
      { palier:2, fr:"Je vois que je me suis oublié, mais je n'ose pas encore réclamer ma part", en:"I see that I've forgotten myself, but I don't dare claim my share yet" },
      { palier:3, fr:"Je ne le comprends qu'une fois à bout, ou quand j'explose de rancœur", en:"I only understand once I'm at the end of my rope, or when the resentment bursts out" },
      { palier:4, fr:"Je ne ressens pas ce besoin, me donner aux autres ne m'épuise pas", en:"I don't feel that need, giving myself to others doesn't drain me" },
    ] },
],

/* ---------------- CAMÉLÉON (s'adapter pour rester aimable, éviter le conflit) */
'Caméléon': [
  { id:'Caméléon-A1', chapter:2, kind:'single', variant:'Caméléon',
    situation:{
      fr:"Tu sens que tu deviens ce que les autres attendent, que tu lisses tout pour plaire. Qu'est-ce qui se passe le plus souvent ?",
      en:"You feel yourself becoming what others expect, smoothing everything over to please. What happens most often?" },
    options:[
      { palier:0, fr:"Je le sens venir, et de plus en plus je choisis de rester moi-même", en:"I feel it coming, and more and more I choose to stay myself" },
      { palier:1, fr:"Je me surprends en train de m'adapter, pendant que je le fais", en:"I catch myself adapting, while I'm doing it" },
      { palier:2, fr:"Je sais très bien que je joue un rôle, et je le joue quand même", en:"I know full well that I'm playing a role, and I play it anyway" },
      { palier:3, fr:"Je comprends que je me suis encore caméléonné seulement plus tard", en:"I only understand that I shape-shifted again later" },
      { palier:4, fr:"Je ne joue pas de rôle, je suis juste quelqu'un de souple et facile à vivre", en:"I'm not playing a role, I'm just flexible and easy to be around" },
    ] },
  { id:'Caméléon-A2', chapter:2, kind:'single', variant:'Caméléon',
    situation:{
      fr:"Une tension pointe, un désaccord possible. Comment ça se passe en toi ?",
      en:"A tension looms, a possible disagreement. How does it go inside you?" },
    options:[
      { palier:0, fr:"Je repère le réflexe de lisser et je choisis souvent de dire mon vrai avis", en:"I spot the urge to smooth things over and I often choose to say my real opinion" },
      { palier:1, fr:"Je me vois éviter le conflit en direct, sans toujours pouvoir m'arrêter", en:"I watch myself dodge the conflict in real time, without always being able to stop" },
      { palier:2, fr:"Je sais que je vais dire ce qui apaise plutôt que le vrai, et je le fais", en:"I know I'm going to say what soothes rather than what's true, and I do it" },
      { palier:3, fr:"Je réalise après coup que je n'ai pas dit ce que je pensais, encore", en:"I realize afterward that I didn't say what I thought, again" },
      { palier:4, fr:"Je n'évite pas, je préfère juste la paix au conflit, c'est plus sain", en:"I don't avoid, I just prefer peace to conflict, it's healthier" },
    ] },
  { id:'Caméléon-A3', chapter:2, kind:'single', variant:'Caméléon',
    situation:{
      fr:"Tu te rends compte que tu as dit ce qui plaisait, pas ce que tu pensais. Quand t'en aperçois-tu ?",
      en:"You realize you said what would please, not what you thought. When do you notice?" },
    options:[
      { palier:0, fr:"Souvent juste avant de parler, et je rattrape pour dire le vrai", en:"Often just before I speak, and I catch it to say the true thing" },
      { palier:1, fr:"Au moment où les mots sortent, je sens que ce n'est pas mon avis", en:"As the words come out, I feel it isn't my opinion" },
      { palier:2, fr:"Pendant que je le dis, je sais que je me trahis, et je continue", en:"While I'm saying it, I know I'm betraying myself, and I keep going" },
      { palier:3, fr:"Bien plus tard, en y repensant le soir", en:"Much later, thinking back that evening" },
      { palier:4, fr:"Je pense vraiment ce que je dis, je m'adapte juste à qui j'ai en face", en:"I really mean what I say, I just adapt to whoever is in front of me" },
    ] },
  { id:'Caméléon-A4', chapter:2, kind:'single', variant:'Caméléon',
    situation:{
      fr:"À quel moment vois-tu que tu as disparu derrière le masque ?",
      en:"At what point do you see that you've disappeared behind the mask?" },
    options:[
      { palier:0, fr:"Très tôt, et je choisis de remettre du vrai moi dans l'échange", en:"Very early, and I choose to bring the real me back into the exchange" },
      { palier:1, fr:"Pendant que ça arrive, je sens que je me dilue dans ce qu'on attend de moi", en:"While it's happening, I feel myself dissolving into what's expected of me" },
      { palier:2, fr:"Je le vois clairement et je n'arrive pas encore à enlever le masque", en:"I see it clearly and I can't quite take the mask off yet" },
      { palier:3, fr:"Quand je ne sais même plus ce que moi je voulais au départ", en:"When I no longer even know what I wanted in the first place" },
      { palier:4, fr:"Je ne disparais pas, je suis juste à l'aise dans tous les milieux", en:"I don't disappear, I'm just at ease in any setting" },
    ] },
  { id:'Caméléon-A5', chapter:2, kind:'single', variant:'Caméléon',
    situation:{
      fr:"L'autre te demande qui tu es vraiment, sans filtre. Qu'est-ce qui se passe ?",
      en:"The other person asks who you really are, no filter. What happens?" },
    options:[
      { palier:0, fr:"Je sais répondre, j'ai gardé le contact avec qui je suis", en:"I can answer, I've stayed in touch with who I am" },
      { palier:1, fr:"Je cherche, et je me rends compte sur le moment que je ne sais plus trop", en:"I search, and right then I realize I'm not so sure anymore" },
      { palier:2, fr:"Je sais qui je suis, mais je donne la version qui lui plaira", en:"I know who I am, but I give the version they'll like" },
      { palier:3, fr:"Je réponds quelque chose, et c'est après que je vois que ce n'était pas moi", en:"I answer something, and only afterward do I see it wasn't me" },
      { palier:4, fr:"Je suis quelqu'un de caméléon par nature, et ça me va très bien", en:"I'm a chameleon by nature, and that suits me fine" },
    ] },
  { id:'Caméléon-A6', chapter:2, kind:'single', variant:'Caméléon',
    situation:{
      fr:"Après t'être beaucoup adapté aux autres, comment tu reviens à toi ?",
      en:"After adapting so much to others, how do you come back to yourself?" },
    options:[
      { palier:0, fr:"Je sens la dilution venir et je reprends ma vraie forme à temps", en:"I feel the dilution coming and I take my true shape back in time" },
      { palier:1, fr:"Je m'en aperçois en route et j'essaie de réaffirmer qui je suis", en:"I notice along the way and I try to reassert who I am" },
      { palier:2, fr:"Je vois que je me suis effacé, mais je n'ose pas encore montrer le vrai moi", en:"I see that I've faded, but I don't dare show the real me yet" },
      { palier:3, fr:"Je ne le comprends qu'une fois vidé de moi-même", en:"I only understand once I'm emptied of myself" },
      { palier:4, fr:"Je ne ressens pas ce besoin, m'adapter ne me coûte rien", en:"I don't feel that need, adapting costs me nothing" },
    ] },
],

/* ---------------- ALCHIMISTE (analyser pour ne pas ressentir) ------------- */
'Alchimiste': [
  { id:'Alchimiste-A1', chapter:2, kind:'single', variant:'Alchimiste',
    situation:{
      fr:"Tu sens que tu transformes ce que tu ressens en analyse, que tu réfléchis au lieu de vivre l'émotion. Qu'est-ce qui se passe le plus souvent ?",
      en:"You feel yourself turning what you feel into analysis, thinking instead of living the emotion. What happens most often?" },
    options:[
      { palier:0, fr:"Je le sens venir, et de plus en plus je choisis de simplement ressentir", en:"I feel it coming, and more and more I choose to simply feel" },
      { palier:1, fr:"Je me surprends en train d'analyser, pendant que je le fais", en:"I catch myself analyzing, while I'm doing it" },
      { palier:2, fr:"Je sais très bien que je me réfugie dans la tête, et je le fais quand même", en:"I know full well that I'm taking refuge in my head, and I do it anyway" },
      { palier:3, fr:"Je comprends que j'ai esquivé l'émotion seulement plus tard", en:"I only understand that I dodged the emotion later" },
      { palier:4, fr:"Je n'esquive rien, je suis juste quelqu'un de rationnel et posé", en:"I'm not dodging anything, I'm just a rational, level-headed person" },
    ] },
  { id:'Alchimiste-A2', chapter:2, kind:'single', variant:'Alchimiste',
    situation:{
      fr:"Une émotion forte monte dans la relation. Comment ça se passe en toi ?",
      en:"A strong emotion rises in the relationship. How does it go inside you?" },
    options:[
      { palier:0, fr:"Je repère le réflexe d'analyser et je choisis souvent de rester dans le ressenti", en:"I spot the urge to analyze and I often choose to stay with the feeling" },
      { palier:1, fr:"Je me vois prendre de la hauteur intellectuelle en direct, sans toujours m'arrêter", en:"I watch myself rise into intellectual distance in real time, without always stopping" },
      { palier:2, fr:"Je sais que je vais tout rationaliser, je le vois venir, et je le fais", en:"I know I'm going to rationalize everything, I see it coming, and I do it" },
      { palier:3, fr:"Je réalise après coup que je n'ai pas vraiment ressenti, j'ai juste pensé", en:"I realize afterward that I didn't really feel, I just thought" },
      { palier:4, fr:"Je ne fuis pas l'émotion, je la gère juste avec ma tête, c'est efficace", en:"I don't run from emotion, I just handle it with my head, it works" },
    ] },
  { id:'Alchimiste-A3', chapter:2, kind:'single', variant:'Alchimiste',
    situation:{
      fr:"Tu te rends compte que tu as expliqué ta douleur au lieu de la vivre. Quand t'en aperçois-tu ?",
      en:"You realize you explained your pain instead of living it. When do you notice?" },
    options:[
      { palier:0, fr:"Souvent juste avant, et je choisis de laisser l'émotion exister", en:"Often just before, and I choose to let the emotion exist" },
      { palier:1, fr:"Au moment où je m'entends utiliser des grands mots pour décrire ce qui fait mal", en:"The moment I hear myself using big words to describe what hurts" },
      { palier:2, fr:"Pendant que j'analyse, je sais que je me cache derrière, et je continue", en:"While I'm analyzing, I know I'm hiding behind it, and I keep going" },
      { palier:3, fr:"Bien plus tard, quand l'émotion ressort autrement", en:"Much later, when the emotion resurfaces some other way" },
      { palier:4, fr:"Je ne me cache pas, comprendre fait partie de comment je ressens", en:"I'm not hiding, understanding is part of how I feel" },
    ] },
  { id:'Alchimiste-A4', chapter:2, kind:'single', variant:'Alchimiste',
    situation:{
      fr:"À quel moment vois-tu que ta tête a pris toute la place sur ton cœur ?",
      en:"At what point do you see that your head has taken all the room from your heart?" },
    options:[
      { palier:0, fr:"Très tôt, et je choisis de redescendre dans mon corps et mes émotions", en:"Very early, and I choose to come back down into my body and emotions" },
      { palier:1, fr:"Pendant que ça arrive, je sens que je me coupe de ce que je ressens", en:"While it's happening, I feel myself disconnecting from what I feel" },
      { palier:2, fr:"Je le vois clairement et je n'arrive pas encore à lâcher l'analyse", en:"I see it clearly and I can't quite drop the analysis yet" },
      { palier:3, fr:"Quand l'autre me dit qu'il ne me sent jamais vraiment touché", en:"When the other person tells me they never feel me truly moved" },
      { palier:4, fr:"Je ne me coupe pas, je suis juste plus cérébral que la moyenne", en:"I don't disconnect, I'm just more cerebral than average" },
    ] },
  { id:'Alchimiste-A5', chapter:2, kind:'single', variant:'Alchimiste',
    situation:{
      fr:"L'autre te demande ce que tu ressens, pas ce que tu en penses. Qu'est-ce qui se passe ?",
      en:"The other person asks what you feel, not what you think about it. What happens?" },
    options:[
      { palier:0, fr:"Je sais répondre avec une vraie émotion, pas une analyse", en:"I can answer with a real emotion, not an analysis" },
      { palier:1, fr:"Je cherche, et je me rends compte sur le moment que je n'ai que des concepts", en:"I search, and right then I realize all I have is concepts" },
      { palier:2, fr:"Je sais que je ressens quelque chose, mais je réponds par une explication", en:"I know I feel something, but I answer with an explanation" },
      { palier:3, fr:"Je réponds en analysant, et c'est après que je vois que j'ai évité la question", en:"I answer by analyzing, and only afterward do I see I dodged the question" },
      { palier:4, fr:"Penser et ressentir c'est pareil pour moi, ma réponse est sincère", en:"Thinking and feeling are the same for me, my answer is sincere" },
    ] },
  { id:'Alchimiste-A6', chapter:2, kind:'single', variant:'Alchimiste',
    situation:{
      fr:"Après t'être beaucoup réfugié dans l'analyse, comment tu reviens au ressenti ?",
      en:"After taking refuge in analysis for a long stretch, how do you come back to feeling?" },
    options:[
      { palier:0, fr:"Je sens la coupure venir et je me reconnecte à mon corps à temps", en:"I feel the disconnect coming and I reconnect with my body in time" },
      { palier:1, fr:"Je m'en aperçois en route et j'essaie de redescendre dans l'émotion", en:"I notice along the way and I try to come back down into the emotion" },
      { palier:2, fr:"Je vois que je suis tout en tête, mais je n'arrive pas encore à lâcher", en:"I see that I'm all in my head, but I can't quite let go yet" },
      { palier:3, fr:"Je ne le comprends qu'une fois que l'émotion me rattrape malgré moi", en:"I only understand once the emotion catches up with me despite myself" },
      { palier:4, fr:"Je ne ressens pas ce besoin, vivre dans ma tête me convient très bien", en:"I don't feel that need, living in my head suits me very well" },
    ] },
],

/* ---------------- INCENDIAIRE (allumer le conflit, provoquer, tester) ----- */
'Incendiaire': [
  { id:'Incendiaire-A1', chapter:2, kind:'single', variant:'Incendiaire',
    situation:{
      fr:"Tu sens que tu cherches à provoquer une réaction, à allumer une tension pour être sûr que l'autre tient à toi. Qu'est-ce qui se passe le plus souvent ?",
      en:"You feel yourself trying to provoke a reaction, lighting a tension to be sure the other person cares. What happens most often?" },
    options:[
      { palier:0, fr:"Je le sens venir, et de plus en plus je choisis de demander directement au lieu de provoquer", en:"I feel it coming, and more and more I choose to ask directly instead of provoking" },
      { palier:1, fr:"Je me surprends en train d'allumer le feu, pendant que je le fais", en:"I catch myself lighting the fire, while I'm doing it" },
      { palier:2, fr:"Je sais très bien que je cherche la crise, et je la cherche quand même", en:"I know full well that I'm looking for the crisis, and I look for it anyway" },
      { palier:3, fr:"Je comprends que j'ai provoqué la dispute seulement plus tard", en:"I only understand that I started the fight later" },
      { palier:4, fr:"Je ne provoque rien, je dis juste les choses franchement quand ça ne va pas", en:"I don't provoke anything, I just say things straight when something's wrong" },
    ] },
  { id:'Incendiaire-A2', chapter:2, kind:'single', variant:'Incendiaire',
    situation:{
      fr:"L'autre est trop calme, trop distant à ton goût. Comment ça se passe en toi ?",
      en:"The other person is too calm, too distant for your taste. How does it go inside you?" },
    options:[
      { palier:0, fr:"Je repère le réflexe de mettre le feu et je choisis souvent d'exprimer mon manque autrement", en:"I spot the urge to set a fire and I often choose to express the lack another way" },
      { palier:1, fr:"Je me vois chercher la provocation en direct, sans toujours pouvoir m'arrêter", en:"I watch myself reach for provocation in real time, without always being able to stop" },
      { palier:2, fr:"Je sais que je vais déclencher quelque chose, je le vois venir, et je le fais", en:"I know I'm going to set something off, I see it coming, and I do it" },
      { palier:3, fr:"Je réalise après coup que j'ai allumé une dispute pour rien", en:"I realize afterward that I sparked a fight over nothing" },
      { palier:4, fr:"Je ne cherche pas le conflit, je supporte juste mal l'indifférence", en:"I'm not looking for conflict, I just can't stand indifference" },
    ] },
  { id:'Incendiaire-A3', chapter:2, kind:'single', variant:'Incendiaire',
    situation:{
      fr:"Tu te rends compte que tu as cherché la dispute pour obtenir une réaction. Quand t'en aperçois-tu ?",
      en:"You realize you picked a fight to get a reaction. When do you notice?" },
    options:[
      { palier:0, fr:"Souvent juste avant, et je choisis de dire mon besoin au lieu de provoquer", en:"Often just before, and I choose to state my need instead of provoking" },
      { palier:1, fr:"Au moment où je lance la pique qui va mettre le feu", en:"The moment I throw the jab that will light the fire" },
      { palier:2, fr:"Pendant que je provoque, je sais ce que je fais, et je continue", en:"While I'm provoking, I know what I'm doing, and I keep going" },
      { palier:3, fr:"Bien plus tard, quand le calme est revenu et que je m'en veux", en:"Much later, when calm has returned and I'm angry at myself" },
      { palier:4, fr:"Je ne provoque pas, c'est l'autre qui ne réagit jamais assez", en:"I don't provoke, it's the other person who never reacts enough" },
    ] },
  { id:'Incendiaire-A4', chapter:2, kind:'single', variant:'Incendiaire',
    situation:{
      fr:"À quel moment vois-tu que tu testes l'autre au lieu de lui parler ?",
      en:"At what point do you see that you're testing the other person instead of talking to them?" },
    options:[
      { palier:0, fr:"Très tôt, et je choisis de poser ma vraie question directement", en:"Very early, and I choose to ask my real question directly" },
      { palier:1, fr:"Pendant que ça arrive, je sens que je suis en train de le mettre à l'épreuve", en:"While it's happening, I feel that I'm putting them through a trial" },
      { palier:2, fr:"Je le vois clairement et je n'arrive pas encore à arrêter de tester", en:"I see it clearly and I can't quite stop testing yet" },
      { palier:3, fr:"Quand l'autre est épuisé par mes mises à l'épreuve, parfois trop tard", en:"When the other person is worn out by my trials, sometimes too late" },
      { palier:4, fr:"Je ne teste pas, je vérifie juste qu'il tient vraiment à moi", en:"I'm not testing, I'm just making sure they truly care about me" },
    ] },
  { id:'Incendiaire-A5', chapter:2, kind:'single', variant:'Incendiaire',
    situation:{
      fr:"L'autre te demande de te calmer et de lui parler posément. Qu'est-ce qui se passe ?",
      en:"The other person asks you to calm down and talk it through quietly. What happens?" },
    options:[
      { palier:0, fr:"J'y arrive, j'ai appris à dire mon besoin sans tout enflammer", en:"I manage it, I've learned to state my need without setting everything ablaze" },
      { palier:1, fr:"J'essaie, et je vois bien sur le moment que l'envie de provoquer est plus forte", en:"I try, and right then I can see the urge to provoke is stronger" },
      { palier:2, fr:"Je sais que je devrais me calmer, mais je relance quand même", en:"I know I should calm down, but I push again anyway" },
      { palier:3, fr:"Je me calme sur le moment, et c'est après que je vois que j'avais surréagi", en:"I calm down in the moment, and only afterward do I see I overreacted" },
      { palier:4, fr:"Quand quelque chose ne va pas, je le dis fort, c'est plus honnête que de se taire", en:"When something's wrong, I say it loud, it's more honest than staying silent" },
    ] },
  { id:'Incendiaire-A6', chapter:2, kind:'single', variant:'Incendiaire',
    situation:{
      fr:"Après avoir mis le feu, comment tu reviens vers l'autre ?",
      en:"After setting the fire, how do you come back to the other person?" },
    options:[
      { palier:0, fr:"Je sens l'escalade venir et je désamorce avant qu'elle parte trop loin", en:"I feel the escalation coming and I defuse it before it goes too far" },
      { palier:1, fr:"Je m'en aperçois en route et j'essaie de redescendre la tension", en:"I notice along the way and I try to bring the tension down" },
      { palier:2, fr:"Je vois que j'ai trop allumé, mais je n'ose pas encore faire le premier pas", en:"I see that I lit too much, but I don't dare make the first move yet" },
      { palier:3, fr:"Je ne le comprends qu'une fois le mal fait, quand l'autre s'est refermé", en:"I only understand once the damage is done, when the other person has closed off" },
      { palier:4, fr:"Je ne ressens pas ce besoin de réparer, au moins on aura été francs", en:"I don't feel that need to repair, at least we were honest" },
    ] },
],

};
