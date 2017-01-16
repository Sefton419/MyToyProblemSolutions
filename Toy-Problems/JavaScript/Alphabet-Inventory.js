/*

Alphabet Inventory

Given an alphabet and a string of text, write a method that tallies the count of each letter defined in said alphabet (case insensitive), then return the result of this tally.

Example

Input
alphabet: "aBc", text: "aabbccdd"

Output
"a:2,b:2,c:2"



*/

function alphaCount (alphabet, text) {

  var keysObj = {};
  // order array makes sure string is constructed in proper order
  var order = [];

  // first, create a object key library for given alphabet
  alphabet.toLowerCase().split('').forEach(function(val){
    if (keysObj[val] === undefined) {
      keysObj[val] = 0;
      order.push(val);
    }
  });

  // iterate through given text, see which characters match
  text.toLowerCase().split('').forEach(function(val){
    if (val in keysObj) {
      keysObj[val]++;
    }
  });

  // array to be returned when populated with results
  var answer = [];

  // iterate through objext in order, construct string
  for (var i = 0; i < order.length; i++) {
    var key = order[i];
    if (keysObj[key] !== 0) {
      answer.push('' + key + ':' + keysObj[key] + '')
    }
  }

  answer = answer.join(',');

  return answer || 'no matches';


};