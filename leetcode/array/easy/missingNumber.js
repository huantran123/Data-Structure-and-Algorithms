// https://leetcode.com/problems/missing-number/

/**
 * @param {number[]} nums
 * @return {number}
 */

// var missingNumber = function(nums) {
//     var obj = {};
//     for (var i = 0; i <= nums.length; i++) {
//         obj[i] = i;
//     }
//     for (var j = 0; j < nums.length; j++) {
//         if (obj[nums[j]] !== undefined) {
//             delete obj[nums[j]];
//         }
//     }
//     return Object.keys(obj)[0];
// };

// Faster way
// var missingNumber = function(nums) {
//     // Sum of numbers from 1 to n
//     var sum1 = (nums.length * (nums.length + 1)) / 2;

//     // Sum of all numbers in nums
//     var sum2 = 0;
//     for (var i = 0; i < nums.length; i++) {
//         sum2 += nums[i];
//     }

//     // Missing number is equal to the difference between sum1 and sum2
//     return sum1 - sum2;
// }

let missingNumber = function(nums) {
  nums.sort((a, b) => a - b)
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
      let mid = Math.floor((left + right) / 2)
      if (nums[mid] > mid) {
          right = mid - 1
      } else {
          left = mid + 1
      }
  }
  return left
}