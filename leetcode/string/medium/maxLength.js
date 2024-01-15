// https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/

/**
 * @param {string[]} arr
 * @return {number}
 */

// backtracking
let maxLength = function(arr) {
  let result = 0

  const dfs = (curString, startIndex) => {
      // return if current string contains duplicated chars
      if (curString.length !== new Set(curString.split('')).size)
          return

      // update result if current string contains more unique chars
      result = Math.max(result, curString.length)

      for (let i = startIndex; i < arr.length; i++) {
          dfs(curString + arr[i], i + 1)
      }
  }

  dfs('', 0)

  return result
};