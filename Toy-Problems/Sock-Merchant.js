

/*

HackerRank

John's clothing store has a pile of loose socks where each sock is labeled with an integer, denoting its color. He wants to sell as many socks as possible, but his customers will only buy them in matching pairs. Two socks are a single matching pair if their respective numbers match.

Given an array of socks, with each sock given a number representing it's color, how many pairs of socks can John sell?

*/



function main(array) {
  let pairsObj = array.reduce((prev, curr) => {
    if (prev[curr] === undefined) {
        prev[curr] = 1;
    } else {
        prev[curr]++;
    }
    return prev;
  }, {});
  return Object.keys(pairsObj).reduce((prev, key) => {
    let curr = pairsObj[key];
    if (curr % 2 === 0) {
      prev += curr/2;
    } else {
      prev += (curr-1)/2
    }
    return prev;
  }, 0);
}