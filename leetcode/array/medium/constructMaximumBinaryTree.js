// https://leetcode.com/problems/maximum-binary-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

// Divide & Conquer - Time: O(nlogn) - Space: O(n)
let constructMaximumBinaryTree = function(nums) {
  // If nums array is empty, return a null node
  if (nums.length === 0) return null

  // Find the max value in nums array
  let max = Math.max(...nums)
  // Find the index of max value
  let indexOfMax = nums.indexOf(max)
  // Create a node for max value
  let curNode = new TreeNode(max)
  // Left child of current node is the subarray on the left of max
  curNode.left = constructMaximumBinaryTree(nums.slice(0, indexOfMax))
  // Right child of current node is the subarray on the right of max
  curNode.right = constructMaximumBinaryTree(nums.slice(indexOfMax + 1))

  return curNode
};