# Sorting Algorithms

## Bubble Sort
- Repeatedly swapping the adjacent elements if they are in the wrong order
### Code
  [bubbleSort.js](./bubbleSort.js)
### Time Comlexity & Space Complexity
#### Time Complexity
  | Best | Average | Worst |
  |------|---------|-------|
  | O(n) | O(n^2)  | O(n^2)|
#### Space Complexity
  - Worst: O(1)

--------------------------------------

## Selection Sort
- Repeatedly selects the smallest (or largest) element from the unsorted portion of the list and swaps it with the first element of the unsorted portion. This process is repeated for the remaining unsorted portion of the list until the entire list is sorted.
### Code
  [selectionSort.js](./selectionSort.js)
### Time Comlexity & Space Complexity
#### Time Complexity
  | Best | Average | Worst |
  |------|---------|-------|
  |O(n^2)| O(n^2)  | O(n^2)|
#### Space Complexity
  - Worst: O(1)


--------------------------------------

## Insertion Sort
- Repeatedly taking an element from the unsorted portion of the array and inserting it into its correct position in the sorted portion of the array.
- This sorting is efficient when dealing with small dataset or dataset that is almost or already sorted
### Code
  [insertionSort.js](./insertionSort.js)
### Time Comlexity & Space Complexity
#### Time Complexity
  | Best | Average | Worst |
  |------|---------|-------|
  | O(n) | O(n^2)  | O(n^2)|
#### Space Complexity
  - Worst: O(1)

--------------------------------------

## Merge Sort
- Divide the array into two halves, sort each half, and then merge the sorted halves back together. This process is repeated until the entire array is sorted.
- It can sort large arrays relatively quickly. It is also a ***stable*** sort, which means that the order of elements with equal values is preserved during the sort.
- Merge sort is a popular choice for sorting large datasets because it is relatively efficient and easy to implement. It is often used in conjunction with other algorithms, such as quicksort, to improve the overall performance of a sorting routine.
### Code
  [mergeSort.js](./mergeSort.js)
### Time Comlexity & Space Complexity
#### Time Complexity
  |     Best    |    Average   |    Worst   |
  |-------------|--------------|------------|
  | O(n log(n)) | O(n log(n))  | O(n log(n))|
#### Space Complexity
  - Worst: O(n)

--------------------------------------

## Quick Sort
- Picks an element as a pivot and partitions the given array around the picked pivot
- The key process in quickSort is a partition(). The target of partitions is, given an array and an element x of an array as the pivot, put x at its correct position in a sorted array and put all smaller elements (smaller than x) before x, and put all greater elements (greater than x) after x. All this should be done in linear time.
- Quick sort is usually the fastest on average. But it has the nasty worst case behavior.
### Code
  [quickSort.js](./quickSort.js)
### Time Comlexity & Space Complexity
#### Time Complexity
  |     Best    |    Average   | Worst |
  |-------------|--------------|-------|
  | O(n log(n)) | O(n log(n))  | O(n^2)|
#### Space Complexity
  - Worst: O(log n)

--------------------------------------

## Which sort is best?
- ***Insertion sort:*** should be used for small dataset with few items or items are almost sorted.
- ***Bubble sort:*** should never use, only use for educational purposes.
- ***Selection sort:*** should never use, only use for educational purposes.
- ***Merge sort:*** should use for most cases because the speed for every cases is the same (O(n log n)). Use merge sort when worrying about the worst case scenario. However, merge sort is expensive when considering space complexity.
- ***Quick sort:*** should use for most cases. Quick sort might be better than merge sort, it has the same speed for average case but less space complexity. But be careful about the worst case, if the pivot is not picked properly, it would make the sort really slow.