function findLargestElement(arr) {
  let largest = -Infinity;
  if (arr.length < 1) {
    return -1;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

const result = findLargestElement([3, 4, 22, 67, 2, 89, 1]);
console.log(result);
