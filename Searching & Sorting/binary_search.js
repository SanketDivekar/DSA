// Code to find whether the target element is present in the array or not using binary search.

function findElement(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (right >= left) {
    let mid = Math.floor((left + right) / 2);

    if (target === arr[mid]) {
      return mid;
    } else if (target > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

const result = findElement([-1, 0, 3, 5, 9, 12], 9);
console.log(result);
