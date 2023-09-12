// https://leetcode.com/problems/find-subsequence-of-length-k-with-the-largest-sum/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */


let maxSubsequence = function(nums, k) {
  // duplicate the nums array and sort it in non-decreasing order
  let result = [...nums]
  result.sort((a, b) => a - b)
  // select the last k numbers of the sorted array
  // those numbers would generate the max sum
  result = result.slice(result.length - k)

  // create an object to store the frequencies of numbers in sorted array
  let numObj = {}
  result.forEach(num => {
      if (numObj[num] === undefined) {
          numObj[num] = 1
      } else numObj[num]++
  })

  // reset the result array
  result = []
  // loop over the nums array
  for (let i = 0; i < nums.length; i++) {
      // if current number exists in numObj and frequency > 0
      if (numObj[nums[i]] > 0) {
          // add to result array
          result.push(nums[i])
          // decrement frequency
          numObj[nums[i]]--
      }
  }
  return result
};