// correct
const myStr = "I am learning Programming to become a programmer";

function longestWord(myStr) {
  const newStr = myStr.split(" ");
  let longest = newStr[0];
  for (const str of newStr) {
     if(str.length > longest.length){
        longest = str;
     }
  }
  return longest
}

console.log(longestWord(myStr));












// let myStr = 'I am  learning Programming to become a programmer';
// function checkLongest(myStr){
//   let singleWord = myStr.split(' ');
  
//   let largeWord = '';
//   let countLength =singleWord[2];
//   for(const word of singleWord){
  
//    if(word.length > countLength){
//        countLength = word.length;
//        largeWord = word;
//    }
//   }
//   let result = largeWord + ' ' + countLength;
//   return result;
// }

// console.log(checkLongest(myStr));