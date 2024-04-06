const touristSpot = ["Sajek", "Sundarban", "Jaflong"];

touristSpot.push("kolkata", "shitakundu");

touristSpot.pop();
// console.log(touristSpot);
// Task-3
const book = ["bangla", "math", "accounting"];
// console.log(book.includes('accounting'))

// Task 4
const flowers = ["Rose", "shapla", "ganda"];
const cars = "toyota";
const checkArray = Array.isArray(flowers);
if(checkArray){
    console.log('yes, this is a array')
}
else{
    console.log('no, this is not a array')
}
let arr1 = [2, 4, 6, 8];
let arr2 = [1, 3, 5, 7];

let combinedArray = arr1.concat(arr2);

// console.log('Array 1',arr1)
// console.log('array 2',arr2)
// console.log('combarray',combinedArray)