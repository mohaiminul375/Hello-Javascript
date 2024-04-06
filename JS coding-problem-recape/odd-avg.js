function oddAvg(numbers) {
    let odds = []
    for(const number of numbers){
         if(number % 2 !== 0){
            // console.log(number)
            odds.push(number)
         }
    }
    let sum =0;
    for(const number of odds){
        // console.log(number)
        sum+= number
    }
    let avg = sum / odds.length
    console.log(avg)
}

const number = [42, 13, 58, 65, 81,96,7];
console.log(oddAvg(number))