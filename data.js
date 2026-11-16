/* Conversation data for the Doabi Punjabi Trainer. Checked by validate.js.
   Every Punjabi line is {pa, say, en}: romanised Punjabi, a sounded-out version, an English gloss.
   Lines that can be played aloud also carry gu: the same line in Punjabi script. It is never shown, only spoken.
   step.them  : the other person's line          step.dir : a stage direction instead of a line
   step.pre   : tap-a-word question on their line {q, word, yes}
   step.type  : 'pick' (choose the reply) | 'build' (order the tiles) | 'say' (say it, then check)
   pick  -> opts [{pa, say, en, k:'good'|'ok'|'bad', note, name}]   first good is the main line
   build -> answer, tiles (in the right order), extra (decoys), trapTile, trapSeq
   say   -> prompt, answer, good
   step.why   : follow-up question {q, opts:[{t, right, note}]}     step.tip : a dialect note */
var M_TUU = 'Tuuñ for an elder';
var M_END = 'The all-purpose ending';
var M_MAI = 'Maiñ where mainuñ belongs';
var M_NAI = 'Nai in the wrong seat';
var M_OVER = 'Mainuñ everywhere';
var M_HALF = 'Half-respectful';
var M_HE = 'A he-ending for her';
var M_TENSE = 'Wrong day on the verb';
var M_NUM = 'One for many';
var M_DAA = 'Daa and dii swapped';
var M_OBJ = 'The verb ignores the food';
var M_NE = 'Ne on a moving verb';
var M_POST = 'English word order';
var M_ADJ = 'A describing word that does not match';
var M_SAK = 'The long verb before sakdaa';
var M_OBL = 'Meraa before a link word';
var M_NAA = 'Nai where naa belongs';
var M_KOL = 'Having without koḷ';

var SLIP = { pa: 'Haiñ? Kii keyaa?', say: 'HEH? kee KAY-aa?', en: 'Eh? What did you say?', gu: 'ਹੈਂ? ਕੀ ਕਿਹਾ?' };

