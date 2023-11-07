// https://leetcode.com/problems/global-and-local-inversions/

/**
 * @param {number[]} nums
 * @return {boolean}
 */

// Divide and Conquer
let isIdealPermutation = function(nums) {
  let localInversions = countLocalInversions(nums)
  let globalInversions = countGlobalInversions(nums)[0]

  return globalInversions === localInversions
};

// Count the number of local inversions
let countLocalInversions = function(nums) {
  let countInversions = 0
  for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] > nums[i + 1]) countInversions++
  }
  return countInversions
}

// Count the number of global inversions
let countGlobalInversions = function(arr) {
  // If array has 1 element, return count = 0 and array itself
  if (arr.length === 1) return [0, arr]

  // DIVIDE
  // Count inversions in the left subarray
  let [leftInversionsCount, leftArr] = countGlobalInversions(arr.slice(0, arr.length / 2))
  // count inversions in the right subarray
  let [rightInversionsCount, rightArr] = countGlobalInversions(arr.slice(arr.length / 2))

  // Merged to subarrays into a sorted array and calculate number of inversions in array
  let [mergedInversionsCount, mergedArr] = mergeArrAndCountInversions(leftArr, rightArr)

  // COMBINE
  // Return total of inversions and merged array
  return [leftInversionsCount + rightInversionsCount + mergedInversionsCount, mergedArr]
}

// Merge 2 sorted arrays and calculate number of inversions while merging
// arr1 is array from left, arr2 is array from right
let mergeArrAndCountInversions = function(arr1, arr2) {
  const mergedArr = []
  let countInversions = 0
  let index1 = 0
  let index2 = 0

  // Run loop whenever 2 indices are within range of 2 arrays
  while (index1 < arr1.length && index2 < arr2.length) {
      // If cur element of arr1 < cur element of arr2
      if (arr1[index1] < arr2[index2]) {
          // Put cur element of arr1 to merged array
          mergedArr.push(arr1[index1])
          index1++
      // If cur element of arr1 > cur element of arr2, inversion happens
      } else {
          // Put cur element of arr2 to merged array
          mergedArr.push(arr2[index2])
          // Accumulate count with the total number of elements remained in arr1 from cur index
          // as those remained elements are > cur element of arr1, so all > cur element of arr 2
          countInversions += arr1.length - index1
          index2++
      }
  }

  // If arr2 reaches its end first, add the remained elements from arr1 to merged array
  for (let i = index1; i < arr1.length; i++)
      mergedArr.push(arr1[i])
  // If arr1 reaches its end first, add the remained elements from arr2 to merged array
  for (let i = index2; i < arr2.length; i++)
      mergedArr.push(arr2[i])

  // Return number of inversions found from the merge and the merged array
  return [countInversions, mergedArr]
}







