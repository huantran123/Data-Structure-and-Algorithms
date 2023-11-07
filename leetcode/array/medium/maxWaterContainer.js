// https://leetcode.com/problems/container-with-most-water/

// Two Pointers Algo
// Time: O(n)
var maxWaterContainer = function(height) {
  let left = 0, right = height.length - 1;
  let maxArea = 0;
  while (left < right) {
      maxArea = Math.max(maxArea, Math.min(height[left], height[right]) * (right - left));
      if (height[left] <= height[right]) {
          left++
      } else {
          right--
      }
  }

  return maxArea;
};

// Time: O(n^2)
// var maxWaterContainer = function(height) {
//     let maxRightArea = 0;
//     for (let i = 0; i < height.length; i++) {
//         for (let j = height.length - 1; j >= i; j--) {
//             if (height[j] >= height[i]) {
//                 maxRightArea = Math.max(maxRightArea, Math.min(height[i], height[j]) * (j - i));
//                 break;
//             }
//         }
//     }

//     let maxLeftArea = 0;
//     for (let i = height.length - 1; i >= 0; i--) {
//         for (let j = 0; j <= i; j++) {
//             if (height[j] >= height[i]) {
//                 maxLeftArea = Math.max(maxLeftArea, Math.min(height[i], height[j]) * (i - j));
//                 break;
//             }
//         }
//     }

//     return Math.max(maxRightArea, maxLeftArea)
// };

console.log(maxWaterContainer([1,8,6,2,5,4,8,3,7])) //49
console.log(maxWaterContainer([1,1])) //1
console.log(maxWaterContainer([1,2,1])) //2