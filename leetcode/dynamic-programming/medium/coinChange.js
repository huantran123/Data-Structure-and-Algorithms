// https://leetcode.com/problems/coin-change/

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  if (amount === 0) {
      return 0;
  }
  const cache = {};

  let dfs = (amount) => {
      if (amount < 0) {
          return Infinity;
      }
      if (amount === 0) {
          return 0;
      }
      if (cache[amount] === undefined) {
          let min = Infinity;
          for (let i = 0; i < coins.length; i++) {
              let count = dfs(amount - coins[i]);
              if (count <= min) {
                  min = count;
              }
          }
          if (min < Infinity) {
              cache[amount] = min + 1;
          } else {
              cache[amount] = min;
          }
      }
      return cache[amount]
  }

  let numberOfCoins = dfs(amount)
  return (numberOfCoins < Infinity) ? numberOfCoins : -1;
};

console.log(coinChange([1,2,5], 4)) //2
console.log(coinChange([1,2,5], 11)) //3
console.log(coinChange([2], 3)) //-1
console.log(coinChange([1], 0)) //0