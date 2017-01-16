/*

Array Middle

Given an array of negative/positive integers, return the element in the center position of the array.

If the array has an even number of elements, return the average of the two middle elements instead.

*/

function middle (numbers) {
  var middleIndex = Math.floor((numbers.length)/2)

  // if length of array is even
    // take two in middle, return avg
  function evenLength(arr) {
    var mids = arr.splice(Math.floor(middleIndex) - 1, 2);
    return (mids[0] + mids[1]) / 2;
  }

  // if length of array is odd
    // take middle, return
  function oddLength(arr) {
    return arr.splice(middleIndex, 1)[0];
  }

 return numbers.length % 2 === 0 ? evenLength(numbers) : oddLength(numbers);

}