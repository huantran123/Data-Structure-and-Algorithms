// Given a number N return the index value of the Fibonacci sequence, where the sequence is:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 -> 2+3

// Time complexity: O(n)
const fibonacciIterative1 = (n) => {
  if (n < 2) {
    return n;
  }
  let num1 = 0, num2 = 1;
  let result = 0;
  for (let i = 2; i <= n; i++) {
    result = num1 + num2;
    let temp = num2;
    num2 = result;
    num1 = temp;
  }
  return result;
}

// Time complexity: O(n)
const fibonacciIterative2 = (n) => {
  let arr = [0, 1]
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i-2] + arr[i-1]);
  }
  return arr[n];
}

// Time complexity: O(2^n)
const fibonacciRecursive = (n) => {
  if (n < 2) {
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)
}

console.log(fibonacciIterative1(11))
console.log(fibonacciIterative2(11))
console.log(fibonacciRecursive(11))