// https://leetcode.com/problems/restore-ip-addresses/

/**
 * @param {string} s
 * @return {string[]}
 */

//  backtracking
let restoreIpAddresses = function(s) {
  const result = []
  const tempRes = []
  const seenRes = new Set()

  const dfs = (startIndex, tempRes) => {
      // if tempRes has 4 integers
      if (tempRes.length === 4) {
          // end recursion if s still has remaining digits
          if (startIndex < s.length) return
          else {
              // otherwise, join integers in to the IP string
              const string = tempRes.join('.')

              // if the IP string length (exclude 3 dots) has less
              // digits than s, that's invalid, end recursion
              if (string.length - 3 < s.length) return

              // if this IP hasn't found before,
              // add it to result and seen set
              if (!seenRes.has(string)) {
                  result.push(string)
                  seenRes.add(string)
              }
              return  // end recursion
          }
      }

      // if tempRes doesn't have 4 integers
      // but there's no digit left to explore, end recursion
      if (tempRes.length < 4 && startIndex >= s.length)
          return

      // try getting integers of 1 digit, 2 digits, and 3 digits
      for (let i = 1; i <= 3; i++) {
          // get i-digit integer
          const num = Number(s.slice(startIndex, startIndex + i))

          // if integer is out of bound, end recursion
          if (num < 0 || num > 255) return

          tempRes.push(num)
          dfs(startIndex + i, tempRes)
          tempRes.pop()
      }
  }

  dfs(0, tempRes)

  return result
};