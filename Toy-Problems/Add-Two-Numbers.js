

/*

Add Two Numbers

You are given two linked lists representing two non-negative numbers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8

*/




/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {

    // instantiate new linked list

    function List() {
    	this.head = null;
    	this.tail = null
    }

    List.prototype.ListNode = function (val){
        this.val = val;
        this.next = null;
    }

    List.prototype.addNode = function (val) {

	    let node = new this.ListNode(val);

	    if (this.head === null && this.tail === null) {
	    	this.head = node;
	    	this.tail = node;
	    } else {
	    	this.tail.next = node;
	    	this.tail = node;
	    }

    }

    let l3 = new List;

    // recurse function with parameters of both linked lists
    function recurse (list1, list2) {

        // if list1.next === null

        if (l3 === null) {
            l3 = new ListNode(list1.val + list2.val);
        } else {
            // take list1.val and add to list2.val
            l3.addNode(list1.val + list2.val);
        }

        // recurse (list1.next, list2.next)
        if (list1.next !== null) {
        	recurse(list1.next, list2.next);
        }

    }

    // call recurse (l1, l2)
    recurse(l1, l2)
    // NEXT, make all values in l3 single-digit



    // return l3
    return l3;

};