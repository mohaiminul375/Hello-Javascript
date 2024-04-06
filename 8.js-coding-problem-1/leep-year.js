function isLeapYear(year) {
  if (year % 100 !== 0 && year % 4 === 0) {
    return true;
  } else if(year % 100 === 0 && year % 400 === 0){
        return true
  } else{
    return false
  }
}

const year = isLeapYear(2024);
console.log(year);
