// https://leetcode.com/problems/subsets/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// backtracking
let subsets = function(nums) {
  const result = []
  const tempRes = []

  const dfs = (startNum, tempRes) => {
      // if length of tempRes is less than length of nums
      // add tempRes to result and continue exploring next number
      if (tempRes.length <= nums.length) {
          result.push([...tempRes])
      } else {
          // otherwise end the recursion and go back
          return
      }

      // traverse from start number to the end of nums
      for (let i = startNum; i < nums.length; i++) {
          // add current number to tempRes
          tempRes.push(nums[i])
          // recursively exploring start from the next number
          dfs(i + 1, tempRes)
          // after exploring the branch, remove the current number
          // to backtrack and continue to explore the next number
          tempRes.pop()
      }
  }

  // start with number at index 0 and empty tempRes
  dfs(0, tempRes)

  return result
};