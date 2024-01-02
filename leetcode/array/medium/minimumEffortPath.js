// https://leetcode.com/problems/path-with-minimum-effort/

/**
 * @param {number[][]} heights
 * @return {number}
 */

let minimumEffortPath = function(heights) {
  const rows = heights.length
  const cols = heights[0].length
  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]  // right, down, left, up

  // Fill with infinity to relax the nodes later
  const result = []
  for (let i = 0; i < rows; i++)
      result.push(Array(cols).fill(Infinity))
  result[0][0] = 0

  // Relax each edge (total nodes - 1) times
  for (let i = 0; i < rows * cols - 1; i++) {
      // A flag helps detect if there's no more change then stop the loop
      // This flag is used to check if the answer was found early.
      // This happens when the shortest path is found in few iterations
      // and all shortest paths to nodes don't relax anymore.
      // Without this flag, you will get TLE
      let hasNewChange = false

      // Loop through all graph edges
      for (let row = 0; row < rows; row++) {
          for (let col = 0; col < cols; col++) {
              // Move in 4 directions as given in the problem
              for (let k = 0; k < 4; k++) {
                  // neighbor of current node
                  const neiRow = row + directions[k][0]
                  const neiCol = col + directions[k][1]

                  if (
                      neiRow < 0 ||
                      neiRow >= rows ||
                      neiCol < 0 ||
                      neiCol >= cols ||
                      result[row][col] >= result[neiRow][neiCol]
                  ) {
                      continue
                  }

                  const heiDiff = Math.abs(heights[neiRow][neiCol] - heights[row][col])

                  // Relax a node
                  if (result[neiRow][neiCol] > Math.max(result[row][col], heiDiff)) {
                      result[neiRow][neiCol] = Math.max(result[row][col], heiDiff)
                      hasNewChange = true
                  }
              }
          }
      }

      // if no more change, break the loop
      if (!hasNewChange) break
  }

  return result[rows - 1][cols - 1]
};
