const graph = [
  [1, 2], // SFO, index 0
  [0, 2, 3], // ORD, index 1
  [0, 1, 3, 4], // DEN, index 2
  [1, 2, 4], // JFK, index 3
  [2, 3], // IAH, index 4
]

// nodes' information
const idxToAirport = {
  '0': { name: 'SFO' },
  '1': { name: 'ORD' },
  '2': { name: 'DEN' },
  '3': { name: 'JFK' },
  '4': { name: 'IAH' }
}

const BFS = (nodeIndex) => {
  const result = []                                                           // Time: 1, Space: 1
  const visited = new Set()                                                   // Time: 1, Space: 1
  const queue = [nodeIndex]                                                   // Time: 1, Space: 1

  // looping until there's nothing in the queue
  while (queue.length > 0) {                                                  // Time: n, Space: 0
    // extract the first node in the queue
    let curIndex = queue.shift()                                              // Time: n, Space: 1

    // if the current node hasn't been visited yet
    if (!visited.has(curIndex)) {                                             // Time: 1, Space: 0
      // add current node to the visided set
      visited.add(curIndex)                                                   // Time: 1, Space: 1

      // push current node to result array
      result.push(idxToAirport[curIndex].name)                                // Time: 1, Space: 1

      // get an array of current node's neighbors
      const curNeighbors = graph[curIndex]                                    // Time: 1, Space: n
      // for each neighbor, if they haven't been visited, enqueue them
      for (let i = 0; i < curNeighbors.length; i++) {                         // Time: n, Space: 1
        if (!visited.has(curNeighbors[i])) queue.push(curNeighbors[i])        // Time: 1, Space: n
      }
    }
  }

  // return result array
  return result
}

console.log(BFS(0))