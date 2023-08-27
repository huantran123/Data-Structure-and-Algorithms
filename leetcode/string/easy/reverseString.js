// https://leetcode.com/problems/reverse-string/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

//  Using for loop
let reverseString = function(s) {
  let temp = ''
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
      temp = s[i]
      s[i] = s[s.length - 1 - i]
      s[s.length - 1 - i] = temp
  }
};