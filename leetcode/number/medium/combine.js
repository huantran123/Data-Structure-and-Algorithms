// https://leetcode.com/problems/combinations/

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */

// backtracking algo
let combine = function(n, k) {
  const result = []
  const tempRes = []

  const dfs = (startNum, tempRes) => {
      // if the combination has k numbers
      // add to result and return
      if (tempRes.length === k) {
          result.push([...tempRes])
          return
      }

      // continue to branch out with the next number -> n
      for (let i = startNum + 1; i <= n; i++) {
          tempRes.push(i)
          dfs(i, tempRes)
          tempRes.pop()
      }
  }

  dfs(0, tempRes)

  return result
};