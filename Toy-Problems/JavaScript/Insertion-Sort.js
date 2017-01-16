
/*

Insertion Sort

Insertion sort is a basic sorting algorithm.

Insertion sort iterates over an array, growing a sorted array behind the current location. It takes each element from the input and finds the spot, up to the current point, where that element belongs (in constant space). It does this until it gets to the end of the array.

Insertion sort should be implemented as a stable sort. This means that equal elements
should retain their relative order. Numbers, as primitives, give us no way to check this,
so we’ll be sorting objects with a value field, on which they will be sorted, like so:

[{value: 10}, {value: 5, order: 1}, {value: 5, order: 2}]

A stable sort must return {value: 5, order: 1}, {value:5, order: 2} in that order.

*/



function insertionSort (array) {
  // Write your code here, and
  // return your final answer.
  for (let i = 1; i < array.length; i++) {
    let curr = array[i];
    let prev = array[i - 1];

    if (curr.value < prev.value) {
      for (let j = i-1; i >= -1; j--) {
        let trial = array[j];
        if (trial.value > curr.value) {
          let temp = array.splice(i, 1)[0];
          array.splice(j, 0, temp);
          i = 0;
          break;
        }
      }   
    }    
  }
  return array;
}