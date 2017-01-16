/*

Arrayception

Given an array of arbitrarily nested arrays, return n, where n is the deepest level that contains a non-array value.

* use recursion

*/

function arrayception (array) {
  // Write your code here, and
  // return your final answer.

  let maxDepth = 0;

  function recurse (val, currDepth) {

    for (var i = 0; i < val.length; i++) {

      if (currDepth > maxDepth && typeof val[i] === "number") {
        maxDepth = currDepth;
      }

      if (val[i][0] !== undefined && typeof val[i] !== 'String') {
        recurse(val[i], currDepth + 1);
      }

    }

  }

  recurse(array, 1);
  return maxDepth;

}
