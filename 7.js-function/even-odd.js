function evenNumbersOnly(numbers) {
    const evens = [];
  for (const number of numbers) {
    // console.log(number)
    if(number % 2 === 0){
        // console.log(number)
        evens.push(number)
    }
  }
  console.log(evens)
}

const number = [5, 8, 91, 24, 6];
evenNumbersOnly(number)
