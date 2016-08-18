/*

Eventing Library

Example usage:
var obj = mixEvents({ name: 'Alice', age: 30 });
obj.on('ageChange', function(){ // On takes an event name and a callback function
  console.log('Age changed');
});
obj.age++;
obj.trigger('ageChange'); // This should call our callback! Should log 'age changed'.

Caveats:
- mixEvents should return the original object it was passed after extending it.
- If we repeatedly call .on with the same event name, it should
continue to call the old function as well. That is to say, we can have multiple
listeners for an event.
- If obj.trigger is called with additional arguments, pass those to the
listeners.
- It is not necessary to write a way to remove listeners.

*/

var mixEvents = function(obj) {
  //Your code here
  var events = {};
  
  obj.trigger = function (event) {
    
    var args = Array.prototype.slice.call(arguments);
    var eve = args.shift();
    var params = args;
    
    if (events[eve] === undefined) {
      return
    }
    for (var i = 0; i < events[eve].length; i++) {
      events[eve][i](...params);
    }
  };
  
  // Register a callback to be fired on this event.
  obj.on = function (event, callback) {
    //Your code here
    if (events[event] === undefined) {
      events[event] = [callback];
    } else {
      events[event].push(callback);
    }
    
  };

  return obj;
};




