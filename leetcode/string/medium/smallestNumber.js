// https://leetcode.com/problems/construct-smallest-number-from-di-string/

/**
 * @param {string} pattern
 * @return {string}
 */

// backtracking
let smallestNumber = function(pattern) {
  let result = Infinity
  const seen = new Set()

  const dfs = (curString, startIndex, seen) => {
      // if the result string has length n + 1
      if (startIndex === pattern.length + 1) {
          // update result if new result is smaller
          result = Math.min(result, Number(curString)) + ''
          return
      }

      // try with digits from 1 to 9
      for (let i = 1; i <= 9; i++) {
          // if the prev char is 'I', skip if current digit is less than last digit in curString
          if (pattern[startIndex - 1] === 'I' && i < Number(curString[curString.length - 1]))
              continue

          // if the prev char is 'D', end recursion if current digit is greater than last digit in curString
          // because if we continue, digit gets bigger and still greater than last digit in curString
          if (pattern[startIndex - 1] === 'D' && i > Number(curString[curString.length - 1]))
              return

          // skip if curString already included this digit
          if (seen.has(i)) continue

          // otherwise, add digit as seen
          seen.add(i)
          // do recursion with curString added this digit and startIndex incremented
          dfs(curString + i, startIndex + 1, seen)
          // backtrack: remove current digit and move on to the next option
          seen.delete(i)
      }
  }

  dfs('', 0, seen)

  return result
};