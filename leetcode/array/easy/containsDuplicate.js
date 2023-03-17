const containsDuplicate = function(arr) {
  const frequency = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (frequency.get(arr[i]) === undefined) {
      frequency.set(arr[i], 1);
    } else {
      return true;
    }
  }
  return false
}