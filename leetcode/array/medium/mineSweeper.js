// https://leetcode.com/problems/minesweeper/

/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */

let mineSweeper = function(board, click) {
  // when clicking the mine, change 'M' to 'X' and return the board
  if (board[click[0]][click[1]] === 'M') {                                                // Time: 1, Space: 0
      board[click[0]][click[1]] = 'X'                                                     // Time: 1, Space: 0
      return board                                                                        // Time: 1, Space: 0
  }

  // initialize the queue with the click coordinate
  let queue = [click]                                                                     // Time: 1, Space: V

  while (queue.length > 0) {                                                              // Time: V, Space: 0
      // dequeue current square
      const [row, col] = queue.shift()                                                    // Time: 1, Space: 2

      // continue to next square in queue if current square is not an unrevealed empty square
      if (board[row][col] !== 'E') continue                                               // Time: 1, Space: 0

      // count the number of adjacent mines
      let count = 0                                                                       // Time: 1, Space: 1

      // get all neighbors (8 neighbors)
      // upper left, above, upper right, right, lower right, below, lower left, left
      const neighbors = [                                                                 // Time: 1, Space: 8
          [row - 1, col - 1], [row - 1, col], [row - 1, col + 1], [row, col - 1],
          [row, col + 1], [row + 1, col - 1], [row + 1, col], [row + 1, col + 1]
      ]

      // temp queue to store adjacent unrevealed empty squares ('E')
      const tempQueue = []                                                                // Time: 1, Space: 8

      // for each neighbor
      for (let [neiRow, neiCol] of neighbors) {                                           // Time: 8, Space: 1
          // if the neighbor is NOT out of bound
          if (                                                                            // Time: 1, Space: 0
              (neiRow >= 0) && (neiRow < board.length) &&
              (neiCol >= 0) && (neiCol < board[0].length)
          ) {
              // if neighbor is an unrevealed mine, increment count
              if (board[neiRow][neiCol] === 'M') {                                        // Time: 1, Space: 0
                  count++                                                                 // Time: 1, Space: 0
              // if neighbor is an unrevealed empty square, enqueue neighbor to tempQueue
              } else if (board[neiRow][neiCol] === 'E') {                                 // Time: 1, Space: 0
                  tempQueue.push([neiRow, neiCol])                                        // Time: 1, Space: 1
              }
          }
      }

      // update value at current square
      board[row][col] = count > 0 ? `${count}` : 'B'                                      // Time: 1, Space: 0
      // after update, if current square is a revealed blank square, append tempQueue to queue
      if (board[row][col] === 'B')                                                        // Time: 1, Space: 0
          queue = queue.concat(tempQueue)                                                 // Time: V, Space: 0
  }
  return board
};

// V: number of unrevealed empty square
// Total time: V * (8 + V) = O(V^2)
// Total Space: O(V)
