const numbers = [5, 6, 11, 12, 98, 5];

function find(numbers){
  let input = 25;
  let output = 0;
  for(const number of numbers){
    if(number === input){
        output++;
    }
  }
  return output;
}
console.log(find(numbers));