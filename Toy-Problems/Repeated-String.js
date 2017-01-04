
/*

Repeated String

HackerRank

Lilah has a string of lowercase English letters that she repeated infinitely many times.
Given an integer find and print the number of letter a's in the first letters of Lilah's infinite string.

*/

function repeatedString(s, n) {
  const strLength = s.length;
  const strArray = s.split('');
  const letter_a_count = strArray.reduce((count, curr) => {
    if (curr === 'a') {
      count++;
    }
    return count;
  }, 0);
  const fullRevolutions = Math.floor(n/strLength);
  const leftoverIndex = (n % strLength) - 1;
  const last_pass_a_count = strArray.reduce((count, curr, currIndex) => {
    if (curr !== 'a') {
      return count;
    }
    if (n >= strLength) {
      if (currIndex <= leftoverIndex) {
        count++;
      }
    } else {
      if (n >= currIndex) {
        count++;
      }
    }
    return count;
  }, 0);
  if (n >= strLength) {
    return letter_a_count * fullRevolutions + last_pass_a_count;
  } else {
    return last_pass_a_count;
  }
};




