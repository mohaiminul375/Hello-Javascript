const myStr = 'I am a student and i eat egg';

function checkVowel(myStr){
    let count = 0;
    for(const str of myStr){
      if(str.includes('a') || 
      str.includes('e') ||
      str.includes('i') ||
      str.includes('o') ||
      str.includes('u')){
        count++
      }
        
    }
    return count;
}

console.log(checkVowel(myStr))

