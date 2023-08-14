// https://leetcode.com/problems/unique-binary-search-trees-ii/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
let generateTrees = function(n) {
  if (n === 0) return []

  // recursion function to generate trees array
  const generateTreesRecursion = (start, end) => {
      const trees = []

      // base case: when start > end
      if (start > end) {
          trees.push(null)
          return trees
      }

      // iterate from start to end
      for (let i = start; i <= end; i++) {
          // generate left sub trees with number less that current i
          const leftSubTrees = generateTreesRecursion(start, i - 1)
          // generate right sub trees with number greater that current i
          const rightSubTrees = generateTreesRecursion(i + 1, end)

          // iterate over left and right sub trees array to make combinations
          for (let leftSubTree of leftSubTrees) {
              for (let rightSubTree of rightSubTrees) {
                  // each combination (tree) has a root node
                  const root = new TreeNode(i)
                  root.left = leftSubTree
                  root.right = rightSubTree
                  trees.push(root)
              }
          }
      }
      return trees
  }
  return generateTreesRecursion(1, n)
};