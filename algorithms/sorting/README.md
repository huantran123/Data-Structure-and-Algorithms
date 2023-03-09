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

## Insertion Sort
- Repeatedly taking an element from the unsorted portion of the array and inserting it into its correct position in the sorted portion of the array.
- This sorting is efficient when the list is almost or already sorted
### Code
  [insertionSort.js](./insertionSort.js)
### Time Comlexity & Space Complexity
#### Time Complexity
  | Best | Average | Worst |
  |------|---------|-------|
  | O(n) | O(n^2)  | O(n^2)|
#### Space Complexity
  - Worst: O(1)