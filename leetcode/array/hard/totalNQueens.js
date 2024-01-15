// https://leetcode.com/problems/n-queens-ii/

/**
 * @param {number} n
 * @return {number}
 */

// backtracking
let totalNQueens = function(n) {
  const result = []
  const tempRes = []

  const dfs = (row, tempRes) => {
      if (!isValidPosition(tempRes, n)) return

      // if there are enough n queens, add solution to result
      if (row >= n) {
          result.push([...tempRes])
      }

      // for each column
      for (let i = 0; i < n; i++) {
          const newQueen = [row, i]
          tempRes.push(newQueen)
          dfs(row + 1, tempRes)
          tempRes.pop()
      }
  }

  dfs(0, tempRes)
  return result.length
};

// check is the newly added queen is placed in a valid position
let isValidPosition = function(tempRes, n) {
// store all columns that have queens
const cols = new Set()
// store all diagonals that have queens
const diagonals = new Set()
// get the last added queen
const [newQueenRow, newQueenCol] = tempRes[tempRes.length - 1] || []

// iterate over tempRes to add all columns and diagonals that have queens
for (let [row, col] of tempRes) {
    cols.add(col)
    for (let i = 0; i < n; i++) {
        diagonals.add(`${row + 1 + i}-${col + 1 + i}`)
        diagonals.add(`${row - 1 - i}-${col - 1 - i}`)
        diagonals.add(`${row + 1 + i}-${col - 1 - i}`)
        diagonals.add(`${row - 1 - i}-${col + 1 + i}`)
    }
}

// if the last queen is placed on any diagonal of other queens
// or on the same column of another queen, that's not a valid position
if (diagonals.has(`${newQueenRow}-${newQueenCol}`) || cols.size !== tempRes.length)
    return false

return true
}