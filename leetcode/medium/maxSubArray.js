// https://leetcode.com/problems/maximum-subarray/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  var maxSum = nums[0];
  for (var i = 1; i < nums.length; i++) {
      nums[i] = Math.max(nums[i], nums[i-1] + nums[i]);
      if (nums[i] > maxSum) {
          maxSum = nums[i];
      }
  }
  return maxSum;
};