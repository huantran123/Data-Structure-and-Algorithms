// https://leetcode.com/problems/reverse-bits/

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */

// Divide & Conquer
var reverseBits = function(n) {
  // convert n from number to string
  // pad all 0 to the front to form a string of length 32 if not sufficient
  n = n.toString(2).padStart(32, '0');

  // divide string to left and right part, recursively until each piece has length of 1
  // switch the left and right part and return
  // recursively switching the left and right results, we have the reverse solution
  let divideAndConquer = (s) => {
      if (s.length === 1) return s
      let mid = Math.floor(s.length / 2)
      // return right + left
      return divideAndConquer(s.slice(mid)) + divideAndConquer(s.slice(0, mid))
  }

  // apply divideAndConquer to the original string n
  let result = divideAndConquer(n)
  // convert n back to a number
  return parseInt(result, 2)
};