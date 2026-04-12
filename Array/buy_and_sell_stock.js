// Leet code proble no - 121 - Best time to buy and sell stock

function maxProfit(arr) {
  
  let min = arr[0];
  let profit = 0;
  for (let i = 1; i < arr.length; i++) {
    if(arr[i] - min > profit) {
        profit = arr[i] - min;
    }
    if(arr[i] < min) {
        min = arr[i];
    }
  }
  return profit
}

const result = maxProfit([1,4,2]);
console.log(result);
