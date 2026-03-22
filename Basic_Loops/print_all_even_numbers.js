function printEvenNumbers(arr) {
  if (arr.length < 1) {
    return -1;
  }
  let evenNumberList = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      evenNumberList.push(arr[i]);
    }
  }
  return evenNumberList;
}
const result = printEvenNumbers([2, 56, 78, 11, 33, 6, 4]);
console.log(result);
