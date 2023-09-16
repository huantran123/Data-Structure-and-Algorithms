// https://leetcode.com/problems/sort-list/

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

let sortList = function(head, tail = null) {
  if (!head || !head.next) return head

  let midNode = findMidNode(head)
  // leftList should start from head to midNode(->null)
  let leftList = head
  // rightList should start from midNode.next to tail(->null)
  let rightList = midNode.next
  // remove right side of midNode, so left list will be from head to midNode
  midNode.next = null

  // DIVIDE each list into smaller pieces to handle
  leftList = sortList(leftList)
  rightList = sortList(rightList)

  // COMBINE the 2 sorted sublist into a big sorted list and return
  return mergeTwoLists(leftList, rightList)
};

// find the middle node of the given list
let findMidNode = function(node) {
  let fast = node.next     // fast will go 2 steps at a time
  let slow = node          // slow will go 1 step at a time

  // while loop will break until fast is null
  // wherever slow is at, that is mid node
  while (fast && fast.next) {
      fast = fast.next.next
      slow = slow.next
  }

  return slow
}

// merge 2 sorted lists
let mergeTwoLists = function(list1, list2) {
  let mergedList = new ListNode()
  let curNode = mergedList

  while(list1 && list2) {
      if (list1.val < list2.val) {
          curNode.next = list1
          list1 = list1.next
      } else {
          curNode.next = list2
          list2 = list2.next
      }
      curNode = curNode.next
  }
  if (list1) curNode.next = list1
  if (list2) curNode.next = list2
  return mergedList.next
}