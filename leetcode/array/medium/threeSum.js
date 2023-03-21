// https://leetcode.com/problems/3sum/

var threeSum = function(nums) {
  if (nums.length <= 2) {
      return []
  }

  // Sort nums array
  nums = nums.sort((a, b) => {
      return a - b
  })

  let result = [];

  for (let i = 0; i < nums.length; i++) {
      if (nums[i] === nums[i - 1]) {
          continue;
      }
      let left = i + 1;
      let right = nums.length - 1;
      while (left < right) {
          if (nums[left] === nums[left - 1] && left !== i + 1) {
              left++;
              continue;
          }
          if (nums[left] + nums[right] > -nums[i]) {
              right--;
          } else if (nums[left] + nums[right] < -nums[i]) {
              left++;
          } else {
              result.push([nums[i], nums[left], nums[right]]);
              left++;
              right--;
          }
      }
  }

  return result;
}

console.log(threeSum([-1,0,1,2,-1,-4])) //[[-1,-1,2],[-1,0,1]]
console.log(threeSum([0,1,1])) //[]
console.log(threeSum([0,0,0])) //[[0,0,0]]