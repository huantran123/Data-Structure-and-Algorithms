// Topological Sort - steps to get ready for school

// step 1: build the graph:
// relationship between what should be done first
// NO cycle in graph is a MUST
const graph = [
  [2], // Backpack, index 0
  [7], // Shirt, index 1
  [], // School, index 2
  [1], // Shoes, index 3
  [5], // Underwear, index 4
  [1,3], // Pants, index 5
  [3], // Socks, index 6
  [0], // Jacket, index 7
]

// nodes' information
const idxToItem = {
  '0': { name: 'Backpack' },
  '1': { name: 'Shirt' },
  '2': { name: 'School' },
  '3': { name: 'Shoes' },
  '4': { name: 'Underwear' },
  '5': { name: 'Pants' },
  '6': { name: 'Socks' },
  '7': { name: 'Jacket' },
}

// topological sort (DFS then reverse)
const topoSort = (graph) => {
  // initialize visited set and result array
  const visited = new Set()                                                 // Time: 1, Space: V
  const result = []                                                         // Time: 1, Space: V

  // dfs helper function to traverse the nodes
  const dfs = (initNodeIndex) => {                                          // Time: _, Space: _
    // initialize the stack and and an array stores the order of items starting from the initi node
    const stack = [initNodeIndex]                                           // Time: 1, Space: V
    const curOrder = []                                                     // Time: 1, Space: V

    while (stack.length > 0) {                                              // Time: V, Space: 1
      // pop the last node on top of the stack
      const curNodeIndex = stack.pop()                                      // Time: 1, Space: 1

      // if node hasn't been visited before
      if (!visited.has(curNodeIndex)) {                                     // Time: 1, Space: 0
        // add node to visited set
        visited.add(curNodeIndex)                                           // Time: 1, Space: 1
        // add item's name of the current node to the current order array
        curOrder.push(idxToItem[curNodeIndex].name)                         // Time: 1, Space: 1

        // for each neighbor (items that must be done next after current item)
        for (let neighborIndex of graph[curNodeIndex]) {                    // Time: E, Space: 1
          // if neightbor hasn't been visited before, add to the stack
          if (!visited.has(neighborIndex)) {                                // Time: 1, Space: 0
            stack.push(neighborIndex)                                       // Time: 1, Space: 1
          }
        }
      }
    }
    // after stack is empty, add current order array to result array
    result.push(curOrder)                                                   // Time: 1, Space: 1
  }                                                                         // Total time: VE, Total Space: V

  // make sure every signle node of the graph is visited
  for (let i = 0; i < graph.length; i++) {                                  // Time: V, Space: 1
    if (!visited.has(i)) dfs(i)                                             // Time: 1, Space: 1
  }

  // reverse the order
  // because if the first item (idx 0) in the graph is actually the CORRECT first item
  // there'd be only 1 array in the result.
  // If the first item (idx 0) in the graph isn't the actual first item (which means it might
  // be a certain item in the middle of the correct order), what is later add in the result array is
  // supposed to be before the previous one, so we have to reverse the order
  result.reverse()                                                           // Time: V, Space: 1

  // join all items together and return the result
  return result.flat().join(' -> ')                                          // Time: V, Space: 1
}

// V: number of nodes
// E: number of edges
// Total time: VE + V + V = O(VE)
// Total space: O(V)

console.log('Getting ready for school (Iteration approach):', topoSort(graph))
// Could be:
// Underwear -> Pants -> Socks -> Shoes -> Shirt -> Jacket -> Backpack -> School
// Socks -> Underwear -> Pants -> Shoes -> Shirt -> Jacket -> Backpack -> School


const topoSortRecursion = (graph) => {
  const seen = new Set()
  const result = []

  // Recursion DFS traverse to visit nodes
  const dfsRecursion = (nodeIndex, curOrder = []) => {
    if (seen.has(nodeIndex)) return curOrder

    seen.add(nodeIndex)
    curOrder.push(idxToItem[nodeIndex].name)

    for (let neighborIndex of graph[nodeIndex]) {
      if (!seen.has(neighborIndex))
        dfsRecursion(neighborIndex, curOrder)
    }

    return curOrder
  }

  // Visit every node in the graph, skip nodes that are already visited
  for (let i = 0; i < graph.length; i++) {
    if (!seen.has(i)) {
      const curOrder = dfsRecursion(i)
      result.push(curOrder)
    }
  }

  // reverse the result to get the topological order
  result.reverse()

  return result.flat().join(' -> ')
}

console.log('Getting ready for school (Recursion approach):', topoSortRecursion(graph))