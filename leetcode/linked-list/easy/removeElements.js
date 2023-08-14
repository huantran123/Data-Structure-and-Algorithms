// https://leetcode.com/problems/remove-linked-list-elements/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
// var removeElements = function(head, val) {
//     // Create pointer, parent, head variables
//     let currentNode = head
//     let prev = null
//     // Traverse over the linked list
//     while (currentNode !== null) {
//         // If current node val === val
//         if (currentNode.val === val) {
//             if (!prev) {
//                 // If removed node is first node, then update head
//                 head = head.next
//             } else {
//                 // Remove node: next of parent = next of currentNode
//                 prev.next = currentNode.next
//             }
//         } else {
//             // Update prev if not found
//             prev = currentNode
//         }
//         // update currentNode
//         currentNode = currentNode.next
//     }
//     return head
// };

var removeElements = function(head, val) {
  // Create pointer, parent, head variables
  let currentNode = head
  // Traverse over the linked list when current node and next node is not null
  while (currentNode && currentNode.next) {
      // If next node === val
      if (currentNode.next.val === val) {
          // next of current = next of next node, so the next node will be chopped off
          currentNode.next = currentNode.next.next
      } else {
          // If next node !== val, update current node = next node
          currentNode = currentNode.next
      }
  }
  // If the head had value === val
  if (head?.val === val) {
      // update the head to next of head
      head = head.next
  }
  return head
};