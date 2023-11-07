// https://leetcode.com/problems/max-area-of-island/

/**
 * @param {number[][]} grid
 * @return {number}
 */

let maxAreaOfIsland = function(grid) {
  let maxArea = 0                                                                 // Time: 1, Space: 1
  const visited = new Set()                                                       // Time: 1, Space: V

  for (let row = 0; row < grid.length; row++) {                                   // Time: m, Space: 1
    for (let col = 0; col < grid[0].length; col++) {                              // Time: n, Space: 1
      // if current node is island
      if (grid[row][col] === 1) {                                                 // Time: 1, Space: 0
        // enqueue the node
        const queue = [[row, col]]                                                // Time: 1, Space: V
        // initialize area variable
        let area = 0                                                              // Time: 1, Space: 1

        while (queue.length > 0) {                                                // Time: V, Space: 0
          // dequeue the first node, assume queue is properly built
          const [ro, co] = queue.shift()                                          // Time: 1, Space: 2
          // get the coordinate string
          const nodeStr = `${ro}-${co}`                                           // Time: 1, Space: 1

          // if node hasn't been visited
          if (!visited.has(nodeStr)) {                                            // Time: 1, Space: 0
            // add node to visited set
            visited.add(nodeStr)                                                  // Time: 1, Space: 0
            // increment area of island
            area++                                                                // Time: 1, Space: 0

            // get 4 neighbors of current node
            const neighbors = [                                                   // Time: 1, Space: 4
              [ro - 1, co], [ro + 1, co],
              [ro, co - 1], [ro, co + 1]
            ]

            // for each neighbor
            for (let [neiRow, neiCol] of neighbors) {                             // Time: 4, Space: 2
              // get neighbor's coordinate string
              const neiStr = `${neiRow}-${neiCol}`                                // Time: 1, Space: 1
              // if neighbor is NOT out of bound, NOT visited, and IS island
              if (
                (neiRow >= 0) && (neiRow < grid.length) &&                        // Time: 1, Space: 1
                (neiCol >= 0) && (neiCol < grid[0].length) &&
                (!visited.has(neiStr)) &&
                (grid[neiRow][neiCol] === 1)
              ) {
                // enqueue neighbor
                queue.push([neiRow, neiCol])                                      // Time: 1, Space: 1
              }
            }
          }
        }
        // update max area
        maxArea = Math.max(maxArea, area)                                         // Time: 1, Space: 0
      }
    }
  }
  return maxArea                                                                  // Time: 1, Space: 0
};

// m: number of rows (1 <= m <= 50), can treat as a constant
// n: number of columns (1 <= n <= 50), can treat as a constant
// V: number of island nodes
// Total time: m * n * V * 4 = O(V)
// Total space: O(V)
