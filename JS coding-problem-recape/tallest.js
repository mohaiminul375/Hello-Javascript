const height = [65, 66, 68, 72, 78, 60, 65, 66];

function getMax(numbers) {
    let max = numbers[0];
    for (const num of numbers) {
      if(max < num){
        max = num;
      }
}
return max;
}

console.log(getMax(height));
