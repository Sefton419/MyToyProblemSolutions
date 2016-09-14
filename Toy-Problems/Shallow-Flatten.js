function flatten (array) {
  // Write your code here, and
  // return your final answer.
  
  let results = [];
  
  // recurse (arr)
  function recurse (arr) {
    // iterate through array
    for (var i = 0; i < arr.length; i++) {
      let val = arr[i];
      // if value is not array
      if (!Array.isArray(val)) {
        // push to results
        results.push(val);
      }
      // if value is array
      if (Array.isArray(val)) {
        // recurse(value)
        recurse(val);
      }
    }
  };
  
  recurse (array);
  return results;
      
}