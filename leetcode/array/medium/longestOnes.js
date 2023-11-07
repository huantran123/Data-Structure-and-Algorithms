// https://leetcode.com/problems/max-consecutive-ones-iii/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// Sliding Window - Brute Force
// Time: O(n^2)
// let longestOnes = function(nums, k) {
//     let maxLen = 0
//     let count = k
//     let start = 0
//     let end = 0
//     while (end < nums.length) {
//         if (nums[end] === 1) {
//             end++
//         } else {
//             if (count > 0) {
//                 end++
//                 count--
//             } else {
//                 maxLen = Math.max(maxLen, end - start)
//                 start++
//                 end = start
//                 count = k
//             }
//         }
//     }
//     maxLen = Math.max(maxLen, end - start)
//     return maxLen
// };

// Sliding Window - Optimized solution
// Time: O(n)
let longestOnes = function(nums, k) {
  let start = 0
  let end = 0

  while (end < nums.length) {
      // when end reaches a 0, decrement k (flip 1 time)
      if (nums[end] === 0)
          k--

      // check if k < 0 (exceed the allowed flip times, more than k 0's in the window)
      if (k < 0) {
          // check if start is at a 0
          if (nums[start] === 0)
              // if so then when moving start to the next point
              // it means a 0 is removed out of the window
              // increment k
              k++

          // move start to the next point
          start++
      }

      // move end to the next point
      end++
  }

  // return the distance between end and start
  return end - start
}