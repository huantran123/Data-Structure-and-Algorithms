// https://leetcode.com/problems/k-diff-pairs-in-an-array/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// Two Pointers
// Time: O(nlogn), Space: O(1)
let findPairs = function(nums, k) {
  let count = 0

  // sort array in non-decreasing order
  nums.sort((a, b) => a - b)

  // create 2 pointers, pointer2 should be always > pointer1
  let pointer1 = 0
  let pointer2 = 1

  // looping until pointer2 reaches end of array
  while (pointer2 < nums.length) {
      // if value of pointer 2 is repeated in the next index
      // OR if pointer1 catches up with pointer2
      if (nums[pointer2 + 1] === nums[pointer2] || pointer1 === pointer2) {
          // move pointer2 to the next index and continue next round
          pointer2++
          continue
      }

      let diff = nums[pointer2] - nums[pointer1]
      // if diff = k, increment count and move pointer2 to the next index
      if (diff === k) {
          count++
          pointer2++
      // if diff < k, pointer2 should be bigger, so move pointer2 to the next index
      } else if (diff < k) {
          pointer2++
      // if diff > k, pointer1 should be bigger, so move pointer1 to the next index
      } else {
          pointer1++
      }
  }
  return count
};