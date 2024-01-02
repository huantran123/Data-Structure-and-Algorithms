// https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/

/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */

let minReorder = function(n, connections) {
  // construct a graph storing neighbor cities of each city
  // construct a directs set storing all the directions from city A to city B
  const graph = []
  const directions = new Set()
  for (let i = 0; i < n; i++) graph.push([])
  for (let i = 0; i < connections.length; i++) {
      graph[connections[i][0]].push(connections[i][1])
      graph[connections[i][1]].push(connections[i][0])
      directions.add(`${connections[i][0]}->${connections[i][1]}`)
  }

  let count = 0
  const stack = [0]
  const visited = new Set()

  while(stack.length > 0) {
      const curCity = stack.pop()

      // if current city hasn't been visited before
      if (!visited.has(curCity)) {
          // add current city to visited set
          visited.add(curCity)

          // for each neighbor of the current city
          for (let neighbor of graph[curCity]) {
              // if the neighbor hasn't been visited
              if (!visited.has(neighbor)) {
                  // if there is no way to go from neighbor to current city
                  if (!directions.has(`${neighbor}->${curCity}`))
                      // increment count (reorient the road)
                      count++

                  // add neighbor to the stack
                  stack.push(neighbor)
              }
          }
      }
  }
  return count
};

