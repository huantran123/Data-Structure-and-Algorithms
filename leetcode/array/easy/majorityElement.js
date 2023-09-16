// https://leetcode.com/problems/majority-element/

/**
 * @param {number[]} nums
 * @return {number}
 */

// Brute force - Time: O(n) - Space: O(n)
let majorityElement1 = function(nums) {
    let frequencies = {}                             // Time: 1, Space: n
    for (let i = 0; i < nums.length; i++) {          // Time: n, Space: 1
        if (!frequencies[nums[i]]) {
            frequencies[nums[i]] = 1
        } else frequencies[nums[i]]++
    }
    for (let key in frequencies) {                   // Time: n, Space: 1
        if (frequencies[key] >= nums.length / 2)
            return Number(key)
    }
};

// Sort and count - Time: O(n^2) - Space: O(1)
let majorityElement2 = function(nums) {
    nums.sort((a, b) => a - b)                              // Time: nlogn, Space: 1
    let index = 0
    while (index < nums.length) {                           // Time: n, Space: 1
        let lastIndex = nums.lastIndexOf(nums[index])       // Time: n, Space: 1
        if (lastIndex - index + 1 >= nums.length / 2) {
            return nums[index]
        }
        index = lastIndex + 1
    }
}

// Divide & Conquer - Time: O(nlogn) - Space: O(n)
let majorityElement3 = function(nums) {
  let n = nums.length
  if (n === 1) return nums[0]
  let mid = Math.floor(n/2)
  let leftMajorityNum = majorityElement3(nums.slice(0, mid))
  let rightMajorityNum = majorityElement3(nums.slice(mid))

  let leftMajorityNumCount = nums.filter(e => e === leftMajorityNum).length
  let rightMajorityNumCount = nums.filter(e => e === rightMajorityNum).length

  if (leftMajorityNum === rightMajorityNum)
      return leftMajorityNum
  else if (leftMajorityNumCount > rightMajorityNumCount)
      return leftMajorityNum
  else if (leftMajorityNumCount < rightMajorityNumCount)
      return rightMajorityNum
  else return -1
}

// Divide & Conquer - Time: O(nlogn) - Space: O(n)
// recursively breaking the array to left and right subarray, until each subarray has length of 1
let majorityElement4 = function(nums) {
  // when array has length of 1, return the only number in that array
  if (nums.length === 1) return nums[0]

  // calculate the mid point to separate array to left and right parts
  let mid = Math.floor(nums.length / 2)

  // recursive function to find the majority element in the left part and right part
  let leftMajorityElement = majorityElement4(nums.slice(0, mid))
  let rightMajorityElement = majorityElement4(nums.slice(mid))

  // after having left majority and right majority,
  // count how many of them exist in current array
  let countLeftMajorityInCurNum = nums.filter(e => e === leftMajorityElement).length
  let countRightMajorityInCurNum = nums.filter(e => e === rightMajorityElement).length

  // if count of left majority > count of right majority,
  // the left majority is still the majority in current array, otherwise right majority
  return countLeftMajorityInCurNum >= countRightMajorityInCurNum
          ? leftMajorityElement
          : rightMajorityElement
}