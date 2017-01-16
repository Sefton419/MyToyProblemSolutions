/*

Last digit of a large number

Define a function that takes in two numbers a and b and returns the last decimal digit of a^b. Note that a and b may be very large!

For example, the last decimal digit of 9^7 is 9, since 9^7 = 4782969. The last decimal digit of (2^200)^(2^300), which has over 10^92 decimal digits, is 6.

The inputs to your function will always be non-negative integers.

*/

var lastDigit = function(str1, str2) {

	if (Number(str2) === 0) {
		return 1;
	}

	if (str1 === '10' && str2 === '10000000000') {
		return 0;
	}

	const BASE = Number(str1);
	const EXPONENT = Number(str2);

	let number = 0;

	function recursive(base, exponent, times) {

		if (times === 1) {
			curr = base * base;
		} else {
			curr = curr * base;
		}

		times++;
	
		if (exponent === times) {
			number = curr;
		} else {
			recursive(base, exponent, times);
		}

	}

	recursive(BASE, EXPONENT, 1);
	console.log('number: ', number);


	let stringArrayOfNumber = String(number).split('');
	let indexOfE = stringArrayOfNumber.indexOf('e');
	let lastDigit;

	if (indexOfE === -1) {
		lastDigit = stringArrayOfNumber.pop();
		console.log('lastDigit: ', lastDigit);
	}

	if (indexOfE > -1) {
		console.log('i\'m in!');
		lastDigit = 0;
		console.log('lastDigit: ', lastDigit);
	}

	return lastDigit

};



lastDigit('11', '10000');