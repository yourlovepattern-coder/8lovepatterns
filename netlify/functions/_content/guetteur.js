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
      id: 'blindSpot', zone: 'free', type: 'prose',
      title: 'What You Don\u2019t See',
      paras: [
        'You think the scanning is invisible.',
        'That\u2019s the blind spot, and it\u2019s worth sitting with for a minute. From the inside, the checking and the rereading feel like something happening privately, in the sealed room of your own head, costing nobody anything. On good days it even feels like a form of love. You notice everything, you track the temperature of the relationship hour by hour, the way someone tends a fire so it never goes out. Who else pays attention like this?',
        'Except none of it is invisible, and it never was.',
        'The person you love feels watched. Maybe they couldn\u2019t name it, most partners can\u2019t, but they feel the small pause before you respond, the one where today\u2019s tone is being compared against yesterday\u2019s. They feel the questions that aren\u2019t questions, the "you seem quiet" that arrives as a probe wearing an observation\u2019s clothes. And somewhere along the way they learned, without ever deciding to, that a two-hour delay in replying has consequences. So they started replying on time, out of management rather than desire.',
        'Here is where the trap closes, and it is a well-made trap. A partner who is managing you gives you less signal, shorter answers, a flatter tone, more careful words, because careful is what your alarm has taught them to be. And less signal is exactly what your scanning equipment reads as danger. So the alarm fires more often, the scanning tightens another notch, the carefulness deepens, and around it goes.',
        'Your surveillance has been manufacturing the evidence it was built to find.',
        'You couldn\u2019t see this from the inside. Nobody at your position can, because from inside, the scanning still feels like the thing holding the relationship together, the night watch that keeps the ship safe. It has, in fact, been the slow leak. Nothing in your history has produced more of the distance you fear than the system you built to detect it.',
        'The way out is smaller than you\u2019d think, and you already own it. Not a personality transplant, one position. When the alarm fires into 90 seconds of space instead of an investigation, the other person gets room to stop being careful. People who stop being careful get warmer, and warmer signal means fewer alarms. Same loop, the exact same machinery, running in the other direction, on the same attention that used to feed the watch.',
        'There was never anything wrong with how much you pay attention. You\u2019re someone with an oversized smoke detector standing in a kitchen where, most nights, nothing is burning, wondering why everyone keeps edging toward the door.',
        'Take the helm back. The detector can stay. It just doesn\u2019t get to steer anymore.',
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
      title: 'Who it can actually work with',
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
      id: 'catch', zone: 'paid', type: 'prose',
      title: 'The Alarm Catch',
      lead: 'Catch the alarm before it becomes an investigation. 10 seconds.',
      paras: [
        'Somewhere in your evening there\u2019s a moment you know well. A reply that\u2019s taking longer than usual. A "sure" where there used to be a whole paragraph. And before you\u2019ve decided anything, you\u2019re already three messages deep in the thread, checking whether the punctuation changed this week.',
        'Your mechanism has a first domino, and it falls early. Most people at your position only notice the scanning once they\u2019ve been at it for twenty minutes, which is a bit like noticing you\u2019re driving once you\u2019re already on the highway. The Alarm Catch trains one narrow skill, noticing the alarm in the moment it fires instead of twenty minutes downstream.',
        'You won\u2019t be trying to stop the alarm. Nobody manages that, and the people who try usually end up with a louder one. You\u2019re learning to see it go off. That\u2019s all, and it turns out to be almost everything.',
        'Here is the whole gesture. The moment you feel the pull to check, reread, or decode, you say one sentence to yourself, silently.',
        'That\u2019s the alarm, not the evidence.',
        'Then you do whatever you were going to do anyway. You read that right. On day one, you can say the sentence and still check the phone. Saying it is the win, because saying it means you caught the alarm firing, and an alarm you can see is no longer running the whole ship by itself. Ten seconds, no calm required. You can be furious, scared, mid-spiral, and the sentence works anyway, because it doesn\u2019t ask you to feel anything different first.',
        'Your scanning system is a threat detector, and threat detectors are built for speed, which means they fire before the thinking part of you gets a vote. That is not a design flaw, it kept small humans alive for a long time. The trouble is calibration. Research going back to Hazan and Shaver in the 1980s shows the adult attachment system runs on settings installed long before your current relationship, so the alarm\u2019s volume rarely matches the situation actually in front of you.',
        'You can\u2019t out-argue a smoke detector, but you can learn its sound. Psychologists call the sentence trick affect labeling, and it has been studied, putting a name on what is happening in you measurably turns down the amygdala\u2019s response. Naming the alarm doesn\u2019t silence it. It moves it from the driver\u2019s seat to the passenger seat, which is a different life.',
        { byPalier: {
          '0': 'At your position you already catch most of these in the moment. Your version is lighter, closer to a nod at an old acquaintance. You see the alarm, you almost smile, and your hands stay where they were.',
          '1': 'You already catch most of these in the moment. Your version is lighter, closer to a nod at an old acquaintance. You see the alarm, you almost smile, and your hands stay where they were.',
          '2': 'This live version is built for exactly your position. Say the sentence the instant the pull arrives, then let yourself do whatever you were going to do anyway. The catch itself is the whole win this month.',
          '3': 'There is a catch, so to speak, the alarm doesn\u2019t feel like an alarm yet, it feels like the truth. So skip the live version for now and do it in hindsight. Once a day, in the evening, write down one moment where you checked, reread, or decoded. Same muscle, trained on yesterday\u2019s film. The live catch shows up on its own when hindsight gets fast enough, and it does get fast.',
          '4': 'At your position the alarm doesn\u2019t feel like an alarm yet, it feels like the truth, so don\u2019t chase the live catch. Do it in hindsight, once a day, in the evening, writing down one moment where you checked, reread, or decoded. Same muscle, trained on yesterday\u2019s film. The live catch arrives on its own once hindsight gets fast enough, and it does.',
        } },
      ],
    },

    {
      id: 'planIntro', zone: 'paid', type: 'prose',
      title: 'The 30-Day Plan',
      lead: 'From Snagged toward Slipping. One page a day.',
      paras: [
        'Before anything else, choose who you\u2019re being for the next thirty days. Not the fixer, not the judge, the observer. The one who watches closely and names what they see, who catches the small detail that turns out to be the whole thing. You already own the equipment for this, it\u2019s the same attention that runs the alarm, pointed somewhere useful for once. Change starts the moment you can put your finger on exactly what\u2019s happening, so week one asks nothing of you but to see it clearly. The doing comes later, and it comes easier once the seeing is sharp.',
        'A word on the promise, because it\u2019s a modest one on purpose. This plan moves you one position on the scale, from Snagged, where you see the loop and run it anyway, toward Slipping, where the loop still fires but you hold the helm more often than it holds you. No new personality, no cure, one position. People underestimate what one position feels like from the inside. The fights that used to open with an investigation stop opening, and that alone changes the weather in a house.',
        'One rule for the month. A failed day is never punished. A failed day observed is data, and data is the whole reason you\u2019re here. A failed day judged turns into fuel, and the loop runs on exactly that fuel, so you starve it by staying curious about yourself instead of hard on yourself.',
        { byPalier: {
          '0': 'Where to begin, for you. You already hold the helm most days, so read this as maintenance. Jump to week three and use the earlier weeks only where a page names something you\u2019ve felt slip lately.',
          '1': 'Where to begin, for you. You catch most alarms in the moment already, so the first two weeks are largely yours. Skim them, then start properly at day 15, where the work moves from seeing to asking.',
          '2': 'Where to begin, for you. Start at day 1 and keep the written pace. The plan is built around exactly your position, seeing the loop clearly and running it anyway, so the default rhythm is yours.',
          '3': 'Where to begin, for you. Spend a full week on the night review alone, day 1 repeated seven times, before you move on. Your catch has to exist in hindsight before it can exist live, and rushing that only builds the later weeks on sand.',
          '4': 'Where to begin, for you. Read the What You Don\u2019t See page first, because until you have, this plan will read like an accusation. Then run week one at half speed, one review every two days. The alarm still feels like the truth at your position, and the whole month is about it slowly starting to feel like an alarm instead.',
        } },
      ],
    },
    {
      id: 'planWeek1', zone: 'paid', type: 'exercises',
      title: 'Week 1, See the Alarm',
      lead: 'You change nothing this week. You watch the machine run and learn its parts, the trigger, the timing, the story it tells. Seeing it clearly is the whole job, and everything later is built on it.',
      exercises: [
        { label: 'Day 1. The night review.', body: 'Tonight, before bed, write down one moment from today where you scanned. Checked a phone, reread a message, replayed a tone in your head, did the math on how long a reply took. Facts only, what set it off, what you did, roughly how long it lasted. If judgment shows up on the page, cross it out. You\u2019re not fixing anything yet. You\u2019re turning the lights on in a room that has been running in the dark for years.' },
        { label: 'Day 2. Find your trigger family.', body: 'Most Watchers have one dominant family of triggers. Silence is one, no reply, no call. Brevity is another, short answers, "ok", the dreaded "sure". Change is the third, a shifted tone, a broken routine. Look at yesterday\u2019s note and today\u2019s moments and ask which family owns you. Knowing it matters more than it seems, because an alarm you can see coming a street away is already half caught.' },
        { label: 'Day 3. Time the alarm.', body: 'Today, when it fires, glance at the clock. Glance again when the urge fades. Most people at your position have never actually measured this, and the result tends to surprise them, the raw wave is short, a few minutes, often less. What makes it feel endless is the refeeding, because every reread is another log on the fire. Tonight, write down what you found. One honest measurement beats a month of impressions.' },
        { label: 'Day 4. Count the checks.', body: 'A tally today, nothing fancier. Every check, reread, or decode gets a mark on your phone or a scrap of paper. No target and no ceiling, this is not a diet. Fair warning, Watchers usually guess a number beforehand and land on double. The point is not to feel bad about it. The point is that you cannot take back a helm you cannot see, and today you\u2019re counting hands on the wheel.' },
        { label: 'Day 5. Catch one live.', body: 'First live attempt. Once today, at the exact moment your hand drifts toward the phone or your mind toward the replay, say it, that\u2019s the alarm, not the evidence. Then, and this matters, do whatever you were going to do anyway. Check if you want to check. Today\u2019s win is the catch itself, not the resistance. Resistance without the catch is white-knuckling, the catch without resistance is progress.' },
        { label: 'Day 6. Map the story.', body: 'The alarm never travels alone, it brings a story, and it is usually one from a very small repertoire, they\u2019re pulling away, they met someone, I did something and I don\u2019t know what. Tonight, write yours down word for word, the way it actually plays in your head. People are often a little embarrassed to discover their alarm has been running the same two sentences for fifteen years. Your alarm is not creative, it is a rerun, and reruns lose their grip once you can recite them.' },
        { label: 'Day 7. Week one review.', body: 'Read your six notes and answer three questions on paper. What is my trigger family? How long is my raw wave, unfed? What is my rerun story? Sit with the fact that you now know more about your own machine than most people ever learn about theirs. Nothing has moved yet, and that is on purpose. You cannot steer a ship you have never looked at, and you\u2019ve spent a week looking.' },
      ],
    },
    {
      id: 'planWeek2', zone: 'paid', type: 'exercises',
      title: 'Week 2, The 90-Second Space',
      lead: 'This week you build one thing, a gap between the alarm and the investigation. Ninety seconds of space, held on purpose, is the hinge the whole month turns on.',
      exercises: [
        { label: 'Day 8. The first 90.', body: 'Once today, when the alarm fires, say the sentence, then wait 90 seconds before acting on it. Set a timer, seriously, guessing at time mid-spiral does not work. These do not need to be serene seconds, white-knuckle seconds count double. When the timer ends, you\u2019re free to check, reread, decode, whatever you were going to do. What most people notice is that the urge at second 90 is smaller than the urge at second 1. Not gone, smaller. Hold onto that difference, the whole month is built on it.' },
        { label: 'Day 9. The 90 with your hands busy.', body: 'Same gesture, but fill the gap this time. Pick one and stick with it, ten breaths where the exhale runs twice as long as the inhale, cold water on your wrists and the back of your neck, or walking to another room and pressing your feet into the floor. The long exhale is not a wellness accessory, it is a direct line to the part of your nervous system that stands the body down. You\u2019re teaching your body something it does not know yet, that the alarm can ring without the whole crew going to battle stations.' },
        { label: 'Day 10. Two catches.', body: 'Two 90-second spaces today. Tonight, a short note, which was harder, the first or the second, and what story the alarm told each time. You already know it will be the same story. Seeing it twice in one day, in your own handwriting, does something that merely knowing it does not.' },
        { label: 'Day 11. The draft rule.', body: 'New rule for anything typed inside an alarm, write whatever you want, send nothing for 90 seconds. Draft all seven texts if the evening calls for it. At second 91, reread them with one question, would I say this across a dinner table? Keep what passes, delete the rest. A week of this and you\u2019ll reach the conclusion every Watcher reaches, that the alarm is a terrible writer. Sincere, committed, prolific, and terrible.' },
        { label: 'Day 12. The refresh fast.', body: 'Choose a two-hour window today, and the choosing matters, it has to be a window you picked, not one the silence imposed on you. For those two hours, the messaging apps stay shut. Each time the urge knocks, note the time, let it pass. You\u2019re not performing indifference for anyone. You\u2019re giving your nervous system a piece of evidence it can only get one way, two hours of not-knowing, survived. It will not believe the theory, it believes reps.' },
        { label: 'Day 13. The 90 on your worst trigger.', body: 'You\u2019ve known your trigger family since day 2. Today you take the gesture there on purpose. If silence owns you, the next unanswered stretch gets the full sequence, sentence, timer, long exhales. This is the deep end, and it is fine to sink a little. If it collapses, write down where it collapsed, without commentary. One failed attempt on your hardest trigger teaches more than ten wins on easy ones, and it counts as a completed day.' },
        { label: 'Day 14. Week two review.', body: 'Pull out day 3\u2019s measurements and compare. Shorter wave? Smaller urge at second 90? For most people the honest answer at this point is somewhat, and somewhat is exactly on schedule. Notice what has not changed too, the alarm still fires. It was never the target. The investigation was, and the investigation is losing altitude.' },
      ],
    },
    {
      id: 'planWeek3', zone: 'paid', type: 'exercises',
      title: 'Week 3, Ask Instead of Investigate',
      lead: 'Scanning is a way of asking a question without taking the risk of asking it out loud. This week you take the risk, and trade the silent investigation for a plain question.',
      exercises: [
        { label: 'Day 15. Write the real question.', body: 'Under every investigation you have ever run, there has been one question you were not asking out loud. For most Watchers it is some version of are we okay, or are you still in this with me. Tonight, write yours, in your own words, exactly as you would say it if saying it were free. Do not send it anywhere, just look at it. There is something quietly absurd about it, years of forensic work to avoid a question that fits in four words.' },
        { label: 'Day 16. The translation table.', body: 'Take the rerun story from day 6 and translate it into something a person could actually say. They\u2019re pulling away becomes I\u2019ve felt some distance this week and wanted to check in. I did something wrong becomes is there something between us I should know about. Two or three translations, written down. This week\u2019s skill is turning surveillance into speech, and speech, like everything else this month, starts on paper.' },
        { label: 'Day 17. The small ask.', body: 'Ask one small, direct thing today that you would normally decode instead. Dinner-sized, nothing structural, do you feel like doing something this weekend, rather than three days of reading their energy. Watch yourself as you do it. There is usually an urge to wrap the question in padding, a joke, an escape hatch, an it\u2019s fine if not, whatever. Send it plain. Plain questions get plain answers, and plain answers are the thing your alarm has never had to work with.' },
        { label: 'Day 18. Say the alarm out loud, once.', body: 'With your partner, or whoever is closest, name the mechanism one time. Past tense, no request attached, yesterday when the reply took a while, my alarm went off, I handled it, I just wanted you to know it exists. Then change the subject if you like. Two things happen. The mechanism comes out of the shadows, where it does its best work. And you learn, by direct experiment, that naming it detonates nothing.' },
        { label: 'Day 19. The real question, asked.', body: 'Today or tomorrow, when a genuine alarm fires, you skip the entire investigation and ask the day 15 question instead. Calm moment, daylight hours, not mid-spiral. Are we okay, I\u2019ve felt a bit off since Tuesday. Then the genuinely hard part, let the answer be the answer. No cross-examining their tone while they reassure you, no appeal process. One question, one answer, court adjourned.' },
        { label: 'Day 20. Receive without re-checking.', body: 'The next reassurance that comes your way gets new treatment, you take it. When the alarm leans in with they only said that to calm you down, you know the sentence by now. Here is the thing about reassurance that took researchers a while to say plainly, it only works if it is allowed to land. Asked for and then discounted, it actually feeds the loop. Today you practice landing.' },
        { label: 'Day 21. The repair move.', body: 'If an investigation escaped this week, a barrage of questions or a pointed silence, repair it today, in one sentence, that wasn\u2019t about you, that was my alarm, and it\u2019s mine to handle. No essay, no self-flagellation, both of those are the loop wearing a costume. Watchers tend to fear that admitting the mechanism makes them look weak. In practice it is the strongest sentence in this plan, because it shows the helm back in your hands after a wave, which is the only place strength ever shows.' },
        { label: 'Day 22. Week three review.', body: 'Three questions, on paper. Which cost more, the 90 seconds or the direct question? What actually happened when you asked instead of investigated? Did anything you feared come true? Then reread your day 15 question. It has probably shrunk. Questions do that when they stop living in the dark.' },
      ],
    },
    {
      id: 'planWeek4', zone: 'paid', type: 'exercises',
      title: 'Week 4, Hold the New Position',
      lead: 'Slipping is not a place you visit once, it is a place you learn to keep. This week is about holding the new position when the calm makes you want to stop practicing.',
      exercises: [
        { label: 'Day 23. Your minimum kit.', body: 'Three weeks of notes have already told you which tools are yours. Pick three. For most Watchers it ends up being some version of the sentence, the 90 with long exhales, and the draft rule, but yours is yours. Write them on one card, paper or phone. From here on, this card is the product. Everything else was scaffolding.' },
        { label: 'Day 24. The good-day trap.', body: 'A warning that will sound strange, calm stretches are where this work usually dies. Things feel secure, the practice feels unnecessary, it quietly stops, and the next alarm arrives against a body that has had no reps in three weeks. So today, on what is hopefully an ordinary day, run the full gesture once on a fake alarm. Deliberately, like a fire drill. Two minutes. Athletes do not only train during matches, and neither do you now.' },
        { label: 'Day 25. The relapse plan.', body: 'Write it now, while you are steady, because you will not write it mid-relapse. Something like, when I fall back into a full investigation, I will name it within a day, run the repair move, and restart the night review for three days. That is it. A relapse with a plan costs an evening. A relapse without one costs the month, and not because of the spiral itself, but because of the judgment spiral that moves in afterward and redecorates.' },
        { label: 'Day 26. Tell someone what changed.', body: 'One person, one concrete thing, I don\u2019t reread whole threads for an hour anymore, most of the time I catch it now. Out loud, to a partner or a friend. The notebook has done a lot for you this month, but there is something it cannot do, make the new position part of your story in the world. Positions hold better when somebody watched you take them.' },
        { label: 'Day 27. The wide-angle day.', body: 'Here is a cost you probably never invoiced, attention. All those hours of decoding went somewhere, and now some of them are coming back with nowhere to go. Spend today pointing them somewhere on purpose. At the actual person in front of you, ideally, rather than at your model of them. The mechanism was not just painful, it was expensive, and today you get to spend a little of the refund.' },
        { label: 'Day 28. Stress-test honestly.', body: 'On paper, honestly, if the real thing hit tonight, a seen-with-no-reply at midnight, what would happen? If your answer is some version of I\u2019d probably spiral, and I\u2019d catch it by morning, congratulations, that is Slipping, that is the target, that is what it looks like. It was never going to look like serenity. If your answer is nothing has changed, go back through your week reviews, find where the notes got thin, and redo that week. The plan is a loop, not a corridor, and going around again is not failing it.' },
        { label: 'Day 29. Write the before-and-after.', body: 'One page. A real scene from before this month, told straight, and then the same scene as you would run it today. Specific, yours, with the actual words. Keep this page somewhere you can find it, because on some future bad night the alarm is going to tell you nothing ever changes. The alarm, as established, is a rerun. This page is the receipt that says otherwise.' },
        { label: 'Day 30. Retake the test.', body: 'Take the assessment again, today or this week. Not for a grade, for a reading. If the Anchor moved toward Slipping, the kit works, keep the card, drop the daily pages, and rerun any single week whenever the alarm gets loud again, which it sometimes will. If it did not move, your own notes will show you which week to redo, and that is not a verdict, it is a map doing its job. Either way, something has permanently changed this month, you\u2019re no longer guessing where you stand.' },
      ],
    },

    {
      id: 'acuteKit', zone: 'paid', type: 'prose',
      title: 'When the Surge Hits',
      lead: 'The 90-second kit for the moment itself. Pocket card.',
      paras: [
        'It\u2019s 11:47 on a Tuesday night. The message says seen. Nothing since. You\u2019ve read the thread twice already and your thumb is hovering over a third pass, and somewhere in your chest a familiar weight has settled in like it pays rent. This card isn\u2019t for reflection or growth or understanding your childhood. It is for right now, for the wave, while it is breaking.',
        'One, name it, three seconds. That\u2019s the alarm, not the evidence. Out loud if nobody is around. This isn\u2019t a magic phrase, it is a location device, naming what is happening measurably turns the volume down, and more to the point it tells you where you are, which is inside a wave rather than inside a fact.',
        'Two, answer the body first, about sixty seconds. The alarm lives in your body before it reaches your thoughts, so that is where you meet it. Pick one move and pick the same one every time, so eventually your body runs it without being asked. Ten breaths with the exhale twice as long as the inhale, the long exhale being the body\u2019s own stand-down signal that you are pressing on purpose. Or cold water on your wrists and the back of your neck. Or stand up, press your feet into the floor, and count to twenty.',
        'Three, park the phone, five seconds. Face down, other room if you can manage it. Ninety seconds, not forever, and not as a statement to anyone. A wave you don\u2019t refeed dies on its own, quite a bit faster than the alarm claims it will. You\u2019ve timed this yourself by now, so trust your own measurement over the alarm\u2019s forecast.',
        'Four, if words are boiling, the draft rule. Write everything, all of it, uncensored, all seven drafts, and send nothing until the timer is done. At second 91, one question per draft, would I say this across a dinner table? Keep what passes. The rest was the alarm writing, and the alarm, as you have established this month, is a terrible writer.',
        'Five, choose with the helm in hand, after the 90. Now decide, actually decide, check, don\u2019t check, save the direct question for tomorrow at a decent hour, or go to sleep. Any of those is a fine choice. The win was never which one you picked. The win is that a person made the choice, instead of a mechanism making it for them.',
        'What not to do at midnight. No big conversations inside the wave, no "we need to talk". No tests or bait, no strategic silence to see if they notice. And keep the direct question in its holster, it is a daylight tool. Asked calm, it opens something. Asked at 11:47 mid-surge, it arrives dressed as an accusation whatever words it is wearing, and it feeds precisely the distance you are afraid of.',
        'Tomorrow, thirty seconds in your notes. What set it off, which moves you managed, what story the alarm told. Not to grade yourself, there are no grades here. Every wave you log makes the next one more familiar, and familiar waves are smaller ones. The sea isn\u2019t calming down, you are becoming a better sailor, which was always the more reliable of the two.',
        { byPalier: {
          '0': 'At your position the full sequence mostly holds, and you often stop the wave at move one or two. Keep the card for the nights a sign lands on someone who really matters.',
          '1': 'You will usually get through the sequence now. The card is here for the harder nights, when the surge moves faster than you and you need the moves in order.',
          '2': 'This is your card, run the full sequence. Some nights you catch it at move one, other nights you are mid-draft before you remember the card exists, and you use it from wherever you are.',
          '3': 'The full sequence probably won\u2019t hold on your first waves, and expecting it to is a setup. Run moves one and two, and call that a complete rep, because it is. The rest of the card unlocks as the catch speeds up.',
          '4': 'Run moves one and two only, and count that as a complete rep. A partial kit you actually use is worth far more than a complete kit in a drawer. The rest unlocks later, on its own, as the catch speeds up.',
        } },
      ],
    },

    {
      id: 'lectures', zone: 'paid', type: 'bookcards',
      title: 'Your Reading List',
      lead: 'A book meets you where you are or it bounces off, and attachment books bounce hard. So this list is sorted by your position on the scale, not by fame. Start at your tier, one book at a time, and keep the plan running while you read, because reading about the mechanism has a long history of quietly replacing work on it. The plan does the moving. The books explain the map.',
      books: {
        byPalier: {
          '0': [
            { title: 'Attached', author: 'Amir Levine and Rachel Heller', blurb: 'Still the clearest map of the anxious system anyone has drawn for a general reader. At your position you don\u2019t need rescuing, you need vocabulary, and this supplies the words for what you\u2019ve already half-tamed. It is also the book to hand to the people in your life who have never understood your alarm.' },
          ],
          '1': [
            { title: 'Attached', author: 'Amir Levine and Rachel Heller', blurb: 'Still the clearest map of the anxious system anyone has drawn for a general reader. At your position you don\u2019t need rescuing, you need vocabulary, and this supplies the words for what you\u2019ve already half-tamed. It is also the book to hand to the people in your life who have never understood your alarm.' },
            { title: 'Insecure in Love', author: 'Leslie Becker-Phelps', blurb: 'Read this if you want to firm up the two weeks that are already yours. Her tool, compassionate self-awareness, keeps the catch from ever hardening back into an investigation.' },
          ],
          '2': [
            { title: 'Insecure in Love', author: 'Leslie Becker-Phelps', blurb: 'Written for your exact position, the strange one where you see the pattern with perfect clarity and run it anyway. Her central tool, compassionate self-awareness, is the missing bridge between knowing and moving, and it plugs straight into your week one work. If you read one book this month, this is it.' },
            { title: 'Anxiously Attached', author: 'Jessica Baum', blurb: 'Read it second. Where Becker-Phelps works on the daily mechanism, Baum digs under it, at what she calls the inner foundation, so the reassurance you need stops having to arrive from outside, on demand, at midnight.' },
          ],
          '3': [
            { title: 'Self-Compassion', author: 'Kristin Neff', blurb: 'Not an attachment book, and that is deliberate. At your position the judgment spiral after each episode does more damage than the episode itself, and no mechanism work holds while you are at war with yourself for having a mechanism. Pour this ground floor before you build anything on top.' },
            { title: 'Hold Me Tight', author: 'Sue Johnson', blurb: 'If you are in a relationship, read this one together. Johnson spent her career showing the loop is a dance two people are caught in rather than a defect one person owns, and at your position that reframe is often what makes the work feel possible instead of accusatory.' },
          ],
          '4': [
            { title: 'Adult Children of Emotionally Immature Parents', author: 'Lindsay C. Gibson', blurb: 'At your position the alarm is not a habit anymore, it is the water you swim in, and water like that usually has an address somewhere in the past. Gibson maps how an alarm like yours gets installed, without blame, and without asking you to confront anyone or reopen anything before you are ready.' },
            { title: 'The Body Keeps the Score', author: 'Bessel van der Kolk', blurb: 'Read it second, and slowly. It explains why your body reacts before your mind gets a vote, and why the body-first tools in your kit, the long exhale, the cold water, the feet on the floor, are not decorations. One honest warning, it is a heavy book with difficult passages, and if it stirs more than it settles, put it down and consider bringing a professional into your corner. At this depth that isn\u2019t the plan failing, it is the strongest move on the board.' },
          ],
        },
        default: [
          { title: 'Insecure in Love', author: 'Leslie Becker-Phelps', blurb: 'Written for the position where you see the pattern with perfect clarity and run it anyway. Her tool, compassionate self-awareness, is the bridge between knowing and moving.' },
          { title: 'Anxiously Attached', author: 'Jessica Baum', blurb: 'Digs under the daily mechanism, at the inner foundation, so the reassurance you need stops having to arrive from outside, at midnight.' },
          { title: 'Attached', author: 'Amir Levine and Rachel Heller', blurb: 'The clearest general map of the anxious system, and the book to hand to people who have never understood your alarm.' },
        ],
      },
    },

    {
      id: 'devenir', zone: 'paid', type: 'prose',
      title: 'What you become when you rise',
      paras: [
        'A Watcher who rises doesn\u2019t lose their lucidity. You keep your sensitivity to inconsistencies, your sharp memory, your rare ability to sense what\u2019s unsaid, your need for truth. But you no longer use them like a surveillance camera trained on the other person. You can notice without investigating, ask without accusing, trust without dropping your whole guard. Your vigilance becomes a radar you switch on when needed, instead of an alarm that screams nonstop.',
        'Be patient, the path is neither fast nor steady. You\u2019ll set off investigating again, especially when someone truly matters. That won\u2019t be a failure, just the sign that you\u2019re learning. And what will lift you isn\u2019t understanding more, it\u2019s living, over time, the experience that a bond can be safe without your watching it. That happens with others, and it can be practiced. Your plan is where you start.',
      ],
    },

    {
      id: 'etApres', zone: 'paid', type: 'prose',
      title: 'And after this',
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
