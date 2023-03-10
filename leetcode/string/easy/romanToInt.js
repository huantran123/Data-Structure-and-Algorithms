// https://leetcode.com/problems/roman-to-integer/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  var symbolValue = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
  };

  var result = 0;

  for (var i = 0; i < s.length; i++) {
      if (symbolValue[s[i]] < symbolValue[s[i + 1]]) {
          result -= symbolValue[s[i]];
      } else {
          result += symbolValue[s[i]];
      }
  }

  return result;
};