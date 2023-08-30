// Given a random 4x4 matrix, print all elements. Row by row and column by column.

const matrix4x4 = [
  [1,2,3,4],
  [5,6,7,8],
  [9,10,11,12],
  [13,14,15,16]
]

// LOOP approach
const printMatrixWithLoop = (matrix) => {
  const result = []
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      result.push(matrix[row][col])
    }
  }
  return result.join(', ')
}

console.log('Print 4x4 matrix using Loop: ')
console.log(printMatrixWithLoop(matrix4x4))

console.log('\n')

// Recursion approach
const printMatrixWithRecursion = (matrix, row = 0, col = 0, result = []) => {
  // base case
  if (row >= matrix.length) return result.join(', ')
  result.push(matrix[row][col])
  if (col === matrix[row].length - 1) {
    return printMatrixWithRecursion(matrix, row + 1, 0, result)
  } else {
    return printMatrixWithRecursion(matrix, row, col + 1, result)
  }
}

console.log('Print 4x4 matrix using Recursion: ')
console.log(printMatrixWithRecursion(matrix4x4))
