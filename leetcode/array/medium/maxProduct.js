var maxProduct = function(nums) {
  if (nums.length === 1) {
      return nums[0]
  }

  let curMin = nums[0], curMax = nums[0], res = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let localMax = Math.max(curMax * nums[i], curMin * nums[i], nums[i])
    let localMin = Math.min(curMax * nums[i], curMin * nums[i], nums[i])

    curMax = Math.max(localMax, localMin);
    curMin = Math.min(localMax, localMin)
    res = Math.max(res, curMax)
  }
  return res;
};

console.log(maxProduct([2,3,-2,4])) //6
console.log(maxProduct([-2,3,-2,4])) //48
console.log(maxProduct([-2,-3,-2,4])) //24
console.log(maxProduct([-2,0,-1])) //0