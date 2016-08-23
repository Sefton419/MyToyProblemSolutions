/*

Your Order, Please

Your task is to sort a given string. Each word in the String will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input String is empty, return an empty String. The words in the input String will only contain valid consecutive numbers.

For an input: "is2 Thi1s T4est 3a" the function should return "Thi1s is2 3a T4est"

*/

function order(words) {

	let string = words.slice();
	let wordsArr = string.split(' ');

	// create object for storing number as property and word as value
	let orderObj= {};
	let resultsArr = [];

	// iterate through all letters of string

	let j = 0;

	for (let i = 0; i < string.length; i++) {
		let char = string[i];
		// if letter is number
		if (!!Number(char)) {
			orderObj[char] = wordsArr[j];
			j++;
			// orderArr.push(Number(char));
		}
	}

	for (key in orderObj) {
		results.push(orderObj[key])
	}

	console.log('orderObj', orderObj);

	/*
	
	console.log('orderArr', orderArr);

	// iterate through orderArr

	let x = 1;
	let i = 0;

	while (wordsArr.length > 0) {

		if (orderArr[i] === x) {
			let temp = wordsArr.splice(i, 1);
			orderArr.splice(i, 1);
			resultsArr.push(temp);
			i = 0;
			x++;
		} else {
			i++;
		}
	}

	console.log('resultsArr', resultsArr);

	*/

	return resultsArr.join(' ');

};


