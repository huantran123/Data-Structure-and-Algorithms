// https://leetcode.com/problems/subsets-ii/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// backtracking
let subsetsWithDup = function(nums) {
  // sort nums array to avoid multiple variations of the same subsets
  nums.sort((a, b) => a - b)
  const result = []
  const tempRes = []
  const seenRes = new Set()

  const dfs = (startNum, tempRes, seenRes) => {
      // if length of tempRes is less than length of nums
      // and subset has never been added to result array
      // add tempRes to result and seenRes and continue exploring next number
      const tempResString = tempRes.join('-')
      if (tempRes.length <= nums.length && !seenRes.has(tempResString)) {
          result.push([...tempRes])
          seenRes.add(tempResString)
      } else {
          // otherwise end the recursion and go back
          return
      }

      // traverse from start number to the end of nums
      for (let i = startNum; i < nums.length; i++) {
          // add current number to tempRes
          tempRes.push(nums[i])
          // recursively exploring start from the next number
          dfs(i + 1, tempRes, seenRes)
          // after exploring the branch, remove the current number
          // to backtrack and continue to explore the next number
          tempRes.pop()
      }
  }

  // start with number at index 0 and empty tempRes and seenRes set
  dfs(0, tempRes, seenRes)

  return result
};