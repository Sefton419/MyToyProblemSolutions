/*

Character Frequency

Write a function that takes as its input a string and returns an array of arrays as shown below sorted in descending order by frequency and then by ascending order by character.

string: "mississippi"

answer: [ [ "i", 4 ], [ "s", 4 ], [ "p", 2 ], [ "m", 1 ] ]

*/

function characterFrequency (string) {
  // Write your code here, and
  // return your final answer.

	function insertionSort (array) {
		// used this sorting algorithm from previous toy problem
    for (var i = 1; i < array.length; i++) {
      var curr = array[i];
      var prev = array[i - 1];
      if (curr[1] > prev[1]) {
        for (var j = i-1; i >= -1; j--) {
          var trial = array[j];
          if (trial[1] < curr[1]) {
            var temp = array.splice(i, 1)[0]
            array.splice(j, 0, temp);
            i = 0;
            break;
          }
        }
      }
    }
    return array;
	};

	var keysObj = {};
	var results = [];
	var greatestFreq = ['', 0]
	// track order
	// sort
	var sortedArr = string.split('').sort();
	// track frequency
	for (var i = 0; i < sortedArr.length; i++) {
		var curr = sortedArr[i]
		if (keysObj[curr] === undefined) {
			keysObj[curr] = 1;
			if (keysObj[curr] > greatestFreq[1]) {
				greatestFreq[0] = curr;
				greatestFreq[1] = 1;
			}
		} else {
			keysObj[curr]++;
			if (keysObj[curr] > greatestFreq[1]) {
				greatestFreq[0] = curr;
				greatestFreq[1] = keysObj[curr];
			}
			sortedArr.splice(i, 1);
			i--;
		}
	}
	// if it has the greatest frequency
	// iterate through the simplified array
	for (var i = 0; i < sortedArr.length; i++) {
		var curr = sortedArr[i]
		var tuple = [];
		// put letter in tuple[0]
		tuple.push(curr)
		// put frequency in tuple[1]
		tuple.push(keysObj[curr])
		//push tuple to results
		results.push(tuple)
	}

	insertionSort(results);

	return results;

};