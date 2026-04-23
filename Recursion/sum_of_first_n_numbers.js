// code to print sum of first n numbers using recursion

function printSum(num) {
  if (num < 1) {
    return 0;
  }
  return num + printSum(num - 1);
}

const res = printSum(5);
console.log(res);
