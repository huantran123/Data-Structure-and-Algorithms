// https://leetcode.com/problems/reverse-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// var reverseList = function(head) {
//     if (!head) return head;
//     var next = arguments[1] ? arguments[1] : null;
//     if (head.next === null) {
//         return new ListNode(head.val, next);
//     }
//     var newList = new ListNode(head.val, next);
//     var result = reverseList(head.next, newList);
//     return result;
// };

// var reverseList = function(head) {
//     var result = new ListNode();
//     var currentNode = head;

//     while (currentNode) {
//         var keyNode = currentNode;
//         currentNode = currentNode.next;
//         keyNode.next = result.next;
//         result.next = keyNode;
//     }

//     return result.next;
// };

var reverseList = function(head) {
  if (!head) return head;

  let prev = null, curr = head, next
  while (curr) {
      next = curr.next
      curr.next = prev
      prev = curr
      curr = next
  }

  return prev
}