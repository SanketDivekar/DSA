// Leetcode problem no - 268 - Missing Number
function missingNumber(arr) {
  let sumOfArrayElements = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sumOfArrayElements += arr[i];
  }
  //   Used below math formula to calculate expected sum for all the array elements, and substracted with actual sum of array elements.
  sum = (arr.length * (arr.length + 1)) / 2;
  return sum - sumOfArrayElements;
}

const res = missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]);
console.log(res);
