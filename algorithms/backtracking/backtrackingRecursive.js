
const nQueesBacktrackRecursive = (n) => {
  const result = []                                                                 // Time: 1, Space: n
  const tempRes = []                                                                // Time: 1, Space: n

  const dfs = (queenNum, tempRes) => {
    // STEP 2: BOUNDING CONDITIONS TO KILL BRANCHING
    // =================================================================================================
    const cols = new Set()                                                          // Time: 1, Space: n
    const forbiddenPos = new Set()                                                  // Time: 1, Space: n

    tempRes.forEach(queen => {                                                      // Time: n, Space: n
      const [queenNum, row, col] = queen                                            // Time: 1, Space: 3
      cols.add(col)                                                                 // Time: 1, Space: 1

      for (let i = 0; i <= n; i++) {                                                // Time: n, Space: 1
        forbiddenPos.add(`${row + 1 + i}-${col + 1 + i}`)                           // Time: 1, Space: 1
        forbiddenPos.add(`${row - 1 - i}-${col - 1 - i}`)                           // Time: 1, Space: 1
        forbiddenPos.add(`${row + 1 + i}-${col - 1 - i}`)                           // Time: 1, Space: 1
        forbiddenPos.add(`${row - 1 - i}-${col + 1 + i}`)                           // Time: 1, Space: 1
      }
    })

    const [lastQNum, lastQRow, lastQCol] = tempRes[tempRes.length - 1] || []        // Time: 1, Space: 3

    if (
      forbiddenPos.has(`${lastQRow}-${lastQCol}`) ||                                // Time: 1, Space: 0
      cols.size !== tempRes.length                                                  // Time: 1, Space: 0
    ) {
      return                                                                        // Time: 1, Space: 0
    }
    // END STEP 2 HERE - Total time of step 2: O(n^2), Total space of step 2: O(n)
    // =================================================================================================

    // STEP 1: BRANCHING OUT
    // =================================================================================================
    if (queenNum > n) {                                                             // Time: 1, Space: 0
      result.push([...tempRes])                                                     // Time: n, Space: 1
      return
    }

    for (let i = 0; i < n; i++) {                                                   // Time: n, Space: 1
      // queenPos = [queenNum, row, col]
      const queenPos = [queenNum, queenNum - 1, i]                                  // Time: 1, Space: 1
      tempRes.push(queenPos)                                                        // Time: 1, Space: 1
      dfs(queenNum + 1, tempRes)                                                    // Time: n^2, Space: n
      tempRes.pop()                                                                 // Time: 1, Space: 0
    }
    // END STEP 1 HERE - Total time of step 1: O(n^3), Total space of step 1: O(n)
    // =================================================================================================
  }
  // Total time of dfs: O(n^3)
  // Total space of dfs: O(n)

  dfs(1, tempRes)                                                                   // Time: n^3, Space: n

  return result
}
// Total time: O(n^3)
// Total space: O(n)

console.log('Queens succesful setups:', nQueesBacktrackRecursive(10))