// Code to find whether the target element is present in the array or not using liner search.

function findElement(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      return i;
    }
  }
  return -1;
}

const result = findElement([5, 7, 9, 11, 4, 12], 11);
console.log(result);
