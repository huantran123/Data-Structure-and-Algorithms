// https://leetcode.com/problems/find-if-path-exists-in-graph/

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */

let validPath = function(n, edges, source, destination) {
  // construct the graph
  // index: vertex
  // value: array of connected vertices
  const graph = []
  for (let i = 0; i < n; i++) graph.push([])
  for (let i = 0; i < edges.length; i++) {
      graph[edges[i][0]].push(edges[i][1])
      graph[edges[i][1]].push(edges[i][0])
  }

  const visited = new Set()       // store all visited vertices
  const stack = [source]
  while (stack.length > 0) {
      const curVer = stack.pop()

      // if current vertex matches destination, return true
      if (curVer === destination) return true

      // if current vertext hasn't been visited before
      if (!visited.has(curVer)) {
          visited.add(curVer)     // add to visited set

          // for each connected vertices of current vertex
          // if they haven't been visited, add them to the stack
          for (let neighbor of graph[curVer]) {
              if (!visited.has(neighbor)) {
                  stack.push(neighbor)
              }
          }
      }
  }

  return false
};