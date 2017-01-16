

/*

HackerRank

John's clothing store has a pile of loose socks where each sock is labeled with an integer, denoting its color. He wants to sell as many socks as possible, but his customers will only buy them in matching pairs. Two socks are a single matching pair if their respective numbers match.

Given an array of socks, with each sock given a number representing it's color, how many pairs of socks can John sell?

*/



function main(array) {
  let pairsObj = array.reduce((obj, curr) => {
    if (obj[curr] === undefined) {
        obj[curr] = 1;
    } else {
        obj[curr]++;
    }
    return obj;
  }, {});
  return Object.keys(pairsObj).reduce((num, key) => {
    let curr = pairsObj[key];
    if (curr % 2 === 0) {
      num += curr/2;
    } else {
      num += (curr-1)/2
    }
    return num;
  }, 0);
}