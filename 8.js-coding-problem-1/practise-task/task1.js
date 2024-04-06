// the formula is c*(9/5) + 32;
function convertTemp(celsius){
    let fahrenheit = celsius * (9/5) + 32;
    return fahrenheit;
}

const myCelsius = convertTemp(44);
console.log(myCelsius);