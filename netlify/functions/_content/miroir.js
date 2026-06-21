/* ============================================================================
   LovePattern  .  CONTENT BLOCKS  .  miroir   (EN delivery)
   ----------------------------------------------------------------------------
   English content, ported 1:1 from uploads/8lovepatterns_EN_zoned/miroir_EN_zoned.md
   (no re-translation, only re-filing into the assembler's block schema).
   Variable names stay French verbatim ({{ancre_position}}, {{pattern_secondaire}},
   {{statut}}, {{CTA_1}} ...). Only their VALUES are English.

   Payment boundary: zone:'free' vs zone:'paid'. Paid blocks never assemble into
   the free tunnel (enforced by the assembler + go/no-go).

   SERVER-ONLY: bundled into get-report, never served as a static asset.
   House rule: never the long dash.
   ============================================================================ */

export const content = {
  profil: 'miroir',
  code: 'mir',
  nom: 'The Mirror',
  accent: '#46934A',

  blocks: [

    /* ===================== FREE ZONES ================================== */

    {
      id: 'accroche', zone: 'free', type: 'prose',
      title: {
        byPalier: { '2': 'You\u2019re The Mirror. And you already know it.' },
        default: 'You\u2019re The Mirror.',
      },
      paras: [
        'You catch yourself doing it. The exact moment you start becoming whatever the other person wants, some part of you notices. It almost comments on it. And you keep going anyway. If you\u2019re here, it isn\u2019t to be taught what your mechanism is. You could explain it better than most people could. You\u2019re here because understanding it has never been enough to change it, and that clear-eyed helplessness wears you out.',
        'Here\u2019s the most important thing in this report, because you\u2019ve waited long enough for it. What you\u2019re missing isn\u2019t willpower. The thing you keep trying to fix with your head is happening somewhere else in you, and nobody has ever shown you where, or how.',
        'Let\u2019s place you first, because your situation isn\u2019t the same as every Mirror\u2019s.',
      ],
    },

    {
      id: 'visuel1', zone: 'free', type: 'visual',
      visual: {
        kind: 'anchorScale', n: 1,
        subtitle: 'You\u2019re here. Most people who take this test land in exactly this spot, and it\u2019s the most frustrating one of all.',
        paliers: [
          { v: 0, phrase: 'I feel it coming and I can do otherwise.' },
          { v: 1, phrase: 'I catch it in the moment.' },
          { v: 2, phrase: 'I know I\u2019m doing it, and I do it anyway.' },
          { v: 3, phrase: 'I understand, but after the fact.' },
          { v: 4, phrase: 'For me, the problem is the other person.' },
        ],
      },
    },

    {
      id: 'pourquoiToi', zone: 'free', type: 'prose',
      title: 'Why you',
      paras: [
        'This reflex of becoming what the other person expects, you didn\u2019t choose it as an adult. It formed very early, back when your brain was learning what love was. According to Bowlby\u2019s attachment theory, a child builds an internal model with their parent of how relationships work, an inner framework that then guides their adult relationships.',
        'In your case, that model learned a simple rule. To keep the bond with the people you depended on, it was safer to sense their needs before your own and become what suited them. Maybe a parent whose mood kept shifting, someone you read carefully the moment you walked into a room. Maybe a fragile parent you became the little guardian of. Maybe a love that came when you were good and pulled back when you took up space. Whatever the scene was, your conclusion as a child was logical. Being fully me puts the bond at risk.',
        'It wasn\u2019t a weakness. It was the smartest thing a small person who depended entirely on adults could do. The problem is that what protected you as a child is still running today, when you\u2019re no longer in danger, and it makes you disappear in front of people who would love you for exactly who you are.',
      ],
    },

    {
      id: 'visuel2', zone: 'free', type: 'visual',
      title: 'The loop you keep replaying',
      visual: {
        kind: 'loop', n: 2,
        caption: 'The loop that feeds itself.',
        steps: [
          'A trigger, the other person seems distant.',
          'Your inner alarm goes off.',
          'You fade, you become what pleases.',
          'The other person meets you less and pulls away.',
        ],
      },
    },
    {
      id: 'boucleProse', zone: 'free', type: 'prose',
      paras: [
        'At the start, you meet a gaze that makes you feel intensely alive. You move closer by becoming what they like, you pick up their tastes, their moods, their expectations, and you mold yourself to them. The merging reassures you, and meanwhile your own outline fades.',
        'Then comes the first sign of distance. A shorter message, an evening without you, a different tone. The ground gives way, because it isn\u2019t only them you might lose, it\u2019s you, this version of you that only existed inside their gaze. So you move closer still, you make yourself more attentive, you try to be exactly what\u2019s needed.',
        'And that\u2019s where it turns against you. The other person, who never met the one behind all that effort, senses something slightly unreal and pulls away for good. The way you reach for safety builds the very abandonment you dread. It isn\u2019t the wrong people, and it isn\u2019t bad luck. It\u2019s the loop.',
      ],
      callouts: [
        { if: { repetition: 'forte' }, tone: 'note',
          text: 'You told us your relationships almost all look alike. This is why. It isn\u2019t that you keep meeting the same kind of person. It\u2019s the same mechanism writing the same ending.' },
      ],
    },

    {
      id: 'pourquoiComprendre', zone: 'free', type: 'prose',
      title: 'Why understanding it has never been enough',
      paras: [
        'You\u2019ve understood your mechanism with your head. But your mechanism doesn\u2019t live in your head. All of this was written into your body before you could even speak. A child records how love works long before having the words for it, and those lessons settle in the part of you that reacts, the part that speeds up your heart when a message goes unanswered. The psychiatrist Bessel van der Kolk summed it up in an idea that became famous, the body keeps the score of what the mind has forgotten, and that\u2019s why you don\u2019t free yourself from an old pattern through understanding alone.',
        'The next time it rises, that moment when you feel yourself about to say yes while meaning no, when the other person\u2019s silence eats at you, know that a chemical surge has just fired through your body, and that it has a fixed length, around ninety seconds. A minute and a half is how long an emotion takes to settle when you don\u2019t feed it. The trouble is that you do feed it, by restarting the thoughts. So do nothing for that stretch of time. One hand on your belly, you breathe, you let the wave pass without fueling it. On the other side there\u2019s a small space of calm where, for once, fear isn\u2019t the one choosing. That space is yours now.',
      ],
    },

    {
      id: 'gensBien', zone: 'free', type: 'prose',
      title: 'Why you fade even with the people who love you',
      paras: [
        'Here\u2019s the most unsettling part. When someone loves you with a steady love, someone who would probably take you exactly as you are, you still keep fading, still keep guessing what they expect, still keep coming second. Not because that person asks for it, but because existing fully, on your own terms, feels like a threat to the bond. Part of you stays convinced that it\u2019s your disappearing that keeps you loved.',
        'The trap is that even the steadiest people only ever receive your faded version, so they can never prove they\u2019d love you any other way. You never test whether you\u2019d be kept while being fully yourself, because you never take the risk of being it. The doubt stays intact, would I really be loved, me? And the less anyone proves it to you, the more you fade, for safety. Until you see this, you\u2019ll keep vanishing in front of the very people who only wanted to meet you.',
      ],
    },

    {
      id: 'visuel3', zone: 'free', type: 'visual',
      title: 'How far it spills into the rest of your life',
      visual: {
        kind: 'spilloverTable', n: 3,
        leftHead: 'Where it shows', rightHead: 'What it produces',
        rows: [
          ['At a restaurant, you let the other person choose', 'you no longer know what you like'],
          ['At work, you say yes to the one ask too many', 'you come home drained'],
          ['In friendship, you carry others', 'nobody carries you'],
          ['In your relationship, you put their wishes first', 'they end up not seeing you anymore'],
        ],
      },
    },
    {
      id: 'debordementProse', zone: 'free', type: 'prose',
      paras: [
        'You don\u2019t only fade when you\u2019re in love. You fade almost everywhere. People find you easy, considerate, accommodating, and yet something in you is starting to get tired of living this way, as if you\u2019d forgotten what your own shape was.',
      ],
      callouts: [
        { if: { statut: 'rupture' }, tone: 'note',
          text: 'And since the breakup, what you\u2019re missing may not only be them. It\u2019s no longer knowing who you are when their gaze isn\u2019t there to give you a shape.' },
        { if: { securite: 'vigilance' }, tone: 'care',
          text: 'A note, in passing. If right now you feel overwhelmed or in danger, this report is no substitute for a real human presence. Taking care of yourself can mean talking to someone you trust.' },
      ],
    },

    {
      id: 'aQuelPoint', zone: 'free', type: 'prose',
      title: 'How tightly it holds you today',
      lead: 'You\u2019re at level {{ancre_position}}: \u201c{{ancre_position_libelle}}\u201d.',
      paras: {
        byPalier: {
          '0': [
            'You\u2019re The Mirror, and you\u2019ve learned to stay yourself. You know your reflex by heart, you feel it coming, and most of the time you choose something else. You can be close without disappearing, give without draining yourself, love while keeping contact with what you want. This report won\u2019t teach you to see yourself, but to hold that freedom over time and to recognize the moments when you could slip.',
          ],
          '1': [
            'You\u2019re The Mirror, and you watch yourself do it live. The moment you start to fade, you feel it, part of you observes while it\u2019s happening. And more and more often, you manage to stop, to say what you think, to hold your place. It isn\u2019t systematic yet, and that\u2019s normal. What\u2019s left is to turn what you see into a choice, almost every time.',
          ],
          '2': [
            'You see it coming. The very moment you start to fade, you know it. You could almost watch yourself do it. And you do it anyway. That lucidity that prevents nothing is a pain well known to people who have worked hard on themselves and can\u2019t understand why everything they\u2019ve grasped changes nothing. Now you know why. It isn\u2019t willpower you lack, it\u2019s that the control isn\u2019t in your head.',
            'You now know what\u2019s happening to you, where it comes from, and why understanding it hasn\u2019t switched it off. You have a first tool that works in the body. What comes next is your plan.',
          ],
          '3': [
            'You\u2019re The Mirror, and you\u2019re starting to see it. You recognize your mechanisms, but often too late, the day after a fight or days later, when you replay the scene and tell yourself, there it is, I faded again. You understand it perfectly, but in the moment you saw nothing coming. That\u2019s already huge, many people never see anything. You have the lucidity, what you\u2019re missing is the timing, and that can be brought closer.',
          ],
          '4': [
            'You\u2019re The Mirror. If you\u2019ve made it this far, something in your relationships is probably repeating and hurting you. And from where you stand today, you often feel it comes from others, that they\u2019re distant, disappointing, that they don\u2019t give you back what you give. I won\u2019t tell you you\u2019re wrong, you\u2019ve probably lived through real disappointments, and you give enormously. I just want to offer you another angle, gently. What if there were, in the way you love, a habit so old you no longer see it, weighing on your relationships without your knowing?',
          ],
        },
        default: [
          'You\u2019re at level {{ancre_position}}. It\u2019s your Anchor position right now, the point your mechanism holds you from. It isn\u2019t a sentence, it\u2019s a position, and a position can be raised.',
        ],
      },
    },

    {
      id: 'ctaPlan', zone: 'free', type: 'cta',
      label: 'Get my plan',
    },

    /* ===================== PAID ZONES ================================== */

    {
      id: 'visuel4', zone: 'paid', type: 'identityCard',
      title: 'Your plan, built on your exact position',
      visual: { n: 4 },
    },

    {
      id: 'deuxiemeMecanisme', zone: 'paid', type: 'prose',
      title: '1. Your second mechanism',
      paras: [
        'Your Mirror doesn\u2019t move alone. Right behind it sits {{pattern_secondaire}} ({{pattern_secondaire_score}}), and until you see the two of them together, you risk working on the wrong thing.',
        {
          bySecondaire: {
            guetteur: 'You don\u2019t only fade. You also keep watch for the signs that your presence is no longer enough to hold them. You\u2019re doing two things at once, becoming perfect and standing guard. That\u2019s why you come out of your relationships exhausted. In your plan, we calm the watching first, because that\u2019s what drains you, before working on the fading.',
          },
          default: 'Whatever it is, it deepens the same fading, your way of disappearing to keep the bond. Your plan starts by helping you exist again, before working on this second mechanism.',
        },
      ],
    },

    {
      id: 'compatibilite', zone: 'paid', type: 'prose',
      title: '2. Who it can actually work with',
      paras: [
        'No mechanism is made for another, and none is doomed with another. You can build something solid with any profile. What decides isn\u2019t the other person\u2019s label, it\u2019s each person\u2019s Anchor level.',
        'Two people aware of their mechanisms, even opposite ones, love each other without destroying each other. Two compatible but unaware profiles hurt each other. So don\u2019t look at the other person\u2019s mechanism, look at whether they can see it, talk about it, and repair after a fight.',
      ],
    },
    {
      id: 'visuel5', zone: 'paid', type: 'visual',
      visual: {
        kind: 'compatColumns', n: 5,
        columns: [
          { label: 'The ones who soothe you', tone: 'apaise',
            blurb: 'Someone with a high Anchor, a Bastion who has learned to open up, a Savior who no longer sacrifices themselves. They don\u2019t turn your fear of being abandoned into a daily routine. They\u2019re steady, readable, able to repair, and your fear falls asleep gently beside them.',
            items: [{ code: 'anc', name: 'High Anchor' }, { code: 'bas', name: 'Open Bastion' }, { code: 'sau', name: 'Steady Savior' }] },
          { label: 'The ones who understand you', tone: 'comprend',
            blurb: 'A Chameleon or a Savior still on the way, an Arsonist who has calmed down. They know from the inside the fear of losing your place. They understand you without necessarily soothing you, and with them everything depends on each person\u2019s Anchor.',
            items: [{ code: 'cam', name: 'Chameleon on the way' }, { code: 'sau', name: 'Savior on the way' }, { code: 'inc', name: 'Calmed Arsonist' }] },
          { label: 'The ones who make you blow up', tone: 'declenche',
            blurb: 'A very active Runaway, a very distant Alchemist, a magnetic partner who loves being mirrored. They press exactly on your sore spot. The more they pull away, the more you fade to hold on to them. They aren\u2019t bad people, they\u2019re the riskiest dynamic for you as long as your Anchor is low.',
            items: [{ code: 'fug', name: 'Active Runaway' }, { code: 'alc', name: 'Distant Alchemist' }] },
        ],
      },
    },
    {
      id: 'compatProse2', zone: 'paid', type: 'prose',
      paras: [
        'And there\u2019s a scientific reason for your pull toward the ones who make you blow up. Hazan and Shaver showed, back in 1987, that adult love replays the attachment system of childhood. Your body recognizes whatever resembles your wound as familiar, and calls it love. That\u2019s why the calm of a steady person can feel flat to you, when it\u2019s exactly what you need.',
      ],
    },

    {
      id: 'protocole', zone: 'paid', type: 'prose',
      title: '3. Your way back up',
      paras: {
        byPalier: {
          '0': [
            'You don\u2019t need an intensive program, you\u2019ve already done the work. What you need is enough to maintain your freedom and to spot the moments when life might make you slip. Here your notebook is a logbook, not an exercise book.',
          ],
          '1': [
            'You see yourself, you sometimes stop, and that\u2019s already a lot. What\u2019s left to do is finer, to turn almost every realization into a real choice, and above all to learn to say what you want, not just to hold back the yes you were about to give. This week, we move from restraint to expression. Get your notebook out.',
          ],
          '2': [
            'You watch yourself do it, and you give in anyway. It isn\u2019t a lack of willpower, it\u2019s a lack of space. Between the moment your alarm rings and the moment you say yes, there\u2019s nothing, not a fraction of a second to choose. Your whole job this week is to build that space, in the body, where it plays out. Get your notebook.',
          ],
          '3': [
            'You already see clearly, that\u2019s your strength. Your only problem is the lag, your lucidity arrives after the battle. This week, we\u2019ll train it to arrive earlier. It\u2019s a body-memory job, and it\u2019s done with method. Get your notebook out.',
          ],
          '4': [
            'Before you try to change anything, you need one thing, to see yourself do it. You don\u2019t correct a mechanism you can\u2019t see yet. So this week, we won\u2019t change anything in your behavior. We\u2019ll just turn on the light. Get a notebook, a real paper one, and keep it by your bed. This notebook will be your observatory.',
          ],
        },
        default: [
          'Here\u2019s your way back up, built for your Anchor position. Get a notebook, and take one exercise at a time.',
        ],
      },
    },
    {
      id: 'protocoleExercices', zone: 'paid', type: 'exercises',
      exercises: {
        byPalier: {
          '0': [
            { label: 'Exercise 1, the map of your fragile zones.', body: 'On a page, list the situations that, even today, can wake your old reflex, intense fatigue, a loss, the start of a relationship where the stakes are high, a person who resembles your original wound. These are your watch zones. Knowing them in advance is already protection.' },
            { label: 'Exercise 2, the monthly check-in.', body: 'Once a month, take ten minutes and reread your month. Was there a moment when you faded like before? If so, without judging yourself, note what triggered it. You\u2019re refining your map. If not, savor it, it\u2019s the sign your freedom is holding.' },
            { label: 'Exercise 3, nourish rather than repair.', body: 'At your level, the work is no longer to correct yourself but to nourish yourself. Maintain what regulates you, sleep, movement, secure bonds, time of your own. A rested, surrounded person slips far less. That\u2019s prevention, and it\u2019s all you need.' },
          ],
          '1': [
            { label: 'Exercise 1, from the silent no to the spoken need (every day).', body: 'Holding back an automatic yes, you already know how to do that. Now go further, say what you want instead. This week, at least once a day, when you spot your reflex to fade, don\u2019t just refrain from giving in, voice your need out loud. The structure, drawn from nonviolent communication, is simple and you\u2019ll write it in your notebook to practice. When you do this, I feel that, and I need this. For example, when you decide without asking me, I feel erased, and I need us to choose together. Write three phrases like that a day, on real situations, even if you don\u2019t say them all. Writing trains the mouth.' },
            { label: 'Exercise 2, the small-disagreement experiment (two or three times in the week).', body: 'Your nervous system still believes that existing drives the other person away. We\u2019ll prove the opposite by experience, gently. Pick low-stakes situations, a restaurant, a film, a time, and express a real preference of your own, different from the other person\u2019s. Watch what happens. In the vast majority of cases, the other person doesn\u2019t leave, doesn\u2019t get angry, sometimes is even relieved that you have an opinion. Note in your notebook, each time, what you feared and what actually happened. The gap between the two is your fear deflating, with proof.' },
            { label: 'Exercise 3, the assertion review (at the end of the week).', body: 'Reread your week. Count the times you expressed a need or a preference. Note the hardest one, and really congratulate yourself for that one. Then spot the next one, a notch above, that you\u2019d like to dare next week. You\u2019re building, step by step, a version of you that exists without fearing the loss of the bond.' },
          ],
          '2': [
            { label: 'Exercise 1, the breathing that opens the space (twice a day, 5 minutes, and in the moment).', body: 'Here\u2019s the base technique, to train first when calm. Breathe in through your nose for 4 seconds, then breathe out slowly through your mouth for 6 to 8 seconds. The out-breath being longer than the in-breath isn\u2019t a detail, it\u2019s what switches on your parasympathetic nervous system, the part of you that calms the alarm. Do it twice a day, ten breaths, so your body knows the way. Then, in a real situation, the moment you feel your signal rise, you\u2019ll have this tool ready.' },
            { label: 'Exercise 2, the 90-second rule (in the moment, as soon as the alarm rings).', body: 'This is your central exercise, resting on a biological fact. When an emotion fires, the chemical surge in your body lasts about 90 seconds, then it subsides, as long as you don\u2019t feed it with your thoughts. So the next time someone is waiting on an answer from you and you feel the fading rise, do this, in order. One, don\u2019t answer right away, just say give me a minute. Two, quietly put a hand on your belly and do your long breathing. Three, count inwardly until the wave comes back down, about a minute and a half. Four, only then, answer. You\u2019ll find that on the other side of those 90 seconds, it\u2019s no longer fear talking, it\u2019s you.' },
            { label: 'Exercise 3, the journal of the space you gained (every evening).', body: 'Each evening, note in your notebook the times you managed to slip that space in, even imperfectly, and the times the wave was faster than you. Don\u2019t judge the misses, count them as data. Also note, for each success, what you felt after choosing your answer instead of being driven by it. Keep that feeling in mind, it\u2019s your reward, and it\u2019s what anchors the new reflex. Day after day, you\u2019ll watch the success column grow. That\u2019s your Anchor rising, in black and white.' },
            { label: 'Exercise 4, the starter line (to prepare in advance).', body: 'Write on a piece of paper, and keep in your pocket, three small phrases that buy you time without creating conflict. For example, I\u2019ll get back to you in a moment, or I need to think about it, or I\u2019m not sure, let me sit with it. Having these ready in advance takes away the difficulty of inventing them right when the alarm rings. You\u2019ll just pull one out, and it\u2019ll buy you your 90 seconds.' },
          ],
          '3': [
            { label: 'Exercise 1, the slow-motion replay (every evening, 10 minutes).', body: 'Each evening, pick a moment of your day when you know, now, that you faded. Close your eyes and replay the scene like a film, but in slow motion. And look for one precise thing, the very first instant your body changed. Before you even gave in, there was a physical signal, a tightening throat, a heat in the chest, a knot in the belly, an urge to please rising. Find it. Write in your notebook where, in your body, it happened, and at what exact moment of the scene. Do this each evening with a different scene.' },
            { label: 'Exercise 2, the map of your signal (at the end of the week).', body: 'After seven days, reread all your logs. You\u2019ll notice your body often sends you the same signal, in the same place. That\u2019s your personal alarm bell. Draw it, literally, on a page of your notebook, a little figure with a circled zone, throat, chest, belly, wherever it fires for you. Now you know what to watch for. You\u2019ve turned a blur into a precise, named signal.' },
            { label: 'Exercise 3, the presence scan (twice a day, 3 minutes).', body: 'To feel your signal while it\u2019s arriving, your body first has to learn to listen to itself at rest. Twice a day, at a set time, stop. Sit down, close your eyes, and move your attention slowly from your feet to your head, noting each sensation, without changing anything. Thirty seconds per zone. This training, backed by somatic regulation approaches, builds your capacity to inhabit your body live. The more you do it when calm, the more you\u2019ll be able, mid-scene, to feel your signal rise in time.' },
          ],
          '4': [
            { label: 'Exercise 1, the three-column journal (every evening, 5 minutes).', body: 'Draw three columns on a page. In the first, note a moment from your day when you felt a strong emotion with someone, irritation, disappointment, a pang, a sudden joy when you were given attention. In the second column, write what you did right after, what you said, how you reacted. In the third, write what you really wanted, deep down, in that moment. Don\u2019t overthink, write fast. After seven evenings, reread it all. You\u2019ll see something appear that you didn\u2019t suspect, a pattern that keeps coming back. That\u2019s your mechanism showing itself for the first time.' },
            { label: 'Exercise 2, the question that changes the angle (at every upset).', body: 'When a relationship disappoints you, you\u2019re used to asking why did they do that to me. This week, add a second question, right after, without replacing the first. And what did I do just before? Not to blame yourself. Just to look. Most of the time you\u2019ll find nothing, and that\u2019s normal at first. But now and then you\u2019ll spot a small move of your own, one message too many, a sulky silence, a favor done to be sure you\u2019d be kept. Note it in your notebook. These are treasures, because they\u2019re the first threads you\u2019ll be able to pull.' },
            { label: 'Exercise 3, the repetition log (once during the week).', body: 'Sit down for twenty minutes, somewhere quiet. Think back to your three last important relationships. For each one, write in a sentence how it began, and in a sentence how it ended. Put the three endings side by side. Do they look alike? If so, you\u2019re holding the most precious piece of information in this report. What repeats across different people doesn\u2019t come from the people. It comes from the one thing all those stories had in common, you. And, I\u2019ll say it again, that isn\u2019t an accusation, it\u2019s a release, because over yourself, you have power.' },
          ],
        },
        default: [{ label: 'Your exercises', body: 'Your detailed protocol for this Anchor position comes with your plan. Get a notebook and take one exercise at a time.' }],
      },
    },

    {
      id: 'lectures', zone: 'paid', type: 'bookcards',
      title: '4. The reading chosen for your level',
      lead: 'You\u2019re at level {{ancre_position}}. Here are the books that speak to this exact spot.',
      books: {
        byPalier: {
          '0': [
            { title: 'Hold Me Tight', author: 'Sue Johnson', blurb: 'To deepen the quality of the secure bond, now that you know how to reach it.' },
            { title: 'The Seven Principles for Making Marriage Work', author: 'John Gottman', blurb: 'To build, together, a relationship that lasts, on the stability you\u2019ve earned.' },
            { title: 'Nonviolent Communication', author: 'Marshall Rosenberg', blurb: 'To keep, over time, a way of speaking that connects rather than separates.' },
          ],
          '1': [
            { title: 'Being Genuine: Stop Being Nice, Start Being Real', author: 'Thomas d\u2019Ansembourg', blurb: 'To move from awareness to clear assertion, without aggression.' },
            { title: 'Nonviolent Communication', author: 'Marshall Rosenberg', blurb: 'To say your needs in a way that brings people closer instead of pushing them away.' },
            { title: 'The Body Keeps the Score', author: 'Bessel van der Kolk', blurb: 'To support, through an understanding of the body, what you\u2019re starting to dare to say.' },
          ],
          '2': [
            { title: 'The Body Keeps the Score', author: 'Bessel van der Kolk', blurb: 'To understand, in depth, why your mechanism lives in your body and not in your head. The book that explains your level.' },
            { title: 'Being Genuine: Stop Being Nice, Start Being Real', author: 'Thomas d\u2019Ansembourg', blurb: 'To learn to say what you feel instead of fading to please. The training that follows the understanding.' },
            { title: 'Attached', author: 'Amir Levine and Rachel Heller', blurb: 'To reread your past relationships and stop thinking you\u2019re crazy.' },
          ],
          '3': [
            { title: 'The Body Keeps the Score', author: 'Bessel van der Kolk', blurb: 'To understand why your lucidity arrives late, and how the body can learn to signal earlier.' },
            { title: 'Attached', author: 'Amir Levine and Rachel Heller', blurb: 'To reread your past relationships in the light of attachment.' },
            { title: 'Being Genuine: Stop Being Nice, Start Being Real', author: 'Thomas d\u2019Ansembourg', blurb: 'To start turning your understanding into words, right when it counts.' },
          ],
          '4': [
            { title: 'Women Who Love Too Much', author: 'Robin Norwood', blurb: 'To recognize yourself, without judging yourself, in stories that look like yours. Often the book that opens your eyes without forcing anything.' },
            { title: 'Attached', author: 'Amir Levine and Rachel Heller', blurb: 'To discover that your reactions have a name and a logic, and that they come from far back.' },
            { title: 'The Power of Attachment', author: 'Diane Poole Heller', blurb: 'To put simple words on what\u2019s happening inside you, with no jargon, and to see that it can change.' },
          ],
        },
        default: [
          { title: 'The Body Keeps the Score', author: 'Bessel van der Kolk', blurb: 'To understand, in depth, why your mechanism lives in your body and not in your head.' },
          { title: 'Being Genuine: Stop Being Nice, Start Being Real', author: 'Thomas d\u2019Ansembourg', blurb: 'To learn to say what you feel instead of fading to please.' },
          { title: 'Attached', author: 'Amir Levine and Rachel Heller', blurb: 'To reread your past relationships and stop thinking you\u2019re crazy.' },
        ],
      },
    },

    {
      id: 'devenir', zone: 'paid', type: 'prose',
      title: '5. What you become when you rise',
      paras: [
        'A Mirror who rises doesn\u2019t turn into someone else. You keep your sensitivity, your subtlety, that rare way of sensing people. But it no longer costs you your shape. You can be close without disappearing, give without draining yourself, love hard while still knowing what you want.',
        'Be patient, the path is neither fast nor steady. You\u2019ll fade again, especially when your sore spot gets touched. That won\u2019t be a failure, just the sign that you\u2019re learning. And what will lift you isn\u2019t understanding more, it\u2019s living, over time, new experiences where your nervous system learns it can be safe without fading. That happens with others, and it can be practiced. This week\u2019s protocol is where you start.',
      ],
    },

    {
      id: 'etApres', zone: 'paid', type: 'prose',
      title: '6. And after this',
      paras: [
        'This report is a snapshot of you today. Your Anchor isn\u2019t fixed, it moves as you integrate your mechanism. The more you learn to feel it coming and hold your place, the less it decides in your stead, and the more you let the right people meet you for real, for who you are and not for the reflection you hold up.',
        'Each level has its own way of working. What you do at level {{ancre_position}} won\u2019t be what you do at the level above. So come back, in a few weeks, take this test again. It\u2019ll become your progress mirror. If your Anchor rises, you\u2019ll know you\u2019re showing up where you\u2019d once have faded. And if it lowers after a hard stretch, that\u2019s useful information, not a setback. Either way, you have a compass.',
        'That\u2019s the real difference between understanding your mechanism once, and moving it for good.',
      ],
    },

    {
      id: 'disclaimer', zone: 'paid', type: 'disclaimer',
      paras: [
        '8lovepatterns is a self-knowledge tool inspired by the science of attachment (Bowlby, Hazan & Shaver, van der Kolk). This report makes no diagnosis and is not a substitute for psychological care. If you\u2019re going through something that puts you in danger, this report isn\u2019t enough, and you deserve real support.',
      ],
    },

  ],
};

export default content;
