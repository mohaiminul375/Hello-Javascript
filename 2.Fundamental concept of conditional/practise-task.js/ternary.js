let age = 22;
// if(age >= 18){
//     console.log('you can vote');
// } else{
//     console.log("sorry ,you can't vote.")
// }

// age >= 18?  console.log('you can vote'): console.log("sorry ,you can't vote.")

let price = 500;
const isLeader = false;

price = isLeader === true ? 0 : price + 100;
console.log(price);

// advanced ternary
if (isLeader === true) {
  if (1000 < price) {
    price /= 2;
  } else {
    price = 0;
  }
} else {
  price += 100;
}

// ternary
price = isLeader === true ? (price > 1000 ? (price /= 2) : 0) : price + 100;
