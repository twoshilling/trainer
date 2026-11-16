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
        them: { pa: 'Sab ṭhiik aa. Jaa, kujh khaa pii lai.', say: 'sub TEEK aa. JAA, kooj KHAA pee leh', en: 'All fine. Go on, get something to eat and drink.', gu: 'ਸਭ ਠੀਕ ਆ। ਜਾ, ਕੁਝ ਖਾ ਪੀ ਲੈ।' },
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
          { pa: 'Fer aapaañ kàr aa gaye.', say: 'FER AA-paañ KUR aa GAY', en: 'Then we came home.', gu: 'ਫੇਰ ਆਪਾਂ ਘਰ ਆ ਗਏ।', k: 'good', note: 'Aa gaye: came, for more than one. With coming and going the verb matches the people.' },
          { pa: 'Fer aapaañ ne kàr aa gaye.', say: 'FER AA-paañ nay KUR aa GAY', en: 'Broken: ne does not belong here.', k: 'bad', name: M_NE, note: 'Second surprise: ne only goes with doing something to something. Coming and going never take it.' },
          { pa: 'Fer aapaañ kàr aa gayaa.', say: 'FER AA-paañ KUR aa gyaa', en: 'Broken: "Then we came home", with the ending for one man.', k: 'bad', name: M_END, note: 'Gayaa is one man. Two of you: gaye.' }
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
    id: 'late', group: 'More conversations', title: 'Running late', who: 'Jassi', rel: 'your cousin, same age as you', place: 'On the phone, from the car',
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
    id: 'rough', group: 'More conversations', title: 'Feeling rough', who: 'Biibii', rel: 'your grandmother', place: 'In her front room',
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
    id: 'help', group: 'More conversations', title: 'Lending a hand', who: 'Maasii', rel: 'your mum\'s sister', place: 'At hers, before the guests arrive',
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
    id: 'who', group: 'More conversations', title: 'Who is who', who: 'Jassi', rel: 'your cousin, same age as you', place: 'At a family party',
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
    id: 'eat', group: 'More conversations', title: 'Eating out', who: 'Waiter', rel: 'at a Punjabi restaurant on the Broadway', place: 'At your table',
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
    id: 'bye', group: 'More conversations', title: 'The long goodbye', who: 'Biibii', rel: 'your grandmother', place: 'At her front door',
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
];

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
  ['Apṇaa tìaan rakkheo', 'UP-naa tee-AAN RUK-yo', 'Look after yourself (to an elder)', 'ਆਪਣਾ ਧਿਆਨ ਰੱਖਿਓ']
];

var COMING = [];

if (typeof module !== 'undefined') module.exports = { CONVOS: CONVOS, SLIP: SLIP, COMING: COMING, CHUNKS: CHUNKS };
