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

// Another way using while loop:
// var mergeTwoLists = function(list1, list2) {
//     const result = new ListNode();
//     let merged = result;

//     while (list1 && list2) {
//         if (list1.val <= list2.val) {
//             merged.next = list1;
//             list1 = list1.next
//         } else {
//             merged.next = list2;
//             list2 = list2.next
//         }
//         merged = merged.next;
//     }

//     merged.next = list1 || list2;

//     return result.next;
// }