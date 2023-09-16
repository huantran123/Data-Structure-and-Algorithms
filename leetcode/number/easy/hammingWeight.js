// https://leetcode.com/problems/number-of-1-bits/

/**
 * @param {number} n - a positive integer
 * @return {number}
 */

// Brute force
let hammingWeight1 = function(n) {
    let count = 0
    n = n.toString(2)
    for (let i = 0; i < n.length; i++) {
        if (n[i] === '1') count++
    }
    return count
};

// Divide and Conquer - Time: O(nlogn) - Space: O(n)
// recursively break input into 2 pieces left and right
// repeatedly breaking until each piece has length of 1
// check if value of the piece is '1' then return 1 otherwise return 0
// sum up result returned from left part and right part, return the sum
let hammingWeight2 = function(n) {
  if (typeof n === 'number')
      n = n.toString(2)

  if (n.length === 1) return n[0] === '1' ? 1 : 0
  let mid = Math.floor(n.length / 2)

  return hammingWeight2(n.slice(0, mid)) + hammingWeight2(n.slice(mid))
}