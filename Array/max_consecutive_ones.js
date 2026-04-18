// Leetcode problem no - 485 - Max Consecutive Ones
function maxConsecutiveOnes(nums) {
  let cnt = 0;
  let maxCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      cnt++;
    } else {
      maxCount = Math.max(maxCount, cnt);
      cnt = 0;
    }
  }
  return Math.max(maxCount, cnt);
}

const res = maxConsecutiveOnes([1, 1, 0, 1, 1, 1]);
console.log(res);

const resTwo = maxConsecutiveOnes([1, 0, 1, 1, 0, 1]);
console.log(resTwo);
