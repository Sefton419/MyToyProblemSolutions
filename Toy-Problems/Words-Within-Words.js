/*

Words within Words
Given an array of unique words, find the word that contains the greatest number of other words. A word must be at least two letters long. For an added challenge, try for O(n).

Examples
Input - 

[ "gray", "grays", "ray", "rays", "strays" ]	

Output - 

"grays"

*/

function nestedWordCount (wordList) {

	// Iterate through whole wordList  

	let trialIndex = 0;
	let currentIndex = 0;

	let lastIndex = wordList.length - 1;

	let wordWithMostSubwords = ['word here', 0]
	let tally = 0;

	while (trialIndex < lastIndex) {

		let wordOnTrial = wordList[trialIndex];
		let currentWord = wordList[currentIndex];

		if (currentIndex === lastIndex) {
			tally = 0;
			trialIndex++;
			currentIndex = 0;
		} else {
			// if a is not the same index of b
			if (trialIndex !== currentIndex && wordOnTrial.length >= currentWord.length) {
				// compare wordOnTrial with currentWord
				if (wordOnTrial.includes(currentWord)) {
					// increment tally
					tally++;
				}			
			}
			// if tally is larger than wordWithMostSubwords[1]
			if (tally > wordWithMostSubwords[1]) {
				// update new word
				wordWithMostSubwords[0] = wordOnTrial;
				// update new count
				wordWithMostSubwords[1] = tally;
			}

			currentIndex++;
				
		}
			
	}

	return wordWithMostSubwords[0];

}

	



console.log(nestedWordCount(['hello', 'mellow', 'ello', 'low', 'mell', 'he', 'll', 'hell']));