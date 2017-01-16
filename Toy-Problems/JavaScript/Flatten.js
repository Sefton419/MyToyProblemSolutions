/*

Flatten

Given an array of arrays, return all elements in a single array. You must use recursion.

*/



function flatten (array) {
  let results = [];
  // recurse (arr)
  function recurse (arr) {
    // iterate through array
    for (let i = 0; i < arr.length; i++) {
      let val = arr[i];
      // if value is array
      if (Array.isArray(val)) {
        // recurse
        recurse(val);
      } else {
      // if is not array
        // push result to results
        results.push(val);
      }
    }
  }
  recurse (array);
  return results;
};