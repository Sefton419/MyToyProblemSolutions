
/*

Prime Tester
A prime number is an integer greater than 1 that has no divisors other than itself and 1. Write a function that accepts a number and returns true if it’s a prime number, false if it’s not. The grader is looking at the efficiency of your solution (number of operations) as well as correctness! 

*/

function primeTester (n) {
  // Write your code here, and
  // return your final answer.
  
  if (n === 2 || n === 3) return true;
  if (n === 1) return false;
  if (n % 2 === 0) return false;
  if (n % 3 === 0) return false;
  
  var x = 5;
  var y = 2;
  
  while (x * x <= n) {
  	if (n % x === 0) {
  		return false;
  	}
  	x += y;
  	y = 6 - y;	
  }
  
  return true;
  
};