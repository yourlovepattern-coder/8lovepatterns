/* ============================================================================
   LovePattern  .  CONTENT BLOCKS  .  miroir   (EN delivery)
   ----------------------------------------------------------------------------
   English content, ported 1:1 from uploads/8lovepatterns_EN_zoned/miroir_EN_zoned.md
   (no re-translation, only re-filing into the assembler's block schema).
   Variable names stay French verbatim ({{ancre_position}}, {{pattern_secondaire}},
   {{statut}}, {{CTA_1}} ...). Only their VALUES are English.

   Payment boundary: zone:'free' vs zone:'paid'. Paid blocks never assemble into
   the free tunnel (enforced by the assembler + go/no-go).

   SERVER-ONLY: bundled into get-report, never served as a static asset.
   House rule: never the long dash.
   ============================================================================ */

export const content = {
  profil: 'miroir',
  code: 'mir',
  nom: 'The Mirror',
  accent: '#46934A',

  blocks: [

    /* ===================== FREE ZONES ================================== */

    {
      id: 'accroche', zone: 'free', type: 'prose',
      title: {
        byPalier: { '2': 'You\u2019re The Mirror. And you already know it.' },
        default: 'You\u2019re The Mirror.',
      },
      paras: [
        'You catch yourself doing it. The exact moment you start becoming whatever the other person wants, some part of you notices. It almost comments on it. And you keep going anyway. If you\u2019re here, it isn\u2019t to be taught what your mechanism is. You could explain it better than most people could. You\u2019re here because understanding it has never been enough to change it, and that clear-eyed helplessness wears you out.',
        'Here\u2019s the most important thing in this report, because you\u2019ve waited long enough for it. What you\u2019re missing isn\u2019t willpower. The thing you keep trying to fix with your head is happening somewhere else in you, and nobody has ever shown you where, or how.',
        'Let\u2019s place you first, because your situation isn\u2019t the same as every Mirror\u2019s.',
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
        'This reflex of becoming what the other person expects, you didn\u2019t choose it as an adult. It formed very early, back when your brain was learning what love was. According to Bowlby\u2019s attachment theory, a child builds an internal model with their parent of how relationships work, an inner framework that then guides their adult relationships.',
        'In your case, that model learned a simple rule. To keep the bond with the people you depended on, it was safer to sense their needs before your own and become what suited them. Maybe a parent whose mood kept shifting, someone you read carefully the moment you walked into a room. Maybe a fragile parent you became the little guardian of. Maybe a love that came when you were good and pulled back when you took up space. Whatever the scene was, your conclusion as a child was logical. Being fully me puts the bond at risk.',
        'It wasn\u2019t a weakness. It was the smartest thing a small person who depended entirely on adults could do. The problem is that what protected you as a child is still running today, when you\u2019re no longer in danger, and it makes you disappear in front of people who would love you for exactly who you are.',
      ],
    },

    {
      id: 'visuel2', zone: 'free', type: 'visual',
      title: 'The loop you keep replaying',
      visual: {
        kind: 'loop', n: 2,
        caption: 'The loop that feeds itself.',
        steps: [
          'A trigger, the other person seems distant.',
          'Your inner alarm goes off.',
          'You fade, you become what pleases.',
          'The other person meets you less and pulls away.',
        ],
      },
    },
    {
      id: 'boucleProse', zone: 'free', type: 'prose',
      paras: [
        'At the start, you meet a gaze that makes you feel intensely alive. You move closer by becoming what they like, you pick up their tastes, their moods, their expectations, and you mold yourself to them. The merging reassures you, and meanwhile your own outline fades.',
        'Then comes the first sign of distance. A shorter message, an evening without you, a different tone. The ground gives way, because it isn\u2019t only them you might lose, it\u2019s you, this version of you that only existed inside their gaze. So you move closer still, you make yourself more attentive, you try to be exactly what\u2019s needed.',
        'And that\u2019s where it turns against you. The other person, who never met the one behind all that effort, senses something slightly unreal and pulls away for good. The way you reach for safety builds the very abandonment you dread. It isn\u2019t the wrong people, and it isn\u2019t bad luck. It\u2019s the loop.',
      ],
      callouts: [
        { if: { repetition: 'forte' }, tone: 'note',
          text: 'You told us your relationships almost all look alike. This is why. It isn\u2019t that you keep meeting the same kind of person. It\u2019s the same mechanism writing the same ending.' },
      ],
    },

    {
      id: 'pourquoiComprendre', zone: 'free', type: 'prose',
      title: 'Why understanding it has never been enough',
      paras: [
        'You\u2019ve understood your mechanism with your head. But your mechanism doesn\u2019t live in your head. All of this was written into your body before you could even speak. A child records how love works long before having the words for it, and those lessons settle in the part of you that reacts, the part that speeds up your heart when a message goes unanswered. The psychiatrist Bessel van der Kolk summed it up in an idea that became famous, the body keeps the score of what the mind has forgotten, and that\u2019s why you don\u2019t free yourself from an old pattern through understanding alone.',
        'The next time it rises, that moment when you feel yourself about to say yes while meaning no, when the other person\u2019s silence eats at you, know that a chemical surge has just fired through your body, and that it has a fixed length, around ninety seconds. A minute and a half is how long an emotion takes to settle when you don\u2019t feed it. The trouble is that you do feed it, by restarting the thoughts. So do nothing for that stretch of time. One hand on your belly, you breathe, you let the wave pass without fueling it. On the other side there\u2019s a small space of calm where, for once, fear isn\u2019t the one choosing. That space is yours now.',
      ],
    },

    {
      id: 'blindSpot', zone: 'free', type: 'prose',
      title: 'What you don\u2019t see',
      paras: [
        'You think you\u2019re keeping the connection safe. That\u2019s the blind spot. From the inside, becoming what someone wants feels like devotion. You read them closely and fit yourself to them so well that surely, this time, you can\u2019t be left. The adjusting never feels like self-erasure while you\u2019re doing it. It feels like care, and a little like insurance.',
        'Here is what it looks like from the other side of the table. The person across from you never quite meets you. They get agreement, warmth, a real talent for being whoever the moment seems to call for. What they don\u2019t get is a preference to bump into, a genuine no, an opinion with your name on it. Over months, some part of them starts to feel the absence, and people tend to do one of two things with air. They drift, because there\u2019s nothing to take hold of, or they expand to fill the space and start deciding everything, because someone has to, and you\u2019ve quietly volunteered them for it.',
        'And here is the part that\u2019s hard to sit with. When the love does arrive, it lands on the version you built for them, so it can\u2019t quite reach you. You can be adored across a dinner table and feel utterly alone at it, because the person being adored is a costume you sewed in real time, and you know it even when they don\u2019t. That specific loneliness, surrounded and unseen, is not a risk of the mechanism, it\u2019s the product of it.',
        'Read it once more, slowly. The reflex you reach for to make yourself impossible to leave is the same reflex that makes you impossible to find. You\u2019ve spent years running from disappearing by disappearing on purpose, and you can\u2019t spot it from where you stand, because at your position the adjusting still feels like the thing holding the relationship together.',
        'None of this means the skill was a mistake. Reading people well is a real gift and you get to keep it. What has to change is only the timing, that half-second where the reflection forms before your own answer does. That half-second is the whole opening, the place where a real answer can start to show, in doses small enough to survive being seen, until someone finally meets the person under the surface and stays for that one instead. That is what the next thirty days are built to do.',
      ],
    },

    {
      id: 'visuel3', zone: 'free', type: 'visual',
      title: 'How far it spills into the rest of your life',
      visual: {
        kind: 'spilloverTable', n: 3,
        leftHead: 'Where it shows', rightHead: 'What it produces',
        rows: [
          ['At a restaurant, you let the other person choose', 'you no longer know what you like'],
          ['At work, you say yes to the one ask too many', 'you come home drained'],
          ['In friendship, you carry others', 'nobody carries you'],
          ['In your relationship, you put their wishes first', 'they end up not seeing you anymore'],
        ],
      },
    },
    {
      id: 'debordementProse', zone: 'free', type: 'prose',
      paras: [
        'You don\u2019t only fade when you\u2019re in love. You fade almost everywhere. People find you easy, considerate, accommodating, and yet something in you is starting to get tired of living this way, as if you\u2019d forgotten what your own shape was.',
      ],
      callouts: [
        { if: { statut: 'rupture' }, tone: 'note',
          text: 'And since the breakup, what you\u2019re missing may not only be them. It\u2019s no longer knowing who you are when their gaze isn\u2019t there to give you a shape.' },
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
            'You\u2019re The Mirror, and you\u2019ve learned to stay yourself. You know your reflex by heart, you feel it coming, and most of the time you choose something else. You can be close without disappearing, give without draining yourself, love while keeping contact with what you want. This report won\u2019t teach you to see yourself, but to hold that freedom over time and to recognize the moments when you could slip.',
          ],
          '1': [
            'You\u2019re The Mirror, and you watch yourself do it live. The moment you start to fade, you feel it, part of you observes while it\u2019s happening. And more and more often, you manage to stop, to say what you think, to hold your place. It isn\u2019t systematic yet, and that\u2019s normal. What\u2019s left is to turn what you see into a choice, almost every time.',
          ],
          '2': [
            'You see it coming. The very moment you start to fade, you know it. You could almost watch yourself do it. And you do it anyway. That lucidity that prevents nothing is a pain well known to people who have worked hard on themselves and can\u2019t understand why everything they\u2019ve grasped changes nothing. Now you know why. It isn\u2019t willpower you lack, it\u2019s that the control isn\u2019t in your head.',
            'You now know what\u2019s happening to you, where it comes from, and why understanding it hasn\u2019t switched it off. You have a first tool that works in the body. What comes next is your plan.',
          ],
          '3': [
            'You\u2019re The Mirror, and you\u2019re starting to see it. You recognize your mechanisms, but often too late, the day after a fight or days later, when you replay the scene and tell yourself, there it is, I faded again. You understand it perfectly, but in the moment you saw nothing coming. That\u2019s already huge, many people never see anything. You have the lucidity, what you\u2019re missing is the timing, and that can be brought closer.',
          ],
          '4': [
            'You\u2019re The Mirror. If you\u2019ve made it this far, something in your relationships is probably repeating and hurting you. And from where you stand today, you often feel it comes from others, that they\u2019re distant, disappointing, that they don\u2019t give you back what you give. I won\u2019t tell you you\u2019re wrong, you\u2019ve probably lived through real disappointments, and you give enormously. I just want to offer you another angle, gently. What if there were, in the way you love, a habit so old you no longer see it, weighing on your relationships without your knowing?',
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
        'Your Mirror doesn\u2019t move alone. Right behind it sits {{pattern_secondaire}} ({{pattern_secondaire_score}}), and until you see the two of them together, you risk working on the wrong thing.',
        {
          bySecondaire: {
            guetteur: 'You don\u2019t only fade. You also keep watch for the signs that your presence is no longer enough to hold them. You\u2019re doing two things at once, becoming perfect and standing guard. That\u2019s why you come out of your relationships exhausted. In your plan, we calm the watching first, because that\u2019s what drains you, before working on the fading.',
          },
          default: 'Whatever it is, it deepens the same fading, your way of disappearing to keep the bond. Your plan starts by helping you exist again, before working on this second mechanism.',
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
            blurb: 'Someone with a high Anchor, a Bastion who has learned to open up, a Savior who no longer sacrifices themselves. They don\u2019t turn your fear of being abandoned into a daily routine. They\u2019re steady, readable, able to repair, and your fear falls asleep gently beside them.',
            items: [{ code: 'anc', name: 'High Anchor' }, { code: 'bas', name: 'Open Bastion' }, { code: 'sau', name: 'Steady Savior' }] },
          { label: 'The ones who understand you', tone: 'comprend',
            blurb: 'A Chameleon or a Savior still on the way, an Arsonist who has calmed down. They know from the inside the fear of losing your place. They understand you without necessarily soothing you, and with them everything depends on each person\u2019s Anchor.',
            items: [{ code: 'cam', name: 'Chameleon on the way' }, { code: 'sau', name: 'Savior on the way' }, { code: 'inc', name: 'Calmed Arsonist' }] },
          { label: 'The ones who make you blow up', tone: 'declenche',
            blurb: 'A very active Runaway, a very distant Alchemist, a magnetic partner who loves being mirrored. They press exactly on your sore spot. The more they pull away, the more you fade to hold on to them. They aren\u2019t bad people, they\u2019re the riskiest dynamic for you as long as your Anchor is low.',
            items: [{ code: 'fug', name: 'Active Runaway' }, { code: 'alc', name: 'Distant Alchemist' }] },
        ],
      },
    },
    {
      id: 'compatProse2', zone: 'paid', type: 'prose',
      paras: [
        'And there\u2019s a scientific reason for your pull toward the ones who make you blow up. Hazan and Shaver showed, back in 1987, that adult love replays the attachment system of childhood. Your body recognizes whatever resembles your wound as familiar, and calls it love. That\u2019s why the calm of a steady person can feel flat to you, when it\u2019s exactly what you need.',
      ],
    },

    {
      id: 'catch', zone: 'paid', type: 'prose',
      title: 'The Mirror Catch',
      lead: 'Catch your own answer before it bends toward theirs. Ten seconds.',
      paras: [
        'Your mechanism has a first move, and it happens fast. Before the agreeing, before the sure, whatever works, before you notice you\u2019ve spent a whole evening slowly becoming whoever was sitting across from you, there is one small instant. You read the other person\u2019s face and start shaping yours to match. The adjustment arrives before your own answer does.',
        'You are not trying to stop adjusting. People who read a room this well are often the ones others feel safest around, and there is nothing to repair in the skill itself. What you are recovering is the moment before the skill takes over, the thin sliver where your own answer still exists and hasn\u2019t yet been handed away.',
        'Here is the whole gesture. When you feel yourself reaching to match someone, scanning their face for the version of you they\u2019d like best, you say one line to yourself, silently.',
        'That\u2019s the mirror, not me.',
        'You don\u2019t act on the line. You don\u2019t correct course or announce anything, and you certainly don\u2019t deliver your real opinion to a startled colleague who only asked where you wanted to eat. You name the reflex while it\u2019s running, which is harder than it sounds, because the whole design of the mirror is that it works without you noticing. The line slides a thin pane of glass between the reflection and you, long enough to register that there was a you underneath, holding an answer of its own.',
        { byPalier: {
          '0': 'You catch this almost without trying now. Keep the line as a light check on the days a room pulls harder than usual, and let it stay a private nod rather than a sentence.',
          '1': 'You can probably already feel the adjustment as it begins, so the line gets shorter and quieter, more of a private nod than a sentence. The catch turns almost passive, something you register the way you register the temperature of a room you\u2019ve just walked into.',
          '2': 'When you feel yourself start to match someone, catch it live and name it in the moment. It moves fast, and some days you\u2019ll only catch it a beat late, in the car on the way home. That still counts, and the live catch gets built one delayed catch at a time.',
          '3': 'Don\u2019t try to catch the mirror live yet, it moves too fast to see in real time when it\u2019s had this many years of practice. Start at the end of the day. Take one quiet minute before sleep and find a single moment where you adjusted, a sure, whatever works laid over a preference you actually had. After a week or two of finding them at night, you\u2019ll start to notice them closer to when they happen.',
          '4': 'Don\u2019t try to catch the mirror live yet, it moves too fast to see in real time when it\u2019s had this many years of practice. Start at the end of the day instead. Take one quiet minute before sleep and find a single moment where you adjusted, a nod at an opinion that wasn\u2019t yours. You\u2019re not judging the moment, you\u2019re locating one, so your eye learns the shape of the move. That progression can\u2019t really be rushed.',
        } },
      ],
    },

    {
      id: 'planIntro', zone: 'paid', type: 'prose',
      title: 'The 30-Day Plan',
      lead: 'Find your own shape without erasing anyone else\u2019s. One page a day.',
      paras: [
        'Thirty days, one page each. The plan has four movements and they run in order for a reason. You can\u2019t keep an answer you can\u2019t yet see, and you can\u2019t show one you haven\u2019t kept. Week one is only watching. Week two builds a small holding space. Week three lets one real answer become visible to another person. Week four is about keeping the position once you have it.',
        'The promise here is one notch, Snagged toward Slipping. Not Clear. Clear is the direction you\u2019re facing, not the destination of thirty days, and anyone selling you a whole new self in a month is offering the same fantasy that got the mirror started.',
        { byPalier: {
          '0': 'You\u2019ve already done most of this work, so read the weeks as a refresher and linger only where a page names something you\u2019ve felt slip lately. Move at whatever pace keeps it honest.',
          '1': 'You\u2019ll probably find week one easy and can move quicker through it. Read it anyway, all of it, because the mirror hides best in the people who think they\u2019ve already handled it.',
          '2': 'Start on day 1 and move at the pace written. This plan is built around exactly where you are, so the default rhythm is yours.',
          '3': 'Give week one two weeks instead of one. The reflex is older and faster in you, and rushing the seeing part just means building the later weeks on sand. Everything after week one runs at the written pace.',
          '4': 'Give week one two weeks instead of one, maybe three if the seeing is slow to come. The reflex is old and fast in you, and the whole plan rests on learning to see the move before you touch it. There is no rushing that part, and no need to.',
        } },
      ],
    },
    {
      id: 'planWeek1', zone: 'paid', type: 'exercises',
      title: 'Week 1, See the Mirror',
      lead: 'You change nothing this week. You only learn the shape of the move.',
      exercises: [
        { label: 'Day 1. One catch a day.', body: { byPalier: {
          '0': 'Use the gesture from The Mirror Catch, once. When you feel yourself reaching to match someone, name it silently, that\u2019s the mirror, not me, and let it pass. At your level this is a light rep, a way of keeping the eye sharp.',
          '1': 'Use the gesture from The Mirror Catch, once, live. Sometime today you\u2019ll feel yourself softening an opinion to fit someone\u2019s face. Name it silently, that\u2019s the mirror, not me, and let it pass. You\u2019re proving the move is still visible while it happens.',
          '2': 'Use the gesture from The Mirror Catch, once. Sometime today you\u2019ll feel yourself reaching to match someone, softening an opinion to fit their face. Name it silently, that\u2019s the mirror, not me, and let it pass. You\u2019re not stopping anything yet. You\u2019re proving to yourself that the move is visible at all, which most people who do this have never actually watched themselves do.',
          '3': 'Don\u2019t hunt for the catch live today. At the end of the day, take one quiet minute and find a single moment where you adjusted. Name it then, that\u2019s the mirror, not me. Finding it at night is how the eye learns the shape of the move before it can catch it in daylight.',
          '4': 'Don\u2019t hunt for the catch live today, it moves too fast still. At the end of the day, take one quiet minute before sleep and find a single moment where you adjusted, a sure, whatever works laid over something you actually thought. Name it then, that\u2019s the mirror, not me. You\u2019re only locating one, so your eye learns the shape.',
        } } },
        { label: 'Day 2. Where does it happen most?', body: 'Notice which relationship pulls the reflex hardest. For a lot of people it isn\u2019t the partner at all, it\u2019s a parent, a boss, an old friend from before you had opinions. Just note the name. The room the mirror works in tells you a good deal about where it was first built.' },
        { label: 'Day 3. The tell in your body.', body: 'The adjustment has a physical signature and it\u2019s worth learning yours. Some people feel a small lean forward. Some hear their own voice brighten half an octave. For others it\u2019s a quiet drop in the stomach a second before they agree to something. Find yours today. It becomes your early-warning system in week two.' },
        { label: 'Day 4. The pre-adjustment.', body: 'Watch for the earliest version of the move, the moment you scan someone\u2019s face before they\u2019ve said anything, already reading which version of you they\u2019d prefer. This is the anchor point of your whole pattern, the exact instant your result named. Catch one. Do nothing with it.' },
        { label: 'Day 5. Count, don\u2019t judge.', body: 'A tally day. Every time you catch a mirror move, make a mark, on paper or in your phone, no commentary attached. The number tends to run higher than people expect, often into the teens by evening. Read it gently, a high count shows how hard the reflex has been working for you, for years, at a cost you\u2019re only now starting to add up.' },
        { label: 'Day 6. The exception.', body: 'Find one relationship, even a minor one, where you don\u2019t do this much. A sibling you\u2019re blunt with, a friend who knew you at fourteen. What\u2019s different there? Usually it\u2019s that you tested them a long time ago and the sky stayed up. That relationship is proof the other version of you exists. Keep it close.' },
        { label: 'Day 7. Week one review.', body: 'On paper, which relationship pulls hardest, what your body tell is, one exception where you stay yourself. Set no goals. You\u2019ve spent a week learning to see a move you used to make in the dark, and that seeing is the foundation everything else is built on.' },
      ],
    },
    {
      id: 'planWeek2', zone: 'paid', type: 'exercises',
      title: 'Week 2, Keep Your Own Answer',
      lead: 'A small holding space between reading them and reshaping you.',
      exercises: [
        { label: 'Day 8. The two-second hold.', body: 'When you feel the tell from day 3, do one new thing, pause for two seconds before you respond. That\u2019s the whole instruction. In those two seconds, ask yourself one question, what did I think before I looked at their face? You don\u2019t have to say the answer. You only have to catch it before it\u2019s gone.' },
        { label: 'Day 9. Name your own answer, silently.', body: 'Today, inside the hold, finish the sentence in your head. I\u2019d rather stay in. I didn\u2019t like that film. I disagree. Say it fully and precisely to yourself, and leave it unspoken. Many people find this oddly hard, like reaching for a word in a language they used to speak fluently. The answer is in there. It\u2019s mostly just out of use.' },
        { label: 'Day 10. Let the hold get longer.', body: 'Stretch the two seconds to ten when you can. A pause feels enormous from the inside and is nearly invisible from the outside, roughly the length of one sip of coffee. Use it to hold your answer steady while the pull to adjust arrives. You\u2019re not fighting the pull, only declining to obey it the instant it shows up.' },
        { label: 'Day 11. Keep one answer through a whole exchange.', body: 'Pick one low-stakes conversation and hold your real answer, unspoken, from start to finish. Notice what the mirror wanted to do to it. Did it want to soften the edges, or add a qualifier, or just laugh the whole thing off? Watch the negotiation happen inside you, and let your answer win, quietly, once.' },
        { label: 'Day 12. The cost, felt on purpose.', body: 'A harder day. Sit two minutes with what the mirror has cost you, the particular loneliness of being surrounded and unseen, of a partner who knows a version of you that you built for them. You\u2019re not doing this to feel bad. Sitting with the cost is fuel for week three, because showing a real answer is frightening and you\u2019ll want to remember why it\u2019s worth the fear.' },
        { label: 'Day 13. Hold a real answer with the hardest person.', body: 'Return to the relationship from day 2, the one that pulls hardest, and hold one real answer through one exchange with them, still unspoken. This is the gym at full weight. If it feels impossible today, drop back to an easier person and try again tomorrow. There\u2019s no failure in that. The plan is a loop.' },
        { label: 'Day 14. Week two review.', body: 'Three questions. Can you now find your own answer inside the hold? Which person makes it vanish fastest? What does your answer tend to be, underneath, once you finally catch it? You\u2019ve built the holding space. Next week, for the first time, something comes out of it.' },
      ],
    },
    {
      id: 'planWeek3', zone: 'paid', type: 'exercises',
      title: 'Week 3, Let It Be Seen',
      lead: 'One real answer, made visible to another person. Small first.',
      exercises: [
        { label: 'Day 15. The dinner-sized answer.', body: 'Not the big reveal. Something small enough that it can\u2019t cost you much, actually, I\u2019d rather the other place, or I\u2019m not really in the mood for that tonight. A genuine preference, said plainly, with no three-layer wrapping to soften it. Pick one. Say it. Watch what actually happens, which is almost always less than the mirror predicted.' },
        { label: 'Day 16. Drop one qualifier.', body: 'The mirror loves to hide in hedges, I mean, it\u2019s fine, whatever you think, but maybe. Today, say one true thing and cut the trailing qualifier off before it leaves your mouth. Just the answer, then silence. The silence will feel dangerous and will be completely fine.' },
        { label: 'Day 17. Disagree once, gently.', body: 'Find one small disagreement and voice it, kindly, without collapsing it the second you catch a flicker of their disappointment. I saw it a bit differently, actually. You\u2019re allowed to disagree and stay in the room. Most people who mirror have never fully tested that those two things can happen at the same time.' },
        { label: 'Day 18. Name the mechanism to someone safe.', body: 'With the person closest to you, name the pattern once, in the past tense, asking for nothing. I\u2019ve realized I shape myself around people without noticing, and I\u2019m working on catching it. No request attached. You\u2019re taking the mirror out of the dark and learning that saying it out loud doesn\u2019t cost you the relationship.' },
        { label: 'Day 19. Let them meet your answer.', body: 'In a real moment that matters a little, let your genuine answer be the one you actually give. A plan, an opinion, a no. Then the hard part, borrowed from the catch, when the pull comes to walk it back, to check their face and re-adjust, you say the line silently, that\u2019s the mirror, not me, and you let your answer stand.' },
        { label: 'Day 20. Receive being seen.', body: 'When someone responds to the real you, especially warmly, the mirror will whisper that they only like the version that happens to be convenient today. Notice the whisper. Then let the good response land anyway. Being met only works if you allow it to reach you, and this is the day you practice the allowing.' },
        { label: 'Day 21. The repair move.', body: 'If you dissolved somewhere this week, agreed to something you didn\u2019t want, went quiet in a conversation that mattered, repair it in one sentence. I said yes earlier, but I actually don\u2019t want to, I was on autopilot. No essay, no apology spiral. People who mirror fear that showing the seam makes them look unstable. In practice it\u2019s the strongest move in this plan, because it shows a real person is steering, even mid-adjustment.' },
        { label: 'Day 22. Week three review.', body: 'On paper, what did you say out loud that you\u2019d normally have swallowed? What did you fear would happen, and what actually did? Which felt worse, holding the answer in or showing it? Read back to day 15. The answers have probably gotten easier to say, the way most things do once the sky stays up the first few times.' },
      ],
    },
    {
      id: 'planWeek4', zone: 'paid', type: 'exercises',
      title: 'Week 4, Hold the New Position',
      lead: 'Keeping your shape when the pull to dissolve comes back. And it will.',
      exercises: [
        { label: 'Day 23. Your minimum kit.', body: 'From three weeks of notes, pick your three keepers, the tools that actually did something for you. For many people it\u2019s the two-second hold, the dropped qualifier, and the silent line from the catch. Write them on one card, physical or in your notes app. That card is the plan now. Everything else was scaffolding you don\u2019t need to carry around.' },
        { label: 'Day 24. The good-day trap.', body: 'When a relationship feels easy and warm, the mirror goes quiet, and people drop the practice right before the next hard moment arrives untrained. Today, run one deliberate rep on a calm day, hold a real answer and say it, on purpose, when nothing at all is at stake. Two minutes.' },
        { label: 'Day 25. The relapse plan.', body: 'Write it now, while you\u2019re steady. When I catch myself dissolving again, I\u2019ll name it within a day, run the repair move, and restart the night review for three days. A relapse with a plan costs you an evening. A relapse without one can cost you weeks, because the shame about vanishing does more damage than the vanishing ever did.' },
        { label: 'Day 26. Tell someone what changed.', body: 'Tell one person one concrete difference. I say what I actually want at dinner now, mostly. Saying it aloud makes the new position part of your story, witnessed by someone other than you. People tend to hold a position better once another person has seen them take it.' },
        { label: 'Day 27. Notice what comes back.', body: 'The mirror was expensive in a way you\u2019d stopped noticing. All the attention that went into reading faces has somewhere new to go now. Point it on purpose today, at what you actually want to do with an evening, at an interest that was yours before you started borrowing everyone else\u2019s. Spend one day noticing what returns.' },
        { label: 'Day 28. Stress-test honestly.', body: 'Answer on paper, honestly. If the hardest person in your life leaned on you tomorrow to become who they want, what would happen? If the answer is I\u2019d wobble, but I\u2019d catch it and hold my own answer, that\u2019s Slipping, and the target is met. If the answer is I\u2019d disappear like before, find the week where your notes thinned out and run it again. No shame in it. The plan is a loop, not a corridor.' },
        { label: 'Day 29. Write the before-and-after.', body: 'One page, a real scene from before this plan where you dissolved, and the same scene as you\u2019d hold it today. Concrete and specific, with names and the actual words that were said. This page is your receipt. You\u2019ll want it on the next bad day, because the mirror will insist nothing ever changed, and you\u2019ll have the proof in your own handwriting.' },
        { label: 'Day 30. Retake the test.', body: 'Take the assessment again, not for a reward, for a reading. If your Anchor moved toward Slipping, the kit works, keep the card, drop the daily pages, and rerun any week whenever you feel yourself starting to vanish. If it didn\u2019t move, your notes will point to the exact week to redo. Either way, you\u2019re no longer guessing whether there\u2019s a you in there. There is, and now you\u2019ve watched it hold.' },
      ],
    },

    {
      id: 'acuteKit', zone: 'paid', type: 'prose',
      title: 'Before You Disappear',
      lead: 'The 90-second kit for the moment you feel yourself vanishing. Keep it in your pocket.',
      paras: [
        'You\u2019re across the table from someone. Maybe a partner, maybe the friend whose certainty fills a room, maybe your mother. They\u2019re sure about something, and you can already feel it starting, your own opinion going soft at the edges, a sure, that makes sense forming in your mouth over the top of something you actually thought thirty seconds ago. This card is for the wave itself, not for later.',
        'First, name it, silently, because you\u2019re usually in company for this one, that\u2019s the mirror, not me. You don\u2019t say it out loud and you don\u2019t act on it. Naming the reflex while it runs is what turns it from something that happens to you into something you can watch happening.',
        'Then find your own edges, and give it about thirty seconds. The mirror works by dissolving the line between you and them, so put the line back somewhere only you can feel it. Pick one, always the same one, so it becomes automatic. Press your back into the chair and feel your own weight, separate from theirs. Or push one thumbnail lightly into the side of your fingertip, a small private pressure that\u2019s yours alone and invisible to the room. Or take one slow breath and notice it\u2019s your breath, on your own timing, not matched to the rhythm of the conversation.',
        'Now buy the pause. Don\u2019t answer yet. The mirror runs on the reflex to respond instantly with the agreeable thing, so starve it of the instant. Let me think about that for a second is a complete, ordinary sentence, and most people barely register the gap.',
        'When you do speak, reach for the smallest true thing rather than the smoothest agreeable one. Not a performance of a position, and not a manufactured disagreement dragged up to prove you\u2019re still in there. If all you\u2019ve got is I\u2019m honestly not sure yet, say that, because it\u2019s true and it\u2019s yours. A small real answer holds more of you than a large borrowed one. Then choose, on purpose, agree because you actually agree, disagree, say you need to sit with it, or stay quiet by choice. Every one of those is fine. The win was never a perfect answer on the spot, it\u2019s that a you was there to do the choosing at all.',
        { byPalier: {
          '0': 'You\u2019ll mostly stop the wave in the room now, before it moves you. On the rare day it slips past, the replay in the car still counts.',
          '1': 'You\u2019ll increasingly stop the wave in the room, while it\u2019s happening. The card is there for the harder days when it moves faster than you.',
          '2': 'You\u2019ll catch some of these live and miss others, replaying them on the way home. Both count. The live catch is built out of the delayed ones.',
          '3': 'You\u2019ll often catch the wave only once it\u2019s already passed, replaying it in the car. That still counts. That replay is exactly how the live catch gets built, one delayed catch at a time.',
          '4': 'You\u2019ll usually catch the wave well after it\u2019s passed, sometimes not until the next day. That still counts, fully. Seeing it late is the whole beginning, and it comes forward on its own with practice.',
        } },
        'Four things not to do in the wave. No sudden confession, the I lose myself around you conversation belongs to a calm hour, well away from the middle of the slide. No manufactured disagreement, flipping contrarian to prove you have a self is the mirror wearing a different coat. No self-attack mid-conversation, the moment you start scolding yourself for adjusting, you\u2019ve left the room again. And no relationship-deciding moves while dissolved, don\u2019t quit, confront, or promise anything large inside the wave, because nothing chosen while you can\u2019t feel your own edges is safe to trust yet. Wait until you\u2019re back.',
      ],
    },

    {
      id: 'lectures', zone: 'paid', type: 'bookcards',
      title: 'Your Reading List',
      lead: 'One book, matched to where you are on the Anchor scale. One at a time, alongside the plan and never instead of it. The plan does the moving, the book explains the map.',
      books: {
        byPalier: {
          '0': [
            { title: 'Set Boundaries, Find Peace', author: 'Nedra Glover Tawwab', blurb: 'A warm, practical guide to the plain no and the named preference, to keep the freedom you\u2019ve already earned. Read it with a pen, the end-of-chapter exercises are the point.' },
          ],
          '1': [
            { title: 'Set Boundaries, Find Peace', author: 'Nedra Glover Tawwab', blurb: 'Start here if the adjusting is mostly a habit by now rather than a whole identity. Tawwab is a therapist, and the book is practical and warm about the exact skill the mirror never let you build, saying a plain no, naming a preference. It works at the level of daily choices, where your recovery actually lives. Read it with a pen.' },
          ],
          '2': [
            { title: 'Attached', author: 'Amir Levine and Rachel Heller', blurb: 'You just took an attachment test, and this explains the machinery underneath it, in plain language, with real research behind it. It shows the pull to merge is a strategy you learned early for staying close, and strategies can be updated. Read it once the daily catches from your plan are already underway.' },
          ],
          '3': [
            { title: 'Adult Children of Emotionally Immature Parents', author: 'Lindsay C. Gibson', blurb: 'For you, the mirror is probably older than any romance, built early in a house where reading a parent\u2019s mood kept you safe. Gibson is a clinical psychologist, gentle and specific about how the attuning got learned, and how you begin, as an adult, to hand your attention back to yourself. Slower reading. Some of it will land close to home.' },
          ],
          '4': [
            { title: 'The Drama of the Gifted Child', author: 'Alice Miller', blurb: 'Read this one last, slowly, and only if you\u2019re feeling steady enough to. Miller\u2019s subject is the deepest version of your pattern, the self you learned to hide in childhood to be loved, hidden so skillfully that you eventually lost sight of it yourself. A short book with a long reach.' },
          ],
        },
        default: [
          { title: 'Set Boundaries, Find Peace', author: 'Nedra Glover Tawwab', blurb: 'A practical, warm guide to the plain no and the named preference, the exact skill the mirror never let you build.' },
        ],
      },
    },

    {
      id: 'lecturesWarning', zone: 'paid', type: 'prose',
      when: { if: { palier: 4 } },
      callouts: [
        { tone: 'care', text: 'A word, in honesty. This is a heavy read with difficult passages, and it can stir up more than a book alone is built to hold. If it does, pause it and consider bringing a professional into your corner. At this depth, that isn\u2019t a failure of the plan, it\u2019s the strongest move on the board.' },
      ],
    },

    {
      id: 'devenir', zone: 'paid', type: 'prose',
      title: 'What you become when you rise',
      paras: [
        'A Mirror who rises doesn\u2019t turn into someone else. You keep your sensitivity, your subtlety, that rare way of sensing people. But it no longer costs you your shape. You can be close without disappearing, give without draining yourself, love hard while still knowing what you want.',
        'Be patient, the path is neither fast nor steady. You\u2019ll fade again, especially when your sore spot gets touched. That won\u2019t be a failure, just the sign that you\u2019re learning. And what will lift you isn\u2019t understanding more, it\u2019s living, over time, new experiences where your nervous system learns it can be safe without fading. That happens with others, and it can be practiced. The 30-day plan is where you start.',
      ],
    },

    {
      id: 'etApres', zone: 'paid', type: 'prose',
      title: 'And after this',
      paras: [
        'This report is a snapshot of you today. Your Anchor isn\u2019t fixed, it moves as you integrate your mechanism. The more you learn to feel it coming and hold your place, the less it decides in your stead, and the more you let the right people meet you for real, for who you are and not for the reflection you hold up.',
        'Each level has its own way of working. What you do at level {{ancre_position}} won\u2019t be what you do at the level above. So come back, in a few weeks, take this test again. It\u2019ll become your progress mirror. If your Anchor rises, you\u2019ll know you\u2019re showing up where you\u2019d once have faded. And if it lowers after a hard stretch, that\u2019s useful information, not a setback. Either way, you have a compass.',
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
