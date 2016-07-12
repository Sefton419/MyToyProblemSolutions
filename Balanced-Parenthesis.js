/*

Balanced Parenthesis

Given a string, return true if it contains balanced parenthesis ()

*/

function isBalanced (string) {

  var open = 0
  var closed = 0;

  for (var i = 0; i < string.length; i++) {
    if (string[i] === '(' && open >= closed){
      open++;
    } else if (string[i] === ')' && open > closed) {
      closed++
    }
  }

  if (open === closed) {
    return true;
  } else {
    return false;
  }

}