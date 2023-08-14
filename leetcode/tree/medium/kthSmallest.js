// https://leetcode.com/problems/kth-smallest-element-in-a-bst/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
let kthSmallest = function(root, k) {
  // defined an array to store all node values in ascending order
  const sortedValues = []

  // a recursive function to traverse inorder through the tree and add value to the array
  const inorderTraverse = (node) => {
      // if node has left child, continue traverse to the left branch
      if (node.left) {
          inorderTraverse(node.left)
      }
      // add the current node to that array, as it greater than left and less than right
      sortedValues.push(node.val)
      // If node has right child, continue to traverse to the right branch
      if (node.right) {
          inorderTraverse(node.right)
      }
  }

  // invoke the recursive function, start from the root
  inorderTraverse(root)
  // return the value in the array at index k - 1
  return sortedValues[k - 1]
};