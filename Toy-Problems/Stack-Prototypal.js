
/*

Stack - Prototypal

implement a stack using an object with numberic keys in the prototypal style.

*/

var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);

  someInstance.storage = {};
  someInstance.count = 0;

  return someInstance;

};

var stackMethods = {}

stackMethods.push = function(val) {
  this.count++;
  this.storage[this.count] = val;
  return this.storage[this.count];
};

stackMethods.pop = function() {
  let order = Object.keys(this.storage);
  if (order.length === 0) {
    return 'empty stack';
  }
  let top = order.reduce((top, curr) => {
    let ind = Number(curr);
    if (top < Number(ind)) {
      return ind;
    }
    return top;
  });
  let index = String(top);
  let temp = this.storage[index];
  delete this.storage[index];
  this.count--;
  return temp;
};

stackMethods.size = function() {
  return Object.keys(this.storage).length;
};