// https://leetcode.com/problems/sudoku-solver/

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

// backtracking
let solveSudoku = function(board) {
  let result = []

  const dfs = (board, startRow, startCol) => {
      // if the current board is not a valid sudoku, return false
      if (!isValidSudoku(board)) return false

      // if the board is completed, update result and return true
      if (isCompleted(board)) {
          result = board
          return true
      }

      // iterate over each cell of board
      for (let r = startRow; r < 9; r++) {
          for (let c = startCol; c < 9; c++) {
              // skip if cell is already filled
              if (board[r][c] !== '.') continue

              // otherwise, sequentially try fill with 1 -> 9
              for (let i = 1; i <= 9; i++) {
                  // fill cell with current number
                  board[r][c] = i + ''
                  // get next cell to explore
                  // if reach last col, next cell is on next row, otherwise on same row
                  const nextRow = startCol === 8 ? startRow + 1 : startRow
                  // if reach last col, next cell is on first col of next row, otherwise on next col
                  const nextCol = startCol === 8 ? 0 : startCol
                  // if recursion of the next cell gives a complete sudoku, immediately return true
                  if (dfs(board, nextRow, nextCol))
                      return true
                  // otherwise, reset cell unfilled to try the other number
                  board[r][c] = '.'
              }
              // if none of the numbers could give a valid sudoku, return false
              // to backtrack to the prev cell and try another option
              return false
          }
      }
  }

  // start recursion with the first cell
  dfs(board, 0, 0)
  return result
};

// check if the current board is valid
const isValidSudoku = function(board) {
  // check repeated number on same row
  for (let r = 0; r < 9; r++) {
      // get all numbers that are filled on current row
      const filledNumbersOnRow = board[r].filter(e => e !== '.')
      // return false if there existed a repeated number on current row
      if (new Set(filledNumbersOnRow).size !== filledNumbersOnRow.length)
          return false
  }

  // check repeated number on same column
  for (let c = 0; c < 9; c++) {
      const filledNumbersOnCol = []
      for (let r = 0; r < 9; r++) {
          if (board[r][c] !== '.')
              // get all numbers that are filled on current column
              filledNumbersOnCol.push(board[r][c])
      }
      // return false if there existed a repeated number on curren column
      if (new Set(filledNumbersOnCol).size !== filledNumbersOnCol.length)
          return false
  }

  // check repeated number in same 3x3 sub-box
  for (let r = 0; r < 9; r += 3) {
      for (let c = 0; c < 9; c += 3) {
          const filledNumbersInBox = []
          for (let i = 0; i < 3; i++) {
              for (let j = 0; j < 3; j++) {
                  // get all numbers that are filled in current 3x3 box
                  if (board[r + i][c + j] !== '.')
                      filledNumbersInBox.push(board[r + i][c + j])
              }
          }
          // return false if there existed a repeated number current 3x3 box
          if (new Set(filledNumbersInBox).size !== filledNumbersInBox.length)
              return false
      }
  }
  // if none of above contains repeated numbers, return true
  return true
}

// check if the board is completely filled with numbers
const isCompleted = function(board) {
  for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
          if (board[r][c] === '.')
              return false
      }
  }
  return true
}