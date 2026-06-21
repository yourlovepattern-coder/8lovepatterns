/* ============================================================================
   LovePattern  .  CONTENT BLOCKS  .  sauveur   (EN delivery)
   ----------------------------------------------------------------------------
   English content, ported 1:1 from uploads/8lovepatterns_EN_zoned/sauveur_EN_zoned.md
   (no re-translation, only re-filing into the assembler's block schema).
   Variable names stay French verbatim. Only their VALUES are English.
   Payment boundary: zone:'free' vs zone:'paid'. SERVER-ONLY.
   House rule: never the long dash.
   ============================================================================ */

export const content = {
  profil: 'sauveur',
  code: 'sau',
  nom: 'The Savior',
  accent: '#B5783F',

  blocks: [

    /* ===================== FREE ZONES ================================== */

    {
      id: 'accroche', zone: 'free', type: 'prose',
      title: {
        byPalier: { '2': 'You\u2019re The Savior. And you already know it.' },
        default: 'You\u2019re The Savior.',
      },
      paras: [
        'You watch yourself do it. The moment you rush to help, when you take charge of what nobody asked you to, part of you notices. You know you\u2019re forgetting yourself again, and you keep going anyway. If you\u2019re here, it isn\u2019t to be taught that you sacrifice yourself, you know that already. You\u2019re here because understanding it changed nothing, and that powerless lucidity wears you out.',
        'Here\u2019s the most important thing in this report, because you\u2019ve waited long enough. What you\u2019re missing isn\u2019t willpower. The moment someone is struggling, your help leaves before your head has decided anything. Nobody has shown you how to stay there without leaping, or how to let someone take care of you.',
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
        'This reflex of making yourself indispensable, you didn\u2019t choose it as an adult. According to Bowlby\u2019s attachment theory, a child builds an internal model with their parent of how relationships work, which then guides their whole love life.',
        'In your case, that model learned a precise rule. I\u2019m loved when I\u2019m useful. Maybe as a child you had to look after a fragile, sick, or overwhelmed parent, and became the little adult of the house very early. Maybe attention only came when you were good, helpful, up to the task. Maybe your worth was always tied to what you brought, never to who you simply were. Whatever the scene was, your conclusion as a child was logical. If I\u2019m not useful, I\u2019m not sure of keeping my place.',
        'It wasn\u2019t calculation. It was the smart protection of a child who had to earn their love. The problem is that this strategy is still running today, and it has you giving endlessly to people who would love you even if you stopped.',
      ],
    },

    {
      id: 'visuel2', zone: 'free', type: 'visual',
      title: 'The loop you keep replaying',
      visual: {
        kind: 'loop', n: 2,
        caption: 'The loop that feeds itself.',
        steps: [
          'You meet a fragility in the other person.',
          'You make yourself useful, you get recognition.',
          'The relationship organizes around your help, your needs slide to second place.',
          'You pile up fatigue and silent waiting, you feel invisible.',
        ],
      },
    },
    {
      id: 'boucleProse', zone: 'free', type: 'prose',
      paras: [
        'At the start, your help creates the bond. The other person feels supported like never before, and you, you finally feel in your place, useful, chosen. Then the relationship organizes around what you give. Your own needs slide to second place, you play down your fatigue, you make yourself available even when it costs you.',
        'The other person gets used to receiving, without always measuring what it takes from you. And you start waiting in silence for a recognition that doesn\u2019t come the way you hoped. You feel invisible despite everything you do. So you give even more, to find the proof of your worth again. The loop gets worse. In the end, you\u2019re exhausted, full of a resentment you don\u2019t dare voice, and you draw a conclusion that seems obvious, people always end up taking advantage of me. Except that conclusion was built by your own strategy. You didn\u2019t prove that people take advantage, you replayed your old fear of mattering only through your usefulness.',
      ],
      callouts: [
        { if: { repetition: 'forte' }, tone: 'note',
          text: 'You told us you often end up exhausted and unrecognized. This is why. It isn\u2019t that you keep meeting ungrateful people. It\u2019s that by giving before you\u2019re asked, you teach people to receive without giving back, then you resent them for what you set up yourself.' },
      ],
    },

    {
      id: 'pourquoiComprendre', zone: 'free', type: 'prose',
      title: 'Why understanding it has never been enough',
      paras: [
        'You\u2019ve surely understood already that you sacrifice too much, and it changed nothing, because your mechanism doesn\u2019t live in your head. It was written into your body before words, in the part of you that reacts, the part that can\u2019t bear to see the other person struggle without leaping to help. The psychiatrist Bessel van der Kolk showed it, the body keeps the score of what the mind has forgotten, and that\u2019s why you don\u2019t calm this reflex through reasoning.',
        'The next time someone is struggling and you feel the urge to take charge, to fix, to make yourself useful, rise, know that a surge has fired through your body, a tension, an impossibility of staying there doing nothing. It has a length, around ninety seconds, if you don\u2019t feed it. The trouble is that you feed it by rushing in. So next time, don\u2019t help right away. Stay, one hand on your belly, breathe, and let the wave pass for a minute and a half. You\u2019ll discover that in the end you can first ask whether the other person wants help, and that sometimes, your simple presence was enough. This tool is yours.',
      ],
    },

    {
      id: 'gensBien', zone: 'free', type: 'prose',
      title: 'Why you rescue even those who asked for nothing',
      paras: [
        'Here\u2019s the most unsettling part. When someone is self-sufficient, solid, and loves you simply for who you are, with no need to be rescued, you don\u2019t feel reassured, you feel lost. A question rises in silence, if they don\u2019t need me, what\u2019s keeping them? The calm of a love that asks nothing of you, instead of soothing you, wakes your deepest fear, the fear of mattering only through your usefulness.',
        'The trap is that you often feel more alive with people in distress, who give you a mission, an immediate place. But these bonds exhaust you, because they don\u2019t love you, they need you, and that isn\u2019t the same thing. Meanwhile, you distrust the ones who could love you with nothing in return, because with them you no longer know what your place is. Until you see this, you\u2019ll keep looking for people to rescue, to be sure of being kept.',
      ],
    },

    {
      id: 'visuel3', zone: 'free', type: 'visual',
      title: 'How far it spills into the rest of your life',
      visual: {
        kind: 'spilloverTable', n: 3,
        leftHead: 'Where it shows', rightHead: 'What it produces',
        rows: [
          ['In love, you carry the relationship', 'you end up drained and unseen'],
          ['In friendship, you\u2019re the one who helps everyone', 'nobody thinks to help you'],
          ['At work, you take on others\u2019 load', 'they let you'],
          ['With yourself, you ignore your needs', 'you no longer know what you want'],
        ],
      },
    },
    {
      id: 'debordementProse', zone: 'free', type: 'prose',
      paras: [
        'You don\u2019t only sacrifice yourself in love. You carry almost everyone. People find you generous, solid, always there, and yet very few of them take care of you in return, because you never ask. This generosity that was meant to give you a place sometimes starts to feel like a great silent exhaustion.',
      ],
      callouts: [
        { if: { statut: 'rupture' }, tone: 'note',
          text: 'And since the breakup, you may still be hooked on the unfinished mission, wondering who\u2019s going to take care of the other person, to the point of mistaking the loss of love for the loss of your role.' },
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
            'You\u2019re The Savior, and you\u2019ve learned to help without forgetting yourself. You feel the urge to take everything on coming, and most of the time you choose to stay present without sacrificing yourself. This report won\u2019t teach you to see yourself, but to hold that new balance and to spot what could pull you back into rescuing.',
          ],
          '1': [
            'You\u2019re The Savior, and you watch yourself leap live. More and more, you manage to ask whether the other person wants help instead of rushing in. It isn\u2019t systematic yet. What\u2019s left is to turn each urge to rescue into a choice, and to learn to say your own needs instead of only guessing other people\u2019s.',
          ],
          '2': [
            'You watch yourself do it. The moment you rush to help, when you forget yourself again, you know it. You know you\u2019re disappearing behind your role, and you keep going anyway. That lucidity that prevents nothing is a real pain, the pain of someone who\u2019d like to receive and whose body only knows how to give.',
            'You now know what\u2019s happening to you, where it comes from, and why understanding it hasn\u2019t switched it off. You have a first tool that works in the body. What comes next is your plan.',
          ],
          '3': [
            'You\u2019re The Savior, and you\u2019re starting to see it. You recognize that you forget yourself, but on a delay, once you\u2019re exhausted and full of resentment. It\u2019s later that you realize you carried everything again without being asked. You have the lucidity, what you\u2019re missing is the right moment.',
          ],
          '4': [
            'You\u2019re The Savior. If your relationships often end the same way, you probably feel used, unrecognized, surrounded by ungrateful people who take without giving back. From where you stand, it\u2019s other people who take advantage. You\u2019re sometimes right, some people really do take too much. But I want to offer you another angle, gently. What if part of what keeps repeating also came from a very old habit of giving before you\u2019re asked, until you teach people to give you nothing back?',
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
        'Your Savior doesn\u2019t move alone. Right behind it sits {{pattern_secondaire}} ({{pattern_secondaire_score}}).',
        {
          bySecondaire: {
            miroir: 'You don\u2019t only make yourself useful, you also become what the other person expects. You give the right help, but also the right version of yourself, the one that pleases. You disappear twice over, behind your role and behind your adapting. In your plan, we work first on finding what you want, before trying to give it or to please.',
          },
          default: 'Whatever it is, it deepens the same self-forgetting, your way of earning your place by giving. Your plan starts by learning to receive, before working on this second mechanism.',
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
            blurb: 'Someone with a high Anchor, an integrated Bastion, an integrated Chameleon. What they share, they\u2019re self-sufficient, they don\u2019t turn you into a permanent rescuer, they choose you for yourself and not for what you do. Near them, you can set down your load, because nobody asks you to carry it in order to exist.',
            items: [{ code: 'anc', name: 'High Anchor' }, { code: 'bas', name: 'Integrated Bastion' }, { code: 'cam', name: 'Integrated Chameleon' }] },
          { label: 'The ones who understand you', tone: 'comprend',
            blurb: 'A Mirror on the way, an integrated Watcher, an Arsonist making progress. They know from the inside the fear of losing your place, the need to matter. After that, everything depends on each person\u2019s Anchor.',
            items: [{ code: 'mir', name: 'Mirror on the way' }, { code: 'gue', name: 'Integrated Watcher' }, { code: 'inc', name: 'Arsonist progressing' }] },
          { label: 'The ones who exhaust you', tone: 'declenche',
            blurb: 'A very active Runaway, a partner in chronic distress, a person who receives without ever taking responsibility. They give you an endless mission, and that\u2019s exactly what wakes your mechanism. The more they need you, the more you forget yourself. They aren\u2019t bad people, they\u2019re the riskiest dynamic for you as long as your Anchor is low.',
            items: [{ code: 'fug', name: 'Active Runaway' }] },
        ],
      },
    },
    {
      id: 'compatProse2', zone: 'paid', type: 'prose',
      paras: [
        'And there\u2019s a scientific reason for your pull toward the ones who need saving. Hazan and Shaver showed, back in 1987, that adult love replays the attachment system of childhood. Your body recognizes the bond where you earn your place by helping as familiar, and calls it love. That\u2019s why a self-sufficient person can feel distant to you, when they may be the one with whom you could finally be loved without having to prove anything.',
      ],
    },

    {
      id: 'protocole', zone: 'paid', type: 'prose',
      title: '3. Your way back up',
      paras: {
        byPalier: {
          '0': [
            'You don\u2019t need an intensive program, you\u2019ve already done the work. You need enough to maintain your balance and to spot the moments when life could pull you back into rescuing.',
          ],
          '1': [
            'You see yourself leap, and you sometimes ask before helping. What\u2019s left to do is finer, to turn every urge to rescue into a choice, and to say your own needs instead of only guessing other people\u2019s. This week, we move from automatic giving to the spoken need. Get your notebook.',
          ],
          '2': [
            'You watch yourself do it, and you rescue anyway. The lock is that between the other person\u2019s difficulty and your move to help, there\u2019s no space, the help leaves before you do. Your job is to put a delay before leaping, and to start receiving instead of only giving. Here\u2019s your program for two weeks. Get a notebook.',
          ],
          '3': [
            'You already see that you forget yourself, that\u2019s your strength. Your problem is the lag, you understand it later, once you\u2019re already drained and full of resentment. This week, we train your lucidity to arrive earlier. It\u2019s a body-memory job.',
          ],
          '4': [
            'Before you change anything, you need one thing, to see yourself give. You don\u2019t calm a rescuing reflex you can\u2019t yet see. This week, we change nothing, we just turn on the light. Get a notebook and keep it by your bed.',
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
            { label: 'Exercise 1, the map of your fragile zones.', body: 'List the situations that can still wake your old reflex, a person in distress, an accusation of selfishness, deep fatigue, an unbalanced bond that hands you a mission. Knowing them is already protection.' },
            { label: 'Exercise 2, the monthly check-in.', body: 'Once a month, reread your month. Was there a moment when you forgot yourself like before? Without judging yourself, note what triggered it. You\u2019re refining your map.' },
            { label: 'Exercise 3, maintaining the receiving.', body: 'At your level, the work is no longer to stop yourself rescuing, but to maintain a balance, to give without forgetting yourself and to keep receiving. Keep the habit of regularly letting someone take care of you, so your place never becomes conditional on what you give again.' },
          ],
          '1': [
            { label: 'Exercise 1, naming your need in real time (every day).', body: 'Asking before helping, you already do that a little. Now go further, say what you need. The structure, drawn from nonviolent communication, is simple. When it goes like this, I feel that, and I need this. For example, when I give a lot with nothing back, I feel invisible, and I need to feel chosen for myself, not for what I do. Write three phrases a day, on real situations. Writing trains the mouth.' },
            { label: 'Exercise 2, the low-stakes receiving experiment (two or three times).', body: 'Your system still believes your place depends on what you give. Prove the opposite, gently. Pick low-stakes situations, and let someone do something for you, accept help, a gift, a favor, without giving it back right away. Watch what happens. Most of the time, the other person is happy to give, and your place doesn\u2019t move. Note each time what you feared and what actually happened.' },
            { label: 'Exercise 3, the balance review (end of the week).', body: 'Reread your week. Count the times you said a need of your own, and the times you received without feeling guilty. Congratulate yourself for the hardest one. Spot the next, a notch above, that you\u2019d like to dare. You\u2019re building, step by step, a version of you that loves without forgetting itself.' },
          ],
          '2': [
            { label: 'Exercise 1, the breathing that calms the urgency.', body: 'Twice a day when calm, breathe in for 4 seconds through your nose, out for 6 to 8 seconds through your mouth. The longer out-breath switches on your parasympathetic nervous system, the one that calms the alarm. You train your body to settle, so you can use it when the urge to rescue rises.' },
            { label: 'Exercise 2, the ninety seconds before helping.', body: 'This is your central exercise. The moment someone is struggling and you feel the urge to take charge rise, don\u2019t do it right away. Stay. One hand on your belly, your long breathing, and let a minute and a half pass before acting. That\u2019s how long the urgency takes to subside when you don\u2019t feed it. On the other side of those ninety seconds, you can choose, instead of leaping on reflex.' },
            { label: 'Exercise 3, ask before rescuing.', body: 'Your reflex is to help without being asked. Instead, train yourself to ask one question before acting. Do you want me to help, or do you just need to be heard? Write three phrases like that in your notebook. This question changes everything, it gives the place back to the other person, and it saves you from carrying what nobody asked you to carry.' },
            { label: 'Exercise 4, the receiving journal.', body: 'Each evening, note one thing. Today, did I let someone do something for me, help me, give to me, without refusing it or playing it down? Also note the times you leapt without being asked. Don\u2019t judge, count as data. Learning to receive is, for you, harder than giving, and that\u2019s exactly where your Anchor rises. Each time you let someone take care of you, you prove to your system that you can be loved without being of service.' },
          ],
          '3': [
            { label: 'Exercise 1, the slow-motion replay (every evening, 10 minutes).', body: 'Each evening, pick a moment when you know, now, that you forgot yourself to rescue the other person. Replay the scene in slow motion and look for the very first physical sign, before you even leapt. For many Saviors, it\u2019s a tension in the shoulders, an impossibility of staying seated, a tightening when the other person suffers, an urgency to do something. Find where, in your body, it fires, and at what exact moment. Note it.' },
            { label: 'Exercise 2, the map of your signal (end of the week).', body: 'After seven days, reread your logs. Your body often sends you the same signal, in the same place, before each rescue. Draw it on a page, a figure with the zone circled. That\u2019s your alarm bell. Now you know what to watch for.' },
            { label: 'Exercise 3, the presence scan (twice a day, 3 minutes).', body: 'To feel your signal while it\u2019s rising, your body has to learn to listen to itself at rest. Twice a day, sit down, close your eyes, move your attention from your feet to your head, thirty seconds per zone, without changing anything. This training builds your capacity to inhabit your body live, so that one day you feel the urge to rescue rise in time, and not only once exhausted.' },
          ],
          '4': [
            { label: 'Exercise 1, the rescue journal (every evening, 5 minutes).', body: 'Three columns. First, a moment you took charge, helped, advised, fixed, or anticipated a need today. Second, were you asked, or did you leap on your own. Third, what you felt in your body just before helping. Write fast, without judging yourself. After seven evenings, reread it. A pattern appears, you often give without being asked, and often to calm something in yourself.' },
            { label: 'Exercise 2, the question that changes the angle (at every urge to help).', body: 'When you rush to help, you usually tell yourself they need me. This week, add a second question, without replacing the first. Did they ask me for help, or am I leaping to feel useful and sure of my place? Most of the time you\u2019ll see nobody asked for anything. Note those times, they\u2019re treasures.' },
            { label: 'Exercise 3, the exhaustion log (once during the week).', body: 'Think back to your three last close relationships. For each, write what you gave, and what you received in return. Put the three side by side. Is the imbalance obvious? If so, you\u2019re holding the most precious piece of information in this report. That imbalance isn\u2019t only other people\u2019s ingratitude, it\u2019s also that you never left room to receive.' },
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
            { title: 'Hold Me Tight', author: 'Sue Johnson', blurb: 'To deepen a bond where you are loved for who you are, not for what you do.' },
            { title: 'The Seven Principles for Making Marriage Work', author: 'John Gottman', blurb: 'To build, with a partner, a lasting relationship on the balance of giving and receiving you have earned.' },
            { title: 'Nonviolent Communication', author: 'Marshall Rosenberg', blurb: 'To keep, over time, a way of voicing your own needs so they stay visible.' },
          ],
          '1': [
            { title: 'Nonviolent Communication', author: 'Marshall Rosenberg', blurb: 'To say your own needs out loud instead of only sensing everyone else\u2019s.' },
            { title: 'Boundaries', author: 'Henry Cloud & John Townsend', blurb: 'To turn growing awareness into limits you can actually hold.' },
            { title: 'The Body Keeps the Score', author: 'Bessel van der Kolk', blurb: 'To support, through understanding the body, the receiving you are starting to allow.' },
          ],
          '2': [
            { title: 'The Body Keeps the Score', author: 'Bessel van der Kolk', blurb: 'To understand in depth why your mechanism lives in your body, not your head. The book that explains your level.' },
            { title: 'Codependent No More', author: 'Melody Beattie', blurb: 'To learn to stop rescuing on reflex and to let yourself receive. The core book for your level.' },
            { title: 'Boundaries', author: 'Henry Cloud & John Townsend', blurb: 'To build the limits that let you help without losing yourself.' },
          ],
          '3': [
            { title: 'The Body Keeps the Score', author: 'Bessel van der Kolk', blurb: 'To understand why the urge to rescue fires in your body before your mind decides, and how to catch it earlier.' },
            { title: 'Codependent No More', author: 'Melody Beattie', blurb: 'To work, step by step, on the habit of carrying what no one asked you to carry.' },
            { title: 'Boundaries', author: 'Henry Cloud & John Townsend', blurb: 'To start drawing the line between caring for someone and disappearing into them.' },
          ],
          '4': [
            { title: 'Codependent No More', author: 'Melody Beattie', blurb: 'To recognize the over-giving, caretaking pattern, name it, and stop calling it simply love. The classic on this exact mechanism.' },
            { title: 'Attached', author: 'Amir Levine & Rachel Heller', blurb: 'To understand the attachment fear underneath the constant helping.' },
            { title: 'Boundaries', author: 'Henry Cloud & John Townsend', blurb: 'To see, gently, that having limits is not selfish, and where yours went missing.' },
          ],
        },
        default: [
          { title: 'The Body Keeps the Score', author: 'Bessel van der Kolk', blurb: 'To understand in depth why your mechanism lives in your body, not your head.' },
          { title: 'Codependent No More', author: 'Melody Beattie', blurb: 'To learn to stop rescuing on reflex and to let yourself receive.' },
          { title: 'Boundaries', author: 'Henry Cloud & John Townsend', blurb: 'To build the limits that let you help without losing yourself.' },
        ],
      },
    },

    {
      id: 'devenir', zone: 'paid', type: 'prose',
      title: '5. What you become when you rise',
      paras: [
        'A Savior who rises doesn\u2019t lose their generosity. You keep your rare capacity to support, your loyalty, your sensitivity to distress, your love that knows how to make itself concrete. But you no longer use them to buy your place. You can help without forgetting yourself, support without carrying, stay present without becoming indispensable at any cost. And above all, you learn to receive, to let someone take care of you without panicking.',
        'Be patient, the path is neither fast nor steady. You\u2019ll rush to rescue again, especially when someone truly matters. That won\u2019t be a failure, just the sign that you\u2019re learning. And what will lift you isn\u2019t understanding more, it\u2019s living, over time, the experience that you can be loved for yourself, even when you do nothing. That happens with others, and it can be practiced. This week\u2019s protocol is where you start.',
      ],
    },

    {
      id: 'etApres', zone: 'paid', type: 'prose',
      title: '6. And after this',
      paras: [
        'This report is a snapshot of you today. Your Anchor isn\u2019t fixed, it moves as you integrate your mechanism. The more you learn to feel the urge to rescue and to ask before acting, the less it decides in your place, and the more you let the right people love you for who you are, not for what you do.',
        'Each level has its own way of working. What you do at level {{ancre_position}} won\u2019t be what you do at the level above. So come back, in a few weeks, take this test again. It\u2019ll become your progress mirror. If your Anchor rises, you\u2019ll know you\u2019re receiving where you\u2019d once only have known how to give. And if it lowers after a hard stretch, that\u2019s useful information, not a setback. Either way, you have a compass.',
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
