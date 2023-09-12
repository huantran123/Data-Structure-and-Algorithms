// Write a function root(x, n) to find root n-th of x with precision 0.0001. Example: root(4, 2) = 2.

// Using LOOP
// const root = (x, n) => {
//   if (x < 0 && n % 2 === 0) {
//     // Cannot find even-root of a negative number
//     return NaN;
//   }

//   let low = -Math.abs(x); // Ensure low is negative
//   let high = Math.abs(x); // Ensure high is positive
//   let y = (low + high) / 2;

//   while (Math.abs(Math.pow(y, n) - x) > 0.0001) {
//     if (Math.pow(y, n) < x) {
//       low = y;
//     } else {
//       high = y;
//     }
//     y = (low + high) / 2;
//   }

//   return y;
// }

// Using Recursion
const root = (x, n, low = -Math.abs(x), high = Math.abs(x)) => {
  if (x < 0 && n % 2 === 0) return NaN

  let y = (low + high) / 2

  if (Math.abs(Math.pow(y, n) - x) <= 0.0001) return y

  if (Math.pow(y, n) < x) {
    low = y
  } else high = y
  return root(x, n, low, high)
}

console.log(root(9, 2))
console.log(root(27, 2))
console.log(root(-27, 3))
console.log(root(234234927, 5))

const findNum = (arr, num, left = 0, right = arr.length - 1) => {
  if (left > right) return 'does not exist'

  let mid = Math.ceil((left + right) / 2)
  if (arr[mid] === num) return mid
  else if (arr[mid] < num) return findNum(arr, num, mid + 1, right)
  else return findNum(arr, num, left, mid - 1)
}

const arr = [1, 2, 4, 7, 9, 15, 21, 23, 34, 42, 48, 59, 60, 65, 70]
const num = 65
console.log(`index of '${num}':`, findNum(arr, num))