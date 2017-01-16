var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    // add if there are no nodes
    let newNode = Node(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

  };

  list.removeHead = function(){
    let previousHeadValue = this.head.value;
    this.head = this.head.next;
    return previousHeadValue;
  };

  list.contains = function(target){

    let currNode = this.head;

    while (currNode !== null) {
      if (currNode.value === target) {
        return true;
      }
      currNode = currNode.next;
    }

    return false;

  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?

  addToTail is O(1), since we will only have one input, and one simple operation to run. No iteration. Function task does not grow according to input size.

  removeHead is also O(1), since we take no inputs and perform one simple task.

  contains is O(n), since the iterative while loop task has to run longer for every node it has to iterate through. However, the number of nodes iterated through does not grow based on input, since it is not a sorted linked list, it is entirely random in regards to how long it will take to find, or not find, the value.

 */