

const briyanikhor = ['abul', 'babul', 'cabul', 'abul', 'babul', 'dabul', 'cabul', 'kabul'];

function noDuplicate(array){
    const unique = [];
    for(const item of array){
        if(!unique.includes(item)){
            unique.push(item)
        }
    }
    return unique;
}

const unique = noDuplicate(briyanikhor);
// console.log(unique);

const numbers = [1,5,4,7,1,2,7,2,9];

function duplicateNumber(numbers){
    const double = [];    
    for(const number of numbers){
        // if the value is false it will work
       if(!double.includes(number)){
          double.push(number)
       }
    }
    return double
}
console.log(duplicateNumber(numbers));