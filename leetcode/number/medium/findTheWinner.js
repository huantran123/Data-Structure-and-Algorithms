// https://leetcode.com/problems/find-the-winner-of-the-circular-game/

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

//  Using LOOP
let findTheWinner = function(n, k) {
  let arr = []
  for (let i = 1; i <= n; i++)
      arr.push(i)
  let index = 0
  while (arr.length > 1) {
      let steps = k
      while (steps > arr.length) {
          steps = steps - arr.length
      }
      index = (index + steps - 1 >= arr.length) ? index + steps - 1 - arr.length : index + steps - 1
      arr.splice(index, 1)
      if (index >= arr.length)
          index = 0
  }
  return arr[0]
};

// Using Recursion
let findTheWinner = function(n, k) {
  // generate the [1,...,n] array
  let arr = []
  for (let i = 1; i <= n; i++)
      arr.push(i)

  // Recursive helper function
  const helper = (idx) => {
      if (arr.length === 1) return arr[0]
      let steps = k
      while (steps > arr.length) {
          steps = steps - arr.length
      }
      idx = (idx + steps - 1 >= arr.length) ? idx + steps - 1 - arr.length : idx + steps - 1
      arr.splice(idx, 1)
      if (idx >= arr.length)
          idx = 0
      return helper(idx)
  }
  return helper(0)
}