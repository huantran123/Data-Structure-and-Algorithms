// https://leetcode.com/problems/letter-combinations-of-a-phone-number/

/**
 * @param {string} digits
 * @return {string[]}
 */

// backtracking
let letterCombinations = function(digits) {
  const digitsToLetters = {
      2: ['a', 'b', 'c'],
      3: ['d', 'e', 'f'],
      4: ['g', 'h', 'i'],
      5: ['j', 'k', 'l'],
      6: ['m', 'n', 'o'],
      7: ['p', 'q', 'r', 's'],
      8: ['t', 'u', 'v'],
      9: ['w', 'x', 'y', 'z']
  }

  // if digits is an empty string, return []
  if (digits.length === 0) return []

  const result = []

  const dfs = (startIndex, curString) => {
      // if the pointer reaches the last digit
      // a string combination is completed,
      // so add it to result and return
      if (startIndex === digits.length) {
          result.push(curString)
          return
      }

      // for each letter corresponding to the current digits
      digitsToLetters[digits[startIndex]].forEach((letter) => {
          // go to the next recursion
          // with the pointer moves to the next digit
          // and the current letter adding up to the current string
          dfs(startIndex + 1, curString + letter)
      })
  }

  // start recursion with the first digit and an empty combination string
  dfs(0, '')

  return result
};