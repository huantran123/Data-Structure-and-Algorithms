// https://leetcode.com/problems/expressive-words/

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var expressiveWords = function(s, words) {
  let count = 0
  // iterate over the words array
  for (let i = 0; i < words.length; i++) {
      // if word is stretchy to become the given string
      if (isStretchy(words[i], s))
          // increment count
          count++
  }

  return count
};

// Count the number of repeated letters start at a given index
let countRepeatedLetters = function(string, startIndex) {
  let pointer = startIndex
  // as long as letter at the pointer the same as letter at start index
  while (string[startIndex] === string[pointer]) {
      // moving pointer to the next letter
      pointer++
  }
  // after ending the loop, number of repeated letters = distance between start and end indices
  return pointer - startIndex
}

// Check if the word is stretchy to become the given string
let isStretchy = function(word, givenString) {
  // create 2 pointer, pointer1 to move along the word and pointer2 to move along the given string
  let pointer1 = 0
  let pointer2 = 0

  // looping as long as BOTH 2 pointers are still in the range of the 2 strings
  while (pointer1 < word.length && pointer2 < givenString.length) {
      // if characters at the 2 pointers are not the name, the word is not stretchy
      if (word[pointer1] !== givenString[pointer2]) return false

      // count the number of repeated letters start at the 2 pointers in the 2 strings
      let count1 = countRepeatedLetters(word, pointer1)
      let count2 = countRepeatedLetters(givenString, pointer2)

      // if number of those repeated letters in the word > in the given string
      // OR if it's less than but number of those repeated letters in the given string is below 3
      // the word is not streatchy
      if (count1 > count2 || (count1 < count2 && count2 < 3)) return false


      // move pointers to the next different letters
      pointer1 += count1
      pointer2 += count2
  }

  // after ending the loop, if both pointers reaches the end of their string at the same time
  // that means word is stretchy to become the given string
  return pointer1 === word.length && pointer2 === givenString.length
}

let countGoodSubstrings = (s) => {
  // create an array to store all substrings with 3 unique chars
  let arr = []                                                          // Time: O(1), Space: O(1)

  // iterate over the string
  for (let i = 0; i < s.length - 2; i++) {                              // Time: O(n), Space: O(1)
    // if 3 characters are different from each other
    if (s[i] !== s[i+1] && s[i+1] !== s[i+2] && s[i] !== s[i+2]) {      // Time: O(1), Space: O(1)
      // add the substring to the array
      arr.push(s[i] + s[i+1] + s[i+2])                                  // Time: O(1), Space: O(1)

    }
  }

  // add all substrings to a set and return the set size 
  // to eliminate duplicated substrings
  return new Set(arr).size                                              // Time: O(1), Space: O(n)
}
// => Total time: O(n)
// => Total space: O(n)

console.log(countGoodSubstrings('bdakjijcoeedddadfelldbda'))


let lengthOfLongestSubstring = (s) => {
  // a variable to hold max length of the substring
  let maxLength = 0                                                         // Time: O(1), Space: O(1)
  // a string to store current unique char substring
  let substring = ''                                                        // Time: O(1), Space: O(1)
  // a set to store all seen characters of current substring
  let seen = new Set()                                                      // Time: O(1), Space: O(1)

  // iterate over the given string
  for (let i = 0; i < s.length; i++) {                                      // Time: O(n), Space: O(1)
    // if current character has not been seen yet
    if (!see.has(s[i])) {                                                   // Time: O(1), Space: O(1)
      // add character to the substring
      substring += s[i]                                                     // Time: O(1), Space: O(1)
      // add character to the seen set
      seen.add(s[i])                                                        // Time: O(1), Space: O(1)
      // update maxLength if substring length > maxLength
      maxLength = Math.max(maxLength, substring.length)                     // Time: O(1), Space: O(1)

    // if current character has been seen before in the substring
    } else {
      // update the substring: omit the first appearance of the repeated character
      // take the new substring from the its index to the second appearance of the repeated character
      substring = substring.slice(substring.indexOf(s[i]) + 1) + s[i]       // Time: O(1), Space: O(1)
      // reset seen set, set its new values to all characters of the recently updated substring
      seen = new Set(substring.split(''))                                   // Time: O(1), Space: O(n)
    }
  }

  return maxLength
}

// => Total time: O(n)
// => Total space: O(n)

console.log('longest substr:', lengthOfLongestSubstring('abcabcbb')) // 3