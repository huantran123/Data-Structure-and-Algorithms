// https://leetcode.com/problems/validate-binary-search-tree/description/

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
 * @return {boolean}
 */

var isValidBST = function(root) {
  let queue = [];
  queue.push(root);

  // Using BFS to check if the current node has valid left and right subtrees
  while(queue.length) {
      let currentNode = queue.shift();

      // Check if left subtree of a node contains only nodes with keys less than the node's key
      if (currentNode.left) {
          if (!checkLeftSubTree(currentNode, currentNode.left)) {
              return false;
          }
          queue.push(currentNode.left)
      }

      // Check if right subtree of a node contains only nodes with keys greater than the node's key
      if (currentNode.right) {
          // Check if right subtree is a BST
          if (!checkRightSubTree(currentNode, currentNode.right)) {
              return false;
          }
          queue.push(currentNode.right)
      }
  }
  return true;
};

// Using DFS to check if the left side of the current node contains any node that is greater than the current node
var checkLeftSubTree = function(node, currentNode) {
  if (currentNode.val >= node.val) {
      return false;
  }
  let isBinaryTree = true;
  if (currentNode.left) {
      isBinaryTree = isBinaryTree && checkLeftSubTree(node, currentNode.left)
  }
  if (currentNode.right) {
      isBinaryTree = isBinaryTree && checkLeftSubTree(node, currentNode.right)
  }
  return isBinaryTree;
}

// Using DFS to check if the right side of the current node contains any node that is smaller than the current node
var checkRightSubTree = function(node, currentNode) {
  if (currentNode.val <= node.val) {
      return false;
  }
  let isBinaryTree = true;
  if (currentNode.left) {
      isBinaryTree = isBinaryTree && checkRightSubTree(node, currentNode.left)
  }
  if (currentNode.right) {
      isBinaryTree = isBinaryTree && checkRightSubTree(node, currentNode.right)
  }
  return isBinaryTree;
}


// Another way:

var isValidBST2 = function(root, min, max) {
  // Base case: root is null
  if (!root) {
    return true;
  }

  // If the value of the root >= min or <= max, then return false
  if (root.val <= min || root.val >= max) {
    return false;
  }

  // Recursively call the function for the left and right subtree
  return isValidBST2(root.left, min, root.val) && isValidBST2(root.right, root.val, max)
}