
/**

Array: Left Rotation
HackerRank

A left rotation operation on an array of size n shifts each of the array's elements k units to the left. For example, if left rotations are performed on array [1,2,3,4,5], then the array would become [3,4,5,1,2].

Given an array of integers and a number, k, perform k left rotations on the array. Then print the updated array as a single line of space-separated integers.

variables:
----------

a --> array of elements
k --> number of rotations

*/

// console.log(': ', );

function main(a, k) {
    let index = a.length;
    let i = 0;
    while (i < k) {
        index--;
        i++;
        if (index < 0)
            index = a.length - 1;
    }
    let result = [];
    let  ticker = 0, aIndex = 0, resultIndex;
    if (index > a.length - 1) 
        resultIndex = 0;
    else 
        resultIndex = index;
    while (ticker <= a.length - 1) {
        if (aIndex > a.length - 1)
            aIndex = 0;
        if (resultIndex > a.length - 1)
            resultIndex = 0; 
        let temp = a[aIndex];
        result[resultIndex] = temp;
        aIndex++;
        resultIndex++;
        ticker++;   
    }
    let resultString = result.reduce((result, curr) => {
        let newResult = `${result} ${curr}`;
        return newResult;
    });
    return resultString;    
}

console.log(main(['a','b','c','d','e','f','g','h','i'], 1));






