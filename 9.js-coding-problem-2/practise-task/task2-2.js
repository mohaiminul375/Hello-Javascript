let myStr = 'I am MohaiminulIslam learning Programming to become a programmer';
// solved by self by use brain
function checkLongest(myStr){
  let singleWord = myStr.split(' ');
//   console.log(singleWord);
  let largeWord = '';
  let countLength = singleWord[0].length;
  for(const word of singleWord){
    if(word.length < countLength){
        countLength = word.length
        largeWord = word;
  }
    else{
        // countLength= word.length
      largeWord = singleWord[0];
     }

}
  return largeWord;
  
}

console.log(checkLongest(myStr));