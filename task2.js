var process = require('process');

function fibo(n) {
	var a = 0,
		b = 1;

	if (n != 0) {

		for (var i = 1; i < Math.abs(n); i++) {
			b += a;
			a = b - a;
		}

		return n < 0 && n % 2 == 0 ? -1 * b : b;
	} 	

	return 0;
};

process.stdout.write(fibo(process.argv[2]).toString());
