/*

Zero Sum

Given an array of negative/positive integers, return true if there exists two numbers whose sum is zero.

* use recursion
*/

function zeroSum (numbers) {
  // Write your code here, and
  // return your final answer.

  let copy = numbers.slice();
  let flag = false;

  function recurse (curr, array) {

    if (array[0] === undefined) {
      return;
    }

    // iterate through whole array
    for (var i = 1; i < array.length; i++) {
      let value = array[0];
      let curr = array[i];

      // if value + curr === 0
      if (value + curr === 0) {
        // make flag true
        flag = true;
      }
    }

    let nextVal = array.shift();
    recurse(nextVal, array);

  };

  recurse(copy[0], copy);
  return flag;

}
