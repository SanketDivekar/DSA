function countDigit(num) {
  // This is an edge case if num is 0 then return 1

  if (num == 0) {
    return 1;
  }
  // This is an edge case if num is negetive Math.abs convert it to positive integer.

  num = Math.abs(num);
  let count = 0;
  while (num > 0) {
    num = Math.floor(num / 10);
    count++;
  }
  return count;
}

const result = countDigit(159788);
console.log(result);
