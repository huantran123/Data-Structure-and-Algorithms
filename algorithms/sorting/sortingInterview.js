//#1 - Sort 10 schools around your house by distance:
// => Insertion sort (small set of data)

//#2 - eBay sorts listings by the current Bid amount:
// => Radix or counting sort (Bid is always number within a certain range)

//#3 - Sport scores on ESPN
// => Quick sort (less memory)

//#4 - Massive database (can't fit all into memory) needs to sort through past year's user data
// => Merge sort (not going to sort in the memory, worry about the time because it's massive)

//#5 - Almost sorted Udemy review data needs to update and add 2 new reviews
// => Insertion sort (almost sorted data)

//#6 - Temperature Records for the past 50 years in Canada
// => Radix or counting sort in case temperature is interger (number within a certain range)
// => Quick sort in case temperature include decimal (handle large amount of data)

//#7 - Large user name database needs to be sorted. Data is very random.
// => Merge sort (large and random data, expect worst case may happen)
// => Quick sort (if not worry about the time but worry about the space)

//#8 - You want to teach sorting for the first time
// => Bubble sort and selection sort