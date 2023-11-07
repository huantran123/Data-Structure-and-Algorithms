// https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// Sliding Window
let minimumDifference = function(nums, k) {
  // create a min variable and initialize it to be a very big number
  let min = +Infinity                                         // Time: O(1), Space: O(1)
  // sort the nums array in non-decreasing order
  nums.sort((a, b) => a - b)                                  // Time: O(nlogn), Space: O(1)

  // iterate over the nums array, end when i reaches index nums.length - k
  for (let i = 0; i <= nums.length - k; i++) {                // Time: O(n), Space: O(1)
      // element at index i is the lowest in the window range
      // and element at index i + k - 1 is the highest in the window range
      // update min if the difference is less than min
      min = Math.min(min, nums[i + k - 1] - nums[i])          // Time: O(1), Space: O(1)
  }

  return min                                                  // Time: O(1), Space: O(1)
};