/*

Create a recursive fibonacci function that returns the nth integer

*/


let fibonacci = (n) => {
	if (n <= 1) {
		return 1;
	} else {
		return fibonacci(n - 1) + fibonacci(n - 2);
	}
};

console.log(fibonacci(5));