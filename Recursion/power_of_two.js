// Leetcode problem no - 231 - Power Of Two

function isPowerOfTwo(n) {
  if (n == 1) {
    return true;
  } else if (n < 1 || n % 2 != 0) {
    return false;
  } else {
    return isPowerOfTwo(n / 2);
  }
}

const result = isPowerOfTwo(3);
console.log(result);
