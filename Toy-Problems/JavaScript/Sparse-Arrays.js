/*

Sparse Arrays

HackerRank: Data Structures

There are n strings. Each string's length is no more than 20 characters. There are also Q queries. For each query, you are given a string, and you need to find out how many times this string occurred previously.

Sample Input

4
aba
baba
aba
xzxb
3
aba
xzxb
ab

Sample Output

2
1
0

Explanation

Here, "aba" occurs twice, in the first and third string. The string "xzxb" occurs once in the fourth string, and "ab" does not occur at all.

*/

function processData(input) {
    //Enter your code here
    //console.log(': ', );   
    let inputArray = input.split('\n');
    const sn = inputArray.shift();
    const strings = inputArray.splice(0, sn);
    const qn = inputArray.shift();
    const queryStrings = inputArray;

    // make object of all strings
    const archive = strings.reduce((obj, curr) => {
        if (obj[curr]) { 
            obj[curr]++;
        } else { 
            obj[curr] = 1;
        }
        return obj;
    }, {}); 

    // create array of the results for each query 
    const queries = queryStrings.map( key => {
        let curr = archive[key];
        if (curr === undefined) {
            return 0;    
        } else {
            return curr;
        }                      
    });

    // prepare result as a string seperated by '\n'
    const result = queries.reduce((result, curr) => {
        return`${result}\n${curr}`;
    });
    console.log(result);  
};




