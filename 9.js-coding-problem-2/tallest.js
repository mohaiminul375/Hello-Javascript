const height = [65, 66, 68, 72, 78, 60, 65, 66,98];

function getMax(numbers){
    let max = numbers[0];
    
    // console.log(numbers);
    for(const num of numbers){
        if(num > max){
            max = num;
        }
    }
    return max;
}

const max = getMax(height);
console.log(max);