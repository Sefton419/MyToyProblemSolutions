/*

Min-Max-Sum

HackerRank Algorithm

Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

*/

function main(numbers) {    
  let max = 0, min = Number.MAX_SAFE_INTEGER, excludedIndex = 0;
  while (excludedIndex <= numbers.length - 1) {
    let sum = numbers.reduce((prev, curr, index) => {
      if (index !== excludedIndex) {
          prev += curr;
      }
      return prev;
    }, 0);
    if (sum > max) {
      max = sum;
    }
    if (sum < min) {
      min = sum;
    }
    excludedIndex++;
  }
  return `${min} ${max}`;
};