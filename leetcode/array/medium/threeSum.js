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



// Sorting + Binary Search => Time: O(n^2logn)
var threeSum2 = function(nums, target = 0) {
    nums.sort((a, b) => a - b)
    let result = []

    // Pick 1st number
    for (let i = 0; i < nums.length; i++) {
        // avoid duplicate result
        if (nums[i] === nums[i - 1]) continue

        // Pick 2nd number
        for (let j = i + 1; j < nums.length; j++) {
            // avoid duplicate result
            if (j !== i + 1 && nums[j] === nums[j - 1]) continue

            let left = j + 1
            let right = nums.length - 1
            // Pick 3rd number
            while (left <= right) {
                let mid = Math.floor((left + right) / 2)
                if (nums[i] + nums[j] + nums[mid] === target) {
                    result.push([nums[i], nums[j], nums[mid]])
                    break
                } else if (nums[i] + nums[j] + nums[mid] < target) {
                    left = mid + 1
                } else {
                    right = mid - 1
                }
            }
        }
    }
    return result
};