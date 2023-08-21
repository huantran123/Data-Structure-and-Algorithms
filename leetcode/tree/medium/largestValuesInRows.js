// https://leetcode.com/problems/find-largest-value-in-each-tree-row/

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
 * @return {number[]}
 */

var largestValues = function(root) {
  // create an array of arrays to store nodes on each row
  let rows = []

  // recursive function to preorder traverse through the tree
  const preOrderTraverse = (node, level) => {
      // return if tree is empty
      if (!node) return
      // if there's no value at the level index, create a new array of the current node value
      if (!rows[level]) {
          rows[level] = [node.val]
      // if there's an array at the level index, add the current node value to that array
      } else {
          rows[level].push(node.val)
      }
      // if current node has left child, continue traverse left
      node.left && preOrderTraverse(node.left, level + 1)
      // if current node has right child, continue traverse right
      node.right && preOrderTraverse(node.right, level + 1)
  }
  // start preorder traverse, from the root and at level 0
  preOrderTraverse(root, 0)
  // after traversing, each element in the rows array is an array of nodes' value
  // return a new array with each element is the max value of each row in the rows array
  return rows.map(row => Math.max(...row))
};

