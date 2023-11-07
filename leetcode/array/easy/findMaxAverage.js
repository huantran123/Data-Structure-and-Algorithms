// https://leetcode.com/problems/maximum-average-subarray-i/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// Sliding Window
let findMaxAverage = function(nums, k) {
  // create a variable to store the max average
  let maxAvg = -Infinity                                      // Time: O(1), Space: O(1)
  // create a variable to store the sum of current window range
  let sum = 0                                                 // Time: O(1), Space: O(1)

  // iterate over nums array
  for (let i = 0; i < nums.length; i++) {                     // Time: O(n), Space: O(1)
      // if window length hasn't reaches length k yet
      if (i < k - 1) {                                        // Time: O(1), Space: O(1)
          // add up current element to sum
          sum += nums[i]                                      // Time: O(1), Space: O(1)

      // when window length reaches length k
      } else {
          // add up current element to sum
          sum += nums[i]                                      // Time: O(1), Space: O(1)
          // update maxAvg if avg of elements in window > maxAvg
          maxAvg = Math.max(maxAvg, sum / k)                  // Time: O(1), Space: O(1)
          // remove the element at the start of the window off the sum to prepare for next window slide
          sum -= nums[Math.abs(k - i - 1)]                    // Time: O(1), Space: O(1)
      }
  }

  return maxAvg                                               // Time: O(1), Space: O(1)
};