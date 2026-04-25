// code to print sum of all odd array elements using recursion

function findSum(arr) {
  function calculateSum(n) {
    isOddNum = arr[n] % 2 != 0;
    if (n <= 0) {
      if (isOddNum) {
        return arr[n];
      } else {
        return 0;
      }
    }
    return isOddNum ? arr[n] + calculateSum(n - 1) : calculateSum(n - 1);
  }
  let res = calculateSum(arr.length - 1);
  return res;
}

const result = findSum([5, 2, 7, 0, 2]);
console.log(result);
