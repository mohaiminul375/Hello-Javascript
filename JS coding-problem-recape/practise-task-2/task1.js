const heights2 = [167, 190, 120, 165, 137];

function lowestNumber(numbers){
 let lowest = numbers[0];
 for(const number of numbers){
    if(number < lowest){
        lowest = number;
    }
 }
 return lowest;
}

console.log(lowestNumber(heights2))