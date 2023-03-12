// https://leetcode.com/problems/partition-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  //create the list for the front part
  var frontList = new ListNode(0);
  //create a list for the back part
  var backList = new ListNode(0);
  // pointer for the given array (current)
  var current = new ListNode(head.val, head.next);
  //create pointer for the front and back
  var front = frontList;
  var back = backList;

  // while current has the value
  while (head) {
      // if the current value < x
      if (head.val < x) {
          //add the current to the front, move front pointer to the next node of the front
          front.next = current;
          front = current;
      } else {
          // otherwise current value >= x
        //add the current to the back, move the back pointer to next node of the back
          back.next = current;
          back = current;
      }
        
     //update the current node to the next
      if (head.next) {
          current.next = new ListNode(head.next.val, head.next.next)
          current = current.next;
      }
      
      head = head.next;
  }

  //combine the front list with the back list
  front.next = backList.next;
  // cut the tail of the back list
  back.next = null;
  //return the modified list
  return frontList.next;
};