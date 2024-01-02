// https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} distanceThreshold
 * @return {number}
 */

const findTheCity = function(n, edges, distanceThreshold) {
  let minNeighbors = Infinity
  let cityWithMinNeibors = -1

  for (let i = 0; i < n; i++) {
       const numNeighbors = findNumOfNeighborsOfACity(i, n, edges, distanceThreshold)

       if (minNeighbors >= numNeighbors && i > cityWithMinNeibors) {
           cityWithMinNeibors = i
           minNeighbors = numNeighbors
       }
  }

  return cityWithMinNeibors
};

// Bellman-Ford helper function to find the number of neighbor cities from the startCity
const findNumOfNeighborsOfACity = function(startCity, n, edges, distanceThreshold) {
  // initialize result array, fill with Infinity
  const result = []
  for (let i = 0; i < n; i++) {
      result[i] = Infinity
  }
  result[startCity] = 0

  // relax n - 1 times
  for (let i = 0; i < n - 1; i++) {
      for (let [from, to, weight] of edges) {
          // since the nodes connected bidirectionally, we have 2 update both from and to citites
          // as long as the new distance < current distance to city
          // and the new distance <= distance threshold
          if (
              result[to] + weight < result[from] &&
              result[to] + weight <= distanceThreshold
          )
              result[from] = result[to] + weight

          if (
              result[from] + weight < result[to] &&
              result[from] + weight <= distanceThreshold
          )
              result[to] = result[from] + weight
      }
  }

  // The cities that has Infinity value are not neighbors of the startCity
  // So we only choose the cities that is not startCity and don't have distance as Infinity
  return result.filter((distance) => (distance !== Infinity && distance !== 0)).length
}