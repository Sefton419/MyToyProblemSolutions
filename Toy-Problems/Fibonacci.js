/*

Create a recursive fibonacci function that returns the nth integer

*/

let result = [];
let fibonacci = (n) => {
	if (n <= 1) {
		return result.push(1);
	} else {
		return result.push(fibonacci(n - 2) + fibonacci(n - 1));
	}
};

console.log(fibonacci(5));