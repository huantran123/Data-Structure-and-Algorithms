
const nQueensBacktrackIterative = () => {
  const result = []                                                                 // Time: 1, Space: n

  // queen 1
  for (let i = 0; i < 4; i++) {                                                     // Time: n, Space: 1
    // queen 2
    for (let j = 0; j < 4; j++) {                                                   // Time: n, Space: 1
      // position state of queen 1 & 2
      const state2 = [                                                              // Time: 1, Space: 1
        // [queenNum, row, col]
        [1, 0, i],
        [2, 1, j],
      ]
      // if queen 1 & 2's positions are not qualified, stop branching
      // and continue to the other position options
      if (isBound(state2)) continue                                                 // Time: 2^2, Space: n

      // queen 3
      for (let k = 0; k < 4; k++) {                                                 // Time: n, Space: 1
        // position state of queen 1, 2, & 3
        const state3 = [                                                            // Time: 1, Space: 1
          [1, 0, i],
          [2, 1, j],
          [3, 2, k],
        ]
        // if queen 1, 2, 3's positions are not qualified, stop branching
        // and continue to the other position options
        if (isBound(state3)) continue                                               // Time: 3^2, Space: n

        // queen 4
        for (let l = 0; l < 4; l++) {                                               // Time: n, Space: 1
          // position state of queen 1, 2, 3, & 4
          const state4 = [                                                          // Time: 1, Space: 1
            [1, 0, i],
            [2, 1, j],
            [3, 2, k],
            [4, 3, l],
          ]
          // if queen 1, 2, 3, 4's positions are not qualified, stop branching
          // and continue to the other position options
          if (isBound(state4)) continue                                             // Time: 4^2, Space: n

          // otherwise add the positions of the 4 queens to the result array
          result.push(state4)                                                       // Time: 1, Space: 1
        }
      }
    }
  }

  return result
}
// Total time: O(n^n) (in case there are n queens. In this case, O(4^4) = O(1))
// Total space: O(n)
// Time and space might look too much, but thanks to the bounding conditions, actual times will be a lot less than that


const isBound = function(tempRes) {
  const cols = new Set()                                                            // Time: 1, Space: n
  const forbiddenPos = new Set()                                                    // Time: 1, Space: n

  tempRes.forEach((queen) => {                                                      // Time: n, Space: 1
    let [queenNum, row, col] = queen                                                // Time: 1, Space: 1
    cols.add(col)                                                                   // Time: 1, Space: 1

    for (let j = 0; j <= 4; j++) {                                                  // Time: n, Space: 1
      // add to forbiddenPos set: bottom right, top left, bottom left, top right
      forbiddenPos.add('' + (row + 1 + j) + '-' + (col + 1 + j))                    // Time: 1, Space: 1
      forbiddenPos.add('' + (row - 1 - j) + '-' + (col - 1 - j))                    // Time: 1, Space: 1
      forbiddenPos.add('' + (row + 1 + j) + '-' + (col - 1 - j))                    // Time: 1, Space: 1
      forbiddenPos.add('' + (row - 1 - j) + '-' + (col + 1 + j))                    // Time: 1, Space: 1
    }
  })

  // get the last added queen
  const [lastQNum, lastQRow, lastQCol] = tempRes[tempRes.length - 1] || []          // Time: 1, Space: 1

  // check if the last queen is not placed in any diagonal of previous queens
  // or if last queen is not placed in the same column as any previous queen
  if (
    // if last queen is not placed in any diagonal of previous queen
    // the forbiddenPos set should not have position of last queen
    forbiddenPos.has(`${lastQueenRow}-${lastQueenCol}`) ||                          // Time: 1, Space: 0
    // OR if last queen is not placed on the same column as prev queens,
    // cols set should have the number of columns the same as the number of queens
    cols.size !== tempRes.length
  ) {
    // if so, stop this branching
    return true                                                                     // Time: 1, Space: 0
  }
  // if not, continue to branch
  return false                                                                      // Time: 1, Space: 0
}
// Total time: O(n^2)
// Total space: n

console.log('Queens successful setups:', nQueensBacktrackIterative())