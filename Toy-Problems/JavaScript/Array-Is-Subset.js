/*

Array isSubset

Create a function that takes two arrays and determine whether the second array is a subset of the first array. Arrays will only contain primitive values. Subset must be in original order.

*/

function isSubset (array, sub) {
  let i = 0;
  let j = 0;

  // Edge case for when sub.length === 0
  if (sub.length === 0) {
    return true;
  }

  // iterate through array
  while (i < array.length) {
    let val = array[i];
    // if val matches val of sub
    if (val === sub[j]) {
      // begin tracking to see if whole sub matches
      if (sub[j] === sub[sub.length - 1]) {
        isSubset = true;
        return true;
      }
      j++
    } else {
    // if val ever doesn't equal val of sub, start over
      j = 0;
    }
    i++;
  }
  return false;
};





