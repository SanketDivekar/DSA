// Function to print numbers from n to 1 using recusrion
function printNumber(num) {
  if (num < 1) {
    return;
  }
  console.log(num);
  num -= 1;
  printNumber(num);
}

printNumber(10);
