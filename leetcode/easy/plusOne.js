// https://leetcode.com/problems/plus-one/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  var passOne = false;
  for (var i = digits.length - 1; i >= 0; i--) {
      if (digits[i] < 9) {
          digits[i] += 1;
          return digits;
      } else {
          digits[i] = 0
          passOne = true;
      }
  }
  if (passOne) {
      digits.unshift(1);
  }
  return digits;
};