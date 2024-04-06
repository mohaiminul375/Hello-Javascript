const heights2 = ["rahim", "robin", "rafi", "ron", "rashed"];

function smallestName(names) {
  let lowestName = heights2[0].length;
  let lowName = '';
//   let lengthCount = 0;
  for(const name of names){
   if(name.length < lowestName){  
    lowName= name;
   }
  }
  return lowName
}

console.log(smallestName(heights2));
