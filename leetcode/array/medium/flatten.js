// https://leetcode.com/problems/flatten-binary-tree-to-linked-list/

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
 * @return {void} Do not return anything, modify root in-place instead.
 */

let flatten = function(root) {
  // base case:
  // if root is null, return null
  if (!root) return null
  // if root is a leaf node, return root
  if (!root.left && !root.right) return root

  // find the right most node of the left branch
  // if there's no left child, right most node of left branch is root
  const rightMostOfLeft = flatten(root.left) || root
  // find the right most node of right branch
  // return a node if root has right child, return null if root doesn't have right child
  const rightMostOfRight = flatten(root.right)

  const right = root.right        // temporarily save right child (former right child)
  root.right = root.left          // reassign right child to be the left child (new right child is the former left child)
  root.left = null                // remove left child (new left child is null)
  rightMostOfLeft.right = right   // assign right child of right most node of former left branch to be the former right child

  // if the current root originally has a right child, return the right most node of right branch
  // otherwise if current root originally doesn't have a right child, return the right most node of left branch
  // (because after reassigning right branch, right most node of left branch becomes right most node of right branch)
  return rightMostOfRight !== null ? rightMostOfRight : rightMostOfLeft
};