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
