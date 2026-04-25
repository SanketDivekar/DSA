// Leetcode problem no - 509 - Fibonacci Number

// Need to find F(n)

function findFibonacciNumber(num) {
  if (num <= 1) {
    return num;
  }
  return findFibonacciNumber(num - 1) + findFibonacciNumber(num - 2);
}

const result = findFibonacciNumber(4);
console.log(result);
