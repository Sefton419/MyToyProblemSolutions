/*

Deep Equality

Write a function that, given two objects, returns whether or not the two are deeply equivalent–meaning the structure of the two objects is the same, and so is the structure of each of their corresponding descendants.

DO NOT use JSON.stringify.

*/


deepEquals = function(a, b){

  var test = false;

  function recursive (a, b) {

    if (Array.isArray(a)){
      for (var i = 0; i < a.length; i++){
        if (typeof a[key] === 'object'){
          recursive(a[key], b[key]);
        }
        if (a[i] !== b[i]){
          return;
        }
      }
    }

    if (Object.keys(a).length !== Object.keys(b).length) {
      return;
    }

    if (typeof a === 'object') {
      for (var key in a) {
        if (typeof a[key] === 'object'){
          recursive(a[key], b[key]);
        }
        if (a[key] !== b[key]) {
          return;
        }
      }
    }

  test = true;

  }

  recursive(a, b)
  return test;

};
