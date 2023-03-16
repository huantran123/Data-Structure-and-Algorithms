// Find the max sum subarray of a fixed size K

const maxSumSubarray = function(arr, k) {
  if (arr.length < k) {
    return;
  }
  let max = -Infinity;
  let currentRunningSum = 0;
  for (let i = 0; i < arr.length; i++) {
    currentRunningSum += arr[i]
    if (i >= k - 1) {
      max = Math.max(max, currentRunningSum);
      currentRunningSum -= arr[i - (k - 1)];
    }
  }
  return max;
}

const array = [4, 2, 1, 7, 8, 1, 2, 8, 1, 0]
console.log(maxSumSubarray(array, 3))