// https://leetcode.com/problems/reachable-nodes-with-restrictions/

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} restricted
 * @return {number}
 */

let reachableNodes = function(n, edges, restricted) {
  // create a set of restricted nodes (better to search)
  const restrictedSet = new Set(restricted)

  // create a graph of nodes
  const graph = []
  for (let i = 0; i < n; i++) graph.push([])
  for (let i = 0; i < edges.length; i++) {
      graph[edges[i][0]].push(edges[i][1])
      graph[edges[i][1]].push(edges[i][0])
  }

  let count = 0
  const seen = new Set()
  const stack = [0]       // initialize stack with node 0

  while (stack.length > 0) {
      // pop the node on top of the stack
      const curNode = stack.pop()

      // if the node hasn't been seen before
      if (!seen.has(curNode)) {
          // add node to the seen set
          seen.add(curNode)
          // increment the count
          count++

          // for each node connected to the current node
          for (let neighbor of graph[curNode]) {
              // if node hasn't been seen and isn't restricted, add to the stack
              if (!seen.has(neighbor) && !restrictedSet.has(neighbor)) {
                  stack.push(neighbor)
              }
          }
      }
  }
  return count
};