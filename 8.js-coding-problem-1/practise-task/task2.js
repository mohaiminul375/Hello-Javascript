const numbers = [5, 6, 11, 12, 98, 5];

function repeat(numbers){
    // console.log(numbers);
    let find = 25;
    let count = 0;
    for(const number of numbers){
        if(number === find){
           count++
        }
    }
    return count;
}

console.log(repeat(numbers))