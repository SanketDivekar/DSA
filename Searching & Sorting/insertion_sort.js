// code to sort given unsorted array using insertion sort.

function sortArray(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currElement = arr[i];
    let prevElement = i - 1;

    // Check if prevElement > currElement and prevElement >= 0 if true shift prevElement to prevElement + 1
    while (arr[prevElement] > currElement && prevElement >= 0) {
      arr[prevElement + 1] = arr[prevElement];
      prevElement--;
    }

    // After while loop insert the currElement at correct position.
    arr[prevElement + 1] = currElement;
  }
  return arr;
}

const result = sortArray([7, 3, 5, 2, 6]);
console.log(result);
