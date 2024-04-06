// solve by me without any help
function oddAverage(numbers) {
 let sum = 0;
 let count = 0;
 for(const number of numbers){
   if(number % 2 !== 0){
     sum+= number;
     count++
   }
 }
 let oddAvg = sum / count;
 return oddAvg
}


// solve by jhanker mahabub
function oddAverage2(numbers){
    const odd = [];
    for(const number of numbers){
        if(number % 2 !== 0){
            odd.push(number)
        }
    }
    let sum = 0;
    for(const number of odd){
        sum+= number;
    }
    // console.log(sum)
    let count = odd.length
    let oddAvg = sum / count;
    return oddAvg;
}

const numbers = [42, 13, 58, 65, 81,96,7];
const avg = oddAverage2(numbers)
console.log(avg);