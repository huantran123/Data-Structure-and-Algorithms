// Sales path DFS Loop style

// prepare path data
let nodeCount = 1

// Constructor to create a new Node
function Node(cost) {
  this.cost = cost
  this.children = []
  this.id = nodeCount++
}

//
var root = new Node(0)
root.children.push(new Node(5))
root.children.push(new Node(3))
root.children.push(new Node(6))
root.children[0].children.push(new Node(4))
root.children[1].children.push(new Node(2))
root.children[1].children.push(new Node(0))
root.children[2].children.push(new Node(1))
root.children[2].children.push(new Node(5))
root.children[1].children[0].children.push(new Node(1))
root.children[1].children[1].children.push(new Node(10))
root.children[1].children[0].children[0].children.push(new Node(1))
// console.log(JSON.stringify(root, null, 4))

// done preparing path data

// Iteration approach
const dfsSalesPathLoop = (node) => {
  // initialize seen set, stack, current path array, and all paths array
  const seen = new Set()                                                          // Time: 1, Space: V
  const stack = [node]                                                            // Time: 1, Space: V
  const curPath = []                                                              // Time: 1, Space: V
  const paths = []                                                                // Time: 1, Space: V

  while (stack.length > 0) {                                                      // Time: V, Space: 0
    // pop the node on top of the stack
    const curNode = stack.pop()                                                   // Time: 1, Space: 1

    // if current node is the separator
    if (curNode === '|') {                                                        // Time: 1, Space: 0
      // remove the last node of the path array and continue the loop
      curPath.pop()                                                               // Time: 1, Space: 1
      continue                                                                    // Time: 1, Space: 0
    } else {
      // otherwise add current node's cost to the path array
      curPath.push(curNode.cost)                                                  // Time: 1, Space: 1
    }

    // if current node hasn't been seen before
    if (!seen.has(curNode.id)) {                                                  // Time: 1, Space: 0
      // mark current node as seen
      seen.add(curNode.id)                                                        // Time: 1, Space: 1

      // seenAllChildNodes to announce if all child nodes have been seen
      let seenAllChildNodes = true                                                // Time: 1, Space: 1
      // pushedSeparator allows the '|' to be added BEFORE the FIRST child node
      let pushedSeparator = false                                                 // Time: 1, Space: 1

      // for each child node
      for (let childNode of curNode.children) {                                   // Time: E, Space: 1
        // if child node hasn't been seen before
        if (!seen.has(childNode)) {                                               // Time: 1, Space: 1
          // add '|' to the stack, only before the first child node
          if (!pushedSeparator) {                                                 // Time: 1, Space: 0
            stack.push('|')                                                       // Time: 1, Space: 1
            pushedSeparator = true                                                // Time: 1, Space: 0
          }
          // add child node to the stack
          stack.push(childNode)                                                   // Time: 1, Space: 1
          // since a child node has recently been added, not all child nodes have been seen
          seenAllChildNodes = false                                               // Time: 1, Space: 0
        }
      }

      // If current node is a leaf node, or all child nodes have been visited
      if (curNode.children.length === 0 || seenAllChildNodes) {                   // Time: 1, Space: 0
        // add the current path to the paths array: [path, totol cost]
        paths.push([                                                              // Time: 1, Space: 1
          curPath.join(','),                                                      // Time: V, Space: V
          curPath.reduce((partialSum, cut) => partialSum + parseInt(cut), 0)      // Time: V, Space: V
        ])
        // remove the last node off the current path to get ready for the next path
        curPath.pop()                                                             // Time: 1, Space: 1
      }
    }
  }
  return paths                                                                    // Time: 1, Space: 0
}

// V: number of nodes
// E: number of child nodes (0 <= E <= V)
// Total time: V * (E + V + V) = O(V^2)
// Total space: O(V)

console.log(dfsSalesPathLoop(root))


const dfsSalesPathMinCost = (node) => {
  // Base case: if node is a leaft node, return node cost
  if (node.children.length === 0) {                                     // Time: 1, Space: 0
    return node.cost                                                    // Time: 1, Space: 0
  }

  // initialize costs array to store all costs of cur node + child nodes
  const costs = []                                                      // Time: 1, Space: E

  // for each child node
  for (let i = 0; i < node.children.length; i++) {                      // Time: E, Space: 1
    // store into costs array: cur node cost + child node cost
    costs[i] = node.cost + dfsSalesPathMinCost(node.children[i])      // Time: _, Space: _
  }
  // return the minumum cost in the costs array
  return Math.min(...costs)                                             // Time: E, Space: 0
}

// E: number of edges (Ei: number of children of a node)
// Total time: O(E)
// Total space: O(E)

console.log(dfsSalesPathMinCost(root))

// Recursion approach
const dfsSalesPathRecursion = (node) => {
  const paths = []

  const recursion = (node, curPath, cost, paths) => {
    // if node is a leaf node
    if (node.children.length === 0) {
      // add current path to the paths array
      curPath.push(node.cost)
      paths.push([curPath.join(','), cost + node.cost])
      return
    }

    // for each child, recursively explore the child
    node.children.forEach(child => recursion(child, [...curPath, node.cost], cost + node.cost, paths))
  }

  recursion(node, [], 0, paths)
  return paths
}

console.log(dfsSalesPathRecursion(root))