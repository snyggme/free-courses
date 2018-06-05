var process = require('process');

function fib(n) {
	var a = 0,
		b = 1;

	if (n > 0) {

		for (var i = 1; i < n; i++) {
			b += a;
			a = b - a;
		}

		return b;
	} 	
	else if (n < 0) {

		for (var i = 0; i < Math.abs(n); i++) {
			b -= a;
			a = b - a;
		}

		return a;
	}
	
	return 0;
};

process.stdout.write(fib(process.argv[2]).toString());
