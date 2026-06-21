/* ============================================================================
   LovePattern  .  CONTENT BLOCKS  .  fugitif   (EN delivery)
   ----------------------------------------------------------------------------
   English content, ported 1:1 from uploads/8lovepatterns_EN_zoned/fugitif_EN_zoned.md
   (no re-translation, only re-filing into the assembler's block schema).
   Variable names stay French verbatim. Only their VALUES are English.
   The accroche hooks carried Hook:/Protocol:/Books: labels in the source; only the
   Hook text is used here, the real protocols/books live in their dedicated slots.
   Callouts for this pattern: repetition=forte, statut=rupture, ancre_bascule deeper
   (no securite=vigilance for the Runaway). Payment boundary: free vs paid.
   SERVER-ONLY. House rule: never the long dash.
   ============================================================================ */

export const content = {
  profil: 'fugitif',
  code: 'fug',
  nom: 'The Runaway',
  accent: '#CE9A2E',

  blocks: [

    /* ===================== FREE ZONES ================================== */

    {
      id: 'accroche', zone: 'free', type: 'prose',
      title: {
        byPalier: { '2': 'You\u2019re The Runaway. And you already know it.' },
        default: 'You\u2019re The Runaway.',
      },
      paras: [
        'You watch yourself do it. The moment you start pulling back, replying later, looking for air, part of you notices. You know the person in front of you doesn\u2019t deserve this withdrawal, and you pull back anyway. If you\u2019re here, it isn\u2019t to be taught that you flee, you know that already. You\u2019re here because understanding it changed nothing, and that powerless lucidity wears you out.',
        'Here\u2019s the most important thing in this report, because you\u2019ve waited long enough. What you\u2019re missing isn\u2019t willpower. When someone gets closer, your body looks for the exit before your head has decided anything. Nobody has shown you how to stay when that wave rises.',
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
        'This reflex of fleeing closeness, you didn\u2019t choose it as an adult. It formed very early. According to Bowlby\u2019s attachment theory, a child builds an internal model with their parent of how relationships work, which then guides their whole love life.',
        'In your case, that model learned that closeness was dangerous for you. Maybe an intrusive parent, who left no space, who got into everything, who lived through you. Maybe an atmosphere where your own needs had no place, where you learned very early to manage on your own rather than count on anyone. Maybe a closeness that one day turned into a trap, into control, into disappointment. Whatever the scene was, your conclusion as a child was logical. If I let someone in too close, I risk losing myself, or being disappointed. Better to keep an exit.',
        'It wasn\u2019t coldness. It was smart protection for a child who had no space of their own. The problem is that this protection is still running today, and it has you fleeing people who mean you no harm.',
      ],
    },

    {
      id: 'visuel2', zone: 'free', type: 'visual',
      title: 'The loop you keep replaying',
      visual: {
        kind: 'loop', n: 2,
        caption: 'The loop that feeds itself.',
        steps: [
          'The other person gets closer, asks for more.',
          'Closeness becomes pressure, your alarm goes off.',
          'You pull back, you take distance to breathe.',
          'The other person feels abandoned and insists, asks for proof.',
        ],
      },
    },
    {
      id: 'boucleProse', zone: 'free', type: 'prose',
      paras: [
        'At the start, the bond is good, because the distance is still natural. Then the other person gets closer, and what was closeness starts to feel like pressure. Part of you goes on alert, as if your vital space were being touched. So you pull back. You reply later, you bury yourself in work, you find reasons to doubt.',
        'The other person senses this withdrawal and, instead of giving you air, gets closer still, asks for proof, wants to understand. And the more they ask, the more you suffocate, the more you pull back. The loop gets worse. In the end, the bond becomes unstable, the other person wears out, and you draw a conclusion that seems obvious, love always ends up costing me my freedom. Except that conclusion was built by your own strategy. You didn\u2019t prove that love suffocates. You just replayed your old fear.',
      ],
      callouts: [
        { if: { repetition: 'forte' }, tone: 'note',
          text: 'You told us your relationships look alike. This is why. It isn\u2019t that you keep meeting clingy people. It\u2019s that your pulling back turns normal people into worried ones, who then start chasing you.' },
      ],
    },

    {
      id: 'pourquoiComprendre', zone: 'free', type: 'prose',
      title: 'Why understanding it has never been enough',
      paras: [
        'You\u2019ve surely understood already that you flee. And it changed nothing, because your mechanism doesn\u2019t live in your head. It was written into your body before words, in the part of you that reacts, the part that makes you want to leave before you\u2019ve decided anything at all. The psychiatrist Bessel van der Kolk showed it, the body keeps the score of what the mind has forgotten, and that\u2019s why you don\u2019t unlearn fleeing through reasoning.',
        'The next time you feel this need to take distance rise, when nothing serious is happening, know that a surge has fired through your body, a sense of suffocation, an urgency to leave. It has a length, around ninety seconds, if you don\u2019t feed it. The trouble is that you feed it by looking for reasons to flee. So next time, don\u2019t leave right away. Stay, one hand on your belly, breathe, and let the wave pass for a minute and a half. You\u2019ll discover something, the urge to flee comes back down on its own, and on the other side there\u2019s often someone you didn\u2019t want to lose. This tool is yours.',
      ],
    },

    {
      id: 'gensBien', zone: 'free', type: 'prose',
      title: 'Why you flee even good people',
      paras: [
        'Here\u2019s the most unsettling part, and the most useful to understand. You\u2019re not drawn to the right people at the right time. Often, when someone is truly available, present, stable, you feel a slight boredom, or even an unease, as if that person were clinging to you. And when someone is a little elusive, busy, half distant, that\u2019s when you feel strangely at ease, because that person leaves you all the space your body thinks it needs.',
        'The trap is that the other person\u2019s availability isn\u2019t the problem. It\u2019s that it wakes your fear of being absorbed. A present person asks you to open up, and opening up, for you, feels like a danger. So your body confuses healthy closeness with threat, and it pushes you toward bonds where you never risk losing yourself, because they never really ask you to arrive. Until you see this, you\u2019ll keep fleeing the calm while believing you\u2019re fleeing the suffocation.',
      ],
    },

    {
      id: 'visuel3', zone: 'free', type: 'visual',
      title: 'How far it spills into the rest of your life',
      visual: {
        kind: 'spilloverTable', n: 3,
        leftHead: 'Where it shows', rightHead: 'What it produces',
        rows: [
          ['In love, you keep an exit', 'you\u2019re never really there'],
          ['In friendship, you disappear for weeks', 'people no longer dare count on you'],
          ['At work, you flee what commits you too much', 'you change often'],
          ['With yourself, you cut yourself off from your need for connection', 'you feel alone even surrounded'],
        ],
      },
    },
    {
      id: 'debordementProse', zone: 'free', type: 'prose',
      paras: [
        'You don\u2019t only flee in love. You keep a distance from almost anything that could hold you. And somewhere, this freedom you protect so well sometimes starts to look like loneliness.',
      ],
      callouts: [
        { if: { statut: 'rupture' }, tone: 'note',
          text: 'And since the breakup, you may have felt relief first, then, later, a longing you didn\u2019t see coming, once the pressure had lifted.' },
      ],
    },

    {
      id: 'aQuelPoint', zone: 'free', type: 'prose',
      title: 'How tightly it holds you today',
      lead: 'You\u2019re at level {{ancre_position}}: \u201c{{ancre_position_libelle}}\u201d.',
      paras: {
        byPalier: {
          '0': [
            'You\u2019re The Runaway, and you\u2019ve learned to stay without losing yourself. You feel the urge to flee coming, and most of the time you choose presence. This report won\u2019t teach you to see yourself, but to hold that new freedom and to spot what could make you slip.',
          ],
          '1': [
            'You\u2019re The Runaway, and you watch yourself pull back live. More and more, you manage to stay instead of leaving. It isn\u2019t systematic yet. What\u2019s left is to turn each urge to flee into a choice to stay, and to learn to ask for your space instead of taking it by disappearing.',
          ],
          '2': [
            'You watch yourself do it. The moment you start pulling back, you know it. You know the person in front of you doesn\u2019t deserve this withdrawal, and you pull back anyway. That lucidity that prevents nothing is a real pain, the pain of someone who\u2019d like to stay and whose body is already looking for the exit.',
            'You now know what\u2019s happening to you, where it comes from, and why understanding it hasn\u2019t switched it off. You have a first tool that works in the body. What comes next is your plan, built on your exact position.',
          ],
          '3': [
            'You\u2019re The Runaway, and you\u2019re starting to see it. You recognize your flights, but on a delay, once the bond is already damaged. It\u2019s the next day that you realize you pulled back again for no reason. You have the lucidity, what you\u2019re missing is the right moment.',
          ],
          '4': [
            'You\u2019re The Runaway. If you\u2019re here, your relationships probably look alike and often end the same way. From where you stand, you feel people are too demanding, too intrusive, too dependent. You\u2019re sometimes right. But I want to offer you another angle, gently. What if part of what keeps repeating came, too, from a very old habit of pulling back the moment someone gets close, without your seeing it?',
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
        'Your Runaway doesn\u2019t move alone. Right behind it sits {{pattern_secondaire}} ({{pattern_secondaire_score}}).',
        {
          bySecondaire: {
            bastion: 'You don\u2019t only take distance, you also close yourself off from the inside. When the other person gets closer, you not only pull back, you lock down what you feel. The other person ends up facing a closed door and a wall. In your plan, we work first on staying physically present, before even opening up.',
          },
          default: 'Whatever it is, it deepens the same flight, your way of putting distance when the bond tightens. Your plan starts by learning to stay, before working on this second mechanism.',
        },
      ],
    },

    {
      id: 'compatibilite', zone: 'paid', type: 'prose',
      title: '2. Who it can actually work with',
      paras: [
        'No mechanism is made for another, and none is doomed with another. You can build something solid with any profile. What decides isn\u2019t the other person\u2019s label, it\u2019s each person\u2019s Anchor level.',
        'Two people aware of their mechanisms, even opposite ones, love each other without destroying each other. Two compatible but unaware profiles hurt each other. So don\u2019t look at the other person\u2019s mechanism, look at whether they can see it, talk about it, and repair after a fight.',
        'That said, your mechanism resonates differently depending on the profile across from you.',
      ],
    },
    {
      id: 'visuel5', zone: 'paid', type: 'visual',
      visual: {
        kind: 'compatColumns', n: 5,
        columns: [
          { label: 'The ones who soothe you', tone: 'apaise',
            blurb: 'An integrated Bastion, someone with a high Anchor, a calmed Alchemist. What they share, they have their own world, they don\u2019t demand constant presence, they don\u2019t read your need for air as a rejection. Near them, you don\u2019t have to flee, because nobody is trying to absorb you.',
            items: [{ code: 'bas', name: 'Integrated Bastion' }, { code: 'anc', name: 'High Anchor' }, { code: 'alc', name: 'Calmed Alchemist' }] },
          { label: 'The ones who understand you', tone: 'comprend',
            blurb: 'A Bastion or an Alchemist on the way, an integrated Chameleon. They know from the inside the need to protect themselves, the fear of losing yourself in the other person. They understand you, and after that everything depends on each person\u2019s Anchor.',
            items: [{ code: 'bas', name: 'Bastion on the way' }, { code: 'alc', name: 'Alchemist on the way' }, { code: 'cam', name: 'Integrated Chameleon' }] },
          { label: 'The ones who make you flee', tone: 'declenche',
            blurb: 'A very active Arsonist, an insistent Savior, a merging Mirror. They want closeness, proof, fusion, and that\u2019s exactly what trips your alarm. The more they get closer, the more you disappear. They aren\u2019t bad people, they\u2019re the riskiest dynamic for you as long as your Anchor is low.',
            items: [{ code: 'inc', name: 'Active Arsonist' }, { code: 'sau', name: 'Insistent Savior' }, { code: 'mir', name: 'Merging Mirror' }] },
        ],
      },
    },
    {
      id: 'compatProse2', zone: 'paid', type: 'prose',
      paras: [
        'And there\u2019s a scientific reason for your pull toward what gives you space. Hazan and Shaver showed, back in 1987, that adult love replays the attachment system of childhood. Your body recognizes the bond where you keep your distance as familiar, and calls it freedom. That\u2019s why a fully present person can suffocate you, when they may be exactly the one with whom you could stop fleeing.',
      ],
    },

    {
      id: 'protocole', zone: 'paid', type: 'prose',
      title: '3. Your way back up',
      paras: {
        byPalier: {
          '0': [
            'You don\u2019t need an intensive program, you\u2019ve already done the work. You need enough to maintain your presence and to spot the moments when life could make you flee again.',
          ],
          '1': [
            'You see yourself pull back, and you sometimes stay. What\u2019s left to do is finer, to turn every urge to flee into a choice, and to say your need for space instead of taking it by disappearing. This week, we move from silent withdrawal to words. Get your notebook.',
          ],
          '2': [
            'You watch yourself do it, and you flee anyway. The lock is that between the sense of suffocation and your pulling back, there\u2019s no space, the body leaves before you do. Your job is to stay just long enough for the wave to pass. Here\u2019s your program for two weeks. Get a notebook.',
          ],
          '3': [
            'You already see that you flee, that\u2019s your strength. Your problem is the lag, you understand it the next day. This week, we train your lucidity to arrive earlier. It\u2019s a body-memory job.',
          ],
          '4': [
            'Before you change anything, you need one thing, to see yourself pull back. You don\u2019t correct a flight you can\u2019t see yet. This week, we change nothing in your behavior, we just turn on the light. Get a notebook and keep it by your bed.',
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
            { label: 'Exercise 1, the map of your fragile zones.', body: 'List the situations that can still wake your old flight reflex, a relationship moving too fast, a request for commitment, deep fatigue, a very demanding partner. Knowing them is already protection.' },
            { label: 'Exercise 2, the monthly check-in.', body: 'Once a month, reread your month. Was there a moment when you fled like before? Without judging yourself, note what triggered it. You\u2019re refining your map.' },
            { label: 'Exercise 3, nourishing healthy autonomy.', body: 'At your level, the work is no longer to stop yourself fleeing, but to maintain a balance, to keep your own space while staying present. Protect your moments of chosen solitude, so you no longer have to steal them through flight.' },
          ],
          '1': [
            { label: 'Exercise 1, naming the need in real time (every day).', body: 'Staying, you already know how to do a little. Now go further, say what you need. The structure, drawn from nonviolent communication, is simple. When you do this, I feel that, and I need this. For example, when we spend several evenings in a row together, I feel cramped, and I need an evening to myself to come back available. Write three phrases a day, on real situations. Writing trains the mouth.' },
            { label: 'Exercise 2, the low-stakes presence experiment (two or three times).', body: 'Your system still believes that staying close makes you lose your freedom. Prove the opposite, gently. Pick low-stakes situations, and stay a little longer than your reflex would want, ten more minutes, one more message, one more question. Watch what happens. Most of the time, you lose nothing, and the bond gets stronger. Note each time what you feared and what actually happened.' },
            { label: 'Exercise 3, the presence review (end of the week).', body: 'Reread your week. Count the times you expressed a need for space instead of disappearing, and the times you stayed present. Congratulate yourself for the hardest one. Spot the next, a notch above, that you\u2019d like to dare. You\u2019re building, step by step, a version of you that stays without suffocating.' },
          ],
          '2': [
            { label: 'Exercise 1, the breathing that keeps you in place.', body: 'Twice a day when calm, breathe in for 4 seconds through your nose, out for 6 to 8 seconds through your mouth. The longer out-breath switches on your parasympathetic nervous system, the one that calms the alarm. Train your body to settle, so you can use it when the urge to flee rises.' },
            { label: 'Exercise 2, staying ninety seconds.', body: 'This is your central exercise, the opposite of your reflex. The moment you feel the urge to pull back, to reply later, to make yourself absent, rise, don\u2019t do it right away. Stay. One hand on your belly, your long breathing, and let a minute and a half pass before deciding anything. That\u2019s how long an emotion takes to settle when you don\u2019t feed it. On the other side of those ninety seconds, the urge to flee has often vanished, and what\u2019s left is a person you feel good with.' },
            { label: 'Exercise 3, say the need for space instead of disappearing.', body: 'Your reflex is to leave without explaining, which worries the other person and pushes them to chase you. Instead, train yourself to name your need. Write in your notebook three phrases like I need an evening alone, and I\u2019ll get back to you tomorrow. Saying your need for air instead of taking it in silence changes everything, the other person stops chasing you, and you get your space without breaking the bond.' },
            { label: 'Exercise 4, the journal of presence gained.', body: 'Each evening, note the times you stayed instead of fleeing, even imperfectly, and the times you left. Don\u2019t judge the flights, count them as data. For each time you stayed, note what happened next, and what you feared that didn\u2019t happen. You\u2019ll watch the presence column grow. That\u2019s your Anchor rising.' },
          ],
          '3': [
            { label: 'Exercise 1, the slow-motion replay (every evening, 10 minutes).', body: 'Each evening, pick a moment you know, now, that you pulled back. Replay the scene in slow motion and look for the very first physical sign, before you even checked out. For many Runaways, it\u2019s a feeling of suffocation in the chest, a tight throat, a tension in the legs like an urge to leave, a sudden irritation. Find where, in your body, it fires, and at what exact moment of the scene. Note it.' },
            { label: 'Exercise 2, the map of your signal (end of the week).', body: 'After seven days, reread your logs. Your body often sends you the same signal, in the same place, before each flight. Draw it on a page, a figure with the zone circled. That\u2019s your alarm bell. Now you know what to watch for.' },
            { label: 'Exercise 3, the presence scan (twice a day, 3 minutes).', body: 'To feel your signal while it\u2019s rising, your body has to learn to listen to itself at rest. Twice a day, sit down, close your eyes, move your attention from your feet to your head, thirty seconds per zone, without changing anything. This somatic training builds your capacity to inhabit your body live, so that one day you feel the urge to flee rise in time, and not only after you\u2019ve left.' },
          ],
          '4': [
            { label: 'Exercise 1, the withdrawal journal (every evening, 5 minutes).', body: 'Three columns. First, a moment in the day when you took distance from someone, replied late on purpose, cancelled, cut it short, found a reason not to see the person. Second, what had just happened, what the other person had said or asked. Third, what you felt in your body at that moment. Write fast, without judging yourself. After seven evenings, reread it. A pattern will appear, you often pull back at the same kind of moment, when someone gets closer.' },
            { label: 'Exercise 2, the question that changes the angle (at every relational irritation).', body: 'When someone seems too demanding to you, you usually tell yourself they\u2019re too clingy. This week, add a second question, without replacing the first. Is this person really asking too much, or is mere closeness enough to make me want to flee? Most of the time you won\u2019t be able to decide, and that\u2019s normal. But sometimes you\u2019ll see the person was normal, and it was your alarm that went off. Note those times, they\u2019re treasures.' },
            { label: 'Exercise 3, the endings log (once during the week).', body: 'Think back to your three last relationships. For each, write in one sentence the moment you started checking out, and what was happening in the relationship then. Put the three side by side. Do you often check out at the same stage, when it gets serious, when the other person wants more? If so, you\u2019re holding the most precious piece of information in this report. The common thread of your relationships isn\u2019t other people, it\u2019s the moment you yourself leave.' },
          ],
        },
        default: [{ label: 'Your exercises', body: 'Your detailed protocol for this Anchor position comes with your plan. Get a notebook and take one exercise at a time.' }],
      },
      callouts: [
        { ifFlag: 'basculeDeeper', tone: 'note',
          text: 'There are moments when you drop lower, down to level {{ancre_bascule}}, when your sore spot gets touched. While you\u2019re learning, spot these moments and be gentle with yourself, they\u2019re the places where your work matters most.' },
      ],
    },

    {
      id: 'lectures', zone: 'paid', type: 'bookcards',
      title: '4. The reading chosen for your level',
      lead: 'You\u2019re at level {{ancre_position}}. Here are the books that speak to this exact spot.',
      books: {
        byPalier: {
          '0': [
            { title: 'Hold Me Tight', author: 'Sue Johnson', blurb: 'To deepen a close, safe bond, now that you can stay without fleeing.' },
            { title: 'The Seven Principles for Making Marriage Work', author: 'John Gottman', blurb: 'To build, together, a lasting relationship on the presence/space balance you\u2019ve earned.' },
            { title: 'Nonviolent Communication', author: 'Marshall Rosenberg', blurb: 'To keep, over time, a way of speaking that connects rather than pushes away.' },
          ],
          '1': [
            { title: 'Nonviolent Communication', author: 'Marshall Rosenberg', blurb: 'To say your need for space in a way that brings people closer instead of pushing them away.' },
            { title: 'Being Genuine: Stop Being Nice, Start Being Real', author: 'Thomas d\u2019Ansembourg', blurb: 'To dare presence and truth instead of silent withdrawal.' },
            { title: 'The Body Keeps the Score', author: 'Bessel van der Kolk', blurb: 'To support, through an understanding of the body, the staying you\u2019re starting to dare.' },
          ],
          '2': [
            { title: 'The Body Keeps the Score', author: 'Bessel van der Kolk', blurb: 'To understand why your urge to flee starts in the body before the mind, and how to calm it. The book that explains your level.' },
            { title: 'Attached', author: 'Amir Levine and Rachel Heller', blurb: 'To recognize your avoidant pattern, name it, and reread your relationships without judging yourself.' },
            { title: 'Nonviolent Communication', author: 'Marshall Rosenberg', blurb: 'To learn to say your need for space clearly, instead of taking it by disappearing.' },
          ],
          '3': [
            { title: 'The Body Keeps the Score', author: 'Bessel van der Kolk', blurb: 'To understand why your body looks for the exit before your mind, and how to spot the signal earlier.' },
            { title: 'Attached', author: 'Amir Levine and Rachel Heller', blurb: 'To reread your past relationships in the light of avoidance.' },
            { title: 'Nonviolent Communication', author: 'Marshall Rosenberg', blurb: 'To start turning what you notice into words, instead of taking it in silence.' },
          ],
          '4': [
            { title: 'Attached', author: 'Amir Levine and Rachel Heller', blurb: 'To discover the avoidant pattern, put a name on your need for distance, without judging yourself.' },
            { title: 'Insecure in Love', author: 'Leslie Becker-Phelps', blurb: 'To understand how the fear of closeness keeps replaying, written with great gentleness.' },
            { title: 'The Power of Attachment', author: 'Diane Poole Heller', blurb: 'To put simple words on what\u2019s happening inside you, with no jargon.' },
          ],
        },
        default: [
          { title: 'The Body Keeps the Score', author: 'Bessel van der Kolk', blurb: 'To understand why your urge to flee starts in the body before the mind, and how to calm it.' },
          { title: 'Attached', author: 'Amir Levine and Rachel Heller', blurb: 'To recognize your avoidant pattern, name it, and reread your relationships without judging yourself.' },
          { title: 'Nonviolent Communication', author: 'Marshall Rosenberg', blurb: 'To learn to say your need for space clearly, instead of taking it by disappearing.' },
        ],
      },
    },

    {
      id: 'devenir', zone: 'paid', type: 'prose',
      title: '5. What you become when you rise',
      paras: [
        'A Runaway who rises doesn\u2019t lose their freedom, quite the opposite. You keep your autonomy, your healthy need to breathe, your rare ability not to dissolve into the other person. But you no longer get that freedom by disappearing. You learn to stay present while keeping your space, to say I miss you without feeling trapped.',
        'Be patient, the path is neither fast nor steady. You\u2019ll flee again, especially when someone truly matters. That won\u2019t be a failure, just the sign that you\u2019re learning. And what will lift you isn\u2019t understanding more, it\u2019s living, over time, the experience that someone can be close to you without locking you in. That happens with others, and it can be practiced.',
      ],
    },

    {
      id: 'etApres', zone: 'paid', type: 'prose',
      title: '6. And after this',
      paras: [
        'This report is a snapshot of you today. Your Anchor isn\u2019t fixed, it moves as you integrate your mechanism. The more you learn to feel the urge to flee and to stay anyway, the less it decides in your place, and the more you let the right people get close without scaring them off with your withdrawal.',
        'Each level has its own way of working. What you do at level {{ancre_position}} won\u2019t be what you do at the level above. So come back, in a few weeks, take this test again. It\u2019ll become your progress mirror. If your Anchor rises, you\u2019ll know you\u2019re staying where you\u2019d once have left. And if it lowers after a hard stretch, that\u2019s useful information, not a setback. Either way, you have a compass.',
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
