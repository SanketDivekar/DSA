// Code to sort the given unsorted array using Merge sort.

function sortArray(arr) {
  // Base case for recursion
  if (arr.length <= 1) {
    return arr;
  }
  //   Base case code ends

  let mid = Math.floor(arr.length / 2);

  //   Recursive call
  let left = sortArray(arr.slice(0, mid));
  let right = sortArray(arr.slice(mid));
  //   Recursive call code ends

  //   calling mergeSortedArray function to merge sorted array and return single array.
  return mergeSortedArray(left, right);
}

function mergeSortedArray(leftArr, rightArr) {
  let i = 0;
  let j = 0;
  let sortedArray = [];

  //   Compare two array and check which element is smaller push that element to sortedArray and increment the index of that array.
  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] < rightArr[j]) {
      sortedArray.push(leftArr[i]);
      i++;
    } else {
      sortedArray.push(rightArr[j]);
      j++;
    }
  }

  //Using spread operator created a copy of sortedArray array with remaing array elements from leftArr or rightArr

  return [...sortedArray, ...leftArr.slice(i), ...rightArr.slice(j)];
}

const result = sortArray([9, 2, 1, 5, 66, -9, 0, 11, 3, 8]);
console.log(result);
