// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let range = [-1, -1]
  let left = 0
  let right = nums.length - 1
  // a variable to track for the first time the target is found
  let foundTarget = false

  while ((left <= right)) {
      // if left and right go out of the array range, then break the loop
      if (left < 0 && right >= nums.length) break

      let mid = Math.floor((left + right) / 2)
      if (nums[mid] === target) {
          // when target is found for the first time
          if (!foundTarget) {
              // update left and right to be 2 sides of the mid
              left = mid - 1
              right = mid + 1
              // update foundTarget so this condition will not qualify next time
              foundTarget = true
              // update the range to be at mid index
              range = [mid, mid]
          } else {
              // after first time found, update left and right to move backward to the ends of array
              left--
              right++
          }
          // when both left and right elements not equal to target, the range ends, so break the loop
          if (nums[left] !== target && nums[right] !== target) {
              break
          } else {
              // update the range value if left and right equal to target, otherwise remain the range
              range[0] = nums[left] === target ? left : range[0]
              range[1] = nums[right] === target ? right : range[1]
          }
      // if mid element is less than target, drop the left side
      } else if (nums[mid] < target) {
          left = mid + 1
      // if mid element is greater than target, drop the right side
      } else {
          right = mid - 1
      }
  }
  return range
};