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