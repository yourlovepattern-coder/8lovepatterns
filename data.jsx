/* 8LovePatterns, pattern metadata + categories + questionnaire (English) */

const FAMILIES = {
  poursuis: { key:'poursuis', label:'I pursue', fear:'Abandonment', color:'#C9433B', soft:'#EDD8D8',
    desc:'Fear rises fast. You push, you scan, you reach for proof that the other person is still there.' },
  fuis: { key:'fuis', label:'I flee', fear:'Being engulfed', color:'#CE9A2E', soft:'#F9EED7',
    desc:'You protect your space. When pressure builds, you create distance so you can breathe.' },
  controle: { key:'controle', label:'I control', fear:'Powerlessness', color:'#8A5AA8', soft:'#E7DFEA',
    desc:'You stay in command. Understand it, transform it, anything but be swept away by it.' },
  efface: { key:'efface', label:'I erase myself', fear:'Rejection', color:'#46934A', soft:'#D6ECE3',
    desc:'You make yourself essential to the other person, even if you disappear a little in the process.' },
  protege: { key:'protege', label:'I protect myself', fear:'Being hurt', color:'#4A7AA8', soft:'#D8E3ED',
    desc:'You filter access to your heart. Distance reassures; the armor protects.' },
};

const ARCHETYPES = [
  { code:'inc', name:'The Arsonist', family:'poursuis', accent:'#C9433B', soft:'#EDD8D8',
    emprise:'Very active', tagline:'When fear rises, you intensify.',
    motto:'\u201cIf you fight for me, I know you\u2019re still here.\u201d',
    hook:'You don\u2019t crave drama. You crave proof that someone will stay.',
    summary:'When you sense distance, you turn the intensity up \u2014 you push, you provoke, you pull for a reaction. A storm can feel safer than silence, because at least it means the other person still cares.',
    triggers:'A late reply, a cooler tone, a moment of distance \u2014 anything that whispers \u201cmaybe you don\u2019t matter as much as you hoped.\u201d',
    protects:'The fear of not counting \u2014 of being left quietly, without a fight.',
    shows:'Your relationships run alive and warm, but they can exhaust the other person when every doubt becomes a test they have to pass.',
    reset:'Before you light the match, name the need under it: \u201cI\u2019m scared I don\u2019t matter right now.\u201d The sentence usually does what the fire was trying to do.' },
  { code:'gue', name:'The Watcher', family:'poursuis', accent:'#C9433B', soft:'#EDD8D8',
    emprise:'Emerging', tagline:'You scan for signs before they become wounds.',
    motto:'\u201cI\u2019d rather see it coming than be the last to know.\u201d',
    hook:'You\u2019re not trying to control anyone. You\u2019re trying not to be caught off guard.',
    summary:'You read every micro-signal \u2014 a shorter text, a shift in tone, a change in energy. Anticipating the goodbye is how you make sure it can never blindside you.',
    triggers:'Ambiguity. A silence you can\u2019t explain, a rhythm that suddenly changes.',
    protects:'The fear of being the last to understand that something has already ended.',
    shows:'Your sensitivity catches real problems early \u2014 but a radar that never sleeps can make a partner feel watched instead of loved.',
    reset:'Ask yourself one question: \u201cAm I reacting to what\u2019s happening, or to what I\u2019m afraid of?\u201d Most alarms are the fear, not the fact.' },
  { code:'fug', name:'The Runaway', family:'fuis', accent:'#CE9A2E', soft:'#F9EED7',
    emprise:'Emerging', tagline:'When it gets too close, you need distance.',
    motto:'\u201cI stay best when I know I can leave.\u201d',
    hook:'You\u2019re not running from the person. You\u2019re running from the pressure.',
    summary:'When emotional intensity builds, your instinct is to create space \u2014 to delay, to go quiet, to breathe somewhere the expectations can\u2019t reach you.',
    triggers:'Feeling trapped, or sensing that more is expected of you than you can give right now.',
    protects:'The fear of losing yourself inside someone else\u2019s needs.',
    shows:'You bring lightness and freedom \u2014 but unexplained distance can look exactly like abandonment to the person left behind.',
    reset:'Before you disappear, leave a door open with one line: \u201cI need an hour, I\u2019ll be back.\u201d Announced distance isn\u2019t abandonment.' },
  { code:'alc', name:'The Alchemist', family:'controle', accent:'#8A5AA8', soft:'#E7DFEA',
    emprise:'Emerging', tagline:'You fall for potential, not always reality.',
    motto:'\u201cIf I understand it, it can\u2019t overwhelm me.\u201d',
    hook:'You don\u2019t fall for who\u2019s there. You fall for who they could become.',
    summary:'You meet strong feeling with analysis \u2014 you explain it, decode it, turn it into meaning. Understanding the emotion is how you keep from being swept away by it.',
    triggers:'Feeling emotionally out of control, or facing someone you can\u2019t \u201cfix\u201d or explain.',
    protects:'The fear of powerlessness \u2014 of feeling something you can\u2019t manage.',
    shows:'You bring clarity and calm in the storm \u2014 but when a partner wants your heart and gets an explanation, they can feel alone next to you.',
    reset:'Swap one \u201cI think\u201d for one \u201cI feel\u201d \u2014 a single emotion word, with no analysis behind it. That discomfort is where intimacy begins.' },
  { code:'sau', name:'The Savior', family:'efface', accent:'#46934A', soft:'#D6ECE3',
    emprise:'Very active', tagline:'You love by carrying what was never yours.',
    motto:'\u201cIf I\u2019m needed, I can\u2019t be left.\u201d',
    hook:'You spot everyone\u2019s needs before your own \u2014 and somewhere in there, you disappear.',
    summary:'You love by helping, fixing, carrying. Becoming indispensable is how you secure your place. But the more you carry, the more you vanish behind the role.',
    triggers:'Sensing you might be loved for who you are, not for what you do.',
    protects:'The fear of being loved only when useful \u2014 and forgotten the moment you need something too.',
    shows:'You\u2019re the rock everyone leans on \u2014 until the relationship tilts, and quiet resentment grows under all the giving.',
    reset:'Once this week, receive without giving back. Let someone do something for you, and notice the discomfort \u2014 it has a lot to teach you.' },
  { code:'mir', name:'The Mirror', family:'efface', accent:'#46934A', soft:'#D6ECE3',
    emprise:'Very active', tagline:'You become what keeps you wanted.',
    motto:'\u201cYour mood becomes mine.\u201d',
    hook:'You feel the other person from the inside \u2014 sometimes more than you feel yourself.',
    summary:'Their joy lifts you, their sadness floods you. Merging completely is how you make sure there\u2019s no gap between you \u2014 because a gap could mean rejection. But in the fusion, your own outline fades.',
    triggers:'Any sense of distance or being \u201cout of sync\u201d \u2014 it lands like a small rupture.',
    protects:'The fear of separation, of no longer being on the same wavelength.',
    shows:'You create a rare, wordless closeness \u2014 but when they sink, you sink with them, and no one is left holding the wheel.',
    reset:'Several times a day, ask: \u201cIs this my feeling, or theirs?\u201d Redrawing the line is how you find yourself again.' },
  { code:'cam', name:'The Chameleon', family:'efface', accent:'#46934A', soft:'#D6ECE3',
    emprise:'Emerging', tagline:'You adapt so fast you forget what you need.',
    motto:'\u201cTell me who to be, and I\u2019ll become it.\u201d',
    hook:'You read what the other person wants and become it \u2014 flawlessly, automatically.',
    summary:'You sense expectations and shape yourself to meet them. Being exactly the right person is how you avoid ever disappointing. But somewhere along the way, you lose track of what you actually want.',
    triggers:'The risk of being seen as you really are \u2014 and not chosen for it.',
    protects:'The fear of not being enough as yourself.',
    shows:'You make relationships smooth and easy \u2014 but they\u2019re built on an edited version of you, and one day you realize they love someone who isn\u2019t quite real.',
    reset:'Once this week, state one true preference \u2014 the film, the restaurant, the plan. Saying \u201cI want this\u201d teaches you your own taste again.' },
  { code:'bas', name:'The Bastion', family:'protege', accent:'#4A7AA8', soft:'#D8E3ED',
    emprise:'Very active', tagline:'You stay in control so no one gets too close.',
    motto:'\u201cNo one comes in without a key.\u201d',
    hook:'You feel a great deal. You just decide who gets to see it.',
    summary:'You keep a safe distance and control who reaches which depth. Calm on the surface, you open the gate slowly, on your own terms \u2014 and never all the way.',
    triggers:'Feeling exposed, or sensing you might start to depend on someone.',
    protects:'The fear of being invaded, then abandoned once your guard is down.',
    shows:'You offer steadiness and reliability \u2014 but a drawbridge that stays up too long teaches people to stop knocking.',
    reset:'Share one true, small thing this week. Intimacy is built in deposits, not in one big leap.' },
];

