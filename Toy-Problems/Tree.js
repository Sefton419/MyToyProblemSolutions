
/*

Tree

From scratch, write an implementation of a fully-functioning breadth first tree, with methods for addChild and contains.
Bonus: use recursion.

*/

var treeMaker = function(value){
  var newTree = Object.create(treeMaker.methods);
  newTree.value = value;
  newTree.children = [];
  return newTree;
};

treeMaker.methods = {};

treeMaker.methods.addChild = function(value){
  var node = treeMaker(value);
  this.children.push(node);
}

treeMaker.methods.contains = function(value) {
  var hasValue = false;
  var recurse = function(node) {
    if (node.value === value)
      hasValue = true;

    for (var i = 0; i < node.children.length; i++) {
      var child = node.children[i];
      
      if (child.value === value) 
        hasValue = true;
        
      recurse(child);
    }
}
  
  recurse(this);
  return hasValue;

}