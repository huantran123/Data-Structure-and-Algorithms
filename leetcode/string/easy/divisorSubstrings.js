// https://leetcode.com/problems/find-the-k-beauty-of-a-number/

/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */

// Sliding Window
// Total Time: O(n) (since num <= 10^9 and k <= num.length, so k <= 10, we treat k as a constant)
// total Space: O(1)
var divisorSubstrings = function(num, k) {
  let count = 0                                                   // Time: O(1), Space: O(1)
  // convert give num to a string
  let numString = num.toString()                                  // Time: O(n), Space: O(1)
  // initialize the window with length of k, start from 0
  let subNumString = numString.slice(0, k)                        // Time: O(k), Space: O(1)

  for (let i = 0; i <= numString.length - k; i++) {               // Time: O(n-k), Space: O(1)
      // convert window into number
      let subNum = parseInt(subNumString)                         // Time: O(k), Space: O(1)

      // if subNum is divisible by num, increment count
      if (num % subNum === 0)                                     // Time: O(1), Space: O(1)
          count++                                                 // Time: O(1), Space: O(1)

      // sliding the window: remove the start digit, at the next digit at the end
      subNumString = subNumString.slice(1)                        // Time: O(k-1), Space: O(1)
      subNumString += numString[i + k]                            // Time: O(1), Space: O(1)
  }

  return count
};


