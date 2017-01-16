var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [k,v];
  var collision = false;

  this._storage.each(function(value, index, array) {
    if (i === index) {
      collision = true;
      array[i].push(tuple);
    }
  });
  if (collision === false) {
    let bucket = [];
    bucket.push(tuple);
    this._storage.set(i, bucket);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var retrieved = false;
  var result;
  this._storage.each(function(value, index, array) {
    if (i === index && Array.isArray(value)) {
      value.forEach(function(val, ind, arr){
        if (val[0] === k) {
          retrieved = true;
          result = val[1];
        }
      });
    }
  });
  if (retrieved) {
    return result;
  } 
  return null
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var removed;
  this._storage.each(function(value, index, array){
    if (index === i) {
      removed = value;
      array[i] = null;
    }
  });
  return removed;
};

/*

Based off of given helper functions below

*/

var LimitedArray = function(limit){
  var storage = [];

  var limitedArray = {};
  limitedArray.get = function(index){
    checkLimit(index);
    return storage[index];
  };
  limitedArray.set = function(index, value){
    checkLimit(index);
    storage[index] = value;
  };
  limitedArray.each = function(callback){
    for(var i = 0; i < storage.length; i++){
      callback(storage[i], i, storage);
    }
  };

  var checkLimit = function(index){
    if(typeof index !== 'number'){ throw new Error('setter requires a numeric index for its first argument'); }
    if(limit <= index){ throw new Error('Error trying to access an over-the-limit index'); }
  };

  return limitedArray;
};

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between the
// numbers 0 and `max`
var getIndexBelowMaxForKey = function(str, max){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};



