/*

HackerRank 
(strange constraints on input and output. I had to convert string input to array.)

Consider an array of integers, where all but one of the integers occur in pairs. In other words, every element in the array occurs exactly twice except for one unique element.

Given an array, find and print the unique element.

Print the unique number that occurs only once in  on a new line.

INPUT: string of numbers seperated by space
OUTPUT: number

*/

function processData(input) {
    let arr = input.split(' ');
    let array = arr.map((char, index) => {
        if (index === 0) {
            let miniSplit = char.split('\n');
            return Number(miniSplit.pop());
        } else {
            return Number(char);
        }
    });
    let countObj = Object.create(null);
    array.forEach((char) => {
        if (countObj[char] === undefined) {
            countObj[char] = 1;
        } else {
            countObj[char]++;
        }
    });
    let result;
    Object.keys(countObj).forEach((char) => {
        if (countObj[char] === 1) {
           result = Number(char);  
        }           
    });
    return result;
} 