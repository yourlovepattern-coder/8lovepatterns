/* ============================================================================
   LovePattern  .  CONTENT BLOCKS  .  guetteur   (EN delivery)
   ----------------------------------------------------------------------------
   English content, ported 1:1 from uploads/8lovepatterns_EN_zoned/guetteur_EN_zoned.md
   (no re-translation, only re-filing into the assembler's block schema).
   Variable names stay French verbatim. Only their VALUES are English.
   Payment boundary: zone:'free' vs zone:'paid'. SERVER-ONLY.
   House rule: never the long dash.
   ============================================================================ */

export const content = {
  profil: 'guetteur',
  code: 'gue',
  nom: 'The Watcher',
  accent: '#C77D3A',

  blocks: [

    /* ===================== FREE ZONES ================================== */

    {
      id: 'accroche', zone: 'free', type: 'prose',
      title: {
        byPalier: { '2': 'You\u2019re The Watcher. And you already know it.' },
        default: 'You\u2019re The Watcher.',
      },
      paras: [
        'You watch yourself do it. The moment you reread that message for the third time, when you analyze that response time, part of you notices. You know you\u2019re manufacturing a problem, and you keep going anyway. If you\u2019re here, it isn\u2019t to be taught that you watch, you know that already. You\u2019re here because understanding it changed nothing, and that powerless lucidity wears you out.',
        'Here\u2019s the most important thing in this report, because you\u2019ve waited long enough. What you\u2019re missing isn\u2019t willpower. The moment a sign alerts you, your investigation starts before your head has decided anything. Nobody has shown you how to set the alarm down instead of following it.',
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
        'This reflex of watching, you didn\u2019t choose it as an adult. According to Bowlby\u2019s attachment theory, a child builds an internal model with their parent of how relationships work, which then guides their whole love life.',
        'In your case, that model learned that safety could vanish without warning. Maybe an unpredictable parent, warm one day, cold the next, whose mood you scanned to know what to expect. Maybe a departure, a betrayal, a piece of news that hit you when you suspected nothing, and taught you never to be caught off guard again. Maybe an atmosphere where you had to guess what went unsaid. Whatever the scene was, your conclusion as a child was logical. If I watch well enough, I\u2019ll see the danger coming and I\u2019ll never be surprised again.',
        'It wasn\u2019t sickly distrust. It was the smart protection of a child who\u2019d been caught off guard one time too many. The problem is that this vigilance is still running today, and it scans people who are hiding nothing from you.',
      ],
    },

    {
      id: 'visuel2', zone: 'free', type: 'visual',
      title: 'The loop you keep replaying',
      visual: {
        kind: 'loop', n: 2,
        caption: 'The loop that feeds itself.',
        steps: [
          'You pick up a variation, a sign.',
          'Your alert system fires.',
          'You investigate, you analyze, you test, you look for clues.',
          'The other person feels observed, becomes less natural.',
        ],
      },
    },
    {
      id: 'boucleProse', zone: 'free', type: 'prose',
      paras: [
        'At the start, your vigilance passes for attentiveness. You notice everything, you remember everything, the other person feels seen. Then you pick up a variation, a detail that\u2019s off, and your alert lights up. So you investigate. You analyze response times, you reread sentences, you ask indirect questions, you test for consistency.',
        'The other person feels watched, and becomes less natural, more careful, like someone under surveillance. And that very unease produces new ambiguous signs, exactly what you were looking for. The more you watch, the more the other person stiffens, the more you find to worry about. The loop gets worse. In the end, you tell yourself you were right to watch, and watching becomes the very condition of your safety. Except that proof was built by your own vigilance. You didn\u2019t detect a real danger, you replayed your old fear.',
      ],
      callouts: [
        { if: { repetition: 'forte' }, tone: 'note',
          text: 'You told us your relationships look alike, that people end up calling you out for your distrust. This is why. It isn\u2019t that you keep meeting shady people. It\u2019s that your watching makes people nervous, and nervous behavior looks exactly like guilty behavior.' },
      ],
    },

    {
      id: 'pourquoiComprendre', zone: 'free', type: 'prose',
      title: 'Why understanding it has never been enough',
      paras: [
        'You\u2019ve surely understood already that you watch too much, and it changed nothing, because your mechanism doesn\u2019t live in your head. It was written into your body before words, in the part of you that reacts, the part that races your heart when a message goes unanswered. The psychiatrist Bessel van der Kolk showed it, the body keeps the score of what the mind has forgotten, and that\u2019s why you don\u2019t calm a vigilance through reasoning.',
        'The next time a sign trips your alert, that message read three times, that tone that seems changed to you, know that a surge has fired through your body, a rise of anxiety, an urgency to understand now. It has a length, around ninety seconds, if you don\u2019t feed it. The trouble is that you feed it by launching the investigation. So next time, don\u2019t investigate right away. Put the phone down, one hand on your belly, breathe, and let the wave pass for a minute and a half. You\u2019ll discover that the urgency drops in the end, and that often there was nothing to figure out. This tool is yours.',
      ],
    },

    {
      id: 'gensBien', zone: 'free', type: 'prose',
      title: 'Why you watch even reliable people',
      paras: [
        'Here\u2019s the most unsettling part. When someone is truly stable, consistent, reliable, you still don\u2019t rest. Part of you looks for the hidden flaw, distrusts that calm, tells you it\u2019s too good, that there must be something you haven\u2019t seen yet. Safety, instead of soothing you, makes you suspicious.',
        'The trap is that the other person\u2019s reliability doesn\u2019t switch off your alarm, because your alarm isn\u2019t reacting to a real danger, it\u2019s reacting to the very idea that a danger could exist without your seeing it. So you scan even harder the one who hides nothing from you, and your vigilance ends up damaging the one bond that could prove to you that not everything is a threat. Until you see this, you\u2019ll keep watching trustworthy people as if they were suspects.',
      ],
    },

    {
      id: 'visuel3', zone: 'free', type: 'visual',
      title: 'How far it spills into the rest of your life',
      visual: {
        kind: 'spilloverTable', n: 3,
        leftHead: 'Where it shows', rightHead: 'What it produces',
        rows: [
          ['In love, you analyze every sign', 'the other person feels suspected'],
          ['In friendship, you note who replies fast or not', 'you get hurt over details'],
          ['At work, you watch for what isn\u2019t said to you', 'you live under tension'],
          ['With yourself, you never switch the alarm off', 'you rarely rest'],
        ],
      },
    },
    {
      id: 'debordementProse', zone: 'free', type: 'prose',
      paras: [
        'You don\u2019t only watch in love. You stay on alert with almost everything. You notice, you cross-check, you anticipate, and you never truly rest inside a bond. This vigilance that was meant to protect you sometimes starts to feel like a tiredness that won\u2019t leave you.',
      ],
      callouts: [
        { if: { statut: 'rupture' }, tone: 'note',
          text: 'And since the breakup, you may have run the whole investigation again, searched for the exact moment it tipped, rebuilt the timeline of the beginning of the end, at the risk of staying hooked to the story through analysis.' },
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
            'You\u2019re The Watcher, and you\u2019ve learned to trust without dropping your whole guard. You feel the alarm coming, and most of the time you choose to check the facts rather than investigate. This report won\u2019t teach you to see yourself, but to hold that new trust and to spot what could relight your watching.',
          ],
          '1': [
            'You\u2019re The Watcher, and you watch yourself investigate live. More and more, you manage to put the phone down instead of taking off into analysis. It isn\u2019t systematic yet. What\u2019s left is to turn each alarm into a choice to check reality, and to learn to ask directly instead of guessing.',
          ],
          '2': [
            'You watch yourself investigate. The moment you reread that message for the third time, you know it. You know you\u2019re manufacturing a problem, and you keep going anyway. That lucidity that prevents nothing is a real pain, the pain of someone who\u2019d like to trust and whose mind takes off investigating on its own.',
            'You now know what\u2019s happening to you, where it comes from, and why understanding it hasn\u2019t switched it off. You have a first tool that works in the body. What comes next is your plan.',
          ],
          '3': [
            'You\u2019re The Watcher, and you\u2019re starting to see it. You recognize your investigations, but on a delay, once the other person has felt suspected and the harm is done. It\u2019s later that you realize you\u2019ve again gone looking for a danger that didn\u2019t exist. You have the lucidity, what you\u2019re missing is the right moment.',
          ],
          '4': [
            'You\u2019re The Watcher. If your relationships often end the same way, people are probably calling you out for your distrust, your jealousy, your questions. From where you stand, it\u2019s other people who are foggy, inconsistent, who hide things. You\u2019re sometimes right, your radar picks up real inconsistencies. But I want to offer you another angle, gently. What if part of what keeps repeating also came from a very old habit of looking for danger everywhere, until you make it exist?',
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
        'Your Watcher doesn\u2019t move alone. Right behind it sits {{pattern_secondaire}} ({{pattern_secondaire_score}}).',
        {
          bySecondaire: {
            alchimiste: 'You don\u2019t only watch, you then turn your observations into theory. You build complete explanations about what\u2019s really going on in the other person, and these theories feel so logical they become certainties. In your plan, we learn to treat your analyses as hypotheses to check, not as truths.',
          },
          default: 'Whatever it is, it feeds the same alarm, your way of scanning for danger before it arrives. Your plan starts by calming the alarm, before working on this second mechanism.',
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
            blurb: 'An integrated Bastion, a calmed Alchemist, someone with a high Anchor. What they share, they\u2019re consistent, readable, stable over time, they create no fog. Near them, your alarm has little material to fire on, because what they show matches what they are.',
            items: [{ code: 'bas', name: 'Integrated Bastion' }, { code: 'alc', name: 'Calmed Alchemist' }, { code: 'anc', name: 'High Anchor' }] },
          { label: 'The ones who understand you', tone: 'comprend',
            blurb: 'An Arsonist on the way, an integrated Chameleon, an Alchemist making progress. They know from the inside the fear of being surprised, the need for truth. After that, everything depends on each person\u2019s Anchor.',
            items: [{ code: 'inc', name: 'Arsonist on the way' }, { code: 'cam', name: 'Integrated Chameleon' }, { code: 'alc', name: 'Alchemist progressing' }] },
          { label: 'The ones who light you up', tone: 'declenche',
            blurb: 'A very active Runaway, a foggy partner, a very active Mirror who changes with the mood. They create exactly the fog your system can\u2019t stand, contradictory signals, silences, shifts of color. The more unpredictable it is, the more you watch. They aren\u2019t bad people, they\u2019re the riskiest dynamic for you as long as your Anchor is low.',
            items: [{ code: 'fug', name: 'Active Runaway' }, { code: 'mir', name: 'Active Mirror' }] },
        ],
      },
    },
    {
      id: 'compatProse2', zone: 'paid', type: 'prose',
      paras: [
        'And there\u2019s a scientific reason for your pull toward the unstable. Hazan and Shaver showed, back in 1987, that adult love replays the attachment system of childhood. Your body recognizes the uncertain bond where you have to guess as familiar, and calls it intensity. That\u2019s why a perfectly clear person can feel flat to you, when they may be the one with whom your alarm could finally switch off.',
      ],
    },

    {
      id: 'protocole', zone: 'paid', type: 'prose',
      title: '3. Your way back up',
      paras: {
        byPalier: {
          '0': [
            'You don\u2019t need an intensive program, you\u2019ve already done the work. You need enough to maintain your trust and to spot the moments when life could relight your watching.',
          ],
          '1': [
            'You see yourself investigate, and you sometimes set the alarm down. What\u2019s left to do is finer, to turn every rising alarm into a choice, and to say what you feel instead of investigating in silence. This week, we move from watching to direct words. Get your notebook.',
          ],
          '2': [
            'You watch yourself do it, and you investigate anyway. The lock is that between the sign that alerts you and the start of the investigation, there\u2019s no space, the analysis starts before you do. Your job is to put a delay between the alarm and the action, and to ask directly rather than guess. Here\u2019s your program for two weeks. Get a notebook.',
          ],
          '3': [
            'You already see that you investigate, that\u2019s your strength. Your problem is the lag, you understand it later, once the other person has already felt watched. This week, we train your lucidity to arrive earlier. It\u2019s a body-memory job.',
          ],
          '4': [
            'Before you change anything, you need one thing, to see yourself investigate. You don\u2019t calm a vigilance you can\u2019t yet see running. This week, we change nothing, we just turn on the light. Get a notebook and keep it by your bed.',
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
            { label: 'Exercise 1, the map of your fragile zones.', body: 'List the situations that can still raise your old alarm, a silence after a period of closeness, a foggy partner, deep fatigue, a past that reasserts itself. Knowing them is already protection.' },
            { label: 'Exercise 2, the monthly check-in.', body: 'Once a month, reread your month. Was there a moment when you took off investigating like before? Without judging yourself, note what triggered it. You\u2019re refining your map.' },
            { label: 'Exercise 3, maintaining chosen trust.', body: 'At your level, the work is no longer to stop yourself watching, but to maintain a balance, to stay lucid without becoming suspicious. When a doubt rises, keep voicing it in clear words to the person concerned, so it never turns into a silent investigation.' },
          ],
          '1': [
            { label: 'Exercise 1, naming the need in real time (every day).', body: 'Setting the alarm down, you already do that a little. Now go further, say what you feel and what you need. The structure, drawn from nonviolent communication, is simple. When you do this, I feel that, and I need this. For example, when you take a long time to reply without warning, I feel insecure, and I need a word to know everything\u2019s fine. Write three phrases a day, on real situations. Writing trains the mouth.' },
            { label: 'Exercise 2, the low-stakes trust experiment (two or three times).', body: 'Your system still believes that not watching means putting yourself in danger. Prove the opposite, gently. Pick low-stakes situations, and deliberately leave a zone unchecked, a message unanalyzed, a delay uninterpreted. Watch what happens. Most of the time, nothing bad happens, and you gain some rest. Note each time what you feared and what actually happened.' },
            { label: 'Exercise 3, the trust review (end of the week).', body: 'Reread your week. Count the times you asked directly instead of investigating, and the times you left a zone alone. Congratulate yourself for the hardest one. Spot the next, a notch above, that you\u2019d like to dare. You\u2019re building, step by step, a version of you that trusts without going blind.' },
          ],
          '2': [
            { label: 'Exercise 1, the breathing that calms the alarm.', body: 'Twice a day when calm, breathe in for 4 seconds through your nose, out for 6 to 8 seconds through your mouth. The longer out-breath switches on your parasympathetic nervous system, the one that calms the alert. You train your body to settle, so you can use it when the alarm rings.' },
            { label: 'Exercise 2, the ninety seconds before the investigation.', body: 'This is your central exercise. The moment a sign trips your alarm and you feel the urge to reread, analyze, check, rise, don\u2019t do it right away. Put the phone down. One hand on your belly, your long breathing, and let a minute and a half pass before deciding anything. That\u2019s how long the alarm takes to subside when you don\u2019t feed it. On the other side of those ninety seconds, the urgency to figure it out has dropped, and you often see there was nothing to figure out.' },
            { label: 'Exercise 3, ask instead of guessing.', body: 'Your reflex is the indirect investigation, the trap question, the silent analysis. Instead, train yourself to ask directly, simply. I noticed you were more distant tonight, is something going on? Write three phrases like that in your notebook. A direct question gives you a real answer, whereas the investigation only gives you clues your alarm always reads the wrong way.' },
            { label: 'Exercise 4, the journal of the alarms you set down.', body: 'Each evening, note the times you managed to put a delay before investigating, or to ask directly, and the times the investigation won. Don\u2019t judge the investigations, count them as data. For each alarm you set down, note what happened next, and what you feared that didn\u2019t happen. You\u2019ll watch the column of set-down alarms grow. That\u2019s your Anchor rising.' },
          ],
          '3': [
            { label: 'Exercise 1, the slow-motion replay (every evening, 10 minutes).', body: 'Each evening, pick a moment when you know, now, that you took off investigating for nothing. Replay the scene in slow motion and look for the very first physical sign, before the analysis even starts. For many Watchers, it\u2019s a racing heart, a hollow in the belly, a flush of heat, a thought that starts looping. Find where, in your body, the alarm fires, and at what exact moment. Note it.' },
            { label: 'Exercise 2, the map of your alarm (end of the week).', body: 'After seven days, reread your logs. Your body often sends you the same signal, in the same place, before each investigation. Draw it on a page, a figure with the zone circled. That\u2019s your alarm bell. Now you know what to watch for, no longer in the other person, but in yourself.' },
            { label: 'Exercise 3, the presence scan (twice a day, 3 minutes).', body: 'To feel your alarm while it\u2019s rising, your body has to learn to listen to itself at rest. Twice a day, sit down, close your eyes, move your attention from your feet to your head, thirty seconds per zone, without changing anything. This training builds your capacity to inhabit your body live, so that one day you feel the alarm rise in time, and not only after launching the investigation.' },
          ],
          '4': [
            { label: 'Exercise 1, the investigation journal (every evening, 5 minutes).', body: 'Three columns. First, a moment you investigated today, reread a message, analyzed a response time, asked an indirect question, checked for consistency, cross-referenced two pieces of information. Second, the sign that triggered it, what the other person said or did. Third, what you felt in your body just before taking off investigating. Write fast, without judging yourself. After seven evenings, reread it. A pattern appears, your alarm often fires on the same kind of sign.' },
            { label: 'Exercise 2, the question that changes the angle (at every rising alarm).', body: 'When a sign alerts you, you usually tell yourself something\u2019s going on. This week, add a second question, without replacing the first. Is this a clear fact, or an interpretation my alarm has manufactured? Separate what you actually know from what you fear. Most of the time you\u2019ll see there\u2019s one tiny fact and a lot of interpretation. Note those times, they\u2019re treasures.' },
            { label: 'Exercise 3, the false-alarm log (once during the week).', body: 'Think back to your three last big romantic worries. For each, write what you thought you saw, and what actually happened next. Put the three side by side. How many turned out to be founded? If most were false alarms, you\u2019re holding the most precious piece of information in this report. Your radar is wrong more often than it believes, because it prefers a thousand false alarms to one real surprise.' },
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
            { title: 'Hold Me Tight', author: 'Sue Johnson', blurb: 'To deepen a secure bond now that you can stay lucid without standing guard.' },
            { title: 'The Seven Principles for Making Marriage Work', author: 'John Gottman', blurb: 'To build, with a partner, a lasting relationship on the calm trust you have earned.' },
            { title: 'Nonviolent Communication', author: 'Marshall Rosenberg', blurb: 'To keep, over time, a way of voicing doubt that connects instead of accusing.' },
          ],
          '1': [
            { title: 'Nonviolent Communication', author: 'Marshall Rosenberg', blurb: 'To ask directly for what you need instead of investigating in silence.' },
            { title: 'Anxiously Attached', author: 'Jessica Baum', blurb: 'To turn growing self-awareness into real change in how you reach for reassurance.' },
            { title: 'The Body Keeps the Score', author: 'Bessel van der Kolk', blurb: 'To support, through understanding the body, the trust you are starting to allow.' },
          ],
          '2': [
            { title: 'The Body Keeps the Score', author: 'Bessel van der Kolk', blurb: 'To understand in depth why your mechanism lives in your body, not your head. The book that explains your level.' },
            { title: 'Insecure in Love', author: 'Leslie Becker-Phelps', blurb: 'To learn to calm the alarm with compassionate self-awareness instead of feeding the investigation.' },
            { title: 'Anxiously Attached', author: 'Jessica Baum', blurb: 'To build the inner security that lets you stop scanning the people who are not leaving.' },
          ],
          '3': [
            { title: 'The Body Keeps the Score', author: 'Bessel van der Kolk', blurb: 'To understand why the alarm fires in your body before your mind decides, and how to catch it earlier.' },
            { title: 'Insecure in Love', author: 'Leslie Becker-Phelps', blurb: 'To work, step by step, on the anxiety that turns a small sign into a full investigation.' },
            { title: 'Attached', author: 'Amir Levine & Rachel Heller', blurb: 'To reread your past relationships through the lens of anxious attachment.' },
          ],
          '4': [
            { title: 'Attached', author: 'Amir Levine & Rachel Heller', blurb: 'To recognize the anxious, vigilant pattern, give it a name, and stop thinking you are simply too much.' },
            { title: 'Insecure in Love', author: 'Leslie Becker-Phelps', blurb: 'To understand where the watching, the jealousy and the reassurance-seeking come from, written with great compassion.' },
            { title: 'Anxiously Attached', author: 'Jessica Baum', blurb: 'To see how the fear of being blindsided runs the show, and that you are far from alone in it.' },
          ],
        },
        default: [
          { title: 'The Body Keeps the Score', author: 'Bessel van der Kolk', blurb: 'To understand in depth why your mechanism lives in your body, not your head.' },
          { title: 'Insecure in Love', author: 'Leslie Becker-Phelps', blurb: 'To learn to calm the alarm with compassionate self-awareness instead of feeding the investigation.' },
          { title: 'Anxiously Attached', author: 'Jessica Baum', blurb: 'To build the inner security that lets you stop scanning the people who are not leaving.' },
        ],
      },
    },

    {
      id: 'devenir', zone: 'paid', type: 'prose',
      title: '5. What you become when you rise',
      paras: [
        'A Watcher who rises doesn\u2019t lose their lucidity. You keep your sensitivity to inconsistencies, your sharp memory, your rare ability to sense what\u2019s unsaid, your need for truth. But you no longer use them like a surveillance camera trained on the other person. You can notice without investigating, ask without accusing, trust without dropping your whole guard. Your vigilance becomes a radar you switch on when needed, instead of an alarm that screams nonstop.',
        'Be patient, the path is neither fast nor steady. You\u2019ll set off investigating again, especially when someone truly matters. That won\u2019t be a failure, just the sign that you\u2019re learning. And what will lift you isn\u2019t understanding more, it\u2019s living, over time, the experience that a bond can be safe without your watching it. That happens with others, and it can be practiced. This week\u2019s protocol is where you start.',
      ],
    },

    {
      id: 'etApres', zone: 'paid', type: 'prose',
      title: '6. And after this',
      paras: [
        'This report is a snapshot of you today. Your Anchor isn\u2019t fixed, it moves as you integrate your mechanism. The more you learn to feel the alarm rise and to check reality instead of investigating, the less it decides in your place, and the more you let the right people prove to you, over time, that not everyone leaves.',
        'Each level has its own way of working. What you do at level {{ancre_position}} won\u2019t be what you do at the level above. So come back, in a few weeks, take this test again. It\u2019ll become your progress mirror. If your Anchor rises, you\u2019ll know you\u2019re trusting where you\u2019d once have investigated. And if it lowers after a hard stretch, that\u2019s useful information, not a setback. Either way, you have a compass.',
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
