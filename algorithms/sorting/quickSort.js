function quickSort(array, left, right){
  const len = array.length;
  let pivot;
  let partitionIndex;

  if(left < right) {
    pivot = right;
    partitionIndex = partition(array, pivot, left, right);

    //sort left and right
    quickSort(array, left, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, right);
  }
  return array;
}

function partition(array, pivot, left, right){
  let pivotValue = array[pivot];
  let partitionIndex = left;

  for(let i = left; i < right; i++) {
    if(array[i] < pivotValue){
      swap(array, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(array, right, partitionIndex);
  return partitionIndex;
}

function swap(array, firstIndex, secondIndex){
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}

// Time complexity: O(n log n)
// Space complexity: O(log n)

const arr = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
console.log(quickSort(arr, 0, arr.length - 1)) // [0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283]