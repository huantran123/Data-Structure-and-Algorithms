// https://leetcode.com/problems/longest-nice-substring/

/**
 * @param {string} s
 * @return {string}
 */

// Sliding Window
// Time: O(n^3), Space: O(n)
let longestNiceSubstring = function(s) {
  if (s.length < 2) return ''                                            // Time: O(1), Space: O(1)

  let result = ''                                                        // Time: O(1), Space: O(1)

  for (let i = 0; i < s.length; i++) {                                   // Time: O(n), Space: O(1)
      // current string, start with char at index i
      let curString = s[i]                                               // Time: O(1), Space: O(1)
      // iterate over the string start from next index of i
      for (let j = i + 1; j < s.length; j++) {                           // Time: O(n), Space: O(1)
          // add up the element at index j to curString
          curString += s[j]                                              // Time: O(1), Space: O(1)
          // check if curString is a nice string
          if (isNiceString(curString))                                   // Time: O(n), Space: O(n)
              // if so, check if curString length > result length
              if (curString.length > result.length)                      // Time: O(1), Space: O(1)
                  // only update result if curString length > its length
                  result = curString                                     // Time: O(1), Space: O(1)
      }
  }

  return result
};

// Helper function: check if the given string is a nice string
// Time: O(n), Space: O(n)
let isNiceString = function(s) {
  // store all unique charaters (both lowercase and uppercase) into a set
  // and turn the set into an array (easier to use)
  let characterSet = new Set(s.split(''))                                 // Time: O(n), Space: O(n)
  characterSet = [...characterSet]                                        // Time: O(n), Space: O(1)

  // if lenth of the character array is an odd number, s is not a nice string
  // because there exists a character that doesn't have its lower(/upper)case version
  if (characterSet.length % 2 !== 0) return false                         // Time: O(1), Space: O(1)

  // from the character set, construct a new set that contains only lowercase chars
  let lowercaseSet = characterSet.map((char) => char.toLowerCase())       // Time: O(n), Space: O(n)
  lowercaseSet = [...new Set(lowercaseSet)]                               // Time: O(n), Space: O(1)

  // if length of lowercase set = half of character set, s is a nice string
  // because if character set contains pairs of lowercase and uppercase chars,
  // when converting all chars into lowercase and store in set, half the length is gone
  if (characterSet.length / lowercaseSet.length === 2) return true        // Time: O(1), Space: O(1)

  return false
}