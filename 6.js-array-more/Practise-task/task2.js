const numbers = [12, 98, 5, 41, 23, 78, 46];
const even = [];

for(const num of numbers){
    // console.log(num)
    if(num % 2 === 0){
        even.push(num);
    }
}
console.log(even)