function findSecondLargestElement(arr) {
  if (arr.length < 2) {
    return -1;
  }
  let largestElement = -Infinity;
  let secondLargestElement = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestElement) {
      secondLargestElement = largestElement;
      largestElement = arr[i];
    } else if (arr[i] > secondLargestElement && arr[i] != largestElement) {
      secondLargestElement = arr[i];
    }
  }
  return secondLargestElement;
}

const result = findSecondLargestElement([23, 6, 78, 22, 56, 2]);
console.log(result);
