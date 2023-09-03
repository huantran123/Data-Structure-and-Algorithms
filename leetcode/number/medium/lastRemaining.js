// https://leetcode.com/problems/elimination-game

/**
 * @param {number} n
 * @return {number}
 */

//  Using LOOP
let lastRemaining = function(n) {
  let remaining = n
  let leftToRight = true
  let head = 1
  let step = 1
  while (remaining > 1) {
      if (leftToRight || remaining % 2 === 1) {
          head += step
      }
      remaining = Math.floor(remaining / 2)
      leftToRight = !leftToRight
      step *= 2
  }
  return head
};

// Using Recursion
let lastRemaining = function(n) {
  const helper = (head, remaining, leftToRight, step) => {
      if (remaining === 1) return head
      if (leftToRight || remaining % 2 === 1) {
          head += step
      }
      remaining = Math.floor(remaining / 2)
      leftToRight = !leftToRight
      step *= 2
      return helper(head, remaining, leftToRight, step)
  }
  return helper(1, n, true, 1)
}