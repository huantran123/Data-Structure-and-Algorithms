# LeetCode Problems: Dynamic Programming

## How to solve a DP problem
### Step 1:
#### Objective:
  - Create ***ALL*** scenarios with ***ALL*** combination of choice
#### Do:
  - Draw full DFS tree for 3 levels only
  - Code: # choices = # DFS calls
  - Use base cases/conditions to stop branching
#### Test step 1:
  - Compare code node output order with tree visualization to make sure code is correct.
### Step 2:
#### Objective:
  - Produce the information asked by problem statement
#### Do:
  - Calculation
  - bottom -> up (can cache)
  - Time complexity: O(2^n)
  - Space complexity: O(1)
#### Test step 2:
  - Use test cases from problem statement
### Step 3:
#### Objective:
  - Cache distinct dfs(n) calls to reduce Time Complexity -> increase Space Complexity
#### Do:
  - Cache value: `dfs(n)`
  - Cache key: `n`
  - Time complexity: O(n)
  - Space complexity: O(n)
#### Test step 3:
  - Use test cases from problem statement

## Easy

  | Name | Code | Video Solution | Notes |
  | --- | --- | --- | --- |
  | [Climbing Stairs](https://leetcode.com/problems/climbing-stairs/) | [climbStairs.js](./easy/climbStairs.js) | https://youtu.be/Y0lT9Fck7qI | subproblem find (n-1) and (n-2), sum = n; |


## Medium

  | Name | Code | Video Solution | Notes |
  | --- | --- | --- | --- |
  | [House Robber](https://leetcode.com/problems/house-robber/) | [rob.js](./medium/rob.js) | https://youtu.be/73r3KWiEvyk | for each num, get max of prev subarr, or num + prev subarr not including last element, store results of prev, and prev not including last element |
  | [Coin Change](https://leetcode.com/problems/coin-change/) | [coinChange.js](./medium/coinChange.js) | https://youtu.be/H9bfqozjoqs | top-down: recursive dfs, for amount, branch for each coin, cache to store prev coin_count for each amount; bottom-up: compute coins for amount = 1, up until n, using for each coin (amount - coin), cache prev values |
