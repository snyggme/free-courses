var process = require('process');

var str = process.argv.slice(2).join('');

function isPalindrom(str) {

	var front = 0;
  	var back = str.length - 1;

  	while (back > front) {

    	while (str[front].match(/[^а-я\wёЁА-Я]|_/)) {
      		front++;	
    	}

    	while (str[back].match(/[^а-я\wёЁА-Я]|_/)) {
      		back--;
    	}

    	if (str[front].toLowerCase() !== str[back].toLowerCase()) 
    		return "NO";

    	front++;
    	back--;
  	}

  	return "YES";
};

process.stdout.write(isPalindrom(str));
