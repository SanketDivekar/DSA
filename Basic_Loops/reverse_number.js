function reverseNumber(num) {
  // using numCopy variable and Math.abs() function to handle case of negetive number. If the number is negetive it should return reverse with sign.

  numCopy = num;
  num = Math.abs(num);
  let rev = 0;
  let rem = 0;
  while (num > 0) {
    rem = Math.floor(num % 10);
    rev = rem + rev * 10;
    num = Math.floor(num / 10);
  }

  // if copy of original number is less than 0 return reverse number with the sign else just return a reverse of the number.
  return numCopy < 0 ? -rev : rev;
}

const resultOne = reverseNumber(12356);
console.log(resultOne);

const resultTwo = reverseNumber(-5536612);
console.log(resultTwo);
