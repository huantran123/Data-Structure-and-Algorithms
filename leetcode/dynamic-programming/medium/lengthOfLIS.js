// https://leetcode.com/problems/longest-increasing-subsequence/

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  const cache = {};
  const stack = [];
  const dfs = (index) => {
      if (index >= nums.length) {
          return 0;
      }

      // Stop branching if the next is less than the prev
      if (stack.length >= 2) {
          if (stack[stack.length - 1] <= stack[stack.length - 2]) {
              return 0;
          }
      }

      if (cache[index] !== undefined) return cache[index];

      let options = [];
      for (let i = index; i < nums.length; i++) {
          stack.push(nums[i]);
          const add = (stack[stack.length - 1] <= stack[stack.length - 2]) ? 0 : 1;
          options.push(add + dfs(i + 1))
          stack.pop()
      }
      cache[index] = Math.max(...options);
      return cache[index];
  }

  return dfs(0)
};