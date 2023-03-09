const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
}

// Time complexity: O(n^2)
// Space complexity: O(1)

const arr = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
console.log(selectionSort(arr)) // [0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283]


// Another way:

// function selectionSort(array) {
//   const length = array.length;
//   for(let i = 0; i < length; i++){
//     // set current index as minimum
//     let min = i;
//     let temp = array[i];
//     for(let j = i+1; j < length; j++){
//       if (array[j] < array[min]){
//         //update minimum if current is lower that what we had previously
//         min = j;
//       }
//     }
//     array[i] = array[min];
//     array[min] = temp;
//   }
//   return array;
// }