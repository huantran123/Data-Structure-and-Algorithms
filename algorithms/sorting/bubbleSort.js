const bubbleSort = (arr) => {
  let counter = arr.length;
  let temp = 0, i = 0;
  // Each while iteration will find a max value in the array and place it at the end,
  // for the next while iteration, we can ignore those max values at the end since they're already in order
  // we run while loop until there's only 1 element to compare, that's when the array is fully sorted
  while (counter > 1) {
    for (i = 0; i < counter - 1; i++) {
      if (arr[i] > arr[i+1]) {
        temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
      }
    }
    counter--;
  }
  return arr;
}

// Time complexity: O(n^2)
// Space complexity: O(1)

const arr = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
console.log(bubbleSort(arr)) // [0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283]