const insertionSort = (arr) => {
  // Start from the beginning of the array
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[0]) {
      //move number to the first position
      arr.unshift(arr.splice(i,1)[0]);
    } else {
      // Take a portion of the array from the first index to the current index,
      // iterate backwards to compare and swap the current index to the right spot
      for (let j = i; j > 0; j--) {
        if (arr[j] < arr[j-1]) {
          let temp = arr[j];
          arr[j] = arr[j-1];
          arr[j-1] = temp;
      // after it goes to the right spot, whcih means that the current index now is greater that the previous
      // break the backward interation and continue to compare the next index of the array
        } else {
          break;
        }
      }
    }
  }
  return arr;
}

// Time complexity: O(n^2)
// Space complexity: O(1)

const arr = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
console.log(insertionSort(arr)) // [0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283]



// Another way:

// function insertionSort(array) {
//   const length = array.length;
// 	for (let i = 0; i < length; i++) {
		// if (array[i] < array[0]) {
    //   //move number to the first position
    //   array.unshift(array.splice(i,1)[0]);
    // } else {
//       // only sort number smaller than number on the left of it. This is the part of insertion sort that makes it fast if the array is almost sorted.
//       if (array[i] < array[i-1]) {
//         //find where number should go
//         for (var j = 1; j < i; j++) {
//           if (array[i] >= array[j-1] && array[i] < array[j]) {
//             //move number to the right spot
//             array.splice(j,0,array.splice(i,1)[0]);
//           }
//         }
//       }
//     }
// 	}
// }