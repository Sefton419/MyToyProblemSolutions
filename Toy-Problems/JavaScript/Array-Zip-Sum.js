/*

Array Zip Sum

Given two arrays of negative/positive integers, return a new array such that each element at index n is the sum of the two elements from the other arrays at their index n’s.

Examples

Input --> xs:[ 10, 20, 30 ], ys:[ 1, 2, 3 ]

Output --> [ 11, 22, 33 ]

- - - - - - - - - - - - - - - - - - - - - -

Input --> xs:[ 100, 1 ], ys: [ 50, 5 ]

Output --> [ 150, 6 ]

- - - - - - - - - - - - - - - - - - - - - -

*/

function zipSum (xs, ys) {

  var results = [];

  for (var i = 0; i < xs.length; i++) {
    if (xs[i] !== undefined && ys[i] !== undefined) {
      results.push(xs[i] + ys[i]);
    }
  }

  return results

}
