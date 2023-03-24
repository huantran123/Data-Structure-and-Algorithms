// https://leetcode.com/problems/climbing-stairs/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  const cache = {};

  const dfs = (n) => {
      if (n === 0) return 1;
      if (n < 0) return 0;

      if (cache[n] !== undefined) {
          return cache[n]
      } else {
          const ways = dfs(n-1) + dfs(n-2);
          cache[n] = ways;
          return ways;
      }
  }

  return dfs(n)
};

console.log(climbStairs(5)) //8