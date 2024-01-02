// https://leetcode.com/problems/network-delay-time/

let networkDelayTime = function(times, n, k) {
  // initialize result
  const result = new Array(n)
  for (let i = 0; i < n; i++) {
      result[i] = Infinity
  }
  result[k - 1] = 0

  // relax edges n-1 times
  for (let i = 0; i < n - 1; i++) {
      for (let time of times) {
          const [source, target, weight] = time

          if (result[source - 1] + weight < result[target - 1]) {
              result[target - 1] = result[source - 1] + weight
          }
      }
  }

  // if not reaching all nodes
  if (result.includes(Infinity))
      return -1

  // minimum time to reach all nodes = maximum time to reach 1 node from start node k
  return result.sort((a, b) => b - a)[0]
};