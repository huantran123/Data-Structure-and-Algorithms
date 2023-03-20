// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

var rotatedMin = function(nums) {
  let start = 0;
  let end = nums.length - 1;
  while (end - start > 1) {
    let mid = Math.floor((start + end) / 2);
    if (nums[start] > nums[mid] && nums[end] > nums[mid]) {
      if (nums[start] > nums[end]) {
        end = mid;
      } else {
        start = mid
      }
    } else {
      if (nums[start] > nums[end]) {
        start = mid;
      } else {
        end = mid
      }
    }
  }
  return Math.min(nums[start], nums[end])
};

console.log(rotatedMin([3,4,5,1,2])) //1
console.log(rotatedMin([5,1,2,3,4])) //1
console.log(rotatedMin([4,5,6,7,0,1,2])) //0
console.log(rotatedMin([11,13,15,17])) //11


// Another way:
var rotatedMin2 = function(nums) {
  let start = 0;
  let end = nums.length - 1;
  while (end > start) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] > nums[end]) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
  return nums[start]
};