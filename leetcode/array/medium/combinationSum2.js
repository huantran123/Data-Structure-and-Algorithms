// https://leetcode.com/problems/combination-sum-ii/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

// backtracking
let combinationSum2 = function(candidates, target) {
  candidates.sort((a, b) => a - b)

  const result = []
  const tempRes = []

  const dfs = (startIndex, curSum, tempRes) => {
      if (curSum > target) return

      if (curSum === target) {
          result.push([...tempRes])
          return
      }

      for (let i = startIndex; i < candidates.length; i++) {
          // avoid adding duplicated combination
          if (i > startIndex && candidates[i] === candidates[i - 1])
              continue

          tempRes.push(candidates[i])
          dfs(i + 1, curSum + candidates[i], tempRes)
          tempRes.pop()
      }
  }

  dfs(0, 0, tempRes)

  return result
};