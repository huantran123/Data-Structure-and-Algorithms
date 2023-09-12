// // return the minimum number of coins to sum up to a given sum

// =============== Using LOOP ==================
const findMinCoinsLoop = (coins, sum) => {
  coins.sort((a, b) => b - a) // O(nlogn)

  console.log('coins:', coins)
  console.log('sum:', sum)

  const result = {}
  let sumRemain = sum

  for(let i = 0; i < coins.length; i++) { // O(n)
    const numCoin = Math.floor(sumRemain/coins[i])
    if(numCoin > 0) {
      result[coins[i] + ' coin(s)'] = numCoin
      sumRemain = sumRemain - numCoin * coins[i]
    }
  }

  result.sumRemain = sumRemain

  return result
}

console.log('Greey using LOOP: ')
console.log(JSON.stringify(findMinCoinsLoop([1, 2, 5], 21), null, 4));
console.log('========================')
console.log(JSON.stringify(findMinCoinsLoop([2, 5], 21), null, 4));

// Time complexity: O(nlogn), with n is number of coin types



// =============== Using Recursion ==================

const findMinCoinsRecursion = (coins, sum) => {
  coins.sort((a, b) => b - a)

  console.log('coins:', coins)
  console.log('sum:', sum)

  const result = {}

  let recursion = (coinIndex = 0, sumRemain = sum) => {
    if (coinIndex === coins.length) {
      return result.sumRemain = sumRemain
    }
    const numCoin = Math.floor(sumRemain/coins[coinIndex])
    if (numCoin > 0) {
      result[coins[coinIndex] + ' coin(s)'] = numCoin
      sumRemain -= numCoin * coins[coinIndex]
    }
    recursion(coinIndex + 1, sumRemain)
  }

  recursion(0)
  return result
}

console.log('Greey using Recursion: ')
console.log(JSON.stringify(findMinCoinsRecursion([1, 2, 5], 21), null, 4));
console.log('========================')
console.log(JSON.stringify(findMinCoinsRecursion([2, 5], 21), null, 4));