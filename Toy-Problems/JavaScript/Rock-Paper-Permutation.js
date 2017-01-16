
/*

Rock Paper Permutation

Given a number of rounds n, return all the possible rock-paper-scissors play possibilities for that number of rounds.

*/

function rockPaperPermutation (roundCount) {

  var rps = 'rps';
  var results = [];

  function recurse (pstr) {

    if (pstr.length === roundCount) {
      results.push(pstr);
      return;
    }

    for (var i = 0; i < rps.length; i++) {
      recurse (pstr + rps[i]);
    }

  }

  if (roundCount > 0) {
    recurse('');
  }

  return results;

};