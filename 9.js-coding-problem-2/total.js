const products = [
  { name: "shampoo", price: 300 },
  { name: "Chiruni", price: 100 },
  { name: "Shirt", price: 700 },
  { name: "pant", price: 1200 },
  // {name:'shampoo', price: 300},
];

function getShoppingTotal(products){
  let total = 0;
    for(const product of products){
     total+= product.price;
  }
  return total;
}
const total = getShoppingTotal(products);
console.log(total)