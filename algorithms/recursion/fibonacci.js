// Given a number N return the index value of the Fibonacci sequence, where the sequence is:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 -> 2+3

let cal1 = 0, cal2 = 0, cal3 = 0, cal4 = 0;
// Time complexity: O(n)
const fibonacciIterative1 = (n) => {
  if (n < 2) {
    return n;
  }
  let num1 = 0, num2 = 1;
  let result = 0;
  for (let i = 2; i <= n; i++) {
    cal1++;
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
    cal2++;
    arr.push(arr[i-2] + arr[i-1]);
  }
  return arr[n];
}

// Time complexity: O(2^n)
const fibonacciRecursive = (n) => {
  cal3++;
  if (n < 2) {
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)
}


const fibonacciDynamic = (num) => {
  let cache = {};

  const fib = (n) => {
    if (n in cache) {
      return cache[n]
    } else {
      cal4++;
      if (n < 2) {
        return n;
      }
      cache[n] = fib(n - 1) + fib(n - 2)
      return cache[n]
    }
  }

  return fib(num);
}

console.log(fibonacciIterative1(20))
console.log('Cal 1: ', cal1)
console.log(fibonacciIterative2(20))
console.log('Cal 2: ', cal2)
console.log(fibonacciRecursive(20))
console.log('Cal 3: ', cal3)
console.log(fibonacciDynamic(20))
console.log('Cal 4: ', cal4)