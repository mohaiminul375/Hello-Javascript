// If a given string has either x, replace x by y. if the given string has X, replace it by Y.
let str = 'My   xnamex is ';
// output: Y y y Y

if(str.includes('x') || str.includes("X")){
  let convx = str.replaceAll('x','y');
  let convX = convx.replaceAll('X','Y');
    console.log(convX)
    // console.log(true)
} 

// chat GPT
// let inputString = "This is a string with x and X, and also some more x and X.";

// // Replace 'x' with 'y'
// let stringWithY = inputString.replace(/x/g, 'y');

// // Replace 'X' with 'Y'
// let finalString = stringWithY.replace(/X/g, 'Y');

// console.log(finalString);
