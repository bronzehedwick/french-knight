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
    twitterButton = document.getElementById('icon-twitter'),
    facebookButton = document.getElementById('icon-facebook'),
    gplusButton = document.getElementById('icon-gplus'),
    linkedinButton = document.getElementById('icon-linkedin'),
    tumblrButton = document.getElementById('icon-tumblr'),
    mailButton = document.getElementById('icon-mail'),

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
      'poster',
      'chicken',
      'rectum',
      'cock',
      'fart',
      'pipe',
      'wax',
      'blanket',
      'lunch',
      'continent',
      'grass',
      'pants',
      'anus',
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
      'Power Rangers',
      'Vanna White',
      'Huckleberry Fin',
      'Barbara Walters',
      'Mole People',
      'Hobbit',
      'zeitgeist',
      'teleporter',
      'William Shatner',
      'turd',
      'bloat',
      'monkey',
      'laser',
      'swamp',
    ],

    ings = [
      'squelching',
      'fucking',
      'shitting',
      'farting',
      'pissing',
      'smelting',
      'munching',
      'clapping',
      'rinsing',
      'juicing',
      'plumbing',
      'belching',
      'burping',
      'barfing',
      'screwing',
      'plotting',
      'gassing',
      'coughing',
      'staining',
      'climbing',
      'blasting',
      'banging',
      'eating',
      'chewing',
      'smelling',
      'squirting',
      'blaming',
      'stealing',
      'swiping',
      'peeling',
      'pleading',
      'bleeding',
      'boiling',
      'porking',
      'yanking',
      'trimming',
    ],

    ers = [
      'fucker',
      'shitter',
      'farter',
      'eater',
      'pleaser',
      'consultant',
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
      'professor',
      'artist',
      'actor',
      'story teller',
      'stainer',
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

    // we have an insult!
    insultString = capitaliseFirstLetter(insultString);
    insult.innerHTML = insultString;

    // add the insult to social buttons.
    twitterButton.attributes[0].value = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(insultString) + '&url=http://hypnotictoast.com/french-knight';
    facebookButton.attributes[0].value = 'https://www.facebook.com/sharer/sharer.php?s=100&p[title]=French+Knight&p[summary]=' + insultString.replace(' ', '+', 'g') + '&p[url]=http://hypnotictoast.com/french-knight';
    linkedinButton.attributes[0].value = 'https://www.linkedin.com/shareArticle?url=http://hypnotictoast.com/french-knight&title=French%20Knight&summary=' + encodeURIComponent(insultString) + '&source=http://hypnotictoast.com/french-knight';
    mailButton.attributes[0].value = 'mailto:?subject=A French Knight\'s Hello&body=' + insultString + '.';

    return insultString;
  }
  insultString = generateInsult();

  insultButton.addEventListener('click', generateInsult, false);
};

