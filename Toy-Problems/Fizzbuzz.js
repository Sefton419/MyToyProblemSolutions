/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    
    let results = [];
    
    for (let i = 1; i <= n; i++) {
        
        let previousResultsLength = results.length;
        
        if (i % 3 === 0 && i % 5 === 0) {
            results.push('FizzBuzz');
        } else if (i % 3 === 0) {
            results.push('Fizz');
        } else if (i % 5 === 0) {
            results.push('Buzz');
        }
        
        if (results.length === previousResultsLength) {
            results.push(String(i));
        }
        
    }
    
    return results;
    
};