// https://leetcode.com/problems/palindrome-partitioning/

/**
 * @param {string} s
 * @return {string[][]}
 */

// backtracking
let partition = function(s) {
  const result = []
  const tempRes = []

  const dfs = (start, tempRes) => {
      // check if each substring in tempRes is a palindrome
      // if there's one that is not, end recursion
      for (let i = 0; i < tempRes.length; i++) {
          if (!isPalindrome(tempRes[i])) {
              return
          }
      }

      // when the start pointer goes beyond the string length,
      // add tempRes to result
      if (start === s.length) {
          result.push([...tempRes])
          return
      }

      for (let i = start; i < s.length; i++) {
          tempRes.push(s.slice(start, i + 1))
          dfs(i + 1, tempRes)
          tempRes.pop()
      }
  }

  dfs(0, tempRes)

  return result
};

// check if a string starting at left and ending at right is a palindrome
let isPalindrome = function(s) {
  let left = 0
  let right = s.length - 1

  while (left <= right) {
      if (s[left] !== s[right])
          return false

      left++
      right--
  }

  return true
}