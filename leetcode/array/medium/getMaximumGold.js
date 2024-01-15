// https://leetcode.com/problems/path-with-maximum-gold/

/**
 * @param {number[][]} grid
 * @return {number}
 */

//  backtracking
let getMaximumGold1 = function(grid) {
  let result = -Infinity

  const dfs = (row, col) => {
      // if current cell is out of bound or has 0 gold, return 0
      if (
              row < 0 || row >= grid.length ||
              col < 0 || col >= grid[0].length ||
              grid[row][col] === 0
          )
              return 0

      // max gold collected from current's cell neighbor's path
      let maxGold = -Infinity

      // store the current cell's gold
      const curGold = grid[row][col]

      // collect all gold from current cell (mark as visited)
      grid[row][col] = 0

      // get locations of all 4 neighbors of current cell
      const neighbors = [
          [row - 1, col], [row + 1, col],     // up, down
          [row, col - 1], [row, col + 1]      // left, right
      ]

      // explore each neighbor
      for (let [neiRow, neiCol] of neighbors) {
          // update gold if current neighbor has a path that collect more gold
          maxGold = Math.max(maxGold, dfs(neiRow, neiCol))
      }

      // backtrack: put back the original amount of gold of current cell
      // to prepare for other path exploration
      grid[row][col] = curGold

      // return total amount of gold collected from current cell and its neighbor
      // who has the path that collects the most gold
      return maxGold + curGold
  }

  // start from every single cell in the grid
  for (let r = 0; r < grid.length; r++) {
      for (let c = 0; c < grid[0].length; c++) {
          // update result if the amount of gold collected in the path
          // started from the current cell is bigger
          result = Math.max(result, dfs(r, c))
      }
  }

  return result
};

// ===================================================================================

// Other backtracking approach (less optimal)
let getMaximumGold2 = function(grid) {
  let result = 0
  const visited = new Set()

  const dfs = (row, col, curSum) => {
    // update result if curren collected gold from collected path is larger
    result = Math.max(result, curSum)

    // get 4 neighbors of current cell
    const neighbors = [
      [row - 1, col], [row + 1, col],     // up, down
      [row, col - 1], [row, col + 1]      // left, right
    ]

    // explore each neighbor
    for (let [neiRow, neiCol] of neighbors) {
      const cellLocation = `${neiRow}-${neiCol}`
      // skip if neighbor is out of bound or has 0 gold or is already visited
      if (
        neiRow < 0 || neiRow >= grid.length ||
        neiCol < 0 || neiCol >= grid[0].length ||
        grid[neiRow][neiCol] === 0 ||
        visited.has(cellLocation)
      )
        continue

      // add neighbor as visited
      visited.add(cellLocation)
      // explore path starting from neighbor
      dfs(neiRow, neiCol, curSum + grid[neiRow][neiCol])
      // backtrack: remove neighbor as unvisited
      visited.delete(cellLocation)
    }
  }

  // start from every single cell in the grid
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      // if current cell has 0 gold, skipp this cell
      if (grid[r][c] === 0) continue

      // as this cell as visited
      visited.add(`${r}-${c}`)
      // explore path starting from this cell
      dfs(r, c, grid[r][c])
      // backtrack: remove this cell as visited
      visited.delete(`${r}-${c}`)
    }
  }

  return result
};