const prices = [20000, 16000, 50000, 100000, 12000, 30000, 35000];

function getMin(prices) {
  let min = prices[0];
  for (const num of prices) {
    if (num < min) {
      min = num;
    }
  }
  return min;
}

console.log(getMin(prices));
