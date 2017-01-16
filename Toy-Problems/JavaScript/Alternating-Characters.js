/*

Alternating Characters

Hacker Rank

Shashank likes strings in which consecutive characters are different. For example, he likes ABABA, while he doesn't like ABAA. Given a string containing characters A and B  only, he wants to change it into a string he likes. To do this, he is allowed to delete the characters in the string.

Sample Input

5
AAAA
BBBBB
ABABABAB
BABABA
AAABBB

Sample Output

3
4
0
0
4

** Bonus: Use recursive function

*/

function processData(input) {
    const recurse = (strArr, i) => {
        if (strArr.length === 1) 
            return 0;
        if (i === strArr.length - 1) 
            return 0;
        if (strArr[i] === strArr[i + 1]) {
            strArr.splice(i + 1, 1);
            return recurse(strArr, i) + 1;
        } else {
            i++;
            return recurse(strArr, i);
        }
    };
    let deletions = input.map((string, index) => {
        let stringArray = string.split('');
        return recurse(stringArray, 0);
    });
    return deletions
} 







