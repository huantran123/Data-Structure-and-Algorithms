// https://leetcode.com/problems/single-element-in-a-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */

let singleNonDuplicate = function(nums) {
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
      // for this problem, length of nums is always an odd number
      // on the left side of the single #, first # of each pair is in even index
      // and on the right side of the single #, first # of each pair is in odd index
      let mid = Math.floor((left + right) / 2)
      // if mid is an even index
      if (mid % 2 === 0) {
          // check if mid element is the first # of a pair
          if (nums[mid + 1] === nums[mid]) {
              // if so then the single # must be on the right of mid
              // so move the left pointer to the right of mid (skip 2nd # of the pair)
              left = mid + 2

              // if mid element is not the 1st # of a pair
              // then single # must be on the left of mid
              // so move the left pointer to the right of mid (skip 1st # of the pair)
          } else right = mid - 2

      // if mid is an odd index
      } else {
          // check if mid element is the first # of a pair
          if (nums[mid] === nums[mid + 1]) {
              // if so then the single # must be on the left of mid
              // so move the left pointer to the right of mid
              right = mid - 1

              // if mid element is not the 1st # of a pair
              // then single # must be on the right of mid
              // so move the left pointer to the right of mid
          } else left = mid + 1
      }
  }
  // single # will be in the final index of the left pointer
  return nums[left]
};

