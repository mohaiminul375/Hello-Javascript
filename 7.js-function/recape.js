function add(price1, price2) {
  const total = price1 + price2;
  return total;
}

const bill = add(5, 80);
// console.log(bill);

function isEven(number){
    if(number % 2 === 0){
       return true;
    } else{
        return false
    }
}
// console.log(isEven(5))
// console.log(isEven(110))
// console.log(isEven(46))

function isOdd(number){
    if(number % 2 !== 0){
       return true;
    }
        return false
    
}
console.log(isOdd(2));
console.log(isOdd(15));
console.log(isOdd(23));