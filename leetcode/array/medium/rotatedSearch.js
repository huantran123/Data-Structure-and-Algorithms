// https://leetcode.com/problems/search-in-rotated-sorted-array/

var rotatedSearch = function(nums, target, left = 0, right = nums.length - 1) {
  if (nums.length <= 1) {
      return nums[0] === target ? 0 : -1
  }

  // Edge case
  if (right - left === 1) {
      if (nums[left] === target) {
          return left;
      } else if (nums[right] === target) {
          return right;
      } else {
          return -1;
      }
  }

  let mid = Math.floor((left + right) / 2);

  // if mid val > right val, the min value is in this range
  if (nums[mid] > nums[right]) {
    // So we might check the left portion first because it is sorted in order
    // If target is in this range, then recursively searching from left to mid
    if (nums[left] <= target && nums[mid] >= target) {
      return rotatedSearch(nums, target, left, mid)
    // Otherwise searching the right portion
    } else {
      return rotatedSearch(nums, target, mid, right)
    }
  // if mid val < right val, this right portion is sorted in order
  } else {
    // If target is in this range, then recursively searching from mid to right
    if (nums[mid] <= target && nums[right] >= target) {
      return rotatedSearch(nums, target, mid, right)
    } else {
      // Otherwise searching the left portion
      return rotatedSearch(nums, target, left, mid)
    }hftran12345
    
  }
};