var CONVOS = [
  {
    id: 'door', title: 'Walking in the door', who: 'Maasii', rel: 'your mum\'s sister', place: 'At her front door',
    intro: 'Play your side. Wrong replies are part of the lesson.',
    steps: [
      {
        dir: 'Maasii opens the door.',
        type: 'pick', ask: 'Greet her first.', hint: 'The greeting, her title, then jii.',
        opts: [
          { pa: 'Sat srii akaal, Maasii jii.', say: 'sut SREE uh-KAAL, MAA-see jee', en: 'Hello, Auntie.', gu: 'ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ, ਮਾਸੀ ਜੀ।', k: 'good', note: 'Greeting, title, jii. That is how you walk into a Punjabi house.' },
          { pa: 'Kiddaañ, Maasii?', say: 'kid-DAAÑ, MAA-see?', en: 'How\'s it going, Auntie?', k: 'ok', note: 'Fine for a cousin. With an elder, the greeting comes first.' },
          { pa: 'Kiddaañ aiñ tuuñ?', say: 'kid-DAAÑ eh TOOÑ?', en: 'How are you? (said to a friend or a child)', k: 'bad', name: M_TUU, note: 'Tuuñ is for friends, kids and anyone younger. Elders get tusiiñ.' }
        ],
        why: { q: 'What does jii add after her name?', opts: [
          { t: 'Respect. It softens anything said to an elder', right: true },
          { t: 'It turns the line into a question', note: 'Your voice does that. Jii is about respect.' },
          { t: 'It means "very"', note: 'That would be baṛaa. Jii is about respect.' }] }
      },
      {
        them: { pa: 'Sat srii akaal, puttar! Aa jaa, aa jaa. Kiddaañ?', say: 'sut SREE uh-KAAL, PUT-ter! AA jaa, AA jaa. kid-DAAÑ?', en: 'Hello, son! Come in, come in. How are you?', gu: 'ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ, ਪੁੱਤਰ! ਆ ਜਾ, ਆ ਜਾ। ਕਿੱਦਾਂ?' },
        pre: { q: 'Tap the word that asks how you are.', word: 'Kiddaañ', yes: 'Kiddaañ. A textbook says kiveñ. Doabi families say kiddaañ.' },
        type: 'pick', ask: 'Say you are fine and ask her back, respectfully.', hint: 'Start with maiñ ṭhiik aañ, then use the respectful you: tusiiñ.',
        opts: [
          { pa: 'Maiñ ṭhiik aañ. Tusiiñ kiddaañ o?', say: 'meh TEEK aañ. too-SEEÑ kid-DAAÑ o?', en: 'I\'m fine. How are you?', gu: 'ਮੈਂ ਠੀਕ ਆਂ। ਤੁਸੀਂ ਕਿੱਦਾਂ ਓ?', k: 'good', note: 'Tusiiñ, with o at the end. The respect is in both words.' },
          { pa: 'Ṭhiik ṭhaak, Maasii jii. Tusiiñ suṇaao.', say: 'TEEK-taak, MAA-see jee. too-SEEÑ soo-NAA-o', en: 'All good, Auntie. You tell me.', gu: 'ਠੀਕ ਠਾਕ, ਮਾਸੀ ਜੀ। ਤੁਸੀਂ ਸੁਣਾਓ।', k: 'good', note: 'Very natural. Suṇaao hands the conversation back to her.' },
          { pa: 'Maiñ ṭhiik aañ. Tuuñ kiddaañ aiñ?', say: 'meh TEEK aañ. TOOÑ kid-DAAÑ eh?', en: 'I\'m fine. How are you? (said to a friend)', k: 'bad', name: M_TUU, note: 'Right for a cousin. For Maasii, swap tuuñ and aiñ for tusiiñ and o.' }
        ]
      },
      {
        them: { pa: 'Kàr sab ṭhiik ṭhaak aa?', say: 'KUR sub TEEK-taak aa?', en: 'Everything okay at home?', gu: 'ਘਰ ਸਭ ਠੀਕ ਠਾਕ ਆ?' },
        pre: { q: 'Tap the word for home.', word: 'Kàr', yes: 'Kàr. It starts with a k and the voice starts low, then lifts.' },
        type: 'say', prompt: 'Yes, everyone is fine.',
        answer: { pa: 'Haañ jii, sab ṭhiik aa.', say: 'haañ jee, sub TEEK aa', en: 'Yes, everyone is fine.', gu: 'ਹਾਂ ਜੀ, ਸਭ ਠੀਕ ਆ।' },
        good: 'Haañ jii is the respectful yes. Sab is everyone, everything.'
      },
      {
        them: { pa: 'Mammii kiddaañ aa terii?', say: 'MUM-mee kid-DAAÑ aa TAY-ree?', en: 'How\'s your mum?', gu: 'ਮੰਮੀ ਕਿੱਦਾਂ ਆ ਤੇਰੀ?' },
        type: 'build', ask: 'Tell her Mum is fine and was thinking of her.', hint: 'Mum first. Then: you (to you), remembering, was doing.',
        answer: { pa: 'Mammii ṭhiik aa. Tuaanuuñ yaad kardii sii.', say: 'MUM-mee TEEK aa. twaa-NOOÑ yaad KUR-dee see', en: 'Mum\'s fine. She was thinking of you.', gu: 'ਮੰਮੀ ਠੀਕ ਆ। ਤੁਹਾਨੂੰ ਯਾਦ ਕਰਦੀ ਸੀ।' },
        tiles: ['Mammii', 'ṭhiik aa.', 'Tuaanuuñ', 'yaad', 'kardii', 'sii.'], extra: ['kardaa'],
        trapTile: { kardaa: { name: M_HE, note: 'Kardaa is a he. Mum is a she, so it is kardii.' } },
        good: 'Yaad karnaa: to remember, to think of someone. Kardii, because Mum is a she.',
        tip: 'In some Doabi homes sii comes out as sigii (and sigaa for a he). Listen for which one your family uses.'
      },
      {
        them: { pa: 'Aidaañ khaṛaa kyoñ aiñ? Baiṭh jaa!', say: 'AY-daañ khuh-RAA kyoñ eh? BETH jaa!', en: 'Why are you standing there like that? Sit down!', gu: 'ਐਦਾਂ ਖੜ੍ਹਾ ਕਿਉਂ ਐਂ? ਬੈਠ ਜਾ!' },
        pre: { q: 'Tap the word that means "like this".', word: 'Aidaañ', yes: 'Aidaañ. Textbooks teach is taraañ. Doaba says aidaañ, and oddaañ for "like that".' },
        type: 'pick', ask: 'Tell her you are sitting down.', hint: 'One man talking about himself: the ending is -daa.',
        opts: [
          { pa: 'Haañ jii, baiṭhdaa aañ.', say: 'haañ jee, BETH-daa aañ', en: 'Yes, I\'m sitting.', gu: 'ਹਾਂ ਜੀ, ਬੈਠਦਾ ਆਂ।', k: 'good', note: '-daa aañ: one man talking about himself.' },
          { pa: 'Haañ jii, baiṭhde aañ.', say: 'haañ jee, BETH-day aañ', en: 'Yes, we\'re sitting.', k: 'bad', name: M_END, note: '-de is for we, they, or someone you respect. For yourself it is -daa.' },
          { pa: 'Okay jii.', say: 'okay jee', en: 'Okay.', k: 'ok', note: 'She will take it. Now say it in Punjabi.' }
        ],
        why: { q: 'Which ending goes with maiñ, for a man?', opts: [
          { t: '-daa, as in maiñ baiṭhdaa aañ', right: true },
          { t: '-de, as in maiñ baiṭhde aañ', note: '-de belongs to asiiñ: we.' },
          { t: '-dii, as in maiñ baiṭhdii aañ', note: 'That is a woman speaking.' }] }
      }
    ],
    outro: 'Greeting first. Tusiiñ for elders. Haañ jii. And -daa when you talk about yourself.',
    mission: 'Next time you walk into a relative\'s house, open with Sat srii akaal and ask: Tusiiñ kiddaañ o?'
  },
  {
    id: 'chaa', title: 'Chaa and roti', who: 'Biibii', rel: 'your grandmother', place: 'In her kitchen',
    intro: 'She is going to feed you. Your job is to answer.',
    steps: [
      {
        them: { pa: 'Puttar, chaa piiṇii aa?', say: 'PUT-ter, CHAA PEE-nee aa?', en: 'Son, will you have tea?', gu: 'ਪੁੱਤਰ, ਚਾਹ ਪੀਣੀ ਆ?' },
        pre: { q: 'Tap the word that means "to drink".', word: 'piiṇii', yes: 'Piiṇii. It ends in -ii because chaa is a she.' },
        type: 'pick', ask: 'Say yes.', hint: 'Ask for a little, or start with mainuñ.',
        opts: [
          { pa: 'Haañ jii, thoṛii jii de deo.', say: 'haañ jee, THO-ree jee day DAY-o', en: 'Yes please, just a little.', gu: 'ਹਾਂ ਜੀ, ਥੋੜ੍ਹੀ ਜਿਹੀ ਦੇ ਦਿਓ।', k: 'good', note: 'Thoṛii jii: a little. The polite way to say yes to anything.' },
          { pa: 'Haañ jii, mainuñ chaa chaahidii aa.', say: 'haañ jee, MEH-nooñ CHAA CHAA-hee-dee aa', en: 'Yes, I\'d like tea.', gu: 'ਹਾਂ ਜੀ, ਮੈਨੂੰ ਚਾਹ ਚਾਹੀਦੀ ਆ।', k: 'good', note: 'Correct. Wanting comes to you, so it starts with mainuñ.' },
          { pa: 'Haañ jii, maiñ chaa chaahidii aa.', say: 'haañ jee, MEH CHAA CHAA-hee-dee aa', en: 'Broken: "Yes, I tea is wanted."', k: 'bad', name: M_MAI, note: 'Wanting, hunger, knowing and feelings come to you. They start with mainuñ.' }
        ]
      },
      {
        them: { pa: 'Pùkkh lagii aa? Roṭii khaaṇii aa?', say: 'PUKH LUG-ee aa? RO-tee KHAA-nee aa?', en: 'Are you hungry? Will you eat?', gu: 'ਭੁੱਖ ਲੱਗੀ ਆ? ਰੋਟੀ ਖਾਣੀ ਆ?' },
        pre: { q: 'Tap the word for hunger.', word: 'Pùkkh', yes: 'Pùkkh, with the voice starting low. In Punjabi, hunger attaches to you.' },
        type: 'build', ask: 'Tell her you are hungry.', hint: 'To me, hunger has attached.',
        answer: { pa: 'Haañ jii, mainuñ pùkkh lagii aa.', say: 'haañ jee, MEH-nooñ PUKH LUG-ee aa', en: 'Yes, I\'m hungry.', gu: 'ਹਾਂ ਜੀ, ਮੈਨੂੰ ਭੁੱਖ ਲੱਗੀ ਆ।' },
        tiles: ['Haañ jii,', 'mainuñ', 'pùkkh', 'lagii', 'aa.'], extra: ['maiñ'],
        trapTile: { 'maiñ': { name: M_MAI, note: 'Word for word it is "to me, hunger has attached". So mainuñ, never maiñ.' } },
        good: 'Mainuñ pùkkh lagii aa. Learn it as one chunk.'
      },
      {
        them: { pa: 'Hor lai! Ikk roṭii hor.', say: 'HOR leh! ik RO-tee hor', en: 'Have more! One more roti.', gu: 'ਹੋਰ ਲੈ! ਇੱਕ ਰੋਟੀ ਹੋਰ।' },
        type: 'build', ask: 'Turn her down politely: you do not want more.', hint: 'Nai goes right in front of the last word.',
        answer: { pa: 'Nai jii, mainuñ hor nai chaahidii.', say: 'neh jee, MEH-nooñ hor neh CHAA-hee-dee', en: 'No thank you, I don\'t want more.', gu: 'ਨਹੀਂ ਜੀ, ਮੈਨੂੰ ਹੋਰ ਨਹੀਂ ਚਾਹੀਦੀ।' },
        tiles: ['Nai jii,', 'mainuñ', 'hor', 'nai', 'chaahidii.'], extra: [],
        trapSeq: {
          'Nai jii,|mainuñ|nai|hor|chaahidii.': { name: M_NAI, note: 'Nai sits directly in front of the verb: hor nai chaahidii.' },
          'Nai jii,|nai|mainuñ|hor|chaahidii.': { name: M_NAI, note: 'Nai sits directly in front of the verb: hor nai chaahidii.' }
        },
        good: 'Hor nai chaahidii. She will give you one anyway.',
        why: { q: 'Where does nai go?', opts: [
          { t: 'Directly in front of the verb', right: true },
          { t: 'In front of the thing you are refusing', note: 'That is English order: "no more".' },
          { t: 'Straight after mainuñ', note: 'Too early. It waits until just before the verb.' }] }
      },
      {
        them: { pa: 'Kyoñ? Changii nai baṇii?', say: 'kyoñ? CHUNG-ee neh BUN-ee?', en: 'Why? Did it not come out well?', gu: 'ਕਿਉਂ? ਚੰਗੀ ਨਹੀਂ ਬਣੀ?' },
        pre: { q: 'Tap the word that means "turned out".', word: 'baṇii', yes: 'Baṇii: came out, turned out. Roṭii baṇ gaii, chaa baṇ gaii.' },
        type: 'pick', ask: 'Reassure her: it is delicious, you are just full.', hint: 'Being full does not take mainuñ.',
        opts: [
          { pa: 'Nai nai, baṛii suaad baṇii aa. Maiñ rajj gayaa.', say: 'neh neh, BUH-ree SWAAD BUN-ee aa. meh RUJ gyaa', en: 'No no, it came out really tasty. I\'m full.', gu: 'ਨਹੀਂ ਨਹੀਂ, ਬੜੀ ਸੁਆਦ ਬਣੀ ਆ। ਮੈਂ ਰੱਜ ਗਿਆ।', k: 'good', note: 'Maiñ rajj gayaa: I\'m full. The line that ends a Punjabi meal.' },
          { pa: 'Nai nai, baṛii suaad baṇii aa. Mainuñ rajj gayaa.', say: 'neh neh, BUH-ree SWAAD BUN-ee aa. MEH-nooñ RUJ gyaa', en: 'Broken: "...to me got full."', k: 'bad', name: M_OVER, note: 'Hunger comes to you, so mainuñ. Getting full is something you did, so maiñ.' },
          { pa: 'Baṛii suaad aa.', say: 'BUH-ree SWAAD aa', en: 'It\'s really tasty.', k: 'ok', note: 'True, but she asked why you stopped. Tell her you are full.' }
        ],
        why: { q: 'Why maiñ here, when hunger took mainuñ?', opts: [
          { t: 'Hunger happens to you. Getting full is something you did', right: true },
          { t: 'Mainuñ is only for questions', note: 'No. Mainuñ pùkkh lagii aa is a plain statement.' },
          { t: 'Because roṭii is a she', note: 'Gender changes the verb ending, not maiñ and mainuñ.' }] }
      },
      {
        them: { pa: 'Chal koi nai. Chaa taañ pii lai.', say: 'chul KOY neh. CHAA taañ pee leh', en: 'Never mind then. At least drink your tea.', gu: 'ਚੱਲ ਕੋਈ ਨਹੀਂ। ਚਾਹ ਤਾਂ ਪੀ ਲੈ।' },
        pre: { q: 'Tap any word of the phrase that means "never mind".', word: 'Chal koi nai', yes: 'Chal koi nai: never mind, no worries. You will hear it ten times a day.' },
        type: 'say', prompt: 'The tea came out really good, Biibii.',
        answer: { pa: 'Chaa baṛii badhiiaa baṇii aa, Biibii.', say: 'CHAA BUH-ree BUD-ee-aa BUN-ee aa, BEE-bee', en: 'The tea came out really good, Biibii.', gu: 'ਚਾਹ ਬੜੀ ਬਧੀਆ ਬਣੀ ਆ, ਬੀਬੀ।' },
        good: 'Badhiiaa, with a b. Textbooks write vadhiiaa.',
        why: { q: 'Which set would you hear in a Doabi family?', opts: [
          { t: 'badhiiaa, baḍḍaa, bich', right: true },
          { t: 'vadhiiaa, vaḍḍaa, vich', note: 'That is the textbook. Doaba turns that v into a b.' }] }
      }
    ],
    outro: 'Mainuñ for hunger and wanting. Maiñ for being full. Nai right before the verb.',
    mission: 'At the next family meal, turn down a second helping with: Nai jii, maiñ rajj gayaa.'
  },
  {
    id: 'phone', title: 'Phone call', who: 'Maamaa', rel: 'your mum\'s brother', place: 'On the phone',
    intro: 'No faces, no pointing. Just the words.',
    steps: [
      {
        them: { pa: 'Hello puttar, Maamaa boldaa aañ. Kii haal aa?', say: 'hello PUT-ter, MAA-maa BOL-daa aañ. kee HAAL aa?', en: 'Hello son, it\'s Mama. How are things?', gu: 'ਹੈਲੋ ਪੁੱਤਰ, ਮਾਮਾ ਬੋਲਦਾ ਆਂ। ਕੀ ਹਾਲ ਆ?' },
        type: 'pick', ask: 'Greet him, say all is well, and hand it back.', hint: 'Greeting, sab ṭhiik aa, then tusiiñ suṇaao.',
        opts: [
          { pa: 'Sat srii akaal, Maamaa jii! Sab ṭhiik aa. Tusiiñ suṇaao.', say: 'sut SREE uh-KAAL, MAA-maa jee! sub TEEK aa. too-SEEÑ soo-NAA-o', en: 'Hello, Mama! All good. You tell me.', gu: 'ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ, ਮਾਮਾ ਜੀ! ਸਭ ਠੀਕ ਆ। ਤੁਸੀਂ ਸੁਣਾਓ।', k: 'good', note: 'Three moves in one breath: greet, answer, hand it back.' },
          { pa: 'Ṭhiik aa.', say: 'TEEK aa', en: 'Fine.', k: 'ok', note: 'Correct, and a dead end. Hand it back: tusiiñ suṇaao.' },
          { pa: 'Sat srii akaal, Maamaa jii! Sab ṭhiik aa. Tuuñ suṇaa.', say: 'sut SREE uh-KAAL, MAA-maa jee! sub TEEK aa. TOOÑ soo-NAA', en: 'Hello, Mama! All good. You tell me. (said to a friend)', k: 'bad', name: M_TUU, note: 'Tuuñ suṇaa is what he says to you. Back to him it is tusiiñ suṇaao.' }
        ]
      },
      {
        them: { pa: 'Ajj kall kii kardaa aiñ?', say: 'UJ-kul kee KUR-daa eh?', en: 'What are you up to these days?', gu: 'ਅੱਜ ਕੱਲ੍ਹ ਕੀ ਕਰਦਾ ਐਂ?' },
        pre: { q: 'Tap any word of the phrase that means "these days".', word: 'Ajj kall', yes: 'Ajj kall: today-tomorrow, meaning these days.' },
        type: 'pick', ask: 'Tell him you are just working, and it is busy.', hint: 'One man: kardaa aañ.',
        opts: [
          { pa: 'Bas, kamm kardaa aañ. Baṛaa busy aa.', say: 'bus, KUM KUR-daa aañ. BUH-raa busy aa', en: 'Just working. It\'s really busy.', gu: 'ਬੱਸ, ਕੰਮ ਕਰਦਾ ਆਂ। ਬੜਾ ਬਿਜ਼ੀ ਆ।', k: 'good', note: 'English words like busy drop straight in. That is how Southall speaks.' },
          { pa: 'Bas, kamm karde aañ. Baṛaa busy aa.', say: 'bus, KUM KUR-day aañ. BUH-raa busy aa', en: 'We\'re just working. It\'s really busy.', k: 'bad', name: M_END, note: 'Karde is we or they. You alone: kardaa.' },
          { pa: 'Kujh nai.', say: 'KOOJ neh', en: 'Nothing.', k: 'ok', note: 'Honest, but give him something to work with.' }
        ]
      },
      {
        them: { pa: 'Kamm kiddaañ chaldaa aa?', say: 'KUM kid-DAAÑ CHUL-daa aa?', en: 'How\'s work going?', gu: 'ਕੰਮ ਕਿੱਦਾਂ ਚੱਲਦਾ ਆ?' },
        type: 'say', prompt: 'Work is going fine.',
        answer: { pa: 'Kamm ṭhiik chaldaa aa.', say: 'KUM TEEK CHUL-daa aa', en: 'Work\'s going fine.', gu: 'ਕੰਮ ਠੀਕ ਚੱਲਦਾ ਆ।' },
        good: 'Chaldaa: going, running. It works for a job, a car, life.'
      },
      {
        them: { pa: 'Saaḍe kàr kadoñ aauṇaa?', say: 'SAA-day KUR kuh-DOÑ AU-naa?', en: 'When are you coming to ours?', gu: 'ਸਾਡੇ ਘਰ ਕਦੋਂ ਆਉਣਾ?' },
        pre: { q: 'Tap the word that means "when".', word: 'kadoñ', yes: 'Kadoñ: when. Saaḍe kàr: to our house.' },
        type: 'pick', ask: 'Promise you will come next week.', hint: 'I will come: aauuñgaa.',
        opts: [
          { pa: 'Agle hafte aauuñgaa, pakkaa.', say: 'UG-lay HUF-tay aa-OOÑ-gaa, PUK-kaa', en: 'I\'ll come next week, promise.', gu: 'ਅਗਲੇ ਹਫ਼ਤੇ ਆਊਂਗਾ, ਪੱਕਾ।', k: 'good', note: 'Aauuñgaa: I will come. Pakkaa: for definite.' },
          { pa: 'Agle hafte aavaañge, pakkaa.', say: 'UG-lay HUF-tay aa-VAAÑ-gay, PUK-kaa', en: 'We\'ll come next week, promise.', k: 'bad', name: M_END, note: '-aañge is we. On your own it is aauuñgaa.' },
          { pa: 'Mainuñ nai pataa.', say: 'MEH-nooñ neh puh-TAA', en: 'I don\'t know.', k: 'ok', note: 'Perfect Punjabi, wrong answer. He will keep asking until he gets a day.' }
        ],
        tip: 'Textbooks write aavaañgaa. In Doabi speech you will mostly hear aauuñgaa.'
      },
      {
        them: { pa: 'Roṭii khaa lii?', say: 'RO-tee khaa lee?', en: 'Have you eaten?', gu: 'ਰੋਟੀ ਖਾ ਲਈ?' },
        type: 'build', ask: 'Tell him not yet.', hint: 'Yet, not, eaten.',
        answer: { pa: 'Nai jii, hale nai khaadhii.', say: 'neh jee, HUH-lay neh KHAA-dee', en: 'No, I haven\'t eaten yet.', gu: 'ਨਹੀਂ ਜੀ, ਹਾਲੇ ਨਹੀਂ ਖਾਧੀ।' },
        tiles: ['Nai jii,', 'hale', 'nai', 'khaadhii.'], extra: [],
        trapSeq: { 'Nai jii,|nai|hale|khaadhii.': { name: M_NAI, note: 'Nai goes right before the verb: hale nai khaadhii.' } },
        good: 'Hale: yet, still. Hale nai khaadhii.'
      },
      {
        them: { pa: 'Chal ṭhiik aa. Apṇaa tìaan rakkhiiñ.', say: 'chul TEEK aa. UP-naa tee-AAN RUK-eeñ', en: 'Okay then. Look after yourself.', gu: 'ਚੱਲ ਠੀਕ ਆ। ਆਪਣਾ ਧਿਆਨ ਰੱਖੀਂ।' },
        type: 'pick', ask: 'Wish him the same and sign off.', hint: 'With tusiiñ, the command ends in -o.',
        opts: [
          { pa: 'Tusiiñ bii apṇaa tìaan rakkheo. Sat srii akaal.', say: 'too-SEEÑ bee UP-naa tee-AAN RUK-yo. sut SREE uh-KAAL', en: 'You look after yourself too. Goodbye.', gu: 'ਤੁਸੀਂ ਬੀ ਆਪਣਾ ਧਿਆਨ ਰੱਖਿਓ। ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ।', k: 'good', note: 'Bii: too. Textbooks write vii. The greeting also works as goodbye.' },
          { pa: 'Tusiiñ bii apṇaa tìaan rakkh. Sat srii akaal.', say: 'too-SEEÑ bee UP-naa tee-AAN RUKH. sut SREE uh-KAAL', en: 'You look after yourself too. (order given to a child)', k: 'bad', name: M_HALF, note: 'Tusiiñ with a bare command clashes. The respect has to reach the verb: rakkho or rakkheo.' },
          { pa: 'Okay, bye Maamaa jii.', say: 'okay, bye MAA-maa jee', en: 'Okay, bye Mama.', k: 'ok', note: 'It works. Closing in Punjabi lands better.' }
        ]
      }
    ],
    outro: 'Hand it back with tusiiñ suṇaao. Kardaa for yourself. Close with Sat srii akaal.',
    mission: 'Ring one relative this week and get through the first three lines in Punjabi.'
  },
  {
    id: 'plans', title: 'Making plans', who: 'Jassi', rel: 'your cousin, same age as you', place: 'On a call',
    intro: 'A cousin your own age. This is tuuñ territory, and the verbs point at the future.',
    steps: [
      {
        them: { pa: 'Kiddaañ bai? Saturday nuuñ kii kardaa aiñ?', say: 'kid-DAAÑ bye? Saturday NOOÑ kee KUR-daa eh?', en: 'How\'s it going, man? What are you doing on Saturday?', gu: 'ਕਿੱਦਾਂ ਬਈ? ਸੈਟਰਡੇ ਨੂੰ ਕੀ ਕਰਦਾ ਐਂ?' },
        pre: { q: 'Tap the word that means "on" (on Saturday).', word: 'nuuñ', yes: 'Nuuñ. It comes after the day: Saturday nuuñ.' },
        type: 'pick', ask: 'Say nothing special, you are free.', hint: 'One man: the ending is -aa.',
        opts: [
          { pa: 'Kujh khaas nai. Behlaa aañ.', say: 'KOOJ khaas neh. BEH-laa aañ', en: 'Nothing special. I\'m free.', gu: 'ਕੁਝ ਖ਼ਾਸ ਨਹੀਂ। ਬਿਹਲਾ ਆਂ।', k: 'good', note: 'Behlaa: free, doing nothing. Textbooks write vehlaa.' },
          { pa: 'Kujh khaas nai. Behle aañ.', say: 'KOOJ khaas neh. BEH-lay aañ', en: 'Nothing special. We\'re free.', k: 'bad', name: M_END, note: 'Behle is we. You alone are behlaa.' },
          { pa: 'Mainuñ nai pataa.', say: 'MEH-nooñ neh puh-TAA', en: 'I don\'t know.', k: 'ok', note: 'Fine, but he is asking so he can invite you. Tell him you are free.' }
        ]
      },
      {
        them: { pa: 'Chal fer, aapaañ Southall chaliie.', say: 'chul FER, AA-paañ Southall CHUL-ee-ay', en: 'Come on then, let\'s go to Southall.', gu: 'ਚੱਲ ਫੇਰ, ਆਪਾਂ ਸਾਊਥਾਲ ਚੱਲੀਏ।' },
        pre: { q: 'Tap the word that means "us, you and me".', word: 'aapaañ', yes: 'Aapaañ: we, with you included. Textbooks teach asiiñ.' },
        type: 'say', prompt: 'Okay. What time are we going?',
        answer: { pa: 'Ṭhiik aa. Kinne baje chalṇaa?', say: 'TEEK aa. KIN-nay BUJ-ay CHUL-naa?', en: 'Okay. What time are we going?', gu: 'ਠੀਕ ਆ। ਕਿੰਨੇ ਬਜੇ ਚੱਲਣਾ?' },
        good: 'Kinne baje: at what time. Chalṇaa on its own does the job of "are we going".'
      },
      {
        them: { pa: 'Baaraañ baje. Tuuñ gaḍḍii lai ke aaiiñ.', say: 'BAA-raañ BUJ-ay. TOOÑ GUD-dee leh kay AA-eeñ', en: 'Twelve o\'clock. You bring the car.', gu: 'ਬਾਰਾਂ ਬਜੇ। ਤੂੰ ਗੱਡੀ ਲੈ ਕੇ ਆਈਂ।' },
        pre: { q: 'Tap the word for car.', word: 'gaḍḍii', yes: 'Gaḍḍii: car. Lai ke aaiiñ: bring it along.' },
        type: 'pick', ask: 'Say you will come at twelve.', hint: 'I will: the verb ends in -uuñgaa.',
        opts: [
          { pa: 'Ṭhiik aa, maiñ baaraañ baje aa jaauuñgaa.', say: 'TEEK aa, meh BAA-raañ BUJ-ay aa JAA-ooñ-gaa', en: 'Okay, I\'ll come at twelve.', gu: 'ਠੀਕ ਆ, ਮੈਂ ਬਾਰਾਂ ਬਜੇ ਆ ਜਾਊਂਗਾ।', k: 'good', note: 'Aa jaauuñgaa: I will turn up. -uuñgaa is the "I will" ending.' },
          { pa: 'Ṭhiik aa, maiñ baaraañ baje aa gayaa.', say: 'TEEK aa, meh BAA-raañ BUJ-ay aa gyaa', en: 'Okay, I came at twelve.', k: 'bad', name: M_TENSE, note: 'Aa gayaa has already happened. For Saturday it is aa jaauuñgaa.' },
          { pa: 'Ṭhiik aa, maiñ baaraañ baje aa jaavaañge.', say: 'TEEK aa, meh BAA-raañ BUJ-ay aa JAA-vaañ-gay', en: 'Okay, we\'ll come at twelve.', k: 'bad', name: M_END, note: '-aañge is we. You are one man: aa jaauuñgaa.' }
        ]
      },
      {
        them: { pa: 'Late naa hoiiñ, ṭhiik aa?', say: 'late NAA ho-eeñ, TEEK aa?', en: 'Don\'t be late, okay?', gu: 'ਲੇਟ ਨਾ ਹੋਈਂ, ਠੀਕ ਆ?' },
        pre: { q: 'Tap the word that means "don\'t".', word: 'naa', yes: 'Naa. It is the "don\'t" you use when telling someone what not to do.' },
        type: 'build', ask: 'Tell him you are never late.', hint: 'I, late, not, am (as a habit).',
        answer: { pa: 'Nai yaar, maiñ late nai hundaa.', say: 'neh yaar, meh late neh HUN-daa', en: 'No mate, I\'m never late.', gu: 'ਨਹੀਂ ਯਾਰ, ਮੈਂ ਲੇਟ ਨਹੀਂ ਹੁੰਦਾ।' },
        tiles: ['Nai yaar,', 'maiñ', 'late', 'nai', 'hundaa.'], extra: [],
        trapSeq: { 'Nai yaar,|maiñ|nai|late|hundaa.': { name: M_NAI, note: 'Nai waits for the verb: late nai hundaa.' } },
        good: 'Hundaa: am, as a habit. Yaar: mate.',
        why: { q: 'He said "late naa hoiiñ". Why naa and not nai?', opts: [
          { t: 'Naa is for telling someone not to do something', right: true },
          { t: 'Naa is the polite form of nai', note: 'Politeness is not the difference. Naa goes with commands.' },
          { t: 'They are the same word', note: 'Close, but nai states a fact and naa gives an order.' }] }
      },
      {
        them: { pa: 'Chal fer, Saturday miliie.', say: 'chul FER, Saturday MIL-ee-ay', en: 'Right then, see you Saturday.', gu: 'ਚੱਲ ਫੇਰ, ਸੈਟਰਡੇ ਮਿਲੀਏ।' },
        type: 'say', prompt: 'For definite. See you Saturday.',
        answer: { pa: 'Pakkaa. Saturday milde aañ.', say: 'PUK-kaa. Saturday MIL-day aañ', en: 'For definite. See you Saturday.', gu: 'ਪੱਕਾ। ਸੈਟਰਡੇ ਮਿਲਦੇ ਆਂ।' },
        good: 'Milde aañ: we meet. Here -de is right, because it is the two of you.'
      }
    ],
    outro: 'Aapaañ for the two of you. -uuñgaa for I will. Naa for don\'t, nai for not.',
    mission: 'Make one plan with a cousin or a friend in Punjabi this week: the day, the time, who drives.'
  },
  {
    id: 'broadway', title: 'Southall Broadway', who: 'Uncle jii', rel: 'the man behind the counter', place: 'At the sweet shop',
    intro: 'Ordering, asking the price, and a bit of cheek.',
    steps: [
      {
        them: { pa: 'Haañ jii, daso. Kii chaahidaa?', say: 'haañ jee, DUS-o. kee CHAA-hee-daa?', en: 'Yes, tell me. What would you like?', gu: 'ਹਾਂ ਜੀ, ਦੱਸੋ। ਕੀ ਚਾਹੀਦਾ?' },
        pre: { q: 'Tap the word that means "tell me".', word: 'daso', yes: 'Daso: tell me. He is using the polite -o form with you, his customer.' },
        type: 'pick', ask: 'Ask for half a kilo of jalebi.', hint: 'Skip "I want". Just say: give me.',
        opts: [
          { pa: 'Uncle jii, addhaa kilo jalebiiaañ de deo.', say: 'uncle jee, UD-daa kilo juh-LAY-bee-aañ day DAY-o', en: 'Uncle, give me half a kilo of jalebi.', gu: 'ਅੰਕਲ ਜੀ, ਅੱਧਾ ਕਿੱਲੋ ਜਲੇਬੀਆਂ ਦੇ ਦਿਓ।', k: 'good', note: 'De deo: give, politely. The safest way to order anything.' },
          { pa: 'Uncle jii, maiñ addhaa kilo jalebiiaañ chaahidiiaañ.', say: 'uncle jee, MEH UD-daa kilo juh-LAY-bee-aañ CHAA-hee-dee-aañ', en: 'Broken: "Uncle, I half a kilo of jalebi are wanted."', k: 'bad', name: M_MAI, note: 'Wanting comes to you: mainuñ jalebiiaañ chaahidiiaañ.' },
          { pa: 'Jalebi, please.', say: 'jalebi, please', en: 'Jalebi, please.', k: 'ok', note: 'He will serve you. Now do it in Punjabi.' }
        ]
      },
      {
        them: { pa: 'Hor kujh?', say: 'HOR kooj?', en: 'Anything else?', gu: 'ਹੋਰ ਕੁਝ?' },
        type: 'say', prompt: 'And four samosas too.',
        answer: { pa: 'Te chaar samose bii.', say: 'tay CHAAR suh-MO-say bee', en: 'And four samosas too.', gu: 'ਤੇ ਚਾਰ ਸਮੋਸੇ ਬੀ।' },
        good: 'Te: and. Bii: too. One samosaa, four samose.'
      },
      {
        them: { pa: 'Aah lao jii.', say: 'AAH lo jee', en: 'Here you go.', gu: 'ਆਹ ਲਓ ਜੀ।' },
        type: 'pick', ask: 'Ask how much it comes to.', hint: 'Money is counted in many paise, so the question word ends in -e.',
        opts: [
          { pa: 'Kinne paise hoe, Uncle jii?', say: 'KIN-nay PEH-say HO-ay, uncle jee?', en: 'How much is that, Uncle?', gu: 'ਕਿੰਨੇ ਪੈਸੇ ਹੋਏ, ਅੰਕਲ ਜੀ?', k: 'good', note: 'Word for word: how many paise has it become?' },
          { pa: 'Kinnaa paise hoyaa, Uncle jii?', say: 'KIN-naa PEH-say HO-yaa, uncle jee?', en: 'Broken: "How much paise has it become?"', k: 'bad', name: M_NUM, note: 'Paise is plural, so everything around it is too: kinne paise hoe.' },
          { pa: 'How much, Uncle jii?', say: 'how much, uncle jee?', en: 'How much, Uncle?', k: 'ok', note: 'Very Southall, and fine. Try the Punjabi anyway.' }
        ]
      },
      {
        them: { pa: 'Baaraañ pound.', say: 'BAA-raañ pound', en: 'Twelve pounds.', gu: 'ਬਾਰਾਂ ਪੌਂਡ।' },
        pre: { q: 'Tap the number.', word: 'Baaraañ', yes: 'Baaraañ: twelve. Das is ten, giaaraañ eleven, baaraañ twelve.' },
        type: 'pick', ask: 'Tease him: that is expensive, knock a bit off.', hint: 'He is an elder, so the command ends in -o.',
        opts: [
          { pa: 'Baṛaa mehngaa aa, Uncle jii! Thoṛaa kàṭṭ karo.', say: 'BUH-raa MENG-aa aa, uncle jee! THO-raa KUT kuro', en: 'That\'s really expensive, Uncle! Knock a bit off.', gu: 'ਬੜਾ ਮਹਿੰਗਾ ਆ, ਅੰਕਲ ਜੀ! ਥੋੜ੍ਹਾ ਘੱਟ ਕਰੋ।', k: 'good', note: 'Kàṭṭ: less, with the voice starting low. Nobody expects it to work. It is how you make friends with the shopkeeper.' },
          { pa: 'Baṛaa mehngaa aa, Uncle jii! Thoṛaa kàṭṭ kar.', say: 'BUH-raa MENG-aa aa, uncle jee! THO-raa KUT kur', en: 'That\'s really expensive, Uncle! Knock a bit off. (order given to a child)', k: 'bad', name: M_HALF, note: 'Uncle jii and a bare kar do not go together. To an elder: karo.' },
          { pa: 'Ṭhiik aa.', say: 'TEEK aa', en: 'Okay.', k: 'ok', note: 'You pay full price. Have a go at the tease.' }
        ]
      },
      {
        them: { pa: 'Chalo, giaaraañ de deo. Tuaaḍe laii.', say: 'CHUL-o, gee-AA-raañ day DAY-o. TWAA-day lee', en: 'Go on, give me eleven. For you.', gu: 'ਚੱਲੋ, ਗਿਆਰਾਂ ਦੇ ਦਿਓ। ਤੁਹਾਡੇ ਲਈ।' },
        pre: { q: 'Tap either word of the phrase that means "for you".', word: 'Tuaaḍe laii', yes: 'Tuaaḍe laii: for you. Laii comes after the person.' },
        type: 'say', prompt: 'That is very kind of you, Uncle.',
        answer: { pa: 'Baṛii mehrbaanii, Uncle jii.', say: 'BUH-ree meh-her-BAA-nee, uncle jee', en: 'That\'s very kind of you, Uncle.', gu: 'ਬੜੀ ਮਿਹਰਬਾਨੀ, ਅੰਕਲ ਜੀ।' },
        good: 'Mehrbaanii: kindness. A plain "thank you jii" is just as common in Southall.'
      }
    ],
    outro: 'De deo to order. Kinne paise hoe to pay. Thoṛaa kàṭṭ karo for the cheek.',
    mission: 'Order one thing in Punjabi at a Southall shop or restaurant.'
  },
  {
    id: 'wedding', title: 'At a wedding', who: 'Aunty jii', rel: 'a family friend you half recognise', place: 'At a wedding',
    intro: 'She knows your whole family. You are not sure who she is.',
    steps: [
      {
        them: { pa: 'Puttar, tuuñ kihdaa munḍaa aiñ?', say: 'PUT-ter, TOOÑ KEH-daa MOON-daa eh?', en: 'Son, whose boy are you?', gu: 'ਪੁੱਤਰ, ਤੂੰ ਕਿਹਦਾ ਮੁੰਡਾ ਐਂ?' },
        pre: { q: 'Tap the word that means "whose".', word: 'kihdaa', yes: 'Kihdaa: whose. The most asked question at any Punjabi wedding.' },
        type: 'pick', ask: 'Tell her whose son you are. Surjit stands in for your dad\'s name.', hint: 'Munḍaa is a he, so the link word is daa.',
        opts: [
          { pa: 'Jii, maiñ Surjit daa munḍaa aañ.', say: 'jee, meh SUR-jeet daa MOON-daa aañ', en: 'I\'m Surjit\'s son.', gu: 'ਜੀ, ਮੈਂ ਸੁਰਜੀਤ ਦਾ ਮੁੰਡਾ ਆਂ।', k: 'good', note: 'Daa links the two: Surjit daa munḍaa. Swap in your dad\'s name.' },
          { pa: 'Jii, maiñ Surjit dii munḍaa aañ.', say: 'jee, meh SUR-jeet dee MOON-daa aañ', en: 'Broken: dii does not fit munḍaa.', k: 'bad', name: M_DAA, note: 'Daa or dii follows the thing owned. Munḍaa is a he, so daa. A daughter would be Surjit dii kuṛii.' },
          { pa: 'Surjit.', say: 'SUR-jeet', en: 'Surjit.', k: 'ok', note: 'She will work it out. Give her the whole sentence.' }
        ],
        why: { q: 'What decides between daa and dii?', opts: [
          { t: 'The thing owned: munḍaa is a he, so daa', right: true },
          { t: 'The owner: Surjit is a man, so daa', note: 'A coincidence here. Surjit dii gaḍḍii: his car is a she, so dii.' },
          { t: 'The speaker: a man says daa', note: 'Who is speaking does not matter for this word.' }] }
      },
      {
        them: { pa: 'Achchhaa! Baḍḍaa ho gayaa tuuñ! Biaah ho gayaa teraa?', say: 'UCH-aa! BUD-daa ho gyaa TOOÑ! bee-AAH ho gyaa TAY-raa?', en: 'Oh! You\'ve got so big! Are you married?', gu: 'ਅੱਛਾ! ਬੱਡਾ ਹੋ ਗਿਆ ਤੂੰ! ਬਿਆਹ ਹੋ ਗਿਆ ਤੇਰਾ?' },
        pre: { q: 'Tap the word for wedding, marriage.', word: 'Biaah', yes: 'Biaah. Textbooks write viaah, and vaḍḍaa for her baḍḍaa.' },
        type: 'build', ask: 'Tell her not yet.', hint: 'The same shape as "I haven\'t eaten yet".',
        answer: { pa: 'Nai jii, hale nai hoyaa.', say: 'neh jee, HUH-lay neh HO-yaa', en: 'No, not yet.', gu: 'ਨਹੀਂ ਜੀ, ਹਾਲੇ ਨਹੀਂ ਹੋਇਆ।' },
        tiles: ['Nai jii,', 'hale', 'nai', 'hoyaa.'], extra: [],
        trapSeq: { 'Nai jii,|nai|hale|hoyaa.': { name: M_NAI, note: 'Hale nai hoyaa. Nai sits right before the verb.' } },
        good: 'Hale nai hoyaa: it has not happened yet. She will have suggestions.'
      },
      {
        them: { pa: 'Kamm kii kardaa aiñ?', say: 'KUM kee KUR-daa eh?', en: 'What work do you do?', gu: 'ਕੰਮ ਕੀ ਕਰਦਾ ਐਂ?' },
        type: 'say', prompt: 'I work in London.',
        answer: { pa: 'Maiñ London bich kamm kardaa aañ.', say: 'meh London bich KUM KUR-daa aañ', en: 'I work in London.', gu: 'ਮੈਂ ਲੰਡਨ ਬਿੱਚ ਕੰਮ ਕਰਦਾ ਆਂ।' },
        good: 'Bich: in, and it comes after the place. Textbooks write vich.'
      },
      {
        them: { pa: 'Shaabaash! Mammii Daddy ṭhiik aa?', say: 'shaa-BAASH! MUM-mee DAD-dy TEEK aa?', en: 'Well done! Mum and Dad okay?', gu: 'ਸ਼ਾਬਾਸ਼! ਮੰਮੀ ਡੈਡੀ ਠੀਕ ਆ?' },
        type: 'pick', ask: 'Say yes, then ask after her family.', hint: 'Her "your" has to be the respectful one.',
        opts: [
          { pa: 'Haañ jii, ṭhiik aa. Tuaaḍe kàr sab ṭhiik aa?', say: 'haañ jee, TEEK aa. TWAA-day KUR sub TEEK aa?', en: 'Yes, they\'re fine. Is everyone at yours okay?', gu: 'ਹਾਂ ਜੀ, ਠੀਕ ਆ। ਤੁਹਾਡੇ ਘਰ ਸਭ ਠੀਕ ਆ?', k: 'good', note: 'Tuaaḍe: your, respectfully. Asking back is what makes it a conversation.' },
          { pa: 'Haañ jii, ṭhiik aa. Tere kàr sab ṭhiik aa?', say: 'haañ jee, TEEK aa. TAY-ray KUR sub TEEK aa?', en: 'Yes, they\'re fine. Is everyone at yours okay? (said to a friend)', k: 'bad', name: M_TUU, note: 'Tere belongs to tuuñ. For an elder, "your" is tuaaḍe.' },
          { pa: 'Haañ jii, ṭhiik aa.', say: 'haañ jee, TEEK aa', en: 'Yes, they\'re fine.', k: 'ok', note: 'Correct, and a dead end. Ask her something back.' }
        ]
      },
      {
        them: { pa: 'Chal, jaa, kujh khaa pii lai.', say: 'chul, JAA, kooj KHAA pee leh', en: 'Go on, get something to eat and drink.', gu: 'ਚੱਲ, ਜਾ, ਕੁਝ ਖਾ ਪੀ ਲੈ।' },
        pre: { q: 'Tap either word of the pair that means "eat and drink".', word: 'khaa pii', yes: 'Khaa pii: eat-drink. Punjabi loves these pairs.' },
        type: 'pick', ask: 'Say you will eat right now, and excuse yourself.', hint: 'One man again: -daa, or its short form -naa.',
        opts: [
          { pa: 'Jii, huṇe khaanaa aañ. Achchhaa jii, fer milde aañ.', say: 'jee, HOON-ay KHAA-naa aañ. UCH-aa jee, FER MIL-day aañ', en: 'Yes, I\'ll eat right now. Okay, see you later.', gu: 'ਜੀ, ਹੁਣੇ ਖਾਨਾ ਆਂ। ਅੱਛਾ ਜੀ, ਫੇਰ ਮਿਲਦੇ ਆਂ।', k: 'good', note: 'Huṇe: right now. Fer milde aañ: see you later, the polite exit.' },
          { pa: 'Jii, huṇe khaande aañ. Achchhaa jii, fer milde aañ.', say: 'jee, HOON-ay KHAAN-day aañ. UCH-aa jee, FER MIL-day aañ', en: 'Yes, we\'ll eat right now. Okay, see you later.', k: 'bad', name: M_END, note: 'Khaande is we. You alone: khaanaa or khaandaa. Milde stays, because meeting takes two.' },
          { pa: 'Okay jii, bye.', say: 'okay jee, bye', en: 'Okay, bye.', k: 'ok', note: 'You escaped. Next time, escape in Punjabi.' }
        ]
      }
    ],
    outro: 'Kihdaa munḍaa: whose boy. Daa follows the thing owned. Tuaaḍe, never tere, for an elder.',
    mission: 'At the next family event, answer one "whose boy are you?" in Punjabi.'
  },
  {
    id: 'banter', title: 'Cousin banter', who: 'Jassi', rel: 'your cousin, same age as you', place: 'On the sofa',
    intro: 'No jii, no tusiiñ. Being polite here is the mistake.',
    steps: [
      {
        them: { pa: 'Oye, kiddaañ? Baṛe dinaañ baad dikhiaa!', say: 'OY, kid-DAAÑ? BUH-ray DIN-aañ baad DIKH-yaa!', en: 'Oi, how\'s it going? Haven\'t seen you in ages!', gu: 'ਓਏ, ਕਿੱਦਾਂ? ਬੜੇ ਦਿਨਾਂ ਬਾਅਦ ਦਿਖਿਆ!' },
        pre: { q: 'Tap the word for days.', word: 'dinaañ', yes: 'Dinaañ: days. Baṛe dinaañ baad: after a lot of days.' },
        type: 'pick', ask: 'Answer the way cousins do.', hint: 'Yaar, and tuuñ with a bare verb.',
        opts: [
          { pa: 'Bas yaar, ṭhiik aañ. Tuuñ suṇaa.', say: 'bus yaar, TEEK aañ. TOOÑ soo-NAA', en: 'Yeah mate, fine. You tell me.', gu: 'ਬੱਸ ਯਾਰ, ਠੀਕ ਆਂ। ਤੂੰ ਸੁਣਾ।', k: 'good', note: 'Tuuñ suṇaa: the same hand-back as tusiiñ suṇaao, with the respect taken off.' },
          { pa: 'Maiñ ṭhiik aañ. Tusiiñ kiddaañ o?', say: 'meh TEEK aañ. too-SEEÑ kid-DAAÑ o?', en: 'I\'m fine. How are you? (said to an elder)', k: 'ok', note: 'Correct Punjabi, and far too polite for a cousin. He will laugh at you.' },
          { pa: 'Bas yaar, ṭhiik aañ. Tuuñ suṇaao.', say: 'bus yaar, TEEK aañ. TOOÑ soo-NAA-o', en: 'Yeah mate, fine. You tell me. (two levels mixed)', k: 'bad', name: M_HALF, note: 'Tuuñ and the -o ending clash. Pick one level: tuuñ suṇaa, or tusiiñ suṇaao.' }
        ]
      },
      {
        them: { pa: 'Tuuñ taañ moṭaa ho gayaa!', say: 'TOOÑ taañ MO-taa ho gyaa!', en: 'You\'ve got fat!', gu: 'ਤੂੰ ਤਾਂ ਮੋਟਾ ਹੋ ਗਿਆ!' },
        pre: { q: 'Tap the word he is insulting you with.', word: 'moṭaa', yes: 'Moṭaa: fat. Said with love, at every family gathering.' },
        type: 'pick', ask: 'Hit back: tell him to look at himself first.', hint: 'A comeback needs the bare command.',
        opts: [
          { pa: 'Pehlaañ apṇe aap nuuñ bekh!', say: 'PEH-laañ UP-nay aap NOOÑ BEKH!', en: 'Look at yourself first!', gu: 'ਪਹਿਲਾਂ ਆਪਣੇ ਆਪ ਨੂੰ ਬੇਖ!', k: 'good', note: 'Bekh: look. Apṇe aap nuuñ: at yourself.' },
          { pa: 'Pehlaañ apṇe aap nuuñ bekho!', say: 'PEH-laañ UP-nay aap NOOÑ BEKH-o!', en: 'Please look at yourself first!', k: 'ok', note: 'Bekho is the polite form. An insult with manners does not land.' },
          { pa: 'Nai yaar.', say: 'neh yaar', en: 'No mate.', k: 'ok', note: 'Weak. Give it back to him.' }
        ],
        why: { q: 'Which is the Doabi word for "look"?', opts: [
          { t: 'bekh', right: true },
          { t: 'vekh', note: 'That is the textbook. Doaba turns the v into a b.' },
          { t: 'dekh', note: 'That is Hindi. Everyone understands it, but it is not Punjabi.' }] }
      },
      {
        them: { pa: 'Gym jaanaa aañ maiñ, tere bargaa nai.', say: 'gym JAA-naa aañ meh, TAY-ray BUR-gaa neh', en: 'I go to the gym, unlike you.', gu: 'ਜਿੰਮ ਜਾਨਾ ਆਂ ਮੈਂ, ਤੇਰੇ ਬਰਗਾ ਨਹੀਂ।' },
        pre: { q: 'Tap the word that means "like" (like you).', word: 'bargaa', yes: 'Bargaa: like. Tere bargaa: like you. Textbooks write vargaa.' },
        type: 'say', prompt: 'I go too, every day!',
        answer: { pa: 'Maiñ bii jaanaa aañ, roz!', say: 'meh bee JAA-naa aañ, ROZ!', en: 'I go too, every day!', gu: 'ਮੈਂ ਬੀ ਜਾਨਾ ਆਂ, ਰੋਜ਼!' },
        good: 'Jaanaa aañ: the everyday short form of jaandaa aañ. Roz: every day.'
      },
      {
        them: { pa: 'Chùuṭh naa bol!', say: 'CHOOTH NAA bol!', en: 'Don\'t lie!', gu: 'ਝੂਠ ਨਾ ਬੋਲ!' },
        pre: { q: 'Tap the word for a lie.', word: 'Chùuṭh', yes: 'Chùuṭh, with the voice starting low. And naa again, because it is an order.' },
        type: 'build', ask: 'Tell him honestly, you do not lie.', hint: 'I, lie, not, speak.',
        answer: { pa: 'Sachchii yaar, maiñ chùuṭh nai boldaa.', say: 'SUCH-ee yaar, meh CHOOTH neh BOL-daa', en: 'Honestly mate, I don\'t lie.', gu: 'ਸੱਚੀ ਯਾਰ, ਮੈਂ ਝੂਠ ਨਹੀਂ ਬੋਲਦਾ।' },
        tiles: ['Sachchii yaar,', 'maiñ', 'chùuṭh', 'nai', 'boldaa.'], extra: ['bolde.'],
        trapTile: { 'bolde.': { name: M_END, note: 'Bolde is we or they. One man: boldaa.' } },
        trapSeq: { 'Sachchii yaar,|maiñ|nai|chùuṭh|boldaa.': { name: M_NAI, note: 'Nai waits for the verb: chùuṭh nai boldaa.' } },
        good: 'Sachchii: honestly, for real. Two traps dodged in one line.'
      },
      {
        them: { pa: 'Chal chhaḍḍ. Chaa piiṇii aa?', say: 'chul CHUD. CHAA PEE-nee aa?', en: 'Forget it. Want tea?', gu: 'ਚੱਲ ਛੱਡ। ਚਾਹ ਪੀਣੀ ਆ?' },
        pre: { q: 'Tap either word of the phrase that means "forget it".', word: 'Chal chhaḍḍ', yes: 'Chal chhaḍḍ: leave it, forget it. How every Punjabi argument ends.' },
        type: 'pick', ask: 'Say yes, and tell him to make it.', hint: 'To a cousin: tuuñ and a bare command.',
        opts: [
          { pa: 'Haañ yaar, tuuñ banaa.', say: 'haañ yaar, TOOÑ buh-NAA', en: 'Yeah mate, you make it.', gu: 'ਹਾਂ ਯਾਰ, ਤੂੰ ਬਣਾ।', k: 'good', note: 'Banaa: make. Bare, because he is your cousin.' },
          { pa: 'Haañ jii, thoṛii jii de deo.', say: 'haañ jee, THO-ree jee day DAY-o', en: 'Yes please, just a little. (said to an elder)', k: 'ok', note: 'That is how you answer Biibii. To Jassi: tuuñ banaa.' },
          { pa: 'Haañ yaar, maiñ chaa chaahidii aa.', say: 'haañ yaar, MEH CHAA CHAA-hee-dee aa', en: 'Broken: "Yeah mate, I tea is wanted."', k: 'bad', name: M_MAI, note: 'Still mainuñ, even with a cousin: mainuñ chaa chaahidii aa.' }
        ]
      }
    ],
    outro: 'With cousins: tuuñ, yaar and bare commands. Bekh, bargaa, bii: the Doabi b.',
    mission: 'Send one cousin a voice note in Punjabi. One line is enough.'
  },
  {
    id: 'story', title: 'Telling a story', who: 'Maasii', rel: 'your mum\'s sister', place: 'On her sofa, after dinner',
    intro: 'Yesterday. The past tense has two surprises, and both are in here.',
    steps: [
      {
        them: { pa: 'Kall kii kiitaa tuuñ?', say: 'KUL kee KEE-taa TOOÑ?', en: 'What did you do yesterday?', gu: 'ਕੱਲ੍ਹ ਕੀ ਕੀਤਾ ਤੂੰ?' },
        pre: { q: 'Tap the word for yesterday.', word: 'Kall', yes: 'Kall: yesterday. It also means tomorrow. Only the verb tells you which.' },
        type: 'pick', ask: 'Say you went to Southall with Jassi.', hint: 'Went: gayaa.',
        opts: [
          { pa: 'Kall maiñ Jassi naaḷ Southall gayaa sii.', say: 'KUL meh Jassi NAAL Southall gyaa see', en: 'Yesterday I went to Southall with Jassi.', gu: 'ਕੱਲ੍ਹ ਮੈਂ ਜੱਸੀ ਨਾਲ ਸਾਊਥਾਲ ਗਿਆ ਸੀ।', k: 'good', note: 'Gayaa sii: went. Naaḷ: with, and it comes after the person.' },
          { pa: 'Kall maiñ Jassi naaḷ Southall jaauuñgaa.', say: 'KUL meh Jassi NAAL Southall JAA-ooñ-gaa', en: 'Tomorrow I\'ll go to Southall with Jassi.', k: 'bad', name: M_TENSE, note: 'With jaauuñgaa, kall flips to tomorrow. Yesterday needs gayaa.' },
          { pa: 'Southall.', say: 'Southall', en: 'Southall.', k: 'ok', note: 'She wants the story. Give her a sentence.' }
        ]
      },
      {
        them: { pa: 'Achchhaa? Othe kii khaadhaa?', say: 'UCH-aa? OTH-ay kee KHAA-daa?', en: 'Oh yes? What did you eat there?', gu: 'ਅੱਛਾ? ਉੱਥੇ ਕੀ ਖਾਧਾ?' },
        pre: { q: 'Tap the word for "there".', word: 'Othe', yes: 'Othe: there. Aithe: here.' },
        type: 'build', ask: 'Tell her you ate jalebi.', hint: 'Jalebiiaañ are many and a she. The verb has to match them.',
        answer: { pa: 'Maiñ jalebiiaañ khaadhiiaañ.', say: 'meh juh-LAY-bee-aañ KHAA-dee-aañ', en: 'I ate jalebi.', gu: 'ਮੈਂ ਜਲੇਬੀਆਂ ਖਾਧੀਆਂ।' },
        tiles: ['Maiñ', 'jalebiiaañ', 'khaadhiiaañ.'], extra: ['khaadhaa.'],
        trapTile: { 'khaadhaa.': { name: M_OBJ, note: 'In the past, "ate" matches the food, not the eater. Jalebiiaañ: khaadhiiaañ.' } },
        good: 'First surprise: the verb follows the thing eaten.',
        why: { q: 'In the past tense, what does "ate" match?', opts: [
          { t: 'The thing that was eaten', right: true },
          { t: 'The person who ate', note: 'That is the present tense: maiñ khaandaa aañ. The past flips it.' },
          { t: 'Nothing. It is always khaadhaa', note: 'Khaadhaa is only for one he-thing: one samosaa.' }] }
      },
      {
        them: { pa: 'Te Jassi ne?', say: 'tay Jassi NAY?', en: 'And Jassi?', gu: 'ਤੇ ਜੱਸੀ ਨੇ?' },
        pre: { q: 'Tap the small word that marks who did it.', word: 'ne', yes: 'Ne. In the past it tags the doer: Jassi ne khaadhaa.' },
        type: 'say', prompt: 'Jassi ate four samosas.',
        answer: { pa: 'Jassi ne chaar samose khaadhe.', say: 'Jassi nay CHAAR suh-MO-say KHAA-day', en: 'Jassi ate four samosas.', gu: 'ਜੱਸੀ ਨੇ ਚਾਰ ਸਮੋਸੇ ਖਾਧੇ।' },
        good: 'Samose are many and a he, so khaadhe. Jassi gets ne. Maiñ never does.'
      },
      {
        them: { pa: 'Haa! Fer?', say: 'HAA! FER?', en: 'Ha! Then?', gu: 'ਹਾ! ਫੇਰ?' },
        type: 'pick', ask: 'Say that then the two of you came home.', hint: 'Coming and going never take ne.',
        opts: [
          { pa: 'Fer asiiñ kàr aa gaye.', say: 'FER uh-SEEÑ KUR aa GAY', en: 'Then we came home.', gu: 'ਫੇਰ ਅਸੀਂ ਘਰ ਆ ਗਏ।', k: 'good', note: 'Aa gaye: came, for more than one. Asiiñ, because Maasii was not with you.' },
          { pa: 'Fer asiiñ ne kàr aa gaye.', say: 'FER uh-SEEÑ nay KUR aa GAY', en: 'Broken: ne does not belong here.', k: 'bad', name: M_NE, note: 'Second surprise: ne only goes with doing something to something. Coming and going never take it.' },
          { pa: 'Fer asiiñ kàr aa gayaa.', say: 'FER uh-SEEÑ KUR aa gyaa', en: 'Broken: "Then we came home", with the ending for one man.', k: 'bad', name: M_END, note: 'Gayaa is one man. Two of you: gaye.' }
        ]
      },
      {
        them: { pa: 'Changaa kiitaa. Aglii baar mainuñ bii lai jaaiiñ.', say: 'CHUNG-aa KEE-taa. UG-lee baar MEH-nooñ bee leh JAA-eeñ', en: 'Good. Next time take me too.', gu: 'ਚੰਗਾ ਕੀਤਾ। ਅਗਲੀ ਬਾਰ ਮੈਨੂੰ ਬੀ ਲੈ ਜਾਈਂ।' },
        pre: { q: 'Tap either word of the phrase that means "next time".', word: 'Aglii baar', yes: 'Aglii baar: next time. Textbooks write vaar.' },
        type: 'pick', ask: 'Promise you will take her.', hint: 'She is an elder, so "you" is tuaanuuñ.',
        opts: [
          { pa: 'Pakkaa, tuaanuuñ lai ke jaauuñgaa.', say: 'PUK-kaa, twaa-NOOÑ leh kay JAA-ooñ-gaa', en: 'For definite, I\'ll take you.', gu: 'ਪੱਕਾ, ਤੁਹਾਨੂੰ ਲੈ ਕੇ ਜਾਊਂਗਾ।', k: 'good', note: 'Lai ke jaaṇaa: to take someone along. Tuaanuuñ, because she is an elder.' },
          { pa: 'Pakkaa, tainuuñ lai ke jaauuñgaa.', say: 'PUK-kaa, TEH-nooñ leh kay JAA-ooñ-gaa', en: 'For definite, I\'ll take you. (said to a friend)', k: 'bad', name: M_TUU, note: 'Tainuuñ belongs to tuuñ. For Maasii: tuaanuuñ.' },
          { pa: 'Pakkaa.', say: 'PUK-kaa', en: 'For definite.', k: 'ok', note: 'Good word. Now promise the whole thing.' }
        ]
      }
    ],
    outro: 'Went and came match the people. Ate matches the food. Ne tags the doer, but never with coming and going.',
    mission: 'Tell one relative what you did yesterday, in three Punjabi sentences.'
  }
  ,
  {
    id: 'late', title: 'Running late', who: 'Jassi', rel: 'your cousin, same age as you', place: 'On the phone, from the car',
    intro: 'Where you are and how long you will be. The little words go after the noun.',
    steps: [
      {
        them: { pa: 'Oye, kitthe aiñ tuuñ?', say: 'OY, KIT-thay eh TOOÑ?', en: 'Oi, where are you?', gu: 'ਓਏ, ਕਿੱਥੇ ਐਂ ਤੂੰ?' },
        pre: { q: 'Tap the word for "where".', word: 'kitthe', yes: 'Kitthe: where. Aithe: here. Othe: there.' },
        type: 'pick', ask: 'Tell him you are on the way.', hint: 'On the road: road first, then "in".',
        opts: [
          { pa: 'Raste bich aañ, yaar.', say: 'RUS-tay bich aañ, yaar', en: 'I\'m on the way, mate.', gu: 'ਰਸਤੇ ਬਿੱਚ ਆਂ, ਯਾਰ।', k: 'good', note: 'Raste bich: on the road. Bich comes after the place.' },
          { pa: 'Aa rihaa aañ, yaar.', say: 'aa REH-aa aañ, yaar', en: 'I\'m coming, mate.', gu: 'ਆ ਰਿਹਾ ਆਂ, ਯਾਰ।', k: 'good', note: 'Aa rihaa aañ: I\'m coming, right now.' },
          { pa: 'Bich raste aañ, yaar.', say: 'bich RUS-tay aañ, yaar', en: 'Broken: "In road I am."', k: 'bad', name: M_POST, note: 'English puts "in" first. Punjabi puts it after: raste bich, London bich.' }
        ]
      },
      {
        them: { pa: 'Kinnaa time lagguu?', say: 'KIN-naa time LUG-goo?', en: 'How long will it take?', gu: 'ਕਿੰਨਾ ਟਾਈਮ ਲੱਗੂ?' },
        pre: { q: 'Tap the word that means "will take".', word: 'lagguu', yes: 'Lagguu. The same lag as pùkkh lagii: time attaches too.' },
        type: 'say', prompt: 'Ten minutes. There is a lot of traffic.',
        answer: { pa: 'Das miṇṭ. Traffic baṛaa aa.', say: 'DUS mint. traffic BUH-raa aa', en: 'Ten minutes. There\'s a lot of traffic.', gu: 'ਦਸ ਮਿੰਟ। ਟ੍ਰੈਫ਼ਿਕ ਬੜਾ ਆ।' },
        good: 'Das: ten. Baṛaa: a lot of, as well as very.',
        tip: 'Textbooks write laggegaa. Doabi shortens "it will" to -uu: lagguu, houu, aauu.'
      },
      {
        them: { pa: 'Tuuñ hameshaa late hunaa aiñ!', say: 'TOOÑ huh-MAY-shaa late HUN-aa eh!', en: 'You\'re always late!', gu: 'ਤੂੰ ਹਮੇਸ਼ਾ ਲੇਟ ਹੁੰਨਾ ਐਂ!' },
        pre: { q: 'Tap the word for "always".', word: 'hameshaa', yes: 'Hameshaa: always. Kade nai: never.' },
        type: 'build', ask: 'Tell him it is not your fault.', hint: 'Galtii is a she.',
        answer: { pa: 'Merii galtii nai aa.', say: 'MAY-ree GUL-tee neh aa', en: 'It\'s not my fault.', gu: 'ਮੇਰੀ ਗਲਤੀ ਨਹੀਂ ਆ।' },
        tiles: ['Merii', 'galtii', 'nai', 'aa.'], extra: ['Meraa'],
        trapTile: { 'Meraa': { name: M_ADJ, note: 'Galtii is a she, so it is merii galtii.' } },
        trapSeq: { 'Merii|nai|galtii|aa.': { name: M_NAI, note: 'Nai waits for the verb: galtii nai aa.' } },
        good: 'Galtii: mistake, fault. Merii, because galtii is a she.'
      },
      {
        them: { pa: 'Chal, chhetii aa. Sab teraa wait karde aa.', say: 'chul, CHAY-tee aa. sub TAY-raa wait KUR-day aa', en: 'Come on, hurry up. Everyone\'s waiting for you.', gu: 'ਚੱਲ, ਛੇਤੀ ਆ। ਸਭ ਤੇਰਾ ਵੇਟ ਕਰਦੇ ਆ।' },
        pre: { q: 'Tap the word for "quickly".', word: 'chhetii', yes: 'Chhetii: quickly, early. Chhetii aa: come quickly.' },
        type: 'pick', ask: 'Say you will get there in five minutes.', hint: 'Minutes first, then "in". And it has not happened yet.',
        opts: [
          { pa: 'Panj miṇṭaañ bich pahuñch jaauuñgaa.', say: 'PUNJ MINT-aañ bich POHNCH JAA-ooñ-gaa', en: 'I\'ll get there in five minutes.', gu: 'ਪੰਜ ਮਿੰਟਾਂ ਬਿੱਚ ਪਹੁੰਚ ਜਾਊਂਗਾ।', k: 'good', note: 'Pahuñch jaaṇaa: to arrive. Panj: five.' },
          { pa: 'Bich panj miṇṭ pahuñch jaauuñgaa.', say: 'bich PUNJ mint POHNCH JAA-ooñ-gaa', en: 'Broken: "In five minutes", in English order.', k: 'bad', name: M_POST, note: 'Bich goes after: panj miṇṭaañ bich.' },
          { pa: 'Panj miṇṭaañ bich pahuñch gayaa.', say: 'PUNJ MINT-aañ bich POHNCH gyaa', en: 'I got there in five minutes.', k: 'bad', name: M_TENSE, note: 'Pahuñch gayaa has already happened, and he can see you are not there.' }
        ]
      },
      {
        them: { pa: 'Ṭhiik aa. Gaḍḍii tìaan naaḷ chalaaiiñ.', say: 'TEEK aa. GUD-dee tee-AAN naal chuh-LAA-eeñ', en: 'Okay. Drive carefully.', gu: 'ਠੀਕ ਆ। ਗੱਡੀ ਧਿਆਨ ਨਾਲ ਚਲਾਈਂ।' },
        pre: { q: 'Tap either word of the phrase that means "carefully".', word: 'tìaan naaḷ', yes: 'Tìaan naaḷ: with care. The same tìaan as apṇaa tìaan rakkheo.' },
        type: 'say', prompt: 'Okay. See you in a minute.',
        answer: { pa: 'Ṭhiik aa. Huṇe mildaa aañ.', say: 'TEEK aa. HOON-ay MIL-daa aañ', en: 'Okay. See you in a minute.', gu: 'ਠੀਕ ਆ। ਹੁਣੇ ਮਿਲਦਾ ਆਂ।' },
        good: 'Huṇe: right now, in a minute.'
      }
    ],
    outro: 'Raste bich, miṇṭaañ bich: the little word comes after. Lagguu: it will take.',
    mission: 'Next time you are running late for family, say where you are and how long, in Punjabi.'
  },
  {
    id: 'rough', title: 'Feeling rough', who: 'Biibii', rel: 'your grandmother', place: 'In her front room',
    intro: 'Aches, cold and having to go to work. Most of it lands on mainuñ.',
    steps: [
      {
        them: { pa: 'Kii hoyaa? Thakkiaa laggdaa aiñ.', say: 'kee HO-yaa? THUK-yaa LUG-daa eh', en: 'What\'s wrong? You look tired.', gu: 'ਕੀ ਹੋਇਆ? ਥੱਕਿਆ ਲੱਗਦਾ ਐਂ।' },
        pre: { q: 'Tap the word for "tired".', word: 'Thakkiaa', yes: 'Thakkiaa: tired. Kii hoyaa: what happened, what\'s wrong.' },
        type: 'build', ask: 'Tell her your head hurts.', hint: 'Sir is a he.',
        answer: { pa: 'Meraa sir dukhdaa aa.', say: 'MAY-raa SIR DUKH-daa aa', en: 'My head hurts.', gu: 'ਮੇਰਾ ਸਿਰ ਦੁਖਦਾ ਆ।' },
        tiles: ['Meraa', 'sir', 'dukhdaa', 'aa.'], extra: ['Merii'],
        trapTile: { 'Merii': { name: M_ADJ, note: 'Sir is a he: meraa sir.' } },
        good: 'Dukhdaa: hurts. Meraa sir, meraa peṭ, meraa galaa: head, stomach, throat.'
      },
      {
        them: { pa: 'Haae! Ṭhanḍ lag gaii houu.', say: 'HAA-ay! TUND lug GAY-ee HO-oo', en: 'Oh no! You must have caught a chill.', gu: 'ਹਾਏ! ਠੰਢ ਲੱਗ ਗਈ ਹੋਊ।' },
        pre: { q: 'Tap the word for "cold".', word: 'Ṭhanḍ', yes: 'Ṭhanḍ: cold. Like hunger, it attaches to you: ṭhanḍ lag gaii.' },
        type: 'pick', ask: 'Agree: yes, you are feeling cold.', hint: 'Cold comes to you.',
        opts: [
          { pa: 'Haañ jii, mainuñ ṭhanḍ laggdii aa.', say: 'haañ jee, MEH-nooñ TUND LUG-dee aa', en: 'Yes, I\'m feeling cold.', gu: 'ਹਾਂ ਜੀ, ਮੈਨੂੰ ਠੰਢ ਲੱਗਦੀ ਆ।', k: 'good', note: 'Mainuñ ṭhanḍ laggdii aa. The same shape as mainuñ pùkkh lagii aa.' },
          { pa: 'Haañ jii, maiñ ṭhanḍ laggdii aa.', say: 'haañ jee, MEH TUND LUG-dee aa', en: 'Broken: "Yes, I cold is attaching."', k: 'bad', name: M_MAI, note: 'Cold attaches to you, like hunger: mainuñ ṭhanḍ laggdii aa.' },
          { pa: 'Haañ jii.', say: 'haañ jee', en: 'Yes.', k: 'ok', note: 'True. Now give her the whole sentence.' }
        ]
      },
      {
        them: { pa: 'Davaaii lii?', say: 'duh-VAA-ee lee?', en: 'Have you taken any medicine?', gu: 'ਦਵਾਈ ਲਈ?' },
        type: 'build', ask: 'Tell her not yet.', hint: 'The same shape as "I haven\'t eaten yet".',
        answer: { pa: 'Nai jii, hale nai lii.', say: 'neh jee, HUH-lay neh lee', en: 'No, I haven\'t taken any yet.', gu: 'ਨਹੀਂ ਜੀ, ਹਾਲੇ ਨਹੀਂ ਲਈ।' },
        tiles: ['Nai jii,', 'hale', 'nai', 'lii.'], extra: [],
        trapSeq: { 'Nai jii,|nai|hale|lii.': { name: M_NAI, note: 'Hale nai lii. Nai sits right before the verb.' } },
        good: 'Lii: took. It ends in -ii because davaaii is a she.'
      },
      {
        them: { pa: 'Maiñ adrak aalii chaa banaa dinii aañ.', say: 'meh UD-ruk AA-lee CHAA buh-NAA DIN-ee aañ', en: 'I\'ll make you ginger tea.', gu: 'ਮੈਂ ਅਦਰਕ ਆਲੀ ਚਾਹ ਬਣਾ ਦਿੰਨੀ ਆਂ।' },
        pre: { q: 'Tap the word that means "with" (tea with ginger).', word: 'aalii', yes: 'Aalii: the one with. Adrak aalii chaa: tea with ginger. Textbooks write vaalii.' },
        type: 'say', prompt: 'Thank you, Biibii. I will be fine.',
        answer: { pa: 'Thank you, Biibii. Maiñ ṭhiik ho jaauuñgaa.', say: 'thank you, BEE-bee. meh TEEK ho JAA-ooñ-gaa', en: 'Thank you, Biibii. I\'ll be fine.', gu: 'ਥੈਂਕ ਯੂ, ਬੀਬੀ। ਮੈਂ ਠੀਕ ਹੋ ਜਾਊਂਗਾ।' },
        good: 'Ṭhiik ho jaaṇaa: to get better.'
      },
      {
        them: { pa: 'Aaraam kar. Kall kamm te naa jaaiiñ.', say: 'aa-RAAM kur. KUL KUM tay NAA JAA-eeñ', en: 'Rest. Don\'t go to work tomorrow.', gu: 'ਆਰਾਮ ਕਰ। ਕੱਲ੍ਹ ਕੰਮ ਤੇ ਨਾ ਜਾਈਂ।' },
        pre: { q: 'Tap the word for "rest".', word: 'Aaraam', yes: 'Aaraam: rest. Aaraam kar: take it easy.' },
        type: 'pick', ask: 'Tell her you have to go.', hint: 'Having to do something lands on you too.',
        opts: [
          { pa: 'Nai Biibii, mainuñ jaaṇaa paiṇaa.', say: 'neh BEE-bee, MEH-nooñ JAA-naa PEH-naa', en: 'No Biibii, I have to go.', gu: 'ਨਹੀਂ ਬੀਬੀ, ਮੈਨੂੰ ਜਾਣਾ ਪੈਣਾ।', k: 'good', note: 'Jaaṇaa paiṇaa: have to go. It takes mainuñ, like hunger and cold.' },
          { pa: 'Nai Biibii, maiñ jaaṇaa paiṇaa.', say: 'neh BEE-bee, MEH JAA-naa PEH-naa', en: 'Broken: "No Biibii, I going is falling."', k: 'bad', name: M_MAI, note: 'Having to do something lands on you: mainuñ jaaṇaa paiṇaa.' },
          { pa: 'Ṭhiik aa, Biibii.', say: 'TEEK aa, BEE-bee', en: 'Okay, Biibii.', k: 'ok', note: 'The easy answer. Try telling her you have to go.' }
        ]
      }
    ],
    outro: 'Meraa sir dukhdaa aa. Mainuñ ṭhanḍ laggdii aa. Mainuñ jaaṇaa paiṇaa.',
    mission: 'Next time someone at home asks how you are, give a real answer in Punjabi: tired, cold, hungry or fine.'
  },
  {
    id: 'help', title: 'Lending a hand', who: 'Maasii', rel: 'your mum\'s sister', place: 'At hers, before the guests arrive',
    intro: 'She gives the orders. You ask what, how many, and say what you can and cannot do.',
    steps: [
      {
        them: { pa: 'Puttar, merii help kar de.', say: 'PUT-ter, MAY-ree help kur day', en: 'Son, give me a hand.', gu: 'ਪੁੱਤਰ, ਮੇਰੀ ਹੈਲਪ ਕਰ ਦੇ।' },
        type: 'pick', ask: 'Say yes, and ask what needs doing.', hint: 'She is an elder, so "tell me" ends in -o.',
        opts: [
          { pa: 'Haañ jii, daso. Kii karnaa?', say: 'haañ jee, DUS-o. kee KUR-naa?', en: 'Yes, tell me. What needs doing?', gu: 'ਹਾਂ ਜੀ, ਦੱਸੋ। ਕੀ ਕਰਨਾ?', k: 'good', note: 'Kii karnaa: what is to be done. Two words that make you useful anywhere.' },
          { pa: 'Haañ jii, das. Kii karnaa?', say: 'haañ jee, DUS. kee KUR-naa?', en: 'Yes, tell me. What needs doing? (order given to a child)', k: 'bad', name: M_HALF, note: 'Das is the bare command. To Maasii: daso.' },
          { pa: 'Okay.', say: 'okay', en: 'Okay.', k: 'ok', note: 'She will find you a job anyway. Ask her: kii karnaa?' }
        ]
      },
      {
        them: { pa: 'Garage bichoñ kursiiaañ lai aa.', say: 'garage bich-OÑ KUR-see-aañ leh aa', en: 'Bring the chairs from the garage.', gu: 'ਗੈਰੇਜ ਬਿੱਚੋਂ ਕੁਰਸੀਆਂ ਲੈ ਆ।' },
        pre: { q: 'Tap the word for "chairs".', word: 'kursiiaañ', yes: 'Kursiiaañ: chairs. Bichoñ: from inside. Lai aa: bring.' },
        type: 'pick', ask: 'Ask how many chairs.', hint: 'Chairs are many and a she.',
        opts: [
          { pa: 'Kinniiaañ kursiiaañ?', say: 'KIN-nee-aañ KUR-see-aañ?', en: 'How many chairs?', gu: 'ਕਿੰਨੀਆਂ ਕੁਰਸੀਆਂ?', k: 'good', note: 'Kinniiaañ matches kursiiaañ: both end in -iiaañ.' },
          { pa: 'Kinnaa kursiiaañ?', say: 'KIN-naa KUR-see-aañ?', en: 'Broken: "How much chairs?"', k: 'bad', name: M_NUM, note: 'Chairs are many and a she: kinniiaañ kursiiaañ.' },
          { pa: 'How many?', say: 'how many?', en: 'How many?', k: 'ok', note: 'She will answer. Try it in Punjabi.' }
        ]
      },
      {
        them: { pa: 'Chhe. Te oh baḍḍaa ṭebal bii.', say: 'CHAY. tay o BUD-daa TAY-bul bee', en: 'Six. And that big table too.', gu: 'ਛੇ। ਤੇ ਉਹ ਬੱਡਾ ਟੇਬਲ ਬੀ।' },
        pre: { q: 'Tap the number.', word: 'Chhe', yes: 'Chhe: six. Panj is five, satt is seven.' },
        type: 'pick', ask: 'Tell her you cannot lift the table on your own.', hint: 'Sakdaa takes the short verb.',
        opts: [
          { pa: 'Ṭebal maiñ kallaa nai chakk sakdaa.', say: 'TAY-bul meh KUL-laa neh CHUK SUK-daa', en: 'I can\'t lift the table on my own.', gu: 'ਟੇਬਲ ਮੈਂ ਕੱਲਾ ਨਹੀਂ ਚੱਕ ਸਕਦਾ।', k: 'good', note: 'Chakk sakdaa: can lift. Kallaa: on my own.' },
          { pa: 'Ṭebal maiñ kallaa nai chakkṇaa sakdaa.', say: 'TAY-bul meh KUL-laa neh CHUK-naa SUK-daa', en: 'Broken: "I can\'t to-lift the table."', k: 'bad', name: M_SAK, note: 'Before sakdaa the verb is short: chakk sakdaa, kar sakdaa, aa sakdaa.' },
          { pa: 'Nai jii.', say: 'neh jee', en: 'No.', k: 'ok', note: 'A flat no to Maasii is risky. Tell her why.' }
        ],
        why: { q: 'Which is right for "I can do it"?', opts: [
          { t: 'Maiñ kar sakdaa aañ', right: true },
          { t: 'Maiñ karnaa sakdaa aañ', note: 'Karnaa is the long verb. Sakdaa wants the short one: kar.' },
          { t: 'Mainuñ kar sakdaa aañ', note: 'Being able is something you do, so maiñ.' }] }
      },
      {
        them: { pa: 'Jassi nuuñ bulaa lai.', say: 'Jassi NOOÑ boo-LAA leh', en: 'Call Jassi over.', gu: 'ਜੱਸੀ ਨੂੰ ਬੁਲਾ ਲੈ।' },
        pre: { q: 'Tap the word for "call".', word: 'bulaa', yes: 'Bulaa: call over. Jassi nuuñ: the nuuñ marks who gets called.' },
        type: 'say', prompt: 'Okay, I am calling him now.',
        answer: { pa: 'Ṭhiik aa, huṇe bulaunaa aañ.', say: 'TEEK aa, HOON-ay boo-LAU-naa aañ', en: 'Okay, I\'m calling him now.', gu: 'ਠੀਕ ਆ, ਹੁਣੇ ਬੁਲਾਉਨਾ ਆਂ।' },
        good: 'Bulaunaa aañ: the everyday short form again, like jaanaa aañ.'
      },
      {
        them: { pa: 'Shaabaash. Tuuñ baṛaa kamm aaunaa aiñ.', say: 'shaa-BAASH. TOOÑ BUH-raa KUM AU-naa eh', en: 'Good lad. You\'re very useful.', gu: 'ਸ਼ਾਬਾਸ਼। ਤੂੰ ਬੜਾ ਕੰਮ ਆਉਨਾ ਐਂ।' },
        type: 'pick', ask: 'Wave it away: it is nothing.', hint: 'Three words, and nai comes last.',
        opts: [
          { pa: 'Koi gall nai, Maasii jii.', say: 'KOY gul neh, MAA-see jee', en: 'It\'s nothing, Auntie.', gu: 'ਕੋਈ ਗੱਲ ਨਹੀਂ, ਮਾਸੀ ਜੀ।', k: 'good', note: 'Koi gall nai: no matter, it\'s nothing. Use it for thanks and for apologies.' },
          { pa: 'Nai koi gall, Maasii jii.', say: 'neh KOY gul, MAA-see jee', en: 'Broken: "No any matter, Auntie."', k: 'bad', name: M_NAI, note: 'Koi gall nai. Nai goes last, where the verb would be.' },
          { pa: 'Thank you, Maasii jii.', say: 'thank you, MAA-see jee', en: 'Thank you, Auntie.', k: 'ok', note: 'Fine. The Punjabi habit is to wave praise away: koi gall nai.' }
        ]
      }
    ],
    outro: 'Daso, kii karnaa? Chakk sakdaa: the short verb before sakdaa. Koi gall nai.',
    mission: 'Offer to help with one thing at a relative\'s house, in Punjabi: Kii karnaa?'
  },
  {
    id: 'who', title: 'Who is who', who: 'Jassi', rel: 'your cousin, same age as you', place: 'At a family party',
    intro: 'Explaining how people are related. Link words, ages, older and younger.',
    steps: [
      {
        them: { pa: 'Oh kauṇ aa, tere Daddy naaḷ?', say: 'O KOWN aa, TAY-ray DAD-dy naal?', en: 'Who\'s that, with your dad?', gu: 'ਉਹ ਕੌਣ ਆ, ਤੇਰੇ ਡੈਡੀ ਨਾਲ?' },
        pre: { q: 'Tap the word for "who".', word: 'kauṇ', yes: 'Kauṇ: who. Notice tere Daddy naaḷ: teraa has bent to tere.' },
        type: 'pick', ask: 'Say he is your dad\'s older brother.', hint: 'Before daa, meraa bends to mere.',
        opts: [
          { pa: 'Oh mere Daddy daa baḍḍaa pàraa aa.', say: 'O MAY-ray DAD-dy daa BUD-daa PRAA aa', en: 'He\'s my dad\'s older brother.', gu: 'ਉਹ ਮੇਰੇ ਡੈਡੀ ਦਾ ਬੱਡਾ ਭਰਾ ਆ।', k: 'good', note: 'Pàraa: brother, with the voice starting low. Baḍḍaa pàraa: older brother.' },
          { pa: 'Oh meraa Daddy daa baḍḍaa pàraa aa.', say: 'O MAY-raa DAD-dy daa BUD-daa PRAA aa', en: 'Broken: meraa has not bent.', k: 'bad', name: M_OBL, note: 'Before daa, dii or naaḷ, meraa bends to mere: mere Daddy daa.' },
          { pa: 'Oh mere Daddy dii baḍḍaa pàraa aa.', say: 'O MAY-ray DAD-dy dee BUD-daa PRAA aa', en: 'Broken: dii does not fit pàraa.', k: 'bad', name: M_DAA, note: 'Pàraa is a he, so the link is daa.' }
        ],
        tip: 'A dad\'s older brother has his own title: taayaa. A younger one is chaachaa.'
      },
      {
        them: { pa: 'Te oh kuṛii? Terii pàiṇ aa?', say: 'tay O KOO-ree? TAY-ree PEHN aa?', en: 'And that girl? Is she your sister?', gu: 'ਤੇ ਉਹ ਕੁੜੀ? ਤੇਰੀ ਭੈਣ ਆ?' },
        pre: { q: 'Tap the word for "sister".', word: 'pàiṇ', yes: 'Pàiṇ: sister, with the voice starting low. Kuṛii: girl.' },
        type: 'build', ask: 'Tell him no, she is your Mama\'s daughter.', hint: 'Kuṛii is a she, so the link word is too.',
        answer: { pa: 'Nai, oh mere Maame dii kuṛii aa.', say: 'neh, O MAY-ray MAA-may dee KOO-ree aa', en: 'No, she\'s my Mama\'s daughter.', gu: 'ਨਹੀਂ, ਉਹ ਮੇਰੇ ਮਾਮੇ ਦੀ ਕੁੜੀ ਆ।' },
        tiles: ['Nai, oh', 'mere Maame', 'dii', 'kuṛii aa.'], extra: ['daa'],
        trapTile: { 'daa': { name: M_DAA, note: 'Kuṛii is a she, so it is dii: Maame dii kuṛii.' } },
        good: 'Maamaa bends to Maame before dii, the same way meraa bends to mere.'
      },
      {
        them: { pa: 'Oh kinne saalaañ dii aa?', say: 'O KIN-nay SAAL-aañ dee aa?', en: 'How old is she?', gu: 'ਉਹ ਕਿੰਨੇ ਸਾਲਾਂ ਦੀ ਆ?' },
        pre: { q: 'Tap the word for "years".', word: 'saalaañ', yes: 'Saalaañ: years. Word for word: she is of how many years?' },
        type: 'say', prompt: 'She is twenty. She is younger than me.',
        answer: { pa: 'Biih saalaañ dii aa. Mere toñ chhoṭii aa.', say: 'BEE SAAL-aañ dee aa. MAY-ray toñ CHO-tee aa', en: 'She\'s twenty. She\'s younger than me.', gu: 'ਬੀਹ ਸਾਲਾਂ ਦੀ ਆ। ਮੇਰੇ ਤੋਂ ਛੋਟੀ ਆ।' },
        good: 'Mere toñ chhoṭii: smaller than me. Toñ does the job of "than". Biih is twenty, viih in a textbook.'
      },
      {
        them: { pa: 'Te tuuñ? Tuuñ kinne saalaañ daa aiñ?', say: 'tay TOOÑ? TOOÑ KIN-nay SAAL-aañ daa eh?', en: 'And you? How old are you?', gu: 'ਤੇ ਤੂੰ? ਤੂੰ ਕਿੰਨੇ ਸਾਲਾਂ ਦਾ ਐਂ?' },
        type: 'pick', ask: 'Tell him you are thirty. Swap in your own number in real life.', hint: 'You are a he, so: daa.',
        opts: [
          { pa: 'Maiñ tiih saalaañ daa aañ.', say: 'meh TEE SAAL-aañ daa aañ', en: 'I\'m thirty.', gu: 'ਮੈਂ ਤੀਹ ਸਾਲਾਂ ਦਾ ਆਂ।', k: 'good', note: 'Tiih: thirty. Word for word: I am of thirty years.' },
          { pa: 'Maiñ tiih saalaañ dii aañ.', say: 'meh TEE SAAL-aañ dee aañ', en: 'I\'m thirty. (said by a woman)', k: 'bad', name: M_DAA, note: 'Here daa follows you, and you are a he: saalaañ daa.' },
          { pa: 'Mainuñ tiih saal aa.', say: 'MEH-nooñ TEE saal aa', en: 'Broken: "To me is thirty years."', k: 'bad', name: M_OVER, note: 'Age does not come to you. Maiñ tiih saalaañ daa aañ.' }
        ]
      },
      {
        them: { pa: 'Buḍḍhaa ho gayaa tuuñ!', say: 'BOOD-daa ho gyaa TOOÑ!', en: 'You\'ve got old!', gu: 'ਬੁੱਢਾ ਹੋ ਗਿਆ ਤੂੰ!' },
        pre: { q: 'Tap the word for "old".', word: 'Buḍḍhaa', yes: 'Buḍḍhaa: old, for a man. The same joke as moṭaa ho gayaa.' },
        type: 'pick', ask: 'Hit back: he is older than you.', hint: 'Than me: me first, then toñ.',
        opts: [
          { pa: 'Tuuñ mere toñ baḍḍaa aiñ!', say: 'TOOÑ MAY-ray toñ BUD-daa eh!', en: 'You\'re older than me!', gu: 'ਤੂੰ ਮੇਰੇ ਤੋਂ ਬੱਡਾ ਐਂ!', k: 'good', note: 'Mere toñ baḍḍaa: bigger than me, so older than me.' },
          { pa: 'Tuuñ toñ mere baḍḍaa aiñ!', say: 'TOOÑ toñ MAY-ray BUD-daa eh!', en: 'Broken: "You than me older are", with toñ in the English place.', k: 'bad', name: M_POST, note: 'Toñ comes after the person: mere toñ.' },
          { pa: 'Chal chhaḍḍ.', say: 'chul CHUD', en: 'Forget it.', k: 'ok', note: 'A fair retreat. But you have a better line.' }
        ]
      }
    ],
    outro: 'Mere Daddy daa pàraa. Mere Maame dii kuṛii. Mere toñ baḍḍaa. Meraa bends to mere before a link word.',
    mission: 'At the next family do, explain how you are related to one person, in Punjabi.'
  },
  {
    id: 'eat', title: 'Eating out', who: 'Waiter', rel: 'at a Punjabi restaurant on the Broadway', place: 'At your table',
    intro: 'Table for four, the order, the chilli and the bill.',
    steps: [
      {
        them: { pa: 'Sat srii akaal jii. Kinne bande o?', say: 'sut SREE uh-KAAL jee. KIN-nay BUN-day o?', en: 'Hello. How many of you are there?', gu: 'ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ ਜੀ। ਕਿੰਨੇ ਬੰਦੇ ਓ?' },
        pre: { q: 'Tap the word for "people".', word: 'bande', yes: 'Bande: people. One bandaa, four bande.' },
        type: 'say', prompt: 'There are four of us.',
        answer: { pa: 'Asiiñ chaar bande aañ.', say: 'uh-SEEÑ CHAAR BUN-day aañ', en: 'There are four of us.', gu: 'ਅਸੀਂ ਚਾਰ ਬੰਦੇ ਆਂ।' },
        good: 'Asiiñ here, not aapaañ. Aapaañ would count the waiter as one of the four.'
      },
      {
        them: { pa: 'Kii laoge?', say: 'kee LO-gay?', en: 'What will you have?', gu: 'ਕੀ ਲਓਗੇ?' },
        type: 'pick', ask: 'Order two dal and six roti.', hint: 'Skip "I want". Give me, politely.',
        opts: [
          { pa: 'Do daal te chhe roṭiiaañ de deo.', say: 'DO daal tay CHAY RO-tee-aañ day DAY-o', en: 'Two dal and six roti, please.', gu: 'ਦੋ ਦਾਲ ਤੇ ਛੇ ਰੋਟੀਆਂ ਦੇ ਦਿਓ।', k: 'good', note: 'Do: two. Chhe: six. One roṭii, six roṭiiaañ.' },
          { pa: 'Do daal te chhe roṭiiaañ de.', say: 'DO daal tay CHAY RO-tee-aañ day', en: 'Two dal and six roti. (order given to a child)', k: 'bad', name: M_HALF, note: 'A bare de to a stranger is rude. De deo.' },
          { pa: 'Maiñ do daal te chhe roṭiiaañ chaahidiiaañ.', say: 'MEH DO daal tay CHAY RO-tee-aañ CHAA-hee-dee-aañ', en: 'Broken: "I two dal and six roti are wanted."', k: 'bad', name: M_MAI, note: 'Wanting comes to you: mainuñ chaahidiiaañ. Or skip it and say de deo.' }
        ]
      },
      {
        them: { pa: 'Mirch kinnii?', say: 'MIRCH KIN-nee?', en: 'How spicy?', gu: 'ਮਿਰਚ ਕਿੰਨੀ?' },
        pre: { q: 'Tap the word for "chilli".', word: 'Mirch', yes: 'Mirch: chilli. It is a she, so kinnii.' },
        type: 'build', ask: 'Ask him not to put too much chilli in.', hint: 'You are asking him not to do something.',
        answer: { pa: 'Mirch ziaadaa naa paaio.', say: 'MIRCH zyaa-DAA NAA PAA-yo', en: 'Don\'t put too much chilli in.', gu: 'ਮਿਰਚ ਜ਼ਿਆਦਾ ਨਾ ਪਾਇਓ।' },
        tiles: ['Mirch', 'ziaadaa', 'naa', 'paaio.'], extra: ['nai'],
        trapTile: { 'nai': { name: M_NAA, note: 'Nai states a fact. Asking someone not to do something takes naa: naa paaio.' } },
        good: 'Ziaadaa: too much. Paaio: put, politely. Naa, because it is a request.'
      },
      {
        them: { pa: 'Ṭhiik aa jii. Piiṇ nuuñ kii laoge?', say: 'TEEK aa jee. PEEN nooñ kee LO-gay?', en: 'Okay. What will you have to drink?', gu: 'ਠੀਕ ਆ ਜੀ। ਪੀਣ ਨੂੰ ਕੀ ਲਓਗੇ?' },
        pre: { q: 'Tap the word that means "to drink".', word: 'Piiṇ', yes: 'Piiṇ nuuñ: for drinking. Khaaṇ nuuñ: for eating.' },
        type: 'say', prompt: 'Two lassi and two waters.',
        answer: { pa: 'Do lassiiaañ te do paaṇii.', say: 'DO LUS-see-aañ tay DO PAA-nee', en: 'Two lassi and two waters.', gu: 'ਦੋ ਲੱਸੀਆਂ ਤੇ ਦੋ ਪਾਣੀ।' },
        good: 'Paaṇii: water. It stays the same for two.'
      },
      {
        them: { pa: 'Hor kujh chaahidaa?', say: 'HOR kooj CHAA-hee-daa?', en: 'Do you need anything else?', gu: 'ਹੋਰ ਕੁਝ ਚਾਹੀਦਾ?' },
        type: 'pick', ask: 'Say no, that is all, and ask for the bill.', hint: 'Bring, politely: the command ends in -o.',
        opts: [
          { pa: 'Nai jii, bas. Bill lai aao.', say: 'neh jee, BUS. bill leh AA-o', en: 'No thanks, that\'s all. Bring the bill.', gu: 'ਨਹੀਂ ਜੀ, ਬੱਸ। ਬਿੱਲ ਲੈ ਆਓ।', k: 'good', note: 'Bas: that\'s all, enough. Lai aao: bring, politely.' },
          { pa: 'Nai jii, bas. Bill lai aa.', say: 'neh jee, BUS. bill leh AA', en: 'No thanks, that\'s all. Bring the bill. (order given to a child)', k: 'bad', name: M_HALF, note: 'Lai aa is how Maasii sends you for chairs. To the waiter: lai aao.' },
          { pa: 'Bill, please.', say: 'bill, please', en: 'Bill, please.', k: 'ok', note: 'It works everywhere. Try the Punjabi.' }
        ]
      }
    ],
    outro: 'Asiiñ chaar bande aañ. De deo, lai aao. Ziaadaa naa paaio.',
    mission: 'At a Punjabi restaurant, order one dish and ask for the bill in Punjabi.'
  },
  {
    id: 'bye', title: 'The long goodbye', who: 'Biibii', rel: 'your grandmother', place: 'At her front door',
    intro: 'Leaving a Punjabi house takes several attempts. This is all of them.',
    steps: [
      {
        dir: 'It is getting late. Time to make a move.',
        type: 'pick', ask: 'Tell Biibii you are heading off now.', hint: 'One man: chaldaa.',
        opts: [
          { pa: 'Achchhaa Biibii, maiñ huṇ chaldaa aañ.', say: 'UCH-aa BEE-bee, meh HOON CHUL-daa aañ', en: 'Right Biibii, I\'m off now.', gu: 'ਅੱਛਾ ਬੀਬੀ, ਮੈਂ ਹੁਣ ਚੱਲਦਾ ਆਂ।', k: 'good', note: 'Maiñ chaldaa aañ: I\'m going, I\'m off. Huṇ: now.' },
          { pa: 'Achchhaa Biibii, maiñ huṇ chalde aañ.', say: 'UCH-aa BEE-bee, meh HOON CHUL-day aañ', en: 'Right Biibii, we\'re off now.', k: 'bad', name: M_END, note: 'Chalde is we. You alone: chaldaa.' },
          { pa: 'Okay Biibii, bye.', say: 'okay BEE-bee, bye', en: 'Okay Biibii, bye.', k: 'ok', note: 'She will not let you leave on that. Announce it properly.' }
        ]
      },
      {
        them: { pa: 'Aiḍii chhetii? Baiṭh jaa, hor chaa pii lai.', say: 'AY-dee CHAY-tee? BETH jaa, HOR CHAA pee leh', en: 'So soon? Sit down, have more tea.', gu: 'ਐਡੀ ਛੇਤੀ? ਬੈਠ ਜਾ, ਹੋਰ ਚਾਹ ਪੀ ਲੈ।' },
        pre: { q: 'Tap the word that means "this" or "so" (so soon).', word: 'Aiḍii', yes: 'Aiḍii: this, so. Aiḍii chhetii: this early. Aiḍaa baḍḍaa: this big.' },
        type: 'build', ask: 'Tell her no, you have to go to work tomorrow.', hint: 'Work first, then "to".',
        answer: { pa: 'Nai jii, kall kamm te jaaṇaa aa.', say: 'neh jee, KUL KUM tay JAA-naa aa', en: 'No, I\'ve got to go to work tomorrow.', gu: 'ਨਹੀਂ ਜੀ, ਕੱਲ੍ਹ ਕੰਮ ਤੇ ਜਾਣਾ ਆ।' },
        tiles: ['Nai jii,', 'kall', 'kamm', 'te', 'jaaṇaa aa.'], extra: [],
        trapSeq: { 'Nai jii,|kall|te|kamm|jaaṇaa aa.': { name: M_POST, note: 'Te goes after: kamm te, to work.' } },
        good: 'Kamm te: to work. Kall means tomorrow here, because jaaṇaa looks forward.'
      },
      {
        them: { pa: 'Ruk, roṭii pack kar dinii aañ.', say: 'ROOK, RO-tee pack kur DIN-ee aañ', en: 'Wait, I\'ll pack you some food.', gu: 'ਰੁਕ, ਰੋਟੀ ਪੈਕ ਕਰ ਦਿੰਨੀ ਆਂ।' },
        pre: { q: 'Tap the word for "wait".', word: 'Ruk', yes: 'Ruk: stop, wait. You are not leaving empty-handed.' },
        type: 'pick', ask: 'Say there is no need, then give in.', hint: 'No need: three words, nai last.',
        opts: [
          { pa: 'Koi loṛ nai, Biibii. Achchhaa, thoṛii jii.', say: 'KOY LOR neh, BEE-bee. UCH-aa, THO-ree jee', en: 'There\'s no need, Biibii. Okay, just a little.', gu: 'ਕੋਈ ਲੋੜ ਨਹੀਂ, ਬੀਬੀ। ਅੱਛਾ, ਥੋੜ੍ਹੀ ਜਿਹੀ।', k: 'good', note: 'Koi loṛ nai: no need. Then you lose, gracefully.' },
          { pa: 'Nai koi loṛ, Biibii. Achchhaa, thoṛii jii.', say: 'neh KOY LOR, BEE-bee. UCH-aa, THO-ree jee', en: 'Broken: "No any need, Biibii."', k: 'bad', name: M_NAI, note: 'Koi loṛ nai. Nai goes last, like koi gall nai.' },
          { pa: 'Nai jii, mainuñ nai chaahidii.', say: 'neh jee, MEH-nooñ neh CHAA-hee-dee', en: 'No, I don\'t want any.', k: 'ok', note: 'Correct, and brave. It will not work. Koi loṛ nai is softer.' }
        ]
      },
      {
        them: { pa: 'Pahuñch ke phone kariiñ.', say: 'POHNCH kay phone KUR-eeñ', en: 'Ring me when you get home.', gu: 'ਪਹੁੰਚ ਕੇ ਫ਼ੋਨ ਕਰੀਂ।' },
        pre: { q: 'Tap either word of the phrase that means "once you get there".', word: 'Pahuñch ke', yes: 'Pahuñch ke: having arrived. A verb plus ke means "after doing it".' },
        type: 'say', prompt: 'Yes, I will ring you.',
        answer: { pa: 'Haañ jii, phone kar duuñgaa.', say: 'haañ jee, phone kur DOOÑ-gaa', en: 'Yes, I\'ll ring you.', gu: 'ਹਾਂ ਜੀ, ਫ਼ੋਨ ਕਰ ਦੂੰਗਾ।' },
        good: 'Kar duuñgaa: I will do it for you. The duuñgaa turns it into a promise.'
      },
      {
        them: { pa: 'Jiundaa reh, puttar. Rabb raakhaa.', say: 'JEEN-daa reh, PUT-ter. rub RAA-khaa', en: 'Bless you, son. God keep you.', gu: 'ਜਿਉਂਦਾ ਰਹਿ, ਪੁੱਤਰ। ਰੱਬ ਰਾਖਾ।' },
        pre: { q: 'Tap either word of the blessing that means "God keep you".', word: 'Rabb raakhaa', yes: 'Rabb raakhaa: God keep you. The goodbye elders give.' },
        type: 'pick', ask: 'Say goodbye properly.', hint: 'She is an elder: the command ends in -o.',
        opts: [
          { pa: 'Sat srii akaal, Biibii. Apṇaa tìaan rakkheo.', say: 'sut SREE uh-KAAL, BEE-bee. UP-naa tee-AAN RUK-yo', en: 'Goodbye, Biibii. Look after yourself.', gu: 'ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ, ਬੀਬੀ। ਆਪਣਾ ਧਿਆਨ ਰੱਖਿਓ।', k: 'good', note: 'The same line you gave Maamaa on the phone. Now you are allowed to leave.' },
          { pa: 'Sat srii akaal, Biibii. Apṇaa tìaan rakkh.', say: 'sut SREE uh-KAAL, BEE-bee. UP-naa tee-AAN RUKH', en: 'Goodbye, Biibii. Look after yourself. (order given to a child)', k: 'bad', name: M_HALF, note: 'Rakkh is the bare command. To Biibii: rakkheo.' },
          { pa: 'Bye Biibii, love you.', say: 'bye BEE-bee, love you', en: 'Bye Biibii, love you.', k: 'ok', note: 'Lovely, and she will take it. Add the Punjabi one too.' }
        ]
      }
    ],
    outro: 'Maiñ huṇ chaldaa aañ. Koi loṛ nai. Pahuñch ke phone kar duuñgaa.',
    mission: 'Leave one relative\'s house this week with the full Punjabi goodbye.'
  }
  ,
  {
    id: 'langar', title: 'Langar at the gurdwara', who: 'Sevadaar', rel: 'a volunteer serving the food', place: 'In the langar hall',
    intro: 'You are sitting in the line while the food comes round. Short answers, said politely.',
    steps: [
      {
        them: { pa: 'Sat srii akaal jii. Baiṭho, baiṭho.', say: 'sut SREE uh-KAAL jee. BETH-o, BETH-o', en: 'Hello. Sit, sit.', gu: 'ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ ਜੀ। ਬੈਠੋ, ਬੈਠੋ।' },
        type: 'pick', ask: 'Greet him back.', hint: 'You do not know his title, so jii on its own.',
        opts: [
          { pa: 'Sat srii akaal jii.', say: 'sut SREE uh-KAAL jee', en: 'Hello.', gu: 'ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ ਜੀ।', k: 'good', note: 'Jii on its own works when you do not know someone\'s title.' },
          { pa: 'Kiddaañ aiñ tuuñ?', say: 'kid-DAAÑ eh TOOÑ?', en: 'How are you? (said to a friend)', k: 'bad', name: M_TUU, note: 'A stranger, and older than you: never tuuñ.' },
          { pa: 'Hello.', say: 'hello', en: 'Hello.', k: 'ok', note: 'Fine. Here the Punjabi greeting is the natural one.' }
        ]
      },
      {
        them: { pa: 'Daal jii?', say: 'DAAL jee?', en: 'Dal?', gu: 'ਦਾਲ ਜੀ?' },
        type: 'say', prompt: 'Yes please, a little.',
        answer: { pa: 'Haañ jii, thoṛii jii.', say: 'haañ jee, THO-ree jee', en: 'Yes please, a little.', gu: 'ਹਾਂ ਜੀ, ਥੋੜ੍ਹੀ ਜਿਹੀ।' },
        good: 'The same thoṛii jii you use with Biibii.'
      },
      {
        them: { pa: 'Prashaadaa kinne?', say: 'pur-SHAA-daa KIN-nay?', en: 'How many roti?', gu: 'ਪ੍ਰਸ਼ਾਦਾ ਕਿੰਨੇ?' },
        pre: { q: 'Tap the word used for roti here.', word: 'Prashaadaa', yes: 'Prashaadaa: what roti is called in the langar hall.' },
        type: 'pick', ask: 'Ask for two.', hint: 'Give, politely.',
        opts: [
          { pa: 'Do de deo jii.', say: 'DO day DAY-o jee', en: 'Two, please.', gu: 'ਦੋ ਦੇ ਦਿਓ ਜੀ।', k: 'good', note: 'Do: two. Hold out both hands to take them.' },
          { pa: 'Do de jii.', say: 'DO day jee', en: 'Two. (order given to a child)', k: 'bad', name: M_HALF, note: 'Jii with a bare de clashes. De deo.' },
          { pa: 'Two, please.', say: 'two, please', en: 'Two, please.', k: 'ok', note: 'He will understand. Try it in Punjabi.' }
        ]
      },
      {
        them: { pa: 'Hor sabzii?', say: 'HOR SUB-zee?', en: 'More sabzi?', gu: 'ਹੋਰ ਸਬਜ਼ੀ?' },
        type: 'pick', ask: 'Tell him that is enough, thank you.', hint: 'One short word, with jii.',
        opts: [
          { pa: 'Bas jii, bas.', say: 'BUS jee, BUS', en: 'That\'s enough, thank you.', gu: 'ਬੱਸ ਜੀ, ਬੱਸ।', k: 'good', note: 'Bas jii: enough, thank you. Hold a hand over your plate as you say it.' },
          { pa: 'Maiñ nai chaahidii.', say: 'MEH neh CHAA-hee-dee', en: 'Broken: "I is not wanted."', k: 'bad', name: M_MAI, note: 'Wanting comes to you: mainuñ nai chaahidii. Or just: bas jii.' },
          { pa: 'Nai jii.', say: 'neh jee', en: 'No thank you.', k: 'ok', note: 'Fine. Bas jii is what you will hear around you.' }
        ]
      },
      {
        them: { pa: 'Paaṇii?', say: 'PAA-nee?', en: 'Water?', gu: 'ਪਾਣੀ?' },
        type: 'build', ask: 'Say yes, a little water please.', hint: 'Paaṇii is a he.',
        answer: { pa: 'Haañ jii, thoṛaa jaa paaṇii de deo.', say: 'haañ jee, THO-raa jaa PAA-nee day DAY-o', en: 'Yes, a little water please.', gu: 'ਹਾਂ ਜੀ, ਥੋੜ੍ਹਾ ਜਿਹਾ ਪਾਣੀ ਦੇ ਦਿਓ।' },
        tiles: ['Haañ jii,', 'thoṛaa jaa', 'paaṇii', 'de deo.'], extra: ['thoṛii jii'],
        trapTile: { 'thoṛii jii': { name: M_ADJ, note: 'Paaṇii is a he, so thoṛaa jaa. Thoṛii jii is for she-things like chaa and daal.' } },
        good: 'Thoṛaa jaa for a he, thoṛii jii for a she.'
      },
      {
        them: { pa: 'Pehlii baar aaye o?', say: 'PEH-lee baar AA-ay o?', en: 'Is this your first time here?', gu: 'ਪਹਿਲੀ ਬਾਰ ਆਏ ਓ?' },
        pre: { q: 'Tap either word of the phrase that means "first time".', word: 'Pehlii baar', yes: 'Pehlii baar: the first time. Notice he uses the respectful aaye o with you.' },
        type: 'pick', ask: 'Tell him no, you come with your family.', hint: 'Family first, then "with". And it is just you speaking.',
        opts: [
          { pa: 'Nai jii, maiñ family naaḷ aaunaa aañ.', say: 'neh jee, meh family naal AU-naa aañ', en: 'No, I come with my family.', gu: 'ਨਹੀਂ ਜੀ, ਮੈਂ ਫ਼ੈਮਿਲੀ ਨਾਲ ਆਉਨਾ ਆਂ।', k: 'good', note: 'Aaunaa aañ: I come, as a habit.' },
          { pa: 'Nai jii, maiñ naaḷ family aaunaa aañ.', say: 'neh jee, meh naal family AU-naa aañ', en: 'Broken: "with" in the English place.', k: 'bad', name: M_POST, note: 'Naaḷ goes after: family naaḷ.' },
          { pa: 'Nai jii, maiñ family naaḷ aaunde aañ.', say: 'neh jee, meh family naal AUN-day aañ', en: 'Broken: "I" with the ending for "we".', k: 'bad', name: M_END, note: 'Aaunde is we. With maiñ: aaunaa or aaundaa.' }
        ]
      },
      {
        them: { pa: 'Achchhaa jii. Sevaa karnii aa?', say: 'UCH-aa jee. SAY-vaa KUR-nee aa?', en: 'Good. Do you want to help serve?', gu: 'ਅੱਛਾ ਜੀ। ਸੇਵਾ ਕਰਨੀ ਆ?' },
        pre: { q: 'Tap the word for voluntary service.', word: 'Sevaa', yes: 'Sevaa: voluntary service. Serving, washing up, sweeping.' },
        type: 'say', prompt: 'Yes. What shall I do?',
        answer: { pa: 'Haañ jii. Kii karaañ?', say: 'haañ jee. kee KUR-aañ?', en: 'Yes. What shall I do?', gu: 'ਹਾਂ ਜੀ। ਕੀ ਕਰਾਂ?' },
        good: 'Kii karaañ: what shall I do. Kii karnaa asks what needs doing.'
      },
      {
        them: { pa: 'Paaṇii vartaa deo.', say: 'PAA-nee vur-TAA DAY-o', en: 'Hand out the water.', gu: 'ਪਾਣੀ ਵਰਤਾ ਦਿਓ।' },
        type: 'pick', ask: 'Say okay, you are doing it now.', hint: 'One man: -daa.',
        opts: [
          { pa: 'Ṭhiik aa jii, huṇe kardaa aañ.', say: 'TEEK aa jee, HOON-ay KUR-daa aañ', en: 'Okay, I\'m doing it now.', gu: 'ਠੀਕ ਆ ਜੀ, ਹੁਣੇ ਕਰਦਾ ਆਂ।', k: 'good', note: 'Huṇe kardaa aañ: I am doing it right now.' },
          { pa: 'Ṭhiik aa jii, huṇe karde aañ.', say: 'TEEK aa jee, HOON-ay KUR-day aañ', en: 'Okay, we\'re doing it now.', k: 'bad', name: M_END, note: 'Karde is we. You alone: kardaa.' },
          { pa: 'Okay.', say: 'okay', en: 'Okay.', k: 'ok', note: 'Fine. Say it in Punjabi while you fetch the jug.' }
        ]
      }
    ],
    outro: 'Thoṛii jii, bas jii, de deo jii. Short answers with jii carry you through langar.',
    mission: 'Next time you eat langar, answer every offer in Punjabi.'
  },
  {
    id: 'news', title: 'Good news', who: 'Maamaa', rel: 'your mum\'s brother', place: 'On the phone',
    intro: 'Your cousin Preeti is engaged. Congratulations, questions and an invitation.',
    steps: [
      {
        them: { pa: 'Puttar, ikk khushkhabrii aa!', say: 'PUT-ter, ik khoosh-KHUB-ree aa!', en: 'Son, I\'ve got good news!', gu: 'ਪੁੱਤਰ, ਇੱਕ ਖ਼ੁਸ਼ਖ਼ਬਰੀ ਆ!' },
        pre: { q: 'Tap the word for "good news".', word: 'khushkhabrii', yes: 'Khushkhabrii: khush is happy, khabar is news.' },
        type: 'say', prompt: 'Oh yes? Tell me!',
        answer: { pa: 'Achchhaa? Daso!', say: 'UCH-aa? DUS-o!', en: 'Oh yes? Tell me!', gu: 'ਅੱਛਾ? ਦੱਸੋ!' },
        good: 'Daso: tell me, to an elder.'
      },
      {
        them: { pa: 'Preeti dii mangṇii ho gaii!', say: 'Preeti dee MUNG-nee ho GAY-ee!', en: 'Preeti has got engaged!', gu: 'ਪ੍ਰੀਤੀ ਦੀ ਮੰਗਣੀ ਹੋ ਗਈ!' },
        pre: { q: 'Tap the word for "engagement".', word: 'mangṇii', yes: 'Mangṇii: engagement. Biaah: the wedding itself.' },
        type: 'pick', ask: 'Congratulate him.', hint: 'The word starts with the Doabi b.',
        opts: [
          { pa: 'Badhaaiiaañ, Maamaa jii! Bauht badhaaiiaañ!', say: 'bud-AA-ee-aañ, MAA-maa jee! BOHT bud-AA-ee-aañ!', en: 'Congratulations, Mama! Many congratulations!', gu: 'ਬਧਾਈਆਂ, ਮਾਮਾ ਜੀ! ਬਹੁਤ ਬਧਾਈਆਂ!', k: 'good', note: 'Badhaaiiaañ, with the Doabi b. Textbooks write vadhaaiiaañ.' },
          { pa: 'Badhaaiiaañ! Tuuñ baṛaa khush houñgaa!', say: 'bud-AA-ee-aañ! TOOÑ BUH-raa KHOOSH HOÑ-gaa!', en: 'Congratulations! You must be very happy! (said to a friend)', k: 'bad', name: M_TUU, note: 'To Maamaa it is tusiiñ: tusiiñ baṛe khush hoñge.' },
          { pa: 'Congratulations, Maamaa jii!', say: 'congratulations, MAA-maa jee!', en: 'Congratulations, Mama!', k: 'ok', note: 'He will be pleased either way. The Punjabi lands better.' }
        ]
      },
      {
        them: { pa: 'Munḍaa Birmingham toñ aa.', say: 'MOON-daa Birmingham toñ aa', en: 'The boy is from Birmingham.', gu: 'ਮੁੰਡਾ ਬਰਮਿੰਘਮ ਤੋਂ ਆ।' },
        pre: { q: 'Tap the small word that means "from".', word: 'toñ', yes: 'Toñ: from. It also did the job of "than" in mere toñ baḍḍaa.' },
        type: 'say', prompt: 'What does he do?',
        answer: { pa: 'Oh kii kamm kardaa aa?', say: 'O kee KUM KUR-daa aa?', en: 'What does he do?', gu: 'ਉਹ ਕੀ ਕੰਮ ਕਰਦਾ ਆ?' },
        good: 'Oh is he, she and that. The verb tells you which: kardaa for him, kardii for her.'
      },
      {
        them: { pa: 'Doctor aa. Baṛaa changaa munḍaa aa.', say: 'doctor aa. BUH-raa CHUNG-aa MOON-daa aa', en: 'He\'s a doctor. A very good lad.', gu: 'ਡਾਕਟਰ ਆ। ਬੜਾ ਚੰਗਾ ਮੁੰਡਾ ਆ।' },
        type: 'pick', ask: 'Ask when the wedding is.', hint: 'It has not happened yet, so: aa.',
        opts: [
          { pa: 'Biaah kadoñ aa?', say: 'bee-AAH kuh-DOÑ aa?', en: 'When\'s the wedding?', gu: 'ਬਿਆਹ ਕਦੋਂ ਆ?', k: 'good', note: 'Biaah: wedding. Kadoñ: when.' },
          { pa: 'Biaah kadoñ sii?', say: 'bee-AAH kuh-DOÑ see?', en: 'When was the wedding?', k: 'bad', name: M_TENSE, note: 'Sii is "was". The wedding is still to come: aa.' },
          { pa: 'When\'s the wedding?', say: 'when\'s the wedding?', en: 'When\'s the wedding?', k: 'ok', note: 'Three words in Punjabi: biaah kadoñ aa?' }
        ]
      },
      {
        them: { pa: 'Agle saal, garmiiaañ bich.', say: 'UG-lay SAAL, GUR-mee-aañ bich', en: 'Next year, in the summer.', gu: 'ਅਗਲੇ ਸਾਲ, ਗਰਮੀਆਂ ਬਿੱਚ।' },
        pre: { q: 'Tap the word for "summer".', word: 'garmiiaañ', yes: 'Garmiiaañ: summer, the hot months. Garam was hot.' },
        type: 'say', prompt: 'Is Preeti happy?',
        answer: { pa: 'Preeti khush aa?', say: 'Preeti KHOOSH aa?', en: 'Is Preeti happy?', gu: 'ਪ੍ਰੀਤੀ ਖ਼ੁਸ਼ ਆ?' },
        good: 'Khush: happy. A statement becomes a question just by lifting your voice.'
      },
      {
        them: { pa: 'Baṛii khush aa. Tainuuñ aauṇaa paiṇaa, party te.', say: 'BUH-ree KHOOSH aa. TEH-nooñ AU-naa PEH-naa, party tay', en: 'Very happy. You have to come, to the party.', gu: 'ਬੜੀ ਖ਼ੁਸ਼ ਆ। ਤੈਨੂੰ ਆਉਣਾ ਪੈਣਾ, ਪਾਰਟੀ ਤੇ।' },
        pre: { q: 'Tap the word that means "to you".', word: 'Tainuuñ', yes: 'Tainuuñ: to you, from an elder. Having to come lands on you, like mainuñ jaaṇaa paiṇaa.' },
        type: 'build', ask: 'Say of course you will come, with Mum.', hint: 'Mum first, then "with".',
        answer: { pa: 'Zaruur aauuñgaa, Mammii naaḷ.', say: 'zuh-ROOR aa-OOÑ-gaa, MUM-mee naal', en: 'Of course I\'ll come, with Mum.', gu: 'ਜ਼ਰੂਰ ਆਊਂਗਾ, ਮੰਮੀ ਨਾਲ।' },
        tiles: ['Zaruur', 'aauuñgaa,', 'Mammii', 'naaḷ.'], extra: [],
        trapSeq: { 'Zaruur|aauuñgaa,|naaḷ.|Mammii': { name: M_POST, note: 'Naaḷ goes after the person: Mammii naaḷ.' } },
        good: 'Zaruur: definitely, of course.'
      },
      {
        them: { pa: 'Te nachchṇaa bii paiṇaa!', say: 'tay NUCH-naa bee PEH-naa!', en: 'And you\'ll have to dance too!', gu: 'ਤੇ ਨੱਚਣਾ ਬੀ ਪੈਣਾ!' },
        pre: { q: 'Tap the word for "to dance".', word: 'nachchṇaa', yes: 'Nachchṇaa: to dance. There is no escaping it.' },
        type: 'pick', ask: 'Admit that you do not know how to dance.', hint: 'Knowing how comes to you.',
        opts: [
          { pa: 'Mainuñ nachchṇaa nai aaundaa!', say: 'MEH-nooñ NUCH-naa neh AUN-daa!', en: 'I don\'t know how to dance!', gu: 'ਮੈਨੂੰ ਨੱਚਣਾ ਨਹੀਂ ਆਉਂਦਾ!', k: 'good', note: 'The same shape as mainuñ banaauṇaa nai aaundaa.' },
          { pa: 'Maiñ nachchṇaa nai aaundaa!', say: 'MEH NUCH-naa neh AUN-daa!', en: 'Broken: "I dancing does not come."', k: 'bad', name: M_MAI, note: 'Knowing how comes to you: mainuñ nachchṇaa aaundaa.' },
          { pa: 'Mainuñ nai nachchṇaa aaundaa!', say: 'MEH-nooñ neh NUCH-naa AUN-daa!', en: 'Broken: nai too early.', k: 'bad', name: M_NAI, note: 'Nachchṇaa nai aaundaa. Nai sits right before the verb.' }
        ]
      },
      {
        them: { pa: 'Koi nai, sikh laiiñ. Chal, Mammii nuuñ das deiiñ.', say: 'KOY neh, SIKH leh-eeñ. chul, MUM-mee nooñ DUS day-eeñ', en: 'Never mind, you\'ll learn. Right, tell your mum.', gu: 'ਕੋਈ ਨਹੀਂ, ਸਿੱਖ ਲਈਂ। ਚੱਲ, ਮੰਮੀ ਨੂੰ ਦੱਸ ਦੇਈਂ।' },
        type: 'pick', ask: 'Say you will tell her right now, and congratulate him again.', hint: 'You have not told her yet.',
        opts: [
          { pa: 'Huṇe das dinaa aañ. Fer badhaaiiaañ, Maamaa jii!', say: 'HOON-ay dus DIN-aa aañ. FER bud-AA-ee-aañ, MAA-maa jee!', en: 'I\'ll tell her right now. Congratulations again, Mama!', gu: 'ਹੁਣੇ ਦੱਸ ਦਿੰਨਾ ਆਂ। ਫੇਰ ਬਧਾਈਆਂ, ਮਾਮਾ ਜੀ!', k: 'good', note: 'Das dinaa aañ: I am telling her, right away.' },
          { pa: 'Huṇe das dittaa. Fer badhaaiiaañ, Maamaa jii!', say: 'HOON-ay dus DIT-taa. FER bud-AA-ee-aañ, MAA-maa jee!', en: 'I\'ve just told her. Congratulations again, Mama!', k: 'bad', name: M_TENSE, note: 'Das dittaa: already told. You have not yet: das dinaa aañ.' },
          { pa: 'Ṭhiik aa jii, bye.', say: 'TEEK aa jee, bye', en: 'Okay, bye.', k: 'ok', note: 'Fine. One more badhaaiiaañ costs nothing.' }
        ]
      }
    ],
    outro: 'Badhaaiiaañ. Biaah kadoñ aa? Zaruur aauuñgaa. Mainuñ nachchṇaa nai aaundaa.',
    mission: 'Next time there is family news, give your congratulations in Punjabi: Bauht badhaaiiaañ!'
  },
  {
    id: 'lift', title: 'Giving a lift', who: 'Biibii', rel: 'your grandmother', place: 'In your car',
    intro: 'You are driving. She is giving the directions.',
    steps: [
      {
        dir: 'Biibii needs to get to the shops.',
        type: 'pick', ask: 'Offer to drop her.', hint: 'She is an elder: "you" is tuaanuuñ.',
        opts: [
          { pa: 'Biibii, maiñ tuaanuuñ chhaḍḍ dinaa aañ.', say: 'BEE-bee, meh twaa-NOOÑ CHUD DIN-aa aañ', en: 'Biibii, I\'ll drop you.', gu: 'ਬੀਬੀ, ਮੈਂ ਤੁਹਾਨੂੰ ਛੱਡ ਦਿੰਨਾ ਆਂ।', k: 'good', note: 'Chhaḍḍ deṇaa: to drop someone off. The same chhaḍḍ as chal chhaḍḍ.' },
          { pa: 'Biibii, maiñ tainuuñ chhaḍḍ dinaa aañ.', say: 'BEE-bee, meh TEH-nooñ CHUD DIN-aa aañ', en: 'Biibii, I\'ll drop you. (said to a friend)', k: 'bad', name: M_TUU, note: 'Tainuuñ belongs to tuuñ. For Biibii: tuaanuuñ.' },
          { pa: 'Biibii, get in.', say: 'BEE-bee, get in', en: 'Biibii, get in.', k: 'ok', note: 'It works. Offer it properly in Punjabi.' }
        ]
      },
      {
        them: { pa: 'Shaabaash. Seat belt laa lai.', say: 'shaa-BAASH. seat belt LAA leh', en: 'Good lad. Put your seat belt on.', gu: 'ਸ਼ਾਬਾਸ਼। ਸੀਟ ਬੈਲਟ ਲਾ ਲੈ।' },
        type: 'say', prompt: 'You put yours on too, Biibii.',
        answer: { pa: 'Tusiiñ bii laa lao, Biibii.', say: 'too-SEEÑ bee LAA lo, BEE-bee', en: 'You put yours on too, Biibii.', gu: 'ਤੁਸੀਂ ਬੀ ਲਾ ਲਓ, ਬੀਬੀ।' },
        good: 'Laa lao: put it on, politely. She said laa lai to you.'
      },
      {
        them: { pa: 'Aithoñ sajje muṛ jaa.', say: 'ETH-oñ SUJ-jay MOOR jaa', en: 'Turn right from here.', gu: 'ਐਥੋਂ ਸੱਜੇ ਮੁੜ ਜਾ।' },
        pre: { q: 'Tap the word for "right".', word: 'sajje', yes: 'Sajje: right. Khabbe: left. Muṛ jaa: turn.' },
        type: 'pick', ask: 'Check with her: right or left?', hint: 'A choice between two takes ki.',
        opts: [
          { pa: 'Sajje ki khabbe?', say: 'SUJ-jay kay KHUB-bay?', en: 'Right or left?', gu: 'ਸੱਜੇ ਕਿ ਖੱਬੇ?', k: 'good', note: 'Ki: or, when you are asking someone to choose.' },
          { pa: 'Sajje te khabbe?', say: 'SUJ-jay tay KHUB-bay?', en: 'Right and left?', k: 'ok', note: 'Te is "and". For a choice it is ki.' },
          { pa: 'Right or left?', say: 'right or left?', en: 'Right or left?', k: 'ok', note: 'She will answer in Punjabi anyway. Ask in it too.' }
        ]
      },
      {
        them: { pa: 'Sajje, sajje! Fer siddhaa.', say: 'SUJ-jay, SUJ-jay! FER SID-daa', en: 'Right, right! Then straight on.', gu: 'ਸੱਜੇ, ਸੱਜੇ! ਫੇਰ ਸਿੱਧਾ।' },
        pre: { q: 'Tap the word for "straight on".', word: 'siddhaa', yes: 'Siddhaa: straight, straight on.' },
        type: 'say', prompt: 'How far is it?',
        answer: { pa: 'Kinnii duur aa?', say: 'KIN-nee DOOR aa?', en: 'How far is it?', gu: 'ਕਿੰਨੀ ਦੂਰ ਆ?' },
        good: 'Duur: far. Neṛe: near.'
      },
      {
        them: { pa: 'Neṛe ii aa. Haulii chalaa!', say: 'NAY-ray ee aa. HOW-lee chuh-LAA!', en: 'It\'s just nearby. Drive slowly!', gu: 'ਨੇੜੇ ਈ ਆ। ਹੌਲੀ ਚਲਾ!' },
        pre: { q: 'Tap the word for "slowly".', word: 'Haulii', yes: 'Haulii: slowly, gently. Chhetii was quickly.' },
        type: 'build', ask: 'Tell her you are driving slowly.', hint: 'One man: the ending is -aa.',
        answer: { pa: 'Maiñ haulii ii chalaunaa aañ.', say: 'meh HOW-lee ee chuh-LAU-naa aañ', en: 'I am driving slowly.', gu: 'ਮੈਂ ਹੌਲੀ ਈ ਚਲਾਉਨਾ ਆਂ।' },
        tiles: ['Maiñ', 'haulii ii', 'chalaunaa', 'aañ.'], extra: ['chalaunde'],
        trapTile: { 'chalaunde': { name: M_END, note: 'Chalaunde is we. You alone: chalaunaa or chalaundaa.' } },
        good: 'The little ii again: slowly is exactly what I am doing.'
      },
      {
        them: { pa: 'Oh dukaan de saamhṇe rok de.', say: 'O doo-KAAN day SAAM-nay ROK day', en: 'Stop in front of that shop.', gu: 'ਉਹ ਦੁਕਾਨ ਦੇ ਸਾਹਮਣੇ ਰੋਕ ਦੇ।' },
        pre: { q: 'Tap the word that means "in front".', word: 'saamhṇe', yes: 'Saamhṇe: in front. Dukaan de saamhṇe: in front of the shop.' },
        type: 'pick', ask: 'Tell her you cannot stop there.', hint: 'The short verb before sakdaa.',
        opts: [
          { pa: 'Othe nai rok sakdaa, Biibii.', say: 'OTH-ay neh ROK SUK-daa, BEE-bee', en: 'I can\'t stop there, Biibii.', gu: 'ਉੱਥੇ ਨਹੀਂ ਰੋਕ ਸਕਦਾ, ਬੀਬੀ।', k: 'good', note: 'Rok sakdaa: can stop. Othe: there.' },
          { pa: 'Othe nai rokṇaa sakdaa, Biibii.', say: 'OTH-ay neh ROK-naa SUK-daa, BEE-bee', en: 'Broken: the long verb before sakdaa.', k: 'bad', name: M_SAK, note: 'Before sakdaa the verb is short: rok sakdaa.' },
          { pa: 'Ṭhiik aa.', say: 'TEEK aa', en: 'Okay.', k: 'ok', note: 'Then the parking ticket is yours. Tell her you can\'t.' }
        ]
      },
      {
        them: { pa: 'Fer agge rok de.', say: 'FER UG-gay ROK day', en: 'Then stop further up.', gu: 'ਫੇਰ ਅੱਗੇ ਰੋਕ ਦੇ।' },
        pre: { q: 'Tap the word for "ahead".', word: 'agge', yes: 'Agge: ahead, further on. Pichchhe: behind.' },
        type: 'say', prompt: 'Okay. Shall I come with you?',
        answer: { pa: 'Ṭhiik aa. Maiñ naaḷ aavaañ?', say: 'TEEK aa. meh NAAL AA-vaañ?', en: 'Okay. Shall I come with you?', gu: 'ਠੀਕ ਆ। ਮੈਂ ਨਾਲ ਆਵਾਂ?' },
        good: 'Aavaañ: shall I come. The asking ending again, like karaañ and rakkhaañ.'
      },
      {
        them: { pa: 'Nai, tuuñ gaḍḍii bich baiṭh. Maiñ panj miṇṭaañ bich aaii.', say: 'neh, TOOÑ GUD-dee bich BETH. meh PUNJ MINT-aañ bich AA-ee', en: 'No, you sit in the car. I\'ll be five minutes.', gu: 'ਨਹੀਂ, ਤੂੰ ਗੱਡੀ ਬਿੱਚ ਬੈਠ। ਮੈਂ ਪੰਜ ਮਿੰਟਾਂ ਬਿੱਚ ਆਈ।' },
        type: 'pick', ask: 'Say okay, you will wait here.', hint: 'One man: kardaa.',
        opts: [
          { pa: 'Ṭhiik aa, maiñ aithe wait kardaa aañ.', say: 'TEEK aa, meh ETH-ay wait KUR-daa aañ', en: 'Okay, I\'ll wait here.', gu: 'ਠੀਕ ਆ, ਮੈਂ ਐਥੇ ਵੇਟ ਕਰਦਾ ਆਂ।', k: 'good', note: 'Aithe: here. Her five minutes will be twenty.' },
          { pa: 'Ṭhiik aa, maiñ aithe wait karde aañ.', say: 'TEEK aa, meh ETH-ay wait KUR-day aañ', en: 'Broken: "I" with the ending for "we".', k: 'bad', name: M_END, note: 'Karde is we. You alone: kardaa.' },
          { pa: 'Okay.', say: 'okay', en: 'Okay.', k: 'ok', note: 'Fine. Tell her where you will be: aithe.' }
        ]
      }
    ],
    outro: 'Sajje, khabbe, siddhaa, agge. Chhaḍḍ dinaa aañ. Rok sakdaa: the short verb before sakdaa.',
    mission: 'Next time you drive a relative, ask for the directions in Punjabi: Sajje ki khabbe?'
  },
  {
    id: 'weather', title: 'Weather and India', who: 'Chaachaa', rel: 'your dad\'s younger brother', place: 'In his back garden',
    intro: 'British small talk, in Punjabi: the cold, the rain, and the trip back home.',
    steps: [
      {
        them: { pa: 'Aa jaa puttar. Ajj ṭhanḍ baṛii aa.', say: 'AA jaa PUT-ter. UJ TUND BUH-ree aa', en: 'Come in, son. It\'s very cold today.', gu: 'ਆ ਜਾ ਪੁੱਤਰ। ਅੱਜ ਠੰਢ ਬੜੀ ਆ।' },
        type: 'pick', ask: 'Agree: yes, very cold.', hint: 'Ṭhanḍ is a she.',
        opts: [
          { pa: 'Haañ jii, baṛii ṭhanḍ aa.', say: 'haañ jee, BUH-ree TUND aa', en: 'Yes, it\'s very cold.', gu: 'ਹਾਂ ਜੀ, ਬੜੀ ਠੰਢ ਆ।', k: 'good', note: 'Baṛii ṭhanḍ: a lot of cold. Baṛii matches ṭhanḍ.' },
          { pa: 'Haañ jii, baṛaa ṭhanḍ aa.', say: 'haañ jee, BUH-raa TUND aa', en: 'Broken: baṛaa does not fit ṭhanḍ.', k: 'bad', name: M_ADJ, note: 'Ṭhanḍ is a she: baṛii ṭhanḍ.' },
          { pa: 'Haañ jii.', say: 'haañ jee', en: 'Yes.', k: 'ok', note: 'Agreeing about the weather deserves a full sentence.' }
        ]
      },
      {
        them: { pa: 'Kall miiñh bii paiṇaa.', say: 'KUL MEEÑ bee PEH-naa', en: 'It\'s going to rain tomorrow as well.', gu: 'ਕੱਲ੍ਹ ਮੀਂਹ ਬੀ ਪੈਣਾ।' },
        pre: { q: 'Tap the word for rain.', word: 'miiñh', yes: 'Miiñh: rain. In Punjabi rain falls: miiñh paindaa.' },
        type: 'say', prompt: 'It rains every day here.',
        answer: { pa: 'Aithe roz miiñh paindaa aa.', say: 'ETH-ay ROZ MEEÑ PEHN-daa aa', en: 'It rains every day here.', gu: 'ਐਥੇ ਰੋਜ਼ ਮੀਂਹ ਪੈਂਦਾ ਆ।' },
        good: 'Aithe: here. Roz: every day.'
      },
      {
        them: { pa: 'India bich taañ huṇ tùpp houu.', say: 'India bich taañ HOON TUP HO-oo', en: 'In India it\'ll be sunny now.', gu: 'ਇੰਡੀਆ ਬਿੱਚ ਤਾਂ ਹੁਣ ਧੁੱਪ ਹੋਊ।' },
        pre: { q: 'Tap the word for sunshine.', word: 'tùpp', yes: 'Tùpp: sunshine, with the voice starting low.' },
        type: 'pick', ask: 'Ask when he is going to India.', hint: 'He is an elder.',
        opts: [
          { pa: 'Tusiiñ India kadoñ jaaṇaa?', say: 'too-SEEÑ India kuh-DOÑ JAA-naa?', en: 'When are you going to India?', gu: 'ਤੁਸੀਂ ਇੰਡੀਆ ਕਦੋਂ ਜਾਣਾ?', k: 'good', note: 'Kadoñ jaaṇaa: when are you going. The same shape as kadoñ aauṇaa.' },
          { pa: 'Tuuñ India kadoñ jaaṇaa?', say: 'TOOÑ India kuh-DOÑ JAA-naa?', en: 'When are you going to India? (said to a friend)', k: 'bad', name: M_TUU, note: 'Chaachaa is an elder: tusiiñ.' },
          { pa: 'India kadoñ?', say: 'India kuh-DOÑ?', en: 'India when?', k: 'ok', note: 'He will understand. Make it a sentence.' }
        ]
      },
      {
        them: { pa: 'December bich. Tuuñ bii chal saaḍe naaḷ.', say: 'December bich. TOOÑ bee chul SAA-day naal', en: 'In December. You come with us too.', gu: 'ਦਸੰਬਰ ਬਿੱਚ। ਤੂੰ ਬੀ ਚੱਲ ਸਾਡੇ ਨਾਲ।' },
        pre: { q: 'Tap either word of the phrase that means "with us".', word: 'saaḍe naaḷ', yes: 'Saaḍe naaḷ: with us. Saaḍaa bends to saaḍe before naaḷ.' },
        type: 'build', ask: 'Tell him you will not get the time off.', hint: 'Getting something comes to you.',
        answer: { pa: 'Mainuñ chhuṭṭii nai milṇii.', say: 'MEH-nooñ CHOOT-tee neh MIL-nee', en: 'I won\'t get the time off.', gu: 'ਮੈਨੂੰ ਛੁੱਟੀ ਨਹੀਂ ਮਿਲਣੀ।' },
        tiles: ['Mainuñ', 'chhuṭṭii', 'nai', 'milṇii.'], extra: ['Maiñ'],
        trapTile: { 'Maiñ': { name: M_MAI, note: 'Getting something comes to you: mainuñ chhuṭṭii milṇii.' } },
        trapSeq: { 'Mainuñ|nai|chhuṭṭii|milṇii.': { name: M_NAI, note: 'Chhuṭṭii nai milṇii. Nai sits right before the verb.' } },
        good: 'Milṇii: will be got. The same mil as parking nai milṇii.'
      },
      {
        them: { pa: 'Tuuñ kadoñ gayaa sii India?', say: 'TOOÑ kuh-DOÑ gyaa see India?', en: 'When did you last go to India?', gu: 'ਤੂੰ ਕਦੋਂ ਗਿਆ ਸੀ ਇੰਡੀਆ?' },
        type: 'pick', ask: 'Say you went five years ago.', hint: '"Ago" comes after the time.',
        opts: [
          { pa: 'Panj saal pehlaañ gayaa sii.', say: 'PUNJ SAAL PEH-laañ gyaa see', en: 'I went five years ago.', gu: 'ਪੰਜ ਸਾਲ ਪਹਿਲਾਂ ਗਿਆ ਸੀ।', k: 'good', note: 'Pehlaañ: before, ago. It comes after the time.' },
          { pa: 'Pehlaañ panj saal gayaa sii.', say: 'PEH-laañ PUNJ SAAL gyaa see', en: 'Broken: "ago" in front of the time.', k: 'bad', name: M_POST, note: 'Pehlaañ goes after: panj saal pehlaañ.' },
          { pa: 'Panj saal pehlaañ jaauuñgaa.', say: 'PUNJ SAAL PEH-laañ JAA-ooñ-gaa', en: 'Broken: "five years ago I will go".', k: 'bad', name: M_TENSE, note: 'Jaauuñgaa is still to come. Five years ago: gayaa sii.' }
        ]
      },
      {
        them: { pa: 'Bauht der ho gaii! Piṇḍ yaad nai aaundaa?', say: 'BOHT DAYR ho GAY-ee! PIND yaad neh AUN-daa?', en: 'That\'s a long time! Don\'t you miss the village?', gu: 'ਬਹੁਤ ਦੇਰ ਹੋ ਗਈ! ਪਿੰਡ ਯਾਦ ਨਹੀਂ ਆਉਂਦਾ?' },
        pre: { q: 'Tap the word for "village".', word: 'Piṇḍ', yes: 'Piṇḍ: the village, the family\'s home place in Punjab.' },
        type: 'say', prompt: 'I do miss it.',
        answer: { pa: 'Mainuñ yaad aaundaa aa.', say: 'MEH-nooñ yaad AUN-daa aa', en: 'I do miss it.', gu: 'ਮੈਨੂੰ ਯਾਦ ਆਉਂਦਾ ਆ।' },
        good: 'Missing something: its memory comes to you. Mainuñ again.'
      },
      {
        them: { pa: 'Chal, andar chaliie. Chaa piine aañ.', say: 'chul, UN-dur CHUL-ee-ay. CHAA PEE-nay aañ', en: 'Come on, let\'s go in. We\'ll have tea.', gu: 'ਚੱਲ, ਅੰਦਰ ਚੱਲੀਏ। ਚਾਹ ਪੀਨੇ ਆਂ।' },
        pre: { q: 'Tap the word for "inside".', word: 'andar', yes: 'Andar: inside. Andar chaliie: let\'s go in.' },
        type: 'pick', ask: 'Agree, respectfully.', hint: 'What he says to you ends bare. Back to him it ends in -o.',
        opts: [
          { pa: 'Haañ jii, chalo.', say: 'haañ jee, CHUL-o', en: 'Yes, let\'s go.', gu: 'ਹਾਂ ਜੀ, ਚੱਲੋ।', k: 'good', note: 'Chalo: let\'s go, to an elder.' },
          { pa: 'Haañ jii, baahar baṛii ṭhanḍ aa.', say: 'haañ jee, BAA-hur BUH-ree TUND aa', en: 'Yes, it\'s very cold out here.', gu: 'ਹਾਂ ਜੀ, ਬਾਹਰ ਬੜੀ ਠੰਢ ਆ।', k: 'good', note: 'Baahar: outside. Your opening line, reused.' },
          { pa: 'Haañ, chal.', say: 'haañ, chul', en: 'Yeah, come on. (said to a friend)', k: 'bad', name: M_HALF, note: 'Chal is what he says to you. Back to him: chalo.' }
        ]
      },
      {
        them: { pa: 'Chaa naaḷ pakauṛe khaaṇe aa?', say: 'CHAA naal puh-KOW-ray KHAA-nay aa?', en: 'Do you want pakoras with your tea?', gu: 'ਚਾਹ ਨਾਲ ਪਕੌੜੇ ਖਾਣੇ ਆ?' },
        type: 'pick', ask: 'Say yes: pakoras are great in the cold.', hint: 'Cold first, then "in".',
        opts: [
          { pa: 'Haañ jii! Ṭhanḍ bich pakauṛe badhiiaa lagde aa.', say: 'haañ jee! TUND bich puh-KOW-ray BUD-ee-aa LUG-day aa', en: 'Yes! Pakoras are great in the cold.', gu: 'ਹਾਂ ਜੀ! ਠੰਢ ਬਿੱਚ ਪਕੌੜੇ ਬਧੀਆ ਲੱਗਦੇ ਆ।', k: 'good', note: 'Badhiiaa lagde aa: they go down well. Lag again.' },
          { pa: 'Haañ jii! Bich ṭhanḍ pakauṛe badhiiaa lagde aa.', say: 'haañ jee! bich TUND puh-KOW-ray BUD-ee-aa LUG-day aa', en: 'Broken: "in" in the English place.', k: 'bad', name: M_POST, note: 'Bich goes after: ṭhanḍ bich.' },
          { pa: 'Haañ jii, thoṛe je.', say: 'haañ jee, THO-ray jay', en: 'Yes, a few.', k: 'ok', note: 'A polite yes: the "many" form of thoṛii jii. Now say why.' }
        ]
      }
    ],
    outro: 'Baṛii ṭhanḍ aa. Miiñh paindaa aa. Mainuñ chhuṭṭii nai milṇii. Mainuñ yaad aaundaa aa.',
    mission: 'Open your next chat with an older relative with the weather: Ajj ṭhanḍ baṛii aa.'
  },
  {
    id: 'video', title: 'Video call to Punjab', who: 'Taaii', rel: 'your dad\'s older brother\'s wife, in Punjab', place: 'On a video call',
    intro: 'A bad line to the village, and no English to fall back on this time.',
    steps: [
      {
        them: { pa: 'Hello? Hello? Avaaz aaundii aa?', say: 'hello? hello? uh-VAAZ AUN-dee aa?', en: 'Hello? Hello? Can you hear me?', gu: 'ਹੈਲੋ? ਹੈਲੋ? ਅਵਾਜ਼ ਆਉਂਦੀ ਆ?' },
        pre: { q: 'Tap the word for "sound" or "voice".', word: 'Avaaz', yes: 'Avaaz: sound, voice. Avaaz aaundii aa: the sound is coming through.' },
        type: 'pick', ask: 'Say yes, you can hear her, and greet her.', hint: 'She is an elder.',
        opts: [
          { pa: 'Haañ jii, aaundii aa. Sat srii akaal, Taaii jii!', say: 'haañ jee, AUN-dee aa. sut SREE uh-KAAL, TAA-ee jee!', en: 'Yes, I can hear you. Hello, Tai!', gu: 'ਹਾਂ ਜੀ, ਆਉਂਦੀ ਆ। ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ, ਤਾਈ ਜੀ!', k: 'good', note: 'Aaundii aa answers her question with her own verb.' },
          { pa: 'Haañ, aaundii aa. Kiddaañ aiñ tuuñ?', say: 'haañ, AUN-dee aa. kid-DAAÑ eh TOOÑ?', en: 'Yeah, I can hear you. How are you? (said to a friend)', k: 'bad', name: M_TUU, note: 'Taaii is an elder: tusiiñ kiddaañ o?' },
          { pa: 'Hello Taaii jii!', say: 'hello TAA-ee jee!', en: 'Hello Tai!', k: 'ok', note: 'Friendly. First tell her the line is working.' }
        ]
      },
      {
        them: { pa: 'Tuuñ dikhdaa nai. Camera on kar.', say: 'TOOÑ DIKH-daa neh. camera on kur', en: 'I can\'t see you. Turn the camera on.', gu: 'ਤੂੰ ਦਿਖਦਾ ਨਹੀਂ। ਕੈਮਰਾ ਔਨ ਕਰ।' },
        pre: { q: 'Tap the word that means "visible".', word: 'dikhdaa', yes: 'Dikhdaa: visible, showing. Tuuñ dikhdaa nai: you are not showing.' },
        type: 'say', prompt: 'Can you see me now?',
        answer: { pa: 'Huṇ dikhdaa aañ?', say: 'HOON DIKH-daa aañ?', en: 'Can you see me now?', gu: 'ਹੁਣ ਦਿਖਦਾ ਆਂ?' },
        good: 'Word for word: now am I showing?'
      },
      {
        them: { pa: 'Haañ, huṇ dikhdaa aiñ. Kinnaa kamzor ho gayaa!', say: 'haañ, HOON DIKH-daa eh. KIN-naa kum-ZOR ho gyaa!', en: 'Yes, now I can. How thin you\'ve got!', gu: 'ਹਾਂ, ਹੁਣ ਦਿਖਦਾ ਐਂ। ਕਿੰਨਾ ਕਮਜ਼ੋਰ ਹੋ ਗਿਆ!' },
        pre: { q: 'Tap the word that means "weak" or "thin".', word: 'kamzor', yes: 'Kamzor: weak, thin. Jassi says moṭaa, Taaii says kamzor. You cannot win.' },
        type: 'pick', ask: 'Tell her no, you eat plenty.', hint: 'Eating is something you do.',
        opts: [
          { pa: 'Nai Taaii jii, maiñ bauht khaanaa aañ.', say: 'neh TAA-ee jee, meh BOHT KHAA-naa aañ', en: 'No Tai, I eat plenty.', gu: 'ਨਹੀਂ ਤਾਈ ਜੀ, ਮੈਂ ਬਹੁਤ ਖਾਨਾ ਆਂ।', k: 'good', note: 'Bauht: a lot. Khaanaa aañ: I eat.' },
          { pa: 'Nai Taaii jii, mainuñ bauht khaanaa aañ.', say: 'neh TAA-ee jee, MEH-nooñ BOHT KHAA-naa aañ', en: 'Broken: "to me eat a lot".', k: 'bad', name: M_OVER, note: 'Eating is something you do: maiñ.' },
          { pa: 'Nai Taaii jii, maiñ bauht khaande aañ.', say: 'neh TAA-ee jee, meh BOHT KHAAN-day aañ', en: 'Broken: "I" with the ending for "we".', k: 'bad', name: M_END, note: 'Khaande is we. You alone: khaanaa.' }
        ]
      },
      {
        them: { pa: 'Othe mausam kiddaañ aa?', say: 'OTH-ay MOW-sum kid-DAAÑ aa?', en: 'How\'s the weather there?', gu: 'ਉੱਥੇ ਮੌਸਮ ਕਿੱਦਾਂ ਆ?' },
        pre: { q: 'Tap the word for "weather".', word: 'mausam', yes: 'Mausam: weather, season.' },
        type: 'say', prompt: 'It is cold, and it rains every day.',
        answer: { pa: 'Ṭhanḍ aa, te roz miiñh paindaa aa.', say: 'TUND aa, tay ROZ MEEÑ PEHN-daa aa', en: 'It\'s cold, and it rains every day.', gu: 'ਠੰਢ ਆ, ਤੇ ਰੋਜ਼ ਮੀਂਹ ਪੈਂਦਾ ਆ।' },
        good: 'Two weather lines joined with te.'
      },
      {
        them: { pa: 'Aithe taañ garmii aa. India kadoñ aauṇaa?', say: 'ETH-ay taañ GUR-mee aa. India kuh-DOÑ AU-naa?', en: 'It\'s hot here. When are you coming to India?', gu: 'ਐਥੇ ਤਾਂ ਗਰਮੀ ਆ। ਇੰਡੀਆ ਕਦੋਂ ਆਉਣਾ?' },
        type: 'pick', ask: 'Say you will come next year, for definite.', hint: 'It has not happened yet.',
        opts: [
          { pa: 'Agle saal aauuñgaa, pakkaa.', say: 'UG-lay SAAL aa-OOÑ-gaa, PUK-kaa', en: 'I\'ll come next year, for definite.', gu: 'ਅਗਲੇ ਸਾਲ ਆਊਂਗਾ, ਪੱਕਾ।', k: 'good', note: 'Agle saal: next year. Agle hafte, agle mahiine, agle saal.' },
          { pa: 'Agle saal aayaa sii, pakkaa.', say: 'UG-lay SAAL AA-yaa see, PUK-kaa', en: 'Broken: "next year I came".', k: 'bad', name: M_TENSE, note: 'Aayaa sii is the past. Next year: aauuñgaa.' },
          { pa: 'Mainuñ nai pataa.', say: 'MEH-nooñ neh puh-TAA', en: 'I don\'t know.', k: 'ok', note: 'She has heard that one. Give her a year.' }
        ]
      },
      {
        them: { pa: 'Har baar aidaañ ii kehnaa aiñ!', say: 'HUR baar AY-daañ ee KEH-naa eh!', en: 'You say that every time!', gu: 'ਹਰ ਬਾਰ ਐਦਾਂ ਈ ਕਹਿੰਨਾ ਐਂ!' },
        pre: { q: 'Tap either word of the phrase that means "every time".', word: 'Har baar', yes: 'Har baar: every time. Aidaañ ii: exactly like this.' },
        type: 'build', ask: 'Tell her this time you really will come.', hint: 'You alone.',
        answer: { pa: 'Is baar sachchii aauuñgaa.', say: 'is baar SUCH-ee aa-OOÑ-gaa', en: 'This time I really will come.', gu: 'ਇਸ ਬਾਰ ਸੱਚੀ ਆਊਂਗਾ।' },
        tiles: ['Is baar', 'sachchii', 'aauuñgaa.'], extra: ['aavaañge.'],
        trapTile: { 'aavaañge.': { name: M_END, note: 'Aavaañge is we. You alone: aauuñgaa.' } },
        good: 'Is baar: this time. Sachchii: really, honestly.'
      },
      {
        them: { pa: 'Hello? Avaaz kaṭdii aa. Fer bol!', say: 'hello? uh-VAAZ KUT-dee aa. FER bol!', en: 'Hello? You\'re breaking up. Say it again!', gu: 'ਹੈਲੋ? ਅਵਾਜ਼ ਕੱਟਦੀ ਆ। ਫੇਰ ਬੋਲ!' },
        pre: { q: 'Tap either word of the phrase that means "say it again".', word: 'Fer bol', yes: 'Fer bol: say it again. Fer is again, bol is speak.' },
        type: 'say', prompt: 'I said: I will come next year!',
        answer: { pa: 'Maiñ keyaa: agle saal aauuñgaa!', say: 'meh KAY-aa: UG-lay SAAL aa-OOÑ-gaa!', en: 'I said: I\'ll come next year!', gu: 'ਮੈਂ ਕਿਹਾ: ਅਗਲੇ ਸਾਲ ਆਊਂਗਾ!' },
        good: 'Maiñ keyaa: I said. The same keyaa as "Kii keyaa?"'
      },
      {
        them: { pa: 'Achchhaa, achchhaa. Sab nuuñ meraa piaar deiiñ.', say: 'UCH-aa, UCH-aa. sub nooñ MAY-raa PYAAR day-eeñ', en: 'Okay, okay. Give everyone my love.', gu: 'ਅੱਛਾ, ਅੱਛਾ। ਸਭ ਨੂੰ ਮੇਰਾ ਪਿਆਰ ਦੇਈਂ।' },
        pre: { q: 'Tap the word for "love".', word: 'piaar', yes: 'Piaar: love. Sab nuuñ: to everyone.' },
        type: 'pick', ask: 'Say you will, and sign off.', hint: 'You have not passed it on yet.',
        opts: [
          { pa: 'Jii, de duuñgaa. Sat srii akaal, Taaii jii.', say: 'jee, day DOOÑ-gaa. sut SREE uh-KAAL, TAA-ee jee', en: 'Yes, I will. Goodbye, Tai.', gu: 'ਜੀ, ਦੇ ਦੂੰਗਾ। ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ, ਤਾਈ ਜੀ।', k: 'good', note: 'De duuñgaa: I will give it. The promise form again.' },
          { pa: 'Jii, de dittaa. Sat srii akaal, Taaii jii.', say: 'jee, day DIT-taa. sut SREE uh-KAAL, TAA-ee jee', en: 'Yes, I already gave it. Goodbye, Tai.', k: 'bad', name: M_TENSE, note: 'De dittaa: already given. You have not yet: de duuñgaa.' },
          { pa: 'Okay, bye Taaii jii.', say: 'okay, bye TAA-ee jee', en: 'Okay, bye Tai.', k: 'ok', note: 'She has no English. Close it in Punjabi.' }
        ]
      }
    ],
    outro: 'Avaaz aaundii aa? Huṇ dikhdaa aañ? Agle saal aauuñgaa. Sab nuuñ piaar.',
    mission: 'On the next call to family in India, do the first minute in Punjabi.'
  }
];

