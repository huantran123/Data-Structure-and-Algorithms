// Weite two functions that finds the factorial of any number.
// One should use recursive, the other should just use a for loop.

const findFactorialRecursive = (num) => {
  let result = 1;
  if (num <= 1) {
    return 1;
  }
  result = num * findFactorialRecursive(num - 1);
  return result;
}

const findFactorialIterative = (num) => {
  if (num === 0) {
    return 1;
  }
  let result = 1;
  for (let i = num; i >= 2; i--) {
    result *= i;
  }
  return result;
}

console.log(findFactorialRecursive(8))
console.log(findFactorialIterative(8))