
/* 

Shallow Flatten

Given an array of arrays, return all elements in a single array. Nested arrays will be at most one level deep, meaning 
[1, [2, 3], 4, [5], 6]

and not

[[[1],[2], [3]]]

Hint: Use Array.isArray(elem) to see if something is an array.

*/

function flatten (array) {
  // Write your code here, and
  // return your final answer.
  
  let results = [];
  
  // recurse (arr)
  function recurse (arr) {
    // iterate through array
    for (var i = 0; i < arr.length; i++) {
      let val = arr[i];
      // if value is not array
      if (!Array.isArray(val)) {
        // push to results
        results.push(val);
      }
      // if value is array
      if (Array.isArray(val)) {
        // recurse(value)
        recurse(val);
      }
    }
  };
  
  recurse (array);
  return results;
      
}