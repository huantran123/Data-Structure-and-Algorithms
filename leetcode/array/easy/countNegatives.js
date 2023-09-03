// https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/

/**
 * @param {number[][]} grid
 * @return {number}
 */

let countNegatives = function(grid) {
  let count = 0
  for (let i = 0; i < grid.length; i++) {
      // if first element is negative, then the rest is also negative
      if (grid[i][0] < 0) {
          count += grid[i].length
          continue
      }
      // if last element is positive, then no negative on this row
      if (grid[i][grid[i].length - 1] >= 0)
          continue

      let left = 0
      let right = grid[i].length - 1
      while (left <= right) {
          let mid = Math.floor((left + right) / 2)
          // if mid element is negative
          if (grid[i][mid] < 0) {
              // then all elements from mid to end are negative
              count += right - mid + 1
              // update right pointer to left side of mid and explore the left side
              right = mid - 1
          } else {
              // if mid element is postive, then explore the right side of mid
              left = mid + 1
          }
      }
  }
  return count
};