
/*

Queue - Functional Shared

implement a queue using an object with numeric keys in the functional shared style.

*/

var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    storage: {},
    count: 0
  };
  
  someInstance.enqueue = queueMethods.enqueue;
  someInstance.dequeue = queueMethods.dequeue;
  someInstance.size = queueMethods.size;

  return someInstance;
};

var queueMethods = {

  enqueue: function(val) {
    this.count++;
    this.storage[this.count] = val;
    return this.storage[this.count];
  },

  dequeue: function() {
    let order = Object.keys(this.storage);

    if (order.length === 0) {
      return 'empty queue';
    }

    let oldest = order.reduce((oldest, curr) => {
      if (oldest > curr) {
        return curr;
      }
      return oldest;
    });
    let index = String(oldest);
    let temp = this.storage[index];
    delete this.storage[index];
    return temp;
  },

  size: function() {
    return Object.keys(this.storage).length;
  }

};