// Merge 2 sorted arrays
const mergeSortedArrays = function(arr1, arr2) {
  var result = [];
  var i = 0, j = 0;
  while (arr1[i] !== undefined || arr2[j] !== undefined) {
    if (arr1[i] === undefined && arr2[j] !== undefined) {
      result.push(arr2[j]);
      j++
    } else if (arr1[i] !== undefined && arr2[j] === undefined) {
      result.push(arr1[i]);
      i++
    } else if (arr1[i] <= arr2[j]) {
      result.push(arr1[i]);
      i++
    } else if (arr1[i] > arr2[j]) {
      result.push(arr2[j]);
      j++
    }
  }
  return result;
}

console.log(mergeSortedArrays([0,2,7,9,33], [3,4,6,30,32,35,39]));