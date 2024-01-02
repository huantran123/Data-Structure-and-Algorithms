const graph = [
  [[1, 4], [3, 5]], // node 0, index 0
  [[4, 7]], // node 1, index 1
  [[1, 3]], // node 2, index 2
  [[2, -10]], // node 3, index 3
  [], // node 4, index 4
]

const longestPathBellmanFord = (graph, sourceIdx) => {
  // Transform adjacency graph into vertices + edges lists
  const vertices = []                                                               // Time: 1, Space: V
  const edges = []  // array of [from, to, weight]                                  // Time: 1, Space: E

  for (let i = 0; i < graph.length; i++) {                                          // Time: V, Space: 1
    vertices.push(i)                                                                // Time: 1, Space: 1
    for (let [toNode, weight] of graph[i]) {                                        // Time: E, Space: 1
      edges.push([i, toNode, weight])                                               // Time: 1, Space: 1
    }
  }

  // initilize result map
  const result = {}                                                                 // Time: 1, Space: V
  for (let i = 0; i < vertices.length; i++) {                                       // Time: V, Space: 1
    if (vertices[i] === sourceIdx) {                                                // Time: 1, Space: 0
      result[i] = 0                                                                 // Time: 1, Space: 1
      continue
    }
    result[i] = -Infinity                                                            // Time: 1, Space: 1
  }

  // relax the edges V-1 times
  const relax = vertices.length - 1                                                 // Time: 1, Space: 1
  for (let i = 0; i < relax; i++) {                                                 // Time: V, Space: 1
    for (let [fromNode, toNode, weight] of edges) {                                 // Time: E, Space: 1
      // if distance(source -> fromNode) + weight(fromNode -> toNode) > distance(source -> toNode)
      // => distance(source -> toNode) = distance(source -> fromNode) + weight(fromNode -> toNode)
      const newVal = Math.max(result[toNode], result[fromNode] + weight)            // Time: 1, Space: 1
      result[toNode] = newVal                                                       // Time: 1, Space: 1
    }
  }

  return JSON.stringify(result, null, 4)                                            // Time: V, Space: 1
}

// V: number of vertices
// E: number of edges
// Total time: V*E + V + V*E + V => O(V*E)
// Total space: O(V+E)

const sourceIdx = 0

console.log(`Shortest path Bellman-Ford from node ${sourceIdx}:`, longestPathBellmanFord(graph, sourceIdx))