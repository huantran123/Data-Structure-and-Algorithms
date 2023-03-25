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

  // Recursive function
  let dfs = (amount) => {
    // Base case: if the amount is negative, return a very big number
    // This is when that amount of money cannot be made up by any combination of the coins
    if (amount < 0) {
      return Infinity;
    }

    // Base case: if the amount is 0, return 0
    // This is when that amount of money can be made up by some combinations of the coins
    if (amount === 0) {
      return 0;
    }

    // If the amount is not in the cache, do the recursion
    if (cache[amount] === undefined) {
      // Let the min be a very big number first
      let min = Infinity;
      // Iterate over the coin set
      for (let i = 0; i < coins.length; i++) {
        // Get the number of coins if continue to subtract the current coin
        let count = dfs(amount - coins[i]);
        // Update the min number
        if (count <= min) {
            min = count;
        }
      }

      // If min is an actual number, that means the amount is made up by some combinnations, then cache the min and return the number of coins
      if (min < Infinity) {
        cache[amount] = min + 1;
      // Otherwise, just return the very big number
      } else {
        cache[amount] = min;
      }
    }
    return cache[amount]
  }

  // Return -1 if number of coins is an infinity number, which means the amount cannot be made up by some combinations of the coins, otherwise, return the number
  let numberOfCoins = dfs(amount)
  return (numberOfCoins < Infinity) ? numberOfCoins : -1;
};


console.log(coinChange([1,2,5], 4)) //2
console.log(coinChange([1,2,5], 11)) //3
console.log(coinChange([2], 3)) //-1
console.log(coinChange([1], 0)) //0