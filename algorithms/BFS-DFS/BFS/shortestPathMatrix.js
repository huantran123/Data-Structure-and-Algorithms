const shortestPath = (map, start, end) => {
  // create queue and visited set
  const queue = [start]
  const visited = new Set()
  // create array contains all paths, initial value: [['00']]
  let paths = [[start.join('')]]

  while (queue.length > 0) {
    // dequeue the first node
    const [row, col] = queue.shift()
    const curNodeString = `${row}${col}`

    // if current node hasn't been visited
    if (!visited.has(curNodeString)) {
      // add node to the visited list
      visited.add(curNodeString)

      // get all current node's neighbors
      const neighbors = [[row-1, col], [row+1, col], [row, col-1], [row, col+1]]

      const tempPaths = []
      const unchangedPaths = new Set()

      // for each neighbor
      for (let [neighborRow, neighborCol] of neighbors) {
        let neighborString = `${neighborRow}${neighborCol}`

        // check if neighbor is not out of bound, not 1, and not visited yet
        if (
          (neighborRow >= 0) &&
          (neighborRow < map.length) &&
          (neighborCol >= 0) &&
          (neighborCol < map[0].length) &&
          (map[neighborRow][neighborCol] !== 1) &&
          (!visited.has(neighborString))
        ) {
          // enqueue neighbor
          queue.push([neighborRow, neighborCol])
          for (let path of paths) {
            // check if current path has current node at the end
            if (path[path.length - 1] === curNodeString) {
              // if so updated the path, add the neighbor to the end of path
              const updatedPath = path.concat(neighborString)
              // add updated path to the tempPath array
              tempPaths.push(updatedPath)
              // if neighbor is the end node, return the path
              if (neighborString === end.join(''))
                return updatedPath
            } else {
              // otherwise if current path doesn't include current node
              // store unchanged path to the set to avoid adding duplicated path
              // in the next iteration with the current node's next neighbor.
              // since there's no 2 paths having the same end node, we only need to check the end node
              if (!unchangedPaths.has(path[path.length - 1]))
                tempPaths.push(path)
              // keep track that the path with this end node has already added
              unchangedPaths.add(path[path.length - 1])
            }
          }
        }
      }
      // after looping through all neighbors
      // if tempPaths get filled (not all neighbors are invalid), update the paths array
      if (tempPaths.length > 0) paths = tempPaths
    }
  }
}

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