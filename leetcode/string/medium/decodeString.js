// https://leetcode.com/problems/decode-string/

/**
 * @param {string} s
 * @return {string}
 */

let decodeString = function(s) {
  // repeatedly run until there's no '[' in the string
  while (s.indexOf('[') !== -1) {
      // create a left pointer at the index of the last '['
      let leftIndex = s.lastIndexOf('[')
      // extract a substring start from the left pointer to the end of string
      const subStringFromLeftIndex = s.substring(leftIndex)
      // create a right pointer at the index of the first ']' in the substring
      // that's also the closing bracket of the last '[' at the left pointer
      let rightIndex = leftIndex + subStringFromLeftIndex.indexOf(']')
      // extract the encoded word between the '[' and ']'
      const encodedWord = s.substring(leftIndex + 1, rightIndex)
      // create a variable to count repeated times of the encoded word
      let repeatedTimes = ''
      // from the left pointer, tracing backwards to get the repeated times
      // repeatedly going backwards until the character is no longer a number
      while (!isNaN(Number(s[leftIndex - 1]))) {
          leftIndex--
          repeatedTimes = s[leftIndex] + repeatedTimes
      }
      // update the string, including:
      // - substring before the left pointer
      // - encoded string between the 2 pointers (remove numbers and '[]', repeat the word)
      // - substring after the right pointer
      s = s.substring(0, leftIndex)
          + encodedWord.repeat(Number(repeatedTimes))
          + s.substring(rightIndex + 1)
  }
  return s
};

