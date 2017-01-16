/*

The Hashtag Generator

The marketing team are spending way too much time typing in hashtags.
Let's help them with out own Hashtag Generator!

Here's the deal:

If the final result is longer than 140 chars it must return false.
If the input is a empty string it must return false.
It must start with a hashtag (#).
All words must have their first letter capitalized.
Example Input to Output:

" Hello there thanks for trying my Kata" => "#HelloThereThanksForTryingMyKata"

" Hello World " => "#HelloWorld"

*/

function generateHashtag (str) {
	str = str || '';
	// if str === '';
	if (str === '') {
		console.log('false, empty');
		return false;
	}

	// let joined = join all letters together without spaces

	let split = str.split(' ');
	let joined = split.join('');
	console.log('split: ', split)
	console.log('joined: ', joined)

	// if joined.length + 1 > 140
	if (joined.length + 1 > 140) {
		// return false
		console.log('false, too long')
		return false;
	}

	// iterate
	let hashTagInTheMaking = split.map(function(word) {
		// first, capitalize first letter of all words with forEach/map
		let splitWord = word.split('') || [];
		if (splitWord[0].toUpperCase()) {
			splitWord[0] = splitWord[0].toUpperCase();
			console.log('splitWord should be capitalized:', splitWord)
			let capitalizedWord = splitWord.join('');
			console.log('capitalization should be complete for ' + word + ': ' , capitalizedWord);
			return capitalizedWord;
		}

	});
		
	// unshift '#'
	hashTagInTheMaking.unshift('#');

	//join array
	let result = hashTagInTheMaking.join('');

	return result;

}

console.log('Final Result: ', generateHashtag('I do not need to work with hipsters'));







