

/*

Add Two Numbers

You are given two linked lists representing two non-negative numbers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8

Output and inputs must be in the form of a linked list

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
     };

     List.prototype.ListNode = function (val){
         this.val = val;
         this.next = null;
     };

     List.prototype.addNode = function (val) {
         let node = new this.ListNode(val);
         if (this.head === null && this.tail === null) {
             this.head = node;
             this.tail = node;
         } else {
             this.tail.next = node;
             this.tail = node;
         }

     };

     let l3 = new List;

     let numbers = [];

     let tempNumber = '';

     // Create the complete numbers to add
     function materializeNumber (list) {
         // if next === null
         if (list === null)
             // don't recurse
             return;

         // make number string, save to variable
         tempNumber = tempNumber + String(list.val);
         materializeNumber(list.next);
     };

     materializeNumber(l1);
     numbers.push(tempNumber.split('').reverse('').join(''));
     tempNumber = '';
     materializeNumber(l2);
     numbers.push(tempNumber.split('').reverse('').join(''));


     let added = String(Number(numbers[0]) + Number(numbers[1]));


     function returnLinkedList (number) {
         // create linked list with number of digits
         let numArr = number.split('');

         while (numArr.length > 0) {
            let temp = numArr.pop();
             l3.addNode(Number(temp));
         }
     };

     returnLinkedList(added);

     // return l3
     return l3.head;

 };

/*

Test case:

 let one = {val: 1, next: {val: 2, next: {val: 5, next: null}}};
 let two = {val: 6, next: {val: 7, next: {val: 1, next: null}}};

 addTwoNumbers(one, two);

*/