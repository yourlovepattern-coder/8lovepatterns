/* ============================================================================
   LovePattern  .  CONTENT BLOCKS  .  bastion   (EN delivery)
   ----------------------------------------------------------------------------
   English content, ported 1:1 from uploads/8lovepatterns_EN_zoned/bastion_EN_zoned.md
   (no re-translation, only re-filing into the assembler's block schema).
   Variable names stay French verbatim ({{ancre_position}}, {{pattern_secondaire}},
   {{statut}}, {{CTA_1}} ...). Only their VALUES are English.

   Payment boundary: zone:'free' vs zone:'paid'. Paid blocks never assemble into
   the free tunnel (enforced by the assembler + go/no-go).

   SERVER-ONLY: bundled into get-report, never served as a static asset.
   House rule: never the long dash.
   ============================================================================ */

export const content = {
  profil: 'bastion',
  code: 'bas',
  nom: 'The Bastion',
  accent: '#4A7AA8',

  blocks: [

    /* ===================== FREE ZONES ================================== */

    {
      id: 'accroche', zone: 'free', type: 'prose',
      title: {
        byPalier: { '2': 'You\u2019re The Bastion. And you already know it.' },
        default: 'You\u2019re The Bastion.',
      },
      paras: [
        'You watch yourself do it. The moment the door locks on the inside, part of you notices. You know the other person isn\u2019t trying to hurt you, and you close anyway. If you\u2019re here, it isn\u2019t to be taught that you wall yourself off, you know that already. You\u2019re here because understanding it changed nothing, and that powerless lucidity wears you out.',
        'Here\u2019s the most important thing in this report, because you\u2019ve waited long enough. What you\u2019re missing isn\u2019t willpower. When someone gets close to your inside, your wall goes up before your head has decided anything. Nobody has shown you how to keep the door ajar when that alarm goes off.',
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
        'This reflex of closing off, you didn\u2019t choose it as an adult. According to Bowlby\u2019s attachment theory, a child builds an internal model with their parent of how relationships work, which then guides their whole love life.',
        'In your case, that model learned a hard rule. Opening up is dangerous. Maybe as a child, what you showed of your fragile side was used against you, mocked, or turned around. Maybe your limits were crossed without permission, someone searched, controlled, invaded, until closing the door became your only way to have a space of your own. Maybe you were taught that showing an emotion meant handing over a weapon. Whatever the scene was, your conclusion as a child was logical. If I let someone see inside, they\u2019ll be able to reach me. Better to keep the wall.',
        'It wasn\u2019t harshness. It was the smart protection of a child whose boundary wasn\u2019t respected. The problem is that this wall still holds today, and it keeps out people who aren\u2019t trying to hurt you.',
      ],
    },

    {
      id: 'visuel2', zone: 'free', type: 'visual',
      title: 'The loop you keep replaying',
      visual: {
        kind: 'loop', n: 2,
        caption: 'The loop that feeds itself.',
        steps: [
          'The other person asks for closeness, wants to come in.',
          'You read it as pressure on your boundary, your alarm goes off.',
          'You close, you go quiet, you answer with facts.',
          'The other person feels rejected and insists, pushes harder.',
        ],
      },
    },
    {
      id: 'boucleProse', zone: 'free', type: 'prose',
      paras: [
        'At the start, your solidity reassures. The other person feels safe with you, because you hold steady, you\u2019re reliable, you don\u2019t fall apart. Then comes the moment they want to come in further, to know what you feel, to share the intimate. And what was a normal request for closeness, your system reads as pressure on your boundary.',
        'So you close. You go quiet, you slow down, you answer with logic instead of the heart, you give little away. The other person feels this lockdown, and instead of giving you space, insists, pushes, wants to understand why you\u2019re closing. And the more they push, the more you confirm your sense of intrusion, the more you lock down. The loop gets worse. In the end, the other person suffers from the wall, wears themselves out against it, and you draw a conclusion that seems obvious, opening up always brings complications. Except that conclusion was built by your own wall. You didn\u2019t prove that opening up is dangerous, you replayed your old fear.',
      ],
      callouts: [
        { if: { repetition: 'forte' }, tone: 'note',
          text: 'You told us your relationships often end the same way, the other person complains they never really knew you. This is why. It isn\u2019t that you keep meeting people who are too nosy. It\u2019s that your wall turns normal curiosity into insistence, and insistence into proof that you were right to close.' },
      ],
    },

    {
      id: 'pourquoiComprendre', zone: 'free', type: 'prose',
      title: 'Why understanding it has never been enough',
      paras: [
        'You\u2019ve surely understood already that you close off, and it changed nothing, because your mechanism doesn\u2019t live in your head. It was written into your body before words, in the part of you that reacts, the part that clenches your jaw and turns you distant before you\u2019ve even decided. The psychiatrist Bessel van der Kolk showed it, the body keeps the score of what the mind has forgotten, and that\u2019s why you don\u2019t lower a wall through reasoning.',
        'The next time you feel this closing reflex rise, when nothing serious is happening, when someone asks how you\u2019re really doing and you feel the door lock, know that a surge has fired through your body. A tension, a cold, an urge to answer in a word or two and cut it off. It has a length, around ninety seconds, if you don\u2019t feed it. The trouble is that you feed it by telling yourself you have nothing to say. So next time, don\u2019t close right away. Stay, one hand on your belly, breathe, and let the wave pass for a minute and a half. You\u2019ll discover that in the end you can say one true thing, small, with no danger, and that the wall wasn\u2019t required. This tool is yours.',
      ],
    },

    {
      id: 'gensBien', zone: 'free', type: 'prose',
      title: 'Why you close off even with good people',
      paras: [
        'Here\u2019s the most unsettling part. When someone is truly steady, present, trustworthy, and simply wants to know you, that\u2019s precisely when your wall goes up highest. Not because that person is intrusive, but because being seen, for you, feels like a danger. The more caring and patient the other person is, the closer they get to your inside, and the louder your system sounds the alarm.',
        'The trap is that you often feel more at ease with people who are a little distant too, or in bonds where you\u2019re never asked to open up, because there, your boundary is never touched. But those bonds don\u2019t really nourish you. Meanwhile, you close the door on the ones who could finally prove to you that opening up doesn\u2019t always hurt. Until you see this, you\u2019ll keep protecting your boundary against the right people.',
      ],
    },

    {
      id: 'visuel3', zone: 'free', type: 'visual',
      title: 'How far it spills into the rest of your life',
      visual: {
        kind: 'spilloverTable', n: 3,
        leftHead: 'Where it shows', rightHead: 'What it produces',
        rows: [
          ['In love, you give facts not emotions', 'the other person feels kept outside'],
          ['In friendship, people find you solid but distant', 'nobody really knows you'],
          ['At work, you keep everything to yourself', 'you\u2019re respected without being approached'],
          ['With yourself, you cut off access to what you feel', 'you end up alone behind your wall'],
        ],
      },
    },
    {
      id: 'debordementProse', zone: 'free', type: 'prose',
      paras: [
        'You don\u2019t only close off in love. You keep a boundary with almost everyone. People respect you, find you reliable, and yet very few know what\u2019s really going on inside you. And this loneliness behind the wall sometimes starts to weigh on you, even if you tell no one.',
      ],
      callouts: [
        { if: { statut: 'rupture' }, tone: 'note',
          text: 'And since the breakup, you may have kept an almost perfect dignity on the outside, while burying the pain behind control, without ever checking what\u2019s really happening behind the wall.' },
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
            'You\u2019re The Bastion, and you\u2019ve learned to stay solid while letting people in. You feel the urge to close coming, and most of the time you choose to keep a door open. This report won\u2019t teach you to see yourself, but to hold that new openness and to spot what could make you lock down again.',
          ],
          '1': [
            'You\u2019re The Bastion, and you watch yourself close live. More and more, you manage to keep a crack open instead of locking down. It isn\u2019t systematic yet. What\u2019s left is to turn each rise of the wall into a choice to stay reachable, and to learn to say what you feel instead of hiding it behind facts.',
          ],
          '2': [
            'You watch yourself close. The moment the door locks, you know it. You know the other person doesn\u2019t deserve this wall, and you close anyway. That lucidity that prevents nothing is a real pain, the pain of someone who\u2019d like to let people in and whose body locks down on its own.',
            'You now know what\u2019s happening to you, where it comes from, and why understanding it hasn\u2019t switched it off. You have a first tool that works in the body. What comes next is your plan.',
          ],
          '3': [
            'You\u2019re The Bastion, and you\u2019re starting to see it. You recognize your closings, but on a delay, once the other person has already walked into the wall. It\u2019s later that you realize you locked down again with no real danger. You have the lucidity, what you\u2019re missing is the right moment.',
          ],
          '4': [
            'You\u2019re The Bastion. If your relationships often end the same way, people probably call you out for being closed, distant, impossible to reach. From where you stand, it\u2019s other people who are too intrusive, too curious, too demanding. You\u2019re sometimes right. But I want to offer you another angle, gently. What if part of what keeps repeating also came from a very old habit of closing the door the moment someone gets close, without your seeing it?',
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
        'Your Bastion doesn\u2019t move alone. Right behind it sits {{pattern_secondaire}} ({{pattern_secondaire_score}}).',
        {
          bySecondaire: {
            alchimiste: 'You don\u2019t only close the door, you replace it with an explanation. When the other person reaches for your emotion, you give them an analysis, a theory, a perspective, anything but what you feel. The wall takes the shape of intelligence. In your plan, we work on letting a raw emotion through before turning it into a concept.',
          },
          default: 'Whatever it is, it thickens the same wall, your way of closing off to protect yourself. Your plan starts by easing the door open, before working on this second mechanism.',
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
            blurb: 'An integrated Runaway, a calmed Alchemist, someone with a high Anchor. What they share, they respect space and pace, they don\u2019t force the door, they don\u2019t take your silence for a rejection. Near them, you don\u2019t need a wall, because nobody is trying to force their way in.',
            items: [{ code: 'fug', name: 'Integrated Runaway' }, { code: 'alc', name: 'Calmed Alchemist' }, { code: 'anc', name: 'High Anchor' }] },
          { label: 'The ones who understand you', tone: 'comprend',
            blurb: 'An integrated Watcher, an Alchemist or a Runaway on the way. They know from the inside the need to protect themselves, the fear of being reached. After that, everything depends on each person\u2019s Anchor.',
            items: [{ code: 'gue', name: 'Integrated Watcher' }, { code: 'alc', name: 'Alchemist on the way' }, { code: 'fug', name: 'Runaway on the way' }] },
          { label: 'The ones who make you close', tone: 'declenche',
            blurb: 'A very active Arsonist, an intrusive Savior, a merging Mirror. They want to come in fast, hard, to know everything, share everything, and that\u2019s exactly what sends your wall up. The more they push, the more you lock down. They aren\u2019t bad people, they\u2019re the riskiest dynamic for you as long as your Anchor is low.',
            items: [{ code: 'inc', name: 'Active Arsonist' }, { code: 'sau', name: 'Intrusive Savior' }, { code: 'mir', name: 'Merging Mirror' }] },
        ],
      },
    },
    {
      id: 'compatProse2', zone: 'paid', type: 'prose',
      paras: [
        'And there\u2019s a scientific reason for your pull toward what doesn\u2019t force your door. Hazan and Shaver showed, back in 1987, that adult love replays the attachment system of childhood. Your body recognizes the bond where you keep your boundary intact as familiar, and calls it safety. That\u2019s why someone who sincerely wants to know you can feel threatening, when they may be the one with whom you could finally lower your guard.',
      ],
    },

    {
      id: 'protocole', zone: 'paid', type: 'prose',
      title: '3. Your way back up',
      paras: {
        byPalier: {
          '0': [
            'You don\u2019t need an intensive program, you\u2019ve already done the work. You need enough to maintain your openness and to spot the moments when life could make you lock down again.',
          ],
          '1': [
            'You see yourself close, and you sometimes keep an opening. What\u2019s left to do is finer, to turn each rise of the wall into a choice, and to say what you feel instead of hiding it behind facts. This week, we move from the protective fact to the shared emotion. Get your notebook.',
          ],
          '2': [
            'You watch yourself do it, and you close anyway. The lock is that between the sense of being touched and the door slamming, there\u2019s no space, the wall goes up before you do. Your job is to keep a crack open long enough for one true thing to get through. Here\u2019s your program for two weeks. Get a notebook.',
          ],
          '3': [
            'You already see that you close off, that\u2019s your strength. Your problem is the lag, you understand it later, once the other person has already walked into it. This week, we train your lucidity to arrive earlier. It\u2019s a body-memory job.',
          ],
          '4': [
            'Before you change anything, you need one thing, to see yourself close. You don\u2019t lower a wall you can\u2019t yet see going up. This week, we change nothing, we just turn on the light. Get a notebook and keep it by your bed.',
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
            { label: 'Exercise 1, the map of your fragile zones.', body: 'List the situations that can still raise your old wall, a pressing emotional demand, a betrayal of trust, deep fatigue, a partner who forces the door. Knowing them is already protection.' },
            { label: 'Exercise 2, the monthly check-in.', body: 'Once a month, reread your month. Was there a moment when you closed like before? Without judging yourself, note what triggered it. You\u2019re refining your map.' },
            { label: 'Exercise 3, maintaining chosen openness.', body: 'At your level, the work is no longer to stop yourself closing, but to maintain a balance, to keep your limits while staying reachable. Keep saying one true thing, regularly, to someone you trust, so the door stays supple.' },
          ],
          '1': [
            { label: 'Exercise 1, naming the emotion in real time (every day).', body: 'Keeping the crack, you already do that a little. Now go further, say what you feel. The structure, drawn from nonviolent communication, is simple. When you do this, I feel that, and I need this. For example, when you insist I talk right away, I feel cornered, and I need a little time before I open up. Write three phrases a day, on real situations. Writing trains the mouth.' },
            { label: 'Exercise 2, the low-stakes opening (two or three times).', body: 'Your system still believes that showing the inside puts you in danger. Prove the opposite, gently. Pick low-stakes situations, and share something a little more personal than usual, a doubt, a memory, a light fear. Watch what happens. Most of the time, the other person moves closer instead of attacking you. Note each time what you feared and what actually happened.' },
            { label: 'Exercise 3, the opening review (end of the week).', body: 'Reread your week. Count the times you said an emotion instead of closing, and the times you stayed reachable under pressure. Congratulate yourself for the hardest one. Spot the next, a notch above, that you\u2019d like to dare. You\u2019re building, step by step, a version of you that stays solid while letting people in.' },
          ],
          '2': [
            { label: 'Exercise 1, the breathing that holds off the wall.', body: 'Twice a day when calm, breathe in for 4 seconds through your nose, out for 6 to 8 seconds through your mouth. The longer out-breath switches on your parasympathetic nervous system, the one that calms the alarm. You train your body to settle, so you can use it when the wall wants to go up.' },
            { label: 'Exercise 2, keeping the crack for ninety seconds.', body: 'This is your central exercise, the opposite of your reflex. The moment you feel the wall rise, the urge to go quiet, to answer with a fact, to cut it off, don\u2019t do it right away. Stay reachable. One hand on your belly, your long breathing, and let a minute and a half pass before closing. That\u2019s how long an emotion takes to settle when you don\u2019t feed it. On the other side of those ninety seconds, you no longer need to lock everything down, you can choose what you let be seen.' },
            { label: 'Exercise 3, say one true thing, small.', body: 'Your reflex is to give a fact in place of an emotion. Instead, train yourself to let one true thing through, tiny, with no danger. Right now I feel a little defensive. I find this hard to talk about, but it matters to me. Write three phrases like that in your notebook. One true thing, even a tiny one, makes a crack in the wall, and the other person stops pushing because they\u2019ve finally received something real.' },
            { label: 'Exercise 4, the journal of the crack gained.', body: 'Each evening, note the times you kept an opening instead of locking down, even imperfectly, and the times the wall won. Don\u2019t judge the closings, count them as data. For each crack gained, note what happened next, and what you feared that didn\u2019t happen. You\u2019ll watch the crack column grow. That\u2019s your Anchor rising.' },
          ],
          '3': [
            { label: 'Exercise 1, the slow-motion replay (every evening, 10 minutes).', body: 'Each evening, pick a moment you know, now, that you closed. Replay the scene in slow motion and look for the very first physical sign, before the door even slammed. For many Bastions, it\u2019s a jaw that clenches, a chest that hardens, a sudden cold, a voice that goes flat, an urge to answer short. Find where, in your body, it fires, and at what exact moment. Note it.' },
            { label: 'Exercise 2, the map of your signal (end of the week).', body: 'After seven days, reread your logs. Your body often sends you the same signal, in the same place, before each closing. Draw it on a page, a figure with the zone circled. That\u2019s your alarm bell. Now you know what to watch for.' },
            { label: 'Exercise 3, the presence scan (twice a day, 3 minutes).', body: 'To feel your signal while it\u2019s rising, your body has to learn to listen to itself at rest. Twice a day, sit down, close your eyes, move your attention from your feet to your head, thirty seconds per zone, without changing anything. This training builds your capacity to inhabit your body live, so that one day you feel the wall rise in time, and not only after you\u2019ve put it up.' },
          ],
          '4': [
            { label: 'Exercise 1, the closing journal (every evening, 5 minutes).', body: 'Three columns. First, a moment you closed today, when you answered in a word or two, gave a fact instead of an emotion, let a silence settle to take back control, changed the subject when it got personal. Second, what had just happened, what the other person asked or said. Third, what you felt in your body just before closing. Write fast, without judging yourself. After seven evenings, reread it. A pattern appears, you often close at the same kind of moment, when someone gets close to your inside.' },
            { label: 'Exercise 2, the question that changes the angle (at every irritation).', body: 'When someone seems too curious or too demanding, you usually tell yourself they\u2019re intrusive. This week, add a second question, without replacing the first. Is this person really forcing my boundary, or is the simple fact of being seen enough to make me close? Most of the time you won\u2019t be able to decide, and that\u2019s normal. But sometimes you\u2019ll see the request was normal, and it was your alarm that went off. Note those times, they\u2019re treasures.' },
            { label: 'Exercise 3, the complaints log (once during the week).', body: 'Think back to your three last close relationships. For each, write in one sentence what you were blamed for at the end. Put the three side by side. Do they come back to the same place, nobody knows you, you\u2019re a wall, you never open up? If so, you\u2019re holding the most precious piece of information in this report. The common thread of your relationships isn\u2019t other people\u2019s curiosity, it\u2019s the door you yourself close.' },
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
            { title: 'Hold Me Tight', author: 'Sue Johnson', blurb: 'To deepen a close, safe bond now that you can stay open without walling up.' },
            { title: 'The Seven Principles for Making Marriage Work', author: 'John Gottman', blurb: 'To build, with a partner, a lasting relationship on the balance of boundary and access you have earned.' },
            { title: 'Nonviolent Communication', author: 'Marshall Rosenberg', blurb: 'To keep, over time, a way of speaking that connects rather than shuts down.' },
          ],
          '1': [
            { title: 'Nonviolent Communication', author: 'Marshall Rosenberg', blurb: 'To say what you feel in a way that brings people closer instead of pushing them out.' },
            { title: 'Daring Greatly', author: 'Bren\u00e9 Brown', blurb: 'To dare the vulnerability you are starting to allow, on purpose this time.' },
            { title: 'The Body Keeps the Score', author: 'Bessel van der Kolk', blurb: 'To support, through understanding the body, what you are beginning to let through.' },
          ],
          '2': [
            { title: 'The Body Keeps the Score', author: 'Bessel van der Kolk', blurb: 'To understand in depth why your mechanism lives in your body, not your head. The book that explains your level.' },
            { title: 'Daring Greatly', author: 'Bren\u00e9 Brown', blurb: 'To learn that letting yourself be seen is not the danger your body believes it is.' },
            { title: 'Attached', author: 'Amir Levine & Rachel Heller', blurb: 'To reread your past relationships and stop thinking something is wrong with you.' },
          ],
          '3': [
            { title: 'The Body Keeps the Score', author: 'Bessel van der Kolk', blurb: 'To understand why the wall goes up before your mind decides, and how to catch the signal earlier.' },
            { title: 'Attached', author: 'Amir Levine & Rachel Heller', blurb: 'To reread your past relationships through the lens of avoidance.' },
            { title: 'Daring Greatly', author: 'Bren\u00e9 Brown', blurb: 'To begin turning what you notice into something you can actually show.' },
          ],
          '4': [
            { title: 'Attached', author: 'Amir Levine & Rachel Heller', blurb: 'To recognize the avoidant pattern, give your need for distance a name, without judging yourself.' },
            { title: 'Running on Empty: Overcome Your Childhood Emotional Neglect', author: 'Jonice Webb', blurb: 'To understand where the closed door comes from when emotions had no room growing up. Speaks directly to the Bastion\u2019s origin.' },
            { title: 'Daring Greatly', author: 'Bren\u00e9 Brown', blurb: 'To start seeing vulnerability not as a weapon handed to others, but as the way in.' },
          ],
        },
        default: [
          { title: 'The Body Keeps the Score', author: 'Bessel van der Kolk', blurb: 'To understand in depth why your mechanism lives in your body, not your head.' },
          { title: 'Daring Greatly', author: 'Bren\u00e9 Brown', blurb: 'To learn that letting yourself be seen is not the danger your body believes it is.' },
          { title: 'Attached', author: 'Amir Levine & Rachel Heller', blurb: 'To reread your past relationships and stop thinking something is wrong with you.' },
        ],
      },
    },

    {
      id: 'devenir', zone: 'paid', type: 'prose',
      title: '5. What you become when you rise',
      paras: [
        'A Bastion who rises doesn\u2019t lose their solidity. You keep your reliability, your calm loyalty, your rare ability to hold steady when everything shakes, your respect for boundaries, yours and other people\u2019s. But you no longer use these qualities as a wall. You can stay solid and let people in, hold your limits without cutting off contact, say an emotion without feeling like you\u2019re handing the other person a weapon.',
        'Be patient, the path is neither fast nor steady. You\u2019ll close off again, especially when someone truly matters. That won\u2019t be a failure, just the sign that you\u2019re learning. And what will lift you isn\u2019t understanding more, it\u2019s living, over time, the experience that people can see inside you without using it against you. That happens with others, and it can be practiced. This week\u2019s protocol is where you start.',
      ],
    },

    {
      id: 'etApres', zone: 'paid', type: 'prose',
      title: '6. And after this',
      paras: [
        'This report is a snapshot of you today. Your Anchor isn\u2019t fixed, it moves as you integrate your mechanism. The more you learn to feel the wall rise and to keep a crack open, the less it decides in your place, and the more you let the right people know you without their hitting your boundary.',
        'Each level has its own way of working. What you do at level {{ancre_position}} won\u2019t be what you do at the level above. So come back, in a few weeks, take this test again. It\u2019ll become your progress mirror. If your Anchor rises, you\u2019ll know you\u2019re letting people in where you\u2019d once have closed. And if it lowers after a hard stretch, that\u2019s useful information, not a setback. Either way, you have a compass.',
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
