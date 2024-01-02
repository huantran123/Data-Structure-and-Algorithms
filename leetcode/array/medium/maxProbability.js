// https://leetcode.com/problems/path-with-maximum-probability/

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start_node
 * @param {number} end_node
 * @return {number}
 */

let maxProbability = function(n, edges, succProb, start_node, end_node) {
  // smallest value is 0, so we need to fill in the result array with 0's
  const result = {}
  for (let i = 0; i < n; i++) {
      result[i] = 0
  }
  // update the result at start node as 1 instead of 0 because we have to multiply later when calculating the new prob
  result[start_node] = 1

  // relax n - 1 times
  for (let i = 0; i < n - 1; i++) {
      // a flag to check the path doesn't relax anymore, so there's no more new change
      let hadNewChange = false

      for (let j = 0; j < edges.length; j++) {
          const [node1, node2] = edges[j]
          const prob = succProb[j]

          // since this grap is undirected, we have to update both sides
          if (result[node1] < result[node2] * prob) {
              result[node1] = result[node2] * prob
              hadNewChange = true
          }
          if (result[node2] < result[node1] * prob) {
              result[node2] = result[node1] * prob
              hadNewChange = true
          }
      }

      // the path no longer relaxes, stop the loop early to prevent timeout
      if (!hadNewChange) break
  }

  return result[end_node]
};