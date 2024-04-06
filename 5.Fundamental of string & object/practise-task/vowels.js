
function vowel(myStr){
    if(myStr.includes('a') &&
    myStr.includes('e') &&
    myStr.includes('i') &&
    myStr.includes('o') &&
    myStr.includes('u')
    ){
      return 'this string contain all vowel'
    } else{
        return "this string doesn't contain all vowel"
    }

}

console.log(vowel('i am a student. ff'))