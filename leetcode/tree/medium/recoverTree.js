// https://leetcode.com/problems/recover-binary-search-tree/

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

let recoverTree = function(root) {
  // array of nodes in ascending order
  const nodes = []

  // traverse inorder through the tree and push nodes to the array
  const inorderTraverse = (node) => {
      node.left && inorderTraverse(node.left)
      nodes.push(node)
      node.right && inorderTraverse(node.right)
  }

  inorderTraverse(root)

  // after storing all the nodes to the array, traverse over the array
  for (let i = 0; i < nodes.length - 1; i++) {
      // detect if there's any place in the array where a node has value greater than the next
      if (nodes[i].val > nodes[i + 1].val) {
          // pointer index
          let index = i + 1
          // get the last index of node that has value less than the current node (nodes[i])
          while (nodes[index] && nodes[index].val < nodes[i].val) {
              index++
          }
          // while loop terminates at nodes[index] => nodes[index-1] is the node we're finding
          // now swap the values of current node and nodes[index] then stop the for loop
          let temp = nodes[i].val
          nodes[i].val = nodes[index-1].val
          nodes[index-1].val = temp
          break
      }
  }
};