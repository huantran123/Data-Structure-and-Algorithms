// https://leetcode.com/problems/word-search/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

// backtracking
let wordSearch = function(board, word) {
  const dfs = (row, col, wordIndex) => {
      // if wordIndex reaches word's length
      // that means it is not interupted during the process
      // and the word is found, so return true
      if (wordIndex === word.length) return true

      // if the cell is out of bound OR is visited OR the char
      // is not match the char of word at wordIndex, return false
      if (
          row < 0 || row >= board.length ||
          col < 0 || col >= board[0].length ||
          board[row][col] === 'seen' ||
          board[row][col] !== word[wordIndex]
      )
          return false

      // if none of above, save the current char and mark cell as seen
      const curChar = board[row][col]
      board[row][col] = 'seen'

      const neighbors = [
          [row - 1, col], [row + 1, col],     // up, down
          [row, col - 1], [row, col + 1]      // left, right
      ]

      // explore each neighbor cell
      for (let [neiRow, neiCol] of neighbors) {
          // if a word is found, immediately return true to save time
          if (dfs(neiRow, neiCol, wordIndex + 1))
              return true
      }

      // backtrack: reset cell back to unseen to prepare for other exploration
      board[row][col] = curChar

      // if none of above works, that means word isn't found in this path
      return false
  }

  // explore every cell in the board and return true when the word is found
  for (let r = 0; r < board.length; r++) {
      for (let c = 0; c < board[0].length; c++) {
          if (dfs(r, c, 0))
              return true
      }
  }

  return false
};

const board1 = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
const word1 = "ABCCED"
console.log(wordSearch(board1, word1))    // true

const board2 = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
const word2 = "SEE"
console.log(wordSearch(board2, word2))    // true

const board3 = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
const word3 = "ABCB"
console.log(wordSearch(board3, word3))    // false

const board4 = [["A","A","A","A","A","A"],["A","A","A","A","A","A"],["A","A","A","A","A","A"],["A","A","A","A","A","A"],["A","A","A","A","A","A"],["A","A","A","A","A","A"]]
const word4 = "AAAAAAAAAAAABAA"
console.log(wordSearch(board4, word4))    // false

const board5 = [["A","A","A","A","A","A"],["A","A","A","A","A","A"],["A","A","A","A","A","A"],["A","A","A","A","A","A"],["A","A","A","A","A","B"],["A","A","A","A","B","A"]]
const word5 = "AAAAAAAAAAAAABB"
console.log(wordSearch(board5, word5))    // false