/* Extra exchanges added to the first fourteen conversations. Each entry is [key of the step it follows, step]. */
var EXTRA = {
  door: [
    [3, { key: 'x1',
      them: { pa: 'Te Daddy? Kamm te aa?', say: 'tay DAD-dy? KUM tay aa?', en: 'And Dad? Is he at work?', gu: 'ਤੇ ਡੈਡੀ? ਕੰਮ ਤੇ ਆ?' },
      type: 'pick', ask: 'Say yes, he is at work today.', hint: 'Work first, then "at".',
      opts: [
        { pa: 'Haañ jii, ajj kamm te aa.', say: 'haañ jee, UJ KUM tay aa', en: 'Yes, he\'s at work today.', gu: 'ਹਾਂ ਜੀ, ਅੱਜ ਕੰਮ ਤੇ ਆ।', k: 'good', note: 'Ajj: today. Kamm te: at work.' },
        { pa: 'Haañ jii, ajj te kamm aa.', say: 'haañ jee, UJ tay KUM aa', en: 'Broken: "at work" in English order.', k: 'bad', name: M_POST, note: 'Te goes after the noun: kamm te.' },
        { pa: 'Haañ jii.', say: 'haañ jee', en: 'Yes.', k: 'ok', note: 'True. Give her the whole sentence.' }
      ] }],
    [3, { key: 'x2',
      them: { pa: 'Tuuñ kallaa aayaa? Gaḍḍii te?', say: 'TOOÑ KUL-laa AA-yaa? GUD-dee tay?', en: 'Did you come on your own? By car?', gu: 'ਤੂੰ ਕੱਲਾ ਆਇਆ? ਗੱਡੀ ਤੇ?' },
      pre: { q: 'Tap the word for "on your own".', word: 'kallaa', yes: 'Kallaa: alone, on your own.' },
      type: 'say', prompt: 'Yes, I came by car.',
      answer: { pa: 'Haañ jii, gaḍḍii te aayaa.', say: 'haañ jee, GUD-dee tay AA-yaa', en: 'Yes, I came by car.', gu: 'ਹਾਂ ਜੀ, ਗੱਡੀ ਤੇ ਆਇਆ।' },
      good: 'Aayaa: came, for one man. Gaḍḍii te: by car.' }],
    [4, { key: 'x3',
      them: { pa: 'Ruk, maiñ chaa rakhdii aañ.', say: 'ROOK, meh CHAA RUKH-dee aañ', en: 'Wait, I\'ll put the tea on.', gu: 'ਰੁਕ, ਮੈਂ ਚਾਹ ਰੱਖਦੀ ਆਂ।' },
      type: 'pick', ask: 'Offer to help.', hint: 'Offering is something you do, so maiñ.',
      opts: [
        { pa: 'Maiñ help karaañ, Maasii jii?', say: 'meh help KUR-aañ, MAA-see jee?', en: 'Shall I help, Auntie?', gu: 'ਮੈਂ ਹੈਲਪ ਕਰਾਂ, ਮਾਸੀ ਜੀ?', k: 'good', note: 'Karaañ: shall I do. The ending that asks permission.' },
        { pa: 'Mainuñ help karaañ, Maasii jii?', say: 'MEH-nooñ help KUR-aañ, MAA-see jee?', en: 'Broken: "To me shall help?"', k: 'bad', name: M_OVER, note: 'Offering to do something is your action: maiñ.' },
        { pa: 'Ṭhiik aa jii.', say: 'TEEK aa jee', en: 'Okay.', k: 'ok', note: 'Fine. Offering to help earns you more: maiñ help karaañ?' }
      ] }]
  ],
  chaa: [
    [0, { key: 'x1',
      them: { pa: 'Chiinii kinnii paavaañ?', say: 'CHEE-nee KIN-nee PAA-vaañ?', en: 'How much sugar shall I put in?', gu: 'ਚੀਨੀ ਕਿੰਨੀ ਪਾਵਾਂ?' },
      pre: { q: 'Tap the word for sugar.', word: 'Chiinii', yes: 'Chiinii: sugar. Paavaañ: shall I put.' },
      type: 'pick', ask: 'Answer her: a little, or none.', hint: 'If you ask her not to, it is naa.',
      opts: [
        { pa: 'Thoṛii jii, Biibii. Ikk chamach.', say: 'THO-ree jee, BEE-bee. ik CHUM-uch', en: 'Just a little, Biibii. One spoon.', gu: 'ਥੋੜ੍ਹੀ ਜਿਹੀ, ਬੀਬੀ। ਇੱਕ ਚਮਚ।', k: 'good', note: 'Chamach: spoon. Ikk chamach, do chamach.' },
        { pa: 'Chiinii naa paaio, Biibii.', say: 'CHEE-nee NAA PAA-yo, BEE-bee', en: 'Don\'t put sugar in, Biibii.', gu: 'ਚੀਨੀ ਨਾ ਪਾਇਓ, ਬੀਬੀ।', k: 'good', note: 'Naa, because you are asking her not to do something.' },
        { pa: 'Chiinii nai paaio, Biibii.', say: 'CHEE-nee neh PAA-yo, BEE-bee', en: 'Broken: nai with a request.', k: 'bad', name: M_NAA, note: 'Nai states a fact. A request not to do something takes naa.' }
      ] }],
    [1, { key: 'x2',
      them: { pa: 'Daal naaḷ khaaṇii aa ki sabzii naaḷ?', say: 'DAAL naal KHAA-nee aa kay SUB-zee naal?', en: 'Will you have it with dal or with sabzi?', gu: 'ਦਾਲ ਨਾਲ ਖਾਣੀ ਆ ਕਿ ਸਬਜ਼ੀ ਨਾਲ?' },
      pre: { q: 'Tap the small word that means "or".', word: 'ki', yes: 'Ki: or, when you are offering a choice.' },
      type: 'say', prompt: 'Give me both.',
      answer: { pa: 'Dono de deo.', say: 'DO-no day DAY-o', en: 'Give me both.', gu: 'ਦੋਨੋ ਦੇ ਦਿਓ।' },
      good: 'Dono: both. The safe answer in any Punjabi kitchen.' }],
    [3, { key: 'x3',
      them: { pa: 'Sharmaa naa. Apṇaa ii kàr aa.', say: 'shur-MAA naa. UP-naa ee KUR aa', en: 'Don\'t be shy. It\'s your own home.', gu: 'ਸ਼ਰਮਾ ਨਾ। ਆਪਣਾ ਈ ਘਰ ਆ।' },
      pre: { q: 'Tap the word that means "be shy".', word: 'Sharmaa', yes: 'Sharmaa naa: don\'t be shy. Every guest hears it.' },
      type: 'pick', ask: 'Tell her you are not being shy, your stomach is full.', hint: 'One man: -daa.',
      opts: [
        { pa: 'Sharmaundaa nai, Biibii. Peṭ pàr gayaa.', say: 'shur-MOWN-daa neh, BEE-bee. PATE pur gyaa', en: 'I\'m not being shy, Biibii. My stomach is full.', gu: 'ਸ਼ਰਮਾਉਂਦਾ ਨਹੀਂ, ਬੀਬੀ। ਪੇਟ ਭਰ ਗਿਆ।', k: 'good', note: 'Peṭ pàr gayaa: the stomach has filled. Pàr starts low.' },
        { pa: 'Sharmaunde nai, Biibii. Peṭ pàr gayaa.', say: 'shur-MOWN-day neh, BEE-bee. PATE pur gyaa', en: 'We\'re not being shy, Biibii. My stomach is full.', k: 'bad', name: M_END, note: 'Sharmaunde is we. You alone: sharmaundaa.' },
        { pa: 'Nai nai, Biibii.', say: 'neh neh, BEE-bee', en: 'No no, Biibii.', k: 'ok', note: 'She will not accept that. Tell her your stomach is full.' }
      ] }]
  ],
  phone: [
    [2, { key: 'x1',
      them: { pa: 'Te chhuṭṭii kadoñ aa?', say: 'tay CHOOT-tee kuh-DOÑ aa?', en: 'And when\'s your time off?', gu: 'ਤੇ ਛੁੱਟੀ ਕਦੋਂ ਆ?' },
      pre: { q: 'Tap the word for time off.', word: 'chhuṭṭii', yes: 'Chhuṭṭii: a day off, a holiday.' },
      type: 'say', prompt: 'Next month.',
      answer: { pa: 'Agle mahiine.', say: 'UG-lay muh-HEE-nay', en: 'Next month.', gu: 'ਅਗਲੇ ਮਹੀਨੇ।' },
      good: 'Mahiinaa: month. After agle it bends to mahiine, like haftaa to hafte.' }],
    [3, { key: 'x2',
      them: { pa: 'Mammii nuuñ bii lai ke aaiiñ.', say: 'MUM-mee nooñ bee leh kay AA-eeñ', en: 'Bring your mum along too.', gu: 'ਮੰਮੀ ਨੂੰ ਬੀ ਲੈ ਕੇ ਆਈਂ।' },
      type: 'pick', ask: 'Say yes, you will bring her.', hint: 'It has not happened yet.',
      opts: [
        { pa: 'Haañ jii, lai ke aauuñgaa.', say: 'haañ jee, leh kay aa-OOÑ-gaa', en: 'Yes, I\'ll bring her.', gu: 'ਹਾਂ ਜੀ, ਲੈ ਕੇ ਆਊਂਗਾ।', k: 'good', note: 'Lai ke aauṇaa: to bring someone along.' },
        { pa: 'Haañ jii, lai ke aayaa.', say: 'haañ jee, leh kay AA-yaa', en: 'Yes, I brought her.', k: 'bad', name: M_TENSE, note: 'Aayaa is already done. Next week: aauuñgaa.' },
        { pa: 'Ṭhiik aa jii.', say: 'TEEK aa jee', en: 'Okay.', k: 'ok', note: 'Fine. Promise it properly: lai ke aauuñgaa.' }
      ] }],
    [4, { key: 'x3',
      them: { pa: 'Hale takk? Kii banaauṇaa ajj?', say: 'HUH-lay tuk? kee buh-NAU-naa UJ?', en: 'Still not? What are you making today?', gu: 'ਹਾਲੇ ਤੱਕ? ਕੀ ਬਣਾਉਣਾ ਅੱਜ?' },
      type: 'build', ask: 'Admit that you do not know how to cook.', hint: 'Knowing how to do something comes to you.',
      answer: { pa: 'Mainuñ banaauṇaa nai aaundaa.', say: 'MEH-nooñ buh-NAU-naa neh AUN-daa', en: 'I don\'t know how to cook.', gu: 'ਮੈਨੂੰ ਬਣਾਉਣਾ ਨਹੀਂ ਆਉਂਦਾ।' },
      tiles: ['Mainuñ', 'banaauṇaa', 'nai', 'aaundaa.'], extra: ['Maiñ'],
      trapTile: { 'Maiñ': { name: M_MAI, note: 'Knowing how comes to you: mainuñ banaauṇaa aaundaa.' } },
      trapSeq: { 'Mainuñ|nai|banaauṇaa|aaundaa.': { name: M_NAI, note: 'Nai waits for the verb: banaauṇaa nai aaundaa.' } },
      good: 'Mainuñ ... aaundaa: I know how to. Skills come to you, like hunger.' }]
  ],
  plans: [
    [2, { key: 'x1',
      them: { pa: 'Othe kujh khaavaañge.', say: 'OTH-ay kooj KHAA-vaañ-gay', en: 'We\'ll eat something there.', gu: 'ਉੱਥੇ ਕੁਝ ਖਾਵਾਂਗੇ।' },
      pre: { q: 'Tap the word that means "we will eat".', word: 'khaavaañge', yes: 'Khaavaañge. -aañge is the "we will" ending.' },
      type: 'pick', ask: 'Say yes, the two of you will have chole bhature.', hint: 'Two of you: the "we will" ending.',
      opts: [
        { pa: 'Haañ, aapaañ chole bhaṭuure khaavaañge.', say: 'haañ, AA-paañ CHO-lay buh-TOO-ray KHAA-vaañ-gay', en: 'Yeah, we\'ll have chole bhature.', gu: 'ਹਾਂ, ਆਪਾਂ ਛੋਲੇ ਭਟੂਰੇ ਖਾਵਾਂਗੇ।', k: 'good', note: 'Aapaañ ... khaavaañge: you and me, we will eat.' },
        { pa: 'Haañ, aapaañ chole bhaṭuure khaauuñgaa.', say: 'haañ, AA-paañ CHO-lay buh-TOO-ray khaa-OOÑ-gaa', en: 'Broken: "we" with the ending for "I".', k: 'bad', name: M_END, note: 'Khaauuñgaa is you alone. The two of you: khaavaañge.' },
        { pa: 'Haañ, ṭhiik aa.', say: 'haañ, TEEK aa', en: 'Yeah, okay.', k: 'ok', note: 'Fine. Say what you want to eat.' }
      ] }],
    [2, { key: 'x2',
      them: { pa: 'Petrol haigaa gaḍḍii bich?', say: 'petrol HEH-gaa GUD-dee bich?', en: 'Is there petrol in the car?', gu: 'ਪਟਰੋਲ ਹੈਗਾ ਗੱਡੀ ਬਿੱਚ?' },
      pre: { q: 'Tap the word that means "is there any".', word: 'haigaa', yes: 'Haigaa: there is, it\'s there. With a lift of the voice it asks.' },
      type: 'say', prompt: 'Yes, there is. The tank is full.',
      answer: { pa: 'Haañ, haigaa. Tank full aa.', say: 'haañ, HEH-gaa. tank full aa', en: 'Yes, there is. The tank\'s full.', gu: 'ਹਾਂ, ਹੈਗਾ। ਟੈਂਕ ਫੁੱਲ ਆ।' },
      good: 'Haigaa answers haigaa. Nai haigaa: there isn\'t any.' }],
    [3, { key: 'x3',
      them: { pa: 'Te paise lai ke aaiiñ, mere koḷ nai haige.', say: 'tay PEH-say leh kay AA-eeñ, MAY-ray kol neh HEH-gay', en: 'And bring money, I haven\'t got any.', gu: 'ਤੇ ਪੈਸੇ ਲੈ ਕੇ ਆਈਂ, ਮੇਰੇ ਕੋਲ ਨਹੀਂ ਹੈਗੇ।' },
      pre: { q: 'Tap either word of the phrase that means "with me".', word: 'mere koḷ', yes: 'Mere koḷ: with me, near me. This is how Punjabi says "I have".' },
      type: 'pick', ask: 'Complain that he never has any money.', hint: 'He "has" nothing: it is never with him.',
      opts: [
        { pa: 'Tere koḷ kade paise nai hunde!', say: 'TAY-ray kol kuh-DAY PEH-say neh HUN-day!', en: 'You never have any money!', gu: 'ਤੇਰੇ ਕੋਲ ਕਦੇ ਪੈਸੇ ਨਹੀਂ ਹੁੰਦੇ!', k: 'good', note: 'Tere koḷ: with you. Kade nai: never.' },
        { pa: 'Tuuñ kade paise nai hunde!', say: 'TOOÑ kuh-DAY PEH-say neh HUN-day!', en: 'Broken: "You never money are."', k: 'bad', name: M_KOL, note: 'Punjabi has no "to have". Things are with you: tere koḷ paise.' },
        { pa: 'Teraa koḷ kade paise nai hunde!', say: 'TAY-raa kol kuh-DAY PEH-say neh HUN-day!', en: 'Broken: teraa has not bent.', k: 'bad', name: M_OBL, note: 'Before koḷ, teraa bends to tere, and meraa to mere.' }
      ] }]
  ],
  broadway: [
    [0, { key: 'x1',
      them: { pa: 'Garam ki ṭhanḍiiaañ?', say: 'GUR-um kay TUN-dee-aañ?', en: 'Hot or cold ones?', gu: 'ਗਰਮ ਕਿ ਠੰਢੀਆਂ?' },
      pre: { q: 'Tap the word for "hot".', word: 'Garam', yes: 'Garam: hot. Ṭhanḍaa: cold.' },
      type: 'say', prompt: 'Hot ones, please.',
      answer: { pa: 'Garam de deo jii.', say: 'GUR-um day DAY-o jee', en: 'Hot ones, please.', gu: 'ਗਰਮ ਦੇ ਦਿਓ ਜੀ।' },
      good: 'De deo jii. The jii on the end does the job of "please".' }],
    [1, { key: 'x2',
      them: { pa: 'Samose miṭṭhii chaṭṇii naaḷ?', say: 'suh-MO-say MIT-thee CHUT-nee naal?', en: 'Samosas with sweet chutney?', gu: 'ਸਮੋਸੇ ਮਿੱਠੀ ਚਟਣੀ ਨਾਲ?' },
      pre: { q: 'Tap the word for "sweet".', word: 'miṭṭhii', yes: 'Miṭṭhii: sweet. It ends in -ii to match chaṭṇii.' },
      type: 'pick', ask: 'Say no, with the spicy chutney.', hint: 'Chaṭṇii is a she, and naaḷ comes last.',
      opts: [
        { pa: 'Nai jii, tikkhii chaṭṇii naaḷ.', say: 'neh jee, TIK-khee CHUT-nee naal', en: 'No thanks, with the spicy chutney.', gu: 'ਨਹੀਂ ਜੀ, ਤਿੱਖੀ ਚਟਣੀ ਨਾਲ।', k: 'good', note: 'Tikkhii: sharp, spicy.' },
        { pa: 'Nai jii, tikkhaa chaṭṇii naaḷ.', say: 'neh jee, TIK-khaa CHUT-nee naal', en: 'Broken: tikkhaa does not fit chaṭṇii.', k: 'bad', name: M_ADJ, note: 'Chaṭṇii is a she: tikkhii chaṭṇii.' },
        { pa: 'Nai jii, naaḷ tikkhii chaṭṇii.', say: 'neh jee, naal TIK-khee CHUT-nee', en: 'Broken: "with" in the English place.', k: 'bad', name: M_POST, note: 'Naaḷ goes after: chaṭṇii naaḷ.' }
      ] }],
    [1, { key: 'x3',
      them: { pa: 'Lifaafaa chaahidaa?', say: 'lif-AA-faa CHAA-hee-daa?', en: 'Do you need a bag?', gu: 'ਲਿਫ਼ਾਫ਼ਾ ਚਾਹੀਦਾ?' },
      pre: { q: 'Tap the word for a bag.', word: 'Lifaafaa', yes: 'Lifaafaa: a carrier bag. It is a he.' },
      type: 'build', ask: 'Tell him no thanks, you do not need one.', hint: 'Lifaafaa is a he, and wanting comes to you.',
      answer: { pa: 'Nai jii, mainuñ nai chaahidaa.', say: 'neh jee, MEH-nooñ neh CHAA-hee-daa', en: 'No thanks, I don\'t need one.', gu: 'ਨਹੀਂ ਜੀ, ਮੈਨੂੰ ਨਹੀਂ ਚਾਹੀਦਾ।' },
      tiles: ['Nai jii,', 'mainuñ', 'nai', 'chaahidaa.'], extra: ['maiñ', 'chaahidii.'],
      trapTile: { 'maiñ': { name: M_MAI, note: 'Needing comes to you: mainuñ nai chaahidaa.' }, 'chaahidii.': { name: M_ADJ, note: 'Lifaafaa is a he, so chaahidaa. Chaahidii was for chaa and roṭii.' } },
      good: 'Chaahidaa, because the bag is a he.' }]
  ],
  wedding: [
    [0, { key: 'x1',
      them: { pa: 'Achchhaa, Surjit daa! Rehnaa kitthe aiñ?', say: 'UCH-aa, SUR-jeet daa! REH-naa KIT-thay eh?', en: 'Oh, Surjit\'s! Where do you live?', gu: 'ਅੱਛਾ, ਸੁਰਜੀਤ ਦਾ! ਰਹਿੰਨਾ ਕਿੱਥੇ ਐਂ?' },
      pre: { q: 'Tap the word for "where".', word: 'kitthe', yes: 'Kitthe: where. Rehnaa: you live.' },
      type: 'say', prompt: 'I live in London.',
      answer: { pa: 'Maiñ London rehnaa aañ.', say: 'meh London REH-naa aañ', en: 'I live in London.', gu: 'ਮੈਂ ਲੰਡਨ ਰਹਿੰਨਾ ਆਂ।' },
      good: 'Rehnaa aañ: I live. The everyday short form of rehndaa aañ.' }],
    [1, { key: 'x2',
      them: { pa: 'Koi kuṛii pasand aa?', say: 'KOY KOO-ree puh-SUND aa?', en: 'Is there a girl you like?', gu: 'ਕੋਈ ਕੁੜੀ ਪਸੰਦ ਆ?' },
      pre: { q: 'Tap the word that means "liked".', word: 'pasand', yes: 'Pasand: liked. Mainuñ pasand aa: I like it.' },
      type: 'pick', ask: 'Dodge it: when there is, you will tell her.', hint: 'She is an elder: "to you" is tuaanuuñ.',
      opts: [
        { pa: 'Jadoñ houu, tuaanuuñ das duuñgaa, Aunty jii.', say: 'juh-DOÑ HO-oo, twaa-NOOÑ dus DOOÑ-gaa, aunty jee', en: 'When there is, I\'ll tell you, Aunty.', gu: 'ਜਦੋਂ ਹੋਊ, ਤੁਹਾਨੂੰ ਦੱਸ ਦੂੰਗਾ, ਆਂਟੀ ਜੀ।', k: 'good', note: 'Jadoñ: when. Das duuñgaa: I will tell you, as a promise.' },
        { pa: 'Jadoñ houu, tainuuñ das duuñgaa, Aunty jii.', say: 'juh-DOÑ HO-oo, TEH-nooñ dus DOOÑ-gaa, aunty jee', en: 'When there is, I\'ll tell you. (said to a friend)', k: 'bad', name: M_TUU, note: 'Tainuuñ belongs to tuuñ. For Aunty: tuaanuuñ.' },
        { pa: 'Mainuñ nai pataa.', say: 'MEH-nooñ neh puh-TAA', en: 'I don\'t know.', k: 'ok', note: 'A classic. She will not stop there.' }
      ] }],
    [3, { key: 'x3',
      them: { pa: 'Sab ṭhiik aa. Kade saaḍe kàr aaiiñ.', say: 'sub TEEK aa. kuh-DAY SAA-day KUR AA-eeñ', en: 'All fine. Come to ours sometime.', gu: 'ਸਭ ਠੀਕ ਆ। ਕਦੇ ਸਾਡੇ ਘਰ ਆਈਂ।' },
      type: 'pick', ask: 'Say you will definitely come.', hint: 'It has not happened yet.',
      opts: [
        { pa: 'Jii, zaruur aauuñgaa.', say: 'jee, zuh-ROOR aa-OOÑ-gaa', en: 'Yes, I\'ll definitely come.', gu: 'ਜੀ, ਜ਼ਰੂਰ ਆਊਂਗਾ।', k: 'good', note: 'Zaruur: definitely. Nobody checks.' },
        { pa: 'Jii, zaruur aayaa.', say: 'jee, zuh-ROOR AA-yaa', en: 'Yes, I definitely came.', k: 'bad', name: M_TENSE, note: 'Aayaa has already happened. A promise needs aauuñgaa.' },
        { pa: 'Ṭhiik aa jii.', say: 'TEEK aa jee', en: 'Okay.', k: 'ok', note: 'Polite. Zaruur aauuñgaa is warmer.' }
      ] }]
  ],
  banter: [
    [0, { key: 'x1',
      them: { pa: 'Kamm kiddaañ? Hale bii othe ii aiñ?', say: 'KUM kid-DAAÑ? HUH-lay bee OTH-ay ee eh?', en: 'How\'s work? Still at the same place?', gu: 'ਕੰਮ ਕਿੱਦਾਂ? ਹਾਲੇ ਬੀ ਉੱਥੇ ਈ ਐਂ?' },
      pre: { q: 'Tap either word of the phrase that means "still".', word: 'Hale bii', yes: 'Hale bii: still. Hale on its own was "yet".' },
      type: 'say', prompt: 'Yeah mate, still there.',
      answer: { pa: 'Haañ yaar, hale bii othe ii aañ.', say: 'haañ yaar, HUH-lay bee OTH-ay ee aañ', en: 'Yeah mate, still there.', gu: 'ਹਾਂ ਯਾਰ, ਹਾਲੇ ਬੀ ਉੱਥੇ ਈ ਆਂ।' },
      good: 'The little ii adds "the very same": othe ii, right there.' }],
    [2, { key: 'x2',
      them: { pa: 'Kinnaa chakkdaa aiñ?', say: 'KIN-naa CHUK-daa eh?', en: 'How much do you lift?', gu: 'ਕਿੰਨਾ ਚੱਕਦਾ ਐਂ?' },
      pre: { q: 'Tap the word for "lift".', word: 'chakkdaa', yes: 'Chakkdaa: you lift. The same chakk as lifting Maasii\'s table.' },
      type: 'pick', ask: 'Brag: more than him.', hint: 'Than you: you first, then toñ.',
      opts: [
        { pa: 'Tere toñ ziaadaa!', say: 'TAY-ray toñ zyaa-DAA!', en: 'More than you!', gu: 'ਤੇਰੇ ਤੋਂ ਜ਼ਿਆਦਾ!', k: 'good', note: 'Tere toñ ziaadaa: more than you. Toñ is "than".' },
        { pa: 'Toñ tere ziaadaa!', say: 'toñ TAY-ray zyaa-DAA!', en: 'Broken: "than you" in English order.', k: 'bad', name: M_POST, note: 'Toñ comes after the person: tere toñ.' },
        { pa: 'Teraa toñ ziaadaa!', say: 'TAY-raa toñ zyaa-DAA!', en: 'Broken: teraa has not bent.', k: 'bad', name: M_OBL, note: 'Before toñ, teraa bends to tere.' }
      ] }],
    [3, { key: 'x3',
      them: { pa: 'Achchhaa? Fer kall mere naaḷ chal.', say: 'UCH-aa? FER KUL MAY-ray naal chul', en: 'Oh yeah? Then come with me tomorrow.', gu: 'ਅੱਛਾ? ਫੇਰ ਕੱਲ੍ਹ ਮੇਰੇ ਨਾਲ ਚੱਲ।' },
      type: 'pick', ask: 'Back out: you cannot come tomorrow, you have work.', hint: 'The short verb before sakdaa.',
      opts: [
        { pa: 'Kall nai aa sakdaa, yaar. Kamm aa.', say: 'KUL neh aa SUK-daa, yaar. KUM aa', en: 'Can\'t come tomorrow, mate. I\'ve got work.', gu: 'ਕੱਲ੍ਹ ਨਹੀਂ ਆ ਸਕਦਾ, ਯਾਰ। ਕੰਮ ਆ।', k: 'good', note: 'Aa sakdaa: can come. Kamm aa: there is work.' },
        { pa: 'Kall nai aauṇaa sakdaa, yaar. Kamm aa.', say: 'KUL neh AU-naa SUK-daa, yaar. KUM aa', en: 'Broken: the long verb before sakdaa.', k: 'bad', name: M_SAK, note: 'Before sakdaa the verb is short: aa sakdaa.' },
        { pa: 'Ṭhiik aa, chalaañge.', say: 'TEEK aa, chul-AAÑ-gay', en: 'Okay, we\'ll go.', k: 'ok', note: 'Correct, and brave. Now you actually have to go.' }
      ] }]
  ],
  story: [
    [0, { key: 'x1',
      them: { pa: 'Kiddaañ gaye? Gaḍḍii te?', say: 'kid-DAAÑ GAY? GUD-dee tay?', en: 'How did you go? By car?', gu: 'ਕਿੱਦਾਂ ਗਏ? ਗੱਡੀ ਤੇ?' },
      type: 'pick', ask: 'Tell her no, the two of you went by train.', hint: 'Going never takes ne, and there were two of you.',
      opts: [
        { pa: 'Nai jii, asiiñ train te gaye sii.', say: 'neh jee, uh-SEEÑ train tay GAY see', en: 'No, we went by train.', gu: 'ਨਹੀਂ ਜੀ, ਅਸੀਂ ਟ੍ਰੇਨ ਤੇ ਗਏ ਸੀ।', k: 'good', note: 'Asiiñ, because Maasii was not with you. Gaye: went, for more than one.' },
        { pa: 'Nai jii, asiiñ ne train te gaye sii.', say: 'neh jee, uh-SEEÑ nay train tay GAY see', en: 'Broken: ne does not belong here.', k: 'bad', name: M_NE, note: 'Going never takes ne.' },
        { pa: 'Nai jii, asiiñ train te gayaa sii.', say: 'neh jee, uh-SEEÑ train tay gyaa see', en: 'Broken: "we" with the ending for one man.', k: 'bad', name: M_END, note: 'Gayaa is one man. Two of you: gaye.' }
      ] }],
    [1, { key: 'x2',
      them: { pa: 'Miṭṭhaa bauht khaanaa aiñ tuuñ!', say: 'MIT-thaa BOHT KHAA-naa eh TOOÑ!', en: 'You eat too much sweet stuff!', gu: 'ਮਿੱਠਾ ਬਹੁਤ ਖਾਨਾ ਐਂ ਤੂੰ!' },
      pre: { q: 'Tap the word for "sweet things".', word: 'Miṭṭhaa', yes: 'Miṭṭhaa: sweet, and sweet things in general.' },
      type: 'say', prompt: 'I like sweet things.',
      answer: { pa: 'Mainuñ miṭṭhaa pasand aa.', say: 'MEH-nooñ MIT-thaa puh-SUND aa', en: 'I like sweet things.', gu: 'ਮੈਨੂੰ ਮਿੱਠਾ ਪਸੰਦ ਆ।' },
      good: 'Liking comes to you too: mainuñ ... pasand aa.' }],
    [3, { key: 'x3',
      them: { pa: 'Kinne baje aaye?', say: 'KIN-nay BUJ-ay AA-ay?', en: 'What time did you get back?', gu: 'ਕਿੰਨੇ ਬਜੇ ਆਏ?' },
      type: 'say', prompt: 'At eight in the evening.',
      answer: { pa: 'Shaam de aṭṭh baje.', say: 'SHAAM day UT BUJ-ay', en: 'At eight in the evening.', gu: 'ਸ਼ਾਮ ਦੇ ਅੱਠ ਬਜੇ।' },
      good: 'Shaam: evening. Aṭṭh: eight. Word for word: evening\'s eight o\'clock.' }]
  ],
  late: [
    [0, { key: 'x1',
      them: { pa: 'Kihṛe raste aaunaa aiñ?', say: 'KEH-ray RUS-tay AU-naa eh?', en: 'Which way are you coming?', gu: 'ਕਿਹੜੇ ਰਸਤੇ ਆਉਨਾ ਐਂ?' },
      pre: { q: 'Tap the word for "which".', word: 'Kihṛe', yes: 'Kihṛe: which. Kihṛaa for a he, kihṛii for a she.' },
      type: 'say', prompt: 'I am on the motorway.',
      answer: { pa: 'Motorway te aañ.', say: 'motorway tay aañ', en: 'I\'m on the motorway.', gu: 'ਮੋਟਰਵੇ ਤੇ ਆਂ।' },
      good: 'Te: on, at. Motorway te, kamm te, gaḍḍii te.' }],
    [2, { key: 'x2',
      them: { pa: 'Kall bii late sii tuuñ.', say: 'KUL bee late see TOOÑ', en: 'You were late yesterday too.', gu: 'ਕੱਲ੍ਹ ਬੀ ਲੇਟ ਸੀ ਤੂੰ।' },
      type: 'pick', ask: 'Protest: yesterday you came on time.', hint: 'Yesterday, and coming never takes ne.',
      opts: [
        { pa: 'Nai, kall maiñ time te aayaa sii.', say: 'neh, KUL meh time tay AA-yaa see', en: 'No, yesterday I came on time.', gu: 'ਨਹੀਂ, ਕੱਲ੍ਹ ਮੈਂ ਟਾਈਮ ਤੇ ਆਇਆ ਸੀ।', k: 'good', note: 'Time te: on time. Aayaa sii: came.' },
        { pa: 'Nai, kall maiñ time te aauuñgaa.', say: 'neh, KUL meh time tay aa-OOÑ-gaa', en: 'No, tomorrow I\'ll come on time.', k: 'bad', name: M_TENSE, note: 'With aauuñgaa, kall flips to tomorrow. Yesterday: aayaa sii.' },
        { pa: 'Nai, kall maiñ ne time te aayaa sii.', say: 'neh, KUL meh nay time tay AA-yaa see', en: 'Broken: ne does not belong here.', k: 'bad', name: M_NE, note: 'Coming never takes ne. And maiñ never takes it anyway.' }
      ] }],
    [3, { key: 'x3',
      them: { pa: 'Parking nai milṇii, bekh laiiñ.', say: 'parking neh MIL-nee, BEKH leh-eeñ', en: 'You won\'t find parking, mind.', gu: 'ਪਾਰਕਿੰਗ ਨਹੀਂ ਮਿਲਣੀ, ਬੇਖ ਲਈਂ।' },
      pre: { q: 'Tap the word that means "to be found".', word: 'milṇii', yes: 'Milṇii: to be found, to get. The same mil as milde aañ.' },
      type: 'pick', ask: 'Tell him not to worry, it will turn up.', hint: 'Telling him not to: naa.',
      opts: [
        { pa: 'Fikar naa kar, mil jaauu.', say: 'FIK-ur NAA kur, mil JAA-oo', en: 'Don\'t worry, it\'ll turn up.', gu: 'ਫ਼ਿਕਰ ਨਾ ਕਰ, ਮਿਲ ਜਾਊ।', k: 'good', note: 'Fikar naa kar: don\'t worry. Mil jaauu: it will be found, with the Doabi -uu.' },
        { pa: 'Fikar nai kar, mil jaauu.', say: 'FIK-ur neh kur, mil JAA-oo', en: 'Broken: nai with an order.', k: 'bad', name: M_NAA, note: 'Telling someone not to do something takes naa: fikar naa kar.' },
        { pa: 'Ṭhiik aa.', say: 'TEEK aa', en: 'Okay.', k: 'ok', note: 'Fine. Reassure him: fikar naa kar.' }
      ] }]
  ],
  rough: [
    [0, { key: 'x1',
      them: { pa: 'Kadoñ daa?', say: 'kuh-DOÑ daa?', en: 'Since when?', gu: 'ਕਦੋਂ ਦਾ?' },
      type: 'say', prompt: 'Since this morning.',
      answer: { pa: 'Sabere daa.', say: 'sub-AY-ray daa', en: 'Since this morning.', gu: 'ਸਬੇਰੇ ਦਾ।' },
      good: 'Sabere daa: since the morning. Textbooks write savere.' }],
    [1, { key: 'x2',
      them: { pa: 'Bukhaar taañ nai?', say: 'boo-KHAAR taañ neh?', en: 'You haven\'t got a fever, have you?', gu: 'ਬੁਖ਼ਾਰ ਤਾਂ ਨਹੀਂ?' },
      pre: { q: 'Tap the word for fever.', word: 'Bukhaar', yes: 'Bukhaar: fever, a temperature.' },
      type: 'pick', ask: 'Say no fever, just a cold.', hint: 'Nai sits right before the verb.',
      opts: [
        { pa: 'Nai jii, bukhaar nai aa. Bas zukaam aa.', say: 'neh jee, boo-KHAAR neh aa. bus zoo-KAAM aa', en: 'No, there\'s no fever. Just a cold.', gu: 'ਨਹੀਂ ਜੀ, ਬੁਖ਼ਾਰ ਨਹੀਂ ਆ। ਬੱਸ ਜ਼ੁਕਾਮ ਆ।', k: 'good', note: 'Zukaam: a cold. Bas: just.' },
        { pa: 'Nai jii, nai bukhaar aa. Bas zukaam aa.', say: 'neh jee, neh boo-KHAAR aa. bus zoo-KAAM aa', en: 'Broken: "no fever is".', k: 'bad', name: M_NAI, note: 'Bukhaar nai aa. Nai waits for the verb.' },
        { pa: 'Nai jii.', say: 'neh jee', en: 'No.', k: 'ok', note: 'True. Tell her what it is instead.' }
      ] }],
    [3, { key: 'x3',
      them: { pa: 'Raat nuuñ niind aaii sii?', say: 'RAAT nooñ NEEND AA-ee see?', en: 'Did you sleep last night?', gu: 'ਰਾਤ ਨੂੰ ਨੀਂਦ ਆਈ ਸੀ?' },
      pre: { q: 'Tap the word for sleep.', word: 'niind', yes: 'Niind: sleep. In Punjabi, sleep comes to you.' },
      type: 'build', ask: 'Tell her no, you could not sleep.', hint: 'To me, sleep did not come.',
      answer: { pa: 'Nai jii, mainuñ niind nai aaii.', say: 'neh jee, MEH-nooñ NEEND neh AA-ee', en: 'No, I couldn\'t sleep.', gu: 'ਨਹੀਂ ਜੀ, ਮੈਨੂੰ ਨੀਂਦ ਨਹੀਂ ਆਈ।' },
      tiles: ['Nai jii,', 'mainuñ', 'niind', 'nai', 'aaii.'], extra: ['maiñ'],
      trapTile: { 'maiñ': { name: M_MAI, note: 'Sleep comes to you: mainuñ niind aaii.' } },
      trapSeq: { 'Nai jii,|mainuñ|nai|niind|aaii.': { name: M_NAI, note: 'Niind nai aaii. Nai sits right before the verb.' } },
      good: 'Mainuñ niind nai aaii: sleep did not come to me.' }]
  ],
  help: [
    [3, { key: 'x1',
      dir: 'The chairs are in. Jassi has the table.',
      type: 'say', prompt: 'Where shall I put them?',
      answer: { pa: 'Kitthe rakkhaañ?', say: 'KIT-thay RUKH-aañ?', en: 'Where shall I put them?', gu: 'ਕਿੱਥੇ ਰੱਖਾਂ?' },
      good: 'Rakkhaañ: shall I put. The same asking ending as karaañ.' }],
    [3, { key: 'x2',
      them: { pa: 'Baahar garden bich rakkh de.', say: 'BAA-hur garden bich RUKH day', en: 'Put them outside in the garden.', gu: 'ਬਾਹਰ ਗਾਰਡਨ ਬਿੱਚ ਰੱਖ ਦੇ।' },
      pre: { q: 'Tap the word for "outside".', word: 'Baahar', yes: 'Baahar: outside. Andar: inside.' },
      type: 'pick', ask: 'Point out that it is raining outside.', hint: 'Rain is one thing, and it falls.',
      opts: [
        { pa: 'Baahar taañ miiñh paindaa aa!', say: 'BAA-hur taañ MEEÑ PEHN-daa aa!', en: 'But it\'s raining outside!', gu: 'ਬਾਹਰ ਤਾਂ ਮੀਂਹ ਪੈਂਦਾ ਆ!', k: 'good', note: 'Miiñh paindaa aa: rain is falling. Taañ adds the "but".' },
        { pa: 'Baahar taañ miiñh painde aa!', say: 'BAA-hur taañ MEEÑ PEHN-day aa!', en: 'Broken: rain with a plural ending.', k: 'bad', name: M_END, note: 'Rain is one thing: paindaa.' },
        { pa: 'Ṭhiik aa jii.', say: 'TEEK aa jee', en: 'Okay.', k: 'ok', note: 'Then you will be carrying them back in. Tell her about the rain.' }
      ] }],
    [3, { key: 'x3',
      them: { pa: 'Haae! Fer andar ii rakkh de.', say: 'HAA-ay! FER UN-dur ee RUKH day', en: 'Oh no! Then just put them inside.', gu: 'ਹਾਏ! ਫੇਰ ਅੰਦਰ ਈ ਰੱਖ ਦੇ।' },
      pre: { q: 'Tap the word for "inside".', word: 'andar', yes: 'Andar: inside. Andar ii: just inside, then.' },
      type: 'say', prompt: 'Okay, I am putting them inside.',
      answer: { pa: 'Ṭhiik aa jii, andar rakkh dinaa aañ.', say: 'TEEK aa jee, UN-dur RUKH DIN-aa aañ', en: 'Okay, I\'m putting them inside.', gu: 'ਠੀਕ ਆ ਜੀ, ਅੰਦਰ ਰੱਖ ਦਿੰਨਾ ਆਂ।' },
      good: 'Rakkh dinaa aañ: I will put them for you. Dinaa is the man\'s form of Biibii\'s dinii.' }]
  ],
  who: [
    [0, { key: 'x1',
      them: { pa: 'Oh kii kamm kardaa aa?', say: 'O kee KUM KUR-daa aa?', en: 'What does he do?', gu: 'ਉਹ ਕੀ ਕੰਮ ਕਰਦਾ ਆ?' },
      type: 'say', prompt: 'He has a shop.',
      answer: { pa: 'Ohdii dukaan aa.', say: 'O-dee doo-KAAN aa', en: 'He has a shop.', gu: 'ਉਹਦੀ ਦੁਕਾਨ ਆ।' },
      good: 'Ohdii: his. It ends in -ii because dukaan is a she.' }],
    [1, { key: 'x2',
      them: { pa: 'Oh kitthe rehndii aa?', say: 'O KIT-thay REHN-dee aa?', en: 'Where does she live?', gu: 'ਉਹ ਕਿੱਥੇ ਰਹਿੰਦੀ ਆ?' },
      type: 'pick', ask: 'Say she lives in Birmingham.', hint: 'She is a she, and no "in" is needed.',
      opts: [
        { pa: 'Oh Birmingham rehndii aa.', say: 'O Birmingham REHN-dee aa', en: 'She lives in Birmingham.', gu: 'ਉਹ ਬਰਮਿੰਘਮ ਰਹਿੰਦੀ ਆ।', k: 'good', note: 'Rehndii: lives, for a she. Oh is he, she and that.' },
        { pa: 'Oh Birmingham rehndaa aa.', say: 'O Birmingham REHN-daa aa', en: 'He lives in Birmingham.', k: 'bad', name: M_HE, note: 'Rehndaa is a he. Your cousin is a she: rehndii.' },
        { pa: 'Oh bich Birmingham rehndii aa.', say: 'O bich Birmingham REHN-dee aa', en: 'Broken: "in" in the English place.', k: 'bad', name: M_POST, note: 'Bich would go after: Birmingham bich. Here you can drop it.' }
      ] }],
    [3, { key: 'x3',
      them: { pa: 'Te oh bachchaa kihdaa aa?', say: 'tay O BUCH-chaa KEH-daa aa?', en: 'And whose kid is that?', gu: 'ਤੇ ਉਹ ਬੱਚਾ ਕਿਹਦਾ ਆ?' },
      pre: { q: 'Tap the word for "whose".', word: 'kihdaa', yes: 'Kihdaa: whose. The wedding question again.' },
      type: 'pick', ask: 'Tell him you have no idea.', hint: 'Knowing comes to you, or drop the pronoun.',
      opts: [
        { pa: 'Pataa nai kihdaa aa.', say: 'puh-TAA neh KEH-daa aa', en: 'No idea whose he is.', gu: 'ਪਤਾ ਨਹੀਂ ਕਿਹਦਾ ਆ।', k: 'good', note: 'Pataa nai: no idea. The quick form of mainuñ nai pataa.' },
        { pa: 'Mainuñ nai pataa.', say: 'MEH-nooñ neh puh-TAA', en: 'I don\'t know.', gu: 'ਮੈਨੂੰ ਨਹੀਂ ਪਤਾ।', k: 'good', note: 'The full version. Pataa nai is the quick one.' },
        { pa: 'Maiñ nai pataa kihdaa aa.', say: 'MEH neh puh-TAA KEH-daa aa', en: 'Broken: "I not known whose he is."', k: 'bad', name: M_MAI, note: 'Knowing comes to you: mainuñ nai pataa.' }
      ] }]
  ],
  eat: [
    [0, { key: 'x1',
      them: { pa: 'Kitthe baiṭhṇaa? Andar ki baahar?', say: 'KIT-thay BETH-naa? UN-dur kay BAA-hur?', en: 'Where would you like to sit? Inside or outside?', gu: 'ਕਿੱਥੇ ਬੈਠਣਾ? ਅੰਦਰ ਕਿ ਬਾਹਰ?' },
      type: 'say', prompt: 'Inside, please. It is cold outside.',
      answer: { pa: 'Andar jii. Baahar ṭhanḍ aa.', say: 'UN-dur jee. BAA-hur TUND aa', en: 'Inside, please. It\'s cold outside.', gu: 'ਅੰਦਰ ਜੀ। ਬਾਹਰ ਠੰਢ ਆ।' },
      good: 'Andar: inside. Baahar: outside.' }],
    [1, { key: 'x2',
      them: { pa: 'Daal kihṛii? Kaaḷii ki piiḷii?', say: 'DAAL KEH-ree? KAA-lee kay PEE-lee?', en: 'Which dal? Black or yellow?', gu: 'ਦਾਲ ਕਿਹੜੀ? ਕਾਲੀ ਕਿ ਪੀਲੀ?' },
      pre: { q: 'Tap the word for "black".', word: 'Kaaḷii', yes: 'Kaaḷii: black. Piiḷii: yellow. Both end in -ii to match daal.' },
      type: 'pick', ask: 'Ask for one of each.', hint: 'Daal is a she.',
      opts: [
        { pa: 'Ikk kaaḷii, ikk piiḷii.', say: 'ik KAA-lee, ik PEE-lee', en: 'One black, one yellow.', gu: 'ਇੱਕ ਕਾਲੀ, ਇੱਕ ਪੀਲੀ।', k: 'good', note: 'Ikk: one. The colours match daal.' },
        { pa: 'Ikk kaaḷaa, ikk piiḷaa.', say: 'ik KAA-laa, ik PEE-laa', en: 'Broken: the colours do not fit daal.', k: 'bad', name: M_ADJ, note: 'Daal is a she: kaaḷii, piiḷii.' },
        { pa: 'Dono.', say: 'DO-no', en: 'Both.', k: 'ok', note: 'It works. Spell it out for the practice.' }
      ] }],
    [3, { key: 'x3',
      them: { pa: 'Khaaṇaa kiddaañ lagiaa?', say: 'KHAA-naa kid-DAAÑ LUG-yaa?', en: 'How was the food?', gu: 'ਖਾਣਾ ਕਿੱਦਾਂ ਲੱਗਿਆ?' },
      pre: { q: 'Tap the word that means "struck you" or "seemed".', word: 'lagiaa', yes: 'Lagiaa: how it struck you. Lag again, like hunger and cold.' },
      type: 'say', prompt: 'Very good. The dal was really tasty.',
      answer: { pa: 'Baṛaa badhiiaa. Daal baṛii suaad sii.', say: 'BUH-raa BUD-ee-aa. DAAL BUH-ree SWAAD see', en: 'Very good. The dal was really tasty.', gu: 'ਬੜਾ ਬਧੀਆ। ਦਾਲ ਬੜੀ ਸੁਆਦ ਸੀ।' },
      good: 'Sii: was. Baṛii suaad sii: it was really tasty.' }]
  ],
  bye: [
    [1, { key: 'x1',
      them: { pa: 'Kinne baje uṭṭhṇaa?', say: 'KIN-nay BUJ-ay OOT-naa?', en: 'What time do you have to get up?', gu: 'ਕਿੰਨੇ ਬਜੇ ਉੱਠਣਾ?' },
      pre: { q: 'Tap the word for "get up".', word: 'uṭṭhṇaa', yes: 'Uṭṭhṇaa: to get up.' },
      type: 'say', prompt: 'At six in the morning.',
      answer: { pa: 'Sabere chhe baje.', say: 'sub-AY-ray CHAY BUJ-ay', en: 'At six in the morning.', gu: 'ਸਬੇਰੇ ਛੇ ਬਜੇ।' },
      good: 'Sabere: in the morning. Shaam: in the evening.' }],
    [2, { key: 'x2',
      them: { pa: 'Jacket paa lai, baahar ṭhanḍ aa.', say: 'jacket PAA leh, BAA-hur TUND aa', en: 'Put your jacket on, it\'s cold out.', gu: 'ਜੈਕਟ ਪਾ ਲੈ, ਬਾਹਰ ਠੰਢ ਆ।' },
      pre: { q: 'Tap the word that means "put on".', word: 'paa', yes: 'Paa: put on, put in. The same paa as mirch naa paaio.' },
      type: 'pick', ask: 'Tell her you do not feel the cold.', hint: 'Cold comes to you, and nai waits for the verb.',
      opts: [
        { pa: 'Mainuñ ṭhanḍ nai laggdii, Biibii.', say: 'MEH-nooñ TUND neh LUG-dee, BEE-bee', en: 'I don\'t feel the cold, Biibii.', gu: 'ਮੈਨੂੰ ਠੰਢ ਨਹੀਂ ਲੱਗਦੀ, ਬੀਬੀ।', k: 'good', note: 'She will hand you the jacket anyway.' },
        { pa: 'Maiñ ṭhanḍ nai laggdii, Biibii.', say: 'MEH TUND neh LUG-dee, BEE-bee', en: 'Broken: "I cold does not attach."', k: 'bad', name: M_MAI, note: 'Cold attaches to you: mainuñ ṭhanḍ laggdii.' },
        { pa: 'Mainuñ nai ṭhanḍ laggdii, Biibii.', say: 'MEH-nooñ neh TUND LUG-dee, BEE-bee', en: 'Broken: nai too early.', k: 'bad', name: M_NAI, note: 'Ṭhanḍ nai laggdii. Nai sits right before the verb.' }
      ] }],
    [3, { key: 'x3',
      them: { pa: 'Te agle hafte fer aaiiñ.', say: 'tay UG-lay HUF-tay FER AA-eeñ', en: 'And come again next week.', gu: 'ਤੇ ਅਗਲੇ ਹਫ਼ਤੇ ਫੇਰ ਆਈਂ।' },
      type: 'pick', ask: 'Promise you will.', hint: 'It has not happened yet.',
      opts: [
        { pa: 'Pakkaa Biibii, agle hafte fer aauuñgaa.', say: 'PUK-kaa BEE-bee, UG-lay HUF-tay FER aa-OOÑ-gaa', en: 'For definite, Biibii, I\'ll come again next week.', gu: 'ਪੱਕਾ ਬੀਬੀ, ਅਗਲੇ ਹਫ਼ਤੇ ਫੇਰ ਆਊਂਗਾ।', k: 'good', note: 'Fer: again, then. Fer aauuñgaa: I will come again.' },
        { pa: 'Pakkaa Biibii, agle hafte fer aayaa.', say: 'PUK-kaa BEE-bee, UG-lay HUF-tay FER AA-yaa', en: 'Broken: next week, with a verb that has already happened.', k: 'bad', name: M_TENSE, note: 'Aayaa is done. Next week: aauuñgaa.' },
        { pa: 'Koshish karuuñgaa.', say: 'ko-SHISH kur-OOÑ-gaa', en: 'I\'ll try.', k: 'ok', note: 'Honest, and not what she wants to hear.' }
      ] }]
  ]
};
CONVOS.forEach(function (c) {
  c.steps.forEach(function (s, i) { s.key = i; });
  var after = {};
  (EXTRA[c.id] || []).forEach(function (e) {
    var at = -1;
    for (var i = 0; i < c.steps.length; i++) if (c.steps[i].key === e[0]) at = i;
    after[e[0]] = (after[e[0]] || 0) + 1;
    c.steps.splice(at + after[e[0]], 0, e[1]);
  });
});

