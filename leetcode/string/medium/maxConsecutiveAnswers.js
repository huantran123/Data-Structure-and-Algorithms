// https://leetcode.com/problems/maximize-the-confusion-of-an-exam/

/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */

let maxConsecutiveAnswers = function(answerKey, k) {
  let left = 0        // left pointer
  let right = 0       // right pointer
  let count = k       // count change times
  let maxLenT = 0     // max number of consecutive T's
  let maxLenF = 0     // max number of consecutive F's

  // get the max number of consecutive T's
  while (right < answerKey.length) {
      // if right reaches an F, decrement count
      if (answerKey[right] === 'F')
          count--

      // moving left pointer to the right as long as count < 0
      while (count < 0) {
          // window will no longer include this element as left pointer move to the right
          // so if it is an F, increment count
          if (answerKey[left] === 'F')
              count++
          // move left pointer to the right
          left++
      }

      // calculate max len of consecutive T's
      maxLenT = Math.max(maxLenT, right - left + 1)
      // move right pointer to the right
      right++
  }

  // reset left, right, and count
  left = 0
  right = 0
  count= k

  // get the max number of consecutive T's
  while (right < answerKey.length) {
      // if right reaches a T, decrement count
      if (answerKey[right] === 'T')
          count--

      // moving left pointer to the right as long as count < 0
      while (count < 0) {
          // window will no longer include this element as left pointer move to the right
          // so if it is a T, increment count
          if (answerKey[left] === 'T')
              count++
          // move left pointer to the right
          left++
      }

      // calculate max len of consecutive F's
      maxLenF = Math.max(maxLenF, right - left + 1)
      // move right pointer to the right
      right++
  }

  // return whichever is longer
  return Math.max(maxLenT, maxLenF)
};