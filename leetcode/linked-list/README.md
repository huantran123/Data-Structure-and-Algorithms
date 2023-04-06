# LeetCode Problems: Linked List

## Easy

  | Name | Code | Video Solution | Notes |
  | --- | --- | --- | --- |
  | [Reverse a Linked List](https://leetcode.com/problems/reverse-linked-list/) | [reverseList.js](./easy/reverseList.js) | https://youtu.be/G0_I-ZF0S38 | iterate through maintaining cur and prev; recursively reverse, return new head of list |
  | [Detect Cycle in a Linked List](https://leetcode.com/problems/linked-list-cycle/) | [cycleLinkedList.js](./easy/cycleLinkedList.js) | https://youtu.be/gBTe7lFR3vc | dict to remember visited nodes; two pointers at different speeds, if they meet there is loop |
  | [Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/) | [mergeTwoLists.js](./easy/mergeTwoLists.js) | https://youtu.be/XIdigk956u0 | insert each node from one list into the other |


## Medium

  | Name | Code | Video Solution | Notes |
  | --- | --- | --- | --- |
  | [Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/) | [productExceptSelf.js](./medium/productExceptSelf.js) | https://youtu.be/bNvIQI2wAjk | make two passes, first in-order, second in-reverse, to compute products |