var CHUNKS = [
  ['Sat srii akaal', 'sut SREE uh-KAAL', 'Hello and goodbye', 'ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ'],
  ['Tusiiñ kiddaañ o?', 'too-SEEÑ kid-DAAÑ o?', 'How are you? (to an elder)', 'ਤੁਸੀਂ ਕਿੱਦਾਂ ਓ?'],
  ['Tusiiñ suṇaao', 'too-SEEÑ soo-NAA-o', 'You tell me (to an elder)', 'ਤੁਸੀਂ ਸੁਣਾਓ'],
  ['Tuuñ suṇaa', 'TOOÑ soo-NAA', 'You tell me (to a cousin)', 'ਤੂੰ ਸੁਣਾ'],
  ['Haañ jii / Nai jii', 'haañ jee / neh jee', 'Respectful yes and no', 'ਹਾਂ ਜੀ। ਨਹੀਂ ਜੀ।'],
  ['Thoṛii jii', 'THO-ree jee', 'Just a little', 'ਥੋੜ੍ਹੀ ਜਿਹੀ'],
  ['Mainuñ pùkkh lagii aa', 'MEH-nooñ PUKH LUG-ee aa', 'I\'m hungry', 'ਮੈਨੂੰ ਭੁੱਖ ਲੱਗੀ ਆ'],
  ['Maiñ rajj gayaa', 'meh RUJ gyaa', 'I\'m full', 'ਮੈਂ ਰੱਜ ਗਿਆ'],
  ['Mainuñ nai pataa', 'MEH-nooñ neh puh-TAA', 'I don\'t know', 'ਮੈਨੂੰ ਨਹੀਂ ਪਤਾ'],
  ['Chal koi nai', 'chul KOY neh', 'Never mind', 'ਚੱਲ ਕੋਈ ਨਹੀਂ'],
  ['Chal chhaḍḍ', 'chul CHUD', 'Forget it', 'ਚੱਲ ਛੱਡ'],
  ['Baṛii badhiiaa baṇii aa', 'BUH-ree BUD-ee-aa BUN-ee aa', 'It came out really good', 'ਬੜੀ ਬਧੀਆ ਬਣੀ ਆ'],
  ['Hale nai', 'HUH-lay neh', 'Not yet', 'ਹਾਲੇ ਨਹੀਂ'],
  ['Pakkaa', 'PUK-kaa', 'For definite', 'ਪੱਕਾ'],
  ['De deo', 'day DAY-o', 'Give me, politely', 'ਦੇ ਦਿਓ'],
  ['Kinne paise hoe?', 'KIN-nay PEH-say HO-ay?', 'How much is that?', 'ਕਿੰਨੇ ਪੈਸੇ ਹੋਏ?'],
  ['Kinne baje?', 'KIN-nay BUJ-ay?', 'At what time?', 'ਕਿੰਨੇ ਬਜੇ?'],
  ['Fer milde aañ', 'FER MIL-day aañ', 'See you later', 'ਫੇਰ ਮਿਲਦੇ ਆਂ'],
  ['Kii karnaa?', 'kee KUR-naa?', 'What needs doing?', 'ਕੀ ਕਰਨਾ?'],
  ['Koi gall nai', 'KOY gul neh', 'It\'s nothing, no matter', 'ਕੋਈ ਗੱਲ ਨਹੀਂ'],
  ['Koi loṛ nai', 'KOY LOR neh', 'There\'s no need', 'ਕੋਈ ਲੋੜ ਨਹੀਂ'],
  ['Raste bich aañ', 'RUS-tay bich aañ', 'I\'m on the way', 'ਰਸਤੇ ਬਿੱਚ ਆਂ'],
  ['Meraa sir dukhdaa aa', 'MAY-raa SIR DUKH-daa aa', 'My head hurts', 'ਮੇਰਾ ਸਿਰ ਦੁਖਦਾ ਆ'],
  ['Mainuñ jaaṇaa paiṇaa', 'MEH-nooñ JAA-naa PEH-naa', 'I have to go', 'ਮੈਨੂੰ ਜਾਣਾ ਪੈਣਾ'],
  ['Maiñ huṇ chaldaa aañ', 'meh HOON CHUL-daa aañ', 'I\'m off now', 'ਮੈਂ ਹੁਣ ਚੱਲਦਾ ਆਂ'],
  ['Badhaaiiaañ', 'bud-AA-ee-aañ', 'Congratulations', 'ਬਧਾਈਆਂ'],
  ['Bas jii', 'BUS jee', 'That\'s enough, thank you', 'ਬੱਸ ਜੀ'],
  ['Sajje ki khabbe?', 'SUJ-jay kay KHUB-bay?', 'Right or left?', 'ਸੱਜੇ ਕਿ ਖੱਬੇ?'],
  ['Mere koḷ nai haigaa', 'MAY-ray kol neh HEH-gaa', 'I haven\'t got one', 'ਮੇਰੇ ਕੋਲ ਨਹੀਂ ਹੈਗਾ'],
  ['Fikar naa kar', 'FIK-ur NAA kur', 'Don\'t worry (to a cousin)', 'ਫ਼ਿਕਰ ਨਾ ਕਰ'],
  ['Apṇaa tìaan rakkheo', 'UP-naa tee-AAN RUK-yo', 'Look after yourself (to an elder)', 'ਆਪਣਾ ਧਿਆਨ ਰੱਖਿਓ']
];

var COMING = [];

if (typeof module !== 'undefined') module.exports = { CONVOS: CONVOS, SLIP: SLIP, COMING: COMING, CHUNKS: CHUNKS };
