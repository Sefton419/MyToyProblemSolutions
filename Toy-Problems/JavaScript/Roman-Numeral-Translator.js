/*

Roman Numeral Translator

Given a roman numeral as input, write a function that converts the roman numeral to a number and outputs it.

In a roman numeral, each character adds its value to the total. See the helper object DIGIT_VALUES for the correspondence between roman numeral characters and integers.
VI = 6 (5 + 1 = 6)
LXX = 70 (50 + 10 + 10 = 70)
MCC = 1200 (1000 + 100 + 100 = 1200)

When a smaller numeral appears before a larger one, it becomes a subtractive operation. You can assume only one smaller numeral may appear in front of larger one.
IV = 4 (5 – 1 = 4)
XC = 90 (100 – 10 = 90)
CM = 900 (1000 – 100 = 900)

You should return "null" on invalid input.

*/

function translateRomanNumeral (romanNumeral) {
  var DIGIT_VALUES = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  var add = [];
  var sub = [];
  var rnArr = romanNumeral.slice().split('');

  for (var i = 0; i < rnArr.length; i++) {
    var val = rnArr[i];
      if(!DIGIT_VALUES[val]) {
      return "null";
    }
  }

  for (var i = 1; i < rnArr.length; i++) {
    var cVal = rnArr[i];
    var pVal = rnArr[i - 1];

    if (DIGIT_VALUES[pVal] < DIGIT_VALUES[cVal]) {
      var tempVal = rnArr[i - 1];
      rnArr.splice(i - 1, 1);
      sub.push(tempVal);
    } 
  } 

  add = rnArr;

  var posNum = add.reduce(function(acc, curr) {
    acc = acc + DIGIT_VALUES[curr];
    return acc;
  }, 0);

  var negNum = sub.reduce(function(acc, curr) {
    acc = acc - DIGIT_VALUES[curr];
    return acc;
  }, 0);

  return (posNum) + (negNum);

};



