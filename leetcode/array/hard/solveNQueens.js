// https://leetcode.com/problems/n-queens/

/**
 * @param {number} n
 * @return {string[][]}
 */

// backtracking
let solveNQueens = function(n) {
  const result = []
  const tempRes = []
  const rowTemplate = new Array(n).fill('.')

  const dfs = (row, tempRes) => {
      if (!isValidPosition(tempRes, n)) return

      // if there are enough n queens, add solution to result
      if (row >= n) {
          // a solution contains string of queen positions
          const stringRes = new Array(n)
          // for each queen
          for (let [queenRow, queenCol] of tempRes) {
              // create a template for the queen position
              const row = [...rowTemplate]
              // replace the '.' with 'Q' in the corresponding column
              row[queenCol] = 'Q'
              // convert the position to a string and add to the solution array
              stringRes[queenRow] = row.join('')
          }
          // add the solution to result and return
          result.push(stringRes)
          return
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
  return result
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