
// DFS - Iteration approach
const floodFill = (image, sr, sc, color) => {
  // inialize the stack with the given coordinate
  const stack = [[sr, sc]]                                              // Time: 1. Space: V
  // get the original color at the given coordinate
  const originalColor = image[sr][sc]                                   // Time: 1. Space: 1

  // if original color is the same as the new color, returnt the same image
  if (originalColor === color) return image                             // Time: 1. Space: 0

  while (stack.length > 0) {                                            // Time: V. Space: 0
    // pop the coordinate on top of the stack
    const [curSr, curSc] = stack.pop()                                  // Time: 1. Space: 1

    // change to new color
    image[curSr][curSc] = color                                         // Time: 1. Space: 0

    // get 4 neighbors of the current node
    const neighbors = [                                                 // Time: 1. Space: 4
      [curSr - 1, curSc], [curSr + 1, curSc],
      [curSr, curSc - 1], [curSr, curSc + 1]
    ]

    // for each neighbor, add to the stack
    // if the neighbor is not out of bound and matches with original color
    for (let [neiSr, neiSc] of neighbors) {                             // Time: 4. Space: 1
      if (                                                              // Time: 1. Space: 0
        (neiSr >= 0) && (neiSr < image.length) &&
        (neiSc >= 0) && (neiSc < image[0].length) &&
        (image[neiSr][neiSc] === originalColor)
      ) {
        stack.push([neiSr, neiSc])                                      // Time: 1. Space: 1
      }
    }
  }
  return image                                                          // Time: 1. Space: V
}

// V: number of nodes (pixels) in the image
// Total time: V * 4 = O(V)
// Total space: O(V)

const image = [
  [1, 1, 1, 0, 1],
  [1, 1, 1, 0, 1],
  [1, 1, 0, 1, 1],
  [1, 1, 0, 0, 1],
]
const sr = 1
const sc = 1
const color = 2

console.log('flood filled image:', floodFill(image, sr, sc, color))

// DFS - Recursion approach
const floodFill2 = (image, sr, sc, color, originalColor = image[sr][sc]) => {
  // if new color is the same as original color, return the image
  if (color === originalColor) return image

  // update new color for the current cell
  image[sr][sc] = color

  // get arrays of neighbor cells
  const neighbors = [
    [sr - 1, sc], [sr + 1, sc],
    [sr, sc - 1], [sr, sc + 1]
  ]

  // for each neighbor cell, explore the cell
  // if the cell is not out of bound and match the original color
  for (let [neiSr, neiSc] of neighbors) {
    if (
        (neiSr >= 0) && (neiSr < image.length) &&
        (neiSc >= 0) && (neiSc < image[0].length) &&
        (image[neiSr][neiSc] === originalColor)
      ) {
        floodFill(image, neiSr, neiSc, color, originalColor)
      }
  }
  
  return image
}

console.log('flood filled image:', floodFill2(image, sr, sc, color))