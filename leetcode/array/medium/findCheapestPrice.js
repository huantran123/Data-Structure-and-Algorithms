// https://leetcode.com/problems/cheapest-flights-within-k-stops/

/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */

let findCheapestPrice = function(n, flights, src, dst, k) {
  let result = new Array(n)
  for (let i = 0; i < n; i++) {
      result[i] = Infinity
  }
  result[src] = 0

  // if there are at most k stops
  // => we have to travel at most k + 2 node (start node + k stops + end node)
  // => we have to relax k + 1 times
  for (let i = 0; i < k + 1; i++) {
      // using a temp array to store the min price of each node
      // but not using the newly changed value to update the other
      const temp = [...result]
      for (let flight of flights) {
          const [from, to, price] = flight

          const newValue = result[from] + price
          if (newValue < temp[to]) {
              temp[to] = newValue
          }
      }
      result = temp
  }

  return result[dst] !== Infinity ? result[dst] : -1
};