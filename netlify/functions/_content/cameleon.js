/* ============================================================================
   LovePattern  .  CONTENT BLOCKS  .  cameleon   (EN delivery)
   ----------------------------------------------------------------------------
   English content, ported 1:1 from uploads/8lovepatterns_EN_zoned/cameleon_EN_zoned.md
   (no re-translation, only re-filing into the assembler's block schema).
   Variable names stay French verbatim. Only their VALUES are English.
   Axis: contextual (the Chameleon pursues when it fears rejection, withdraws when
   it fears conflict). Payment boundary: zone:'free' vs zone:'paid'. SERVER-ONLY.
   House rule: never the long dash.
   ============================================================================ */

export const content = {
  profil: 'cameleon',
  code: 'cam',
  nom: 'The Chameleon',
  accent: '#46934A',

  blocks: [

    /* ===================== FREE ZONES ================================== */

    {
      id: 'accroche', zone: 'free', type: 'prose',
      title: {
        byPalier: { '2': 'You\u2019re The Chameleon. And you already know it.' },
        default: 'You\u2019re The Chameleon.',
      },
      paras: [
        'You watch yourself do it. The moment you say yes without meaning it, when you mold to what the other person expects, part of you notices. You know you\u2019re hiding again, and you keep going anyway. If you\u2019re here, it isn\u2019t to be taught that you adapt, you know that already. You\u2019re here because understanding it changed nothing, and that powerless lucidity wears you out.',
        'Here\u2019s the most important thing in this report, because you\u2019ve waited long enough. What you\u2019re missing isn\u2019t willpower. The moment you sense an expectation, your adjustment leaves before your head has decided anything. Nobody has shown you how to find your true color again before answering.',
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
        'This reflex of adapting, you didn\u2019t choose it as an adult. According to Bowlby\u2019s attachment theory, a child builds an internal model with their parent of how relationships work, which then guides their whole love life.',
        'In your case, that model learned a precise rule. I\u2019m loved when I match. Maybe as a child, showing your real preferences, your disagreements, your needs, wasn\u2019t welcome, and you understood it was safer to guess what was expected of you. Maybe a parent needed you to be a certain way, and your real self took up too much room or made too many waves. Maybe being different cost you a look, a tenderness, an approval. Whatever the scene was, your conclusion as a child was logical. If I show who I really am, I risk no longer being loved.',
        'It wasn\u2019t fakeness. It was the smart protection of a child for whom being themselves felt dangerous. The problem is that this strategy is still running today, and it has you hiding your true color from people who would love you for exactly that.',
      ],
    },

    {
      id: 'visuel2', zone: 'free', type: 'visual',
      title: 'The loop you keep replaying',
      visual: {
        kind: 'loop', n: 2,
        caption: 'The loop that feeds itself.',
        steps: [
          'You sense an expectation, real or assumed.',
          'You adjust your behavior to stay desirable.',
          'The other person gets used to this adapted version and likes you for it.',
          'You feel loved for an incomplete version, a quiet resentment rises.',
        ],
      },
    },
    {
      id: 'boucleProse', zone: 'free', type: 'prose',
      paras: [
        'At the start, your adapting is appealing. You\u2019re easy to love, in sync, pleasant, and the other person feels wonderful with you. Then the relationship settles around this adjusted version of you. You say yes without checking, you play down your needs to keep the harmony, you avoid the subjects that might reveal a disagreement.',
        'The other person grows attached to this version, without knowing it\u2019s partial. And you start feeling loved for someone who isn\u2019t quite you, which hollows out an emptiness and a quiet resentment. As time passes, you dare less and less to show yourself different, because the gap between the loved version and the real you becomes frightening. The loop gets worse. In the end, when you finally reveal yourself, the other person is surprised, sometimes disappointed, and that surprise confirms what you feared, being yourself makes you lose love. Except that proof was built by your own strategy. You didn\u2019t show that your real self is unlovable, you just hid that real self so long that its arrival felt like a surprise.',
      ],
      callouts: [
        { if: { repetition: 'forte' }, tone: 'note',
          text: 'You told us your relationships look alike, that people end up discovering someone other than who they thought they loved. This is why. It isn\u2019t that you lie. It\u2019s that you show your true color so late that its reveal feels like a betrayal, when it was just you.' },
      ],
    },

    {
      id: 'pourquoiComprendre', zone: 'free', type: 'prose',
      title: 'Why understanding it has never been enough',
      paras: [
        'You\u2019ve surely understood already that you adapt too much, and it changed nothing, because your mechanism doesn\u2019t live in your head. It was written into your body before words, in the part of you that reacts, the part that says yes before you\u2019ve even consulted what you want. The psychiatrist Bessel van der Kolk showed it, the body keeps the score of what the mind has forgotten, and that\u2019s why you don\u2019t unlearn adapting through reasoning.',
        'The next time you feel this reflex to adjust rise, that automatic yes, that disagreement you swallow, that preference you keep quiet, know that a surge has fired through your body, a small alarm saying careful, be what\u2019s needed. It has a length, around ninety seconds, if you don\u2019t feed it. The trouble is that you feed it by adapting right away. So next time, don\u2019t answer right away. Stay, one hand on your belly, breathe, and let the wave pass for a minute and a half. You\u2019ll discover that in the end you find what you really want again, and that saying it, sometimes, makes nobody flee. This tool is yours.',
      ],
    },

    {
      id: 'gensBien', zone: 'free', type: 'prose',
      title: 'Why you hide even with good people',
      paras: [
        'Here\u2019s the most unsettling part. When someone is open, welcoming, and would probably love you exactly as you are, you still keep playing the version that pleases. Not because that person is demanding, but because showing yourself for real feels, to you, like a leap into the void. You never test whether you\u2019d be loved being you, because you never take the risk of being it.',
        'The trap is that even the steadiest people only ever receive your adapted version, so they can never prove they\u2019d love you any other way. You\u2019re left then with that doubt that won\u2019t resolve, am I lovable for real? And the less anyone proves it to you, the more you adapt, for safety. Until you see this, you\u2019ll keep hiding your true color from the very people who could love it.',
      ],
    },

    {
      id: 'visuel3', zone: 'free', type: 'visual',
      title: 'How far it spills into the rest of your life',
      visual: {
        kind: 'spilloverTable', n: 3,
        leftHead: 'Where it shows', rightHead: 'What it produces',
        rows: [
          ['In love, you become what pleases', 'they love a version, not you'],
          ['In friendship, you adapt to each group', 'you feel a bit fake everywhere'],
          ['At work, you say yes to avoid waves', 'you end up overloaded'],
          ['With yourself, you no longer know what you like', 'you lose sight of yourself'],
        ],
      },
    },
    {
      id: 'debordementProse', zone: 'free', type: 'prose',
      paras: [
        'You don\u2019t only adapt in love. You change color a little with almost everyone. People find you easy, pleasant, accommodating, and yet you sometimes feel a stranger to your own life, as if you\u2019d forgotten what your true shade was. This flexibility that was meant to make you loved sometimes starts to feel like an absence of you.',
      ],
      callouts: [
        { if: { statut: 'rupture' }, tone: 'note',
          text: 'And since the breakup, you may be replaying in your mind all the versions of yourself you could have offered, wondering which one would have kept them, with a dull shame at having lost your shape to keep the bond.' },
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
            'You\u2019re The Chameleon, and you\u2019ve learned to adapt without losing yourself. You feel the urge to change color coming, and most of the time you choose to stay yourself. This report won\u2019t teach you to see yourself, but to hold that new presence and to spot what could make you pick up your borrowed colors again.',
          ],
          '1': [
            'You\u2019re The Chameleon, and you watch yourself adapt live. More and more, you manage to show a real preference instead of molding. It isn\u2019t systematic yet. What\u2019s left is to turn each automatic yes into a choice, and to learn to say your real opinion instead of guessing the one that\u2019ll please.',
          ],
          '2': [
            'You watch yourself do it. The moment you say yes without meaning it, when you swallow a disagreement, you know it. You know you\u2019re hiding again, and you keep going anyway. That lucidity that prevents nothing is a real pain, the pain of someone who\u2019d like to show themselves and whose body always picks the safe version.',
            'You now know what\u2019s happening to you, where it comes from, and why understanding it hasn\u2019t switched it off. You have a first tool that works in the body. What comes next is your plan.',
          ],
          '3': [
            'You\u2019re The Chameleon, and you\u2019re starting to see it. You recognize that you adapt, but on a delay, once the resentment has set in or after swallowing too much. It\u2019s later that you realize you said yes again without meaning it. You have the lucidity, what you\u2019re missing is the right moment.',
          ],
          '4': [
            'You\u2019re The Chameleon. If your relationships often end the same way, you probably feel misunderstood, or that people are too demanding, too harsh, that you constantly have to make an effort to be loved. From where you stand, it\u2019s other people who ask too much. You\u2019re sometimes right. But I want to offer you another angle, gently. What if part of what keeps repeating also came from a very old habit of guessing what\u2019s expected of you and molding to it, until you never show yourself for real?',
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
      visual: { n: 4, axe: 'contextual' },
    },

    {
      id: 'deuxiemeMecanisme', zone: 'paid', type: 'prose',
      title: '1. Your second mechanism',
      paras: [
        'Your Chameleon doesn\u2019t move alone. Right behind it sits {{pattern_secondaire}} ({{pattern_secondaire_score}}).',
        {
          bySecondaire: {
            sauveur: 'You don\u2019t only adapt, you also make yourself useful. You become the version that pleases, and on top of that you carry the other person. Double erasure, double forgetting of your needs. In your plan, we work first on finding what you want, before trying to match or to help.',
          },
          default: 'Whatever it is, it deepens the same adapting, your way of becoming what pleases. Your plan starts by finding your own color again, before working on this second mechanism.',
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
            blurb: 'An integrated Bastion, someone with a high Anchor, a calmed Alchemist. What they share, they\u2019re stable, readable, they don\u2019t expect a performance from you, they leave you room to be yourself without having to guess what pleases. Near them, you don\u2019t need to change color, because nobody asks you to match.',
            items: [{ code: 'bas', name: 'Integrated Bastion' }, { code: 'anc', name: 'High Anchor' }, { code: 'alc', name: 'Calmed Alchemist' }] },
          { label: 'The ones who understand you', tone: 'comprend',
            blurb: 'A Mirror on the way, an integrated Savior, an integrated Watcher. They know from the inside the fear of losing your place, the difficulty of staying yourself. After that, everything depends on each person\u2019s Anchor.',
            items: [{ code: 'mir', name: 'Mirror on the way' }, { code: 'sau', name: 'Integrated Savior' }, { code: 'gue', name: 'Integrated Watcher' }] },
          { label: 'The ones who make you vanish', tone: 'declenche',
            blurb: 'A very active Arsonist, a very closed Bastion, a dominant or unpredictable partner. They create exactly what wakes your mechanism, a strong expectation, a frame to guess, a risk of not fitting. The more demanding or unstable it is, the more you adapt. They aren\u2019t bad people, they\u2019re the riskiest dynamic for you as long as your Anchor is low.',
            items: [{ code: 'inc', name: 'Active Arsonist' }, { code: 'bas', name: 'Closed Bastion' }] },
        ],
      },
    },
    {
      id: 'compatProse2', zone: 'paid', type: 'prose',
      paras: [
        'And there\u2019s a scientific reason for your pull toward the ones you have to guess. Hazan and Shaver showed, back in 1987, that adult love replays the attachment system of childhood. Your body recognizes the bond where you have to earn your place by matching as familiar, and calls it love. That\u2019s why a person who accepts you right away can feel flat or suspicious to you, when they may be the one with whom you could finally be yourself.',
      ],
    },

    {
      id: 'protocole', zone: 'paid', type: 'prose',
      title: '3. Your way back up',
      paras: {
        byPalier: {
          '0': [
            'You don\u2019t need an intensive program, you\u2019ve already done the work. You need enough to maintain your presence to yourself and to spot the moments when life could make you pick up your borrowed colors again.',
          ],
          '1': [
            'You see yourself adapt, and you sometimes show your color. What\u2019s left to do is finer, to turn every automatic yes into a choice, and to say your real opinion instead of guessing the one that\u2019ll please. This week, we move from adjusting to true presence. Get your notebook.',
          ],
          '2': [
            'You watch yourself do it, and you adapt anyway. The lock is that between the expectation you sense and your adjustment, there\u2019s no space, the yes leaves before you do. Your job is to find your true yes before answering, and to show a real color, even a small one. Here\u2019s your program for two weeks. Get a notebook.',
          ],
          '3': [
            'You already see that you adapt, that\u2019s your strength. Your problem is the lag, you understand it later, once you\u2019ve swallowed too much. This week, we train your lucidity to arrive earlier. It\u2019s a body-memory job.',
          ],
          '4': [
            'Before you change anything, you need one thing, to see yourself adapt. You don\u2019t find a color again you haven\u2019t yet seen yourself change. This week, we change nothing, we just turn on the light. Get a notebook and keep it by your bed.',
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
            { label: 'Exercise 1, the map of your fragile zones.', body: 'List the situations that can still wake your old reflex, a dominant or unpredictable partner, a criticism, deep fatigue, an environment where you have to guess what pleases. Knowing them is already protection.' },
            { label: 'Exercise 2, the monthly check-in.', body: 'Once a month, reread your month. Was there a moment when you molded yourself like before? Without judging yourself, note what triggered it. You\u2019re refining your map.' },
            { label: 'Exercise 3, maintaining your true color.', body: 'At your level, the work is no longer to stop yourself adapting, but to maintain a balance, to stay flexible without losing yourself. Keep the habit of regularly checking your true yes, your real wants, so your color never fades without your deciding it.' },
          ],
          '1': [
            { label: 'Exercise 1, saying your preference in real time (every day).', body: 'Showing your color, you already do that a little. Now go further, express a real opinion, even a different one. The structure, drawn from nonviolent communication, is simple. I feel this, I prefer this, I need this. For example, I know you love that place, and I\u2019d rather do something else tonight. Write three phrases a day, on real situations. Writing trains the mouth.' },
            { label: 'Exercise 2, the low-stakes disagreement experiment (two or three times).', body: 'Your system still believes a disagreement will make you lose love. Prove the opposite, gently. Pick low-stakes situations, and express a light disagreement, a different preference, a calm no. Watch what happens. Most of the time, the bond holds, and it even becomes truer. Note each time what you feared and what actually happened.' },
            { label: 'Exercise 3, the presence review (end of the week).', body: 'Reread your week. Count the times you said a real opinion, and the times you held a different preference. Congratulate yourself for the hardest one. Spot the next, a notch above, that you\u2019d like to dare. You\u2019re building, step by step, a version of you that adapts by choice, not by fear.' },
          ],
          '2': [
            { label: 'Exercise 1, the breathing that gives you back to yourself.', body: 'Twice a day when calm, breathe in for 4 seconds through your nose, out for 6 to 8 seconds through your mouth. The longer out-breath switches on your parasympathetic nervous system, the one that calms the alarm. You train your body to settle, so you can use it when the urge to adapt rises.' },
            { label: 'Exercise 2, the ninety seconds for your true yes.', body: 'This is your central exercise. The moment an answer is expected of you and you feel the automatic yes rise, don\u2019t answer right away. Just say let me think for a second. One hand on your belly, your long breathing, and for a minute and a half, ask yourself one question, what do I want, here? That\u2019s how long it takes for your true answer, under the reflex, to surface. On the other side of those ninety seconds, you can answer from yourself, not from the other person\u2019s expectation.' },
            { label: 'Exercise 3, show a real color, small.', body: 'Your reflex is to hide your preference. Instead, train yourself to show one true color a day, tiny, safe. Saying I\u2019d rather have this, or actually I\u2019m not quite in agreement. Write three phrases like that in your notebook. Showing one small true preference, and seeing the bond hold, that\u2019s what reeducates your system.' },
            { label: 'Exercise 4, the true-color journal.', body: 'Each evening, note the times you showed a true color, said a true yes or a true no, and the times you adapted. Don\u2019t judge the adaptings, count them as data. For each true color shown, note what happened next, and what you feared that didn\u2019t happen. You\u2019ll watch the true-color column grow. That\u2019s your Anchor rising.' },
          ],
          '3': [
            { label: 'Exercise 1, the slow-motion replay (every evening, 10 minutes).', body: 'Each evening, pick a moment when you know, now, that you adapted against yourself. Replay the scene in slow motion and look for the very first physical sign, before the yes even came out. For many Chameleons, it\u2019s a slight tightening, a held breath, a tension in the neck, a soft quickening like stage fright. Find where, in your body, it fires, and at what exact moment. Note it.' },
            { label: 'Exercise 2, the map of your signal (end of the week).', body: 'After seven days, reread your logs. Your body often sends you the same signal, in the same place, just before you change color. Draw it on a page, a figure with the zone circled. That\u2019s your alarm bell. Now you know what to watch for.' },
            { label: 'Exercise 3, the presence scan (twice a day, 3 minutes).', body: 'To feel your signal while it\u2019s rising, your body has to learn to listen to itself at rest. Twice a day, sit down, close your eyes, move your attention from your feet to your head, thirty seconds per zone, without changing anything. This training builds your capacity to inhabit your body live, so that one day you feel the adapting rise in time, and not only once the resentment has set in.' },
          ],
          '4': [
            { label: 'Exercise 1, the journal of yeses (every evening, 5 minutes).', body: 'Three columns. First, a moment you said yes today, agreed, approved, followed the other person\u2019s taste. Second, was it your true yes, or a yes to stay in agreement. Third, what you felt in your body just before adjusting. Write fast, without judging yourself. After seven evenings, reread it. A pattern appears, a lot of your yeses weren\u2019t really yours.' },
            { label: 'Exercise 2, the question that changes the angle (at every adjustment).', body: 'When you adapt, you usually tell yourself it\u2019s just to keep things smooth. This week, add a second question, without replacing the first. Do I really agree, or am I becoming what pleases so I don\u2019t risk rejection? Most of the time you\u2019ll see you molded yourself. Note those times, they\u2019re treasures.' },
            { label: 'Exercise 3, the lost-preferences log (once during the week).', body: 'Ask yourself three simple questions and answer fast, without thinking about what would be good. What film do you want to watch, right now, for you? What dish would make you happy tonight? What would you like to do this weekend if nobody were watching? If you struggle to answer, you\u2019re holding the most precious piece of information in this report. By dint of adapting, you\u2019ve lost contact with what you yourself like. It\u2019s no big deal, it can be found again.' },
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
            { title: 'Hold Me Tight', author: 'Sue Johnson', blurb: 'To deepen a bond where you are loved for your true color, not the one you borrow.' },
            { title: 'The Seven Principles for Making Marriage Work', author: 'John Gottman', blurb: 'To build, with a partner, a lasting relationship on the realness you have earned.' },
            { title: 'Nonviolent Communication', author: 'Marshall Rosenberg', blurb: 'To keep, over time, a way of voicing your real preferences so you never fade again.' },
          ],
          '1': [
            { title: 'Nonviolent Communication', author: 'Marshall Rosenberg', blurb: 'To voice your real preference and your honest disagreement in a way that connects.' },
            { title: 'Not Nice', author: 'Dr Aziz Gazipura', blurb: 'To turn growing awareness into the courage to stop performing and start showing up.' },
            { title: 'The Body Keeps the Score', author: 'Bessel van der Kolk', blurb: 'To support, through understanding the body, the realness you are starting to allow.' },
          ],
          '2': [
            { title: 'The Body Keeps the Score', author: 'Bessel van der Kolk', blurb: 'To understand in depth why your mechanism lives in your body, not your head. The book that explains your level.' },
            { title: 'The Disease to Please', author: 'Harriet Braiker', blurb: 'To learn to find your real yes before the automatic one takes over. The core book for your level.' },
            { title: 'The Gifts of Imperfection', author: 'Bren\u00e9 Brown', blurb: 'To dare to let your true color show and discover it is lovable.' },
          ],
          '3': [
            { title: 'The Body Keeps the Score', author: 'Bessel van der Kolk', blurb: 'To understand why the automatic yes fires in your body before your mind decides, and how to catch it earlier.' },
            { title: 'The Disease to Please', author: 'Harriet Braiker', blurb: 'To work, step by step, on the habit of becoming whatever keeps the peace.' },
            { title: 'The Gifts of Imperfection', author: 'Bren\u00e9 Brown', blurb: 'To begin reconnecting with the real preferences you have learned to hide.' },
          ],
          '4': [
            { title: 'The Disease to Please', author: 'Harriet Braiker', blurb: 'To recognize the people-pleasing pattern, name it, and stop calling it simply being easy-going. The classic on this exact mechanism.' },
            { title: 'Attached', author: 'Amir Levine & Rachel Heller', blurb: 'To understand the attachment fear underneath the constant adapting.' },
            { title: 'The Gifts of Imperfection', author: 'Bren\u00e9 Brown', blurb: 'To start sensing that being yourself, imperfect and real, is exactly what makes you lovable.' },
          ],
        },
        default: [
          { title: 'The Body Keeps the Score', author: 'Bessel van der Kolk', blurb: 'To understand in depth why your mechanism lives in your body, not your head.' },
          { title: 'The Disease to Please', author: 'Harriet Braiker', blurb: 'To learn to find your real yes before the automatic one takes over.' },
          { title: 'The Gifts of Imperfection', author: 'Bren\u00e9 Brown', blurb: 'To dare to let your true color show and discover it is lovable.' },
        ],
      },
    },

    {
      id: 'devenir', zone: 'paid', type: 'prose',
      title: '5. What you become when you rise',
      paras: [
        'A Chameleon who rises doesn\u2019t lose their flexibility. You keep your relational intelligence, your subtlety, your talent for putting others at ease, your sensitivity to atmospheres. But you no longer use them to disappear. You can adapt without dissolving, listen without betraying yourself, love without auditioning nonstop to earn your place. You show your true color, and you discover it\u2019s lovable.',
        'Be patient, the path is neither fast nor steady. You\u2019ll adapt again, especially when someone truly matters. That won\u2019t be a failure, just the sign that you\u2019re learning. And what will lift you isn\u2019t understanding more, it\u2019s living, over time, the experience that you can be loved for your true color, not for the one you borrow. That happens with others, and it can be practiced. This week\u2019s protocol is where you start.',
      ],
    },

    {
      id: 'etApres', zone: 'paid', type: 'prose',
      title: '6. And after this',
      paras: [
        'This report is a snapshot of you today. Your Anchor isn\u2019t fixed, it moves as you integrate your mechanism. The more you learn to feel the adapting rise and to show your true color, the less it decides in your place, and the more you let the right people love you for who you really are.',
        'Each level has its own way of working. What you do at level {{ancre_position}} won\u2019t be what you do at the level above. So come back, in a few weeks, take this test again. It\u2019ll become your progress mirror. If your Anchor rises, you\u2019ll know you\u2019re showing yourself where you\u2019d once have adapted. And if it lowers after a hard stretch, that\u2019s useful information, not a setback. Either way, you have a compass.',
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
