const person = ["rakib", "nokib", "sakib", "akib", "dakib"];

// const sortedPersons = person.sort();
const numbers = [4, 7, 12, 8, 43, 6, 1];
// const number_asc = numbers.sort(); //not working properly
const number_asc = [...numbers].sort(function(a,b){return a-b}); 
const number_dsc = [...numbers].sort(function(a,b){return b-a}); 

console.log(number_asc)
console.log(number_dsc)

