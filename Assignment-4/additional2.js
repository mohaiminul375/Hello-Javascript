
let myValue = [1 , null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }];

for(const value of myValue){
    if(isNaN(value)){
    console.log('this is not a number',value,typeof value)}
// } else{
//     console.log('this is a number',value,typeof value)
// }
}

