// Leetcode problem no - 88 - Merge Sorted Arrays

function mergeArray(arr1, m, arr2, n) {
  let arr1Copy = arr1.slice(0, m);
  let ptr1 = 0;
  let ptr2 = 0;
  for (let i = 0; i < m + n; i++) {
    if ((arr1Copy[ptr1] < arr2[ptr2] && ptr1 < n) || ptr2 >= n) {
      arr1[i] = arr1Copy[ptr1];
      ptr1++;
    } else {
      arr1[i] = arr2[ptr2];
      ptr2++;
    }
  }
  return arr1;
}

let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];
const result = mergeArray(nums1, 3, nums2, 3);
console.log(result);