/* Display name is "The Harbor" — NOT "The Anchor". "Anchor" is already taken
   by the 5-tier control scale (Clear/Slipping/Snagged/Hooked/Buried, see
   ANCHOR_TIERS below) and its Science-page section; the two are unrelated
   concepts that happen to share a nautical theme, so this profile has its
   own name. code:'anc' and family:'ancre' are internal identifiers only,
   never shown to users, and are left as-is. */
const ANCRE = { code:'anc', name:'The Harbor', family:'ancre', accent:'#2C7E91', soft:'#E4F0F2',
  tagline:'You can protect yourself without closing your heart.',
  motto:'\u201cI feel the wave, and I stay.\u201d',
  hook:'The Harbor isn\u2019t a cure. You still have a pattern. It just no longer runs the show.',
  summary:'You feel fear, need and anger like everyone else. What changes is that you notice the reflex before it takes over, and you get to choose what happens next. Close without losing yourself, independent without fleeing.',
  reset:'Keep naming what rises, even when things are good. The Harbor is a practice, not a status you reach.' };

/* Public URL slugs for the /patterns/{slug} pages. One slug per archetype
   code (the 8 patterns + the secure profile) — the slug is the pattern's
   display name, kebab-cased, never the internal 3-letter code. Bidirectional so
   App.jsx can go both ways: code -> path when routing, path -> code when
   resolving a direct URL load or a popstate. Keep in sync with _redirects
   (one exact rewrite rule per slug) and ARCHETYPES/ANCRE above. */
