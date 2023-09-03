// https://leetcode.com/problems/peak-index-in-a-mountain-array/

/**
 * @param {number[]} arr
 * @return {number}
 */

let peakIndexInMountainArray = function(arr) {
  let peakIndex = 0
  let left = 0
  let right = arr.length - 1
  while (left <= right) {
      let mid = Math.floor((left + right) / 2)
      // check if right element of mid is greater than mid
      if (arr[mid+1] > arr[mid]) {
          // then move left pointer to the right side of mid
          left = mid + 1
      } else if (arr[mid-1] > arr[mid]) {
          // otherwise if left of mid is greater than mid
          // then move right pointer to the left side of mid
          right = mid - 1
      } else {
          // if neither left and right is not greater than mid
          // then peak is mid
          peakIndex = mid
          break
      }
  }
  return peakIndex
};