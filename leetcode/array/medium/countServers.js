// https://leetcode.com/problems/count-servers-that-communicate/

/**
 * @param {number[][]} grid
 * @return {number}
 */

let countServers = function(grid) {
  // initialize sum result
  let sum = 0                                                                     // Time: 1, Space: 1

  for (let i = 0; i < grid.length; i++) {                                         // Time: m, Space: 1
    for (let j = 0; j < grid[0].length; j++) {                                    // Time: n, Space: 1
      // if current node is a server
      if (grid[i][j] === 1) {                                                     // Time: 1, Space: 0
        // initilize count of connected servers
        let count = 0                                                             // Time: 1, Space: 1
        // initialize queue of servers (assume using proper queue)
        const queue = [[i, j]]                                                    // Time: 1, Space: V

        while (queue.length > 0) {                                                // Time: V, Space: 0
          // dequeue the first server
          const [row, col] = queue.shift()                                        // Time: 1, Space: 2

          // increment the counter
          count++                                                                 // Time: 1, Space: 0
          // mark as visited
          grid[row][col] = 2                                                      // Time: 1, Space: 0

          // find if there is any other server on the same column
          for (let r = 0; r < grid.length; r++) {                                 // Time: m, Space: 1
            // if there's a different server that is not visited
            if (grid[r][col] === 1 && r !== row) {                                // Time: 1, Space: 0
                // enqueue the server
                queue.push([r, col])                                              // Time: 1, Space: 1
                // mark as visited
                grid[r][col] = 2                                                  // Time: 1, Space: 0
            }
          }

          // find if there is any other server on the same row
          for (let c = 0; c < grid[0].length; c++) {                              // Time: n, Space: 1
            // if there's a different server that is not visited
            if (grid[row][c] === 1 && c !== col) {                                // Time: 1, Space: 0
              // enqueue the server
              queue.push([row, c])                                                // Time: 1, Space: 1
              // mark as visited
              grid[row][c] = 2                                                    // Time: 1, Space: 0
            }
          }
        }
        // if there are more than 1 connected servers, update the sum
        if (count > 1) sum += count                                               // Time: 1, Space: 0
      }
    }
  }
  return sum                                                                      // Time: 1, Space: 0
};

// m: number of rows, (1 <= m <= 250), could be treated as a constant
// n: number of columns, (1 <= n <= 250), could be treated as a constant
// V: number of servers
// Total time: m * n * V * (m + n) = O(V)
// Total space: O(V)