let num = 1;
let sum = 0;
while (num <= 200) {
  sum += num;
  if(sum >= 100){
    break;
  }
  num++;
}
console.log(sum)
