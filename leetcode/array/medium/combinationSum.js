// https://leetcode.com/problems/combination-sum/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

// backtracking
let combinationSum = function(candidates, target) {
  const result = []
  const tempRes = []

  const dfs = (sum, tempRes) => {
      // if sum exceeds target, end recursion and go back
      if (sum > target)
          return

      // if sum = target, add tempRes to result
      // end recursion and go back
      if (sum === target) {
          result.push([...tempRes])
          return
      }

      for (let i = 0; i < candidates.length; i++) {
          // to avoid adding duplidated combinations
          // check if current number is greater than last number in tempRes
          if (candidates[i] > tempRes[tempRes.length - 1])
              // if so skip to the next number
              // because to move to this number, the prev number
              // (which is < current number) has reached its
              // allowed limit that < target, so there's no reason to
              // explore those smaller numbers again
              continue

          tempRes.push(candidates[i])
          dfs(sum + candidates[i], tempRes)
          tempRes.pop()   // backtrack
      }
  }

  // start with sum 0 and empty tempRes
  dfs(0, tempRes)

  return result
};