var Tree = function(value){
  var newTree = Object.create(treeMethods);

  newTree.value = value;
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  let result = false;
  let recurse = (node) => {
    if (node.value === target) {
      result = true;
    }
    for (let i = 0; i < node.children.length; i++) {
      recurse(node.children[i]);
    }
  }
  recurse(this);
  return result;
};


/*
 * Complexity: What is the time complexity of the above functions?

addChild is O(1) because one value is added, and one operation will always commence

contains is O(n) because the recursive function's iterative increases proportional to the number of nodes on tree.

 */