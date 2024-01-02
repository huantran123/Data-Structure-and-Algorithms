
let networkDelayTime = function(times, n, k) {
  /* 
  ** construct an adjacency graph from the times array
  */
  const graph = []                                                          // Time: 1, Space: V
  // initialize the graph with empty arrays
  for (let i = 0; i < n; i++) { graph.push([]) }                            // Time: V, Space: 1
  // integrate the graph with data extracted from the time array
  for (let i = 0; i < times.length; i++) {                                  // Time: E, Space: 1
      const sourceIndex = times[i][0] - 1                                   // Time: 1, Space: 1
      const targetIndex = times[i][1] - 1                                   // Time: 1, Space: 1
      const travelTime = times[i][2]                                        // Time: 1, Space: 1
      graph[sourceIndex].push([targetIndex, travelTime])                    // Time: 1, Space: 1
  }
  // => graph = [[[target, time], ...], ...]

  /*
  ** find paths that all nodes get visited
  */
  const startNodeIndex = k - 1                                              // Time: 1, Space: 1
  const divider = '|'                                                       // Time: 1, Space: 1
  const queue = [startNodeIndex, divider]                                   // Time: 1, Space: V
  const visited = new Set([startNodeIndex])                                 // Time: 1, Space: V
  let paths = [[0, startNodeIndex]]                                         // Time: 1, Space: n

  // looping until there's nothing in the queue
  while (queue.length > 0) {                                                // Time: V, Space: 0
      // dequeue the first node                                             // Assume this is a proper built queue
      const curNodeIndex = queue.shift()                                    // Time: 1, Space: 1

      // if it reaches a divider and queue is not empty, the current layer ends
      // put the divide to the end of the queue and continue to the next layer
      if (curNodeIndex === divider && queue.length > 0) {                   // Time: 1, Space: 0
          queue.push(divider)                                               // Time: 1, Space: 1
          continue                                                          // Time: 1, Space: 0
      }

      // if it reaches a divider and queue is empty, end the loop
      if (curNodeIndex === divider && queue.length === 0) {                 // Time: 1, Space: 0
          break                                                             // Time: 1, Space: 0
      }

      // get the current node value from the current index: [[target, time], ...]
      const curNode = graph[curNodeIndex]                                   // Time: 1, Space: 1
      const tempPaths = []                                                  // Time: 1, Space: n

      // updating the all paths with all neighbors of current node
      for (let i = 0; i < curNode.length; i++) {                            // Time: E, Space: 1
          // neighbor i of the current node
          const [targetIndex, travelTime] = curNode[i]                      // Time: 1, Space: 2

          // if neighbor node hasn't been visited
          if (!visited.has(targetIndex)) {                                  // Time: 1, Space: 0
              // add to visited set
              visited.add(targetIndex)                                      // Time: 1, Space: 1
              // enqueue the neighbor
              queue.push(targetIndex)                                       // Time: 1, Space: 1

              // update all paths that has current node at the tail
              for (let j = 0; j < paths.length; j++) {                      // Time: n, Space: 1
                  // check if current node is at the end of the path
                  if (paths[j][paths[j].length - 1] === curNodeIndex) {     // Time: 1, Space: 0
                      // if so add neighbor to the end of the path
                      const updatedPath = paths[j].concat(targetIndex)      // Time: n, Space: n
                      // update travel time after adding neighbor to the path
                      updatedPath[0] += travelTime                          // Time: 1, Space: 0
                      // add the updated path to the temp array
                      tempPaths.push(updatedPath)                           // Time: 1, Space: 1
                  } else {
                      // otherwise if the current path doesn't have current node at the end,
                      // we won't add the neighbor node, just push current path to temp array
                      tempPaths.push(paths[j])                              // Time: 1, Space: 1
                  }
              }
          }
      }

      // tempPaths contains something in it, that means there's some paths updated
      // so we need to update the paths array
      if (tempPaths.length > 0) paths = tempPaths                           // Time: 1, Space: 0
  }

  /*
  ** Find the minimum time it takes for all nodes to be visited
  */
  // if not all nodes were visited, return -1
  if (visited.size !== n) return -1                                         // Time: 1, Space: 0
  else {
      let max = 0                                                           // Time: 1, Space: 1
      for(let i = 0; i < paths.length; i++) {                               // Time: n, Space: 1
          if(paths[i][0] > max) max = paths[i][0]                           // Time: 1, Space: 0
      }
      return max                                                            // Time: 1, Space: 0
  }
};

// n: number of possible paths
// V: number of nodes
// E: number of edges (connections)
// There are 3 parts in this solution:
// 1. Building the graph:
//    - Time: E
//    - Space: V
// 2. Find all paths - traversing through the queue
//    - Time: V * E * n
//    - Space: V + n
// 3. Find the min time
//    - Time: n
//    - Space: 1
// => Total time: E + (V * E * n) + n => O(nVE)
// => Total space: V + V + n + 1 => O(V + n)

