var process = require('process');
var arg = process.argv.slice(2).join('');
var arr = [];

var vowels = arg.match(/[aeioyuAEIOYUаоуыэяеёюиАОУЫЭЯЕЁЮИ]/g);
if (vowels !== null)
	arr.push(vowels.join(''));

var consonants = arg.match(/[a-zA-Zа-яА-Я]/g);
if (consonants !== null) {
	consonants = consonants.join('').match(/[^aeioyuAEIOYUаоуыэяеёюиАОУЫЭЯЕЁЮИ]/g);
	if (consonants !== null)
		arr.push(consonants.join(''));
}

var digits = arg.match(/\d/g);
if (digits !== null) 
	arr.push(digits.join(''));

process.stdout.write(arr.join(' '));
