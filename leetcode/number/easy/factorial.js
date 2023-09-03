
// Using LOOP
let factorialLoop = (n) => {
  if (n <= 1) return 1
  let result = 1
  while (n >= 1) {
    result *= n--
  }
  return result
}

console.log(factorialLoop(15))

// Using Recursion
let factorialRecursion = (n) => {
  if (n <= 1) return 1
  return n * factorialRecursion(n - 1)
}

console.log(factorialRecursion(15))

