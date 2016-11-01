
/*

Queue - Functional

implement a queue using an object with numberical keys in the functional style.

*/

var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  // Implement the methods below
  someInstance.enqueue = function(value){
    count++;
    storage[count] = value;
    return storage[count];
  };

  someInstance.dequeue = function(){
    let order = Object.keys(storage);

    if (order.length === 0) {
      return 'empty queue';
    }
    let oldest = order.reduce( (lowest, curr) => {
      let ind = Number(curr);
      if (ind < lowest) {
        return ind;
      } else {
        return lowest;
      }
    });
    let key = String(oldest);
    let temp = storage[key];
    delete storage[key];
    return temp;
  };

  someInstance.size = function(){
   return Object.keys(storage).length;
  };
  
  return someInstance;
};