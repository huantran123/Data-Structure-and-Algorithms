// https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/

/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */

let shipWithinDays = function(weights, days) {
  let left = Math.max(...weights)
  let right = weights.reduce((sum, val) => sum += val, 0)

  let minCapacity = 0

  while (left <= right) {
      let mid = Math.floor((left + right) / 2)
      if (findDaysForCapacity(weights, mid) <= days) {
          minCapacity = mid
          right = mid - 1
      } else {
          left = mid + 1
      }
  }
  return minCapacity
};

let findDaysForCapacity = function(weights, capacity) {
  let curCapacity = 0
  let daysToShip = 1
  for (let i = 0; i < weights.length; i++) {
      curCapacity += weights[i]
      if (curCapacity > capacity) {
          daysToShip++
          curCapacity = weights[i]
      }
  }
  return daysToShip
}