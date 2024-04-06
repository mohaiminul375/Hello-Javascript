function countVowels(myStr){
    let countVowel =0;
    for(str of myStr){
        if(str.includes('a') ||
        str.includes('e') ||
        str.includes('i') ||
        str.includes('o') ||
        str.includes('u')
        ){
            countVowel++
        }
    }
    return countVowel;
}

console.log(countVowels('hello, i am student'))