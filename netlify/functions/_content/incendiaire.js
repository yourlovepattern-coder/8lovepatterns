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
      id: 'blindSpot', zone: 'free', type: 'prose',
      title: 'What You Don\u2019t See',
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
        'Your Arsonist doesn\u2019t move alone. Right behind it sits {{pattern_secondaire}} ({{pattern_secondaire_score}}), and until you see the two of them together, you risk fighting the wrong fire.',
        {
          bySecondaire: {
            guetteur: 'You don\u2019t only provoke, you also watch for the signs before you do. You scan for the coolness, you stack up the small evidence of disinterest, and then you light the fire to confirm what you already decided you\u2019d find. In your plan, we calm the watching that loads the match first, before working on the striking that lights it.',
          },
          default: 'Whatever it is, it feeds the same fear of not mattering, your way of wrenching the proof of love out through intensity. Your plan starts by letting the fire settle, before we touch this second mechanism.',
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
            blurb: 'Someone with a high Harbor, an integrated Bastion, a calmed Alchemist. What they share, they\u2019re steady and they don\u2019t take the bait of the provocation, they stay present without flaring up or shutting down. Near them, your test falls flat, and that\u2019s exactly what you need, a calm that doesn\u2019t turn into abandonment.',
            items: [{ code: 'anc', name: 'High Harbor' }, { code: 'bas', name: 'Integrated Bastion' }, { code: 'alc', name: 'Calmed Alchemist' }] },
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
      id: 'catch', zone: 'paid', type: 'prose',
      title: 'The Arsonist Catch',
      lead: 'Catch the spark before it becomes a strike. Ten seconds.',
      paras: [
        'Somewhere in an ordinary evening there\u2019s a moment you know by heart. A reply lands a little flat. A room that felt warm an hour ago goes quiet in a way that reads as being left. And before you\u2019ve decided anything, the first jab is already loading, the one that will make them look up and react and prove they\u2019re still here.',
        'Your mechanism has a first move, and it happens fast, well before the fight it becomes. Most people at your position only catch it once the match is already thrown and the other person is either flaring up or going cold. The Arsonist Catch trains one narrow skill, feeling the spark in the second it lights, instead of ten minutes later in the wreckage.',
        'You won\u2019t be trying to kill the spark. The heat that rises in you when you feel forgotten is old and quick, and people who try to shut it off by force usually end up striking harder. You\u2019re learning to see it light. That turns out to be almost everything.',
        'What you\u2019re feeling has a name in the research, and it helps to know it. Attachment scientists call the testing, the threatening to leave, the picking of a fight to force a response, protest behavior. The word goes back to Bowlby, who used it for something much older and much smaller, the cry of a young child when a parent walks out of the room. That cry was a call for someone to come back, the only tool a small person had, and most of the time it worked. Yours is the grown version of the same call, still checking you haven\u2019t been forgotten, still reaching for the loudest tool in the box.',
        'Here is the whole gesture. The moment the heat rises and your hand goes looking for the match, a sharp word, a threat to walk out, a test you already know the shape of, you say one sentence to yourself, silently.',
        'That\u2019s the spark, not the truth.',
        'Then you do whatever you were going to do anyway. You read that right. On day one you can say the sentence and still throw the jab. Saying it is the win, because saying it means you caught the spark in the act, and a spark you can see is no longer lighting the whole room on its own. Ten seconds, and it works while you\u2019re furious, because it doesn\u2019t ask you to stop being furious first.',
        'The spark is a threat detector wired for one danger above all others, being forgotten, and detectors like that fire early and loud, long before the thinking part of you gets a vote. Putting a name on what\u2019s happening, even under your breath, has been shown to loosen its grip on you measurably. The heat stays. What changes is who\u2019s holding the wheel while it burns.',
        { byPalier: {
          '0': 'At your position you catch most of these before your hand ever moves. Your version is lighter, a nod at an old habit. You feel the heat, you almost smile at it, and the match stays in the box.',
          '1': 'You already catch a lot of these as they light. Your version gets shorter and quieter, closer to a private nod than a sentence. You feel the spark, you name it, and more often than not the match stays down.',
          '2': 'This live version is built for exactly where you are. Say the sentence the instant the heat rises, then let yourself do whatever you were going to do anyway. The catch itself is the whole win this month, not the restraint.',
          '3': 'There\u2019s a hitch worth naming, the spark doesn\u2019t feel like a spark yet, it feels like a fair reaction to a real slight. So skip the live catch for now and work in hindsight. Once a day, in the evening, write down one moment you provoked. Same muscle, trained on yesterday\u2019s footage. The live catch shows up on its own once hindsight gets quick enough, and it does get quick.',
          '4': 'At your position the spark still feels like plain truth, like they earned it, so don\u2019t chase the live catch yet. Do it in hindsight, once a day, in the evening, writing down one moment you lit something. You\u2019re not judging the moment, you\u2019re locating it, so your eye learns the shape of the move. That part can\u2019t really be rushed, and doesn\u2019t need to be.',
        } },
      ],
    },

    {
      id: 'planIntro', zone: 'paid', type: 'prose',
      title: 'The 30-Day Plan',
      lead: 'From Snagged toward Slipping. One page a day.',
      paras: [
        'Before anything else, choose who you\u2019re being for the next thirty days. Not the one who strikes a match to see who comes running. The one who says the true thing plainly, while it\u2019s still small, before the spark can say it louder and a good deal worse. You already own what this takes. The same intensity that lights the fires is the thing that lets you walk toward a hard conversation instead of around it, and this month you point it somewhere it can build. Week one asks nothing of you but to watch the fire start. The doing comes later, and it comes easier once you can see the spark clearly.',
        'A word on the promise, because it\u2019s a modest one on purpose. This plan moves you one position on the scale, from Snagged, where you feel the spark and light it anyway, toward Slipping, where the heat still rises but you hold the helm more often than it holds you. No new personality, no cure, one position. People underestimate what that feels like from the inside. The arguments that used to open with a jab stop opening at all, and that alone changes the temperature of a whole house.',
        'One rule for the month. A provocation is never punished here. A provocation you catch and write down is data, and data is the entire reason you came. A provocation you turn on yourself, scolding, shaming, replaying it as proof you\u2019re too much, becomes fuel, and the fire runs on precisely that fuel. So you starve it by staying curious about yourself instead of hard on yourself.',
        { byPalier: {
          '0': 'Where to begin, for you. You already hold the helm most days, so read this as maintenance. Skim to week three and use the earlier weeks only where a page names something you\u2019ve felt flare up lately.',
          '1': 'Where to begin, for you. You catch a lot of sparks already, so the first two weeks will move fast. Skim them, then settle in at day 15, where the work turns from seeing the fire to asking for what the fire was really after.',
          '2': 'Where to begin, for you. Start at day 1 and keep the written pace. The plan is built around exactly your position, feeling the spark and lighting it anyway, so the default rhythm is yours.',
          '3': 'Where to begin, for you. Spend a full week on the evening review alone, day 1 repeated seven times, before you move on. Your catch has to live in hindsight before it can live in the moment, and rushing that only builds the later weeks on sand.',
          '4': 'Where to begin, for you. Read the What You Don\u2019t See page first, because until you have, this plan will read like a list of accusations. Then take week one at half speed, one review every two days. The spark still feels like plain truth at your position, and the whole month is about it slowly starting to feel like a spark instead.',
        } },
      ],
    },
    {
      id: 'planWeek1', zone: 'paid', type: 'exercises',
      title: 'Week 1, See the Spark',
      lead: 'You change nothing this week. You watch the fire start and learn its parts, what lights it, where it lives in your body, the story it tells while it burns. Seeing it clearly is the whole job, and everything later is built on it.',
      exercises: [
        { label: 'Day 1. The evening review.', body: { byPalier: {
          '0': 'Tonight, before bed, write down one moment today where the spark rose, even if you never struck. A flash of heat when a text landed flat, an urge to needle, a their-loss thought you didn\u2019t say. Facts only, what set it off and what you did with it. At your level this is a light rep, a way to keep the eye sharp.',
          '1': 'Tonight, before bed, write down one moment today where the spark rose. A flash of heat when a reply came late, an urge to test, a jab you either threw or swallowed. Facts only, what lit it, what you did. You\u2019re proving to yourself the spark is still visible while it happens, which is most of the skill.',
          '2': 'Tonight, before bed, write down one moment today where you provoked, or wanted to. Threw a jab, went cold on purpose, threatened to leave, picked at something small to get a rise. Facts only, what set it off, what you did, how long the heat lasted. If judgment shows up on the page, cross it out. You\u2019re not fixing anything yet, you\u2019re turning the lights on in a room that\u2019s been burning in the dark for years.',
          '3': 'Don\u2019t hunt for the spark live today, it\u2019s still too quick to see coming. Tonight, take one quiet minute and find a single moment where you lit something. Write down what came just before, the coolness or the silence that set it off. Finding it at night is how the eye learns the shape of the move before it can catch it in daylight.',
          '4': 'Don\u2019t chase the spark live today, it still feels like a fair reaction rather than a move you\u2019re making. Tonight, before sleep, find one moment you provoked and write down what came just before it, a distance, a quiet, a doubt about your place. You\u2019re only locating one, so your eye starts to learn the shape. No judging the moment, just marking where it was.',
        } } },
        { label: 'Day 2. Find your trigger family.', body: 'Most Arsonists have one dominant family of triggers. Coolness is one, a partner who goes a little distant or flat. Silence is another, an unanswered message, a quiet evening after a close one. Doubt about your place is the third, the sense you\u2019ve slipped down someone\u2019s list. Look at yesterday\u2019s note and today\u2019s moments and ask which family owns you. A trigger you can see coming a street away is already half caught.' },
        { label: 'Day 3. The body tell.', body: 'The spark has a physical signature, and it fires before the thought does, so it\u2019s worth learning yours. For a lot of Arsonists it\u2019s heat, a flush that climbs the chest and neck. For others it\u2019s a tightening, a clench in the jaw or the hands, a restless need to do something right now. Find yours today, the exact spot and the exact instant it lights. It becomes your early-warning system next week.' },
        { label: 'Day 4. Time the heat.', body: 'Today, when the heat rises, glance at the clock. Glance again when the urge to strike drops off. Most people at your position have never actually measured this, and the number tends to surprise them, the raw wave is short, often a couple of minutes, sometimes less. What makes it feel endless is the feeding, because every replayed slight is another log on it. Write down what you found. One honest measurement beats a month of impressions.' },
        { label: 'Day 5. Catch one live.', body: 'First live attempt. Once today, at the exact moment the heat rises and your hand reaches for the match, say it, that\u2019s the spark, not the truth. Then, and this matters, do whatever you were going to do anyway. Strike if you\u2019re going to strike. Today\u2019s win is the catch itself. Whether you strike or not doesn\u2019t change the score today, only whether you saw the spark light at all.' },
        { label: 'Day 6. Map the story.', body: 'The spark never travels alone, it brings a story, and it\u2019s usually a short one it has told a thousand times. They\u2019re done with me. They never really wanted me. I\u2019m too much and they\u2019ve finally noticed. Tonight, write yours down word for word, the way it actually runs in your head. People are often a little startled to find their fire has been reciting the same two lines since they were nine. The story runs on a loop, and a loop loses its grip once you can say it along with the screen.' },
        { label: 'Day 7. Week one review.', body: 'Read your six notes and answer three questions on paper. What is my trigger family? Where does the heat live in my body, and how long does the raw wave last unfed? What is my rerun story? Sit with the fact that you now know more about your own fire than most people ever learn about theirs. Nothing has moved yet, and that is on purpose. You can\u2019t manage a blaze you\u2019ve never once stood still and watched, and you\u2019ve spent a week watching.' },
      ],
    },
    {
      id: 'planWeek2', zone: 'paid', type: 'exercises',
      title: 'Week 2, The 90-Second Wave',
      lead: 'This week you build one thing, a gap between the spark and the strike. Ninety seconds of held heat, on purpose, is the hinge the whole month turns on.',
      exercises: [
        { label: 'Day 8. The first 90.', body: 'Once today, when the heat rises, say the sentence, then wait 90 seconds before you act on it. Set a timer, actually set it, guessing at time mid-surge never works. These don\u2019t need to be calm seconds, white-knuckle seconds count double. When the timer ends, you\u2019re free to say your piece, throw the jab, whatever you were going to do. What most people notice is that the urge at second 90 is smaller than the urge at second one. Not gone, smaller. Hold onto that gap, the whole month is built inside it.' },
        { label: 'Day 9. The 90 with your body.', body: 'Same gesture, but give your body a job this time. Pick one and stick with it, breathe in for four and out for eight, cold water on your wrists and the back of your neck, or stand and press your feet hard into the floor until the timer ends. The long exhale is doing real work here, a direct line to the part of your nervous system that stands the body down off alarm. You\u2019re teaching your body something it doesn\u2019t know yet, that the heat can rise without the whole crew running out to light something.' },
        { label: 'Day 10. Two catches.', body: 'Two 90-second waves today. Tonight, a short note, which was harder, the first or the second, and what story the spark told each time. You already know it\u2019ll be the same story. Watching it run twice in one day, in your own handwriting, does something that merely knowing it never quite does.' },
        { label: 'Day 11. The don\u2019t-send rule.', body: 'A new rule for anything typed inside the heat, write whatever you want, send nothing for 90 seconds. Draft the whole furious paragraph if the evening calls for it. At second 91, reread it with one question, would I want to be the person who sent this tomorrow morning? Keep what passes, delete the rest. A week of this and you\u2019ll land where every Arsonist lands, that the spark writes fast and writes badly, urgent and certain and almost always wrong about the size of the danger.' },
        { label: 'Day 12. The calm experiment.', body: 'Your system still believes, deep down, that a quiet evening means you\u2019re being forgotten. Test it, gently. Pick one calm, undramatic stretch today, and instead of lighting it up to feel the connection spark back, stay in the quiet and watch what\u2019s actually there. Most of the time the bond is sitting right where it was, intact, under the calm. Note what you feared and what actually happened. Your nervous system won\u2019t take the theory, it takes reps of evidence, and this is a rep.' },
        { label: 'Day 13. The 90 on your worst trigger.', body: 'You\u2019ve known your trigger family since day 2. Today you take the gesture there on purpose. If coolness owns you, the next flat reply gets the full sequence, sentence, timer, long exhales. This is the deep end, and it\u2019s fine to go under a little. If it collapses and you strike anyway, write down where it collapsed, no commentary. One honest failure on your hardest trigger teaches more than ten easy wins, and it counts as a finished day.' },
        { label: 'Day 14. Week two review.', body: 'Pull out day 4\u2019s measurement and compare. Shorter wave? Smaller urge at second 90? For most people the honest answer right now is somewhat, and somewhat is exactly on schedule. Notice what hasn\u2019t changed too, the spark still lights, and it was never meant to stop. The work was always the strike that follows it, and the strike is starting to lose the race to the timer.' },
      ],
    },
    {
      id: 'planWeek3', zone: 'paid', type: 'exercises',
      title: 'Week 3, Ask Instead of Strike',
      lead: 'Lighting a fire is a way of asking a question without the risk of asking it out loud. This week you take the risk, and trade the test for the plain request underneath it.',
      exercises: [
        { label: 'Day 15. Write the real sentence.', body: 'Under every fire you\u2019ve ever lit, there\u2019s one sentence you weren\u2019t saying out loud. For most Arsonists it\u2019s some version of I\u2019m scared I don\u2019t matter to you, or come back, I can\u2019t tell if you\u2019re still here. Tonight, write yours, in your own words, exactly as you\u2019d say it if saying it cost nothing. Don\u2019t send it anywhere, just look at it. There\u2019s something quietly absurd about it, years of blazes to avoid a sentence that fits in six words.' },
        { label: 'Day 16. The translation table.', body: 'Take the rerun story from day 6 and turn it into something a person could actually receive. They\u2019re done with me becomes I\u2019ve felt some distance this week and it\u2019s scaring me. You don\u2019t care becomes I need to hear that I still matter to you. Write two or three translations down. This week\u2019s whole skill is turning a fire into a sentence, and the sentence, like everything else this month, starts on paper before it ever reaches a person.' },
        { label: 'Day 17. The small ask.', body: 'Ask one small, direct thing today that you\u2019d normally test for instead. Dinner-sized, nothing structural, will you spend Saturday with me, said straight, rather than going cold and waiting to see if they notice. Watch yourself do it. There\u2019s usually a pull to arm the question first, to make it a challenge, to add an or don\u2019t bother so a no can\u2019t land. Ask it clean. Clean questions tend to get clean answers, and clean answers are the thing your fire has never once let you collect.' },
        { label: 'Day 18. Say the spark out loud, once.', body: 'With your partner, or whoever\u2019s closest, name the mechanism one time. Past tense, no demand attached, when you were quiet last night, something in me wanted to pick a fight so you\u2019d turn toward me, and I didn\u2019t, I just wanted you to know it\u2019s there. Then change the subject if you like. Two things happen at once. The spark comes out of the dark, where it does its best work, and you learn by direct experiment that naming it burns nothing down.' },
        { label: 'Day 19. The real question, asked.', body: 'Today or tomorrow, when a genuine spark rises, you skip the whole fire and ask the day 15 sentence instead. Calm moment, not mid-surge. Are we okay, I\u2019ve felt a little off since Tuesday. Then the genuinely hard part, let their answer be the answer. No testing it for cracks, no lighting a small fire afterward to check the reassurance was real. One question, one answer, and you let it land.' },
        { label: 'Day 20. Take the reassurance.', body: 'The next time reassurance comes your way, it gets new treatment, you keep it. When the spark leans in with they only said that to keep the peace, you know that voice by now. Here\u2019s the part researchers were slow to say plainly, reassurance only works if you let it in. Forced out through a test and then doubted, it feeds the very fire it was meant to put out. Today you practice letting it reach you.' },
        { label: 'Day 21. The repair move.', body: 'If a fire got away from you this week, a jab that landed, a cold shoulder held too long, repair it today in one sentence, that wasn\u2019t about you, that was my old spark, and it\u2019s mine to handle. No essay, no spiral of apology, both of those are the fire wearing a sorry face. Arsonists tend to fear that owning the mechanism makes them look unstable. In practice it\u2019s the steadiest sentence in this plan, because it shows the helm back in your hands right after a wave, which is the only place steadiness ever actually shows.' },
        { label: 'Day 22. Week three review.', body: 'Three questions, on paper. Which cost you more, the 90 seconds or the plain ask? What actually happened when you asked instead of struck? Did the thing you feared come true, or did it just feel certain? Then reread your day 15 sentence. It\u2019s probably shrunk. Sentences do that once they stop living in the dark and start getting said.' },
      ],
    },
    {
      id: 'planWeek4', zone: 'paid', type: 'exercises',
      title: 'Week 4, Hold the New Position',
      lead: 'Slipping is a position you have to keep choosing. This week is about holding it when the calm itself starts whispering that you\u2019ve been forgotten, and the old urge to strike a spark just to watch the connection flare comes looking for you again.',
      exercises: [
        { label: 'Day 23. Your minimum kit.', body: 'Three weeks of notes have already told you which tools are actually yours. Pick three. For a lot of Arsonists it ends up being the sentence, the 90 with the long exhale, and the don\u2019t-send rule, but yours is yours. Write them on one card, paper or phone. From here on, this card is the plan. Everything else was scaffolding you can put down.' },
        { label: 'Day 24. The good-day trap.', body: 'A warning that\u2019ll sound strange, calm stretches are where this work usually dies. Things feel steady, the practice feels pointless, it quietly stops, and the next spark arrives against a body that hasn\u2019t run a rep in three weeks. So today, on what\u2019s hopefully an ordinary calm day, run the full gesture once on a small invented spark. On purpose, like a fire drill. Two minutes. Drilling on a calm day builds the muscle memory, so when a real spark comes your hands already know the moves.' },
        { label: 'Day 25. The relapse plan.', body: 'Write it now, while you\u2019re steady, because you won\u2019t write it mid-blaze. Something like, when I light a real fire again, I\u2019ll name it within a day, run the repair move, and restart the evening review for three days. That\u2019s it. A relapse with a plan costs you an evening. A relapse without one can cost you the month, and not because of the fire itself, but because of the shame that moves in afterward and starts rewriting the whole story into I always ruin it.' },
        { label: 'Day 26. Tell someone what changed.', body: 'One person, one concrete thing, I don\u2019t pick fights to make sure you\u2019re still there anymore, mostly I catch it now. Out loud, to a partner or a friend. The notebook has done a lot for you this month, but there\u2019s one thing it can\u2019t do, make the new position part of your story out in the world. Positions hold better once somebody has watched you take them.' },
        { label: 'Day 27. The wide-angle day.', body: 'Here\u2019s a cost you probably never added up, energy. All that intensity that went into lighting fires and managing the fallout went somewhere, and now some of it is coming back with nowhere to burn. Spend today aiming it on purpose, at the actual person in front of you, at work you care about, at something that was yours before the fires took up all the room. The intensity was always going to burn somewhere. This month you\u2019ve been giving it better places to land, and today you give it one more.' },
        { label: 'Day 28. Stress-test honestly.', body: 'On paper, honestly, if the real thing hit tonight, a cold reply, a quiet you can\u2019t read, a sudden sense you\u2019ve been dropped, what would happen? If your answer is some version of the heat would spike, and I\u2019d catch it and hold the 90 before I struck, that\u2019s Slipping, that\u2019s the target, that\u2019s what it looks like. It was never going to look like never feeling the spark at all. If your answer is I\u2019d light it like always, go back through your week reviews, find where the notes got thin, and redo that week. The plan is a loop, not a corridor, and going around again isn\u2019t failing it.' },
        { label: 'Day 29. Write the before-and-after.', body: 'One page. A real scene from before this month, a fire you lit and the crater it left, told straight, with the actual words that got said. Then the same scene as you\u2019d run it today. Specific, yours, names and all. Keep this page somewhere you can find it, because on some future bad night the spark is going to swear to you that nothing ever changes and you\u2019ve always been too much. The spark, as you\u2019ve established this month, is a liar with a small vocabulary. This page is the receipt that says otherwise.' },
        { label: 'Day 30. Retake the test.', body: 'Take the assessment again, today or this week. Not for a grade, for a reading. If your Anchor moved toward Slipping, the kit works, keep the card, drop the daily pages, and rerun any single week whenever the fires start creeping back, which they sometimes will. If it didn\u2019t move, your own notes will show you which week to redo, and that\u2019s a map doing its job, not a verdict. Either way, something changed this month that doesn\u2019t change back, you\u2019re no longer guessing whether there\u2019s a version of you that can stay in the calm. There is, and you\u2019ve watched it hold.' },
      ],
    },

    {
      id: 'acuteKit', zone: 'paid', type: 'prose',
      title: 'Before You Strike',
      lead: 'The 90-second kit for the moment the spark rises. Pocket card.',
      paras: [
        'It\u2019s late, and something just went cold. A clipped reply, a turned back, an evening that was warm an hour ago and isn\u2019t now. The heat is already climbing your chest and your mind has the perfect sharp thing half-loaded, the line that will make them turn around and react. This card skips growth and childhood and understanding. Right now there\u2019s only the wave, cresting, and the ninety seconds you\u2019re about to put between it and the match.',
        'One, name it, three seconds. That\u2019s the spark, not the truth. Say it out loud if you\u2019re alone. The phrase works as a location device. It tells you where you actually are, inside a wave of old heat rather than inside a fact about being left. Putting a name on what\u2019s happening turns its volume down a notch, measurably, every time.',
        'Two, cool the body, about sixty seconds. The spark lives in your body before it reaches your words, so that\u2019s where you meet it. Pick one move and use the same one every time, so your body eventually runs it without being asked. Breathe with the exhale twice as long as the inhale, the long exhale being the body\u2019s own stand-down signal, and you\u2019re leaning on it on purpose. Or cold water on your wrists and the back of your neck. Or plant your feet and press them into the floor and count slowly to twenty.',
        'Three, put the weapon down, the rest of the 90. Whatever you were about to fire, the text, the jab, the threat to leave, it goes in the drawer until the timer ends. If the words are boiling, write them somewhere they can\u2019t send, all of them, and hold them there. A wave you don\u2019t feed burns out on its own, a good deal faster than the heat swears it will. You\u2019ve timed this yourself by now, so trust your own stopwatch over the spark\u2019s forecast.',
        'Four, choose with the helm in hand, after the 90. Now decide, actually decide. Say the real thing instead, are we okay, I felt you go far away just now. Or save it for morning. Or let it be nothing and go to sleep. Any of those is a fine call. The win was never which one you picked, it\u2019s that a person made the choice instead of a spark making it for them.',
        'What not to do inside the wave. No threats to leave, they\u2019re the loudest match in the box and they burn the fastest. No tests, no going cold to see if they chase you, no scorekeeping about who reached out last. And keep the big conversation in its holster. The real talk about what you need is a daylight tool, and asked calm the next day it opens something, while fired mid-surge at midnight it lands as an attack whatever words it\u2019s wearing, and it feeds the exact distance you\u2019re afraid of.',
        'Tomorrow, thirty seconds in your notes. What set it off, which moves you held, what story the spark told. Not to grade yourself, there are no grades here. Every wave you log makes the next one more familiar, and familiar waves burn smaller. You\u2019re becoming someone who can hold the heat without lighting anything, and that\u2019s a steadier bet than waiting for the heat to stop coming.',
        { byPalier: {
          '0': 'At your position the full sequence mostly holds, and you often stop the wave at move one. Keep the card for the nights the cold lands on someone who really matters, when the old heat still knows how to climb.',
          '1': 'You\u2019ll usually get through the sequence now. The card\u2019s here for the harder nights, when the surge moves faster than you and you need the moves in order to find your feet.',
          '2': 'This is your card, run the full sequence. Some nights you catch it at move one, other nights you\u2019re mid-draft of something cruel before you remember the card exists, and you pick it up from wherever you are.',
          '3': 'The full sequence probably won\u2019t hold on your first few waves, and expecting it to is a setup for shame. Run moves one and two, and call that a complete rep, because it is. The rest of the card comes online as the catch speeds up.',
          '4': 'Run moves one and two only, and count that as a complete rep. A partial kit you actually reach for beats a complete one you never open. The rest unlocks later, on its own, as the catch gets quicker.',
        } },
      ],
    },

    {
      id: 'lectures', zone: 'paid', type: 'bookcards',
      title: 'Your Reading List',
      lead: 'A book meets you where you are or it slides right off, and attachment books slide hard. So this list is sorted by your position on the scale, not by fame. One at a time, at your tier, and keep the plan running while you read, because reading about the fire has a long habit of quietly replacing the work of holding it. The plan does the moving, the book explains the map.',
      books: {
        byPalier: {
          '0': [
            { title: 'Hold Me Tight', author: 'Sue Johnson', blurb: 'You\u2019ve already done the hard part, so this one is about what you\u2019re building toward, a bond where intensity turns into warmth instead of heat. Johnson spent her career on how two people find their way back to each other after the disconnection, and at your position that\u2019s the useful frontier, keeping a calm love from ever reading to you as a dead one.' },
          ],
          '1': [
            { title: 'Nonviolent Communication', author: 'Marshall Rosenberg', blurb: 'You\u2019re already catching the spark, so the skill that matters now is the sentence underneath it. Rosenberg\u2019s whole method is saying the real need plainly, in a way that pulls someone closer instead of putting them on the defensive, which is exactly the move week three asks of you. Read it with a pen.' },
          ],
          '2': [
            { title: 'Attached', author: 'Amir Levine and Rachel Heller', blurb: 'Written for your exact position. It names the thing you do, the testing and threatening and score-keeping, protest behavior, and explains why a calm partner can feel flat to you while an unstable one feels like love. Most of all it teaches the swap this whole month turns on, asking for reassurance straight instead of forcing it out through a fight. If you read one book this month, this is it.' },
          ],
          '3': [
            { title: 'Insecure in Love', author: 'Leslie Becker-Phelps', blurb: 'At your position the spark fires before you can see it coming, and the shame after each fire does more damage than the fire did. Becker-Phelps\u2019s tool, compassionate self-awareness, works on both, softening the reactivity that turns a small doubt into a blaze, and quieting the self-attack that keeps the loop fed. It plugs straight into your evening review.' },
          ],
          '4': [
            { title: 'The Body Keeps the Score', author: 'Bessel van der Kolk', blurb: 'At your position the heat feels like plain truth, and this is the book that explains why, why your body fires before your mind gets a vote, and why the body-first moves in your kit, the long exhale, the cold water, the feet on the floor, aren\u2019t decoration. One honest warning, it\u2019s a heavy read with difficult passages, and if it stirs up more than it settles, put it down and think about bringing a professional into your corner. At this depth, calling in real support is the strongest move on the board, and the plan keeps running right alongside it.' },
          ],
        },
        default: [
          { title: 'Attached', author: 'Amir Levine and Rachel Heller', blurb: 'The clearest map of the anxious system for a general reader, and the one that names what you do, protest behavior, the testing and threatening that\u2019s really a call for reassurance. It teaches the swap this month turns on, asking straight instead of forcing it out through a fire.' },
        ],
      },
    },

    {
      id: 'lecturesWarning', zone: 'paid', type: 'prose',
      when: { if: { palier: 4 } },
      callouts: [
        { tone: 'care', text: 'A word, in honesty. That book is a heavy read with difficult passages, and it can stir up more than a book on its own is built to hold. If it does, set it down and think about bringing a professional into your corner. At this depth, calling in real support is the steadiest move you can make, and it means the work is going deep enough to need it.' },
      ],
    },

    {
      id: 'devenir', zone: 'paid', type: 'prose',
      title: 'What you become when you rise',
      paras: [
        'An Arsonist who rises doesn\u2019t lose their intensity. You keep your capacity to love hard, your presence, your liveliness, that courage not to flee the real conversations. But you no longer turn them into a test. You can love hard without lighting anything, and you can sit inside a calm evening without reading it as the quiet before an exit. Asking to be reassured, in plain words, stops feeling like weakness and starts feeling like the faster road to the thing you actually wanted. Your fire warms a room now instead of burning it down.',
        'Be patient, the path is neither fast nor steady. You\u2019ll provoke again, especially when someone truly matters. That won\u2019t be a failure, just the sign that you\u2019re learning. And the thing that lifts you is something you live rather than grasp, built slowly over months as you gather real evidence that a calm love can be a solid one, and that you can matter to someone without once making them prove it. That happens with others, and it can be practiced. Your plan is where you start.',
      ],
    },

    {
      id: 'etApres', zone: 'paid', type: 'prose',
      title: 'And after this',
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
