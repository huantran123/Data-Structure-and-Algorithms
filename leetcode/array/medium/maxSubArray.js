// https://leetcode.com/problems/maximum-subarray/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  var maxSum = nums[0];
  for (var i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i], nums[i-1] + nums[i]);
    if (nums[i] > maxSum) {
        maxSum = nums[i];
    }
  }
  return maxSum;
};



console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])) // 6
console.log(maxSubArray([1])) // 6
console.log(maxSubArray([5,4,-1,7,8])) // 23


// Brute force solution:
// var maxSubArray = function(nums) {
//   var maxSum = nums[0];
//   for (var i = 0; i < nums.length; i++) {
//     var sum = 0;
//     for (var j = i; j < nums.length; j++) {
//       sum += nums[j];
//       maxSum = Math.max(sum, maxSum);
//     }
//   }
//   return maxSum
// }

// Divide & Conquer
let maxSubArray2 = function(nums) {
  let result = nums[0]

  let divideAndConquer = (arr, prevSum = 0) => {
      // when array length is 1, return whichever is greater between arr[0] + prevSum and arr[0]
      // if prevSum + cur element is less that the element itself,
      // then curren element starts a new subarray
      if (arr.length === 1) return Math.max(arr[0] + prevSum, arr[0])

      // find middle index of the array to divide into 2 parts left and right
      let mid = Math.floor(arr.length / 2)

      // calculate left sum, will be calculated based on values of all elements in left subarr and prevSum
      // if prevSum makes sum smaller, don't include it into left sum, otherwise include it
      let left = divideAndConquer(arr.slice(0, mid), prevSum)
      // calculate right sum, will be calculated based on values of all elements in right subarr and left sum
      // if left sum makes sum smaller, don't include it into right sum, otherwise include it
      let right = divideAndConquer(arr.slice(mid), left)

      // update result to chooose the biggest between curren result, left sum, and right sum
      result = Math.max(result, left, right)
      // return the right sum, as it already has dependency on left sum
      return right
  }

  divideAndConquer(nums)
  return result
}

//                                                [-2,1,-3,4,-1,2,1,-5,4]
//                                                        res=-2
//                                _____________(1)___________|__________(8)_____________
//                                |                                                     |
//                            [-2,1,-3,4]                                           [-1,2,1,-5,4]
//                            prev=0                                                prev=4
//                 _______(2)____|___(5)_____                                _____(9)___|____(12)_____
//                 |                        |                               |                         |
//               [-2,1]                  [-3,4]                           [-1,2]                    [1,-5,4]
//               prev=0                  prev=1                           prev=4                    prev=5
//        __(3)___|__(4)___         __(6)___|__(7)___               __(10)__|__(11)__          ___(13)___|___(14)___
//        |               |         |               |               |               |          |                   |
//        [-2]           [1]        [-3]           [4]              [-1]           [2]        [1]               [-5,4]
//        prev=0         prev=-2    prev=1         prev=-2          prev=4         prev=3     prev=5            prev=6
//        ||              ||        ||              ||              ||              ||         ||          __(15)___|__(16)__
//        l=-2            r=1       l=-2           r=4              l=3            r=5        l=6          |                |
//        |_______________|         |_______________|               |_______________|          |          [-5]             [4]
//                ||                          ||                            ||                 |          prev=6           prev=1
//              res=1                       res=4                         res=5                |           ||               ||
//              return 1                    return 4                      return 5             |          l=1              r=5
//                                                                                             |           |________________|
//                                                                                             |                   ||
//                                                                                             |                  res=5
//                                                                                             |                  return 5
//                                                                                             |                   |
//                                                                                             |                  r=5
//                                                                                             |___________________|
//                                                                                                       ||
//                                                                                                      res=6
//                                                                                                      return 5