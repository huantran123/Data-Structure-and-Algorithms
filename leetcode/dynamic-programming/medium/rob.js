// https://leetcode.com/problems/house-robber/

// Using recursion and memoization
var rob1 = function(nums) {
  let cache = {};
  let robFunction = (index) => {
    if (cache[index] !== undefined) {
      return cache[index]
    } else {
      if (index >= nums.length) {
          return 0;
      }

      let max = Math.max(nums[index] + robFunction(index + 2), nums[index] + robFunction(index + 3))
      cache[index] = max;
      return max;
    }
  }

  return Math.max(robFunction(0), robFunction(1))
};

// Using recursion and memoization (better way)
var rob2 = function(nums) {
  const cache = {};

  const dfs = (index) => {
    if (index >= nums.length) {
      return 0;
    }

    if (cache[index] !== undefined) {
      return cache[index];
    } else {
      // Consider between (dropping current house to rob adjacent house) AND (robbing current house then continue robbing the following house),
      // which option gives the max value
      const amount = Math.max(dfs(index + 1), nums[index] + dfs(index + 2))
      cache[index] = amount;
      return amount;
    }
  }

  return dfs(0)
}


// Using for loop
var rob3 = function(nums) {
  const table = new Array(nums.length + 2)

  table[nums.length + 0] = 0
  table[nums.length + 1] = 0

  for (let i = nums.length - 1; i >= 0; i--) {
    const sumIfSkipped = table[i + 1]
    const sumIfRobbed = nums[i] + table[i + 2]

    table[i] = Math.max(sumIfRobbed, sumIfSkipped)
  }

  return table[0]
}

console.log(rob1([3,1,2,5,2,1,3])) //12
console.log(rob2([3,1,2,5,2,1,3])) //12
console.log(rob3([3,1,2,5,2,1,3])) //12