/*

Even Occurrence

Find the first item that occurs an even number of times in an array. Remember to handle multiple even-occurrence items and return the first one. Return null if there are no even-occurrence items.

*/

function evenOccurrence (arr) {
  var keysObj = {};

  arr.forEach((val) => {
    if (keysObj[val] === undefined) {
      keysObj[val] = false;
    } else {
      if (keysObj[val] === false) {
        keysObj[val] = true;
      } else {
        keysObj[val] = false;
      }
    }
  });

  for (var i = 0; i < arr.length; i++ ){
    var val = arr[i];
    if (keysObj[val] === true) {
      return val;
    }
  };

}
