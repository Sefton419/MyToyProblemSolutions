/*

Binary Search Array

Given a sorted array of integers, find the index of a target value using a binary search algorithm.

A binary search finds an item in a sorted array by repeatedly choosing a middle value and dividing the search interval in half. The initial interval includes the whole array. If the value of the target value is less than the middle value of the interval, then the next interval will be the lower half of the current interval. If the value of the target value is greater than the middle value, then the next interval will be the upper half. The search process repeats until the middle value is equal to the target value, or the search interval is empty.


Note:
Your function should return -1 for target values not in the array.

Do NOT use Array.prototype.indexOf in your solution. What would be the fun in that?

*/

function binarySearch (array, target) {

  let objKeys = {};
  array.forEach(function(value, index){
    objKeys[value] = index;
  })

  let result = -1;

  function recurse (array, target) {

    let middleIndex = Math.ceil((array.length - 1)/2);
    let middleValue = array[Math.ceil((array.length - 1)/2)];

    if (middleValue === target) {
        result = objKeys[middleValue];
        return;
    }

    if (middleIndex === 0){
      return
    }

    if (middleValue > target) {
      let newArr = array.slice(0, middleIndex);
      recurse(newArr, target);
    } else if (middleValue < target) {
      let newArr = array.slice(middleIndex, (array.length));
      recurse(newArr, target);
    }
  }

  recurse(array, target)
  return result;

}
