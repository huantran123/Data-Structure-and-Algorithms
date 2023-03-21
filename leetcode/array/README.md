# LeetCode Problems: Array

## Easy

  | Name | Code | Video Solution | Notes |
  | --- | --- | --- | --- |
  | [Two Sum](https://leetcode.com/problems/two-sum/) | [twoSum.js](./easy/twoSum.js) | https://youtu.be/KLlXCFG5TnA | use hash map to instantly check for difference value, map will add index of last occurrence of a num, don’t use same element twice; |
  | [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/) | [maxProfit.js](./easy/maxProfit.js) | https://youtu.be/1pkOgXD63yU | find local min and search for local max, sliding window; |
  | [Contains Duplicate](https://leetcode.com/problems/contains-duplicate/) | [containsDuplicate.js](./easy/containsDuplicate.js) | https://youtu.be/3OamzN90kPg | hashset to get unique values in array, to check for duplicates easily |


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

