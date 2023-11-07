// https://leetcode.com/problems/contains-duplicate-ii/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

// Sliding Window
// Time: O(n), Space: O(n)
let containsNearbyDuplicate = function(nums, k) {
  // create 2 pointers at indices 0 and 1
  let start = 0                                           // Time: O(1), Space: O(1)
  let end = 1                                             // Time: O(1), Space: O(1)
  // create a set to store numbers in the window, initilize with number at index 0
  let seen = new Set([nums[0]])                           // Time: O(1), Space: O(n)

  // looping as long as start pointer <= end pointer and end pointer is within array length
  while (start <= end && end < nums.length) {             // Time: O(n), Space: O(1)
      // if distance between start and end > k
      if (end - start > k) {                              // Time: O(1), Space: O(1)
          // remove number at index start off the set
          seen.delete(nums[start])                        // Time: O(1), Space: O(1)
          // move start to next index (slide the window)
          start++                                         // Time: O(1), Space: O(1)
      }

      // return true if current number at index end is already in the set
      // (exist a prev number within window range === current num)
      if (seen.has(nums[end])) return true                // Time: O(1), Space: O(1)

      // if not, then add current num at index end to the set
      // and expand the window by moving end to the next index
      seen.add(nums[end])                                 // Time: O(1), Space: O(1)
      end++                                               // Time: O(1), Space: O(1)
  }

  return false
};