
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
  const result = []                                                           // Time: 1, Space: N
  const visited = new Set()                                                   // Time: 1, Space: N
  // Assume that queue is properly built, 
  // so enqueue and dequeue methods takes O(1) time
  const queue = [nodeIndex]                                                   // Time: 1, Space: N

  // looping until there's nothing in the queue
  while (queue.length > 0) {                                                  // Time: N, Space: 0
    // dequeue the first node
    let curIndex = queue.shift()                                              // Time: 1, Space: 1

    // if the current node hasn't been visited yet
    if (!visited.has(curIndex)) {                                             // Time: 1, Space: 0
      // add current node to the visided set
      visited.add(curIndex)                                                   // Time: 1, Space: 1

      // push current node to result array
      result.push(idxToAirport[curIndex].name)                                // Time: 1, Space: 1

      // get an array of current node's neighbors
      const curNeighbors = graph[curIndex]                                    // Time: 1, Space: E
      // for each neighbor, if they haven't been visited, enqueue them
      for (let i = 0; i < curNeighbors.length; i++) {                         // Time: E, Space: 1
        if (!visited.has(curNeighbors[i])) queue.push(curNeighbors[i])        // Time: 1, Space: 1
      }
    }
  }
  // return result array
  return result                                                               // Time: 1, Space: 0
}

// Let N is the total of nodes (airports), and E is the total of edges (connections)
// In the worse case where each node connects to all the other nodes (each airport could go to all other airports),
// That means E = N - 1
// the while loop takes N times, and the for loop takes E = N - 1 times, so total time = N * E = N * (N-1) = N^2 - N = N^2
// Total Time: O(N^2)
// Total Space: O(N) (total nodes stored in the set/queue)

console.log(BFS(0))

