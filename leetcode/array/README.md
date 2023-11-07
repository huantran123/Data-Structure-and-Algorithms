# LeetCode Problems: Array

## Easy

  | Name | Code | Video Solution | Notes |
  | --- | --- | --- | --- |
  | [Two Sum](https://leetcode.com/problems/two-sum/) | [twoSum.js](./easy/twoSum.js) | https://youtu.be/KLlXCFG5TnA | use hash map to instantly check for difference value, map will add index of last occurrence of a num, don’t use same element twice; |
  | [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/) | [maxProfit.js](./easy/maxProfit.js) | https://youtu.be/1pkOgXD63yU | find local min and search for local max, sliding window; |
  | [Contains Duplicate](https://leetcode.com/problems/contains-duplicate/) | [containsDuplicate.js](./easy/containsDuplicate.js) | https://youtu.be/3OamzN90kPg | hashset to get unique values in array, to check for duplicates easily |
  | [Missing Number](https://leetcode.com/problems/missing-number/) | [missingNumber.js](./easy/missingNumber.js) | | Use Binary Search algorithm |
  | [Find Target Indices After Sorting Array](https://leetcode.com/problems/find-target-indices-after-sorting-array/) | [targetIndices.js](./easy/targetIndices.js) | | Use Binary Search algorithm |
  | [Count Negative Numbers in a Sorted Matrix](https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/) | [countNegatives.js](./easy/countNegatives.js) | | Use Binary Search algorithm |
  | [Find Subsequence of Length k with the Largest Sum](https://leetcode.com/problems/find-subsequence-of-length-k-with-the-largest-sum/) | [maxSubsequence.js](./easy/maxSubsequence.js) | | |
  | [Majority Element](https://leetcode.com/problems/majority-element/) | [majorityElement.js](./easy/majorityElement.js) | | |
  | [Minimum Difference Between Highest and Lowest of K Scores](https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/) | [minimumDifference.js](./easy/minimumDifference.js) | | sort the array and use Sliding Window algorithm |
  | [Maximum Average Subarray I](https://leetcode.com/problems/maximum-average-subarray-i/) | [findMaxAverage.js](./easy/findMaxAverage.js) | | use Sliding Window algorithm |
  | [Contains Duplicate II](https://leetcode.com/problems/contains-duplicate-ii/) | [containsNearbyDuplicate.js](./easy/containsNearbyDuplicate.js) | | use Sliding Window algorithm |
  | [Flood Fill](https://leetcode.com/problems/flood-fill/) | [floodFill.js](./easy/floodFill.js) | | use BFS |

## Medium

  | Name | Code | Video Solution | Notes |
  | --- | --- | --- | --- |
  | [Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/) | [productExceptSelf.js](./medium/productExceptSelf.js) | https://youtu.be/bNvIQI2wAjk | make two passes, first in-order, second in-reverse, to compute products |
  | [Maximum Subarray](https://leetcode.com/problems/maximum-subarray/) | [maxSubArray.js](./medium/maxSubArray.js) | https://youtu.be/5WZl3MMT0Eg | pattern: prev subarray cant be negative, dynamic programming: compute max sum for each prefix |
  | [Maximum Product Subarray](https://leetcode.com/problems/maximum-product-subarray/) | [maxProduct.js](./medium/maxProduct.js) | https://youtu.be/lXVy6YWFcRM | dp: compute max and max-abs-val for each prefix subarr; |
  | [Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/) | [rotatedMin.js](./medium/rotatedMin.js) | https://youtu.be/nIVW4P8b1VA | check if half of array is sorted in order to find pivot, arr is guaranteed to be in at most two sorted subarrays |
  | [Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/) | [rotatedSearch.js](./medium/rotatedSearch.js) | https://youtu.be/U8XENwh8Oy8 | at most two sorted halfs, mid will be apart of left sorted or right sorted, if target is in range of sorted portion then search it, otherwise search other half |
  | [3Sum](https://leetcode.com/problems/3sum/) | [threeSum.js](./medium/threeSum.js) | https://youtu.be/jzZsG8n2R9A | sort input, for each first element, find next two where -a = b+c, if a = prevA, skip a, if b=prevB skip b to elim duplicates; to find b,c use two pointers, left/right on remaining list; |
  | [Container With Most Water](https://leetcode.com/problems/container-with-most-water/) | [maxWaterContainer.js](./medium/maxWaterContainer.js) | https://youtu.be/UuiTKBwPgAo | shrinking window, left/right initially at endpoints, shift the pointer with min height; |
  | [Peak Index in a Mountain Array](https://leetcode.com/problems/peak-index-in-a-mountain-array/) | [peakIndexInMountainArray.js](./medium/peakIndexInMountainArray.js) |  | Use Binary Search algorithm |
  | [Single Element in a Sorted Array](https://leetcode.com/problems/single-element-in-a-sorted-array/) | [singleNonDuplicate.js](./medium/singleNonDuplicate.js) |  | Use Binary Search algorithm |
  | [Capacity To Ship Packages Within D Days](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/) | [shipWithinDays.js](./medium/shipWithinDays.js) |  | Use Binary Search algorithm |
  | [Find First and Last positon of Element in Sorted Array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/) | [searchRange.js](./medium/searchRange.js) |  | Use Binary Search algorithm |
  | [Maximum Binary Tree](https://leetcode.com/problems/maximum-binary-tree/) | [constructMaximumBinaryTree.js](./medium/constructMaximumBinaryTree.js) |  | Use Divide and Conquer algorithm |
  | [Global and Local Inversions](https://leetcode.com/problems/global-and-local-inversions/) | [isIdealPermutation.js](./medium/isIdealPermutation.js) |  | Use Divide and Conquer algorithm |
  | [K-diff Pairs in an Array](https://leetcode.com/problems/k-diff-pairs-in-an-array/) | [findPairs.js](./medium/findPairs.js) |  | Use Two Pointers algorithm |
  | [String Compression](https://leetcode.com/problems/string-compression/) | [compress.js](./medium/compress.js) |  | Use Two Pointers algorithm: slow (nail the start of each range) and fast (scan the array until reaching the end of each range) |
  | [Max Consecutive Ones III](https://leetcode.com/problems/max-consecutive-ones-iii/) | [longestOnes.js](./medium/longestOnes.js) |  | use sliding window |
  | [Max Area of Island](https://leetcode.com/problems/max-area-of-island/) | [maxAreaOfIsland.js](./medium/maxAreaOfIsland.js) |  | use BFS |

