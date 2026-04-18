// Leetcode problem no - 283 - Move Zeros
function moveZeros(arr) {
  let x = 0;
  let temp = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      temp = arr[i];
      arr[i] = arr[x];
      arr[x] = temp;
      x += 1;
    }
  }
  return arr;
}

// Example 1
const res = moveZeros([1, 0, 1]);
console.log(res);

// Example 2
const resTwo = moveZeros([0, 1, 0, 3, 12]);
console.log(resTwo);
