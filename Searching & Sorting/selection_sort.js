// Code to sort given unsorted array using selection sort.

function sortArray(arr) {
  let temp = 0;
  let min = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    // find the minimum element in the array and update the min with index of minimum element.
    min = i;
    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    // swap the minimum element with arr[i]

    // Added if condition for swapping if the index of minimum element is same as i than no need to swap.
    if (min != i) {
      temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}

const result = sortArray([7, 1, 5, 0, 12, 4, -8, 3, 2]);
console.log(result);
