/* ============================================================================
   LovePattern  .  CONTENT BLOCKS  .  cameleon   (EN delivery)
   ----------------------------------------------------------------------------
   English content. Free zone ported 1:1 from the original zoned source.
   Paid zone written on the Runaway/Bastion templates (denial-side voice),
   brought to Mirror parity: standalone Catch, dated 30-day plan, standalone
   acute kit, blindSpot moved to the free teaser slot.
   Variable names stay French verbatim. Only their VALUES are English.
   Axis: contextual (the Chameleon molds to the expectation it senses, to be
   loved for the version that fits). Payment boundary: zone:'free' vs zone:'paid'.
   SERVER-ONLY. House rule: never the long dash.
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
        byPalier: { '2': 'You’re The Chameleon. And you already know it.' },
        default: 'You’re The Chameleon.',
      },
      paras: [
        'You watch yourself do it. The moment you say yes without meaning it, when you mold to what the other person expects, part of you notices. You know you’re hiding again, and you keep going anyway. If you’re here, it isn’t to be taught that you adapt, you know that already. You’re here because understanding it changed nothing, and that powerless lucidity wears you out.',
        'Here’s the most important thing in this report, because you’ve waited long enough. What you’re missing isn’t willpower. The moment you sense an expectation, your adjustment leaves before your head has decided anything. Nobody has shown you how to find your true color again before answering.',
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
        'This reflex of adapting, you didn’t choose it as an adult. According to Bowlby’s attachment theory, a child builds an internal model with their parent of how relationships work, which then guides their whole love life.',
        'In your case, that model learned a precise rule. I’m loved when I match. Maybe as a child, showing your real preferences, your disagreements, your needs, wasn’t welcome, and you understood it was safer to guess what was expected of you. Maybe a parent needed you to be a certain way, and your real self took up too much room or made too many waves. Maybe being different cost you a look, a tenderness, an approval. Whatever the scene was, your conclusion as a child was logical. If I show who I really am, I risk no longer being loved.',
        'It wasn’t fakeness. It was the smart protection of a child for whom being themselves felt dangerous. The problem is that this strategy is still running today, and it has you hiding your true color from people who would love you for exactly that.',
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
        'At the start, your adapting is appealing. You’re easy to love, in sync, pleasant, and the other person feels wonderful with you. Then the relationship settles around this adjusted version of you. You say yes without checking, you play down your needs to keep the harmony, you avoid the subjects that might reveal a disagreement.',
        'The other person grows attached to this version, without knowing it’s partial. And you start feeling loved for someone who isn’t quite you, which hollows out an emptiness and a quiet resentment. As time passes, you dare less and less to show yourself different, because the gap between the loved version and the real you becomes frightening. The loop gets worse. In the end, when you finally reveal yourself, the other person is surprised, sometimes disappointed, and that surprise confirms what you feared, being yourself makes you lose love. Except that proof was built by your own strategy. You didn’t show that your real self is unlovable, you just hid that real self so long that its arrival felt like a surprise.',
      ],
      callouts: [
        { if: { repetition: 'forte' }, tone: 'note',
          text: 'You told us your relationships look alike, that people end up discovering someone other than who they thought they loved. This is why. It isn’t that you lie. It’s that you show your true color so late that its reveal feels like a betrayal, when it was just you.' },
      ],
    },

    {
      id: 'pourquoiComprendre', zone: 'free', type: 'prose',
      title: 'Why understanding it has never been enough',
      paras: [
        'You’ve surely understood already that you adapt too much, and it changed nothing, because your mechanism doesn’t live in your head. It was written into your body before words, in the part of you that reacts, the part that says yes before you’ve even consulted what you want. The psychiatrist Bessel van der Kolk showed it, the body keeps the score of what the mind has forgotten, and that’s why you don’t unlearn adapting through reasoning.',
        'The next time you feel this reflex to adjust rise, that automatic yes, that disagreement you swallow, that preference you keep quiet, know that a surge has fired through your body, a small alarm saying careful, be what’s needed. It has a length, around ninety seconds, if you don’t feed it. The trouble is that you feed it by adapting right away. So next time, don’t answer right away. Stay, one hand on your belly, breathe, and let the wave pass for a minute and a half. You’ll discover that in the end you find what you really want again, and that saying it, sometimes, makes nobody flee. This tool is yours.',
      ],
    },

    {
      id: 'blindSpot', zone: 'free', type: 'prose',
      title: 'What You Don’t See',
      paras: [
        'Here’s the most unsettling part. When someone is open, welcoming, and would probably love you exactly as you are, you still keep playing the version that pleases. Not because that person is demanding, but because showing yourself for real feels, to you, like a leap into the void. You never test whether you’d be loved being you, because you never take the risk of being it.',
        'The trap is that even the steadiest people only ever receive your adapted version, so they can never prove they’d love you any other way. You’re left then with a doubt that won’t resolve, am I lovable for real? And the less anyone proves it to you, the more you adapt, for safety. So the fear feeds itself, quietly, on a lack of evidence you yourself keep arranging.',
        'That doubt is the real cost, and it’s the thing the plan is built to move, one shown true color at a time, until the evidence finally starts coming in. That’s where the paid report begins.',
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
        'You don’t only adapt in love. You change color a little with almost everyone. People find you easy, pleasant, accommodating, and yet you sometimes feel a stranger to your own life, as if you’d forgotten what your true shade was. This flexibility that was meant to make you loved sometimes starts to feel like an absence of you.',
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
      lead: 'You’re at level {{ancre_position}}: “{{ancre_position_libelle}}”.',
      paras: {
        byPalier: {
          '0': [
            'You’re The Chameleon, and you’ve learned to adapt without losing yourself. You feel the urge to change color coming, and most of the time you choose to stay yourself. This report won’t teach you to see yourself, but to hold that new presence and to spot what could make you pick up your borrowed colors again.',
          ],
          '1': [
            'You’re The Chameleon, and you watch yourself adapt live. More and more, you manage to show a real preference instead of molding. It isn’t systematic yet. What’s left is to turn each automatic yes into a choice, and to learn to say your real opinion instead of guessing the one that’ll please.',
          ],
          '2': [
            'You watch yourself do it. The moment you say yes without meaning it, when you swallow a disagreement, you know it. You know you’re hiding again, and you keep going anyway. That lucidity that prevents nothing is a real pain, the pain of someone who’d like to show themselves and whose body always picks the safe version.',
            'You now know what’s happening to you, where it comes from, and why understanding it hasn’t switched it off. You have a first tool that works in the body. What comes next is your plan.',
          ],
          '3': [
            'You’re The Chameleon, and you’re starting to see it. You recognize that you adapt, but on a delay, once the resentment has set in or after swallowing too much. It’s later that you realize you said yes again without meaning it. You have the lucidity, what you’re missing is the right moment.',
          ],
          '4': [
            'You’re The Chameleon. If your relationships often end the same way, you probably feel misunderstood, or that people are too demanding, too harsh, that you constantly have to make an effort to be loved. From where you stand, it’s other people who ask too much. You’re sometimes right. But I want to offer you another angle, gently. What if part of what keeps repeating also came from a very old habit of guessing what’s expected of you and molding to it, until you never show yourself for real?',
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
        'Your Chameleon doesn’t move alone. Right behind it sits {{pattern_secondaire}} ({{pattern_secondaire_score}}).',
        {
          bySecondaire: {
            sauveur: 'You don’t only adapt, you also make yourself useful. You become the version that pleases, and on top of that you carry the other person. Double erasure, double forgetting of your needs. In your plan, we work first on finding what you want, before trying to match or to help.',
          },
          default: 'Whatever it is, it deepens the same adapting, your way of becoming what pleases. Your plan starts by finding your own color again, before working on this second mechanism.',
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
            blurb: 'An integrated Bastion, someone with a high Anchor, a calmed Alchemist. What they share, they’re stable, readable, they don’t expect a performance from you, they leave you room to be yourself without having to guess what pleases. Near them, you don’t need to change color, because nobody asks you to match.',
            items: [{ code: 'bas', name: 'Integrated Bastion' }, { code: 'anc', name: 'High Anchor' }, { code: 'alc', name: 'Calmed Alchemist' }] },
          { label: 'The ones who understand you', tone: 'comprend',
            blurb: 'A Mirror on the way, an integrated Savior, an integrated Watcher. They know from the inside the fear of losing your place, the difficulty of staying yourself. After that, everything depends on each person’s Anchor.',
            items: [{ code: 'mir', name: 'Mirror on the way' }, { code: 'sau', name: 'Integrated Savior' }, { code: 'gue', name: 'Integrated Watcher' }] },
          { label: 'The ones who make you vanish', tone: 'declenche',
            blurb: 'A very active Arsonist, a very closed Bastion, a dominant or unpredictable partner. They create exactly what wakes your mechanism, a strong expectation, a frame to guess, a risk of not fitting. The more demanding or unstable it is, the more you adapt. They aren’t bad people, they’re the riskiest dynamic for you as long as your Anchor is low.',
            items: [{ code: 'inc', name: 'Active Arsonist' }, { code: 'bas', name: 'Closed Bastion' }] },
        ],
      },
    },
    {
      id: 'compatProse2', zone: 'paid', type: 'prose',
      paras: [
        'And there’s a scientific reason for your pull toward the ones you have to guess. Hazan and Shaver showed, back in 1987, that adult love replays the attachment system of childhood. Your body recognizes the bond where you have to earn your place by matching as familiar, and calls it love. That’s why a person who accepts you right away can feel flat or suspicious to you, when they may be the one with whom you could finally be yourself.',
      ],
    },

    {
      id: 'catch', zone: 'paid', type: 'prose',
      title: 'The Chameleon Catch',
      lead: 'Catch the adjustment before it becomes a yes. Ten seconds.',
      paras: [
        'Somewhere in an ordinary week there’s a moment you know by heart. Someone asks what you’d like, or floats a plan, or lets a small opinion hang in the air waiting for yours, and before you’ve checked in with yourself at all, the answer is already forming, and it’s the one that fits them. Sure, that works for me. I don’t mind either way. Yeah, I love that too. The adjustment is out of your mouth before you’ve had a chance to notice you had a preference of your own.',
        'Your mechanism has a first move, and it happens fast, well before the resentment it becomes. Most people at your position only catch it hours later, once the yes has already been given and a small ache of self-betrayal has set in, or weeks later, when the version they fell in love with turns out not to be quite you. The Chameleon Catch trains one narrow skill, feeling the adjustment in the second it fires, instead of long after in the emptiness it leaves.',
        'You won’t be trying to stop adapting. The urge to become what fits is old and quick, and people who try to force themselves to be authentic usually clench up, perform sincerity, and end up adapting to the idea of who an authentic person would be. You’re learning to see the reflex fire. That turns out to be almost everything.',
        'And it rarely announces itself as fear. It shows up wearing the face of ease. I really don’t mind. I’m just easy that way. It’s not a big deal to me. Sometimes that’s true, and a genuinely easy preference is a fine thing to have. The tell is the speed. A true I don’t mind arrives after a small internal glance and finds nothing much there. The adjustment arrives before the glance, because the glance is the exact thing it’s built to skip.',
        'What you’re feeling has a name, and it helps to know it. Some clinicians call it the fawn response, first named by the therapist Pete Walker, the reflex to keep a bond safe by merging with what the other person seems to want. Bowlby described the attachment system as running under threat toward whatever kept the caregiver close. For a child whose real preferences met a cool look or a closed door, the safest available move was to guess the wanted version and become it, and need less of your own. That move never switched off. It still fires the instant a bond asks you to have a self of your own inside it.',
        'Here is the whole gesture. The moment an answer is expected and you feel the automatic yes start to form, the agreeing, the matching, the swallowing of a different view, you say one sentence to yourself, silently.',
        'That’s the fear, not me.',
        'Then you answer however you were going to answer. You read that right. On day one you can say the sentence and still give the adapted yes. Saying it is the win, because saying it means you caught the adjustment in the act, and an adjustment you can see is no longer choosing for you on its own. Ten seconds, and it works while you’re still adapting, because it doesn’t ask you to stop first.',
        'The reflex is a threat detector wired for one danger above all others, being rejected for who you actually are, and detectors like that fire early and fast, long before the thinking part of you gets a vote. Putting a name on what’s happening, even under your breath, has been shown to loosen its grip on you measurably. And here is the part almost everyone misses, including you, most days. Under the adjustment, a real preference exists. It didn’t vanish when you molded. It went quiet, unconsulted, which is a different thing from being gone. The whole plan is built on that difference.',
        { byPalier: {
          '0': 'At your position you catch most of these before the yes even forms. Your version is lighter, a nod at an old habit. You feel the pull to match, you almost smile at it, and you check in with yourself before you answer.',
          '1': 'You already catch a lot of these as they fire. Your version gets shorter and quieter, closer to a private nod than a sentence. You feel the adjustment start, you name it, and more often than not you find your real answer before you speak.',
          '2': 'At Snagged you already feel the yes coming, which puts you ahead of most people who share your pattern. Say the sentence the instant the automatic yes starts to form, then let yourself answer however you were going to answer. The catch itself is the whole win this month, not the staying true.',
          '3': 'There’s a hitch worth naming, the adjustment doesn’t feel like an adjustment yet, it feels like you genuinely not minding. So skip the live catch for now and work in hindsight. Once a day, in the evening, write down one moment you molded. Same muscle, trained on yesterday’s footage. The live catch shows up on its own once hindsight gets quick enough, and it does get quick.',
          '4': 'At your position the adjustment still feels like plain ease, like you simply happen to be easygoing, so don’t chase the live catch yet. Do it in hindsight, once a day, in the evening, writing down one moment you said yes when a truer answer was somewhere underneath. You’re not judging the moment, you’re locating it, so your eye learns the shape of the move. That part can’t really be rushed, and doesn’t need to be.',
        } },
      ],
    },

    {
      id: 'planIntro', zone: 'paid', type: 'prose',
      title: 'The 30-Day Plan',
      lead: 'From Hooked toward Snagged. One page a day.',
      paras: [
        'Before anything else, choose who you’re being for the next thirty days. Not the one who reads the room and becomes whatever it seems to want, and lets the adapted version do the loving so the real one never has to risk it. The one who checks in with themselves for one second before answering, and lets a small true color show even when a smoother one is right there. You already own what this takes. The same attunement that lets you sense exactly what someone wants is, turned a few degrees inward, the instrument that finds what you want. This month you point it at yourself. Week one asks nothing of you but to watch the adjustment start. The doing comes later, and it comes easier once you can see the reflex clearly.',
        'A word on the promise, because it’s a modest one on purpose. This plan moves you one position on the scale, from Hooked, where the reflex gives your answer before you’ve caught it and you only see the molding later, toward Snagged, where you feel the yes coming in real time and get to choose what to do about it. No new personality, no cure, one position. The move is from blind to sighted, and what you do with the sight stays entirely your call. People underestimate what that shift feels like from the inside. The relationships where you slowly disappeared, where they loved a version and you knew it, stop taking that shape, and that alone changes the texture of a life.',
        'One rule for the month. An adjustment is never punished here. An adjustment you notice and write down is data, and data is the entire reason you came. An adjustment you give in silence, molding, agreeing, swallowing the truer answer, becomes another brick in a version that isn’t you, and that version is what gets loved in your place. So you catch it out loud instead, on the page, where you can see it for what it is.',
        { byPalier: {
          '0': 'Where to begin, for you. You already find your own color most days, so read this as maintenance. Skim to week three and use the earlier weeks only where a page names something you’ve felt tug at you lately.',
          '1': 'Where to begin, for you. Slipping, you can jump to day 15. The first two weeks are seeing the adjustment and pausing on it, and you already have most of that. The work that’s left for you is saying the truer thing out loud.',
          '2': 'Where to begin, for you. Snagged, you can start at day 8, though day 6 is worth a detour. You already catch the yes in the moment, so the early audit will move fast, and the pause is where your real work starts.',
          '3': 'Where to begin, for you. Hooked, start at day 1 and keep the written pace. The plan is built around exactly your position, seeing the molding only in hindsight, so the default rhythm is yours.',
          '4': 'Where to begin, for you. Read the What You Don’t See page first, because until you have, this plan will read like a list of accusations. Then take week one at half speed, one review every two days. The adjustment still feels like plain ease at your position, and the whole month is about it slowly starting to feel like a reflex instead.',
        } },
      ],
    },
    {
      id: 'planWeek1', zone: 'paid', type: 'exercises',
      title: 'Week 1, See the Adjustment',
      lead: 'You change nothing this week. You watch the adjustment start and learn its parts, what sets it off, where it lives in your body, the story it tells while it molds you into shape. Seeing it clearly is the whole job, and everything later is built on it.',
      exercises: [
        { label: 'Day 1. The evening review.', body: { byPalier: {
          '0': 'Tonight, before bed, write down one moment today where the pull to match rose, even if you stayed with your own answer. A flicker of wanting to agree, an urge to soften your real view, a preference you nearly hid. Facts only, what set it off and what you did with it. At your level this is a light rep, a way to keep the eye sharp.',
          '1': 'Tonight, before bed, write down one moment today where the adjustment rose. An automatic yes you caught, a disagreement you nearly swallowed, an opinion you shaped to fit. Facts only, what set it off, what you did. You’re proving to yourself the adjustment is still visible while it happens, which is most of the skill.',
          '2': 'Tonight, before bed, write down one moment today where you molded, or wanted to. Said yes without checking, agreed to keep the peace, kept a real preference quiet, became the version that fit. Facts only, what set it off, what you did, and whether an expectation had just landed right before. If a flicker of resentment shows up on the page after, write it down too. You’re not fixing anything yet, you’re turning the lights on in a room you’ve been leaving in the dark for years.',
          '3': 'Don’t hunt for the adjustment live today, it’s still too quick and too convincing to catch coming. Tonight, take one quiet minute and find a single moment where you molded. Write down what came just before it, the expectation or the ask that set it off. Finding it at night is how the eye learns the shape of the move before it can catch it in daylight.',
          '4': 'Don’t chase the adjustment live today, it still feels like you simply being easy. Tonight, before sleep, find one moment you said yes or agreed and write down what came just before it, a wish someone had, an opinion in the air, a chance to fit in. You’re only locating one, so your eye starts to learn the shape. No judging the moment, just marking where it was.',
        } } },
        { label: 'Day 2. Find your trigger family.', body: 'Most Chameleons have one dominant family of triggers. Approval is one, someone whose warmth you can feel yourself reaching for, and molding to keep. Conflict is another, the faint charge of a disagreement in the air, and the reflex to smooth it away by folding. The strong personality is the third, a person with clear tastes and firm opinions, next to whom your own preferences seem to quietly evaporate. Look at yesterday’s note and today’s moments and ask which family owns you. A trigger you can see coming a street away is already half caught.' },
        { label: 'Day 3. The body tell.', body: 'The adjustment has a physical signature, and it fires before the yes does, so it’s worth learning yours. For a lot of Chameleons it’s a small tightening, a held breath, a soft quickening like the start of stage fright, the body bracing to perform. For others it’s a quiet going-blank, the sense that your own preference has stepped out of the room just as it was needed. Find yours today, the exact spot and the exact instant it lights. It becomes your early-warning system next week.' },
        { label: 'Day 4. Time the surge.', body: 'Today, when the pull to adapt rises, glance at the clock. Glance again when the urge to match drops off. Most people at your position have never actually measured this, and the number tends to surprise them, the raw surge is short, often a minute or two, sometimes less. What makes it feel like the whole truth is the speed of the yes, because answering instantly never gives the surge time to pass and your real preference time to surface. Write down what you found. One honest measurement beats a month of impressions.' },
        { label: 'Day 5. Catch one live.', body: 'First live attempt. Once today, at the exact moment an answer is expected and the automatic yes starts to form, say it, that’s the fear, not me. Then, and this matters, answer however you were going to answer. Give the adapted yes if that’s what comes. Today’s win is the catch itself. Whether you find your real answer or not doesn’t change the score today, only whether you saw the adjustment fire at all.' },
        { label: 'Day 6. Map the story.', body: 'The adjustment never travels alone, it brings a story, and it’s usually a short one it has told a thousand times. If I show what I really think, they’ll pull back. My real preference is too much, too odd, too inconvenient. It’s easier and safer to just fit. Tonight, write yours down word for word, the way it actually runs in your head. People are often a little startled to find their molding has been reciting the same line since they were small. The story runs on a loop, and a loop loses its grip once you can say it along with the screen.' },
        { label: 'Day 7. Week one review.', body: 'Read your six notes and answer three questions on paper. What is my trigger family? Where does the adjustment live in my body, and how long does the raw surge last unfed? What is my molding story? Sit with the fact that you now know more about your own adapting than most people ever learn about theirs. Nothing has moved yet, and that is on purpose. You can’t find your color inside a reflex you’ve never once stood still and watched, and you’ve spent a week watching.' },
      ],
    },
    {
      id: 'planWeek2', zone: 'paid', type: 'exercises',
      title: 'Week 2, The 90-Second Pause',
      lead: 'This week you put ninety seconds between the expectation and your answer. Not to force a different answer, only to give your real one time to surface before the adapted one speaks for you.',
      exercises: [
        { label: 'Day 8. Learn the pause.', body: 'The whole move this week is a small, buyable delay. When an answer is expected and you feel the yes start to form, you say let me think for a second, out loud, and you mean it literally. One hand on your belly, a long slow out-breath, and for a moment and a half you ask one question, what do I actually want here? That is roughly how long your real preference needs to climb up from under the reflex. Practice the pause today on something tiny and low-stakes, what to eat, which way to walk, so the move is familiar before you need it on something that matters.' },
        { label: 'Day 9. The longer out-breath.', body: 'Twice today, when things are calm, breathe in for about four seconds through your nose and out for six to eight through your mouth. The long exhale is the body’s own stand-down signal, and leaning on it on purpose is how you tell an alarm that isn’t really an emergency to settle. You’re not doing this to relax in the abstract. You’re building the exact off-switch you’ll reach for when the pull to adapt fires in a real moment, so your body already knows the move.' },
        { label: 'Day 10. Find the real yes on something small.', body: 'Pick one genuinely small decision today and run the full pause on it, then answer from what you actually found, not from what fits. Which coffee, which film, which of two easy plans. It sounds almost too minor to bother with, and that is exactly the point, you are teaching your body that having a preference of your own is survivable in a setting where nothing is at risk. Note what you wanted, and whether it matched the answer you’d have given on reflex.' },
        { label: 'Day 11. The keep-your-color rule.', body: 'A new rule for the reflex you reach for most, the instant agree. Anything that sounds like a yes, a sure, a matching of someone else’s taste waits ninety seconds first. Feel the pull, name it, run the pause, and only then decide how much you actually agree. At second 91, if the answer really is yes, give it, and now it’s yours. A week of this and you’ll land where a lot of Chameleons land, that a surprising number of your yeses were never really answers at all, they were exits from the small danger of having a view.' },
        { label: 'Day 12. The good-person experiment.', body: 'Your system still half-believes that showing a real preference to a warm, welcoming person will cost you their warmth. Test it, gently. Pick someone safe and one low-stakes true color, a preference, a mild disagreement, a plain I’d actually rather not, and show it. Then watch what actually happens. Almost always the warmth holds, and often the person leans in, because a real preference is more interesting to love than a mirror. Note what you feared and what actually happened. Your nervous system won’t take the theory, it takes reps of evidence, and this is a rep.' },
        { label: 'Day 13. The pause on your worst trigger.', body: 'You’ve known your trigger family since day 2. Today you take the pause there on purpose. If approval owns you, the next time you feel yourself reaching to match someone whose warmth you want gets the full move, sentence, pause, hand on the belly. This is the deep end, and it’s fine to go under a little. If it collapses and you mold anyway, write down where it collapsed, no commentary. One honest failure on your hardest trigger teaches more than ten easy wins, and it counts as a finished day.' },
        { label: 'Day 14. Week two review.', body: 'Pull out day 4’s measurement and compare. Shorter surge? A real preference surfacing more often before the yes? For most people the honest answer right now is somewhat, and somewhat is exactly on schedule. Notice what hasn’t changed too, the pull to match still rises, and it was never meant to stop. The work was always the automatic yes that follows it, and the yes is starting to lose the race to the pause.' },
      ],
    },
    {
      id: 'planWeek3', zone: 'paid', type: 'exercises',
      title: 'Week 3, Show Instead of Match',
      lead: 'Molding in silence is a way of handling the fear of rejection without ever having to test it. This week you test it, and trade the automatic match for the small true color underneath it.',
      exercises: [
        { label: 'Day 15. Write the real preference.', body: 'Under every automatic yes you’ve ever given, there was a real answer you weren’t saying out loud. For most Chameleons it’s some version of I’d actually rather do the other thing, or I don’t agree, and I’m scared that saying so makes me hard to love. Tonight, write yours, in your own words, exactly as you’d say it if saying it cost nothing. Don’t send it anywhere, just look at it. There’s something quietly absurd about it, years of matching to avoid a sentence that fits in a single breath.' },
        { label: 'Day 16. The translation table.', body: 'Take the molding story from day 6 and turn it into something a person could actually receive. My real view is too much becomes I see this differently, and I’d like to tell you how. It’s safer to just agree becomes I catch myself agreeing to keep things smooth, and I’m trying to stop doing that with you. Write two or three translations down. This week’s whole skill is turning a swallowed truth into a said one, and the sentence, like everything else this month, starts on paper before it ever reaches a person.' },
        { label: 'Day 17. The small true color.', body: 'Show one small, real preference today that you’d normally have folded on. Nothing structural, room-sized, I’d actually rather stay in tonight, said plainly, rather than going along and quietly resenting it later. Watch yourself do it. There’s usually a pull to soften it into agreement at the last second, to let it go unsaid and keep the peace. Say it clean. A preference shown tends to cost far less than the slow erasure you’d have chosen instead, and it gives the other person the actual you to love.' },
        { label: 'Day 18. Name the reflex out loud, once.', body: 'With your partner, or whoever’s closest, name the mechanism one time. Past tense, no crisis attached, I catch myself becoming whatever I think you want, and I’m working on just being straight with you instead. Then change the subject if you like. Two things happen at once. The reflex comes out of the dark, where it does its best work, and you learn by direct experiment that showing it costs you none of the love you were protecting by hiding.' },
        { label: 'Day 19. Let yourself be chosen.', body: 'Today or this week, when someone shows they like you, a warm word, a plan they want with you, a plain I’m glad it’s you, resist the reflex to perform harder to deserve it and just let it land on the actual you. Don’t rush to become more of whatever earned it. This is the harder cousin of week two’s experiment, receiving warmth without immediately auditioning to keep it, which is precisely when your system starts reaching for the version that pleases.' },
        { label: 'Day 20. Take the disagreement.', body: 'The next time a real difference comes up, a taste, a plan, a view you don’t share, it gets new treatment, you let it stand. When the reflex leans in with just agree, it’s not worth it, they’ll like you less, you know that voice by now. Here’s the thing that’s easy to miss, closeness only reaches the real you once the real you is in the room. Matched and quietly resentful, you stay a stranger to the person loving you, and their love never gets the chance to reach the one who needed it. Today you practice letting the difference exist.' },
        { label: 'Day 21. The repair move.', body: 'If a molding got away from you this week, an automatic yes you regretted, a truth you swallowed a day too long, repair it today in one sentence, I said yes the other day but the honest answer was no, and I’d rather be straight with you. No essay, no spiral of apology, both of those are just another kind of performing. Chameleons tend to fear that showing the mechanism makes them a burden. In practice it’s the steadiest sentence in this plan, because it puts the real you back in the room right after you vanished, which is the only place realness ever actually shows.' },
        { label: 'Day 22. Week three review.', body: 'Three questions, on paper. Which cost you more, the 90-second pause or the shown preference? What actually happened when you let a real color show instead of matching? Did the rejection you feared arrive, or did it just feel certain? Then reread your day 15 sentence. It’s probably shrunk. Sentences do that once they stop living in the dark and start getting said.' },
      ],
    },
    {
      id: 'planWeek4', zone: 'paid', type: 'exercises',
      title: 'Week 4, Hold Your Own Color',
      lead: 'Snagged is a position you have to keep choosing. This week is about holding the new sightedness when the old ease starts whispering that it would be simpler to just fit, and the pull to smooth yourself back into the wanted shape comes looking for you.',
      exercises: [
        { label: 'Day 23. Your minimum kit.', body: 'Three weeks of notes have already told you which tools are actually yours. Pick three. For a lot of Chameleons it ends up being the pause with a hand on the belly, the small shown preference, and the keep-your-color rule, but yours is yours. Write them on one card, paper or phone. From here on, this card is the plan. Everything else was scaffolding you can put down.' },
        { label: 'Day 24. The easy-day trap.', body: 'A warning that’ll sound strange, easy stretches are where this work usually dies. Everyone’s agreeable, nothing chafes, the practice feels pointless, it quietly stops, and the next expectation arrives against a body that hasn’t run a rep in three weeks. So today, on what’s hopefully an ordinary easy day, run the full move once on a small invented choice. On purpose, like a drill. Two minutes. Drilling on a calm day builds the muscle memory, so when a real expectation lands your body already knows to pause and check.' },
        { label: 'Day 25. The relapse plan.', body: 'Write it now, while you’re steady, because you won’t write it mid-fold. Something like, when I disappear into someone else’s wants again, I’ll name it within a day, run the repair move, and restart the evening review for three days. That’s it. A relapse with a plan costs you an evening. A relapse without one can cost you the whole thing, and not because of the single yes, but because of the story that moves in behind it, the old one that says see, the real you was never going to be enough, better to keep matching.' },
        { label: 'Day 26. Tell someone what changed.', body: 'One person, one concrete thing, I don’t just become whatever people want anymore, mostly I catch it now and say what’s actually true. Out loud, to a partner or a friend. The notebook has done a lot for you this month, but there’s one thing it can’t do, make the new position part of your story out in the world. Positions hold better once somebody has watched you take them.' },
        { label: 'Day 27. The wide-angle day.', body: 'Here’s a cost you probably never added up, all the versions of you that never got to exist. Preferences you never named, friendships where you were the agreeable one and never quite yourself, rooms full of people who liked a shape you were holding. That’s a lot of the real you left off the table over the years, and some of those people would have loved the actual one. You can’t go back for all of it. But today, pick one bond that’s still reachable, one where you’ve been playing the easy version, and show one true color inside it. A real preference, a small honest difference. Practice being met as yourself somewhere you’d normally have performed.' },
        { label: 'Day 28. Stress-test honestly.', body: 'On paper, honestly, if the real thing hit tonight, a warm person whose approval you can feel yourself reaching for, an expectation clear enough to mold to, a disagreement charged enough to smooth away, what would happen? If your answer is some version of the pull would rise, and I’d catch it in the moment and get to choose instead of the reflex choosing for me, that’s Snagged, that’s the target, that’s what it looks like. It was never going to look like never feeling the pull at all. If your answer is I’d mold like always and only see it later, go back through your week reviews, find where the notes got thin, and redo that week. The plan is a loop, not a corridor, and going around again isn’t failing it.' },
        { label: 'Day 29. Write the before-and-after.', body: 'One page. A real scene from before this month, a moment you became the wanted version and felt yourself disappear inside it, told straight, with what you told yourself while you did it. Then the same scene as you’d run it today. Specific, yours, names and all. Keep this page somewhere you can find it, because on some future warm evening the reflex is going to swear to you that this time matching is just kindness, that showing yourself would spoil something good. The reflex, as you’ve established this month, is a detector with one setting and a talent for sounding like generosity. This page is the receipt that says otherwise.' },
        { label: 'Day 30. Retake the test.', body: 'Take the assessment again, today or this week. Not for a grade, for a reading. If your Anchor moved toward Snagged, the kit works, keep the card, drop the daily pages, and rerun any single week whenever the molding starts creeping back, which it sometimes will. If it didn’t move, your own notes will show you which week to redo, and that’s a map doing its job, not a verdict. Either way, something changed this month that doesn’t change back, you’re no longer guessing whether there’s a version of you that can be loved for your true color. There is, and you’ve watched it show.' },
      ],
    },
    {
      id: 'acuteKit', zone: 'paid', type: 'prose',
      title: 'Before You Fold',
      lead: 'The 90-second kit for the moment the yes rises. Pocket card.',
      paras: [
        'Someone is waiting for your answer, and the yes is already halfway out. A question about what you’d like, an opinion held out for yours, a plan you can feel them hoping you’ll want too. The pull to match is moving your mouth toward agreement, and your mind has the smooth version half-loaded, the sure, the I don’t mind, the yeah me too. This card skips growth and childhood and understanding. Right now there’s only the pull, rising, and the ninety seconds you’re about to put between it and the answer.',
        'One, name it, three seconds. That’s the fear, not me. Say it under your breath if there are people around. The phrase works as a location device. It tells you where you actually are, inside an old reflex to keep a bond safe rather than inside a fact about what you genuinely want. Putting a name on what’s happening turns its volume down a notch, measurably, every time.',
        'Two, stay in the body, about sixty seconds. Your adjustment doesn’t start in your words, it starts in a body already bracing to perform, reaching for the wanted shape. So that’s where you meet it, by coming back down into it. Pick one move and use the same one every time, so your body eventually runs it without being asked. Press one hand flat on your belly and feel it rise and fall. Or breathe with the out-breath longer than the in-breath, the long exhale being the body’s own stand-down signal, and lean on it on purpose. The one rule that holds them all together, don’t answer yet. Not the yes, not the agreement. Stay with the question a moment longer than feels comfortable.',
        'Three, ask the one question, the rest of the 90. What do I actually want here? Let the real answer climb up from under the reflex, and it will, that’s roughly what the ninety seconds are for. Sometimes it turns out you do want exactly what they hoped, and now you can say so and mean it. Sometimes a different answer surfaces, quiet and clear, the one the yes would have buried. Either way you’re about to answer from yourself instead of from the shape of their wanting.',
        'Four, answer with your own color in hand, after the 90. Now answer, actually answer. Maybe it’s the plain yes, freely given and finally yours. Maybe it’s the small true thing, I’d actually rather not, or I see it differently. Any of those is a fine call. The win was never that you disagreed, it’s that a person gave the answer instead of a reflex giving it for them.',
        'What not to do inside the surge. Nothing that hands your answer to the room, no instant yes fired off to close the small gap of a pause, no opinion quietly reshaped to match the one already in the air, no real preference swallowed to keep things smooth. And keep the verdict about yourself in its holster. The certainty that your true color would cost you this person is a daylight thought, and looked at calm the next morning it either holds up or quietly dissolves, while trusted mid-surge it will mold you out of something you actually wanted, wearing the face of being easy to love.',
        'Tomorrow, thirty seconds in your notes. What set it off, whether you found your real answer, what story the reflex told. Not to grade yourself, there are no grades here. Every surge you log makes the next one more familiar, and familiar surges move you less. You’re becoming someone who can feel the pull to match and stay with your own color, and that’s a steadier bet than waiting for the pull to stop coming.',
        { byPalier: {
          '0': 'At your position the full sequence mostly holds, and you often stop the pull at move one. Keep the card for the moments the approval matters most, when someone’s warmth is something you badly want and the old molding still knows how to rise.',
          '1': 'You’ll usually get through the sequence now. The card’s here for the harder moments, when the yes moves faster than you and you need the moves in order to find your own answer.',
          '2': 'At Snagged, run the full sequence. Some moments you catch it at move one, other moments the yes is already out before you remember the card exists, and you pick it up from wherever you are.',
          '3': 'The full sequence probably won’t hold on your first few surges, and expecting it to is a setup for shame. Run moves one and two, and call that a complete rep, because it is. The rest of the card comes online as the catch speeds up.',
          '4': 'Run moves one and two only, and count that as a complete rep. A partial kit you actually reach for beats a complete one you never open. The rest unlocks later, on its own, as the catch gets quicker.',
        } },
      ],
    },

    {
      id: 'lectures', zone: 'paid', type: 'bookcards',
      title: 'Your Reading List',
      lead: 'A book meets you where you are or it slides right off, and attachment books slide hard. So this list is sorted by your position on the scale, not by fame. One at a time, at your tier, and keep the plan running while you read, because reading about the molding has a long habit of quietly replacing the work of showing your color. The plan does the moving, the book explains the map.',
      books: {
        byPalier: {
          '0': [
            { title: 'The Gifts of Imperfection', author: 'Brené Brown', blurb: 'You’ve already done the hard part, so this one is about what you’re building toward, a life where your true color stays out in the open because you’ve learned it’s lovable. Brown’s whole subject is letting yourself be seen as you actually are, which at your position is the frontier worth holding, staying real once the pressure to perform has quieted.' },
          ],
          '1': [
            { title: 'Nonviolent Communication', author: 'Marshall Rosenberg', blurb: 'You’re already showing your color, so the skill that matters now is the sentence that carries it. Rosenberg’s whole method is saying your real preference and your honest disagreement plainly, in a way that brings someone closer instead of leaving them with a version of you that agreed to everything. That’s exactly the move week three asks of you. Read it with a pen.' },
          ],
          '2': [
            { title: 'The Disease to Please', author: 'Harriet Braiker', blurb: 'Written for your exact position. It names the thing you do, the automatic yes, the swallowed no, the becoming-what-pleases, and gives it its proper name rather than letting it hide as simply being easy-going. It explains why a welcoming, undemanding partner can feel oddly flat while a person you have to earn feels like love. Most of all it teaches the swap this whole month turns on, finding your real answer before the reflex speaks for you. If you read one book this month, this is it.' },
          ],
          '3': [
            { title: 'The Body Keeps the Score', author: 'Bessel van der Kolk', blurb: 'At your position you tend to see the molding only in hindsight, and this is the book that explains why, why the yes fires in your body before your mind gets a vote, and why the body-first moves in your kit, the hand on the belly, the long exhale, the pause, aren’t decoration. It plugs straight into your evening review, and it makes sense of the delay you keep running into.' },
          ],
          '4': [
            { title: 'Running on Empty', author: 'Jonice Webb', blurb: 'At your position the adapting feels like plain ease, and underneath it there’s often an older, quieter story, that no one taught you your preferences were worth naming, so you learned to keep as few of your own as possible and read everyone else’s instead. Webb’s whole subject is that, the emotional neglect that raises a child on guessing what’s wanted, and how the grown version keeps you a stranger to the people who’d most want the real you. One honest note, if it stirs up more than it settles, set it down and think about bringing a professional into your corner. At this depth, calling in real support is the strongest move on the board, and the plan keeps running right alongside it.' },
          ],
        },
        default: [
          { title: 'The Disease to Please', author: 'Harriet Braiker', blurb: 'The clearest map of the people-pleasing pattern for a general reader, and the one that names what you do, the automatic yes and the swallowed no that’s a flight from rejection rather than genuine ease. It teaches the swap this month turns on, finding your real answer before the reflex gives it for you.' },
        ],
      },
    },

    {
      id: 'lecturesWarning', zone: 'paid', type: 'prose',
      when: { if: { palier: 4 } },
      callouts: [
        { tone: 'care', text: 'A word, in honesty. That book can stir up more than a book on its own is built to hold, because it goes straight at the childhood where your needs learned to stay small. If it does, set it down and think about bringing a professional into your corner. At this depth, calling in real support is the steadiest move you can make, and it means the work is going deep enough to need it.' },
      ],
    },

    {
      id: 'devenir', zone: 'paid', type: 'prose',
      title: 'What you become when you rise',
      paras: [
        'A Chameleon who rises doesn’t lose their flexibility. You keep your relational intelligence, your subtlety, your talent for putting others at ease, your sensitivity to atmospheres. But you no longer use them to disappear. You can adapt without dissolving, listen without betraying yourself, love without auditioning nonstop to earn your place. You show your true color, and you discover it’s lovable.',
        'Be patient, the path is neither fast nor steady. You’ll adapt again, especially when someone truly matters. That won’t be a failure, just the sign that you’re learning. And what lifts you is something you live rather than work out, the slow experience, gathered over months, that someone can love your real color and not the borrowed one. That happens with others, and it can be practiced.',
      ],
    },

    {
      id: 'etApres', zone: 'paid', type: 'prose',
      title: 'And after this',
      paras: [
        'This report is a snapshot of you today. Your Anchor isn’t fixed, it moves as you integrate your mechanism. The more you learn to feel the adapting rise and to show your true color, the less it decides in your place, and the more you let the right people love you for who you really are.',
        'Each level has its own way of working. What you do at level {{ancre_position}} won’t be what you do at the level above. So come back, in a few weeks, take this test again. It’ll become your progress mirror. If your Anchor rises, you’ll know you’re showing yourself where you’d once have adapted. And if it lowers after a hard stretch, that’s useful information, not a setback. Either way, you have a compass.',
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
