/* ============================================================================
   LovePattern  .  CONTENT BLOCKS  .  alchimiste   (EN delivery)
   ----------------------------------------------------------------------------
   English content. Free zone ported 1:1 from the original zoned source.
   Paid zone written on the Runaway/Bastion templates (denial-side voice),
   brought to Mirror parity: standalone Catch, dated 30-day plan, standalone
   acute kit, blindSpot moved to the free teaser slot.
   Variable names stay French verbatim. Only their VALUES are English.
   Axis: contextual (the Alchemist creates distance through analysis, replacing
   feeling with concept to keep control). Position: Hooked toward Snagged.
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
        byPalier: { '2': 'You’re The Alchemist. And you already know it.' },
        default: 'You’re The Alchemist.',
      },
      paras: [
        'You watch yourself do it. The moment you start explaining what should be felt, part of you notices. You know the other person wanted your presence, not your analysis, and you keep going anyway. If you’re here, it isn’t to be taught that you intellectualize, you know that already, and you could surely explain it better than I can. You’re here because understanding it changed nothing, and that powerless lucidity wears you out.',
        'Here’s the most important thing in this report, because you’ve waited long enough. What you’re missing isn’t willpower. The moment an emotion rises, your head takes over before you’ve even had time to feel anything. Nobody has shown you how to stay with the feeling without drowning in it.',
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
        'This reflex of intellectualizing everything, you didn’t choose it as an adult. According to Bowlby’s attachment theory, a child builds an internal model with their parent of how relationships work, which then guides their whole love life.',
        'In your case, that model learned that emotion was dangerous. Maybe as a child you lived in a chaotic emotional climate, unpredictable moods, outbursts you could neither foresee nor calm. Maybe you found refuge in your head, because understanding gave you the illusion of a little control in the mess. Maybe nobody ever taught you to welcome what you felt, so you filed it away in concepts. Whatever the scene was, your conclusion as a child was logical. If I understand, I won’t be overwhelmed.',
        'It wasn’t coldness. It was the smart protection of a child who took shelter in thought to keep from drowning in emotion. The problem is that this reflex is still running today, and it holds at a distance people who would just like to be close to you.',
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
        'At the start, your lucidity fascinates. You understand things others don’t see, you make sense of them, you reassure with your bird’s-eye view. Then comes a moment when an emotion rises, in you or in the other person, and its force threatens your control. So you do what you know how to do, you analyze. You look for the cause, you reframe, you turn the felt thing into a concept.',
        'The other person didn’t want an explanation, they wanted a presence. They feel held at a distance, analyzed like a case study, and they intensify their demand for warmth. And the more they ask for the heart, the more you take refuge in the head, because that intensity threatens your control even more. The loop gets worse. In the end, the relationship loses its warmth, the other person feels alone beside you, and you draw a conclusion that seems logical, emotions complicate everything, better to understand them. Except that conclusion was built by your own strategy. You didn’t prove that emotion is unmanageable, you just replayed your old fear of being overwhelmed.',
      ],
      callouts: [
        { if: { repetition: 'forte' }, tone: 'note',
          text: 'You told us people often call you out for your coldness or your distance. This is why. It isn’t that you feel nothing. It’s that at the precise moment you’d need to feel with the other person, you go into your head, and from up there, you look cold even when you’re flooded.' },
      ],
    },

    {
      id: 'pourquoiComprendre', zone: 'free', type: 'prose',
      title: 'Why understanding it has never been enough',
      paras: [
        'Here’s the cruelest irony of your profile. You who understand everything have surely understood your mechanism perfectly already, and it changed nothing. Because your mechanism doesn’t live in your head, exactly where you spend your life. It was written into your body before words, in the part of you that reacts, the part that sends you into analysis the moment an emotion gets too strong. The psychiatrist Bessel van der Kolk showed it, the body keeps the score of what the mind has forgotten, and that’s why you don’t feel more by understanding better.',
        'The next time an emotion rises and you feel the urge to analyze it, to explain it, to step back, know that a surge has fired through your body, a wave your head wants to put into words right away to master it. It has a length, around ninety seconds, if you don’t flee into the concept. The trouble is that you cut it off by going into analysis. So next time, don’t analyze right away. Stay, one hand on your belly, breathe, and let the emotion be there for a minute and a half, without turning it into an idea. You’ll discover something unexpected for you, the emotion doesn’t overwhelm you, it passes, and on the other side there’s a presence truer than all your explanations. This tool is yours.',
      ],
    },

    {
      id: 'blindSpot', zone: 'free', type: 'prose',
      title: 'What You Don’t See',
      paras: [
        'Here’s the most unsettling part. When someone offers you warmth, a simple tenderness, and asks nothing of you but to be there, that’s precisely the moment you go into your head. Not because that person is doing anything wrong, but because feeling with them, without a filter, makes you lose the control that analysis gives you. Emotional closeness, instead of soothing you, trips your reflex to create distance.',
        'The trap is that you offer an explanation where a presence was expected, and the explanation, however accurate, leaves the other person alone. So you never live the experience that would heal you, feeling strongly without being engulfed. You stay convinced that emotion is a danger, because you never give it time to prove you otherwise.',
        'That conviction is the real cost, and it’s the thing the plan is built to move, one kept feeling at a time, until you have lived proof that a strong emotion can pass through you and leave you standing. That’s where the paid report begins.',
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
        'You don’t only create distance in love. You step back with almost everything that touches the heart. People admire you for your lucidity, they consult you, and yet few people feel truly close to you, because you offer your head before what you feel. This intelligence that was meant to protect you sometimes starts to feel like a pane of glass between you and life.',
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
      lead: 'You’re at level {{ancre_position}}: “{{ancre_position_libelle}}”.',
      paras: {
        byPalier: {
          '0': [
            'You’re The Alchemist, and you’ve learned to feel without drowning. You feel the urge to analyze coming, and most of the time you choose to stay present to the emotion. This report won’t teach you to see yourself, but to hold that new balance and to spot what could send you back into the head.',
          ],
          '1': [
            'You’re The Alchemist, and you watch yourself go into your head live. More and more, you manage to stay with the feeling instead of darting off into analysis. It isn’t systematic yet. What’s left is to turn each urge to explain into a choice to feel, and to learn to offer a presence before a reading.',
          ],
          '2': [
            'You watch yourself do it. The moment you start explaining what should be felt, you know it. You know the other person wanted your presence, not your analysis, and you analyze anyway. That lucidity that prevents nothing is a real pain, the pain of someone who’d simply like to be there and whose head races so as not to feel.',
            'You now know what’s happening to you, where it comes from, and why understanding it hasn’t switched it off. You have a first tool that works in the body. What comes next is your plan.',
          ],
          '3': [
            'You’re The Alchemist, and you’re starting to see it. You recognize that you intellectualize, but on a delay, once the other person has felt alone or dissected. It’s later, sometimes much later, that the emotion you set aside finally catches up with you. You have the lucidity, what you’re missing is the moment you’d have needed to feel.',
          ],
          '4': [
            'You’re The Alchemist. If your relationships often end the same way, people probably call you out for your coldness, or others seem too emotional, irrational, too caught up in drama. From where you stand, it’s other people who overflow. You’re sometimes right, some people really are excessive. But I want to offer you another angle, gently, because I know you like an accurate angle. What if part of what keeps repeating also came from a very old habit of going into your head the moment an emotion approaches, until you never truly meet the other person in the heart?',
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
      visual: { n: 4, axe: 'contextual' },
    },

    {
      id: 'deuxiemeMecanisme', zone: 'paid', type: 'prose',
      title: 'Your second mechanism',
      paras: [
        'Your Alchemist doesn’t move alone. Right behind it sits {{pattern_secondaire}} ({{pattern_secondaire_score}}).',
        {
          bySecondaire: {
            bastion: 'You don’t only go into your head, you also close the door. The analysis becomes the wall. When the other person reaches for your emotion, you give them a theory, and behind that theory, a locked border. In your plan, we work first on letting one raw emotion through, before even thinking about opening up.',
          },
          default: 'Whatever it is, it deepens the same distance, your way of going into the head when emotion gets strong. Your plan starts by bringing you back down into the body, before working on this second mechanism.',
        },
      ],
    },

    {
      id: 'compatibilite', zone: 'paid', type: 'prose',
      title: 'Who it can actually work with',
      paras: [
        'No mechanism is made for another, and none is doomed with another. You can build something solid with any profile. What decides isn’t the other person’s label, it’s each person’s Anchor level.',
        'Two people aware of their mechanisms, even opposite ones, love each other without destroying each other. Two compatible but unaware profiles hurt each other. So don’t look at the other person’s mechanism, look at whether they can see it, talk about it, and repair after a fight.',
        'That said, your mechanism resonates differently depending on the profile across from you.',
      ],
    },
    {
      id: 'visuel5', zone: 'paid', type: 'visual',
      visual: {
        kind: 'compatColumns', n: 5,
        columns: [
          { label: 'The ones who soothe you', tone: 'apaise',
            blurb: 'An integrated Bastion, a calmed Watcher, someone with a high Harbor. What they share, they’re grounded, they don’t flood you with raw emotion, they leave room for your processing pace without taking it as a rejection. Near them, you don’t need to flee into the head, because the intensity doesn’t overflow.',
            items: [{ code: 'bas', name: 'Integrated Bastion' }, { code: 'gue', name: 'Calmed Watcher' }, { code: 'anc', name: 'High Harbor' }] },
          { label: 'The ones who understand you', tone: 'comprend',
            blurb: 'A Bastion or a Watcher on the way, an integrated Runaway. They know from the inside the need to protect themselves, the fear of losing control. After that, everything depends on each person’s Anchor.',
            items: [{ code: 'bas', name: 'Bastion on the way' }, { code: 'gue', name: 'Watcher on the way' }, { code: 'fug', name: 'Integrated Runaway' }] },
          { label: 'The ones who send you into your head', tone: 'declenche',
            blurb: 'A very active Arsonist, a merging Mirror, a chaotic or theatrical partner. They bring exactly the emotional intensity your system can’t stand, drama, waves, immediate demands for affection. The more it overflows, the more you analyze. They aren’t bad people, they’re the riskiest dynamic for you as long as your Anchor is low.',
            items: [{ code: 'inc', name: 'Active Arsonist' }, { code: 'mir', name: 'Merging Mirror' }] },
        ],
      },
    },
    {
      id: 'compatProse2', zone: 'paid', type: 'prose',
      paras: [
        'And there’s a scientific reason for your pull toward, or recoil from, intensity. Hazan and Shaver showed, back in 1987, that adult love replays the attachment system of childhood. Your body recognizes the bond where you have to understand in order to survive as familiar, and calls it mastery. That’s why a simply warm and stable person can feel unstimulating to you, when they may be the one with whom you could finally feel without danger.',
      ],
    },

    {
      id: 'catch', zone: 'paid', type: 'prose',
      title: 'The Alchemist Catch',
      lead: 'Catch the switch before the feeling becomes a theory. Ten seconds.',
      paras: [
        'Somewhere in an ordinary week there’s a moment you know by heart. Something lands with real weight, a partner’s tears, a piece of hard news, a wave of your own that comes up without warning, and almost instantly you’re somewhere above it, explaining. Here’s why this is happening. Here’s what that reaction really means. Here’s the pattern underneath it. The analysis is running before you’ve felt more than the first half-second of the thing itself.',
        'Your mechanism has a first move, and it happens fast, well before the distance it becomes. Most people at your position only catch it later, once the other person has gone quiet beside them, or once the feeling you filed away comes back at midnight to be felt after all. The Alchemist Catch trains one narrow skill, feeling the switch in the second it fires, the exact instant you leave the body for the idea, instead of noticing hours later that you were never really there.',
        'You won’t be trying to stop thinking. Your mind is not the problem, and people who try to force themselves to just feel usually end up analyzing how badly they’re feeling and calling that progress. You’re learning to see the switch fire. That turns out to be almost everything.',
        'And it rarely announces itself as fear. It shows up wearing the face of help. I’m making sense of this for them. I’m being useful, clear, calm. Sometimes that’s true, and a clear head in a hard moment is a real gift. The tell is the timing. Genuine help waits until the feeling has been met, yours or theirs. The switch arrives instead of the feeling, right when the emotion is strongest, because the strength of the emotion is the exact thing it’s built to escape.',
        'What you’re doing has a name, and it helps to know it. Clinicians call it intellectualization, one of the oldest defenses on record, using thought to avoid a feeling that threatens to overwhelm. It gets praised as insight, which is precisely how it hides. For a child in an unpredictable emotional climate, the head was the one safe, controllable room in the house, and retreating to it was the sanest move available, understand the storm so it can’t knock you down. That move never switched off. It still fires the instant a feeling rises with more force than your control can hold.',
        'Here is the whole gesture. The moment an emotion rises and you feel the pull to explain it, to reframe it, to step up and above it, you say one sentence to yourself, silently.',
        'That’s the flood I’m outrunning, not the truth.',
        'Then you go ahead and analyze anyway. You read that right. On day one you can say the sentence and still climb straight up into the theory. Saying it is the win, because saying it means you caught the switch in the act, and a switch you can see is no longer choosing for you on its own. Ten seconds, and it works while you’re already halfway into your head, because it doesn’t ask you to stop thinking first.',
        'The switch is a threat detector wired for one danger above all others, being flooded, being swept off your feet by a feeling too big to manage, and detectors like that fire early and fast, long before the deciding part of you gets a vote. Putting a name on what’s happening, even under your breath, has been shown to loosen its grip on you measurably. And here is the part almost everyone misses, including you, most days. The feeling you leapt over is still down there, unfelt, not gone. Clinicians who work with this defense say the same thing every time, the person knows exactly what happened and has simply skipped the part where it lands. The plan is built on bringing you back to the part you skipped.',
        { byPalier: {
          '0': 'At your position you catch most of these before you’ve fully left the ground. Your version is lighter, a nod at an old habit. You feel the pull up into the theory, you almost smile at it, and you stay down in the feeling a moment longer.',
          '1': 'You already catch a lot of these as they fire. Your version gets shorter and quieter, closer to a private nod than a sentence. You feel the switch start, you name it, and more often than not you stay with the feeling before you reach for the reading.',
          '2': 'This live version is built for exactly where you are. Say the sentence the instant the switch starts, then let yourself analyze however you were going to analyze. The catch itself is the whole win this month, not the staying down.',
          '3': 'There’s a hitch worth naming, the switch doesn’t feel like a switch yet, it feels like you simply being clear-headed. So skip the live catch for now and work in hindsight. Once a day, in the evening, write down one moment you went up into the head. Same muscle, trained on yesterday’s footage. The live catch shows up on its own once hindsight gets quick enough, and it does get quick.',
          '4': 'At your position the switch still feels like plain clarity, like you’ve simply kept your head while others lost theirs, so don’t chase the live catch yet. Do it in hindsight, once a day, in the evening, writing down one moment you gave a reading where a presence was wanted. You’re not judging the moment, you’re locating it, so your eye learns the shape of the move. That part can’t really be rushed, and doesn’t need to be.',
        } },
      ],
    },

    {
      id: 'planIntro', zone: 'paid', type: 'prose',
      title: 'The 30-Day Plan',
      lead: 'From Hooked toward Snagged. One page a day.',
      paras: [
        'Before anything else, choose who you’re being for the next thirty days. Not the one who climbs up into the explanation the moment a feeling gets heavy, and lets the analysis stand in for the presence so the raw thing never has to be met. The one who stays down in the body a beat longer than the switch wants, and offers a plain feeling before a finished theory. You already own what this takes. The same depth of attention that lets you understand a thing completely is, turned toward the body instead of the concept, exactly the instrument that lets you stay inside a feeling long enough to know it. This month you point it downward. Week one asks nothing of you but to watch the switch fire. The doing comes later, and it comes easier once you can see the switch clearly.',
        'A word on the promise, because it’s a modest one on purpose. This plan moves you one position on the scale, from Hooked, where the switch fires and you’re up in the theory before you notice you left, toward Snagged, where you feel the pull upward in real time and get to choose what to do with it. No new personality, no cure, one position. The move is from blind to sighted, and what you do with the sight stays entirely your call. People underestimate what that shift feels like from the inside. The people who felt alone beside you, loved for your clarity and starved of your presence, stop feeling alone, and that alone changes the texture of a life.',
        'One rule for the month. A switch is never punished here. A switch you notice and write down is data, and data is the entire reason you came, and you of all people respect data. A switch you take in silence, climbing up into the reading while the feeling goes unmet, becomes another pane of glass between you and the person in front of you. So you catch it out loud instead, on the page, where you can see it for what it is.',
        { byPalier: {
          '0': 'Where to begin, for you. You already stay with the feeling most days, so read this as maintenance. Skim to week three and use the earlier weeks only where a page names something you’ve felt pull at you lately.',
          '1': 'Where to begin, for you. Slipping, you can jump to day 15. The first two weeks are seeing the switch and staying with the feeling, and you already have most of that. The work that’s left for you is offering the raw feeling out loud instead of the reading.',
          '2': 'Where to begin, for you. Snagged, you can start at day 8, though day 6 is worth a detour. You already catch the switch in the moment, so the early audit will move fast, and staying down in the body is where your real work starts.',
          '3': 'Where to begin, for you. Hooked, start at day 1 and keep the written pace. The plan is built around exactly your position, seeing the switch only in hindsight, so the default rhythm is yours.',
          '4': 'Where to begin, for you. Read the What You Don’t See page first, because until you have, this plan will read like a list of accusations, and you’ll be tempted to rebut it point by point. Then take week one at half speed, one review every two days, as a researcher studying their own functioning. The switch still feels like plain clarity at your position, and the whole month is about it slowly starting to feel like a move instead.',
        } },
      ],
    },
    {
      id: 'planWeek1', zone: 'paid', type: 'exercises',
      title: 'Week 1, See the Switch',
      lead: 'You change nothing this week. You watch the switch fire and learn its parts, what sets it off, where it lives in your body, the story it tells while it lifts you up out of the feeling. Seeing it clearly is the whole job, and everything later is built on it.',
      exercises: [
        { label: 'Day 1. The evening review.', body: { byPalier: {
          '0': 'Tonight, before bed, write down one moment today where the switch rose, even if you stayed down in the feeling. A flicker of wanting to explain, an urge to reframe something raw, a reading you nearly gave instead of a presence. Facts only, what set it off and what you did with it. At your level this is a light rep, a way to keep the eye sharp.',
          '1': 'Tonight, before bed, write down one moment today where the switch rose. An urge to analyze a feeling as it landed, an explanation offered where warmth was wanted, a reframe you reached for to get above the thing. Facts only, what set it off, what you did. You’re proving to yourself the switch is still visible while it happens, which is most of the skill.',
          '2': 'Tonight, before bed, write down one moment today where you went up into the head, or wanted to. Explained a feeling instead of feeling it, gave someone a reading when they wanted you close, filed a raw thing away as a concept. Facts only, what set it off, what you did, and whether the emotion had just spiked right before. If a delayed feeling surfaces later that evening, the one you skipped, write that down too. You’re not fixing anything yet, you’re turning the lights on in a room you’ve been flying over for years.',
          '3': 'Don’t hunt for the switch live today, it’s still too quick and too convincing to catch coming. Tonight, take one quiet minute and find a single moment where you left the feeling for the idea. Write down what came just before it, the emotion or the closeness that set it off. Finding it at night is how the eye learns the shape of the move before it can catch it in daylight.',
          '4': 'Don’t chase the switch live today, it still feels like you simply being clear. Tonight, before sleep, find one moment you gave an analysis and write down what came just before it, a feeling in the room, a vulnerability, a moment that asked for presence. You’re only locating one, so your eye starts to learn the shape. No judging the moment, just marking where it was. Treat it as data collection, which is a language you trust.',
        } } },
        { label: 'Day 2. Find your trigger family.', body: 'Most Alchemists have one dominant family of triggers. The other person’s emotion is one, their tears, their fear, their need, a wave coming at you that you meet with a reading instead of a hand. Your own strong feeling is another, a grief or a joy big enough to threaten your footing, that you reach up to explain before it can land. Emotional closeness is the third, and the strangest, a warm undemanding moment that should be easy and instead sends you straight into your head. Look at yesterday’s note and today’s moments and ask which family owns you. A trigger you can see coming a street away is already half caught.' },
        { label: 'Day 3. The body tell.', body: 'The switch has a physical signature, and it fires before the thought does, so it’s worth learning yours. For a lot of Alchemists it’s a sudden lift, a sense of rising up and away, the room going slightly abstract as the analysis takes over. For others it’s a heat or a tightening that spikes for half a second right before the head clicks on, the exact thing you leave the body to escape. Find yours today, the precise spot and the precise instant it lights. It becomes your early-warning system next week.' },
        { label: 'Day 4. Time the surge.', body: 'Today, when a feeling rises and the pull to analyze comes with it, glance at the clock. Glance again when the raw feeling itself fades. Most people at your position have never actually measured this, and the number tends to surprise them, the raw wave is short, often a minute or two, sometimes less. What makes it feel unbearable is that you never let it run, because the analysis cuts it off at second three every time. Write down what you found. One honest measurement beats a month of theory, and you know the difference better than anyone.' },
        { label: 'Day 5. Catch one live.', body: 'First live attempt. Once today, at the exact moment a feeling rises and the switch starts to lift you up into the head, say it, that’s the flood I’m outrunning, not the truth. Then, and this matters, analyze however you were going to analyze. Climb up into the theory if that’s what comes. Today’s win is the catch itself. Whether you stay down in the feeling or not doesn’t change the score today, only whether you saw the switch fire at all.' },
        { label: 'Day 6. Map the story.', body: 'The switch never travels alone, it brings a story, and it’s usually a short one it has told a thousand times. If I let this feeling all the way in, I’ll lose control of it. Understanding it is the same as handling it. Feeling it changes nothing, so I may as well think it through. Tonight, write yours down word for word, the way it actually runs in your head. People are often a little startled to find their analysis has been reciting the same line since they were small. The story runs on a loop, and a loop loses its grip once you can say it along with the screen.' },
        { label: 'Day 7. Week one review.', body: 'Read your six notes and answer three questions on paper. What is my trigger family? Where does the switch live in my body, and how long does the raw feeling last when I don’t cut it off? What is my analysis story? Sit with the fact that you now know more about your own switch than most people ever learn about theirs. Nothing has moved yet, and that is on purpose. You can’t stay with a feeling you’ve never once stood still and watched yourself flee, and you’ve spent a week watching.' },
      ],
    },
    {
      id: 'planWeek2', zone: 'paid', type: 'exercises',
      title: 'Week 2, The 90-Second Stay',
      lead: 'This week you put ninety seconds between the feeling and the analysis. Not to stop the analysis, only to let the raw feeling exist and pass through you before your head files it away.',
      exercises: [
        { label: 'Day 8. Learn the stay.', body: 'The whole move this week is a small, deliberate delay. When a feeling rises and you sense the switch starting, you keep your attention in the body and you say, to yourself, let me just feel this for a second before I explain it. One hand on your belly, a long slow out-breath, and for a moment and a half you stay with the sensation itself, the heat, the tightness, the weight, without translating it into a concept. That is roughly how long an emotion needs to crest and pass when you don’t flee it. Practice today on something small and pleasant, a good coffee, a bit of music, so staying in a sensation is familiar before you need it on something heavy.' },
        { label: 'Day 9. The longer out-breath.', body: 'Twice today, when things are calm, breathe in for about four seconds through your nose and out for six to eight through your mouth. And here’s the part that matters for you specifically, put your attention on the physical sensation of the breath, not on the idea of breathing correctly. The long exhale is the body’s own stand-down signal, and leaning on it on purpose is how you tell a system that isn’t really in danger to settle. You’re building the exact off-switch you’ll reach for when the pull into the head fires in a real moment, so your body already knows the move.' },
        { label: 'Day 10. Name the raw feeling, no cause attached.', body: 'Pick one real feeling today and name it bare, in your notebook, with no analysis behind it. Not I feel anxious because the deadline and the history and the pattern. Just, right now, I’m anxious. I’m sad. I’m glad. Full stop. This is harder for you than it looks, because the causal clause is where you live, and cutting it off feels like leaving a sentence unfinished. Leave it unfinished. A named feeling with no theory around it is a feeling you’re inside of rather than above, and that’s the whole point.' },
        { label: 'Day 11. The stay-down rule.', body: 'A new rule for the reflex you reach for most, the instant reading. Anything that sounds like here’s why this is happening, offered while a feeling is still live in the room, waits ninety seconds first. Feel the pull up, name it, run the stay, and only then decide whether the reading is actually wanted. At second 91, if a clear explanation genuinely serves, give it, and now it comes from someone who felt the thing first. A week of this and you’ll land where a lot of Alchemists land, that a surprising number of your explanations were never for the other person at all, they were exits from a feeling you didn’t want to be inside of.' },
        { label: 'Day 12. The presence experiment.', body: 'Your system still half-believes that understanding is the only real way to help. Test it, gently. Pick a moment when someone near you has a feeling, and offer only your presence, a hand, a warm quiet, a plain I’m here, with no analysis at all. Then watch what actually happens. Almost always the person softens, because a felt presence reaches them where a perfect reading never could. Note what you feared and what actually happened. Your nervous system won’t take the theory, it takes reps of evidence, and this is a rep.' },
        { label: 'Day 13. The stay on your worst trigger.', body: 'You’ve known your trigger family since day 2. Today you take the stay there on purpose. If the other person’s emotion owns you, the next time someone near you is flooded gets the full move, sentence, stay, hand on the belly, presence before reading. This is the deep end, and it’s fine to go under a little. If it collapses and you climb into analysis anyway, write down where it collapsed, no commentary. One honest failure on your hardest trigger teaches more than ten easy wins, and it counts as a finished day.' },
        { label: 'Day 14. Week two review.', body: 'Pull out day 4’s measurement and compare. Did the raw feeling last a little longer before you cut it off? Did you stay down in the body a beat more often? For most people the honest answer right now is somewhat, and somewhat is exactly on schedule. Notice what hasn’t changed too, the pull up into the head still rises, and it was never meant to stop. The work was always the switch that follows it, and the switch is starting to lose the race to the stay.' },
      ],
    },
    {
      id: 'planWeek3', zone: 'paid', type: 'exercises',
      title: 'Week 3, Share Instead of Explain',
      lead: 'Climbing into analysis is a way of handling a feeling without ever having to hand it to anyone. This week you hand it over, and trade the finished reading for the raw feeling underneath it.',
      exercises: [
        { label: 'Day 15. Write the real feeling.', body: 'Under every explanation you’ve ever given, there was a raw feeling you weren’t saying out loud. For most Alchemists it’s some version of this scares me and I’d rather understand it than feel it, or I’m moved right now and I don’t know what to do with that except analyze it. Tonight, write yours, in your own words, exactly as you’d say it if saying it cost nothing. Don’t send it anywhere, just look at it. There’s something quietly striking about it, all that machinery of thought built to keep you a safe inch away from a sentence with no clause in it.' },
        { label: 'Day 16. The translation table.', body: 'Take the analysis story from day 6 and turn it into something a person could actually receive. Here’s why you’re feeling that becomes I can see you’re hurting, and I’m right here. What you’re describing is a classic pattern becomes that sounds really hard, tell me more. Write two or three translations down. This week’s whole skill is turning a reading into a presence, and the sentence, like everything else this month, starts on paper before it ever reaches a person.' },
        { label: 'Day 17. Offer one raw feeling.', body: 'Share one small, real feeling today that you’d normally have packaged as an observation. Nothing dramatic, plain, I actually feel really glad right now, said straight, rather than turning it into a wry remark about why the moment is nice. Watch yourself do it. There’s usually a pull to add the clause, to explain the feeling and take the edge off its rawness. Say it clean, no clause. A feeling handed over bare tends to land far closer than any analysis, and it gives the other person the actual you instead of your commentary on you.' },
        { label: 'Day 18. Name the switch out loud, once.', body: 'With your partner, or whoever’s closest, name the mechanism one time. Past tense, no crisis attached, I catch myself explaining things when what you actually wanted was me, present, and I’m working on that. Then change the subject if you like. Two things happen at once. The switch comes out of the dark, where it does its best work, and you learn by direct experiment that showing it costs you none of the standing you thought your competence was protecting.' },
        { label: 'Day 19. Stay through the good.', body: 'Today or this week, when something genuinely warm happens between you, a tender moment, a plan that lands, a closeness that feels easy, skip the reflex to observe it from above and stay down inside it. Don’t narrate it, don’t note how nice it is, don’t reach for why it’s working. Let the good moment be a felt moment, and let it last as long as it lasts. This is the harder cousin of week two’s stay, holding on when nothing is wrong, which is precisely when your system reaches for the safe height of commentary.' },
        { label: 'Day 20. Let the feeling reach you.', body: 'The next time warmth comes your way, a kind word, an open hand, a plain I’m glad you’re here, it gets new treatment, you let it land in the body before your head does anything with it. When the switch leans in with they’re just being nice, or here’s what’s really going on for them, you know that voice by now. Here’s the thing that’s easy to miss, warmth only reaches you once you stop rising above it to examine it. Studied from the ceiling, it never becomes the thing you actually needed. Today you practice letting it in at floor level.' },
        { label: 'Day 21. The repair move.', body: 'If a switch got away from you this week, a reading given where a presence was wanted, a feeling left cold on the table, repair it today in one sentence, I gave you an analysis the other day when you needed me to just be there, and that’s on me. No essay, no elaborate account of your own mechanism, both of those are just the switch again in a new coat. Alchemists tend to fear that admitting the mechanism plainly, without theorizing it, leaves them exposed. In practice it’s the steadiest sentence in this plan, because it puts a present person back in the room right after an absent one, which is the only place presence ever actually shows.' },
        { label: 'Day 22. Week three review.', body: 'Three questions, on paper. Which cost you more, the 90-second stay or the raw feeling handed over? What actually happened when you offered a presence instead of a reading? Did losing control of the feeling arrive, or did it just feel certain? Then reread your day 15 sentence. It’s probably shrunk, and probably lost a clause or two. Sentences do that once they stop living in the head and start getting felt.' },
      ],
    },
    {
      id: 'planWeek4', zone: 'paid', type: 'exercises',
      title: 'Week 4, Hold the Open Channel',
      lead: 'Snagged is a position you have to keep choosing. This week is about holding the new sightedness when the old height starts whispering that it would be cleaner to just understand this from above, and the pull up into the theory comes looking for you.',
      exercises: [
        { label: 'Day 23. Your minimum kit.', body: 'Three weeks of notes have already told you which tools are actually yours. Pick three. For a lot of Alchemists it ends up being the 90-second stay with a hand on the belly, the raw feeling named with no clause, and the presence offered before the reading, but yours is yours. Write them on one card, paper or phone. From here on, this card is the plan. Everything else was scaffolding you can put down.' },
        { label: 'Day 24. The calm-day trap.', body: 'A warning that’ll sound strange, calm stretches are where this work usually dies. Nothing’s flooding, the head feels like a fine place to live, the practice feels pointless, it quietly stops, and the next big feeling arrives against a body that hasn’t run a rep in three weeks. So today, on what’s hopefully an ordinary calm day, run the full stay once on a small feeling on purpose, like a drill. Two minutes. Drilling on a calm day builds the muscle memory, so when a real wave comes your body already knows to stay down in it instead of taking off.' },
        { label: 'Day 25. The relapse plan.', body: 'Write it now, while you’re steady, because you won’t write it mid-analysis. Something like, when I climb up into the head and leave someone alone with their feeling again, I’ll name it within a day, run the repair move, and restart the evening review for three days. That’s it. A relapse with a plan costs you an evening. A relapse without one can cost you the whole thing, and not because of the single analysis, but because of the story that moves in behind it, the old one that says see, connection was always going to be a theory you observe, never a place you live.' },
        { label: 'Day 26. Tell someone what changed.', body: 'One person, one concrete thing, I don’t just explain feelings from above anymore, mostly I catch it now and try to actually be there. Out loud, to a partner or a friend. The notebook has done a lot for you this month, but there’s one thing it can’t do, make the new position part of your story out in the world. Positions hold better once somebody has watched you take them.' },
        { label: 'Day 27. The wide-angle day.', body: 'Here’s a cost you probably never added up, all the moments you were physically present and emotionally on the ceiling. Conversations where you gave the perfect read and the person still felt alone, griefs you understood for months before you felt them, warm nights you narrated instead of lived. That’s a lot of presence left off the table over the years, and some of those people needed the felt you and got the analytic one. You can’t go back for all of it. But today, pick one bond that’s still reachable, one where you’ve mostly offered your head, and offer a raw feeling or a plain presence inside it instead. Practice being met on the floor somewhere you’d normally have watched from above.' },
        { label: 'Day 28. Stress-test honestly.', body: 'On paper, honestly, if the real thing hit tonight, a partner in tears, a wave of your own too big to manage, a warm moment easy enough to be frightening, what would happen? If your answer is some version of the switch would rise, and I’d catch it in the moment and stay down in the feeling before I reached for the reading, that’s Snagged, that’s the target, that’s what it looks like. It was never going to look like never reaching for the head at all. If your answer is I’d be up in the theory before I noticed, go back through your week reviews, find where the notes got thin, and redo that week. The plan is a loop, not a corridor, and going around again isn’t failing it.' },
        { label: 'Day 29. Write the before-and-after.', body: 'One page. A real scene from before this month, a moment you handed someone an analysis when they needed you present, told straight, with what you told yourself on the way up into your head. Then the same scene as you’d run it today. Specific, yours, names and all. Keep this page somewhere you can find it, because on some future hard night the switch is going to swear to you that this time the analysis really is the help, that feeling it would only make things worse. The switch, as you’ve established this month, is a detector with one setting and a talent for sounding like wisdom. This page is the receipt that says otherwise.' },
        { label: 'Day 30. Retake the test.', body: 'Take the assessment again, today or this week. Not for a grade, for a reading, and you like a good reading. If your Anchor moved toward Snagged, the kit works, keep the card, drop the daily pages, and rerun any single week whenever the head starts winning again, which it sometimes will. If it didn’t move, your own notes will show you which week to redo, and that’s a map doing its job, not a verdict. Either way, something changed this month that doesn’t change back, you’re no longer guessing whether there’s a version of you that can feel a thing all the way through and stay standing. There is, and you’ve watched it hold.' },
      ],
    },
    {
      id: 'acuteKit', zone: 'paid', type: 'prose',
      title: 'Before You Explain It Away',
      lead: 'The 90-second kit for the moment the feeling rises and the head reaches for it. Pocket card.',
      paras: [
        'Something just landed with weight, theirs or yours, and you can already feel the lift starting, the pull up and out of the feeling into the clean high air of analysis. The explanation is half-loaded, the cause, the pattern, the reframe that will put the whole thing at a manageable distance. This card skips growth and childhood and understanding. Right now there’s only the feeling, rising, and the ninety seconds you’re about to put between it and the theory.',
        'One, name it, three seconds. That’s the flood I’m outrunning, not the truth. Say it under your breath if there are people around. The phrase works as a location device. It tells you where you actually are, inside an old flight from a feeling rather than inside a clear-eyed read on the situation. Putting a name on what’s happening turns its volume down a notch, measurably, every time.',
        'Two, stay in the body, about sixty seconds. Your switch doesn’t start in your thoughts, it starts in a body that’s already lifting off, heading for the ceiling where feelings can’t reach. So that’s where you meet it, by coming back down into it. Pick one move and use the same one every time, so your body eventually runs it without being asked. Press one hand flat on your belly and feel it rise and fall. Or breathe with the out-breath longer than the in-breath, the long exhale being the body’s own stand-down signal, and lean on it on purpose, sensation not idea. The one rule that holds them all together, don’t explain yet. Not the cause, not the reframe. Stay down where the feeling is a beat longer than feels safe.',
        'Three, feel it bare, the rest of the 90. Whatever the feeling is, let it be there without a clause. Not why it’s happening, just that it is, the heat or the weight or the ache of it, running its course. A wave you don’t flee crests and passes on its own, a good deal faster than the switch swears it will. You’ve timed this yourself by now, so trust your own stopwatch over the switch’s forecast that this one will drown you.',
        'Four, choose with your feet on the ground, after the 90. Now decide, actually decide. Maybe a clear word really would help here, and now you can offer it as someone who felt the thing first, not someone who used it to leave. Maybe what’s wanted is just your presence, and you can give that instead. Any of those is a fine call. The win was never that you refused to think, it’s that a present person made the choice instead of a switch making it for them.',
        'What not to do inside the wave. Nothing that hands the moment a theory in place of you, no reframe fired off to get above a feeling, no reading offered to someone who wanted your hand, no raw thing quietly filed away as a concept before it was ever felt. And keep the big read in its holster. The certainty that understanding this is the same as handling it is a daylight tool, and looked at calm the next morning it either holds up or quietly dissolves, while trusted mid-wave it will lift you straight out of a moment someone needed you inside of, wearing the face of a clear head.',
        'Tomorrow, thirty seconds in your notes. What set it off, whether you stayed down, what story the switch told. Not to grade yourself, there are no grades here. Every wave you log makes the next one more familiar, and familiar waves move you less. You’re becoming someone who can feel the pull up into the head and stay on the ground with the feeling, and that’s a steadier bet than waiting for the pull to stop coming.',
        { byPalier: {
          '0': 'At your position the full sequence mostly holds, and you often stop the switch at move one. Keep the card for the moments the feeling runs deep, when someone truly matters and the old flight up into the head still knows how to rise.',
          '1': 'You’ll usually get through the sequence now. The card’s here for the harder moments, when the switch moves faster than you and you need the moves in order to find your feet on the ground.',
          '2': 'At Snagged, run the full sequence. Some moments you catch it at move one, other moments you’re already up in the theory before you remember the card exists, and you pick it up from wherever you are.',
          '3': 'The full sequence probably won’t hold on your first few waves, and expecting it to is a setup for shame. Run moves one and two, and call that a complete rep, because it is. The rest of the card comes online as the catch speeds up.',
          '4': 'Run moves one and two only, and count that as a complete rep. A partial kit you actually reach for beats a complete one you never open. The rest unlocks later, on its own, as the catch gets quicker.',
        } },
      ],
    },

    {
      id: 'lectures', zone: 'paid', type: 'bookcards',
      title: 'Your Reading List',
      lead: 'A book meets you where you are or it slides right off, and for you there’s a particular trap, reading about feeling is one more way to think about it from a safe distance. So this list is sorted by your position on the scale, not by fame, and it comes with one instruction, read to feel your way in, not to master the material. One at a time, at your tier, and keep the plan running while you read. The plan does the moving, the book explains the map.',
      books: {
        byPalier: {
          '0': [
            { title: 'Permission to Feel', author: 'Marc Brackett', blurb: 'You’ve already done the hard part, so this one is about keeping the channel open, staying fluent in your own emotions once the pressure to analyze them has quieted. Brackett’s whole subject is naming and living feeling as a skill you keep sharp, which at your position is the frontier worth holding.' },
          ],
          '1': [
            { title: 'Nonviolent Communication', author: 'Marshall Rosenberg', blurb: 'You’re already staying with the feeling, so the skill that matters now is handing it over. Rosenberg’s whole method is saying the raw feeling and the need underneath it plainly, in a way that brings someone close instead of leaving them with a reading. That’s exactly the move week three asks of you. Read it with a pen, and resist the urge to systematize it.' },
          ],
          '2': [
            { title: 'Permission to Feel', author: 'Marc Brackett', blurb: 'Written for your exact position. It treats staying with a raw emotion as a learnable skill rather than a loss of control, which is the reassurance your system most needs to hear from a credible source. It gives you a way to name and hold a feeling without the theory, which is the swap this whole month turns on. If you read one book this month, this is it, and read it slowly.' },
          ],
          '3': [
            { title: 'The Body Keeps the Score', author: 'Bessel van der Kolk', blurb: 'At your position you tend to see the switch only in hindsight, and this is the book that explains why, why you leave the body for the mind the instant feeling rises, and why the body-first moves in your kit, the hand on the belly, the long exhale, the stay, aren’t decoration. It plugs straight into your evening review, and it speaks your language, rigorous and evidence-led, while pointing you back down into the body.' },
          ],
          '4': [
            { title: 'How Emotions Are Made', author: 'Lisa Feldman Barrett', blurb: 'This one meets you exactly where you live, in the mind, with a rigorous science-first account of emotion that respects your need for an accurate model. That’s the point, it earns your trust on your terms, then quietly opens the door to feeling the things it describes. One honest note, if the reading starts to become one more way to stay above your own feelings, set it down and come back to the plan. At this depth, if analysis has been a wall for a long time, bringing a professional into your corner is the strongest move on the board, and the plan keeps running right alongside it.' },
          ],
        },
        default: [
          { title: 'Permission to Feel', author: 'Marc Brackett', blurb: 'The clearest case that staying with a raw emotion is a learnable skill, not a loss of control, which is the reassurance your system most needs from a credible source. It teaches the swap this month turns on, naming and holding a feeling before the analysis takes over.' },
        ],
      },
    },

    {
      id: 'lecturesWarning', zone: 'paid', type: 'prose',
      when: { if: { palier: 4 } },
      callouts: [
        { tone: 'care', text: 'A word, in honesty. For you there’s a specific risk with any book on emotion, that reading about feeling becomes one more elegant way to avoid doing it. If you notice that happening, set the book down and come back to the plan, which asks for feeling rather than understanding. And if analysis has stood between you and your own emotional life for a long time, bringing a professional into your corner is the steadiest move you can make, and it means the work is going deep enough to need it.' },
      ],
    },

    {
      id: 'devenir', zone: 'paid', type: 'prose',
      title: 'What you become when you rise',
      paras: [
        'An Alchemist who rises doesn’t lose their intelligence. You keep your lucidity, your ability to make meaning, your precious distance in a crisis, your precise words. But you no longer use them to cut yourself off from emotion. You can understand and feel, put words to things without turning the other person into a file, analyze without disappearing behind your analysis. You offer a presence when it’s needed, and a reading when it helps, instead of always choosing the head.',
        'Be patient, the path is neither fast nor steady. You’ll go into analysis again, especially when the emotion is strong. That won’t be a failure, just the sign that you’re learning. And what lifts you is something you live rather than work out, the supreme irony for you, the slow experience, gathered over months, that a strong emotion can move through you without engulfing you. That happens with others, and it can be practiced.',
      ],
    },

    {
      id: 'etApres', zone: 'paid', type: 'prose',
      title: 'And after this',
      paras: [
        'This report is a snapshot of you today. Your Anchor isn’t fixed, it moves as you integrate your mechanism. The more you learn to feel the urge to go into the head and to stay with the feeling, the less it decides in your place, and the more you let the right people meet you in the heart, not only in ideas.',
        'Each level has its own way of working. What you do at level {{ancre_position}} won’t be what you do at the level above. So come back, in a few weeks, take this test again. It’ll become your progress mirror. If your Anchor rises, you’ll know you’re feeling where you’d once only have explained. And if it lowers after a hard stretch, that’s useful information, not a setback. Either way, you have a compass.',
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
