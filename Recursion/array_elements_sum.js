// code to print sum of all array elements using recursion

function findSum(arr) {
  function calculateSum(n) {
    if (n <= 0) {
      return arr[n];
    }
    return arr[n] + calculateSum(n - 1);
  }
  let res = calculateSum(arr.length - 1);
  return res;
}

const result = findSum([5, 2, 7, 0, 2]);
console.log(result);
