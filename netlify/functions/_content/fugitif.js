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
      id: 'blindSpot', zone: 'free', type: 'prose',
      title: 'What You Don\u2019t See',
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
      title: 'Who it can actually work with',
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
      id: 'catch', zone: 'paid', type: 'prose',
      title: 'The Runaway Catch',
      lead: 'Catch the pull before it becomes an exit. Ten seconds.',
      paras: [
        'Somewhere in an ordinary week there\u2019s a moment you know by heart. Things have been good, close, easy for a stretch, and then someone leans in a little further, asks for a little more, and the room seems to shrink by a foot. Before you\u2019ve decided anything, the pull is already there, the small tug toward the door. Reply later. Go a touch cool. Notice, suddenly and clearly, everything that might be wrong with them.',
        'Your mechanism has a first move, and it happens fast, well before the distance it becomes. Most people at your position only catch it once they\u2019ve already gone cold or pulled back for a week, and the other person is either chasing or quietly giving up. The Runaway Catch trains one narrow skill, feeling the pull in the second it fires, instead of a fortnight later in the distance you can\u2019t explain.',
        'You won\u2019t be trying to kill the pull. The urge to make space when closeness rises is old and quick, and people who try to force themselves to stay usually white-knuckle it for a while and then bolt harder than before. You\u2019re learning to see it fire. That turns out to be almost everything.',
        'And it rarely announces itself as fear of closeness. It shows up wearing the face of a verdict. There\u2019s no spark. They\u2019re too much. I\u2019ve finally seen the thing about them I can\u2019t live with. The certainty tends to arrive right as the bond deepens, which is the tell, because a real dealbreaker doesn\u2019t usually wait for the good week to show itself. That is the pull, dressed up as proof.',
        'What you\u2019re feeling has a name in the research, and it helps to know it. Attachment scientists call it deactivation, the going-quiet, the distance-making, the quiet hunt for a flaw that would justify the exit. Bowlby described the attachment system as running two ways under threat, a fight or a flight. The Arsonist\u2019s protest is the fight. Yours is the flight. It set in early, when reaching for closeness kept meeting a closed door or a room with no space in it, and a small person drew the only sensible conclusion on offer, need less and you can\u2019t be let down. Cassidy and Kobak named the grown version deactivating strategies, and Mikulincer and Shaver mapped how it runs in adults. Yours is that same old flight, still putting distance the instant closeness asks something of you.',
        'Here is the whole gesture. The moment closeness rises and the pull starts, the urge to reply late, to cool off, to start cataloguing what\u2019s wrong with them, you say one sentence to yourself, silently.',
        'That\u2019s the pull, not the proof.',
        'Then you do whatever you were going to do anyway. You read that right. On day one you can say the sentence and still take the distance. Saying it is the win, because saying it means you caught the pull in the act, and a pull you can see is no longer deciding for you on its own. Ten seconds, and it works while you want to leave, because it doesn\u2019t ask you to stop wanting to leave first.',
        'The pull is a threat detector wired for one danger above all others, being absorbed, being trapped, losing yourself inside someone else, and detectors like that fire early and fast, long before the thinking part of you gets a vote. Putting a name on what\u2019s happening, even under your breath, has been shown to loosen its grip on you measurably. And here is the part almost everyone misses, including you, most days. Under the flight, the wanting is real. Studies that track the body find that avoidant people react to closeness on the inside even while they stay calm and unbothered on the surface. The feeling doesn\u2019t vanish when the pull rises. It goes under a lid, which is a different thing from being gone.',
        { byPalier: {
          '0': 'At your position you catch most of these before you\u2019ve moved an inch. Your version is lighter, a nod at an old habit. You feel the room start to shrink, you almost smile at it, and you stay where you are.',
          '1': 'You already catch a lot of these as they fire. Your version gets shorter and quieter, closer to a private nod than a sentence. You feel the pull, you name it, and more often than not you stay in the room.',
          '2': 'This live version is built for exactly where you are. Say the sentence the instant the pull starts, then let yourself do whatever you were going to do anyway. The catch itself is the whole win this month, not the staying.',
          '3': 'There\u2019s a hitch worth naming, the pull doesn\u2019t feel like a pull yet, it feels like a clear-eyed read on a person who isn\u2019t right for you. So skip the live catch for now and work in hindsight. Once a day, in the evening, write down one moment you pulled back. Same muscle, trained on yesterday\u2019s footage. The live catch shows up on its own once hindsight gets quick enough, and it does get quick.',
          '4': 'At your position the pull still feels like plain fact, like you\u2019ve simply noticed the truth about them, so don\u2019t chase the live catch yet. Do it in hindsight, once a day, in the evening, writing down one moment you went distant. You\u2019re not judging the moment, you\u2019re locating it, so your eye learns the shape of the move. That part can\u2019t really be rushed, and doesn\u2019t need to be.',
        } },
      ],
    },

    {
      id: 'planIntro', zone: 'paid', type: 'prose',
      title: 'The 30-Day Plan',
      lead: 'From Snagged toward Slipping. One page a day.',
      paras: [
        'Before anything else, choose who you\u2019re being for the next thirty days. Not the one who slips out the moment the room gets warm, and lets the distance say the hard thing so you never have to. The one who stays a beat longer than the pull wants, and says the small true thing out loud before the silence says something worse in its place. You already own what this takes. The same self-reliance that lets you leave without a backward glance is, turned a few degrees, the steadiness that lets you stay in a hard moment without going to pieces. This month you point it at staying. Week one asks nothing of you but to watch the pull start. The doing comes later, and it comes easier once you can see the pull clearly.',
        'A word on the promise, because it\u2019s a modest one on purpose. This plan moves you one position on the scale, from Snagged, where you feel the pull and take the distance anyway, toward Slipping, where the urge still rises but you hold the helm more often than it holds you. No new personality, no cure, one position. People underestimate what that feels like from the inside. The relationships that used to quietly end at the six-week mark, right when they got good, stop ending there, and that alone changes the shape of a life.',
        'One rule for the month. A pull is never punished here. A pull you notice and write down is data, and data is the entire reason you came. A pull you play out in silence, going cold, vanishing for a week, filing the flaw away as a verdict, becomes a wall, and walls are what keep you free and never held. So you catch it out loud instead, on the page, where you can see it for what it is.',
        { byPalier: {
          '0': 'Where to begin, for you. You already hold the helm most days, so read this as maintenance. Skim to week three and use the earlier weeks only where a page names something you\u2019ve felt tug at you lately.',
          '1': 'Where to begin, for you. You catch a lot of pulls already, so the first two weeks will move fast. Skim them, then settle in at day 15, where the work turns from seeing the pull to saying the thing underneath it out loud.',
          '2': 'Where to begin, for you. Start at day 1 and keep the written pace. The plan is built around exactly your position, feeling the pull and taking the distance anyway, so the default rhythm is yours.',
          '3': 'Where to begin, for you. Spend a full week on the evening review alone, day 1 repeated seven times, before you move on. Your catch has to live in hindsight before it can live in the moment, and rushing that only builds the later weeks on sand.',
          '4': 'Where to begin, for you. Read the What You Don\u2019t See page first, because until you have, this plan will read like a list of accusations. Then take week one at half speed, one review every two days. The pull still feels like plain fact at your position, and the whole month is about it slowly starting to feel like a pull instead.',
        } },
      ],
    },
    {
      id: 'planWeek1', zone: 'paid', type: 'exercises',
      title: 'Week 1, See the Pull',
      lead: 'You change nothing this week. You watch the pull start and learn its parts, what sets it off, where it lives in your body, the story it tells while it moves you toward the door. Seeing it clearly is the whole job, and everything later is built on it.',
      exercises: [
        { label: 'Day 1. The evening review.', body: { byPalier: {
          '0': 'Tonight, before bed, write down one moment today where the pull rose, even if you never moved. A flicker of wanting-out when someone got close, an urge to reply later, a flaw that jumped into focus at a suspiciously convenient time. Facts only, what set it off and what you did with it. At your level this is a light rep, a way to keep the eye sharp.',
          '1': 'Tonight, before bed, write down one moment today where the pull rose. An urge to go quiet after a good evening, a wish for the exit when the plan got more serious, a sudden certainty about their flaws. Facts only, what set it off, what you did. You\u2019re proving to yourself the pull is still visible while it happens, which is most of the skill.',
          '2': 'Tonight, before bed, write down one moment today where you pulled back, or wanted to. Replied late on purpose, went cool, cancelled, started building the case for why they\u2019re not right. Facts only, what set it off, what you did, and whether closeness had just gone up a notch right before. If a verdict about them shows up on the page, write it down too, and put a question mark after it. You\u2019re not fixing anything yet, you\u2019re turning the lights on in a room you\u2019ve been leaving in the dark for years.',
          '3': 'Don\u2019t hunt for the pull live today, it\u2019s still too quick and too convincing to catch coming. Tonight, take one quiet minute and find a single moment where you went distant. Write down what came just before it, the closeness or the ask that set it off. Finding it at night is how the eye learns the shape of the move before it can catch it in daylight.',
          '4': 'Don\u2019t chase the pull live today, it still feels like a fair read on someone rather than a move you\u2019re making. Tonight, before sleep, find one moment you went cool or made distance and write down what came just before it, a closeness, an ask, a moment things got real. You\u2019re only locating one, so your eye starts to learn the shape. No judging the moment, just marking where it was.',
        } } },
        { label: 'Day 2. Find your trigger family.', body: 'Most Runaways have one dominant family of triggers. Closeness is one, a partner who leans in and wants more time, more of you. The ask is another, a request for a label, a plan, a commitment that pins the future down. The good stretch is the third, and the strangest, a run of easy, warm days that leaves you oddly restless, half hunting for the catch. Look at yesterday\u2019s note and today\u2019s moments and ask which family owns you. A trigger you can see coming a street away is already half caught.' },
        { label: 'Day 3. The body tell.', body: 'The pull has a physical signature, and it fires before the thought does, so it\u2019s worth learning yours. For a lot of Runaways it\u2019s a tightening, a held breath, a subtle bracing in the chest as if a door were easing shut. For others it\u2019s a flatness, a going-numb, the sense of a shutter coming down behind the eyes while everything looks fine on the surface. Find yours today, the exact spot and the exact instant it lights. It becomes your early-warning system next week.' },
        { label: 'Day 4. Time the pull.', body: 'Today, when the pull rises, glance at the clock. Glance again when the urge to make distance drops off. Most people at your position have never actually measured this, and the number tends to surprise them, the raw wave is short, often a minute or two, sometimes less. What makes it feel permanent is the feeding, because every flaw you file and every reason you rehearse is another brick in the wall. Write down what you found. One honest measurement beats a month of impressions.' },
        { label: 'Day 5. Catch one live.', body: 'First live attempt. Once today, at the exact moment closeness rises and the pull starts to move you toward the door, say it, that\u2019s the pull, not the proof. Then, and this matters, do whatever you were going to do anyway. Go quiet if you\u2019re going to go quiet. Today\u2019s win is the catch itself. Whether you take the distance or not doesn\u2019t change the score today, only whether you saw the pull fire at all.' },
        { label: 'Day 6. Map the story.', body: 'The pull never travels alone, it brings a story, and it\u2019s usually a short one it has told a thousand times. If I let them all the way in, I\u2019ll lose myself. They\u2019ll want more than I have to give. Sooner or later this turns into a cage. Tonight, write yours down word for word, the way it actually runs in your head. People are often a little startled to find their flight has been reciting the same line since they were small. The story runs on a loop, and a loop loses its grip once you can say it along with the screen.' },
        { label: 'Day 7. Week one review.', body: 'Read your six notes and answer three questions on paper. What is my trigger family? Where does the pull live in my body, and how long does the raw wave last unfed? What is my rerun story? Sit with the fact that you now know more about your own flight than most people ever learn about theirs. Nothing has moved yet, and that is on purpose. You can\u2019t stay through a pull you\u2019ve never once stood still and watched, and you\u2019ve spent a week watching.' },
      ],
    },
    {
      id: 'planWeek2', zone: 'paid', type: 'exercises',
      title: 'Week 2, The 90-Second Stay',
      lead: 'This week you build one thing, a gap between the pull and the exit. Ninety seconds of staying put, on purpose, is the hinge the whole month turns on.',
      exercises: [
        { label: 'Day 8. The first 90.', body: 'Once today, when the pull rises, say the sentence, then stay ninety seconds before you act on it. Set a timer, actually set it, guessing at time mid-pull never works. Staying doesn\u2019t mean fixing your face into calm, it means not leaving, not going cold, not reaching for your phone to half-disappear. When the timer ends, you\u2019re free to take your space, say your piece, whatever you were going to do. What most people notice is that the urge at second 90 is smaller than the urge at second one. Not gone, smaller. Hold onto that gap, the whole month is built inside it.' },
        { label: 'Day 9. The 90 with your body.', body: 'Same gesture, but give your body a job this time, because your reflex under closeness is to leave the body, to go numb and float up and out of the moment. Pick one anchor and stick with it, feet pressed flat into the floor, or a hand on your own sternum, or a slow breath out that runs longer than the breath in. Stay in the room, in the body, for the full ninety. The long exhale is doing real work here, a direct line to the part of your nervous system that stands you down off alarm. You\u2019re teaching your body something it doesn\u2019t know yet, that closeness can rise without you having to vacate.' },
        { label: 'Day 10. Two stays.', body: 'Two 90-second stays today. Tonight, a short note, which was harder, the first or the second, and what story the pull told each time. You already know it\u2019ll be the same story. Watching it run twice in one day, in your own handwriting, does something that merely knowing it never quite does.' },
        { label: 'Day 11. The don\u2019t-vanish rule.', body: 'A new rule for the reflex you reach for most, the quiet fade. Anything that makes distance without a word waits ninety seconds first, whether that\u2019s going dark, leaving a message on read, or firing back something cool and clipped to put a wall up fast. Feel the urge, name it, and hold the ninety before you decide how much space you actually need. At second 91, if you still want room, ask for it in words instead of taking it by disappearing. A week of this and you\u2019ll land where a lot of Runaways land, that the fade was rarely about needing space at all, it was about not having to say anything.' },
        { label: 'Day 12. The good-stretch experiment.', body: 'Your system still half-believes that a run of good, close days is the setup before the trap. Test it, gently. Pick one warm, easy stretch today, and instead of finding a reason to pull back and get your footing, stay in it and watch what\u2019s actually there. Most of the time the cage never arrives, and the closeness just goes on being closeness. Note what you feared and what actually happened. Your nervous system won\u2019t take the theory, it takes reps of evidence, and this is a rep.' },
        { label: 'Day 13. The 90 on your worst trigger.', body: 'You\u2019ve known your trigger family since day 2. Today you take the gesture there on purpose. If closeness owns you, the next time someone leans all the way in gets the full sequence, sentence, timer, feet on the floor. This is the deep end, and it\u2019s fine to go under a little. If it collapses and you bolt anyway, write down where it collapsed, no commentary. One honest failure on your hardest trigger teaches more than ten easy wins, and it counts as a finished day.' },
        { label: 'Day 14. Week two review.', body: 'Pull out day 4\u2019s measurement and compare. Shorter wave? Smaller urge at second 90? For most people the honest answer right now is somewhat, and somewhat is exactly on schedule. Notice what hasn\u2019t changed too, the pull still rises, and it was never meant to stop. The work was always the exit that follows it, and the exit is starting to lose the race to the timer.' },
      ],
    },
    {
      id: 'planWeek3', zone: 'paid', type: 'exercises',
      title: 'Week 3, Name Instead of Leave',
      lead: 'Taking distance in silence is a way of handling a feeling without ever having to say it. This week you say it, and trade the quiet exit for the plain words underneath it.',
      exercises: [
        { label: 'Day 15. Write the real sentence.', body: 'Under every quiet exit you\u2019ve ever made, there\u2019s one sentence you weren\u2019t saying out loud. For most Runaways it\u2019s some version of this is getting close and it\u2019s starting to scare me, or I need some room and I\u2019m afraid that asking makes me the bad guy. Tonight, write yours, in your own words, exactly as you\u2019d say it if saying it cost nothing. Don\u2019t send it anywhere, just look at it. There\u2019s something quietly absurd about it, a decade of disappearing acts to avoid a sentence that fits in eight words.' },
        { label: 'Day 16. The translation table.', body: 'Take the rerun story from day 6 and turn it into something a person could actually receive. They\u2019ll want more than I have becomes I get overwhelmed when I feel like I owe someone all of my time. This will become a cage becomes I need to know I can still have my own life inside this, and I\u2019m scared to ask. Write two or three translations down. This week\u2019s whole skill is turning a wall into a sentence, and the sentence, like everything else this month, starts on paper before it ever reaches a person.' },
        { label: 'Day 17. The small ask.', body: 'Ask one small, direct thing today that you\u2019d normally take in silence instead. Room-sized, nothing structural, I\u2019m going to have a quiet night to myself and I\u2019ll call you tomorrow, said straight, rather than going vague and just becoming hard to reach. Watch yourself do it. There\u2019s usually a pull to soften it into a disappearance, to leave it unsaid and hope they don\u2019t notice. Say it clean. A need said out loud tends to cost far less than the distance you\u2019d have taken instead, and it leaves the other person somewhere to stand.' },
        { label: 'Day 18. Name the pull out loud, once.', body: 'With your partner, or whoever\u2019s closest, name the mechanism one time. Past tense, no crisis attached, when things got close last week, part of me wanted to find a reason to pull back, and I didn\u2019t, I just wanted you to know it\u2019s there. Then change the subject if you like. Two things happen at once. The pull comes out of the dark, where it does its best work, and you learn by direct experiment that naming it costs you none of the freedom you were protecting.' },
        { label: 'Day 19. Stay through the good.', body: 'Today or this week, when something genuinely good happens between you, a warm night, a plan that lands, a moment you feel properly close, skip the reflex that follows it and stay. Don\u2019t manufacture a small distance to get your balance back, and don\u2019t go find a flaw to hold at arm\u2019s length. Let the good moment be a good moment, and let it last as long as it lasts. This is the harder cousin of week two\u2019s stay, holding on when nothing is wrong, which is precisely when your system starts casting around for the exit.' },
        { label: 'Day 20. Take the closeness.', body: 'The next time warmth comes your way, a kind word, an open hand, a plain I\u2019m glad you\u2019re here, it gets new treatment, you let it land. When the pull leans in with they\u2019re only saying that, or you\u2019ll disappoint them soon enough, you know that voice by now. Here\u2019s the thing that\u2019s easy to miss, closeness only reaches you once you stop bracing against it. Held at arm\u2019s length and quietly doubted, it never gets the chance to become the thing you actually wanted. Today you practice letting it in.' },
        { label: 'Day 21. The repair move.', body: 'If a pull got away from you this week, a fade that stung, a coldness held a day too long, repair it today in one sentence, that wasn\u2019t about you, that was my old habit of making distance, and it\u2019s mine to handle. No essay, no spiral of apology, both of those are just another kind of leaving. Runaways tend to fear that owning the mechanism ties them down. In practice it\u2019s the steadiest sentence in this plan, because it puts the helm back in your hands right after a pull, which is the only place steadiness ever actually shows.' },
        { label: 'Day 22. Week three review.', body: 'Three questions, on paper. Which cost you more, the 90-second stay or the plain ask? What actually happened when you named it instead of vanishing? Did the cage you feared arrive, or did it just feel certain? Then reread your day 15 sentence. It\u2019s probably shrunk. Sentences do that once they stop living in the dark and start getting said.' },
      ],
    },
    {
      id: 'planWeek4', zone: 'paid', type: 'exercises',
      title: 'Week 4, Hold the New Closeness',
      lead: 'Slipping is a position you have to keep choosing. This week is about holding it when the calm itself starts whispering that you\u2019ve been trapped, and the old urge to make a little distance, just to feel your own edges again, comes looking for you.',
      exercises: [
        { label: 'Day 23. Your minimum kit.', body: 'Three weeks of notes have already told you which tools are actually yours. Pick three. For a lot of Runaways it ends up being the sentence, the 90-second stay with feet on the floor, and the don\u2019t-vanish rule, but yours is yours. Write them on one card, paper or phone. From here on, this card is the plan. Everything else was scaffolding you can put down.' },
        { label: 'Day 24. The good-day trap.', body: 'A warning that\u2019ll sound strange, calm stretches are where this work usually dies. Things feel close and steady, the practice feels pointless, it quietly stops, and the next pull arrives against a body that hasn\u2019t run a rep in three weeks. So today, on what\u2019s hopefully an ordinary good day, run the full gesture once on a small invented pull. On purpose, like a drill. Two minutes. Drilling on a calm day builds the muscle memory, so when a real pull comes your feet already know to stay planted.' },
        { label: 'Day 25. The relapse plan.', body: 'Write it now, while you\u2019re steady, because you won\u2019t write it mid-fade. Something like, when I pull a real disappearing act again, I\u2019ll name it within a day, run the repair move, and restart the evening review for three days. That\u2019s it. A relapse with a plan costs you an evening. A relapse without one can cost you the whole thing, and not because of the distance itself, but because of the story that moves in behind it, the old one that says see, you always end up alone, better to have gone first.' },
        { label: 'Day 26. Tell someone what changed.', body: 'One person, one concrete thing, I don\u2019t just vanish when things get close anymore, mostly I catch it and say something now. Out loud, to a partner or a friend. The notebook has done a lot for you this month, but there\u2019s one thing it can\u2019t do, make the new position part of your story out in the world. Positions hold better once somebody has watched you take them.' },
        { label: 'Day 27. The wide-angle day.', body: 'Here\u2019s a cost you probably never added up, all the good things you left early. Relationships that ended at week six, friendships you let quietly lapse, rooms you walked out of just as they got warm. That\u2019s a lot of closeness left on the table over the years, and some of it was people you\u2019d have kept. You can\u2019t go back for all of it. But today, pick one bond that\u2019s still reachable, the one you drifted from without ever quite deciding to, and take one small step back toward it. A message, or a call, or a plan for next week. Practice arriving somewhere you\u2019d normally have faded from.' },
        { label: 'Day 28. Stress-test honestly.', body: 'On paper, honestly, if the real thing hit tonight, a partner leaning all the way in, an ask for more than you feel ready to give, a good stretch that leaves you strangely trapped, what would happen? If your answer is some version of the pull would rise, and I\u2019d name it and hold the stay before I made distance, that\u2019s Slipping, that\u2019s the target, that\u2019s what it looks like. It was never going to look like never feeling the pull at all. If your answer is I\u2019d fade like always, go back through your week reviews, find where the notes got thin, and redo that week. The plan is a loop, not a corridor, and going around again isn\u2019t failing it.' },
        { label: 'Day 29. Write the before-and-after.', body: 'One page. A real scene from before this month, a bond you left just as it got close, told straight, with what you told yourself on the way out the door. Then the same scene as you\u2019d run it today. Specific, yours, names and all. Keep this page somewhere you can find it, because on some future close night the pull is going to swear to you that this time is different, that the flaw is real and the cage is finally coming. The pull, as you\u2019ve established this month, is a detector with one setting and a talent for sounding like the truth. This page is the receipt that says otherwise.' },
        { label: 'Day 30. Retake the test.', body: 'Take the assessment again, today or this week. Not for a grade, for a reading. If your Anchor moved toward Slipping, the kit works, keep the card, drop the daily pages, and rerun any single week whenever the fades start creeping back, which they sometimes will. If it didn\u2019t move, your own notes will show you which week to redo, and that\u2019s a map doing its job, not a verdict. Either way, something changed this month that doesn\u2019t change back, you\u2019re no longer guessing whether there\u2019s a version of you that can stay in the closeness. There is, and you\u2019ve watched it hold.' },
      ],
    },
    {
      id: 'acuteKit', zone: 'paid', type: 'prose',
      title: 'Before You Run',
      lead: 'The 90-second kit for the moment the pull rises. Pocket card.',
      paras: [
        'It\u2019s a good evening, and it just got a little too close. A soft question, a lean-in, a plan for something months out, and the room quietly shrank by a foot. The pull is already moving you toward the door, and your mind has the perfect clean reason half-loaded, the flaw, the errand, the sudden need for air. This card skips growth and childhood and understanding. Right now there\u2019s only the pull, rising, and the ninety seconds you\u2019re about to put between it and the exit.',
        'One, name it, three seconds. That\u2019s the pull, not the proof. Say it under your breath if there are people around. The phrase works as a location device. It tells you where you actually are, inside an old wave of flight rather than inside a fact about this person being wrong for you. Putting a name on what\u2019s happening turns its volume down a notch, measurably, every time.',
        'Two, stay in the body, about sixty seconds. Your pull doesn\u2019t start in your words, it starts in a body that\u2019s already halfway gone, floating up and out of the moment. So that\u2019s where you meet it, by coming back down into it. Pick one move and use the same one every time, so your body eventually runs it without being asked. Press your feet flat into the floor and feel the whole weight of yourself land on them. Or breathe with the out-breath longer than the in-breath, the long exhale being the body\u2019s own stand-down signal, and lean on it on purpose. The one rule that holds them all together, don\u2019t leave the room. Not the physical room, not the conversation. Stay where your feet are.',
        'Three, hold the distance where it is, the rest of the 90. Whatever move you were about to make, the cool reply, the invented reason to go, the slow fade starting behind your eyes, it waits until the timer ends. If the urge to vanish is roaring, put it into words on a page where no one has to receive them yet, all of it, and hold them there. A wave you don\u2019t feed settles on its own, a good deal faster than the pull swears it will. You\u2019ve timed this yourself by now, so trust your own stopwatch over the pull\u2019s forecast.',
        'Four, choose with the helm in hand, after the 90. Now decide, actually decide. Maybe you do want a quiet night, and now you can say so plainly instead of vanishing into one, I\u2019m going to head home and rest, I\u2019ll call you tomorrow. Maybe the moment has already passed and you\u2019d rather stay. Any of those is a fine call. The win was never that you stayed, it\u2019s that a person made the choice instead of a pull making it for them.',
        'What not to do inside the wave. Nothing that makes a wall without a word, no slow fade to reset the distance, no cold reply fired off to buy space, no warm conversation left on read. And keep the big verdict in its holster. The certainty that this person is wrong for you is a daylight tool, and looked at calm the next morning it either holds up or quietly dissolves, while trusted mid-pull at eleven at night it will walk you straight out of something you wanted, wearing the face of a clear head.',
        'Tomorrow, thirty seconds in your notes. What set it off, which moves you held, what story the pull told. Not to grade yourself, there are no grades here. Every wave you log makes the next one more familiar, and familiar waves move you less. You\u2019re becoming someone who can feel the pull and stay in the room, and that\u2019s a steadier bet than waiting for the pull to stop coming.',
        { byPalier: {
          '0': 'At your position the full sequence mostly holds, and you often stop the pull at move one. Keep the card for the nights the closeness lands with someone who really matters, when the old flight still knows how to rise.',
          '1': 'You\u2019ll usually get through the sequence now. The card\u2019s here for the harder nights, when the pull moves faster than you and you need the moves in order to find your feet.',
          '2': 'This is your card, run the full sequence. Some nights you catch it at move one, other nights you\u2019re halfway out the door before you remember the card exists, and you pick it up from wherever you are.',
          '3': 'The full sequence probably won\u2019t hold on your first few waves, and expecting it to is a setup for shame. Run moves one and two, and call that a complete rep, because it is. The rest of the card comes online as the catch speeds up.',
          '4': 'Run moves one and two only, and count that as a complete rep. A partial kit you actually reach for beats a complete one you never open. The rest unlocks later, on its own, as the catch gets quicker.',
        } },
      ],
    },

    {
      id: 'lectures', zone: 'paid', type: 'bookcards',
      title: 'Your Reading List',
      lead: 'A book meets you where you are or it slides right off, and attachment books slide hard. So this list is sorted by your position on the scale, not by fame. One at a time, at your tier, and keep the plan running while you read, because reading about the flight has a long habit of quietly replacing the work of staying through it. The plan does the moving, the book explains the map.',
      books: {
        byPalier: {
          '0': [
            { title: 'Hold Me Tight', author: 'Sue Johnson', blurb: 'You\u2019ve already done the hard part, so this one is about what you\u2019re building toward, a close bond you can stay inside without feeling the walls close in. Johnson spent her career on how two people find their way back to each other, and at your position that\u2019s the useful frontier, letting closeness deepen without your reading it as a trap.' },
          ],
          '1': [
            { title: 'Nonviolent Communication', author: 'Marshall Rosenberg', blurb: 'You\u2019re already catching the pull, so the skill that matters now is the sentence underneath it. Rosenberg\u2019s whole method is saying your real need plainly, the need for space included, in a way that brings someone closer instead of leaving them chasing a person who vanished. That\u2019s exactly the move week three asks of you. Read it with a pen.' },
          ],
          '2': [
            { title: 'Attached', author: 'Amir Levine and Rachel Heller', blurb: 'Written for your exact position. It names the thing you do, the going-quiet, the distance-making, the hunt for a flaw to justify the exit, and gives it its proper name, deactivating strategies. It explains why a warm, available partner can feel flat or smothering while an elusive one feels like room to breathe. Most of all it teaches the swap this whole month turns on, saying your need for space out loud instead of taking it by disappearing. If you read one book this month, this is it.' },
          ],
          '3': [
            { title: 'Running on Empty', author: 'Jonice Webb', blurb: 'At your position you tend to see the flight only in hindsight, and underneath it there\u2019s often an older, quieter story, that no one taught you your needs were worth naming, so you learned to keep as few of them as possible. Webb\u2019s whole subject is that, the emotional neglect that raises a child on self-reliance, and how the grown version keeps you at arm\u2019s length from the people you\u2019d most want close. It plugs straight into your evening review.' },
          ],
          '4': [
            { title: 'The Body Keeps the Score', author: 'Bessel van der Kolk', blurb: 'At your position the pull feels like plain fact, and this is the book that explains why, why your body starts leaving before your mind gets a vote, and why the body-first moves in your kit, the feet on the floor, the long exhale, staying in the room, aren\u2019t decoration. One honest warning, it\u2019s a heavy read with difficult passages, and if it stirs up more than it settles, put it down and think about bringing a professional into your corner. At this depth, calling in real support is the strongest move on the board, and the plan keeps running right alongside it.' },
          ],
        },
        default: [
          { title: 'Attached', author: 'Amir Levine and Rachel Heller', blurb: 'The clearest map of the avoidant system for a general reader, and the one that names what you do, deactivating strategies, the going-quiet and distance-making that\u2019s a flight from closeness rather than a lack of feeling. It teaches the swap this month turns on, saying your need for space out loud instead of taking it by disappearing.' },
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
        'A Runaway who rises doesn\u2019t lose their freedom, quite the opposite. You keep your autonomy, your healthy need to breathe, your rare ability not to dissolve into the other person. But you no longer get that freedom by disappearing. You learn to stay present while keeping your space, to say I miss you without feeling trapped.',
        'Be patient, the path is neither fast nor steady. You\u2019ll flee again, especially when someone truly matters. That won\u2019t be a failure, just the sign that you\u2019re learning. And what lifts you is something you live rather than work out, the slow experience, gathered over months, that someone can be close to you without locking you in. That happens with others, and it can be practiced.',
      ],
    },

    {
      id: 'etApres', zone: 'paid', type: 'prose',
      title: 'And after this',
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
