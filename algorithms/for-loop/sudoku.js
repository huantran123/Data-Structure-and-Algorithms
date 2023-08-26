// Write a program to solve a 4x4 sudoku
const sudoku = [
  [3, null, null, null],
  [4, null, null, null],
  [null, null, null, 2],
  [null, null, null, 3]
]

// check if the 4x4 sudoku is valid
const checkValidSudoku = (sudoku) => {
  // check valid row, every number on a row must be distinct
  for (let i = 0; i < 4; i++) {
    let set = new Set(sudoku[i])
    if (set.size !== 4) return false
  }

  // check column, every number on a column must be distinct
  for (let i = 0; i < 4; i++) {
    const curColumn = []
    for (let j = 0; j < 4; j++)
      curColumn.push(sudoku[j][i])
    let set = new Set(curColumn)
    if (set.size !== 4) return false
  }

  // check 2x2 block, every number in a 2x2 block must be distinct
  for (let i = 0; i < 4; i += 2) {
    for (let j = 0; j < 4; j += 2) {
      let curBlock = []
      curBlock.push(sudoku[i][j])
      curBlock.push(sudoku[i][j + 1])
      curBlock.push(sudoku[i + 1][j])
      curBlock.push(sudoku[i + 1][j + 1])
      let set = new Set(curBlock)
      if (set.size !== 4) return false
    }
  }

  return true
}

// check if the possible solution matches the pattern that the given sudoku has,
// that all not-null values in the given sudoku are in the same positions in possible solution
const checkMatchingPatterns = (givenSudoku, possibleSolution) => {
  for (let row = 0; row < givenSudoku.length; row++) {
    for (let col = 0; col < givenSudoku[row].length; col++) {
      if (givenSudoku[row][col] !== null
        && possibleSolution[row][col] !== undefined
        && givenSudoku[row][col] !== possibleSolution[row][col])
          return false
    }
  }
  return true
}

// generate all permutation of [1,2,3,4]
const generatePermutations = () => {
  const solutions = []
  // find all permutations of 1, 2, 3, 4
  for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= 4; j++) {
      for (let k = 1; k <= 4; k++) {
        for (let l = 1; l <= 4; l++) {
          if (new Set([i, j, k, l]).size === 4)
            solutions.push([i, j, k, l])
        }
      }
    }
  }
  return solutions
}

// generate all possible sudoku solutions
const generatePossibleSolutions = (possibleSudokuRows) => {
  const solutions = []
  for (let i = 0; i < possibleSudokuRows.length; i++) {
    for (let j = 0; j < possibleSudokuRows.length; j++) {
      for (let k = 0; k < possibleSudokuRows.length; k++) {
        for (let l = 0; l < possibleSudokuRows.length; l++) {
          solutions.push([
            possibleSudokuRows[i],
            possibleSudokuRows[j],
            possibleSudokuRows[k],
            possibleSudokuRows[l],
          ])
        }
      }
    }
  }
  return solutions
}

// generatePermutations() generates an array of possible sudoku rows
// pass the array to the generatePossibleSolutions() function to generate an array of possible solutions
const possibleSolutions = generatePossibleSolutions(generatePermutations())

const correctSolutions = []

possibleSolutions.forEach((solution) => {
  if (checkValidSudoku(solution) && checkMatchingPatterns(sudoku, solution))
    correctSolutions.push(solution)
})

console.log('Given sudoku:\n', sudoku)

correctSolutions.forEach((solution, index) => {
  console.log('Solution #', index + 1)
  console.log(solution)
})