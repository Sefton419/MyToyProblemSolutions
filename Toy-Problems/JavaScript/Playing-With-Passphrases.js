/*

Playing with passphrases

Everyone knows passphrases. One can choose passphrases from poems, songs, movies names and so on but frequently they can be guessed due to common cultural references. You can get your passphrases stronger by different means. One is the following:

choose a text in capital letters including or not digits and non alphabetic characters,

1) shift each letter by a given number but the transformed letter must be a letter (circular shift),
2) replace each digit by its complement to 9,
3) keep such as non alphabetic and non digit characters,
4) downcase each letter in odd position, upcase each letter in even position (the first character is in position 0),
5) reverse the whole result.

Example:

your text: "BORN IN 2015!", shift 1

1 + 2 + 3 -> "CPSO JO 7984!"

4 "CpSo jO 7984!"

5 "!4897 Oj oSpC"

With longer passphrases it's better to have a small and easy program. Would you write it?

*/

function playPass(s, n) {
  // your code
  let alphabetAsValues = {
  	1: 'A',
  	2: 'B',
  	3: 'C',
  	4: 'D',
  	5: 'E',
  	6: 'F',
  	7: 'G',
  	8: 'H',
  	9: 'I',
  	10: 'J',
  	11: 'K',
  	12: 'L',
  	13: 'M',
  	14: 'N',
  	15: 'O',
  	16: 'P',
  	17: 'Q',
  	18: 'R',
  	19: 'S',
  	20: 'T',
  	21: 'U',
  	22: 'V',
  	23: 'W',
  	24: 'X',
  	25: 'Y',
  	26: 'Z'
  }
  let alphabetAsKeys = {
    'A': 1,
    'B': 2,
    'C': 3,
    'D': 4,
    'E': 5,
    'F': 6,
    'G': 7,
    'H': 8,
    'I': 9,
    'J': 10,
    'K': 11,
    'L': 12,
    'M': 13,
    'N': 14,
    'O': 15,
    'P': 16,
    'Q': 17,
    'R': 18,
    'S': 19,
    'T': 20,
    'U': 21,
    'V': 22,
    'W': 23,
    'X': 24,
    'Y': 25,
    'Z': 26
  }
  let passphraseArray = s.split('');
  let passesErrorHandlingTest = char => {
  	// return false if does not satisfy requirements
  	if (char === ' ') {
      return false;
    }
  	if (/[^A-Za-z0-9_]/.test(char)) {
      return false;
    }
    return true;
  };
  // create password to comply with "shift letter by n"
  let PASSPHRASE = passphraseArray.map( (char, index) => {
    if (passesErrorHandlingTest(char)) {
      let newChar;
      // find what the key is of the letter
      if (char == Number(char)) {
        return 9 - char;
      }
      // order number of char by alphabetAsKeys
      let order = alphabetAsKeys[char.toUpperCase()];
      // add n to order
      order = order + n;
      if (order > 26) {
        order = Math.abs(order - 26);
      }
      // newChar = letter associated with new order
      newChar = alphabetAsValues[String(order)];
      // check to see if odd or even character
      // if index modulo 2 is not 0
      if (index % 2 !== 0) { 
        // newChar = toLowerCase(newChar)
        newChar = newChar.toLowerCase();
      } else {
        newChar = newChar.toUpperCase();
      }
      return newChar;
    }
    return char;
  }); 
  return PASSPHRASE.reverse().join('')
};

console.log(playPass('Yay! I solved this algorithm!', 12));











