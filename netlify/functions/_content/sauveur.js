/* ============================================================================
   LovePattern  .  CONTENT BLOCKS  .  sauveur   (EN delivery)
   ----------------------------------------------------------------------------
   English content, ported 1:1 from uploads/8lovepatterns_EN_zoned/sauveur_EN_zoned.md
   (no re-translation, only re-filing into the assembler's block schema).
   Variable names stay French verbatim. Only their VALUES are English.
   Payment boundary: zone:'free' vs zone:'paid'. SERVER-ONLY.
   House rule: never the long dash.
   ============================================================================ */

export const content = {
  profil: 'sauveur',
  code: 'sau',
  nom: 'The Savior',
  accent: '#B5783F',

  blocks: [

    /* ===================== FREE ZONES ================================== */

    {
      id: 'accroche', zone: 'free', type: 'prose',
      title: {
        byPalier: { '2': 'You’re The Savior. And you already know it.' },
        default: 'You’re The Savior.',
      },
      paras: [
        'You watch yourself do it. The moment you rush to help, when you take charge of what nobody asked you to, part of you notices. You know you’re forgetting yourself again, and you keep going anyway. If you’re here, it isn’t to be taught that you sacrifice yourself, you know that already. You’re here because understanding it changed nothing, and that powerless lucidity wears you out.',
        'Here’s the most important thing in this report, because you’ve waited long enough. What you’re missing isn’t willpower. The moment someone is struggling, your help leaves before your head has decided anything. Nobody has shown you how to stay there without leaping, or how to let someone take care of you.',
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
        'This reflex of making yourself indispensable, you didn’t choose it as an adult. According to Bowlby’s attachment theory, a child builds an internal model with their parent of how relationships work, which then guides their whole love life.',
        'In your case, that model learned a precise rule. I’m loved when I’m useful. Maybe as a child you had to look after a fragile, sick, or overwhelmed parent, and became the little adult of the house very early. Maybe attention only came when you were good, helpful, up to the task. Maybe your worth was always tied to what you brought, never to who you simply were. Whatever the scene was, your conclusion as a child was logical. If I’m not useful, I’m not sure of keeping my place.',
        'It wasn’t calculation. It was the smart protection of a child who had to earn their love. The problem is that this strategy is still running today, and it has you giving endlessly to people who would love you even if you stopped.',
      ],
    },

    {
      id: 'visuel2', zone: 'free', type: 'visual',
      title: 'The loop you keep replaying',
      visual: {
        kind: 'loop', n: 2,
        caption: 'The loop that feeds itself.',
        steps: [
          'You meet a fragility in the other person.',
          'You make yourself useful, you get recognition.',
          'The relationship organizes around your help, your needs slide to second place.',
          'You pile up fatigue and silent waiting, you feel invisible.',
        ],
      },
    },
    {
      id: 'boucleProse', zone: 'free', type: 'prose',
      paras: [
        'At the start, your help creates the bond. The other person feels supported like never before, and you, you finally feel in your place, useful, chosen. Then the relationship organizes around what you give. Your own needs slide to second place, you play down your fatigue, you make yourself available even when it costs you.',
        'The other person gets used to receiving, without always measuring what it takes from you. And you start waiting in silence for a recognition that doesn’t come the way you hoped. You feel invisible despite everything you do. So you give even more, to find the proof of your worth again. The loop gets worse. In the end, you’re exhausted, full of a resentment you don’t dare voice, and you draw a conclusion that seems obvious, people always end up taking advantage of me. Except that conclusion was built by your own strategy. You didn’t prove that people take advantage, you replayed your old fear of mattering only through your usefulness.',
      ],
      callouts: [
        { if: { repetition: 'forte' }, tone: 'note',
          text: 'You told us you often end up exhausted and unrecognized. This is why. It isn’t that you keep meeting ungrateful people. It’s that by giving before you’re asked, you teach people to receive without giving back, then you resent them for what you set up yourself.' },
      ],
    },

    {
      id: 'pourquoiComprendre', zone: 'free', type: 'prose',
      title: 'Why understanding it has never been enough',
      paras: [
        'You’ve surely understood already that you sacrifice too much, and it changed nothing, because your mechanism doesn’t live in your head. It was written into your body before words, in the part of you that reacts, the part that can’t bear to see the other person struggle without leaping to help. The psychiatrist Bessel van der Kolk showed it, the body keeps the score of what the mind has forgotten, and that’s why you don’t calm this reflex through reasoning.',
        'The next time someone is struggling and you feel the urge to take charge, to fix, to make yourself useful, rise, know that a surge has fired through your body, a tension, an impossibility of staying there doing nothing. It has a length, around ninety seconds, if you don’t feed it. The trouble is that you feed it by rushing in. So next time, don’t help right away. Stay, one hand on your belly, breathe, and let the wave pass for a minute and a half. You’ll discover that in the end you can first ask whether the other person wants help, and that sometimes, your simple presence was enough. This tool is yours.',
      ],
    },

    {
      id: 'blindSpot', zone: 'free', type: 'prose',
      title: 'What You Don’t See',
      paras: [
        'You think the giving is invisible.',
        'That’s the blind spot, and it’s worth sitting with for a minute. From the inside, the helping and the fixing feel like something happening in service of the other person, costing them nothing, asking nothing in return. On good days it even feels like a pure gift. You notice everything they need, you fill it before they have to ask, the way someone tends a fire so it never goes out. Who else pays attention like this?',
        'Except none of it is invisible, and it never was.',
        'The person you love feels managed. Maybe they couldn’t name it, most recipients can’t, but they feel the small pause before you step in, the moment where you’re reading what’s missing so you can supply it. They feel the anticipation, the things you’ve fixed before they noticed they were broken. And somewhere along the way they learned, without ever deciding to, that the things they could do themselves, you’ll do instead. So they stopped reaching. Not out of gratitude, out of learned dependence.',
        'Here is where the trap closes, and it is a well-made trap. A partner who is dependent gives you less initiative, less ownership, a quieter sense of their own capacity, because careful management is what your rescue has taught them to be. And less initiative is exactly what your help system reads as need. So you jump in more often, the helping tightens another notch, the dependence deepens, and around it goes.',
        'Your sacrifice has been manufacturing the problem it was built to solve.',
        'You couldn’t see this from the inside. Nobody at your position can, because from inside, the giving still feels like the thing holding the relationship together, the safety net that keeps everything from falling apart. It has, in fact, been the slow leak. Nothing in your history has produced more of the distance you fear than the system you built to prevent it.',
        'The way out is smaller than you’d think, and you already own it. Not a personality transplant, one position. When the urge to leap into ninety seconds of space instead of immediate action, the other person gets room to try. People who try things on their own get stronger, and stronger people need you differently. Same loop, the exact same machinery, running in the other direction, on the same attention that used to feed the rescue.',
        'There was never anything wrong with how much you care. You’re someone with oversized hands standing in a kitchen where most people could reach the shelves themselves, wondering why everyone keeps feeling small.',
        'Take the helm back. The capacity to help can stay. It just doesn’t get to steer anymore.',
      ],
    },

    {
      id: 'visuel3', zone: 'free', type: 'visual',
      title: 'How far it spills into the rest of your life',
      visual: {
        kind: 'spilloverTable', n: 3,
        leftHead: 'Where it shows', rightHead: 'What it produces',
        rows: [
          ['In love, you carry the relationship', 'you end up drained and unseen'],
          ['In friendship, you’re the one who helps everyone', 'nobody thinks to help you'],
          ['At work, you take on others’ load', 'they let you'],
          ['With yourself, you ignore your needs', 'you no longer know what you want'],
        ],
      },
    },
    {
      id: 'debordementProse', zone: 'free', type: 'prose',
      paras: [
        'You don’t only sacrifice yourself in love. You carry almost everyone. People find you generous, solid, always there, and yet very few of them take care of you in return, because you never ask. This generosity that was meant to give you a place sometimes starts to feel like a great silent exhaustion.',
      ],
      callouts: [
        { if: { statut: 'rupture' }, tone: 'note',
          text: 'And since the breakup, you may still be hooked on the unfinished mission, wondering who’s going to take care of the other person, to the point of mistaking the loss of love for the loss of your role.' },
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
            'You’re The Savior, and you’ve learned to help without forgetting yourself. You feel the urge to take everything on coming, and most of the time you choose to stay present without sacrificing yourself. This report won’t teach you to see yourself, but to hold that new balance and to spot what could pull you back into rescuing.',
          ],
          '1': [
            'You’re The Savior, and you watch yourself leap live. More and more, you manage to ask whether the other person wants help instead of rushing in. It isn’t systematic yet. What’s left is to turn each urge to rescue into a choice, and to learn to say your own needs instead of only guessing other people’s.',
          ],
          '2': [
            'You watch yourself do it. The moment you rush to help, when you forget yourself again, you know it. You know you’re disappearing behind your role, and you keep going anyway. That lucidity that prevents nothing is a real pain, the pain of someone who’d like to receive and whose body only knows how to give.',
            'You now know what’s happening to you, where it comes from, and why understanding it hasn’t switched it off. You have a first tool that works in the body. What comes next is your plan.',
          ],
          '3': [
            'You’re The Savior, and you’re starting to see it. You recognize that you forget yourself, but on a delay, once you’re exhausted and full of resentment. It’s later that you realize you carried everything again without being asked. You have the lucidity, what you’re missing is the right moment.',
          ],
          '4': [
            'You’re The Savior. If your relationships often end the same way, you probably feel used, unrecognized, surrounded by ungrateful people who take without giving back. From where you stand, it’s other people who take advantage. You’re sometimes right, some people really do take too much. But I want to offer you another angle, gently. What if part of what keeps repeating also came from a very old habit of giving before you’re asked, until you teach people to give you nothing back?',
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
        'Your Savior doesn’t move alone. Right behind it sits {{pattern_secondaire}} ({{pattern_secondaire_score}}).',
        {
          bySecondaire: {
            miroir: 'You don’t only make yourself useful, you also become what the other person expects. You give the right help, but also the right version of yourself, the one that pleases. You disappear twice over, behind your role and behind your adapting. In your plan, we work first on finding what you want, before trying to give it or to please.',
          },
          default: 'Whatever it is, it deepens the same self-forgetting, your way of earning your place by giving. Your plan starts by learning to receive, before working on this second mechanism.',
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
            blurb: 'Someone with a high Harbor, an integrated Bastion, an integrated Chameleon. What they share, they’re self-sufficient, they don’t turn you into a permanent rescuer, they choose you for yourself and not for what you do. Near them, you can set down your load, because nobody asks you to carry it in order to exist.',
            items: [{ code: 'anc', name: 'High Harbor' }, { code: 'bas', name: 'Integrated Bastion' }, { code: 'cam', name: 'Integrated Chameleon' }] },
          { label: 'The ones who understand you', tone: 'comprend',
            blurb: 'A Mirror on the way, an integrated Watcher, an Arsonist making progress. They know from the inside the fear of losing your place, the need to matter. After that, everything depends on each person’s Anchor.',
            items: [{ code: 'mir', name: 'Mirror on the way' }, { code: 'gue', name: 'Integrated Watcher' }, { code: 'inc', name: 'Arsonist progressing' }] },
          { label: 'The ones who exhaust you', tone: 'declenche',
            blurb: 'A very active Runaway, a partner in chronic distress, a person who receives without ever taking responsibility. They give you an endless mission, and that’s exactly what wakes your mechanism. The more they need you, the more you forget yourself. They aren’t bad people, they’re the riskiest dynamic for you as long as your Anchor is low.',
            items: [{ code: 'fug', name: 'Active Runaway' }] },
        ],
      },
    },
    {
      id: 'compatProse2', zone: 'paid', type: 'prose',
      paras: [
        'And there’s a scientific reason for your pull toward the ones who need saving. Hazan and Shaver showed, back in 1987, that adult love replays the attachment system of childhood. Your body recognizes the bond where you earn your place by helping as familiar, and calls it love. That’s why a self-sufficient person can feel distant to you, when they may be the one with whom you could finally be loved without having to prove anything.',
      ],
    },

    {
      id: 'catch', zone: 'paid', type: 'prose',
      title: 'The Savior Catch',
      lead: 'Catch the rescue before it leaves your hands. Ten seconds.',
      paras: [
        'Your mechanism has a first move, and it happens fast. Before the advice, before you’ve reorganized your afternoon around their problem, before you notice you’ve taken on something nobody handed you, there is one small instant. You register that the other person is struggling, and your body is already leaning in to fix it. The help leaves before you’ve decided anything, and often before they’ve asked for a thing.',
        'You are not trying to stop caring. People who feel someone else’s trouble this quickly are often the ones others feel held by, and there is nothing to repair in the care itself. What you are recovering is the moment before the care turns into a job, the thin sliver where their problem is still theirs and hasn’t yet become your project.',
        'Here is the whole gesture. When you feel yourself starting to move in, scanning for what’s missing so you can supply it, you say one line to yourself, silently.',
        'That’s the reflex, not the ask.',
        'You don’t act on the line. You don’t announce that you’re holding back, and you certainly don’t inform a friend mid-sentence that you’ve decided not to rescue them. You name the reflex while it’s running, which is harder than it sounds, because the whole design of the pattern is that it feels like love rather than a reflex. The line puts a thin pane of glass between the urge and your hands, long enough to notice that nobody actually asked, and that you have a choice about what happens next.',
        'When you feel yourself start to move in, catch it live and name it in the moment. It moves fast, and some days you’ll only catch it a beat late, once you’re already carrying the thing. That still counts, and the live catch gets built one delayed catch at a time.',
      ],
    },

    {
      id: 'planIntro', zone: 'paid', type: 'prose',
      title: 'The 30-Day Plan',
      lead: 'Learn to stay without leaping, and to let yourself be carried. One page a day.',
      paras: [
        'For the next thirty days you wear one posture, and it will feel strange at first. You are the one who waits to be asked. Not colder, not less kind, just a half-step slower to reach, so there is room for the other person to ask, and room for you to notice you have needs of your own. Thirty days, one page each. The plan has four movements and they run in order for a reason. You can’t hold a wave you can’t yet see, and you can’t receive while your hands are always full of someone else’s load. Week one is only watching. Week two builds the pause and hands other people back their own weight. Week three is the hard, unfamiliar part, letting yourself be helped and saying a need out loud. Week four is about keeping the position once you have it.',
        'The promise here is one notch, Hooked toward Snagged. Not Clear. Clear is the direction you’re facing, not the destination of thirty days, and anyone selling you a whole new self in a month is offering the same fantasy that started the rescuing in the first place.',
        'One rule for the month, because you’ll break days and that’s built in. A day you miss and simply notice is data. A day you miss and turn on yourself over becomes fuel for the very pattern you’re working on, since self-punishment is just rescuing pointed inward. Notice, don’t sentence. Then turn the page.',
        { byPalier: {
          '0': 'Where to begin, for you. You already hold the helm most days, so read this as maintenance. Jump to week three and use the earlier weeks only where a page names something you’ve felt slip lately.',
          '1': 'Where to begin, for you. You already ask before leaping most of the time, so the first two weeks are largely yours. Skim them, then start properly at day 15, where the work moves from holding back to asking for yourself.',
          '2': 'Where to begin, for you. Start at day 1 and keep the written pace. The plan is built around exactly your position, feeling the urge and leaping anyway, so the default rhythm is yours.',
          '3': 'Where to begin, for you. Spend a full week on the night review alone, day 1 repeated seven times, before you move on. Your catch has to exist in hindsight before it can exist live, and rushing that only builds the later weeks on sand.',
          '4': 'Where to begin, for you. Read the What You Don’t See page first, because until you have, this plan will read like an accusation. Then run week one at half speed, one review every two days. The reflex still feels like love at your position, and the whole month is about it slowly starting to feel like a reflex instead.',
        } },
      ],
    },
    {
      id: 'planWeek1', zone: 'paid', type: 'exercises',
      title: 'Week 1, See the Leap',
      lead: 'You change nothing this week. You only learn the shape of the move.',
      exercises: [
        { label: 'Day 1. One catch a day.', body: 'Use the gesture from The Savior Catch, once. Sometime today you’ll feel yourself start to move in on someone’s trouble before they’ve asked. Name it silently, that’s the reflex, not the ask, and let it pass. You’re not stopping anything yet. You’re proving to yourself that the move is visible at all, which most people who do this have never actually watched themselves do.' },
        { label: 'Day 2. Where does it happen most?', body: 'Notice which relationship pulls the reflex hardest. For a lot of people it isn’t the partner at all, it’s a parent you’ve been managing for years, a sibling in perpetual crisis, a friend whose life you quietly run. Just note the name. The person you can’t stop rescuing usually tells you where the rescuing was first learned.' },
        { label: 'Day 3. The tell in your body.', body: 'The leap has a physical signature and it’s worth learning yours. Some people feel their shoulders rise. Some get a tightness in the chest the second someone else looks unhappy. For others it’s a restlessness in the hands, an inability to just sit while a problem sits unsolved. Find yours today. It becomes your early-warning system in week two.' },
        { label: 'Day 4. The pre-help scan.', body: 'Watch for the earliest version of the move, the moment you walk into a room and start reading who needs what before anyone has spoken. This scanning for what’s missing so you can supply it is the anchor point of your whole pattern, the exact instant your result named. Catch one scan. Do nothing with it.' },
        { label: 'Day 5. Count, don’t judge.', body: 'A tally day. Every time you catch yourself leaping, offering, taking on, or managing something unasked, make a mark, on paper or in your phone, no commentary attached. The number tends to run higher than people expect. Read it gently, a high count shows how hard the reflex has been working for you, for years, at a cost you’re only now starting to add up.' },
        { label: 'Day 6. The exception.', body: 'Find one relationship, even a minor one, where you don’t over-give. Someone you let handle their own life, a friend you can sit with in silence without fixing anything. What’s different there? Usually it’s that this person never signaled distress, so your rescuer never got hired. That relationship is proof the other version of you exists. Keep it close.' },
        { label: 'Day 7. Week one review.', body: 'On paper, which relationship pulls hardest, what your body tell is, one exception where you don’t rescue. Set no goals. You’ve spent a week learning to see a move you used to make in the dark, and that seeing is the foundation everything else is built on.' },
      ],
    },
    {
      id: 'planWeek2', zone: 'paid', type: 'exercises',
      title: 'Week 2, Hold the Wave, Wait for the Ask',
      lead: 'A small holding space between their trouble and your hands.',
      exercises: [
        { label: 'Day 8. The two-second hold.', body: 'When you feel the tell from day 3, do one new thing, pause for two seconds before you move. That’s the whole instruction. In those two seconds, ask yourself one question, did they actually ask me for this? You don’t have to answer out loud. You only have to catch the question before the reflex answers it for you.' },
        { label: 'Day 9. Ask before acting.', body: 'Today, once inside the hold, ask one real question instead of leaping. Do you want help with this, or do you just want me to listen? Many people find this oddly hard, because supplying the fix is how you’ve always secured your place, and a question hands the choice back to them. It also spares you from carrying something nobody wanted carried.' },
        { label: 'Day 10. Let the hold get longer.', body: 'Stretch the two seconds toward the ninety-second wave from your free report. When the urge to fix rises, put one hand on your belly, breathe long and slow, and let the surge crest and fall before you decide anything. You’re not refusing to help. You’re declining to help on reflex, which is the only kind of help that was ever costing you.' },
        { label: 'Day 11. Let them carry one thing.', body: 'Pick one problem, small and low-stakes, that isn’t yours, and let the other person carry it themselves. Watch what the reflex does. It will tell you they can’t manage, that it’s unkind to sit still, that helping is just faster. Let them handle it anyway, and notice, most people manage more than your rescuer believes they can, and something in them grows when you let them.' },
        { label: 'Day 12. The cost, felt on purpose.', body: 'A harder day. Sit two minutes with what the rescuing has cost you, the particular tiredness of being the one who holds everyone, the resentment you don’t let yourself say, the sense of being needed everywhere and chosen nowhere. You’re not doing this to feel bad. Sitting with the cost is fuel for week three, because receiving is frightening and you’ll want to remember why it’s worth the fear.' },
        { label: 'Day 13. Hold the wave with the hardest person.', body: 'Return to the relationship from day 2, the one that pulls hardest, and hold the wave through one exchange with them without leaping to fix. Ask before acting if you act at all. This is the gym at full weight. If it feels impossible today, drop back to an easier person and try again tomorrow. There’s no failure in that. The plan is a loop.' },
        { label: 'Day 14. Week two review.', body: 'Three questions. Can you now find the pause between their trouble and your hands? Which person makes it vanish fastest? What does the reflex tell you, underneath, when you don’t obey it? You’ve built the holding space. Next week, for the first time, you turn the care back toward yourself.' },
      ],
    },
    {
      id: 'planWeek3', zone: 'paid', type: 'exercises',
      title: 'Week 3, Let Yourself Be Carried',
      lead: 'Turning the care back toward yourself. Small first.',
      exercises: [
        { label: 'Day 15. The small receive.', body: 'Not the big ask. Something small enough that it can’t cost you much, letting a friend get the coffee, accepting an offer of help you’d normally wave off, saying yes to a favor. Take it, and then do the genuinely hard part, don’t immediately even the score. Sit in the small debt. For you, receiving without repaying is the actual exercise, and it will feel more uncomfortable than it should.' },
        { label: 'Day 16. Drop one justification.', body: 'When you do ask for something today, or accept something, cut the explanation off before it leaves your mouth. Not, could you possibly, only if it’s no trouble, I feel terrible asking. Just the request, then silence. The reflex loves to wrap every need in apology so it barely counts as a need. Let one need stand unwrapped, and notice the silence is survivable.' },
        { label: 'Day 17. Voice one real need.', body: 'Name one thing you actually want, to someone who can hear it, plainly. I’d like an evening that’s just for me this week. I need you to ask how I’m doing sometimes. Say it as a preference, not a complaint, and don’t soften it into a joke. People who rescue have often never told anyone what they need, on the theory that a person who has needs is harder to keep. Test that theory once, today.' },
        { label: 'Day 18. Name the mechanism to someone safe.', body: 'With the person closest to you, name the pattern once, in the past tense, asking for nothing. I’ve realized I take on everyone’s problems without noticing, and I’m working on catching it. No request attached. You’re taking the reflex out of the dark and learning that saying it out loud doesn’t cost you the relationship.' },
        { label: 'Day 19. Let the need be met.', body: 'In a real moment that matters a little, let a voiced need be the one that stands. Then the hard part, borrowed from the catch, when the pull comes to take it back, to reassure them it’s fine, to leap in and fix something to earn the thing you just asked for, you say the line silently, that’s the reflex, not the ask, and you let your need stay on the table.' },
        { label: 'Day 20. Receive being cared for.', body: 'When someone does something kind for you, especially without being asked, the reflex will whisper that you now owe them, or that they only did it because of everything you do for them. Notice the whisper. Then let the kindness land anyway, without settling the account. Being cared for only works if you allow it to reach you, and this is the day you practice the allowing.' },
        { label: 'Day 21. The repair move.', body: 'If you over-gave somewhere this week, took on a problem that wasn’t yours, said yes when you had nothing left, repair it in one sentence. I said I’d handle that, but I actually can’t take it on right now. No essay, no apology spiral. People who rescue fear that pulling back makes them look unreliable. In practice it’s the strongest move in this plan, because it shows the relationship can hold a real you, the one with limits.' },
        { label: 'Day 22. Week three review.', body: 'On paper, what did you ask for or accept that you’d normally have refused? What did you fear would happen, and what actually did? Which felt worse, receiving or giving? Read back to day 15. The asks have probably gotten a little easier, the way most things do once the sky stays up the first few times.' },
      ],
    },
    {
      id: 'planWeek4', zone: 'paid', type: 'exercises',
      title: 'Week 4, Hold the New Position',
      lead: 'Keeping your place when the pull to rescue comes back. And it will.',
      exercises: [
        { label: 'Day 23. Your minimum kit.', body: 'From three weeks of notes, pick your three keepers, the tools that actually did something for you. For many people it’s the two-second hold, the question do you want help or to be heard, and the silent line from the catch. Write them on one card, physical or in your notes app. That card is the plan now. Everything else was scaffolding you don’t need to carry around.' },
        { label: 'Day 24. The good-day trap.', body: 'When a relationship feels easy and no one’s in crisis, the reflex goes quiet, and people drop the practice right before the next struggling person walks in. Today, run one deliberate rep on a calm day, let someone do something for you, or leave one small problem un-fixed, on purpose, when nothing at all is at stake. Two minutes.' },
        { label: 'Day 25. The relapse plan.', body: 'Write it now, while you’re steady. When I catch myself carrying everything again, I’ll name it within a day, run the repair move, and ask for one thing back for three days. A relapse with a plan costs you an evening. A relapse without one can cost you weeks, because the shame about over-giving does more damage than the over-giving ever did.' },
        { label: 'Day 26. Tell someone what changed.', body: 'Tell one person one concrete difference. I ask now whether people want help before I jump in, mostly. Saying it aloud makes the new position part of your story, witnessed by someone other than you. People tend to hold a position better once another person has seen them take it.' },
        { label: 'Day 27. Notice what comes back.', body: 'The rescuing was expensive in a way you’d stopped noticing. All the energy that went into scanning for what everyone needed has somewhere new to go now. Point it on purpose today, at something that’s yours, a want you’d shelved, a project you kept postponing because someone always needed you more. Spend one day noticing what returns.' },
        { label: 'Day 28. Stress-test honestly.', body: 'Answer on paper, honestly. If the person you rescue most leaned on you hard tomorrow, what would happen? If the answer is I’d feel the pull, but I’d hold the wave and ask before leaping, that’s Snagged, and the target is met. If the answer is I’d drop everything and disappear into their problem like before, find the week where your notes thinned out and run it again. No shame in it. The plan is a loop.' },
        { label: 'Day 29. Write the before-and-after.', body: 'One page, a real scene from before this plan where you forgot yourself to rescue someone, and the same scene as you’d hold it today. Concrete and specific, with names and the actual words that were said. This page is your receipt. You’ll want it on the next bad day, because the reflex will insist nothing ever changed, and you’ll have the proof in your own handwriting.' },
        { label: 'Day 30. Retake the test.', body: 'Take the assessment again, not for a reward, for a reading. If your Anchor moved toward Snagged, the kit works, keep the card, drop the daily pages, and rerun any week whenever you feel yourself starting to over-give again. If it didn’t move, your notes will point to the exact week to redo. Either way, you’re no longer guessing whether you can be loved without being of service. You can, and now you’ve watched yourself let it happen.' },
      ],
    },

    {
      id: 'acuteKit', zone: 'paid', type: 'prose',
      title: 'Before You Take It On',
      lead: 'The 90-second kit for the moment you start carrying their weight as your own. Keep it in your pocket.',
      paras: [
        'Someone in front of you is struggling. Maybe a partner in a hard week, maybe the friend whose life is one crisis after another, maybe your parent. They’re upset, and you can already feel it starting, your body leaning in, a plan forming, your afternoon quietly rearranging itself around their problem before they’ve even finished describing it. This card is for the wave itself, not for later.',
        'First, name it, silently, because you’re usually right there with them, that’s the reflex, not the ask. You don’t say it out loud and you don’t act on it. Naming the reflex while it runs is what turns it from something that carries you off into something you can watch happening.',
        'Then find your own edges, and give it about thirty seconds. The reflex works by dissolving the line between their trouble and your responsibility, so put the line back somewhere only you can feel it. Pick one, always the same one, so it becomes automatic. Press your back into the chair and feel your own weight, separate from theirs. Or press one thumbnail lightly against a fingertip, a small private pressure that’s yours alone. Or take one slow breath and notice it’s your breath, on your own timing, not matched to their distress.',
        'Now buy the pause. Don’t fix anything yet. The reflex runs on the urge to act instantly, so starve it of the instant. That sounds really hard, I’m here is a complete, ordinary thing to say, and it commits you to nothing but presence while the wave comes down.',
        'When you do move, ask before you act. Do you want help with this, or do you want me to listen? If they want to be heard, your whole job is to stay and listen, which is harder for you than doing but worth far more to them. If they do want help, you can choose how much to give, on purpose, rather than emptying yourself on reflex. And if what’s really being asked is bigger than you can carry, you’re allowed to say so. The win was never solving it on the spot, it’s that you were still there, as yourself, with your own edges intact, doing the choosing.',
        'You’ll catch some of these live and miss others, noticing only once you’re already carrying the thing. Both count. The live catch is built out of the delayed ones.',
        'Four things not to do in the wave. No grand promise, the I’ll take care of everything vow belongs to no moment at all, least of all this one. No keeping score out loud, listing what you’ve done for them mid-crisis turns care into a bill and helps no one. No self-attack, the moment you start scolding yourself for leaping, you’ve just aimed the rescuing at yourself. And no large commitments while the wave is high, don’t promise money, time, or a rescue you’ll resent later, because nothing pledged while you can’t feel your own edges is safe to trust yet. Wait until you’re back.',
        { byPalier: {
          '0': 'At your position the full sequence mostly holds, and you often stop the wave at move one or two. Keep the card for the times a person really matters and the pull is strong.',
          '1': 'You will usually get through the sequence now. The card is here for the harder moments, when the urge moves faster than you and you need the moves in order.',
          '2': 'This is your card, run the full sequence. Some days you catch it at move one, other days you’re mid-help before you remember the card exists, and you use it from wherever you are.',
          '3': 'The full sequence probably won’t hold on your first waves, and expecting it to is a setup. Run moves one and two, and call that a complete rep, because it is. The rest of the card unlocks as the catch speeds up.',
          '4': 'Run moves one and two only, and count that as a complete rep. A partial kit you actually use is worth far more than a complete kit in a drawer. The rest unlocks later, on its own, as the catch speeds up.',
        } },
      ],
    },

    {
      id: 'lectures', zone: 'paid', type: 'bookcards',
      title: 'Your Reading List',
      lead: 'A book meets you where you are or it bounces off, and caregiving books bounce hard. So this list is sorted by your position on the scale, not by fame. Start at your tier, one book at a time, and keep the plan running while you read, because reading about the mechanism has a long history of quietly replacing work on it. The plan does the moving. The books explain the map.',
      books: {
        byPalier: {
          '0': [
            { title: 'Hold Me Tight', author: 'Sue Johnson', blurb: 'To deepen a bond where you are loved for who you are, not for what you do.' },
            { title: 'The Seven Principles for Making Marriage Work', author: 'John Gottman', blurb: 'To build, with a partner, a lasting relationship on the balance of giving and receiving you have earned.' },
            { title: 'Nonviolent Communication', author: 'Marshall Rosenberg', blurb: 'To keep, over time, a way of voicing your own needs so they stay visible.' },
          ],
          '1': [
            { title: 'Nonviolent Communication', author: 'Marshall Rosenberg', blurb: 'To say your own needs out loud instead of only sensing everyone else’s.' },
            { title: 'Boundaries', author: 'Henry Cloud & John Townsend', blurb: 'To turn growing awareness into limits you can actually hold.' },
            { title: 'The Body Keeps the Score', author: 'Bessel van der Kolk', blurb: 'To support, through understanding the body, the receiving you are starting to allow.' },
          ],
          '2': [
            { title: 'Codependent No More', author: 'Melody Beattie', blurb: 'Written for your exact position, the one where you see the pattern with perfect clarity and run it anyway. Her central tool, boundaried care, is the missing bridge between knowing and moving, and it plugs straight into your week one work. If you read one book this month, this is it.' },
            { title: 'The Body Keeps the Score', author: 'Bessel van der Kolk', blurb: 'Read it second. It explains why your body reacts before your mind gets a vote, and why the body-first tools in your kit, the long exhale, the hand pressure, the grounded breath, are not decorations. One honest warning, it is a heavy book with difficult passages, and if it stirs more than it settles, put it down and consider bringing a professional into your corner. At this depth that isn’t the plan failing, it is the strongest move on the board.' },
            { title: 'Boundaries', author: 'Henry Cloud & John Townsend', blurb: 'Read it third. It teaches that having limits is how you stay able to give, and that saying no to the endless is how you say yes to the people who matter.' },
          ],
          '3': [
            { title: 'Self-Compassion', author: 'Kristin Neff', blurb: 'Not a caregiving book, and that is deliberate. At your position the judgment spiral after each rescue does more damage than the rescue itself, and no mechanism work holds while you are at war with yourself for having one. Pour this ground floor before you build anything on top.' },
            { title: 'Codependent No More', author: 'Melody Beattie', blurb: 'To work, step by step, on the habit of carrying what no one asked you to carry.' },
            { title: 'Boundaries', author: 'Henry Cloud & John Townsend', blurb: 'To start drawing the line between caring for someone and disappearing into them.' },
          ],
          '4': [
            { title: 'Adult Children of Emotionally Immature Parents', author: 'Lindsay C. Gibson', blurb: 'At your position the rescue is not a habit anymore, it is the water you swim in, and water like that usually has an address somewhere in the past. Gibson maps how a reflex like yours gets installed, without blame, and without asking you to confront anyone or reopen anything before you are ready.' },
            { title: 'Codependent No More', author: 'Melody Beattie', blurb: 'The classic on the over-giving, caretaking pattern. To recognize it, name it, and stop calling it simply love.' },
            { title: 'Boundaries', author: 'Henry Cloud & John Townsend', blurb: 'To see, gently, that having limits is not selfish, and where yours went missing.' },
          ],
        },
        default: [
          { title: 'Codependent No More', author: 'Melody Beattie', blurb: 'Written for the position where you see the pattern with perfect clarity and run it anyway. Her tool, boundaried care, is the bridge between knowing and moving.' },
          { title: 'Boundaries', author: 'Henry Cloud & John Townsend', blurb: 'Teaches how to stay able to give by learning to say no to the endless.' },
          { title: 'The Body Keeps the Score', author: 'Bessel van der Kolk', blurb: 'Explains why your body reacts before your mind gets a vote, and why the body-first tools work when reason fails.' },
        ],
      },
    },

    {
      id: 'devenir', zone: 'paid', type: 'prose',
      title: 'What you become when you rise',
      paras: [
        'A Savior who rises doesn’t lose their generosity. You keep your rare capacity to support, your loyalty, your sensitivity to distress, your love that knows how to make itself concrete. But you no longer use them to buy your place. You can help without forgetting yourself, support without carrying, stay present without becoming indispensable at any cost. And above all, you learn to receive, to let someone take care of you without panicking.',
        'Be patient, the path is neither fast nor steady. You’ll rush to rescue again, especially when someone truly matters. That won’t be a failure, just the sign that you’re learning. And what will lift you isn’t understanding more, it’s living, over time, the experience that you can be loved for yourself, even when you do nothing. That happens with others, and it can be practiced. Your plan is where you start.',
      ],
    },

    {
      id: 'etApres', zone: 'paid', type: 'prose',
      title: 'And after this',
      paras: [
        'This report is a snapshot of you today. Your Anchor isn’t fixed, it moves as you integrate your mechanism. The more you learn to feel the urge to rescue and to ask before acting, the less it decides in your place, and the more you let the right people love you for who you are, not for what you do.',
        'Each level has its own way of working. What you do at level {{ancre_position}} won’t be what you do at the level above. So come back, in a few weeks, take this test again. It’ll become your progress mirror. If your Anchor rises, you’ll know you’re receiving where you’d once only have known how to give. And if it lowers after a hard stretch, that’s useful information, not a setback. Either way, you have a compass.',
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
