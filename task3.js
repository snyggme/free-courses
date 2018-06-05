var process = require('process');
var arg = process.argv[2];

var digits = arg.match(/\d/g);
digits = digits === null ? '' : ' ' + digits.join('');

var vowels = arg.match(/[aeiouAEIOUаоуыэяеёюиАОУЫЭЯЕЁЮИ]/g);
vowels = vowels === null ? '' : vowels.join('');

var consonants = arg.match(/[a-zA-Zа-яА-Я]/g).join('').match(/[^aeiouAEIOUаоуыэяеёюиАОУЫЭЯЕЁЮИ]/g);
consonants = consonants === null ? '' : ' ' + consonants.join('');

process.stdout.write(vowels + consonants + digits);
