const numbers = [1, 2, 3, 4, 5, 6, 7];

// numbers.reverse();
// console.log(numbers)
const rev_numbers = [];
// for(const num of numbers){
//     // console.log(num);
//     rev_numbers.unshift(num)
// }

// for (let i = 0; i < numbers.length; i++) {
//     const num= numbers[i];
//     rev_numbers.unshift(num)
// }

// console.log(rev_numbers)

for(let i = numbers.length-1; i >= 0; i--){
    console.log(numbers[i])
}