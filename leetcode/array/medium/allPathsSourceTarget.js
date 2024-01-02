// https://leetcode.com/problems/all-paths-from-source-to-target/

/**
 * @param {number[][]} graph
 * @return {number[][]}
 */

let allPathsSourceTarget = function(graph) {
  const target = graph.length - 1         // target node is last node of the graph
  const paths = []

  // recursion function
  const dfs = (node, curPath) => {
      // add current node to the end of the current path
      curPath.push(node)

      // if current node is the target node
      if (node === target) {
          // add current path to the paths array and return
          paths.push(curPath)
          return
      }

      // for each neighbor of the current node
      for (let neighborNode of graph[node]) {
          // recursively traverse the neighbor
          dfs(neighborNode, [...curPath])
      }
  }

  // start by traversing the 0 node, and empty path
  dfs(0, [])
  return paths
};