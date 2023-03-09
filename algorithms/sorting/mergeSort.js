function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  // Split array into right and left
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid)

  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  const result = [];
  let i = 0, j = 0;
  while (i < left.length || j < right.length) {
    if (i >= left.length) {
      result.push(right[j])
      j++
    } else if (j >= right.length) {
      result.push(left[i])
      i++
    } else {
      if (left[i] <= right[j]) {
        result.push(left[i])
        i++
      } else {
        result.push(right[j])
        j++
      }
    }
  }
  return result;
}

// Time complexity: O(n log n)
// Space complexity: O(n)

const arr = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
console.log(mergeSort(arr)) // [0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283]