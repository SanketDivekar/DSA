function findSmallestElement(arr) {
  let smallest = Infinity;
  if (arr.length < 1) {
    return -1;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}

const result = findSmallestElement([3, 44, 6, 89, 6, 4, 55]);
console.log(result);
