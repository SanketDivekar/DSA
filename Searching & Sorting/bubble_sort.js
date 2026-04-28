// Code to sort given unsorted array using Bubble Sort.

function sortArray(arr) {
  let n = arr.length - 1;
  let temp = 0;
  for (let i = 0; i < n; i++) {
    // We can optimize this algorithm by checking if swap is happening or not. If swapping is not happing between two elements than it means the array has been sorted and we can exit the loop.

    let isSwap = false;
    for (let j = 0; j < n - i; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSwap = true;
      }
    }
    if (isSwap == false) {
      break;
    }
  }
  return arr;
}

const result = sortArray([4, 5, 1, 3, 9]);
console.log(result);
