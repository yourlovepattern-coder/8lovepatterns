/* ============================================================================
   LovePattern  .  CONTENT BLOCKS  .  incendiaire   (EN delivery)
   ----------------------------------------------------------------------------
   English content, ported 1:1 from uploads/8lovepatterns_EN_zoned/incendiaire_EN_zoned.md
   (no re-translation, only re-filing into the assembler's block schema).
   Variable names stay French verbatim. Only their VALUES are English.
   Display name kept as "The Arsonist" (swap to "Firestarter" only on request).
   Payment boundary: zone:'free' vs zone:'paid'. SERVER-ONLY.
   House rule: never the long dash.
   ============================================================================ */

export const content = {
  profil: 'incendiaire',
  code: 'inc',
  nom: 'The Arsonist',
  accent: '#C9433B',

  blocks: [

    /* ===================== FREE ZONES ================================== */

    {
      id: 'accroche', zone: 'free', type: 'prose',
      title: {
        byPalier: { '2': 'You\u2019re The Arsonist. And you already know it.' },
        default: 'You\u2019re The Arsonist.',
      },
      paras: [
        'You watch yourself do it. The moment you throw the jab, when you threaten to leave to see if they hold on to you, part of you notices. You know you\u2019re testing instead of asking, and you keep going anyway. If you\u2019re here, it isn\u2019t to be taught that you provoke, you know that already. You\u2019re here because understanding it changed nothing, and that powerless lucidity wears you out.',
        'Here\u2019s the most important thing in this report, because you\u2019ve waited long enough. What you\u2019re missing isn\u2019t willpower. The moment a doubt rises about your place, the spark leaves before your head has decided anything. Nobody has shown you how to ask to be reassured instead of forcing it out through conflict.',
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
        'This reflex of provoking to be sure you matter, you didn\u2019t choose it as an adult. According to Bowlby\u2019s attachment theory, a child builds an internal model with their parent of how relationships work, which then guides their whole love life.',
        'In your case, that model learned a painful rule. Calm means I\u2019m being forgotten. Maybe as a child you only got attention in crisis, drama, conflict, and quiet everyday life meant being ignored. Maybe a parent only turned toward you when you made noise, or love, in your home, only showed itself in intensity. Maybe you knew an indifference that hurt more than anger. Whatever the scene was, your conclusion as a child was logical. If I provoke a reaction, I\u2019m sure I exist for the other person.',
        'It wasn\u2019t gratuitous aggression. It was the smart protection of a child for whom calm meant abandonment. The problem is that this reflex is still running today, and it sets fire to bonds where you were loved without needing to prove it in the noise.',
      ],
    },

    {
      id: 'visuel2', zone: 'free', type: 'visual',
      title: 'The loop you keep replaying',
      visual: {
        kind: 'loop', n: 2,
        caption: 'The loop that feeds itself.',
        steps: [
          'You sense a doubt about your place, a coolness, a distance.',
          'Rather than ask, you test, you provoke, you threaten.',
          'The other person reacts strongly, or shuts down and withdraws.',
          'You read their reaction as proof of love or as rejection.',
        ],
      },
    },
    {
      id: 'boucleProse', zone: 'free', type: 'prose',
      paras: [
        'At the start, your intensity is appealing. You love hard, you\u2019re present, you live things fully, and the other person feels desired like rarely before. Then comes a moment when you feel a doubt, a coolness, a distance, and your fear of not mattering wakes up. So instead of saying what you\u2019re missing, you test. You start a fight, you throw a jab, you threaten to leave to see if they hold on to you.',
        'The other person doesn\u2019t understand it\u2019s a call. They receive an attack. Either they react strongly, and you feel briefly reassured, they care about me. Or they shut down and pull away, and it confirms your fear. Either way, the bond gets damaged. And since the relief never lasts, soon it takes a bigger spark to get the same proof. The loop gets worse. In the end, the other person is worn out by the storms, they leave for good, and you draw a conclusion that seems obvious, people always end up abandoning me. Except that proof was built by your own strategy. You didn\u2019t prove that you get abandoned, you replayed your old fear until you made it happen.',
      ],
      callouts: [
        { if: { repetition: 'forte' }, tone: 'note',
          text: 'You told us your relationships often end in a storm, and people call you out for being too much. This is why. It isn\u2019t that you keep meeting people who can\u2019t hold on. It\u2019s that you test their love until it\u2019s exhausted, and then their leaving proves to you that you were right to test.' },
      ],
    },

    {
      id: 'pourquoiComprendre', zone: 'free', type: 'prose',
      title: 'Why understanding it has never been enough',
      paras: [
        'You\u2019ve surely understood already that you provoke, and it changed nothing, because your mechanism doesn\u2019t live in your head. It was written into your body before words, in the part of you that reacts, the part that sends up a burning rush when you feel forgotten. The psychiatrist Bessel van der Kolk showed it, the body keeps the score of what the mind has forgotten, and that\u2019s why you don\u2019t calm this impulse through reasoning.',
        'The next time you feel this need to provoke rise, when nothing serious is happening, when a coolness makes you want to throw a jab or threaten to leave, know that a surge has fired through your body, a heat, an urgency to get a reaction right now. It has a length, around ninety seconds, if you don\u2019t feed it. The trouble is that you feed it by starting the fight. So next time, don\u2019t provoke right away. Stay, one hand on your belly, breathe, and let the wave pass for a minute and a half. You\u2019ll discover that in the end the urgency drops, and that instead of the jab, you can say the real sentence, I\u2019m scared I don\u2019t matter to you. This tool is yours.',
      ],
    },

    {
      id: 'gensBien', zone: 'free', type: 'prose',
      title: 'Why you set fire even to the people who love you',
      paras: [
        'Here\u2019s the most unsettling part. When someone loves you with a calm, steady love, no drama, you don\u2019t feel reassured, you feel in danger. Your body reads that calm as indifference, as the silence before abandonment. So you provoke, to check the flame is still there. And in doing so, you damage exactly the quiet love that was the safest of all.',
        'The trap is that you confuse intensity with love. A calm bond looks dead to you, a stormy bond looks alive, when it\u2019s often the reverse. You test the people who love you until they crack, and then their exhaustion serves as proof you were right to doubt. Until you see this, you\u2019ll keep setting fire to people whose love only wanted to burn gently, for a long time.',
      ],
    },

    {
      id: 'visuel3', zone: 'free', type: 'visual',
      title: 'How far it spills into the rest of your life',
      visual: {
        kind: 'spilloverTable', n: 3,
        leftHead: 'Where it shows', rightHead: 'What it produces',
        rows: [
          ['In love, you test instead of asking', 'the other person wears out and ends up leaving'],
          ['In friendship, you provoke to see who stays', 'you tire out the people close to you'],
          ['At work, you seek friction to feel you exist', 'people find you too intense'],
          ['With yourself, you can\u2019t stand calm', 'you mistake peace for emptiness'],
        ],
      },
    },
    {
      id: 'debordementProse', zone: 'free', type: 'prose',
      paras: [
        'You don\u2019t only provoke in love. You seek the spark with almost everyone, because friction proves to you that you exist for the other person. People find you intense, alive, sometimes exhausting, and yet what you want deep down is just to be sure you matter. This intensity that was meant to guarantee you a place sometimes starts to look like a string of fires you light and can no longer put out.',
      ],
      callouts: [
        { if: { statut: 'rupture' }, tone: 'note',
          text: 'And since the breakup, you may be replaying the last fight on a loop, torn between the conviction that you were right and the dull fear that you yourself lit the blaze that took everything.' },
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
            'You\u2019re The Arsonist, and you\u2019ve learned to love hard without setting fires. You feel the urge to provoke coming, and most of the time you choose to ask for what you need. This report won\u2019t teach you to see yourself, but to hold that new calm and to spot what could relight your old reflex.',
          ],
          '1': [
            'You\u2019re The Arsonist, and you watch yourself provoke live. More and more, you manage to hold back the jab instead of throwing it. It isn\u2019t systematic yet. What\u2019s left is to turn each urge to test into a choice, and to learn to ask for reassurance instead of forcing it out through conflict.',
          ],
          '2': [
            'You watch yourself do it. The moment you throw the jab, when you threaten to leave, you know it. You know you\u2019re testing instead of asking, and you keep going anyway. That lucidity that prevents nothing is a real pain, the pain of someone who\u2019d just like to be reassured and whose body only knows how to ask by lighting a fire.',
            'You now know what\u2019s happening to you, where it comes from, and why understanding it hasn\u2019t switched it off. You have a first tool that works in the body. What comes next is your plan.',
          ],
          '3': [
            'You\u2019re The Arsonist, and you\u2019re starting to see it. You recognize that you provoke, but on a delay, once the fire is lit and the harm is done. It\u2019s later, when the fight has died down, that you realize you were just trying to be reassured. You have the lucidity, what you\u2019re missing is the moment before the spark.',
          ],
          '4': [
            'You\u2019re The Arsonist. If your relationships often end in a storm, you probably feel surrounded by cold, indifferent people who never fight for you. From where you stand, it\u2019s other people who don\u2019t hold on enough. You\u2019re sometimes right, some people really are distant. But I want to offer you another angle, gently. What if part of what keeps repeating also came from a very old habit of provoking to get proof, until you wear out the ones who loved you calmly?',
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
        'Your Arsonist doesn\u2019t move alone. Right behind it sits {{pattern_secondaire}} ({{pattern_secondaire_score}}).',
        {
          bySecondaire: {
            guetteur: 'You don\u2019t only provoke, you also watch for the signs before provoking. You scan for the coolness, you stack up the evidence of disinterest, then you light the fire to confirm. In your plan, we calm the watching that loads the gun first, before working on the provoking that pulls the trigger.',
          },
          default: 'Whatever it is, it feeds the same fear of not mattering, your way of wrenching out the proof of love through intensity. Your plan starts by letting the fire settle, before working on this second mechanism.',
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
            blurb: 'Someone with a high Anchor, an integrated Bastion, a calmed Alchemist. What they share, they\u2019re steady and they don\u2019t take the bait of the provocation, they stay present without flaring up or shutting down. Near them, your test falls flat, and that\u2019s exactly what you need, a calm that doesn\u2019t turn into abandonment.',
            items: [{ code: 'anc', name: 'High Anchor' }, { code: 'bas', name: 'Integrated Bastion' }, { code: 'alc', name: 'Calmed Alchemist' }] },
          { label: 'The ones who understand you', tone: 'comprend',
            blurb: 'A Watcher, a Mirror, or a Savior on the way. They know from the inside the fear of not mattering, the need to be reassured. After that, everything depends on each person\u2019s Anchor.',
            items: [{ code: 'gue', name: 'Watcher on the way' }, { code: 'mir', name: 'Mirror on the way' }, { code: 'sau', name: 'Savior on the way' }] },
          { label: 'The ones who fan the fire', tone: 'declenche',
            blurb: 'A very active Runaway, a very closed Bastion, a cold or indifferent partner. They give you exactly the reaction that feeds your fear, they flee or wall themselves off when you provoke, which confirms you don\u2019t matter and pushes you to light it bigger. The more they withdraw, the more you escalate. They aren\u2019t bad people, they\u2019re the riskiest dynamic for you as long as your Anchor is low.',
            items: [{ code: 'fug', name: 'Active Runaway' }, { code: 'bas', name: 'Closed Bastion' }] },
        ],
      },
    },
    {
      id: 'compatProse2', zone: 'paid', type: 'prose',
      paras: [
        'And there\u2019s a scientific reason for your pull toward intensity. Hazan and Shaver showed, back in 1987, that adult love replays the attachment system of childhood. Your body recognizes the stormy bond where you have to force out the proof of love as familiar, and calls it passion. That\u2019s why a calm, sure person can feel flat to you, when they may be the one with whom your fire could finally settle.',
      ],
    },

    {
      id: 'protocole', zone: 'paid', type: 'prose',
      title: '3. Your way back up',
      paras: {
        byPalier: {
          '0': [
            'You don\u2019t need an intensive program, you\u2019ve already done the work. You need enough to maintain your calm and to spot the moments when life could relight your old reflex.',
          ],
          '1': [
            'You see yourself provoke, and you sometimes hold back the spark. What\u2019s left to do is finer, to turn every urge to test into a choice, and to express your need to be reassured instead of putting it to the test. This week, we move from provocation to the direct request. Get your notebook.',
          ],
          '2': [
            'You watch yourself do it, and you provoke anyway. The lock is that between the rising doubt and the jab leaving, there\u2019s no space, the fire lights before you do. Your job is to put a delay before provoking, and to learn to ask for reassurance instead of forcing it out. Here\u2019s your program for two weeks. Get a notebook.',
          ],
          '3': [
            'You already see that you provoke, that\u2019s your strength. Your problem is the lag, you understand it later, when the fight has died down and the harm is done. This week, we train your lucidity to arrive earlier, at the instant before the spark. It\u2019s a body-memory job.',
          ],
          '4': [
            'Before you change anything, you need one thing, to see yourself light the fire. You don\u2019t calm a provocation you can\u2019t yet see yourself starting. This week, we change nothing, we just turn on the light. Get a notebook and keep it by your bed.',
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
            { label: 'Exercise 1, the map of your fragile zones.', body: 'List the situations that can still raise your fire, a sudden coolness, a silence after a period of closeness, a partner who shuts down, deep fatigue, a fog about your place. Knowing them is already protection.' },
            { label: 'Exercise 2, the monthly check-in.', body: 'Once a month, reread your month. Was there a moment when you provoked like before? Without judging yourself, note what triggered it. You\u2019re refining your map.' },
            { label: 'Exercise 3, maintaining the direct request.', body: 'At your level, the work is no longer to stop yourself provoking, but to maintain a balance, to keep your intensity without turning it into a test. When a doubt about your place rises, keep saying it in clear words to the person concerned, so it never turns into a spark.' },
          ],
          '1': [
            { label: 'Exercise 1, naming the need in real time (every day).', body: 'Holding back the jab, you already do that a little. Now go further, say what you feel and what you need. The structure, drawn from nonviolent communication, is simple. When you do this, I feel that, and I need this. For example, when you\u2019re silent all evening, I feel forgotten, and I need you to tell me things are fine between us. Write three phrases a day, on real situations. Writing trains the mouth.' },
            { label: 'Exercise 2, the low-stakes calm experiment (two or three times).', body: 'Your system still believes that calm means you\u2019re being forgotten. Prove the opposite, gently. Pick quiet moments, no drama, and instead of trying to liven them up with a spark, stay in the calm and observe. Most of the time, the bond is still there, intact, beneath the peaceful surface. Note each time what you feared and what actually happened.' },
            { label: 'Exercise 3, the calm review (end of the week).', body: 'Reread your week. Count the times you asked for reassurance instead of testing for it, and the times you let a calm moment exist without lighting it. Congratulate yourself for the hardest one. Spot the next, a notch above, that you\u2019d like to dare. You\u2019re building, step by step, a version of you that loves hard without needing to set fires.' },
          ],
          '2': [
            { label: 'Exercise 1, the breathing that calms the fire.', body: 'Twice a day when calm, breathe in for 4 seconds through your nose, out for 6 to 8 seconds through your mouth. The longer out-breath switches on your parasympathetic nervous system, the one that calms the alarm. You train your body to settle, so you can use it when the heat rises.' },
            { label: 'Exercise 2, the ninety seconds before provoking.', body: 'This is your central exercise. The moment a doubt about your place rises and you feel the urge to throw a jab, to threaten, to test, don\u2019t do it right away. Hold the sentence, keep it. One hand on your belly, your long breathing, and let a minute and a half pass before saying anything. That\u2019s how long the heat takes to subside when you don\u2019t fuel it. On the other side of those ninety seconds, the urgency to force out a reaction has dropped, and you can choose a different sentence.' },
            { label: 'Exercise 3, ask instead of testing.', body: 'Your reflex is to check love through conflict. Instead, train yourself to say the real sentence, the one hiding under the provocation. Instead of you don\u2019t care about me anyway, try I\u2019m scared I don\u2019t matter to you, can you reassure me? Write three phrases like that in your notebook. Asking directly gives you real reassurance, whereas provoking only gives you a reaction, which never calms for long and damages the bond.' },
            { label: 'Exercise 4, the journal of fires not lit.', body: 'Each evening, note the times you managed to hold back a provocation, or to ask for reassurance directly, and the times the fire won. Don\u2019t judge the provocations, count them as data. For each fire not lit, note what you feared, and what actually happened when you asked instead of testing. You\u2019ll watch the column of fires not lit grow. That\u2019s your Anchor rising.' },
          ],
          '3': [
            { label: 'Exercise 1, the slow-motion replay (every evening, 10 minutes).', body: 'Each evening, pick a moment when you know, now, that you provoked for nothing. Replay the scene in slow motion and look for the very first physical sign, before the jab even came out. For many Arsonists, it\u2019s a heat rising in the chest, a tension, a burning urgency to get a reaction. Find where, in your body, it fires, and at what exact moment. Note it.' },
            { label: 'Exercise 2, the map of your rise (end of the week).', body: 'After seven days, reread your logs. Your body often sends you the same signal, in the same place, just before you light it. Draw it on a page, a figure with the zone circled. That\u2019s your alarm bell. Now you know what to watch for, that moment of heat, just before the spark.' },
            { label: 'Exercise 3, the presence scan (twice a day, 3 minutes).', body: 'To feel the rise while it\u2019s arriving, your body has to learn to listen to itself at rest. Twice a day, sit down, close your eyes, move your attention from your feet to your head, thirty seconds per zone, without changing anything. This training builds your capacity to inhabit your body live, so that one day you feel the fire rise in time, and not only after the blaze.' },
          ],
          '4': [
            { label: 'Exercise 1, the spark journal (every evening, 5 minutes).', body: 'Three columns. First, a moment you provoked today, a jab, a threat to leave, a fight started, a test. Second, what had just happened, a coolness, a silence, a doubt about your place. Third, what you felt in your body just before lighting it. Write fast, without judging yourself. After seven evenings, reread it. A pattern appears, you almost always provoke after sensing a distance, never without an inner reason.' },
            { label: 'Exercise 2, the question that changes the angle (at every provocation).', body: 'When you provoke, you usually tell yourself they asked for it, they were distant. This week, add a second question, without replacing the first. Were they really indifferent, or did I light a spark to check that I matter? Most of the time you\u2019ll see there was no real danger, just your fear. Note those times, they\u2019re treasures.' },
            { label: 'Exercise 3, the log of burned-out fires (once during the week).', body: 'Think back to your three last important relationships. For each, write how it ended, and what your part in the storms was. Put the three side by side. If you find the same script, provoking until the other person leaves, you\u2019re holding the most precious piece of information in this report. It isn\u2019t that people abandon you, it\u2019s that you test their love until it\u2019s exhausted.' },
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
            { title: 'Hold Me Tight', author: 'Sue Johnson', blurb: 'To deepen a bond where intensity becomes warmth rather than fire.' },
            { title: 'The Seven Principles for Making Marriage Work', author: 'John Gottman', blurb: 'To build, with a partner, a lasting relationship on the calm security you have earned.' },
            { title: 'Nonviolent Communication', author: 'Marshall Rosenberg', blurb: 'To keep, over time, a way of voicing a doubt that brings closeness instead of conflict.' },
          ],
          '1': [
            { title: 'Nonviolent Communication', author: 'Marshall Rosenberg', blurb: 'To say the real sentence under the provocation, the need to matter, in a way that connects.' },
            { title: 'Hold Me Tight', author: 'Sue Johnson', blurb: 'To turn growing awareness into reaching for your partner instead of testing them.' },
            { title: 'Attached', author: 'Amir Levine & Rachel Heller', blurb: 'To keep replacing protest behavior with direct, secure requests.' },
          ],
          '2': [
            { title: 'The Body Keeps the Score', author: 'Bessel van der Kolk', blurb: 'To understand in depth why your mechanism lives in your body, not your head. The book that explains your level.' },
            { title: 'Attached', author: 'Amir Levine & Rachel Heller', blurb: 'To learn to ask for reassurance directly instead of testing for it. The core book for your level.' },
            { title: 'Anxiously Attached', author: 'Jessica Baum', blurb: 'To build the inner security that lets a calm love feel safe instead of suspicious.' },
          ],
          '3': [
            { title: 'The Body Keeps the Score', author: 'Bessel van der Kolk', blurb: 'To understand why the heat fires in your body before your mind decides, and how to catch it earlier.' },
            { title: 'Attached', author: 'Amir Levine & Rachel Heller', blurb: 'To work, step by step, on turning protest behavior into a clear request.' },
            { title: 'Insecure in Love', author: 'Leslie Becker-Phelps', blurb: 'To soften the reactivity that turns a small doubt into a full storm.' },
          ],
          '4': [
            { title: 'Attached', author: 'Amir Levine & Rachel Heller', blurb: 'To recognize protest behavior, the testing and provoking, name it, and stop calling it simply passion. The book that maps your exact pattern.' },
            { title: 'Insecure in Love', author: 'Leslie Becker-Phelps', blurb: 'To understand where the fear of not mattering, and the urge to provoke a reaction, come from.' },
            { title: 'Anxiously Attached', author: 'Jessica Baum', blurb: 'To see how the dread of indifference runs the show, and that you are far from alone in it.' },
          ],
        },
        default: [
          { title: 'The Body Keeps the Score', author: 'Bessel van der Kolk', blurb: 'To understand in depth why your mechanism lives in your body, not your head.' },
          { title: 'Attached', author: 'Amir Levine & Rachel Heller', blurb: 'To learn to ask for reassurance directly instead of testing for it.' },
          { title: 'Anxiously Attached', author: 'Jessica Baum', blurb: 'To build the inner security that lets a calm love feel safe instead of suspicious.' },
        ],
      },
    },

    {
      id: 'devenir', zone: 'paid', type: 'prose',
      title: '5. What you become when you rise',
      paras: [
        'An Arsonist who rises doesn\u2019t lose their intensity. You keep your capacity to love hard, your presence, your liveliness, that courage not to flee the real conversations. But you no longer use them to test. You can love hard without provoking, ask for reassurance instead of forcing it out, stand a moment of calm without taking it for abandonment. Your fire warms instead of burning.',
        'Be patient, the path is neither fast nor steady. You\u2019ll provoke again, especially when someone truly matters. That won\u2019t be a failure, just the sign that you\u2019re learning. And what will lift you isn\u2019t understanding more, it\u2019s living, over time, the experience that a calm love can be a solid love, and that you can matter to someone without having to put them to the test. That happens with others, and it can be practiced. This week\u2019s protocol is where you start.',
      ],
    },

    {
      id: 'etApres', zone: 'paid', type: 'prose',
      title: '6. And after this',
      paras: [
        'This report is a snapshot of you today. Your Anchor isn\u2019t fixed, it moves as you integrate your mechanism. The more you learn to feel the fire rise and to ask instead of provoking, the less it decides in your place, and the more you let the right people love you calmly, without your having to push them to the edge to be sure of it.',
        'Each level has its own way of working. What you do at level {{ancre_position}} won\u2019t be what you do at the level above. So come back, in a few weeks, take this test again. It\u2019ll become your progress mirror. If your Anchor rises, you\u2019ll know you\u2019re asking where you\u2019d once have provoked. And if it lowers after a hard stretch, that\u2019s useful information, not a setback. Either way, you have a compass.',
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
