// https://leetcode.com/problems/flood-fill/

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */

let floodFill = function(image, sr, sc, color) {
  const queue = [[sr, sc]]                                            // Time: 1, Space: V
  const visited = new Set()                                           // Time: 1, Space: V
  // get original color of the starting pixel
  const originalColor = image[sr][sc]                                 // Time: 1, Space: 1

  // if filling the same color, return the image
  if (originalColor === color) return image                           // Time: 1, Space: 0

  while (queue.length > 0) {                                          // Time: V, Space: 0
    // dequeue the first node
    const [curSr, curSc] = queue.shift()                              // Time: 1, Space: 1
    // get the coordinate string
    const curNodeString = '' + curSr + curSc                          // Time: 1, Space: 1
    // check if current node hasn't been visited yet
    if (!visited.has(curNodeString)) {                                // Time: 1, Space: 0
      // add current node to the visited set
      visited.add(curNodeString)                                      // Time: 1, Space: 1
      // check if current node match the original color of the starting point
      if (image[curSr][curSc] === originalColor) {                    // Time: 1, Space: 0
        // if so then change the color
        image[curSr][curSc] = color                                   // Time: 1, Space: 0
      }
      // get all 4-D neighbors of the current nodes
      const neighbors = [                                             // Time: 1, Space: 4
        [curSr - 1, curSc], [curSr + 1, curSc],
        [curSr, curSc - 1], [curSr, curSc + 1]
      ]

      // for each neighbor
      for (let [neiSr, neiSc] of neighbors) {                         // Time: 4, Space: 2
        const neiStr = '' + neiSr + neiSc                             // Time: 1, Space: 1
        // check if neighbor is not out of bound, no visited, and match original color
        if (                                                          // Time: 1, Space: 1
          (neiSr >= 0) && (neiSr < image.length) &&
          (neiSc >= 0) && (neiSc < image[0].length) &&
          (!visited.has(neiStr)) &&
          (image[neiSr][neiSc] === originalColor)
        ) {
          // if so enqueue the neighbor
          queue.push([neiSr, neiSc])                                  // Time: 1, Space: 1
        }
      }
    }
  }
  // return image after flood filling color
  return image                                                        // Time: 1, Space: 1
};

// V: total number of nodes
// Total time: 4V => O(V)
// Total space: O(V)