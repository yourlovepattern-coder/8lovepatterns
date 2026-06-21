/* ============================================================================
   LovePattern  .  CONTENT BLOCKS  .  alchimiste   (EN delivery)
   ----------------------------------------------------------------------------
   English content, ported 1:1 from uploads/8lovepatterns_EN_zoned/alchimiste_EN_zoned.md
   (no re-translation, only re-filing into the assembler's block schema).
   Variable names stay French verbatim. Only their VALUES are English.
   Axis: contextual (creates distance through analysis, but can pursue mentally).
   Payment boundary: zone:'free' vs zone:'paid'. SERVER-ONLY.
   House rule: never the long dash.
   ============================================================================ */

export const content = {
  profil: 'alchimiste',
  code: 'alc',
  nom: 'The Alchemist',
  accent: '#7C6CBC',

  blocks: [

    /* ===================== FREE ZONES ================================== */

    {
      id: 'accroche', zone: 'free', type: 'prose',
      title: {
        byPalier: { '2': 'You\u2019re The Alchemist. And you already know it.' },
        default: 'You\u2019re The Alchemist.',
      },
      paras: [
        'You watch yourself do it. The moment you start explaining what should be felt, part of you notices. You know the other person wanted your presence, not your analysis, and you keep going anyway. If you\u2019re here, it isn\u2019t to be taught that you intellectualize, you know that already, and you could surely explain it better than I can. You\u2019re here because understanding it changed nothing, and that powerless lucidity wears you out.',
        'Here\u2019s the most important thing in this report, because you\u2019ve waited long enough. What you\u2019re missing isn\u2019t willpower. The moment an emotion rises, your head takes over before you\u2019ve even had time to feel anything. Nobody has shown you how to stay with the feeling without drowning in it.',
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
        'This reflex of intellectualizing everything, you didn\u2019t choose it as an adult. According to Bowlby\u2019s attachment theory, a child builds an internal model with their parent of how relationships work, which then guides their whole love life.',
        'In your case, that model learned that emotion was dangerous. Maybe as a child you lived in a chaotic emotional climate, unpredictable moods, outbursts you could neither foresee nor calm. Maybe you found refuge in your head, because understanding gave you the illusion of a little control in the mess. Maybe nobody ever taught you to welcome what you felt, so you filed it away in concepts. Whatever the scene was, your conclusion as a child was logical. If I understand, I won\u2019t be overwhelmed.',
        'It wasn\u2019t coldness. It was the smart protection of a child who took shelter in thought to keep from drowning in emotion. The problem is that this reflex is still running today, and it holds at a distance people who would just like to be close to you.',
      ],
    },

    {
      id: 'visuel2', zone: 'free', type: 'visual',
      title: 'The loop you keep replaying',
      visual: {
        kind: 'loop', n: 2,
        caption: 'The loop that feeds itself.',
        steps: [
          'You feel something strong.',
          'The force of the emotion threatens your control.',
          'You analyze, you explain, to step back.',
          'The other person feels held at a distance or dissected and intensifies their emotional demand.',
        ],
      },
    },
    {
      id: 'boucleProse', zone: 'free', type: 'prose',
      paras: [
        'At the start, your lucidity fascinates. You understand things others don\u2019t see, you make sense of them, you reassure with your bird\u2019s-eye view. Then comes a moment when an emotion rises, in you or in the other person, and its force threatens your control. So you do what you know how to do, you analyze. You look for the cause, you reframe, you turn the felt thing into a concept.',
        'The other person didn\u2019t want an explanation, they wanted a presence. They feel held at a distance, analyzed like a case study, and they intensify their demand for warmth. And the more they ask for the heart, the more you take refuge in the head, because that intensity threatens your control even more. The loop gets worse. In the end, the relationship loses its warmth, the other person feels alone beside you, and you draw a conclusion that seems logical, emotions complicate everything, better to understand them. Except that conclusion was built by your own strategy. You didn\u2019t prove that emotion is unmanageable, you just replayed your old fear of being overwhelmed.',
      ],
      callouts: [
        { if: { repetition: 'forte' }, tone: 'note',
          text: 'You told us people often call you out for your coldness or your distance. This is why. It isn\u2019t that you feel nothing. It\u2019s that at the precise moment you\u2019d need to feel with the other person, you go into your head, and from up there, you look cold even when you\u2019re flooded.' },
      ],
    },

    {
      id: 'pourquoiComprendre', zone: 'free', type: 'prose',
      title: 'Why understanding it has never been enough',
      paras: [
        'Here\u2019s the cruelest irony of your profile. You who understand everything have surely understood your mechanism perfectly already, and it changed nothing. Because your mechanism doesn\u2019t live in your head, exactly where you spend your life. It was written into your body before words, in the part of you that reacts, the part that sends you into analysis the moment an emotion gets too strong. The psychiatrist Bessel van der Kolk showed it, the body keeps the score of what the mind has forgotten, and that\u2019s why you don\u2019t feel more by understanding better.',
        'The next time an emotion rises and you feel the urge to analyze it, to explain it, to step back, know that a surge has fired through your body, a wave your head wants to put into words right away to master it. It has a length, around ninety seconds, if you don\u2019t flee into the concept. The trouble is that you cut it off by going into analysis. So next time, don\u2019t analyze right away. Stay, one hand on your belly, breathe, and let the emotion be there for a minute and a half, without turning it into an idea. You\u2019ll discover something unexpected for you, the emotion doesn\u2019t overwhelm you, it passes, and on the other side there\u2019s a presence truer than all your explanations. This tool is yours.',
      ],
    },

    {
      id: 'gensBien', zone: 'free', type: 'prose',
      title: 'Why you analyze even in the moments that call for the heart',
      paras: [
        'Here\u2019s the most unsettling part. When someone offers you warmth, a simple tenderness, and asks nothing of you but to be there, that\u2019s precisely the moment you go into your head. Not because that person is doing anything wrong, but because feeling with them, without a filter, makes you lose the control that analysis gives you. Emotional closeness, instead of soothing you, trips your reflex to create distance.',
        'The trap is that you offer an explanation where a presence was expected, and the explanation, however accurate, leaves the other person alone. So you never live the experience that would heal you, feeling strongly without being engulfed. You stay convinced that emotion is a danger, because you never give it time to prove you otherwise. Until you see this, you\u2019ll keep thinking through the moments that only asked to be felt.',
      ],
    },

    {
      id: 'visuel3', zone: 'free', type: 'visual',
      title: 'How far it spills into the rest of your life',
      visual: {
        kind: 'spilloverTable', n: 3,
        leftHead: 'Where it shows', rightHead: 'What it produces',
        rows: [
          ['In love, you explain instead of feeling', 'the other person feels alone beside you'],
          ['In friendship, you give analyses, not comfort', 'people consult you without confiding'],
          ['At work, you shine through thought', 'people find you a bit cold'],
          ['With yourself, you understand your emotions without living them', 'you feel at a distance from your own life'],
        ],
      },
    },
    {
      id: 'debordementProse', zone: 'free', type: 'prose',
      paras: [
        'You don\u2019t only create distance in love. You step back with almost everything that touches the heart. People admire you for your lucidity, they consult you, and yet few people feel truly close to you, because you offer your head before what you feel. This intelligence that was meant to protect you sometimes starts to feel like a pane of glass between you and life.',
      ],
      callouts: [
        { if: { statut: 'rupture' }, tone: 'note',
          text: 'And since the breakup, you may have understood everything, analyzed the causes, drawn the lessons, while strangely taking a long time to actually feel the loss, as if the grief were waiting for you to finish thinking.' },
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
            'You\u2019re The Alchemist, and you\u2019ve learned to feel without drowning. You feel the urge to analyze coming, and most of the time you choose to stay present to the emotion. This report won\u2019t teach you to see yourself, but to hold that new balance and to spot what could send you back into the head.',
          ],
          '1': [
            'You\u2019re The Alchemist, and you watch yourself go into your head live. More and more, you manage to stay with the feeling instead of darting off into analysis. It isn\u2019t systematic yet. What\u2019s left is to turn each urge to explain into a choice to feel, and to learn to offer a presence before a reading.',
          ],
          '2': [
            'You watch yourself do it. The moment you start explaining what should be felt, you know it. You know the other person wanted your presence, not your analysis, and you analyze anyway. That lucidity that prevents nothing is a real pain, the pain of someone who\u2019d simply like to be there and whose head races so as not to feel.',
            'You now know what\u2019s happening to you, where it comes from, and why understanding it hasn\u2019t switched it off. You have a first tool that works in the body. What comes next is your plan.',
          ],
          '3': [
            'You\u2019re The Alchemist, and you\u2019re starting to see it. You recognize that you intellectualize, but on a delay, once the other person has felt alone or dissected. It\u2019s later, sometimes much later, that the emotion you set aside finally catches up with you. You have the lucidity, what you\u2019re missing is the moment you\u2019d have needed to feel.',
          ],
          '4': [
            'You\u2019re The Alchemist. If your relationships often end the same way, people probably call you out for your coldness, or others seem too emotional, irrational, too caught up in drama. From where you stand, it\u2019s other people who overflow. You\u2019re sometimes right, some people really are excessive. But I want to offer you another angle, gently, because I know you like an accurate angle. What if part of what keeps repeating also came from a very old habit of going into your head the moment an emotion approaches, until you never truly meet the other person in the heart?',
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
        'Your Alchemist doesn\u2019t move alone. Right behind it sits {{pattern_secondaire}} ({{pattern_secondaire_score}}).',
        {
          bySecondaire: {
            bastion: 'You don\u2019t only go into your head, you also close the door. The analysis becomes the wall. When the other person reaches for your emotion, you give them a theory, and behind that theory, a locked border. In your plan, we work first on letting one raw emotion through, before even thinking about opening up.',
          },
          default: 'Whatever it is, it deepens the same distance, your way of going into the head when emotion gets strong. Your plan starts by bringing you back down into the body, before working on this second mechanism.',
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
            blurb: 'An integrated Bastion, a calmed Watcher, someone with a high Anchor. What they share, they\u2019re grounded, they don\u2019t flood you with raw emotion, they leave room for your processing pace without taking it as a rejection. Near them, you don\u2019t need to flee into the head, because the intensity doesn\u2019t overflow.',
            items: [{ code: 'bas', name: 'Integrated Bastion' }, { code: 'gue', name: 'Calmed Watcher' }, { code: 'anc', name: 'High Anchor' }] },
          { label: 'The ones who understand you', tone: 'comprend',
            blurb: 'A Bastion or a Watcher on the way, an integrated Runaway. They know from the inside the need to protect themselves, the fear of losing control. After that, everything depends on each person\u2019s Anchor.',
            items: [{ code: 'bas', name: 'Bastion on the way' }, { code: 'gue', name: 'Watcher on the way' }, { code: 'fug', name: 'Integrated Runaway' }] },
          { label: 'The ones who send you into your head', tone: 'declenche',
            blurb: 'A very active Arsonist, a merging Mirror, a chaotic or theatrical partner. They bring exactly the emotional intensity your system can\u2019t stand, drama, waves, immediate demands for affection. The more it overflows, the more you analyze. They aren\u2019t bad people, they\u2019re the riskiest dynamic for you as long as your Anchor is low.',
            items: [{ code: 'inc', name: 'Active Arsonist' }, { code: 'mir', name: 'Merging Mirror' }] },
        ],
      },
    },
    {
      id: 'compatProse2', zone: 'paid', type: 'prose',
      paras: [
        'And there\u2019s a scientific reason for your pull toward, or recoil from, intensity. Hazan and Shaver showed, back in 1987, that adult love replays the attachment system of childhood. Your body recognizes the bond where you have to understand in order to survive as familiar, and calls it mastery. That\u2019s why a simply warm and stable person can feel unstimulating to you, when they may be the one with whom you could finally feel without danger.',
      ],
    },

    {
      id: 'protocole', zone: 'paid', type: 'prose',
      title: '3. Your way back up',
      paras: {
        byPalier: {
          '0': [
            'You don\u2019t need an intensive program, you\u2019ve already done the work. You need enough to maintain your link to the feeling and to spot the moments when life could send you back into the head.',
          ],
          '1': [
            'You see yourself go into the head, and you sometimes stay with the feeling. What\u2019s left to do is finer, to turn every urge to explain into a choice to feel, and to offer a presence before a reading. This week, we move from analysis to the spoken heart. Get your notebook.',
          ],
          '2': [
            'You watch yourself do it, and you analyze anyway. The lock is that between the rising emotion and your analysis, there\u2019s no space, the head takes over before you\u2019ve felt. Your job is to stay with the feeling a few seconds before explaining it, and to offer a presence instead of a map. Here\u2019s your program for two weeks. Get a notebook.',
          ],
          '3': [
            'You already see that you intellectualize, that\u2019s your strength. Your problem is the lag, you understand it later, once the other person has already felt alone, or once the emotion finally catches up with you. This week, we train your lucidity to arrive earlier. It\u2019s a body-memory job, a terrain you know less than ideas, and that\u2019s precisely where your room to grow is.',
          ],
          '4': [
            'Before you change anything, you need one thing, to see yourself go into your head. And since you love to understand, we\u2019ll use that quality, not fight it. This week, we change nothing, we observe, the way a researcher studies their own functioning. Get a notebook.',
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
            { label: 'Exercise 1, the map of your fragile zones.', body: 'List the situations that can still make you flee into analysis, a very intense emotion in the other person, a charged argument, a vulnerability that arrives without a manual, deep fatigue. Knowing them is already protection.' },
            { label: 'Exercise 2, the monthly check-in.', body: 'Once a month, reread your month. Was there a moment when you went back into the head like before? Without judging yourself, note what triggered it. You\u2019re refining your map.' },
            { label: 'Exercise 3, maintaining the feeling.', body: 'At your level, the work is no longer to stop yourself analyzing, but to maintain a balance, to keep your lucidity without cutting off the heart. Keep the habit, regularly, of naming a raw emotion to someone close, without explaining it, so the path toward the feeling stays open.' },
          ],
          '1': [
            { label: 'Exercise 1, the shared emotion in real time (every day).', body: 'Staying in the feeling, you already do that a little. Now go further, share the emotion rather than the analysis. The structure is simple, and you might even find it elegant, which doesn\u2019t hurt. Instead of here\u2019s why you feel that, try me too, right now, I feel this with you. For example, when the other person is sad, don\u2019t explain their sadness, tell them I\u2019m here, and it moves me to see you like this. Write three phrases a day, on real situations. Writing trains the mouth.' },
            { label: 'Exercise 2, the presence-without-analysis experiment (two or three times).', body: 'Your system still believes that understanding is the only way to help. Prove the opposite, gently. Pick moments when someone shares an emotion, and offer only your presence, a simple word, a gesture, a warm silence, with no analysis at all. Watch what happens. Most of the time, the other person feels more accompanied than by any explanation. Note each time what you feared and what actually happened.' },
            { label: 'Exercise 3, the heart review (end of the week).', body: 'Reread your week. Count the times you shared an emotion instead of analyzing it, and the times you offered a presence with no map. Congratulate yourself for the hardest one. Spot the next, a notch above, that you\u2019d like to dare. You\u2019re building, step by step, a version of you that understands and feels, without choosing one against the other.' },
          ],
          '2': [
            { label: 'Exercise 1, the breathing that brings you back into the body.', body: 'Twice a day when calm, breathe in for 4 seconds through your nose, out for 6 to 8 seconds through your mouth. The longer out-breath switches on your parasympathetic nervous system, the one that calms the alarm. Above all, while you breathe, put your attention on the physical sensation, not on the idea of the breathing. You\u2019re training to inhabit, not to analyze.' },
            { label: 'Exercise 2, the ninety seconds inside the emotion.', body: 'This is your central exercise. The moment an emotion rises and you feel the urge to explain it, to understand it, to reframe it, don\u2019t do it right away. Stay with it. One hand on your belly, your long breathing, and for a minute and a half, just feel it, without translating it into a concept. That\u2019s how long an emotion takes to pass when you don\u2019t flee it into the head. On the other side of those ninety seconds, you discover it didn\u2019t overwhelm you, and that you didn\u2019t need to explain it to survive.' },
            { label: 'Exercise 3, name the raw emotion, without analyzing it.', body: 'Your reflex is to turn the felt thing into a theory. Instead, train yourself to say the emotion bare, in a few words, with no cause and no analysis. Right now, I\u2019m sad. I feel overwhelmed. I\u2019m scared. Write three phrases like that in your notebook. Saying the raw emotion, instead of explaining it, is what brings the other person close, because a named emotion can be shared, whereas an analysis is heard from a distance.' },
            { label: 'Exercise 4, the journal of the feeling you stayed with.', body: 'Each evening, note the times you managed to stay in the emotion before explaining it, or to offer a presence instead of an analysis, and the times the head won. Don\u2019t judge the analyses, count them as data. For each feeling you stayed with, note what you felt, and the fact that you weren\u2019t engulfed. You\u2019ll watch the kept-felt column grow. That\u2019s your Anchor rising.' },
          ],
          '3': [
            { label: 'Exercise 1, the slow-motion replay (every evening, 10 minutes).', body: 'Each evening, pick a moment when you know, now, that you went into the head instead of staying with the other person. Replay the scene in slow motion and look for the exact instant of the switch, the moment you went from feeling to analysis. Just before, what was happening in your body? For many Alchemists, it\u2019s a sudden rise, a heat, a tightening, that you leave at once for the safety of ideas. Find that tipping point. Note it.' },
            { label: 'Exercise 2, the map of your switch (end of the week).', body: 'After seven days, reread your logs. The switch often happens in the same place in the body, at the same type of emotion. Draw it on a page. That\u2019s your alarm bell, the threshold beyond which you take off toward the head. Now you know what to watch for.' },
            { label: 'Exercise 3, the presence scan (twice a day, 3 minutes).', body: 'To feel the switch while it\u2019s rising, your body has to learn to listen to itself at rest. Twice a day, sit down, close your eyes, move your attention from your feet to your head, thirty seconds per zone, without analyzing anything, just feeling. For you, this exercise is harder and more precious than for others, because it trains you to inhabit your body instead of flying over it. That\u2019s what will let you, one day, feel the emotion rise in time.' },
          ],
          '4': [
            { label: 'Exercise 1, the journal of head-trips (every evening, 5 minutes).', body: 'Three columns. First, a moment you analyzed, explained, gave a reading, while the other person seemed to be waiting for something else. Second, what the other person really wanted, comfort, warmth, a presence. Third, what you felt in your body just before going into analysis. Write fast. After seven evenings, reread it. A pattern appears, you dart into the head right when the emotion comes into play.' },
            { label: 'Exercise 2, the question that changes the angle (at every analysis).', body: 'When you explain to someone what they\u2019re going through, you usually tell yourself I\u2019m helping them understand. This week, add a second question, without replacing the first. Did they need to understand, or just my presence? Most of the time you\u2019ll see people wanted your warmth, not your map. Note those times, they\u2019re treasures.' },
            { label: 'Exercise 3, the delayed-emotion log (once during the week).', body: 'Think back to the three last strong moments of your recent life, good or bad news, a fight, a loss. For each, ask yourself, when did I feel the emotion, in the moment, or much later, once I\u2019d finished thinking about it? If you often feel on a delay, you\u2019re holding the most precious piece of information in this report. You\u2019re not short on emotion, you live it with a lag, because the head always goes first.' },
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
            { title: 'Hold Me Tight', author: 'Sue Johnson', blurb: 'To deepen a bond where you meet in the heart, not only in ideas.' },
            { title: 'The Seven Principles for Making Marriage Work', author: 'John Gottman', blurb: 'To build, with a partner, a lasting relationship on the felt connection you have earned.' },
            { title: 'Permission to Feel', author: 'Marc Brackett', blurb: 'To keep, over time, the channel to your own emotions open.' },
          ],
          '1': [
            { title: 'Nonviolent Communication', author: 'Marshall Rosenberg', blurb: 'To share a raw feeling instead of an explanation, in a way that brings the other close.' },
            { title: 'Emotional Agility', author: 'Susan David', blurb: 'To turn growing awareness into the habit of feeling-with instead of thinking-about.' },
            { title: 'The Body Keeps the Score', author: 'Bessel van der Kolk', blurb: 'To support, through understanding the body, the feeling you are starting to allow.' },
          ],
          '2': [
            { title: 'The Body Keeps the Score', author: 'Bessel van der Kolk', blurb: 'To understand in depth why your mechanism lives in your body, not your head. The book that explains your level.' },
            { title: 'Permission to Feel', author: 'Marc Brackett', blurb: 'To learn to stay in the raw emotion before the analysis takes over. The core book for your level.' },
            { title: 'Emotional Agility', author: 'Susan David', blurb: 'To let a strong feeling pass through you without flooding you, and without a theory.' },
          ],
          '3': [
            { title: 'The Body Keeps the Score', author: 'Bessel van der Kolk', blurb: 'To understand why you leave the body for the mind the moment feeling rises, and how to catch the switch earlier.' },
            { title: 'Permission to Feel', author: 'Marc Brackett', blurb: 'To work, step by step, on staying with emotion instead of explaining it away.' },
            { title: 'Emotional Agility', author: 'Susan David', blurb: 'To learn to hold feelings without being run by them or fleeing into analysis.' },
          ],
          '4': [
            { title: 'How Emotions Are Made', author: 'Lisa Feldman Barrett', blurb: 'To meet you where you live, in the mind. A rigorous, science-first look at emotion that quietly opens the door to feeling it.' },
            { title: 'Attached', author: 'Amir Levine & Rachel Heller', blurb: 'To understand the attachment fear underneath the constant analyzing.' },
            { title: 'Permission to Feel', author: 'Marc Brackett', blurb: 'To discover, gently, that naming and feeling emotion is a skill, not a loss of control.' },
          ],
        },
        default: [
          { title: 'The Body Keeps the Score', author: 'Bessel van der Kolk', blurb: 'To understand in depth why your mechanism lives in your body, not your head.' },
          { title: 'Permission to Feel', author: 'Marc Brackett', blurb: 'To learn to stay in the raw emotion before the analysis takes over.' },
          { title: 'Emotional Agility', author: 'Susan David', blurb: 'To let a strong feeling pass through you without flooding you, and without a theory.' },
        ],
      },
    },

    {
      id: 'devenir', zone: 'paid', type: 'prose',
      title: '5. What you become when you rise',
      paras: [
        'An Alchemist who rises doesn\u2019t lose their intelligence. You keep your lucidity, your ability to make meaning, your precious distance in a crisis, your precise words. But you no longer use them to cut yourself off from emotion. You can understand and feel, put words to things without turning the other person into a file, analyze without disappearing behind your analysis. You offer a presence when it\u2019s needed, and a reading when it helps, instead of always choosing the head.',
        'Be patient, the path is neither fast nor steady. You\u2019ll go into analysis again, especially when the emotion is strong. That won\u2019t be a failure, just the sign that you\u2019re learning. And what will lift you isn\u2019t understanding more, the supreme irony for you, it\u2019s living, over time, the experience that a strong emotion can move through you without engulfing you. That happens with others, and it can be practiced. This week\u2019s protocol is where you start.',
      ],
    },

    {
      id: 'etApres', zone: 'paid', type: 'prose',
      title: '6. And after this',
      paras: [
        'This report is a snapshot of you today. Your Anchor isn\u2019t fixed, it moves as you integrate your mechanism. The more you learn to feel the urge to go into the head and to stay with the feeling, the less it decides in your place, and the more you let the right people meet you in the heart, not only in ideas.',
        'Each level has its own way of working. What you do at level {{ancre_position}} won\u2019t be what you do at the level above. So come back, in a few weeks, take this test again. It\u2019ll become your progress mirror. If your Anchor rises, you\u2019ll know you\u2019re feeling where you\u2019d once only have explained. And if it lowers after a hard stretch, that\u2019s useful information, not a setback. Either way, you have a compass.',
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
