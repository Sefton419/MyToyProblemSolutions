/*

HackerRank 

Alice wrote a sequence of words in CamelCase as a string of letters, having the following properties:

- It is a concatenation of one or more words consisting of English letters.
- All letters in the first word are lowercase.
- For each of the subsequent words, the first letter is uppercase and rest of the letters are lowercase.

Given a string, return the number of words in the string.

*/

function main(str) {
  return str.split('').reduce((prev, curr) => {
    if (curr.toUpperCase() === curr) {
      prev++;
    }
    return prev;
  }, 1);
}