var maxProfit = function(prices) {
  if (prices.length < 2) {
      return 0;
  }

  let left = 0;
  let right = 1;
  let max = 0;

  while (right < prices.length) {
      if (prices[left] < prices[right]) {
          max = Math.max(max, prices[right] - prices[left])
          right++;
      } else {
          left = right;
          right++
      }
  }

  return max;
}