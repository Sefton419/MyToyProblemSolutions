
/*

Stack - Functional Shared

implement a stack using an object with numberical keys in the functional shared style.

*/


var Stack = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    storage: {},
    count: 0
  };
  
  someInstance.push = stackMethods.push;
  someInstance.pop = stackMethods.pop;
  someInstance.size = stackMethods.size;

  return someInstance;
};

var stackMethods = {

  push: function(val) {
    this.count++;
    this.storage[this.count] = val;
    return this.storage[this.count] = val;
  },

  pop: function() {
    let order = Object.keys(this.storage);
    if (order.length === 0) {
      return 'empty stack'
    }
    let largest = order.reduce((top, curr) => {
      let ind = Number(curr);
      if (top < ind) {
        return ind;
      }
      return top;
    });
    let index = String(largest);
    let temp = this.storage[index];
    delete this.storage[index];
    this.count--;
    return temp;
  },

  size: function() {
    return Object.keys(this.storage).length;
  }
};