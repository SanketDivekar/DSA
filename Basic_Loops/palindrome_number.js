function checkPalindromeNumber(num) {
  if (num < 0) {
    return false;
  }

  let reverseNum = 0;
  let rem = 0;
  let n = num;
  while (num > 0) {
    rem = Math.floor(num % 10);
    reverseNum = rem + reverseNum * 10;
    num = Math.floor(num / 10);
  }

  if (n === reverseNum) {
    return true;
  } else {
    return false;
  }
}

const result = checkPalindromeNumber(123321);
console.log(result);
