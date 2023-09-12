
// Using Recursion
// Merging 2 sorted arrays, return an array in non-decreasing order
const mergeArr = (arr1, arr2) => {
  let result = []
  let index1 = 0
  let index2 = 0
  while (index1 < arr1.length && index2 < arr2.length) {
    if (arr1[index1] <= arr2[index2]) {
      result.push(arr1[index1])
      index1++
    } else {
      result.push(arr2[index2])
      index2++
    }
  }
  result = result.concat(arr1.slice(index1))
  result = result.concat(arr2.slice(index2))
  return result
}

// Recursive merge sort
const sortingWithRecursion = (arr) => {
  if (arr.length <= 1) return arr

  const mid = Math.floor(arr.length / 2)
  const leftArr = sortingWithRecursion(arr.slice(0, mid))
  const rightArr = sortingWithRecursion(arr.slice(mid))

  return mergeArr(leftArr, rightArr)
}

let unsortedArr1 = [-7,-5,-1,7,-4,-1,0,0,4,9]
console.log(sortingWithRecursion(unsortedArr1))


// Using LOOP
const sortingWithLoop = (arr) => {
  const result = [arr[0]]

  for (let i = 1; i < arr.length; i++) {
    let left = 0
    let right = result.length - 1
    let indexToInsert = null

    // binary search, search the suitable index to insert number arr[i]
    while(left <= right) {
      let mid = Math.floor((left + right) / 2)
      // if there is only 1 number left to search (left === right)
      if (left === mid && mid === right) {
        if (arr[i] >= result[mid]) indexToInsert = mid + 1
        else indexToInsert = mid
        break
      // if number to insert is greater than number at mid
      } else if (arr[i] > result[mid]) {
        left = mid + 1    // update left pointer to the right of mid
      // if number to insert is less than number at mid
      } else if (arr[i] < result[mid]) {
        right = mid - 1   // update right pointer to the left of mid
      // if number to insert is equal to number at mid
      } else {
        indexToInsert = mid + 1   // insert number behind mid
        break
      }
    }

    // edge case: when left === mid and mid < right
    // and number to insert is less than number at mid
    // so right will be updated to be mid - 1 and  < left,
    // it will end the loop and indexToInsert remains null
    if (indexToInsert === null) {
      // add number at left index (or also mid)
      indexToInsert = left
    }

    // insert the number to the indexToInsert index
    result.splice(indexToInsert, 0, arr[i])
  }

  return result
}

let unsortedArr2 = [-7,-5,-1,7,-4,-1,0,0,4,9]
console.log(sortingWithLoop(unsortedArr2))