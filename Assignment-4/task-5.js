function monthlySavings(array, livingCost) {
if(!Array.isArray(array) && typeof livingCost !== 'number'){
    return 'invalid input'
}
    
    let totalFromEarn = 0;
    let tax = 0;
    
    for(const arr of array){
        if(arr >=3000){
             tax = arr * .20;
            
            
        }
        totalFromEarn+= arr;
    }
    let totalEarn = totalFromEarn - tax;
    let savings = totalEarn - livingCost;
    if(savings >= 0){
        return savings
    } else if(savings <= 0){
        return 'earn more'
    }
  
}

// console.log(monthlySavings('dd' , 'dd'));
// console.log(monthlySavings([ 1000 , 2000 , 2500 ],'kk'));
// console.log(monthlySavings([ 900 , 2700 , 3400]));

console.log(monthlySavings(100, [ 900 , 2700 , 3400]));
