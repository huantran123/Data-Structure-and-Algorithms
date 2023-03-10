// https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  // result variable
  var result = [];
  // store variable
  var store = {};
  // iterate over the nums array
  for (var i = 0; i < nums.length; i++) {
      // if the current element is already inside the store
      if (store[nums[i]] !== undefined) {
          // add the index of the current element to the result arr
          result.push(i);
          // add the index of the other element to the result array
          result.push(store[nums[i]]);
          // return the result
          return result;
      }
      // add the target - current to the store
      store[target - nums[i]] = i;
  }
};