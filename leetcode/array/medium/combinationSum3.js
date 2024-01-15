// https://leetcode.com/problems/combination-sum-iii/

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */

// backtracking
let combinationSum3 = function(k, n) {
  const result = []
  const tempRes = []

  const dfs = (start, sum, tempRes) => {
      if (tempRes.length > k) return

      if (tempRes.length === k) {
          if (sum === n) {
              result.push([...tempRes])
              return
          }
      }

      for (let i = start; i <= 9; i++) {
          tempRes.push(i)
          dfs(i + 1, sum + i, tempRes)
          tempRes.pop()
      }
  }

  dfs(1, 0, tempRes)

  return result
};