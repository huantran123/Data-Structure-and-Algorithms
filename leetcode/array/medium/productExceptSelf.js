var productExceptSelf = function(nums) {
  const leftSide = [], rightSide = [];
  const answer = [];
  const length = nums.length;

  // eg: nums = [1,2,3,4]

  // Calculate the product of the left side of the current element
  for (let i = 0; i < length; i++) {
      // If the current element is the first element, the left product of it is 1
      if (i === 0) {
          leftSide.push(1);
      // The left product of other current element = prev element * left product of the prev element
      } else {
          leftSide.push(nums[i-1] * leftSide[i-1])
      }
  }
  // => leftSide = [1,1,2,6]

  // Set a counter and let it increment to get the index of the rightSide array
  // I traverse backwards but I store right product forwards (push), so I need a counter to store the index of the rightSide array. Unshift works but make time O(n^2)
  let counter = 0;
  for (let i = length - 1; i >= 0; i--) {
      // If the current element is the last element, the right product of it is 1
      if (i === length - 1) {
          rightSide.push(1);
      // The right product of other current element = next element * right product of the next element
      } else {
          rightSide.push(nums[i+1] * rightSide[counter++])
      }
  }
  // => rightSide = [1,4,12,24]

  // Product at each index = left (forwards ->) * right (backwards <-)
  for (let i = 0; i < length; i++) {
      answer.push(leftSide[i] * rightSide[length - i - 1])
  }


  return answer;
};