const PATTERN_SLUGS = {
  inc: 'the-arsonist',
  gue: 'the-watcher',
  fug: 'the-runaway',
  alc: 'the-alchemist',
  sau: 'the-savior',
  mir: 'the-mirror',
  cam: 'the-chameleon',
  bas: 'the-bastion',
  anc: 'the-harbor',
};
const SLUG_TO_PATTERN = Object.fromEntries(Object.entries(PATTERN_SLUGS).map(([code, slug]) => [slug, code]));

const ANCHOR_TIERS = ['Clear', 'Slipping', 'Snagged', 'Hooked', 'Buried'];

const SCALE = [
  { v:1, label:'Strongly disagree' },
  { v:2, label:'Somewhat disagree' },
  { v:3, label:'Neutral' },
  { v:4, label:'Somewhat agree' },
  { v:5, label:'Strongly agree' },
];

/* representative extract of the questionnaire (~80 questions in the full product) */
const QUESTIONS = [
  { id:1, text:'When the other person takes a while to reply, I quickly imagine the worst.', fam:'poursuis' },
  { id:2, text:'I notice tension in a relationship long before it surfaces.', fam:'poursuis' },
  { id:3, text:'If I feel a doubt, I need to talk about it right away.', fam:'poursuis' },
  { id:4, text:'I prefer to keep a part of myself just for me.', fam:'protege' },
  { id:5, text:'When pressure builds, my first instinct is to get some air.', fam:'fuis' },
  { id:6, text:'Depending on someone makes me uncomfortable.', fam:'protege' },
  { id:7, text:'I feel useful when I can help or fix something for the other person.', fam:'efface' },
  { id:8, text:'Faced with a strong emotion, I try to understand it first.', fam:'controle' },
  { id:9, text:'I often put the other person\u2019s needs before my own.', fam:'efface' },
  { id:10, text:'My partner\u2019s mood quickly becomes my own.', fam:'efface' },
  { id:11, text:'I adapt easily to what the other person expects of me.', fam:'efface' },
  { id:12, text:'Sometimes I no longer quite know what I want.', fam:'efface' },
];

Object.assign(window, { FAMILIES, ARCHETYPES, ANCRE, SCALE, QUESTIONS, LP_ANCHOR_TIERS: ANCHOR_TIERS, PATTERN_SLUGS, SLUG_TO_PATTERN });
