function countNegetive(arr) {
  let count = 0;
  if (arr.length < 1) {
    return -1;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
}

const result = countNegetive([2, 5, -78, -5, 22, -9, -14]);
console.log(result);
