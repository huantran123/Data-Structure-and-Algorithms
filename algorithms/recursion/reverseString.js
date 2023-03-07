//Implement a function that reverses a string using iteration...and then recursion!
function reverseStringRecursive(str) {
  if (str.length <= 1) {
    return str;
  }
  return reverseStringRecursive(str.substring(1)) + str[0]
}

function reverseStringIterative(str) {
  if (str.length <= 1) {
    return str;
  }
  let result = '';
  for (var i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

console.log(reverseStringRecursive('yoyo mastery'))
console.log(reverseStringIterative('yoyo mastery'))
//should return: 'yretsam oyoy'