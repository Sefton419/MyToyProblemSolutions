/*

Common Characters

Write a function that accepts two strings as arguments, and returns only the characters that are common to both strings.

Your function should return the common characters in the same order that they appear in the first argument. Do not return duplicate characters and ignore whitespace in your returned string.

Example: commonCharacters('acexivou', 'aegihobu')

Returns: 'aeiou'

*/

commonCharacters = function(string1, string2){

  var results = [];
  var keysObj = {};

  st2 = string1.split(' ').join('')
  st1 = string2.split(' ').join('')

  // create object of value keys for string 2
  for (var i = 0; i < st1.length; i++){
    var char = st1[i];
    if (!keysObj[char]){
      keysObj[char] = 1;
    } else {
      keysObj[char]++;
    }
  }

  // iterate through string1 and see if val is in obj

  for (var i = 0; i < st2.length; i++){
  // if so, put in results arr
    var chr = st2[i];
    if (keysObj[chr]) {
      results.push(chr)
       keysObj[chr] = undefined;
    }
  }

  return results.join('')

};

