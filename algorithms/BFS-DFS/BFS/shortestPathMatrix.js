
const shortestPath = (map, start, end) => {
  // create queue and visited set
  const queue = [start]                                                     // Time: 1, Space: V
  const visited = new Set()                                                 // Time: 1, Space: V
  // create array contains all paths, initial value: [['00']]
  let paths = [[start.join('')]]                                            // Time: 2, Space: n

  while (queue.length > 0) {                                                // Time: V, Space: 0
    // dequeue the first node, assume queue is properly built
    const [row, col] = queue.shift()                                        // Time: 1, Space: 1
    const curNodeString = `${row}${col}`                                    // Time: 1, Space: 1

    // if current node hasn't been visited
    if (!visited.has(curNodeString)) {                                      // Time: 1, Space: 0
      // add node to the visited list
      visited.add(curNodeString)                                            // Time: 1, Space: 1

      // get all current node's neighbors
      const neighbors = [[row-1,col],[row+1,col],[row,col-1],[row,col+1]]   // Time: 1, Space: 4

      const tempPaths = []                                                  // Time: 1, Space: n
      const unchangedPaths = new Set()                                      // Time: 1, Space: V

      // for each neighbor
      for (let [neighborRow, neighborCol] of neighbors) {                   // Time: 4, Space: 2
        let neighborString = `${neighborRow}${neighborCol}`                 // Time: 1, Space: 1

        // check if neighbor is not out of bound, not 1, and not visited yet
        if (                                                                // Time: 1, Space: 0
          (neighborRow >= 0) && (neighborRow < map.length) &&
          (neighborCol >= 0) && (neighborCol < map[0].length) &&
          (map[neighborRow][neighborCol] !== 1) &&
          (!visited.has(neighborString))
        ) {
          // enqueue neighbor
          queue.push([neighborRow, neighborCol])                            // Time: 1, Space: 1

          for (let path of paths) {                                         // Time: n, Space: 1
            // check if current path has current node at the end
            if (path[path.length - 1] === curNodeString) {                  // Time: 1, Space: 0
              // if so updated the path, add the neighbor to the end of path
              const updatedPath = path.concat(neighborString)               // Time: 1, Space: 1
              // add updated path to the tempPath array
              tempPaths.push(updatedPath)                                   // Time: 1, Space: 1
              // if neighbor is the end node, return the path
              if (neighborString === end.join(''))                          // Time: 1, Space: 1
                return updatedPath                                          // Time: 1, Space: 0
            } else {
              // otherwise if current path doesn't include current node
              // store unchanged path to the set to avoid adding duplicated path
              // in the next iteration with the current node's next neighbor.
              // since there's no 2 paths having the same end node, we only need to check the end node
              if (!unchangedPaths.has(path[path.length - 1]))               // Time: 1, Space: 0
                tempPaths.push(path)                                        // Time: 1, Space: 1
              // keep track that the path with this end node has already added
              unchangedPaths.add(path[path.length - 1])                     // Time: 1, Space: 1
            }
          }
        }
      }
      // after looping through all neighbors
      // if tempPaths get filled (not all neighbors are invalid), update the paths array
      if (tempPaths.length > 0) paths = tempPaths                           // Time: 1, Space: 0
    }
  }
}

// V: number of nodes
// n: number of possible paths
// => Total time: 4Vn => O(Vn)
// => Total space: V + n => O(V) (V is always > n)

const map = [
  [0, 0, 0, 0, 1, 0, 1, 0],
  [1, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 1],
  [0, 1, 1, 1, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 1],
  [0, 1, 1, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
]

console.log(shortestPath(map, [0,0], [7,7]))

