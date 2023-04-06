// https://leetcode.com/problems/linked-list-cycle/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var cycleLinkedList = function(head) {
  let fastPointer = head;
  let slowPointer = head;
  while (fastPointer !== null && fastPointer.next !== null) {
      slowPointer = slowPointer.next;
      fastPointer = fastPointer.next.next;
      if (slowPointer === fastPointer) {
          return true;
      }
  }
  return false;
};