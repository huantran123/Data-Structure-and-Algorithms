// https://leetcode.com/problems/longest-palindromic-substring/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let palindrome = '';
  let count = 0;

  for (let i = 0; i < s.length; i++) {
      let forward = '';
      let backward = '';

      for (let j = i; j < s.length; j++) {
      forward += s[j];
      backward = s[j] + backward;

      if (forward === backward && count < forward.length) {
          count = forward.length;
          palindrome = forward;
      }
      }
  }

  return palindrome;
};