// https://leetcode.com/problems/maximum-split-of-positive-even-integers/

/**
 * @param {number} finalSum
 * @return {number[]}
 */

// backtracking
let maximumEvenSplit = function(finalSum) {
  // if finalSum is not an even integer, return []
  if (finalSum % 2 !== 0) return []

  let result = []
  const tempRes = []

  const dfs = (startNum, sum, tempRes) => {
      // when sum = finalSum, update result
      if (sum === finalSum)
          return result = tempRes

      // try with number starting from startNum as long as sum + number <= finalSum,
      // increase 2 to only select even numbers
      for (let i = startNum; sum + i <= finalSum; i += 2) {
          tempRes.push(i)
          dfs(i + 2, sum + i, tempRes)

          // we sequentially add numbers to tempRes
          // so when dfs return back, check if a result is found
          // if so, no need to continue searching other result
          // because the earlier the result is found, the more numbers contained in it
          if (result.length > 0) break

          tempRes.pop()
      }
  }

  dfs(2, 0, tempRes)

  return result
};