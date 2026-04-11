// Leet code problem no - 27 - Remove element

function removeElement(arr, val) {
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != val) {
      arr[x] = arr[i];
      x += 1;
    }
  }
  return x;
}

const result = removeElement([3,2,2,3],3);
console.log(result);
