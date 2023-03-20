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


// Using for loop
var rob2 = function(nums) {
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