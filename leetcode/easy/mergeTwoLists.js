// https://leetcode.com/problems/merge-two-sorted-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  var result = new ListNode();
  if (list1 === null) {
      return list2;
  }
  if (list2 === null) {
      return list1;
  }
  if (list1.val <= list2.val) {
      result.val = list1.val;
      result.next = mergeTwoLists(list1.next, list2);
  } else {
      result.val = list2.val;
      result.next = mergeTwoLists(list1, list2.next);
  }
  return result;
};