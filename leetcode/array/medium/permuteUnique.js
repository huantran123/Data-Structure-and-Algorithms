// https://leetcode.com/problems/permutations-ii/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

let permuteUnique = function(nums) {
  const result = []
  const tempRes = []
  const seen = new Set()              // store visited indices
  const resultSet = new Set()         // store explored permutations

  const dfs = (tempRes, seen) => {
      // if tempRes contains the same number of integers as nums
      if (tempRes.length === nums.length) {
          const resString = tempRes.join('-')
          // if the permutation is not duplicated
          if (!resultSet.has(resString)) {
              // add permutation to result
              result.push([...tempRes])
              // add permutation to resultSet
              resultSet.add(resString)
          }
          return
      }

      // branching out
      for (let i = 0; i < nums.length; i++) {
          // if value at this current INDEX is already in the tempRes, move on to next index
          if (seen.has(i))
              continue

          if (result)

          // otherwise, add number to tempRes
          tempRes.push(nums[i])
          // mark that this value at this INDEX is already seen
          seen.add(i)

          // recursively add the next number to tempRes
          dfs(tempRes, seen)

          // remove number out of tempRes and index out of seen set to backtrack the next number
          tempRes.pop()
          seen.delete(i)
      }
  }

  // start with empty tempRes and seen set
  dfs(tempRes, seen)

  return result
};