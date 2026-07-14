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
        byPalier: { '2': 'You’re The Bastion. And you already know it.' },
        default: 'You’re The Bastion.',
      },
      paras: [
        'You watch yourself do it. The moment the door locks on the inside, part of you notices. You know the other person isn’t trying to hurt you, and you close anyway. If you’re here, it isn’t to be taught that you wall yourself off, you know that already. You’re here because understanding it changed nothing, and that powerless lucidity wears you out.',
        'Here’s the most important thing in this report, because you’ve waited long enough. What you’re missing isn’t willpower. When someone gets close to your inside, your wall goes up before your head has decided anything. Nobody has shown you how to keep the door ajar when that alarm goes off.',
      ],
    },

    {
      id: 'visuel1', zone: 'free', type: 'visual',
      visual: {
        kind: 'anchorScale', n: 1,
        subtitle: 'You’re here. Most people who take this test land in exactly this spot, and it’s the most frustrating one of all.',
        paliers: [
          { v: 0, phrase: 'I feel it coming and I can do otherwise.' },
          { v: 1, phrase: 'I catch it in the moment.' },
          { v: 2, phrase: 'I know I’m doing it, and I do it anyway.' },
          { v: 3, phrase: 'I understand, but after the fact.' },
          { v: 4, phrase: 'For me, the problem is the other person.' },
        ],
      },
    },

    {
      id: 'pourquoiToi', zone: 'free', type: 'prose',
      title: 'Why you',
      paras: [
        'This reflex of closing off, you didn’t choose it as an adult. According to Bowlby’s attachment theory, a child builds an internal model with their parent of how relationships work, which then guides their whole love life.',
        'In your case, that model learned a hard rule. Opening up is dangerous. Maybe as a child, what you showed of your fragile side was used against you, mocked, or turned around. Maybe your limits were crossed without permission, someone searched, controlled, invaded, until closing the door became your only way to have a space of your own. Maybe you were taught that showing an emotion meant handing over a weapon. Whatever the scene was, your conclusion as a child was logical. If I let someone see inside, they’ll be able to reach me. Better to keep the wall.',
        'It wasn’t harshness. It was the smart protection of a child whose boundary wasn’t respected. The problem is that this wall still holds today, and it keeps out people who aren’t trying to hurt you.',
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
        'At the start, your solidity reassures. The other person feels safe with you, because you hold steady, you’re reliable, you don’t fall apart. Then comes the moment they want to come in further, to know what you feel, to share the intimate. And what was a normal request for closeness, your system reads as pressure on your boundary.',
        'So you close. You go quiet, you slow down, you answer with logic instead of the heart, you give little away. The other person feels this lockdown, and instead of giving you space, insists, pushes, wants to understand why you’re closing. And the more they push, the more you confirm your sense of intrusion, the more you lock down. The loop gets worse. In the end, the other person suffers from the wall, wears themselves out against it, and you draw a conclusion that seems obvious, opening up always brings complications. Except that conclusion was built by your own wall. You didn’t prove that opening up is dangerous, you replayed your old fear.',
      ],
      callouts: [
        { if: { repetition: 'forte' }, tone: 'note',
          text: 'You told us your relationships often end the same way, the other person complains they never really knew you. This is why. It isn’t that you keep meeting people who are too nosy. It’s that your wall turns normal curiosity into insistence, and insistence into proof that you were right to close.' },
      ],
    },

    {
      id: 'pourquoiComprendre', zone: 'free', type: 'prose',
      title: 'Why understanding it has never been enough',
      paras: [
        'You’ve surely understood already that you close off, and it changed nothing, because your mechanism doesn’t live in your head. It was written into your body before words, in the part of you that reacts, the part that clenches your jaw and turns you distant before you’ve even decided. The psychiatrist Bessel van der Kolk showed it, the body keeps the score of what the mind has forgotten, and that’s why you don’t lower a wall through reasoning.',
        'The next time you feel this closing reflex rise, when nothing serious is happening, when someone asks how you’re really doing and you feel the door lock, know that a surge has fired through your body. A tension, a cold, an urge to answer in a word or two and cut it off. It has a length, around ninety seconds, if you don’t feed it. The trouble is that you feed it by telling yourself you have nothing to say. So next time, don’t close right away. Stay, one hand on your belly, breathe, and let the wave pass for a minute and a half. You’ll discover that in the end you can say one true thing, small, with no danger, and that the wall wasn’t required. This tool is yours.',
      ],
    },

    {
      id: 'blindSpot', zone: 'free', type: 'prose',
      title: 'What You Don’t See',
      paras: [
        'You think the wall is neutral.',
        'That thought is the blind spot, and it hides in plain sight. From the inside, going quiet doesn’t register as doing anything. There was a tense conversation heading nowhere, you declined to escalate it, and if someone asked what exactly you did wrong in that moment, you’d genuinely have trouble answering, since as far as you can tell the answer is nothing. Which is accurate, in the narrow sense. The trouble lives in the wider one.',
        'Ask the person on the other side of your silence what it’s like, though, and the descriptions get strangely physical. A door they can hear locking. The temperature of a room dropping a few degrees while everyone keeps their coat on. Partners of people with your pattern also describe something slower and worse: they learn. Over a few years they work out which topics cost a week of static, which feelings are too expensive to bring to you, which questions send you to the garage. So they bring less. They ask at longer intervals, then rarely, then they handle it with someone else, or alone.',
        'Somewhere along the way you probably noticed things getting calmer, and filed the calm under progress.',
        'Here’s the mechanism, and it comes out of decades of lab work on couples rather than anyone’s opinion of you. Researchers call them bids, the dozens of small reaches people make toward each other in an ordinary day, a question about your afternoon, a hand on the shoulder, a “come look at this.” When bids get turned away, they don’t come back louder. They come back less often, until they stop. And the same research holds a finding you should sit with: relationships with your pattern in them rarely end in the explosion you keep braced for. They end quietly, on some unremarkable Tuesday, years after the bids dried up, when the other person closes a ledger you never knew was open. From where you’ll be standing it will look sudden. It won’t have been.',
        'That’s the untallied bill. You keep meticulous accounts of everything asked of you, and no accounts at all of what the exits have cost, because the wall itemizes what it blocks and stays silent about what it loses.',
        'There’s one more line on the bill, the oldest one. The self-reliance was supposed to keep you safe: need nobody, and nobody can pull the floor out from under you. Except a wall has no way of telling incoming harm from incoming care. It stops everything at the gate, indiscriminately, and year over year that produces a strange result for a defensive structure, which is that it empties the very thing it was guarding. Handling everything alone was a skill once. At some point it quietly became the whole landscape, and you’d be hard pressed to say when.',
        'Now the part your pattern won’t be expecting. Nobody here is proposing to tear the wall down. The steadiness is real, people lean on it, and no serious plan asks a Bastion to become a fountain. The plan installs a gate. One gate, keys on your side, and two trainable skills behind it: seeing the wall move in real time, and opening on purpose, now and then, for the people who are already inside the walls anyway.',
        'Take the helm back. The wall can stay. It just doesn’t get to steer anymore.',
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
          ['At work, you keep everything to yourself', 'you’re respected without being approached'],
          ['With yourself, you cut off access to what you feel', 'you end up alone behind your wall'],
        ],
      },
    },

    {
      id: 'debordementProse', zone: 'free', type: 'prose',
      paras: [
        'You don’t only close off in love. You keep a boundary with almost everyone. People respect you, find you reliable, and yet very few know what’s really going on inside you. And this loneliness behind the wall sometimes starts to weigh on you, even if you tell no one.',
      ],
      callouts: [
        { if: { statut: 'rupture' }, tone: 'note',
          text: 'And since the breakup, you may have kept an almost perfect dignity on the outside, while burying the pain behind control, without ever checking what’s really happening behind the wall.' },
        { if: { securite: 'vigilance' }, tone: 'care',
          text: 'A note, in passing. If right now you feel overwhelmed or in danger, this report is no substitute for a real human presence. Taking care of yourself can mean talking to someone you trust.' },
      ],
    },

    {
      id: 'aQuelPoint', zone: 'free', type: 'prose',
      title: 'How tightly it holds you today',
      lead: 'You’re at level {{ancre_position}}: “{{ancre_position_libelle}}”.',
      paras: {
        byPalier: {
          '0': [
            'You’re The Bastion, and you’ve learned to stay solid while letting people in. You feel the urge to close coming, and most of the time you choose to keep a door open. This report won’t teach you to see yourself, but to hold that new openness and to spot what could make you lock down again.',
          ],
          '1': [
            'You’re The Bastion, and you watch yourself close live. More and more, you manage to keep a crack open instead of locking down. It isn’t systematic yet. What’s left is to turn each rise of the wall into a choice to stay reachable, and to learn to say what you feel instead of hiding it behind facts.',
          ],
          '2': [
            'You watch yourself close. The moment the door locks, you know it. You know the other person doesn’t deserve this wall, and you close anyway. That lucidity that prevents nothing is a real pain, the pain of someone who’d like to let people in and whose body locks down on its own.',
            'You now know what’s happening to you, where it comes from, and why understanding it hasn’t switched it off. You have a first tool that works in the body. What comes next is your plan.',
          ],
          '3': [
            'You’re The Bastion, and you’re starting to see it. You recognize your closings, but on a delay, once the other person has already walked into the wall. It’s later that you realize you locked down again with no real danger. You have the lucidity, what you’re missing is the right moment.',
          ],
          '4': [
            'You’re The Bastion. If your relationships often end the same way, people probably call you out for being closed, distant, impossible to reach. From where you stand, it’s other people who are too intrusive, too curious, too demanding. You’re sometimes right. But I want to offer you another angle, gently. What if part of what keeps repeating also came from a very old habit of closing the door the moment someone gets close, without your seeing it?',
          ],
        },
        default: [
          'You’re at level {{ancre_position}}. It’s your Anchor position right now, the point your mechanism holds you from. It isn’t a sentence, it’s a position, and a position can be raised.',
        ],
      },
    },

    {
      id: 'ctaPlan', zone: 'free', type: 'cta',
      label: 'Take the helm back',
    },

    /* ===================== PAID ZONES ================================== */

    {
      id: 'visuel4', zone: 'paid', type: 'identityCard',
      title: 'Your plan, built on your exact position',
      visual: { n: 4 },
    },

    {
      id: 'deuxiemeMecanisme', zone: 'paid', type: 'prose',
      title: 'Your second mechanism',
      paras: [
        'Your Bastion doesn’t move alone. Right behind it sits {{pattern_secondaire}} ({{pattern_secondaire_score}}).',
        {
          bySecondaire: {
            alchimiste: 'You don’t only close the door, you replace it with an explanation. When the other person reaches for your emotion, you give them an analysis, a theory, a perspective, anything but what you feel. The wall takes the shape of intelligence. In your plan, we work on letting a raw emotion through before turning it into a concept.',
          },
          default: 'Whatever it is, it thickens the same wall, your way of closing off to protect yourself. Your plan starts by easing the door open, before working on this second mechanism.',
        },
      ],
    },

    {
      id: 'compatibilite', zone: 'paid', type: 'prose',
      title: 'Who it can actually work with',
      paras: [
        'No mechanism is made for another, and none is doomed with another. You can build something solid with any profile. What decides isn’t the other person’s label, it’s each person’s Anchor level.',
        'Two people aware of their mechanisms, even opposite ones, love each other without destroying each other. Two compatible but unaware profiles hurt each other. So don’t look at the other person’s mechanism, look at whether they can see it, talk about it, and repair after a fight.',
      ],
    },

    {
      id: 'visuel5', zone: 'paid', type: 'visual',
      visual: {
        kind: 'compatColumns', n: 5,
        columns: [
          { label: 'The ones who soothe you', tone: 'apaise',
            blurb: 'An integrated Runaway, a calmed Alchemist, someone with a high Harbor. What they share, they respect space and pace, they don’t force the door, they don’t take your silence for a rejection. Near them, you don’t need a wall, because nobody is trying to force their way in.',
            items: [{ code: 'fug', name: 'Integrated Runaway' }, { code: 'alc', name: 'Calmed Alchemist' }, { code: 'anc', name: 'High Harbor' }] },
          { label: 'The ones who understand you', tone: 'comprend',
            blurb: 'An integrated Watcher, an Alchemist or a Runaway on the way. They know from the inside the need to protect themselves, the fear of being reached. After that, everything depends on each person’s Anchor.',
            items: [{ code: 'gue', name: 'Integrated Watcher' }, { code: 'alc', name: 'Alchemist on the way' }, { code: 'fug', name: 'Runaway on the way' }] },
          { label: 'The ones who make you close', tone: 'declenche',
            blurb: 'A very active Arsonist, an intrusive Savior, a merging Mirror. They want to come in fast, hard, to know everything, share everything, and that’s exactly what sends your wall up. The more they push, the more you lock down. They aren’t bad people, they’re the riskiest dynamic for you as long as your Anchor is low.',
            items: [{ code: 'inc', name: 'Active Arsonist' }, { code: 'sau', name: 'Intrusive Savior' }, { code: 'mir', name: 'Merging Mirror' }] },
        ],
      },
    },

    {
      id: 'compatProse2', zone: 'paid', type: 'prose',
      paras: [
        'And there’s a scientific reason for your pull toward what doesn’t force your door. Hazan and Shaver showed, back in 1987, that adult love replays the attachment system of childhood. Your body recognizes the bond where you keep your boundary intact as familiar, and calls it safety. That’s why someone who sincerely wants to know you can feel threatening, when they may be the one with whom you could finally lower your guard.',
      ],
    },

    {
      id: 'catch', zone: 'paid', type: 'prose',
      title: 'The Wall Catch',
      lead: 'Catch the wall going up before it makes your decisions. Ten seconds.',
      paras: [
        'Somewhere in your week there’s a moment you’ve probably never clocked. Your partner starts a sentence with “we need to talk about”, or gets that look, or asks how you’re feeling about something, and before you’ve decided anything, something in you has already left the room. Maybe your body follows it out. Maybe you stay and answer in bullet points. Maybe you hear yourself say “I’m fine”, and here’s the strange part, you mean it.',
        'Your mechanism has a first domino too, it’s just quieter than most. What it feels like, mostly, is reasonableness. A sudden clarity that this conversation isn’t productive, that she’s making too much of it, that you’ll deal with this later when things are calmer. The wall never announces itself as a wall. It announces itself as a good point.',
        'The Wall Catch trains one narrow skill: noticing the wall at the moment it goes up, instead of three days later, or never.',
        'The moment you feel the pull to exit, and exit takes many shapes, changing the subject, reaching for your phone, going quiet, or the flat “I’m fine” that closes a topic like a drawer, you say one sentence to yourself:',
        '“That’s the wall, not a decision.”',
        'Then do whatever you were going to do anyway. Leave the room if you were leaving. On day one, the sentence is the entire job. Saying it means you saw the wall move, and a wall you can see is no longer making your choices for you while dressed up as your own judgment.',
        'Ten seconds. Nothing to feel, nothing to share, nobody watching.',
        'Here’s what the research says about your system, and it’s more interesting than the pop-psychology version. Attachment researchers call what you do deactivation: when closeness rises past a certain point, your nervous system creates distance to restore internal safety. It runs automatically, below the level where decisions get made, and by the time you could weigh in it’s already done. The kicker is what Gottman’s lab found when they wired people up during difficult conversations: the partners who looked the calmest, the stone faces, the subject changers, often had the highest heart rates in the room. So what looks like no reaction at all is, on the instruments, a large one being managed.',
        'Which means “I’m fine” can be perfectly sincere and completely wrong at the same time. Your dashboard says fine because the wall sits between you and the gauges.',
        'You can’t argue with a system that fast. What you can do is learn to see it move. Naming it, out loud or silently, is enough to shift it from pilot to co-pilot, and that shift is the entire first month.',
        { byPalier: {
          '1': 'At Snagged or Slipping, you already know the wall exists, which puts you ahead of most people who share your pattern. Your version of the catch is naming the shape it took: “that was the phone exit”, “that was the logistics pivot”. Precision is your native language. Use it on the mechanism for once.',
          '2': 'At Snagged or Slipping, you already know the wall exists, which puts you ahead of most people who share your pattern. Your version of the catch is naming the shape it took: “that was the phone exit”, “that was the logistics pivot”. Precision is your native language. Use it on the mechanism for once.',
          '4': 'At Buried, this page has a decent chance of reading as an accusation, especially if someone sent you this map rather than you buying it. Fair enough. So skip the live catch and run a colder experiment instead: for one week, keep a tally of exits. Every subject change, every “I’m fine”, every conversation postponed to a calmer day that never arrived. No interpretation, just the count. You’re a person who respects data. Get some.',
        }, default: '' },
      ],
    },

    {
      id: 'planIntro', zone: 'paid', type: 'prose',
      title: 'The 30-Day Plan',
      lead: 'From Hooked toward Snagged. One page a day.',
      paras: [
        'Let’s be precise about the promise, because you’d check it anyway. This plan moves you one position on the scale: from Hooked, where the mechanism runs your exits without consulting you, toward Snagged, where you see it happening in real time and choose what to do about it. Notice what’s not in there. Nobody is asking you to become expressive, or needy, or to narrate your feelings over breakfast. The move is from blind to sighted. What you do with sight stays entirely your call, that’s the deal this whole map is built on.',
        'A word if someone sent you this. Plenty of Bastions arrive here by forwarded link rather than by choice, usually from a partner who’s tried to say something for a while. You may be reading this out of fairness, or to be able to say you read it. That’s a fine reason. The plan doesn’t require belief to work, it requires reps, and you’re allowed to run it as a private experiment with a verdict you’ll render yourself on day 30.',
        'One house rule: no verdicts on yourself during the month. You keep a ledger, not a court. Data first, judgment on day 30 if you still want it.',
        { byPalier: {
          '0': 'Where to begin, for you. You already hold the helm most days, so treat this as maintenance. Skim it, and lean on the weeks where a page names something you’ve felt lately.',
          '1': 'Where to begin, for you. Slipping, you can jump to day 15. The first two weeks are audit and stay, and you already have most of that.',
          '2': 'Where to begin, for you. Snagged, you can start at day 8, though day 6 is worth a detour.',
          '3': 'Where to begin, for you. Hooked, start at day 1.',
          '4': 'Where to begin, for you. Buried, read the page called What You Don’t See first, then run week one only, at half speed, one entry every two days, and decide afterward whether to continue.',
        }, default: 'Where to begin, for you. Hooked, start at day 1. The plan is built around your position, so the default rhythm is yours.' },
      ],
    },

    {
      id: 'planWeek1', zone: 'paid', type: 'exercises',
      title: 'Week 1, Count the Exits',
      lead: 'You change nothing this week. You audit.',
      exercises: [
        { label: 'Day 1. The night ledger.', body: 'Tonight, write down one moment from today where you exited. Exits come in more shapes than people expect: the subject change, the “I’m fine”, the phone reached for mid-conversation, the sudden urgent task, the conversation postponed to a calmer day. Facts only, what happened just before, which exit you used, how long before you re-engaged, if you did. You’re not fixing anything. You’re doing what you’d do with any system you wanted to understand: logging its behavior.' },
        { label: 'Day 2. Find your exit family.', body: 'Most Bastions have a signature. Some exit through logistics (the conversation becomes a scheduling problem). Some through the screen. Some through the flat calm that ends discussions by starving them. Some physically, the room, the garage, the run. Look at yesterday’s entry and today’s moments and name your main family. A signature you can name is a signature you’ll spot at the door instead of in the driveway.' },
        { label: 'Day 3. Time the flood.', body: 'Here’s something worth measuring, because it contradicts the story you tell about yourself. Today, in one tense moment, put two fingers on your pulse, or glance at your watch if it tracks heart rate. Gottman’s lab found that the calmest-looking partners in a conflict were often running heart rates over a hundred, which is what a body does when it’s preparing for threat, whatever the face above it is doing. Write down what you find. If your “fine” turns out to have a pulse attached, that’s not a defeat. That’s your first honest gauge reading in a while.' },
        { label: 'Day 4. Count the asks.', body: 'A different tally today. Count the bids, every small reach the other person makes toward you: a question about your day, a hand on your shoulder, a “look at this”. Just count them. Don’t change how you respond yet. Most Bastions are running a precise ledger of what’s asked of them and no ledger at all of what’s offered. Today you open the second column.' },
        { label: 'Day 5. Catch one live.', body: 'First live attempt. Once today, at the moment the pull to exit arrives, say it: “That’s the wall, not a decision.” Then exit anyway if you want, today’s win is the catch, not the staying. There’s a version of you that will want to skip this because it feels like ceremony. Run it anyway. You test systems before you trust them, this is the test.' },
        { label: 'Day 6. Map the verdict.', body: 'The wall travels with a story, and for your profile the story usually arrives as a verdict: “she’s too sensitive”, “this is becoming a lot”, “maybe we want different things”. Tonight, write down your verdict word for word, the one that shows up mid-tension. Then note one thing about it: it always arrives during the flood, never before, never after. A verdict that only shows up when your heart rate is over a hundred is testimony from a compromised witness. Worth knowing which witness keeps taking the stand.' },
        { label: 'Day 7. Week one review.', body: 'Read your six entries and answer three questions. What’s my exit family? What does my body actually do while I look calm? What’s my recurring verdict? Nothing has changed yet, and nothing was supposed to. But you’ve spent a week reading gauges you’d stopped checking, and some of the readings were news. Systems you can’t see run you. This one is coming into view.' },
      ],
    },

    {
      id: 'planWeek2', zone: 'paid', type: 'exercises',
      title: 'Week 2, The 90-Second Stay',
      lead: 'This week you stay in the room 90 seconds past the pull.',
      exercises: [
        { label: 'Day 8. The first stay.', body: 'Once today, when the pull to exit arrives: say the sentence, then stay 90 seconds before doing anything. Stay in the room, in the conversation, in the discomfort. Ninety seconds is deliberately small, it’s not a negotiation about your autonomy, it’s a rep. When it’s over you’re free to leave, and here’s what most people at your position report: the urge at second 90 is smaller than at second 1. The flood peaks and starts draining faster than it claims it will. You’ll want to verify that yourself, so do.' },
        { label: 'Day 9. The stay with equipment.', body: 'Same rep, but with something for your body, because week one established that your body is the one flooding. Pick one and keep it: ten breaths, exhale twice as long as the inhale, or feet pressed into the floor, or one hand around something cold. The long exhale is the body’s own stand-down lever, and it works whether or not you believe in it, which should appeal to you.' },
        { label: 'Day 10. The bridge sentence.', body: 'Today you add six words to your kit, and for your profile they may be the most useful six words in this plan: “I’m not leaving. I need a minute.” Said out loud, at the moment of the pull, before any exit. Here’s why it matters: your silence has been getting translated on the other side, and the translation is always worse than what you meant. The bridge sentence does the translating for you. You still get your minute. The other person stops reading abandonment into it.' },
        { label: 'Day 11. The structured exit.', body: 'Some floods are too big for 90 seconds, and pretending otherwise would be bad engineering. So today you learn the legal exit: name the break and name the return. “I can’t do this well right now. Give me twenty minutes and I’ll come back.” Then, and this is the load-bearing part, come back at twenty minutes. Research on conflict breaks says they work only when the return is kept, otherwise they’re just exits with paperwork. Keep one today, even on a small conflict, even if you have to set a timer.' },
        { label: 'Day 12. Stay through one bid.', body: 'From day 4 you know what bids look like. Today, catch one, the “look at this”, the question about your day, and stay for it fully. Put the phone down, turn, give it thirty actual seconds. This will feel like nothing. It isn’t nothing. Longitudinal work on couples found that the ones who lasted were distinguished less by their grand gestures than by how often they turned toward exactly these small reaches. Nobody’s asking you to perform closeness here. Someone knocked, and for thirty seconds you answered the door.' },
        { label: 'Day 13. The stay on your worst trigger.', body: 'You know your exit family from day 2. Today you invite the rep to happen there. If your family is the flat calm, then in the next tense conversation your job is one honest sentence instead of the wall: “this is uncomfortable for me and I’m staying anyway” counts. If the whole thing collapses, log where. A failed stay on your hardest trigger is worth ten easy ones, and it counts as a completed day.' },
        { label: 'Day 14. Week two review.', body: 'Compare against day 3. Is the flood draining faster? Did the bridge sentence change anything on the other side? Most people notice the second effect before the first: the atmosphere shifts because the silence stopped being translated. Note what hasn’t changed too. The pull still arrives. It was never going to stop arriving, and it doesn’t have to; the job was only ever to take it off the helm.' },
      ],
    },

    {
      id: 'planWeek3', zone: 'paid', type: 'exercises',
      title: 'Week 3, Open the Gate',
      lead: 'A fortress with no gate isn’t strong, just sealed. This week you install one, and the keys stay on your side.',
      exercises: [
        { label: 'Day 15. Write what the wall protects.', body: 'Under the wall there’s something it was built to protect, and you’re the only one who knows what. For most Bastions it’s some version of never being seen struggling, or some old vow about never again being at anyone’s mercy. Tonight, write yours, one or two sentences, for no reader but you. This page never gets shared. You’re not softening anything. You’re labeling the load-bearing wall before doing any renovation, which is just competence.' },
        { label: 'Day 16. The translation table.', body: 'Take your verdict from day 6 and translate it into what’s actually happening. “She’s too sensitive” becomes “her volume overwhelms my system.” “This is becoming a lot” becomes “I’m flooded and I need a structured break.” Write two or three of these. Notice the translations are more accurate, not more sentimental. This week’s skill is saying true things at the moment you’d normally say nothing.' },
        { label: 'Day 17. Name one state out loud.', body: 'Once today, report one internal state to another human, in real time, in plain words. “I’m tired.” “That actually annoyed me.” “I liked today.” Dinner-sized, nothing structural. Your system has been running on the belief that reporting a state creates an obligation. Today’s experiment tests that belief with the smallest possible stake. Log what actually happened afterward, not what the wall predicted would happen.' },
        { label: 'Day 18. Say the mechanism, once.', body: 'With your partner, or whoever’s closest, name the wall one time, past tense, no promises attached: “The other night when I went quiet, that wasn’t me deciding anything. That’s a thing my system does under load. I’m working on catching it.” You’re not apologizing for having a nervous system here, you’re declassifying a document, and here’s what tends to happen: the other person has known about the wall for years. What they’ve never had is you naming it, and the naming changes what your next silence means to them.' },
        { label: 'Day 19. Answer the real ask.', body: 'Somewhere this week there’s been a real bid, bigger than “look at this.” An invitation to talk about the relationship, a hard question you tabled, a plan that got postponed. Today you answer it, on purpose, at a calm hour of your choosing. Prepared is allowed, you can even open with “I’ve been thinking about what you asked.” You get to bring your whole engineering mind. The only thing you don’t get to bring is the exit.' },
        { label: 'Day 20. Receive without deflecting.', body: 'The next time care comes at you, a compliment, a concern, a “how are you really”, you take it. No joke, no “I’m fine”, no redirecting to their week. Just “thanks, that’s good to hear” or an actual answer. Deflection has been your reflex for so long it feels like politeness. From the other side it reads as a returned package. Today one package gets signed for.' },
        { label: 'Day 21. The repair move.', body: 'If a wall went up on someone this week, a silence that lasted, an exit without a return, repair it today in one sentence: “I disappeared the other night. That was the wall, not a decision about you. I’m working on it.” One sentence, no essay. You may expect this to cost you standing. Watch closely what it actually costs and what it actually buys. Most Bastions report the exchange rate is nothing like what the wall quoted.' },
        { label: 'Day 22. Week three review.', body: 'Three questions on paper. Which cost more, the 90-second stay or the sentence said out loud? What happened when you named a state, versus what the wall predicted? Has anything you feared about opening the gate actually occurred? Then reread day 15, what the wall protects. Ask yourself the only strategic question that matters: has the wall been protecting it, or just guarding an empty room while the expensive things were carried out the front?' },
      ],
    },

    {
      id: 'planWeek4', zone: 'paid', type: 'exercises',
      title: 'Week 4, Hold the Position',
      lead: 'Snagged isn’t a place you visit. It’s a place you keep.',
      exercises: [
        { label: 'Day 23. Your minimum kit.', body: 'Three weeks of logs have told you which tools carry weight for you. Pick three. For most Bastions it lands near the sentence, the bridge (“I’m not leaving, I need a minute”), and the structured exit with a kept return. Put them on one card, paper or phone. From here on the card is the product. Everything else was scaffolding.' },
        { label: 'Day 24. The good-stretch trap.', body: 'A warning that applies to your profile with particular force: calm stretches are where this dies. Things get easy, the reps feel unnecessary, they quietly stop, and the next flood arrives against a body with no recent training. Worse, for a Bastion, calm stretches often mean the other person stopped asking, which reads as peace and is sometimes the opposite. So today, on an ordinary day, run one deliberate rep, a fake catch, a bridge sentence on a trivial moment. Fire drill. Two minutes.' },
        { label: 'Day 25. The relapse plan.', body: 'Write it now, while it’s calm: “When I go full wall again, and I will, I’ll name it within a day, run the repair sentence, and restart the night ledger for three days.” A relapse with a plan costs an evening. A relapse without one tends to cost more, not because of the wall itself, but because the silence about the wall starts compounding again, and you’ve seen that interest rate.' },
        { label: 'Day 26. Show one person the ledger.', body: 'Not the whole notebook. One finding, out loud, to your partner or a friend: “Turns out I look calm at a heart rate of 110. I’ve started staying in the room anyway.” You’ve done this month alone, which is very on-brand. This is the one step that can’t be done alone, because a position holds differently once somebody watched you take it.' },
        { label: 'Day 27. The wide-angle day.', body: 'Count a different cost today: what the exits have been buying and what they’ve been costing. The garage hours, the extra work trips, the conversations postponed to calmer days, they bought you regulation, that part was real. Spend today noticing the other column, the one the wall never itemizes. You’re good with ledgers. This one’s just been sitting unopened.' },
        { label: 'Day 28. Stress-test honestly.', body: 'On paper: if it happened tonight, the hard conversation, the tears, the “we need to talk”, what would run? If the honest answer is “I’d feel the pull, I’d probably say the bridge sentence, I might still need the twenty minutes”, then you’re at Snagged, and that’s the target, met. It was never going to look like enjoying the conversation. If the answer is “same as always”, find the week where your entries got thin and rerun it. Going around again isn’t failing the plan. It is the plan.' },
        { label: 'Day 29. Write the before-and-after.', body: 'One page. A real scene from before, the exit, the silence, the days of static afterward, and the same scene as you’d run it now, with the actual sentences. Keep it somewhere findable. On some future night the old verdict will show back up claiming nothing ever changes, and you’ll want the document that impeaches it.' },
        { label: 'Day 30. Retake the test.', body: 'Take the assessment again. Not for a grade, for a reading, this is an instrument, and you calibrate instruments. If the Anchor moved toward Snagged, the kit works: keep the card, drop the daily pages, rerun any week when the exits start multiplying again. If it didn’t move, your ledger shows exactly which week went thin. Either way, one thing has changed for good: a month ago the wall made your decisions and signed your name to them. Now you can tell the two signatures apart.' },
      ],
    },

    {
      id: 'acuteKit', zone: 'paid', type: 'prose',
      title: 'When the Room Gets Too Small',
      lead: 'The 90-second kit for the flood itself. Pocket card.',
      paras: [
        'She’s crying, or he’s asking the question again, or the conversation you postponed has cornered you on a Sunday afternoon. Something in your chest has gone tight and airless, the room feels smaller than it did five minutes ago, and every cell in you is voting for the door, the garage, the phone, the flat calm that ends things.',
        'That’s a flood. Floods are physiological, measurable events, and they happen to be the moment where your whole pattern gets decided. This card is for the middle of it.',
        'One, name it, three seconds. “That’s the wall, not a decision.” Silently is fine. You don’t need calm for this. You need to know where you are: you’re inside a flood, which means everything you’re about to conclude about this relationship is testimony from a compromised witness. No verdicts get signed in here.',
        'Two, answer the body, sixty seconds. Your heart rate is likely north of a hundred right now, whatever your face is doing. So work there first. One tool, always the same one: ten breaths with the exhale twice as long as the inhale, or both feet pressed hard into the floor, or a hand around something cold. Nobody’s asking you to calm down for the room. The job is getting the gauges back before you touch any controls.',
        'Three, say the bridge, five seconds. Out loud, before any exit: “I’m not leaving. I need a minute.” Six words. They cost almost nothing from inside the flood and they change everything on the other side of it, because your silence has always been translated over there, and the translation is always worse than what you meant. The bridge does the translating for you.',
        'Four, if ninety seconds isn’t enough, take the structured exit, twenty minutes, named. Some floods are too big, and forcing yourself to stay in one helps nobody. So take the legal exit: “I can’t do this well right now. Twenty minutes and I’ll come back.” Then the load-bearing part: come back at twenty. Set a timer, literally. An exit with a kept return is a break. An exit without one is the pattern, with paperwork.',
        'Five, come back and say one true thing, after. The return doesn’t need a speech. One honest sentence re-opens the room: “Okay. This is hard for me and I’m here.” You don’t have to resolve anything tonight. You have to demonstrate that the wall opens from the inside, and one sentence demonstrates it.',
        'No verdicts. The thoughts that arrive mid-flood, “she’s too much”, “maybe we’re not right for each other”, “I’m just not built for this”, feel like clarity and are actually cortisol. If a verdict is real it will still be true on Thursday, at a normal heart rate, and it can be examined then. Also, no silent exits: the disappearing act is the single most expensive move in your repertoire, whatever it feels like it’s saving.',
        { byPalier: {
          '4': 'At Buried, running all five moves is unrealistic, and pretending otherwise sets you up. Run moves 1 and 2 only, name it, breathe, and count that as a complete rep, because it is. The bridge sentence comes later, when the catch is faster. A partial kit used beats a full one in the drawer, in this domain and every other one you know.',
        }, default: '' },
        'Tomorrow, thirty seconds in the ledger: what cornered you, which moves ran, what verdict tried to get signed. That’s all. Every flood you log makes the next one more familiar, and familiar floods are smaller. The conversations won’t get much easier, if we’re honest. What grows is your capacity, and of the two, that was always the one you could engineer.',
      ],
    },

    {
      id: 'lectures', zone: 'paid', type: 'bookcards',
      title: 'Your Reading List',
      lead: 'A note before the titles, because your profile has a particular relationship with books like these: reading is the acceptable form of feeling, for a Bastion. It’s private, and nobody watches you do it. Which makes books both your best entry point and your favorite escape hatch. So the rule stands: one at a time, tier first, and the plan keeps running while you read. Understanding the wall from an armchair is pleasant. It has never once opened a gate.',
      books: {
        byPalier: {
          '0': [
            { title: 'Attached', author: 'Amir Levine and Rachel Heller', blurb: 'The standard map of the attachment system, written for civilians. At your position you’ve done most of the heavy work already; what this gives you is vocabulary, for yourself and especially for the people around you who read your quiet as distance. It’s also the book to hand to an anxious partner who wants to understand how your side of the dance works.' },
          ],
          '1': [
            { title: 'Attached', author: 'Amir Levine and Rachel Heller', blurb: 'The standard map of the attachment system, written for civilians. At your position you’ve done most of the heavy work already; what this gives you is vocabulary, for yourself and especially for the people around you who read your quiet as distance. It’s also the book to hand to an anxious partner who wants to understand how your side of the dance works.' },
          ],
          '2': [
            { title: 'Running on Empty', author: 'Jonice Webb', blurb: 'The single most recognizing book ever written for your pattern, and it’s not close. Webb’s subject is childhood emotional neglect, which is not about what was done to you but what quietly wasn’t, and her portrait of the adult who came out of it, competent and self-contained, vaguely puzzled by the weather other people make of their feelings, tends to land on Bastions like a photograph they don’t remember posing for. Read it first.' },
            { title: 'Permission to Feel', author: 'Marc Brackett', blurb: 'Read it second, and read it precisely because it isn’t soulful. Brackett runs an emotion research center at Yale and treats feelings the way you’d want them treated: as data, with an instrumentation problem. For a system like yours, where the gauges got disconnected early, a science-forward manual beats an inspirational one every time.' },
          ],
          '3': [
            { title: 'The Seven Principles for Making Marriage Work', author: 'John Gottman', blurb: 'If you read one book at this tier, this one, because it never once asks you to emote, it shows you data instead. Gottman watched thousands of couples in a lab and can predict divorce from a few minutes of tape; his chapters on bids, flooding, and stonewalling are, in effect, the technical documentation for your exits and their price. Bastions tend to trust this book because it earns it the way you’d want it earned: empirically.' },
            { title: 'Hold Me Tight', author: 'Dr. Sue Johnson', blurb: 'If you’re in a relationship, this one is designed to be read together, and its central reframe matters at your tier: the loop is a dance two nervous systems are caught in, not a defect one of you owns. And that reframe isn’t a courtesy extended to you, it’s what her research actually found, and it takes the trial out of a conversation you’ve been avoiding partly because it felt like one.' },
          ],
          '4': [
            { title: 'Adult Children of Emotionally Immature Parents', author: 'Lindsay C. Gibson', blurb: 'At Buried, the wall isn’t a habit, it’s the architecture, and architecture always has a builder. Gibson maps how a system like yours gets installed, without blame and without asking you to confront anyone or feel anything on a schedule. For a profile that arrived here by forwarded link more often than by choice, this is the gentlest serious book there is, and the one most likely to make the wall visible as a wall.' },
          ],
        },
        default: [
            { title: 'Running on Empty', author: 'Jonice Webb', blurb: 'The single most recognizing book ever written for your pattern, and it’s not close. Webb’s subject is childhood emotional neglect, which is not about what was done to you but what quietly wasn’t, and her portrait of the adult who came out of it, competent and self-contained, vaguely puzzled by the weather other people make of their feelings, tends to land on Bastions like a photograph they don’t remember posing for. Read it first.' },
        ],
      },
    },

    {
      id: 'lecturesWarning', zone: 'paid', type: 'prose',
      when: { if: { palier: 4 } },
      callouts: [
        { tone: 'care', text: 'One more thing at this tier, said plainly because you’d smell anything else: at Buried, a good therapist outperforms any book on this list, and going is not what your pattern thinks it is. You wouldn’t rebuild a foundation without a structural engineer. This is that, a specialist you hire, on your terms, for a defined job. Consultants, you understand.' },
      ],
    },

    {
      id: 'devenir', zone: 'paid', type: 'prose',
      title: 'What you become when you rise',
      paras: [
        'A Bastion who rises doesn’t lose their solidity. You keep your reliability, your calm loyalty, your rare ability to hold steady when everything shakes, your respect for boundaries, yours and other people’s. But you no longer use these qualities as a wall. You can stay solid and let people in, hold your limits without cutting off contact, say an emotion without feeling like you’re handing the other person a weapon.',
        'Be patient, the path is neither fast nor steady. You’ll close off again, especially when someone truly matters. That won’t be a failure, just the sign that you’re learning. And what will lift you isn’t understanding more, it’s living, over time, the experience that people can see inside you without using it against you. That happens with others, and it can be practiced. This week’s protocol is where you start.',
      ],
    },

    {
      id: 'etApres', zone: 'paid', type: 'prose',
      title: 'And after this',
      paras: [
        'This report is a snapshot of you today. Your Anchor isn’t fixed, it moves as you integrate your mechanism. The more you learn to feel the wall rise and to keep a crack open, the less it decides in your place, and the more you let the right people know you without their hitting your boundary.',
        'Each level has its own way of working. What you do at level {{ancre_position}} won’t be what you do at the level above. So come back, in a few weeks, take this test again. It’ll become your progress mirror. If your Anchor rises, you’ll know you’re letting people in where you’d once have closed. And if it lowers after a hard stretch, that’s useful information, not a setback. Either way, you have a compass.',
        'That’s the real difference between understanding your mechanism once, and moving it for good.',
      ],
    },

    {
      id: 'disclaimer', zone: 'paid', type: 'disclaimer',
      paras: [
        '8lovepatterns is a self-knowledge tool inspired by the science of attachment (Bowlby, Hazan & Shaver, van der Kolk). This report makes no diagnosis and is not a substitute for psychological care. If you’re going through something that puts you in danger, this report isn’t enough, and you deserve real support.',
      ],
    },

  ],
};

export default content;
