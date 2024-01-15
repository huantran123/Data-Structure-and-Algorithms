// https://leetcode.com/problems/permutations/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// backtracking
let permute = function(nums) {
  const result = []
  const tempRes = []
  const seen = new Set()

  const dfs = (tempRes, seen) => {
      // if tempRes contains the same number of integers as nums
      // add tempRes to result array and return
      if (tempRes.length === nums.length) {
          result.push([...tempRes])
          return
      }

      // branching out
      for (let i = 0; i < nums.length; i++) {
          // if current number is already seen, continue to explore next number
          if (seen.has(nums[i]))
              continue

          // otherwise, add number to tempRes and seen set
          tempRes.push(nums[i])
          seen.add(nums[i])

          // recursively add the next number to tempRes
          dfs(tempRes, seen)

          // remove number out of tempRes and seen set to backtrack the next number
          tempRes.pop()
          seen.delete(nums[i])
      }
  }

  // start with empty tempRes and seen set
  dfs(tempRes, seen)

  return result
};