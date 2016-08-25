/*

Linked List

var should = chai.should();

describe("LinkedList", function() {
  it('should exist', function(){
    should.exist(LinkedList);
  });

  it('should be a function', function(){
    LinkedList.should.be.a.Function;
  });

  it("should be implemented using the pseudoclassical pattern", function(){
    LinkedList.prototype.addToTail.should.be.a.Function;
    LinkedList.prototype.removeHead.should.be.a.Function;
    LinkedList.prototype.contains.should.be.a.Function;
  });
  
  it("should accept an initial value", function(){
    var list = new LinkedList(1);
    list.tail.value.should.equal(1);
    list.head.value.should.equal(1);
    list.addToTail(2);
    list.head.next.value.should.equal(2);
  })

  it("should designate a new tail when new nodes are added", function(){
    var list = new LinkedList();
    list.addToTail(4);
    list.tail.value.should.equal(4);
    list.addToTail(5);
    list.tail.value.should.equal(5);
  });

  it("should remove the head from the list when removeHead is called", function(){
    var list = new LinkedList();
    list.addToTail(4);
    list.addToTail(5);
    list.head.value.should.equal(4);
    list.removeHead();
    list.head.value.should.equal(5);
  });

  it("should remove the head and tail from the list when removeHead is called and there is only one element present", function(){
    var list = new LinkedList(4);
    list.head.value.should.equal(4);
    list.tail.value.should.equal(4);
    list.removeHead();
    should.not.exist(list.head);
    should.not.exist(list.tail);
  });

  it("should contain a value that was added", function(){
    var list = new LinkedList(4);
    list.addToTail(5);
    list.contains(4).should.be.true;
    list.contains(5).should.be.true;
    list.contains(6).should.be.false;
  });

  it("should not contain a value that was removed", function(){
    var list = new LinkedList();
    list.addToTail(4);
    list.addToTail(5);
    list.removeHead();
    list.contains(4).should.be.false;
  });

});

*/


var LinkedList = function (initialValue) {
 // Write your code here
 
 if (!!initialValue) {

  this.node = {
    value: initialValue,
    next: null
  };
  
  this.head = this.node;
  this.tail = this.node;
  
  // this.head.next = this.tail;
  
 } else {
   console.log('inside else',initialValue)
   this.head = null;
   this.tail = null;
 }
  
};
 
LinkedList.prototype.Node = function (value) {
  this.value = value;
  this.next = null;
}
 
 // etc ...
  
LinkedList.prototype.addToTail = function(value) {
  
  if (this.head === null && this.tail === null) {
    var node = new this.Node(value);
    this.head = node;
    this.tail = node;
  
    this.head.next = node;
    
  } else {
    
  var node = new this.Node(value, null);
  this.tail.next = node;
  this.tail = this.tail.next
  
  }
      
}
  
LinkedList.prototype.removeHead = function(value) {
  if (this.head === this.tail) {
    this.head = null;
    this.tail = null;
    return
  }
  
  var temp = this.head;
  this.head = temp.next;

}
  
  LinkedList.prototype.contains = function(value) {
    
    var isItThere = false;
    
    var recurse = function (node) {
      
      if (node.value === value) 
      return isItThere = true;
      
      if (node.next === null) 
      return;
      
      if (node.value !== value) 
      recurse(node.next);
      
    }
    
    recurse(this.head);
    return isItThere;
    
  }
