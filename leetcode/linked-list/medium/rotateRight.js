// https://leetcode.com/problems/rotate-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
let rotateRight = function(head, k) {
  // after rotating, new head would be kth node
  // create a count to track when pointer reaches (k-1)th node
  let count = 0
  // create 2 pointers at the head of the list
  let newHead = head
  let pointer = head

  // get length of list
  let len = getLength(head)
  // if k > len then make k within the range
  k = k % len

  // if list only has 1 or 2 node or k = 0, return current head
  if (len < 2 || k === 0) return head

  // looping until pointer reaches the last node of the list
  while (pointer.next) {
      // if pointer reaches the (k-1)th node
      if (count === len - k - 1) {
          // current (k-1)th node would be the tail
          let tail = pointer
          // move pointer to the next node (kth node)
          pointer = pointer.next
          // chop off the link between the tail and the next node
          tail.next = null
          // pointer is at kth node (new head), so new head to be the k-th node
          newHead = pointer

      // if pointer hasn't reached (k-1)th node or already past it, move pointer to next node
      } else {
          pointer = pointer.next
      }
      // increment count
      count++
  }

  // after pointer reaches the last node of the list, connect it to the old head
  pointer.next = head

  // return the new head
  return newHead
};

// Time: O(n), Space: O(1)
const getLength = function (node) {
  let curNode = node
  let count = 0
  while (curNode) {
      count++
      curNode = curNode.next
  }
  return count
}