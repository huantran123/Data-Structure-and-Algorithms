// relationship between nodes
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

const depthFirstSearchPure = (initNodeIdx) => {
  // initialize result, visited set, and stack
  const result = []                                         // Time: 1, Space: V
  const visited = new Set()                                 // Time: 1, Space: V
  const stack = [initNodeIdx]                               // Time: 1, Space: V

  while(stack.length > 0) {                                 // Time: V, Space: 0
    // pop the stack
    const curNodeIdx = stack.pop()                          // Time: 1, Space: 1

    // if the node hasn't been seen before -> process
    // otherwise, ignore the node
    if (!visited.has(curNodeIdx)) {                         // Time: 1, Space: 0
      // mark node as visited
      visited.add(curNodeIdx)                               // Time: 1, Space: 1

      // add node name to result array
      result.push(idxToAirport[curNodeIdx].name)            // Time: 1, Space: 1

      // get the neighbors
      const neighborIdx = graph[curNodeIdx]                 // Time: 1, Space: E

      // for each neighbor, if neighbor hasn't been visited
      // add to the stack
      for (let neiIdx of neighborIdx) {                     // Time: E, Space: 1
        if (!visited.has(neiIdx)) {                         // Time: 1, Space: 0
          stack.push(neiIdx)                                // Time: 1, Space: 1
        }
      }
    }
  }
  return result                                             // Time: 1, Space: 0
}
// V: number of nodes
// E: number of edges
// Total time: O(V*E)
// Total space: O(V)

console.log(depthFirstSearchPure(0))
