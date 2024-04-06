// const word = "lovely";

// const capitalizedWord = word[0].toUpperCase() + word.slice(1,6);
// console.log(capitalizedWord);
// let myStr = 'i am a student. i want to be a web developer';
// let newStr = myStr.split(' ');
// console.log(newStr)
// for(let i = 0; i < newStr.length; i++ ){
//     console.log(newStr)
// }
//
const mySentence = "freeCodeCamp is an awesome resource";
const words = mySentence.split(" ");

for (let i = 0; i < words.length; i++) {
    console.log(words[i])
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    console.log(words[i])
}
// console.log(words.join(' '))




// let capitalStr = newStr[0].toUpperCase() + newStr.slice(1);
// console.log(capitalStr);
