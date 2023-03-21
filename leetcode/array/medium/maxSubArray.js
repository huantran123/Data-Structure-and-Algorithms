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



console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])) // 6
console.log(maxSubArray([1])) // 6
console.log(maxSubArray([5,4,-1,7,8])) // 23


// Brute force solution:
// var maxSubArray = function(nums) {
//   var maxSum = nums[0];
//   for (var i = 0; i < nums.length; i++) {
//     var sum = 0;
//     for (var j = i; j < nums.length; j++) {
//       sum += nums[j];
//       maxSum = Math.max(sum, maxSum);
//     }
//   }
//   return maxSum
// }