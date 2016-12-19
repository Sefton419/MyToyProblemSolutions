/**

Reverse Integer



Reverse digits of an integer.

Example1: x = 123, return 321
Example2: x = -123, return -321

 * @param {number} x
 * @return {number}
 */
 
var reverse = function(x) {
    let result;
    let arr = String(x).split('');
    let hasNegativeSign = arr.includes('-');
    if (hasNegativeSign) {
        arr.shift();
        result = -1 * Number(arr.reverse().join(''));
    } else {
        result = Number(arr.reverse().join(''));
    }
    return result; 
};