const mobiles = [
  { name: "Samsung", price: 20000, camera: "12mp", color: "black" },
  { name: "Xaomi", price: 18000, camera: "12mp", color: "black" },
  { name: "Oppo", price: 30000, camera: "12mp", color: "black" },
  { name: "Iphone", price: 100000, camera: "12mp", color: "black" },
  { name: "Walton", price: 31000, camera: "12mp", color: "black" },
  { name: "Htc", price: 27000, camera: "12mp", color: "black" },
];

function getCheapest(phones){
    let min = phones[0].price;
    for(const phone of phones){
        if(phone.price < min){
            min = phone
        }
    }
   return min;
}

const cheap = getCheapest(mobiles);
console.log(cheap)