window.onload = function() {
  'use strict';

  var insultButton = document.getElementById('insultButton'),
  insultString;

  // Returns a random number between min and max
  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  // Returns string with first letter capitalized
  function capitaliseFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function generateInsult() {
    var insult = document.getElementById('insult'),

    nouns = [
      'ass',
      'fuck',
      'dick',
      'vagina',
      'twat',
      'cunt',
      'sleaze',
      'gas',
      'butt',
      'puss',
      'piss',
      'belch',
      'crack',
      'glass',
      'douche',
      'scrote',
      'dong',
      'skank',
      'crust',
      'train',
      'shit',
      'scrotum',
      'mucus',
      'snot',
      'rasp',
      'bunion',
      'noodle',
      'whistle',
      'paster',
      'poster',
      'chicken',
      'rectum',
      'cock',
      'fart',
      'pipe',
      'wax',
      'bolt',
      'blanket',
      'lunch',
      'continent',
      'grass',
      'squelch',
      'candle',
      'pants',
      'taint',
      'wad',
      'rag',
      'tampon',
      'condom',
      'barf',
      'pillow',
      'book',
      'fashion',
      'razor',
      'sex',
      'pogo stick',
      'lamp post',
      'weasle',
      'toe',
      'eye lid',
      'intestine',
      'ear hole',
      'nose',
      'cheese',
      'urine',
      'finger',
      'blood',
      'keyboard',
      'phone',
      'internet',
      'grab bag',
      'Santa Claus',
      'antique',
      'gravity',
      'lawn',
      'road house',
      'house party',
      'Sasquatch',
      'white house',
      'forest',
      'under water',
      'Kim Jun Un',
      'Rodney Dangerfield',
      'Power Rangers',
      'Batman',
      'Pink Panther',
      'Looney Tunes',
      'Robin Williams',
      'Vanna White',
      'Huckleberry Fin',
      'Bob Dylan',
      'Dungeons and Dragons',
      'Sherlock Holmes',
      'Barbara Walters',
      'Peter O\'Toole',
      'Mole People',
      'Hobbit',
      'Kim Kardashian',
      'zeitgeist',
      'teleporter',
      'William Shatner',
      'Elizebeth Hasselbeck',
      'turd',
      'bloat',
      'monkey',
      'laser',
      'swamp',
    ],

    ings = [
      'fucking',
      'shitting',
      'coasting',
      'farting',
      'pissing',
      'smelting',
      'munching',
      'clapping',
      'rinsing',
      'juicing',
      'plumbing',
      'churning',
      'belching',
      'burping',
      'barfing',
      'screwing',
      'plotting',
      'touching',
      'passing',
      'gassing',
      'coughing',
      'staining',
      'climbing',
      'blasting',
      'eating',
      'chewing',
      'smelling',
      'squirting',
      'blaming',
      'stealing',
      'moving',
      'swiping',
      'peeling',
      'pleading',
      'bleeding',
      'boiling',
      'placating',
      'porking',
      'gunking',
      'parting',
      'placing',
      'pulling',
      'yanking',
      'pushing',
      'carrying',
      'lifting',
      'flexing',
      'trimming',
      'trashing',
      'smashing',
      'crashing',
      'flashing',
      'reading',
      'purchasing',
    ],

    ers = [
      'fucker',
      'shitter',
      'farter',
      'eater',
      'pleaser',
      'consultant',
      'putz',
      'packer',
      'server',
      'chopper',
      'worker',
      'bagger',
      'stuffer',
      'owner',
      'cleaner',
      'watcher',
      'wiper',
      'tamer',
      'pisser',
      'planner',
      'manager',
      'officer',
      'surgeon',
      'carpenter',
      'waiter',
      'chef',
      'chief',
      'waxer',
      'fluffer',
      'placater',
      'tour guide',
      'fondler',
      'pickler',
      'caster',
      'dictator',
      'believer',
      'slammer',
      'grammarian',
      'politician',
      'teacher',
      'artist',
      'actor',
      'story teller',
      'stainer',
      'pilot',
      'sniffer',
    ],

    num1 = getRandomArbitrary(0, nouns.length - 1),
    num2 = getRandomArbitrary(0, ings.length - 1),
    num3 = getRandomArbitrary(0, nouns.length - 1),
    num4 = getRandomArbitrary(0, ers.length - 1),

    insultee = document.getElementById('insultee').value,

    insultString = nouns[num1] + ' ' + ings[num2] + ' ' + nouns[num3] + ' ' + ers[num4];

    if (insultee !== '') {
      insultString = insultee + ', you\'re a ' + insultString;
    }

    insult.innerHTML = capitaliseFirstLetter(insultString);

    return insultString;
  }
  insultString = generateInsult();

  insultButton.addEventListener('click', generateInsult, false);
};
