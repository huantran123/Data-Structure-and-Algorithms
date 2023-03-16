// Given an array and a target sum, find the smallest subarray size that has the sum >= target sum

// Sliding Window Technique
const smallestSubarray = function(arr, targetSum) {
  let minSize = arr.length;
  let currentSum = 0;

  let left = 0, right = 0;
  while (right < arr.length) {
    if (currentSum >= targetSum) {
      minSize = Math.min(minSize, right - left);
      currentSum -= arr[left]
      left++;
    } else {
      currentSum += arr[right]
      right++;
    }
  }
  return minSize;
}

const array = [4, 2, 2, 7, 8, 1, 2, 8, 1, 10]
console.log(smallestSubarray(array, 100))


// Another way:

// const smallestSubarray = function(arr, targetSum) {
//   let minSize = arr.length;
//   let currentSum = 0;

//   let left = 0;
//   for (let right = 0; right < arr.length; right++) {
//     currentSum += arr[right];

//     while (currentSum >= targetSum) {
//       minSize = Math.min(minSize, right - left + 1);
//       console.log(minSize)
//       currentSum -= arr[left];
//       left++
//     }
//   }
//   return minSize;
// }