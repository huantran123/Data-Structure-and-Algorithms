/**
 * @param {character[][]} grid
 * @return {number}
 */

// algorithm: as long as a land piece is found, BFS will find all other neighbor land pieces and mark them as visited
// therefore the whole island is marked as visited, so the count increment
// then we can move on to explore the next unvisited land piece

let numIslands = function(grid) {
  // initialize the count of island
  let count = 0                                                                   // Time: 1, Space: 1

  for (let i = 0; i < grid.length; i++) {                                         // Time: m, Space: 1
    for (let j = 0; j < grid[0].length; j++) {                                    // Time: n, Space: 1
      // if current node is land
      if (grid[i][j] === '1') {                                                   // Time: 1, Space: 0
        // increment the count of island
        count++                                                                   // Time: 1, Space: 0
        // initialize queue with the current node coordinate
        // (assume using properly-built queue)
        let queue = [[i, j]]                                                      // Time: 1, Space: V

        while (queue.length > 0) {                                                // Time: V, Space: 0
          // dequeue the first node
          const [row, col] = queue.shift()                                        // Time: 1, Space: 2

          // if current node is land
          if (grid[row][col] === '1') {                                           // Time: 1, Space: 0
            // change it to 2 to mark it as visited
            grid[row][col] = '2'                                                  // Time: 1, Space: 0

            // get 4 neighbor nodes of current node
            const neighbors = [                                                   // Time: 1, Space: 4
              [row - 1, col], [row + 1, col],
              [row, col - 1], [row, col + 1]
            ]

            // for each neighbor
            for (let [neiRow, neiCol] of neighbors) {                             // Time: 4, Space: 1
              // if neighbor is NOT out of bound and IS land
              if (                                                                // Time: 1, Space: 0
                (neiRow >= 0) && (neiRow < grid.length) &&
                (neiCol >= 0) && (neiCol < grid[0].length) &&
                (grid[neiRow][neiCol] === '1')
              ) {
                // enqueue neighbor
                queue.push([neiRow, neiCol])                                      // Time: 1, Space: 1
              }
            }
          }
        }
      }
    }
  }
  return count                                                                    // Time: 1, Space: 1
};

// m: number of rows (1 <= m <= 300), assume it as a constant
// n: number of columns (1 <= n <= 300), assume it as a constant
// V: number of land nodes
// Total time: m * n * V * 4 = O(V)
// Total space: O(V)