// https://leetcode.com/problems/minimum-cost-to-reach-destination-in-time/

/**
 * @param {number} maxTime
 * @param {number[][]} edges
 * @param {number[]} passingFees
 * @return {number}
 */

let minCost = function(maxTime, edges, passingFees) {
  const n = passingFees.length;
  // initialize costs array
  // costs[time][city] = min cost
  const costs = []
  for (let i = 0; i < maxTime + 1; i++) {
      costs.push(Array(n).fill(Infinity))
  }
  costs[0][0] = passingFees[0];

  let result = Infinity;

  for (let k = 1; k <= maxTime; k++) {
      for (const [x, y, time] of edges) {
          if (k >= time) {
              costs[k][y] = Math.min(costs[k][y], costs[k - time][x] + passingFees[y]);
              costs[k][x] = Math.min(costs[k][x], costs[k - time][y] + passingFees[x]);
          }
      }

      result = Math.min(result, costs[k][n - 1]);
  }

  if (result === Infinity) {
      return -1;
  }

  return result;
};