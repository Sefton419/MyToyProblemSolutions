/*

Stack - Functional

implement a stack using an object with numeric keys in the functional style.

*/

var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  // Implement the methods below
  someInstance.push = function(value){
    count++;
    storage[count] = value;
    return storage[count];
  };

  someInstance.pop = function(){
    var order = Object.keys(storage);

    if (order.length === 0) {
      return 'empty stack';
    }
    var top = order.reduce((top, curr) => {
      var ind = Number(curr);
      if (ind > Number(top)) {
        return ind;
      } else {
        return top;
      }
    });
    count--;
    var index = String(top);
    var temp = storage[index];
    delete storage[index];
    return temp;
  };

  someInstance.size = function(){
    return Object.keys(storage).length;
  };
  
  return someInstance;
};