const mobiles = [
  { name: "samsung", price: 20000, camera: "12mp", color: "black" },
  { name: "Xaiomi", price: 18000, camera: "12mp", color: "black" },
  { name: "Oppo", price: 30000, camera: "12mp", color: "black" },
  { name: "Iphone", price: 100000, camera: "12mp", color: "black" },
  { name: "Walton", price: 10000, camera: "12mp", color: "black" },
  { name: "HTC", price: 27000, camera: "12mp", color: "black" },
];

function getCheapest(mobiles){
    let cheapest = mobiles[0];
   for(const mobile of mobiles){
    if(mobile.price < cheapest.price){
        cheapest = mobile;
    }
   }
   return cheapest
}
console.log(getCheapest(mobiles))