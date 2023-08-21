// https://leetcode.com/problems/binary-tree-maximum-path-sum/

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
 * @return {number}
 */

let maxPathSum = function(root) {
  let max = -Infinity

  // postorder traverse through the tree
  const postOrderTraverse = (node) => {
      if (!node) return 0
      // explore the left paths and find the max sum
      let leftMax = Math.max(0, postOrderTraverse(node.left))
      // explore the right paths and find the max sum
      let rightMax = Math.max(0, postOrderTraverse(node.right))
      // update max by comparing current max with sum of current node and left and right max sum
      max = Math.max(max, leftMax + rightMax + node.val)
      // return the max sum of the path (either left or right)
      return Math.max(leftMax, rightMax) + node.val
  }

  postOrderTraverse(root)
  return max
};

