// https://leetcode.com/problems/string-compression/

/**
 * @param {character[]} chars
 * @return {number}
 */

// Two Pointers
var compress = function(chars) {
  // create 2 pointers
  // slow pointer: start the range
  // fast pointer: go along the array until reaches the last same character (end of range)
  let slow = 0
  let fast = 0

  // iterate over the array until fast pointer exceed the array
  while (fast < chars.length) {
      // if character at next of fast is the same as character at slow (start of range)
      if (chars[slow] === chars[fast + 1]) {
          // move fast to the next index
          fast++
      // if not, now fast is at the end of range
      } else {
          // if slow = fast, that means the range only has 1 character (start = end)
          if (slow === fast) {
              // move slow and fast to next index, start a new range of new character
              slow++
              fast++
          // if fast > slow, that means the range has more than 1 characters
          } else {
              // calculate the frequency => end - start + 1
              let freq = fast - slow + 1
              // turn the frequency into a string
              freq = freq.toString()
              // remove all repeated characters from start + 1 to end, add the frequency
              // if frequency has more than 2 digits, split them and put into different indices
              chars.splice(slow + 1, fast - slow, ...freq.split(''))
              // after removing repeated characters and add frequency,
              // update slow to start the new range, skip all indicies that store frequency digits
              slow += freq.length + 1
              // move fast to the same place as slow
              fast = slow
          }
      }
  }

  return chars.length
};