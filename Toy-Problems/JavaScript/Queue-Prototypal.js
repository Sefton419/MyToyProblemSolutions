
/*

Queue - Prototypal

implement a queue using an object with numeric keys in the prototypal style.

*/

var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);

  someInstance.storage = {};
  someInstance.count = 0;

  return someInstance;

};

var queueMethods = {};

queueMethods.enqueue = function(val) {
  this.count++;
  this.storage[this.count] = val;
  return this.storage[this.count];
};

queueMethods.dequeue = function() {
  let order = Object.keys(this.storage);
  if (order.length === 0) {
    return 'empty queue';
  }
  let oldest = order.reduce((next, curr) => {
    let ind = Number(curr);
    if (ind < Number(next)) {
      return ind;
    }
    return next;
  }); 
  let index = String(oldest);
  let temp = this.storage[index];
  delete this.storage[index]
  return temp;
};

queueMethods.size = function() {
  return Object.keys(this.storage).length;
};