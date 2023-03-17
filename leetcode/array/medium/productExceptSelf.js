var productExceptSelf = function(nums) {
  const leftSide = [], rightSide = [];
  const answer = [];
  const length = nums.length;

  // eg: nums = [1,2,3,4]

  // Calculate the product of the left side of the current element
  for (let i = 0; i < length; i++) {
      // If the current element is the first element, the left product of it is 1
      if (i === 0) {
          leftSide[i] = 1;
      // The left product of other current element = prev element * left product of the prev element
      } else {
          leftSide[i] = nums[i-1] * leftSide[i-1];
      }
  }
  // => leftSide = [1,1,2,6]

  // Calculate the product of the left side of the current element
  for (let i = length - 1; i >= 0; i--) {
      // If the current element is the last element, the right product of it is 1
      if (i === length - 1) {
          rightSide[i] = 1;
      // The right product of other current element = next element * right product of the next element
      } else {
          rightSide[i] = nums[i+1] * rightSide[i+1]
      }
  }
  // => rightSide = [24,12,4,1]

  // Product at each index = left * right
  for (let i = 0; i < length; i++) {
      answer[i] = leftSide[i] * rightSide[i]
  }
  return answer;
};