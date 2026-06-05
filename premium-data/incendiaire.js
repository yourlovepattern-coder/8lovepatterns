/* 8LovePatterns premium report content - incendiaire. Source: rapport_complet_incendiaire.txt */
window.LP_PREMIUM_REPORTS = window.LP_PREMIUM_REPORTS || {};
window.LP_PREMIUM_REPORTS["incendiaire"] =
{
  id: "incendiaire",
  name: "L’Incendiaire",
  tagline: "Il ne cherche pas le feu. Il cherche la preuve que quelqu’un restera.",
  targetFormat: {
    totalReadingPages: "20 à 25 pages",
    genericShare: "environ 80%",
    personalizedShare: "environ 20%",
    genericPagesTarget: "16 à 18 pages",
    personalizedPagesTarget: "4 à 5 pages",
    readingPromise:
      "Le lecteur doit reconnaître son profil général, puis sentir que les dernières pages parlent précisément de sa manière à lui d’être Incendiaire."
  },

  reportComposition: [
    {
      id: "cover",
      title: "Couverture",
      type: "fixed",
      estimatedPages: 1
    },
    {
      id: "summary",
      title: "Sommaire",
      type: "fixed",
      estimatedPages: 1
    },
    {
      id: "fixedProfileReport",
      title: "Rapport complet Incendiaire",
      type: "fixed",
      estimatedPages: "14 à 16",
      note:
        "Reprendre ici le contenu générique long du rapport Incendiaire déjà rédigé : introduction, cœur du mécanisme, déclencheurs, conflit, rupture, attirances à risque, force du profil, Ancre, version intégrée, compatibilité, premiers pas, conclusion."
    },
    {
      id: "personalized8LovePatternsCard",
      title: "Votre carte 8LovePatterns",
      type: "personalized",
      estimatedPages: 1
    },
    {
      id: "personalizedDimensionReading",
      title: "Votre version précise de l’Incendiaire",
      type: "personalized",
      estimatedPages: "1 à 1,5"
    },
    {
      id: "topTriggersDeepDive",
      title: "Vos trois déclencheurs dominants",
      type: "personalized",
      estimatedPages: "1,5 à 2"
    },
    {
      id: "personalizedScenario",
      title: "Votre scénario relationnel probable",
      type: "personalized",
      estimatedPages: 1
    },
    {
      id: "personalizedActionPlan",
      title: "Votre plan d’action prioritaire",
      type: "personalized",
      estimatedPages: "1 à 1,5"
    },
    {
      id: "finalPersonalSummary",
      title: "Synthèse personnalisée",
      type: "personalized",
      estimatedPages: "0,5 à 1"
    }
  ],

  profileMeta: {
    strategy: "Je poursuis pour ne pas perdre le lien",
    coreFear: "Ne pas compter assez pour être choisi clairement lorsque le lien devient flou.",
    defensiveStrategy:
      "Augmenter l’intensité, provoquer une clarification ou demander une preuve pour réduire l’incertitude.",
    mainRisk:
      "Transformer une demande légitime de sécurité en épreuve relationnelle qui met l’autre sous pression.",
    mainStrength:
      "Aimer avec intensité, présence, loyauté et courage émotionnel.",
    evolutionPath:
      "Demander clairement au lieu de tester, reconnaître l’alarme sans lui confier toute la vérité."
  },

  dimensions: {
    silence: {
      id: "silence",
      name: "Sensibilité au silence",
      description:
        "Mesure à quel point l’absence de réponse, les délais ou les silences inexpliqués activent le mécanisme.",
      low:
        "Le silence vous touche peu ou reste généralement contextualisable.",
      medium:
        "Le silence devient sensible lorsqu’il arrive après un moment important ou s’ajoute à d’autres signes.",
      high:
        "Le silence peut rapidement devenir une preuve possible de désintérêt, de rejet ou d’éloignement."
    },
    flouRelationnel: {
      id: "flouRelationnel",
      name: "Tolérance au flou relationnel",
      description:
        "Mesure votre capacité à rester stable lorsque la relation n’est pas clairement définie, nommée ou sécurisée.",
      low:
        "Vous pouvez laisser une part d’incertitude sans chercher immédiatement à tout clarifier.",
      medium:
        "Le flou devient difficile lorsqu’il dure ou lorsque l’autre évite les sujets importants.",
      high:
        "Le flou peut devenir presque insupportable et déclencher un besoin urgent de réponse."
    },
    besoinPreuve: {
      id: "besoinPreuve",
      name: "Besoin de preuve d’attachement",
      description:
        "Mesure à quel point vous avez besoin de signes concrets pour sentir que vous êtes encore choisi.",
      low:
        "Vous n’avez pas besoin de preuves fréquentes pour rester sécurisé.",
      medium:
        "Vous avez besoin de signes plus clairs dans les périodes sensibles.",
      high:
        "Sans preuve visible, votre esprit peut rapidement douter de votre place dans le lien."
    },
    peurRemplacement: {
      id: "peurRemplacement",
      name: "Peur du remplacement",
      description:
        "Mesure la sensibilité à l’idée que l’autre puisse préférer quelqu’un d’autre ou vous rendre moins prioritaire.",
      low:
        "La comparaison ou l’idée du remplacement ne structure pas fortement vos réactions.",
      medium:
        "Cette peur peut apparaître dans les moments de distance, d’ambiguïté ou de comparaison.",
      high:
        "La peur du remplacement peut devenir très active dès qu’un signe semble indiquer une perte de priorité."
    },
    intensiteEmotionnelle: {
      id: "intensiteEmotionnelle",
      name: "Intensité émotionnelle",
      description:
        "Mesure la vitesse et la puissance avec lesquelles l’émotion monte quand le lien semble menacé.",
      low:
        "Vos émotions restent généralement contenues, même lorsque quelque chose vous touche.",
      medium:
        "Vos émotions peuvent monter fortement, mais vous gardez souvent une capacité de recul.",
      high:
        "L’émotion peut prendre toute la place et pousser à parler, relancer ou confronter rapidement."
    },
    besoinClarification: {
      id: "besoinClarification",
      name: "Besoin de clarification",
      description:
        "Mesure votre besoin de mettre des mots, définir la relation ou obtenir une position claire.",
      low:
        "Vous pouvez laisser une situation évoluer sans chercher immédiatement à la définir.",
      medium:
        "Vous avez besoin de clarification lorsque l’incertitude devient répétée ou coûteuse.",
      high:
        "Vous pouvez ressentir une urgence forte à clarifier, parfois avant que l’autre soit prêt."
    },
    reactionConflit: {
      id: "reactionConflit",
      name: "Réactivité en conflit",
      description:
        "Mesure votre tendance à entrer vite dans l’échange lorsque quelque chose vous blesse.",
      low:
        "Vous pouvez généralement différer la discussion ou éviter l’escalade.",
      medium:
        "Vous pouvez réagir vivement, mais vous cherchez souvent à réparer ensuite.",
      high:
        "Le conflit peut devenir le lieu où vous tentez d’obtenir la vérité, la preuve ou la reconnaissance attendue."
    }
  },

  personalizedSection: {
    title: "Votre lecture personnalisée",

    lovePatternCard: {
      title: "Votre carte 8LovePatterns",
      template:
        `Vos réponses suggèrent que le profil {{profilDominant}} est votre mécanisme amoureux dominant, avec un score de {{scoreProfil}}. Cela ne signifie pas que vous êtes toujours intense, conflictuel ou difficile à rassurer. Cela indique plutôt que, lorsque le lien devient important, votre système affectif peut chercher à sécuriser la relation en augmentant l’intensité.

Chez vous, ce mécanisme semble surtout s’activer autour de {{topDimension1}}, {{topDimension2}} et {{topDimension3}}. Ces dimensions donnent une lecture beaucoup plus précise de votre profil. Tous les Incendiaires ne brûlent pas pour les mêmes raisons. Certains s’activent surtout face au silence. D’autres face au flou. D’autres encore face à la peur d’être remplacés, à l’absence de preuves ou au conflit qui reste ouvert.

Votre niveau d’Ancre, {{niveauAncre}}, indique à quel point vous arrivez aujourd’hui à reconnaître cette montée avant qu’elle ne décide à votre place. Plus votre Ancre est forte, plus vous pouvez transformer l’urgence en demande claire. Plus elle est faible, plus l’émotion peut vous donner l’impression qu’il faut agir immédiatement pour ne pas perdre le lien.

La lecture importante ici n’est donc pas seulement : “vous êtes Incendiaire”. La vraie lecture est : “votre mécanisme Incendiaire semble prendre cette forme précise, avec ces déclencheurs prioritaires, ce niveau d’intensité et ce chemin d’évolution.”`
    },

    scoreInterpretation: {
      lowDominance:
        `Votre score Incendiaire reste présent, mais il ne semble pas dominer toute votre vie relationnelle. Cela peut indiquer que vous connaissez l’intensité, la peur du flou ou le besoin de preuve, sans que ces mouvements prennent systématiquement le contrôle. Dans votre cas, l’Incendiaire peut apparaître dans des contextes précis, surtout lorsque plusieurs déclencheurs se combinent. Le risque n’est donc pas forcément l’explosion permanente, mais plutôt la montée ponctuelle, parfois surprenante, quand une relation touche un point sensible.`,
      mediumDominance:
        `Votre score Incendiaire suggère un mécanisme bien installé, mais pas forcément incontrôlable. Vous pouvez probablement aimer de manière intense, chercher de la clarté et ressentir fortement les variations du lien, tout en gardant par moments une capacité de recul. Votre enjeu principal est d’intervenir plus tôt dans la montée. Pas quand le message est déjà envoyé. Pas quand la phrase trop piquante est déjà sortie. Avant. Au moment où vous sentez que vous commencez à chercher une preuve plutôt qu’une conversation.`,
      highDominance:
        `Votre score Incendiaire indique que ce mécanisme peut fortement organiser votre manière de vivre l’amour. Quand le lien devient flou, silencieux ou instable, votre système peut passer rapidement en alerte. L’émotion semble alors produire une urgence : parler maintenant, clarifier maintenant, obtenir une preuve maintenant. Le risque n’est pas que votre besoin soit illégitime. Très souvent, il pointe quelque chose de réel. Le risque est que la forme de la demande devienne si intense qu’elle empêche l’autre de répondre autrement qu’en se défendant.`
    },

    anchorInterpretation: {
      veryActive:
        `Votre niveau d’Ancre suggère que le mécanisme peut encore prendre beaucoup de place lorsqu’il s’active. Dans ces moments, l’émotion peut sembler plus fiable que les faits. Une absence devient un signe. Un délai devient une preuve. Un flou devient une menace. Vous pouvez comprendre après coup que votre réaction était trop forte, mais sur le moment, elle paraît nécessaire. Le travail prioritaire n’est pas de vous juger. C’est inutile, et franchement peu rentable. Le travail est de créer un délai entre l’alarme et l’action. Même court. Même imparfait. C’est dans ce délai que votre liberté revient.`,
      progressing:
        `Votre niveau d’Ancre suggère que vous commencez à voir le mécanisme pendant qu’il se produit. Ce n’est pas encore confortable, mais c’est déjà une étape énorme. Vous pouvez sentir la montée, reconnaître certains déclencheurs, parfois reformuler, parfois attendre, parfois revenir après coup avec plus de clarté. Le risque, à ce stade, est de croire que voir le mécanisme devrait suffire à ne plus le vivre. Non. Le voir ne l’annule pas. Il vous donne simplement une marge de manœuvre. Et dans une relation, cette marge peut tout changer.`,
      integrated:
        `Votre niveau d’Ancre suggère que votre intensité est davantage intégrée. Cela ne veut pas dire que vous ne doutez plus, que vous ne ressentez plus fortement ou que vous devenez détaché. Cela veut dire que vous avez plus souvent la capacité de reconnaître l’alarme sans lui donner immédiatement le micro. Vous pouvez demander de la clarté sans mettre l’autre au tribunal. Vous pouvez poser une limite sans transformer la discussion en scène de vérité. Votre évolution consiste maintenant à choisir des liens qui respectent cette maturité, au lieu de retourner vers des dynamiques qui réactivent inutilement l’ancien feu.`
    }
  },

  personalizedBlocks: {
    silence: {
      low:
        `Chez vous, le silence ne semble pas être le déclencheur principal. Cela change la lecture de votre profil Incendiaire. Vous n’êtes probablement pas activé par chaque délai de réponse ou chaque moment de calme. Votre mécanisme semble avoir besoin d’un signal plus chargé pour monter : une incohérence, un changement d’attitude, une ambiguïté répétée ou une impression de déséquilibre. C’est une bonne nouvelle, car vous pouvez probablement contextualiser certaines absences sans immédiatement les transformer en menace. Mais cela peut aussi créer un piège plus discret : vous pouvez accumuler des petits signes sans rien dire, puis réagir fortement quand votre seuil interne est dépassé. Votre enjeu n’est donc pas seulement de gérer le silence. Il est de repérer le moment où votre calme apparent commence à devenir une enquête intérieure.`,
      medium:
        `Le silence semble être un déclencheur conditionnel chez vous. Il ne suffit pas toujours à allumer le mécanisme, mais il devient beaucoup plus sensible lorsqu’il arrive après un moment important, une discussion chargée ou une période de distance. Dans ces situations, l’absence de réponse ne reste plus neutre. Elle se met à raconter quelque chose. Votre esprit peut commencer à compléter ce qui manque : peut-être que l’autre s’éloigne, peut-être qu’il regrette, peut-être qu’il évite, peut-être que vous comptez moins. Ce qui vous aidera le plus n’est pas de nier cette réaction, mais de la ralentir. Le silence peut être un signal, oui. Mais il n’est pas automatiquement une preuve. La nuance est petite sur le papier, énorme dans une relation.`,
      high:
        `Le silence semble être l’un de vos grands déclencheurs. Chez vous, l’absence de réponse peut rapidement prendre une valeur émotionnelle forte. Ce n’est pas seulement “l’autre ne répond pas”. Cela peut devenir “je ne sais plus où je suis dans le lien”. Votre système affectif peut alors chercher à combler le vide par des hypothèses, souvent douloureuses, parfois convaincantes. Le risque est de transformer un fait incomplet en verdict affectif. Le fait : vous n’avez pas encore de réponse. Le verdict : vous ne comptez plus. Votre chemin d’évolution consiste à ne pas laisser le silence écrire l’histoire seul. Vous pouvez demander une clarification, mais depuis le fait, pas depuis la conclusion. Sinon, vous n’envoyez pas une demande. Vous envoyez déjà un procès.`
    },

    flouRelationnel: {
      low:
        `Votre tolérance au flou semble relativement bonne. Vous pouvez probablement laisser une relation respirer sans chercher immédiatement à la définir. Pour un Incendiaire, c’est une ressource précieuse, car cela vous évite de transformer chaque ambiguïté en urgence. Mais cette souplesse a aussi son piège : si vous acceptez longtemps le flou sans nommer ce qu’il vous coûte, vous risquez de découvrir trop tard que vous avez accumulé plus de tension que prévu. Votre enjeu n’est donc pas de clarifier tout de suite. Il est de clarifier avant que votre patience ne devienne une facture émotionnelle. Une demande posée tôt coûte moins cher qu’une explosion parfaitement argumentée trois semaines plus tard. Même si, oui, l’explosion est souvent mieux écrite.`,
      medium:
        `Le flou relationnel semble devenir sensible lorsqu’il s’installe. Vous pouvez accepter une zone d’incertitude au début, mais pas une ambiguïté qui dure, surtout si l’autre évite les conversations importantes. Votre Incendiaire se déclenche probablement moins par besoin de contrôle que par besoin de vous situer. Vous voulez savoir si vous êtes dans une relation réelle, dans une attente, dans une projection ou dans une zone grise confortable pour l’autre. Votre point d’évolution consiste à poser la question avant qu’elle ne sorte sous forme d’accusation. “J’ai besoin de comprendre où on en est” est une demande. “Tu me gardes sous le coude” est peut-être une intuition, mais c’est surtout une entrée de guerre.`,
      high:
        `Le flou relationnel semble être un déclencheur majeur chez vous. Lorsque la relation n’est pas nommée, que les intentions restent vagues ou que l’autre entretient une ambiguïté, votre système peut entrer rapidement en alerte. Dans votre version de l’Incendiaire, le feu ne vient peut-être pas d’un simple besoin d’attention. Il vient d’une impossibilité à rester longtemps dans une relation sans contour. Vous avez besoin de savoir à quoi vous appartenez, ce que l’autre construit, ce que vous pouvez espérer ou non. Ce besoin est légitime. Le risque commence lorsqu’il devient une urgence de définition immédiate. Votre limite saine consiste à dire clairement ce que le flou vous fait, puis à observer si l’autre est capable d’y répondre avec respect.`
    },

    besoinPreuve: {
      low:
        `Votre besoin de preuve semble modéré ou faible. Vous n’avez pas forcément besoin de signes constants pour sentir que le lien existe. Cela indique que votre mécanisme Incendiaire ne se nourrit probablement pas d’une demande permanente de rassurance. Vos réactions fortes viennent peut-être davantage de l’incohérence, du flou ou du conflit non résolu. C’est une nuance importante : vous ne cherchez pas forcément à être rassuré tout le temps, vous cherchez surtout à ne pas être placé dans une situation où les actes ne correspondent plus aux mots. Votre point d’attention est donc la cohérence globale. Vous pouvez supporter moins de démonstration si la relation reste fiable. Mais vous ne devez pas confondre maturité et acceptation d’un lien pauvre, froid ou négligent.`,
      medium:
        `Les preuves d’attachement comptent pour vous, surtout dans les moments sensibles. Vous n’avez peut-être pas besoin d’une validation constante, mais lorsqu’un doute est déjà présent, un signe clair peut faire une grande différence. Un message, une initiative, une parole tenue, une attention concrète peuvent vous aider à retrouver votre sécurité. Le piège est de demander ces preuves de manière indirecte, par test, pique ou retrait. Si l’autre répond, vous pouvez douter de la sincérité de sa réponse. Si l’autre ne répond pas, cela confirme votre peur. Le meilleur usage de cette dimension est donc la demande directe. Pas la devinette affective. L’amour n’est déjà pas simple, inutile de lui ajouter un escape game.`,
      high:
        `Votre besoin de preuve d’attachement semble fort. Quand vous aimez, vous avez besoin de sentir concrètement que vous êtes choisi. Les paroles vagues, les gestes irréguliers ou les présences tièdes peuvent rapidement réveiller une inquiétude. Chez vous, le mécanisme Incendiaire peut donc chercher des signes visibles : est-ce que l’autre écrit, propose, assume, revient, répare, nomme, choisit ? Le risque est que la preuve devienne rapidement insuffisante si elle ne touche pas la peur de fond. Une preuve rassure, puis le doute revient. Une autre preuve arrive, puis l’alarme cherche le prochain manque. Votre travail consiste à recevoir les preuves réelles sans les transformer en carburant de vérification permanente. Sinon, même l’amour finit par avoir l’air suspect.`
    },

    peurRemplacement: {
      low:
        `La peur du remplacement ne semble pas être votre moteur principal. Vous n’êtes probablement pas activé en priorité par la comparaison, la jalousie ou l’idée qu’un autre prenne votre place. Cette nuance est importante, car elle donne à votre profil Incendiaire une tonalité moins possessive qu’inquiète. Votre feu semble peut-être davantage lié au flou, à l’absence ou à l’incohérence qu’à la rivalité directe. Cela ne veut pas dire que vous êtes insensible à la peur de perdre votre place, mais elle ne semble pas structurer toute votre réaction. Votre vigilance doit donc porter ailleurs : ne pas rester dans une relation qui vous rend incertain simplement parce qu’elle ne déclenche pas de jalousie évidente.`,
      medium:
        `La peur du remplacement peut s’activer chez vous dans certains contextes précis. Elle n’est pas forcément permanente, mais elle peut apparaître quand l’autre devient distant, accorde une attention visible à quelqu’un d’autre ou reste ambigu avec une ancienne relation. Dans ces moments, votre esprit peut commencer à comparer : ce que l’autre donne ailleurs, ce qu’il donnait avant, ce qu’il ne donne plus. La comparaison devient alors une tentative de mesurer votre place. Le risque est que la relation se transforme en classement affectif, alors que la vraie question est plus simple : est-ce que ce lien vous donne assez de sécurité et de considération ? Cette question est moins spectaculaire que l’enquête, mais beaucoup plus utile.`,
      high:
        `La peur du remplacement semble très active chez vous. Lorsqu’une autre personne entre dans le paysage, même sans preuve claire de danger, votre système peut se mettre en alerte. Un ex, une proximité nouvelle, une attention donnée ailleurs, une comparaison implicite peuvent réveiller une question douloureuse : suis-je encore unique pour l’autre ? Chez vous, l’Incendiaire peut alors chercher à reprendre une place, à obtenir une preuve, à vérifier que l’autre choisit encore. Le risque est de demander à l’autre de réparer une insécurité que la comparaison relance sans cesse. Une relation saine peut vous rassurer. Mais elle ne peut pas passer sa vie à prouver que chaque autre personne n’est pas une menace. Là, votre Ancre devient décisive.`
    },

    intensiteEmotionnelle: {
      low:
        `Votre intensité émotionnelle semble plutôt contenue. Cela ne veut pas dire que vous ressentez peu. Cela signifie plutôt que votre feu ne sort pas forcément sous forme d’explosion visible. Chez vous, l’Incendiaire peut être plus intérieur : vous observez, vous encaissez, vous analysez, puis vous prenez une décision ou vous sortez une phrase très ferme quand le seuil est dépassé. Cette version est moins spectaculaire, mais elle peut être tout aussi puissante. Le risque est que l’autre ne voie pas la montée avant qu’il ne soit trop tard. Votre axe d’évolution consiste à signaler plus tôt ce qui vous touche, même sobrement. Un petit “là, je sens que quelque chose me travaille” peut éviter un grand “de toute façon, j’ai compris”.`,
      medium:
        `Votre intensité émotionnelle semble présente, mais encore modulable. Certaines situations peuvent vous faire monter vite, mais vous avez aussi des moments où vous pouvez prendre du recul. Cette alternance peut rendre votre mécanisme difficile à lire, même pour vous. Un jour, vous arrivez à formuler calmement. Un autre, le même type de déclencheur vous prend à la gorge. Votre priorité est de repérer les signes corporels et mentaux de la montée : envie de relancer, besoin de vérifier, phrase accusatoire qui se prépare, scénario qui tourne en boucle. Plus vous repérez tôt la montée, moins elle a besoin de devenir une scène. Ce n’est pas glamour, mais c’est terriblement efficace. Un peu comme fermer le gaz avant l’étincelle.`,
      high:
        `Votre intensité émotionnelle semble forte. Lorsque le lien vous paraît menacé, l’émotion peut monter rapidement et demander une action immédiate. Vous pouvez ressentir le besoin de parler, clarifier, confronter, écrire, relancer ou obtenir une réponse sans attendre. Dans votre version de l’Incendiaire, le danger est la vitesse. Pas seulement l’intensité. La vitesse donne à l’émotion une autorité énorme. Elle vous fait croire que si vous n’agissez pas maintenant, vous perdez quelque chose. Votre travail prioritaire est donc de créer un sas. Dix minutes. Une note non envoyée. Une phrase écrite puis relue. Une marche. Peu importe. Il ne s’agit pas d’éteindre ce que vous ressentez. Il s’agit d’éviter que la première vague décide de toute la conversation.`
    },

    besoinClarification: {
      low:
        `Votre besoin de clarification semble relativement souple. Vous pouvez laisser une situation évoluer sans demander immédiatement une définition. C’est une vraie force si elle vient d’une sécurité intérieure. Mais si elle vient d’une peur de demander, elle peut devenir un piège. Certains Incendiaires ne clarifient pas tout de suite, non parce qu’ils sont sereins, mais parce qu’ils espèrent que l’autre donnera spontanément la réponse attendue. Puis, quand cette réponse ne vient pas, la frustration monte. Votre enjeu est donc de vérifier votre silence : est-il paisible ou stratégique ? Si vous attendez pour laisser respirer le lien, très bien. Si vous attendez pour que l’autre devine, attention, vous êtes déjà en train d’écrire le procès dans votre tête.`,
      medium:
        `Votre besoin de clarification semble s’activer lorsque l’ambiguïté devient coûteuse. Vous pouvez tolérer une part d’incertitude, mais vous avez besoin de sentir qu’une conversation honnête reste possible. Quand l’autre esquive, répond vaguement ou repousse toujours le moment de parler, votre mécanisme peut commencer à chauffer. Votre point d’évolution consiste à demander une clarification pendant que vous êtes encore capable d’écouter la réponse. Si vous attendez d’être saturé, la clarification risque de sortir comme un ultimatum. Le besoin initial était sain. La forme, elle, devient plus difficile à recevoir. L’idée n’est pas de demander moins. C’est de demander plus tôt et plus proprement.`,
      high:
        `Votre besoin de clarification semble très fort. Vous pouvez avoir du mal à rester dans une relation dont les contours ne sont pas définis. Ce que l’autre ressent, ce qu’il veut, ce qu’il construit, ce que vous représentez pour lui : ces questions peuvent devenir centrales. Chez vous, le mécanisme Incendiaire cherche moins à contrôler qu’à sortir du brouillard. Le risque commence lorsque la clarification devient urgente au point de ne plus laisser à l’autre le temps de formuler honnêtement. Vous avez le droit d’avoir besoin de clarté. L’autre a parfois besoin d’un délai. Votre limite saine consiste à savoir combien de temps vous pouvez rester dans l’incertitude sans vous perdre, puis à poser cette limite sans théâtre.`
    },

    reactionConflit: {
      low:
        `Votre réactivité en conflit semble plutôt faible ou contenue. Vous ne partez probablement pas immédiatement au combat dès qu’une tension apparaît. Cela peut protéger vos relations de certaines escalades. Mais pour un Incendiaire, le feu peut alors se déplacer ailleurs : rumination, retrait, froideur, décision intérieure, message très travaillé après coup. Votre calme apparent ne signifie pas forcément que le mécanisme dort. Il peut simplement préparer son dossier en silence, avec intercalaires et pièces jointes. Votre axe d’évolution consiste à exprimer plus tôt le point sensible, avant d’avoir mentalement plaidé toute l’affaire. Une phrase simple, dite à temps, vaut mieux qu’une conclusion définitive sortie trop tard.`,
      medium:
        `Votre réactivité en conflit semble modérée. Vous pouvez discuter, mais certains sujets vous font monter vite, surtout lorsqu’ils touchent au rejet, au mensonge, au flou ou à l’injustice affective. Votre mécanisme cherche alors une reconnaissance : que l’autre comprenne ce qui vous a touché, qu’il cesse de minimiser, qu’il reste présent. Le risque est que votre première phrase soit déjà trop chargée. Et souvent, une discussion prend sa direction dans les trente premières secondes. Si vous commencez par le verdict, l’autre prépare sa défense. Si vous commencez par le ressenti, il a encore une chance de vous rejoindre. Ce n’est pas plus faible. C’est juste plus intelligent.`,
      high:
        `Votre réactivité en conflit semble forte. Lorsque quelque chose vous blesse, vous pouvez ressentir une poussée immédiate vers la confrontation ou la réparation. Vous voulez que l’autre comprenne maintenant, parce qu’attendre peut ressembler à rester seul avec la blessure. Le risque est de transformer la conversation en scène d’urgence, où chaque mot doit prouver quelque chose. Dans cette dynamique, l’autre peut se sentir moins invité à comprendre que forcé de se justifier. Votre priorité est de remplacer l’accusation de départ par la vulnérabilité exacte. Pas “tu fais toujours ça”. Plutôt “quand tu coupes court à la discussion, je me sens mis à distance et ça m’active très vite”. Moins de flammes. Plus de précision. Beaucoup plus de chances de résultat.`
    }
  },

  scenarioCombinations: {
    silence_flouRelationnel:
      `Votre version de l’Incendiaire semble particulièrement sensible à une combinaison précise : le silence plus le flou. Ce mélange est puissant, parce qu’il ne vous laisse ni réponse, ni cadre. Quand l’autre ne répond pas et que la relation n’est pas clairement définie, votre système peut se retrouver sans point d’appui. Vous ne savez pas si vous devez attendre, demander, vous protéger, insister ou partir. C’est dans ce type de zone que votre mécanisme risque de chercher une preuve rapide. Vous pouvez alors envoyer un message qui ne demande pas seulement une réponse, mais une position complète. Votre travail prioritaire consiste à séparer les deux sujets : d’abord le fait du silence, ensuite la question du cadre relationnel. Mélanger les deux produit souvent une discussion trop lourde pour être vraiment utile.`,

    silence_besoinPreuve:
      `Chez vous, l’absence de réponse peut devenir douloureuse surtout parce qu’elle prive le lien d’une preuve. Ce n’est pas seulement le délai qui vous touche. C’est ce que ce délai semble retirer : le sentiment d’être choisi, attendu, important. Vous pouvez alors chercher une preuve plus forte pour compenser l’absence. Le risque est de ne jamais laisser une preuve simple suffire, parce qu’elle arrive déjà dans un climat de manque. Votre axe de travail est de demander des signes concrets avant d’être en privation affective. Plus vous attendez que la peur soit haute, plus la preuve demandée devra être énorme pour vous calmer. Et l’amour n’est pas censé faire des heures supplémentaires au service incendie.`,

    flouRelationnel_besoinClarification:
      `Votre mécanisme semble se concentrer sur la question du cadre. Vous avez besoin de savoir où vous êtes dans le lien, ce que l’autre veut, ce qui se construit vraiment. Quand le flou dure, le besoin de clarification peut devenir urgent. Cela ne veut pas dire que vous cherchez à enfermer l’autre. Cela veut dire que l’ambiguïté prolongée vous coûte cher. Le risque est d’arriver à la conversation avec une demande déjà chargée d’angoisse. Votre évolution consiste à poser des rendez-vous de clarté avant l’urgence. Pas tous les deux jours, évidemment, nous ne lançons pas une réunion de copropriété émotionnelle. Mais suffisamment tôt pour ne pas devoir obtenir en une seule discussion toute la sécurité accumulée pendant des semaines.`,

    peurRemplacement_besoinPreuve:
      `Votre version de l’Incendiaire semble fortement liée à la peur de perdre votre place. Lorsque vous sentez qu’une autre personne, une autre priorité ou une autre attention entre dans le paysage, vous pouvez avoir besoin de preuves visibles que vous comptez encore. Ce mélange peut rendre la comparaison très douloureuse. Vous ne cherchez pas seulement à savoir ce que l’autre fait. Vous cherchez à savoir si vous êtes encore spécial pour lui. Le risque est de demander une preuve qui porte en réalité sur votre valeur. Or aucun partenaire ne peut prouver durablement votre valeur à chaque apparition d’un rival réel ou imaginaire. Il peut vous rassurer sur son engagement. Votre travail à vous consiste à ne pas transformer chaque comparaison en référendum sur votre importance.`,

    intensiteEmotionnelle_reactionConflit:
      `Votre mécanisme semble prendre une forme très rapide dans les tensions. L’émotion monte fort, puis le conflit devient le lieu où vous cherchez une réponse immédiate. Ce duo peut être explosif, parce qu’il donne à la première vague émotionnelle le pouvoir d’ouvrir la conversation. Et quand une conversation s’ouvre avec trop de charge, l’autre répond souvent à la pression plutôt qu’au besoin. Votre axe prioritaire est donc le délai. Pas un délai de trois jours où chacun cuit dans son coin. Un délai court, annoncé, propre. Par exemple : “Je veux en parler, mais je suis trop activé pour le faire correctement maintenant. Je reviens vers toi dans une heure.” Cette phrase peut sauver des quartiers entiers.`,

    besoinClarification_reactionConflit:
      `Chez vous, le conflit peut devenir l’endroit où vous tentez d’obtenir une clarification. Cela se comprend : quand l’autre reste vague, la tension donne parfois l’impression d’être le seul moyen de faire sortir la vérité. Mais cette stratégie abîme la qualité de la réponse. Une clarification obtenue sous pression reste souvent suspecte. Vous pouvez vous demander ensuite si l’autre l’a donnée parce qu’il la pensait ou parce qu’il voulait calmer la crise. Votre chemin d’évolution consiste à sortir la clarification du conflit. Demandez-la dans un moment où l’autre peut répondre librement. Si l’autre refuse toujours la clarté même dans un cadre calme, alors vous avez une information précieuse. Pas agréable, mais précieuse.`
  },

  personalizedActions: {
    silence: {
      advice:
        "Avant de réagir à une absence, séparez le fait de l’histoire.",
      avoidPhrase:
        "Tu t’en fiches, sinon tu aurais répondu.",
      alternativePhrase:
        "Quand je n’ai pas de réponse après un moment important, je sens que mon inquiétude monte. J’ai besoin de savoir où tu en es.",
      exercise:
        "Écrivez deux colonnes : ce que je sais vraiment, ce que j’imagine. Ne formulez votre message qu’à partir de la première colonne."
    },
    flouRelationnel: {
      advice:
        "Clarifiez avant d’être saturé. Une demande posée tôt ressemble à une invitation. Une demande posée trop tard ressemble souvent à un ultimatum.",
      avoidPhrase:
        "Tu me gardes sous le coude.",
      alternativePhrase:
        "Je me rends compte que le flou commence à me peser. J’ai besoin qu’on parle clairement de ce qu’on veut tous les deux.",
      exercise:
        "Formulez en une phrase ce dont vous avez besoin, sans accusation, sans historique, sans preuve accumulée."
    },
    besoinPreuve: {
      advice:
        "Demandez des signes concrets, mais ne les transformez pas en test.",
      avoidPhrase:
        "Si tu tenais vraiment à moi, tu saurais quoi faire.",
      alternativePhrase:
        "Dans cette période, j’aurais besoin de signes plus clairs de ta part. Ça m’aiderait à me sentir plus en sécurité.",
      exercise:
        "Listez trois signes qui vous rassurent vraiment. Gardez ceux qui sont observables, raisonnables et demandables."
    },
    peurRemplacement: {
      advice:
        "Revenez à la sécurité du lien plutôt qu’à la comparaison.",
      avoidPhrase:
        "Tu préfères sûrement cette personne à moi.",
      alternativePhrase:
        "Je sens que cette situation réveille une peur de perdre ma place. J’ai besoin d’être rassuré sur ce que je représente pour toi.",
      exercise:
        "Écrivez : ma peur me raconte que... Puis : les faits dont je dispose sont... Ne mélangez pas les deux."
    },
    intensiteEmotionnelle: {
      advice:
        "Créez un sas court entre l’émotion et l’action.",
      avoidPhrase:
        "Là je vais te dire exactement ce que je pense.",
      alternativePhrase:
        "Je suis trop activé pour en parler proprement maintenant. J’ai besoin de revenir vers toi quand je serai plus clair.",
      exercise:
        "Attendez dix minutes avant tout message important. Écrivez la version brute, puis réécrivez-la en commençant par votre besoin."
    },
    besoinClarification: {
      advice:
        "Transformez l’urgence de réponse en demande cadrée.",
      avoidPhrase:
        "Réponds maintenant, je veux savoir ce que je suis pour toi.",
      alternativePhrase:
        "J’aimerais qu’on prenne un moment pour clarifier où on en est. C’est important pour moi de ne pas rester dans l’ambiguïté.",
      exercise:
        "Avant la discussion, écrivez trois niveaux : ce que j’aimerais, ce dont j’ai besoin, ce que je ne peux plus accepter."
    },
    reactionConflit: {
      advice:
        "Commencez le conflit par la vulnérabilité, pas par le verdict.",
      avoidPhrase:
        "Tu fais toujours ça, tu me prends pour un idiot.",
      alternativePhrase:
        "Quand ça arrive, je me sens mis à distance et je pars vite dans l’idée que je ne compte pas vraiment.",
      exercise:
        "Réécrivez votre première phrase de conflit en trois versions : accusation, besoin, limite. N’utilisez que la version besoin ou limite."
    }
  },

  finalPersonalSummaryTemplate: {
    title: "Synthèse personnalisée",
    template:
      `Votre profil dominant est {{profilDominant}}, mais votre manière précise d’être Incendiaire semble surtout organisée autour de {{topDimension1}}, {{topDimension2}} et {{topDimension3}}.

Cela signifie que votre mécanisme ne s’active pas seulement parce que vous aimez intensément. Il s’active surtout lorsque ces zones deviennent instables. Votre peur centrale n’est pas forcément de perdre l’autre à chaque instant. Elle semble plutôt se concentrer autour de cette question : “est-ce que je peux encore me sentir choisi quand {{personalizedTriggerSummary}} ?”

Votre risque principal est {{personalizedRisk}}. Votre force principale est {{personalizedStrength}}. Votre priorité d’évolution n’est pas de devenir moins intense, mais de mieux traduire votre intensité. Dire la peur avant le reproche. Poser la limite avant l’explosion. Demander la clarté avant le test.

Si vous ne deviez retenir qu’une phrase de ce rapport, ce serait celle-ci : votre feu n’est pas le problème. Le problème commence quand il devient le seul moyen de vérifier que le lien existe.`
  },

  renderingRules: {
    finalReportGeneration:
      "Pour générer le rapport final client, assembler le rapport fixe Incendiaire, puis ajouter la section personnalisée complète.",
    dimensionSelection:
      "Identifier les trois dimensions secondaires les plus fortes du client. Afficher les blocs high, medium ou low correspondants selon le score exact de chaque dimension.",
    combinationSelection:
      "Identifier les deux dimensions les plus fortes et afficher le scénario combiné correspondant. Si aucune combinaison exacte n’existe, générer une combinaison à partir des deux dimensions dominantes.",
    actionSelection:
      "Afficher les actions personnalisées des trois dimensions les plus fortes.",
    finalLength:
      "La section personnalisée doit représenter environ 20% du rapport final, soit 4 à 5 pages sur un rapport de 20 à 25 pages.",
    personalizationRule:
      "Ne jamais se contenter de nommer les dimensions. Toujours expliquer ce que cette combinaison change dans la lecture du profil.",
    toneRule:
      "Le ton doit rester direct, profond, non accusatoire, prudent, jamais médical, jamais diagnostique."
  }
};
