// https://leetcode.com/problems/find-target-indices-after-sorting-array/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//  Brute force
// let targetIndices = function(nums, target) {
//     nums.sort((a, b) => a - b)
//     const result = []
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === target)
//             result.push(i)
//     }
//     return result
// };

// Binary search
let targetIndices = function(nums, target) {
  let result = []
  if (!nums.includes(target)) return result

  nums.sort((a, b) => a - b)
  let left = 0
  let right = nums.length - 1
  let start = 0
  let end = 0
  while (left <= right) {
      let mid = Math.floor((left + right) / 2)
      if (nums[mid] === target) {
          result.push(mid)
          start = mid - 1
          end = mid + 1
          while (nums[start] === target) {
              result.push(start--)
          }
          while (nums[end] === target) {
              result.push(end++)
          }
          break
      } else if (nums[mid] > target) {
          right = mid - 1
      } else {
          left = mid + 1
      }
  }
  return result.sort((a, b) => a - b)
}