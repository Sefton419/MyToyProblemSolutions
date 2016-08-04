
/*
From Codewars.com

Your friend won't stop texting his girlfriend. It's all he does. All day. Seriously. The texts are so mushy too! The whole situation just makes you feel ill. Being the wonderful friend that you are, you hatch an evil plot. While he's sleeping, you take his phone and change the autocorrect options so that every time he types "you" or "u" it gets changed to "your sister."

Write a function called autocorrect that takes a string and replaces all instances of "you" or "u" (not case sensitive) with "your sister" (always lower case).

Return the resulting string.

Here's the slightly tricky part: These are text messages, so there are different forms of "you" and "u".

For the purposes of this kata, here's what you need to support:

"youuuuu" with any number of u characters tacked onto the end

"u" at the beginning, middle, or end of a string, but NOT part of a word

"you" but NOT as part of another word like youtube or bayou

*/

function autocorrect(input) {

  const REPLACEMENT = 'your sister';

  let inputArray = input.split(' ');
  let lastWord = inputArray[inputArray.length - 1];
  let punctuationMark = null;

  if(lastWord.split('')[lastWord.length-1] === '!'
  || lastWord.split('')[lastWord.length-1] === '?') {
    let temp = lastWord.split('');
    punctuationMark = temp.pop();
    lastWord = temp.join('');
    inputArray[inputArray.length - 1] = lastWord;
  }

  for (var i = 0; i < inputArray.length; i++) {

    let word = inputArray[i];

    let splitWord = word.toLowerCase().split('u');

    if (splitWord.includes('yo')) {
      if (splitWord.every(function(val) {
      return val === "" || val === 'yo';
      })) {
        let objKeys = {yo: 0};
        splitWord.forEach(function(val){
          console.log('forEach: ', val)
          if (val === 'yo') {
            objKeys.yo++;
          }
        })
      if (objKeys.yo === 1) {
        inputArray[i] = REPLACEMENT;
      }
      }
    }
    if (word.toLowerCase() === 'u') {
      inputArray[i] = REPLACEMENT;
    }
  }

  let result = inputArray.join(' ');

  if (punctuationMark !== null) {
    result = result + punctuationMark
    return result;
  } else {
    return result;
  }

};

autocorrect('hello there sexy, how are you')