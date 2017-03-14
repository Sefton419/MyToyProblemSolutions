
/*

In the Quicksort challenges, you sorted an entire array. Sometimes, you just need specific information about a list of numbers, and doing a full sort would be unnecessary. Can you figure out a way to use your partition code to find the median in an array?

Challenge 
Given a list of numbers, can you find the median?

*/

const processData = (input) => {
    //Enter your code here
    let sortedInput = input.sort((a, b) => {
        return a - b;
    });
    const middleIndex = Math.floor((sortedInput.length-1)/2);
    if (sortedInput.length % 2 === 0) {
        return (sortedInput[middleIndex] + sortedInput[middleIndex + 1]) / 2;
    } else {
        return sortedInput[middleIndex];
    }   
} 