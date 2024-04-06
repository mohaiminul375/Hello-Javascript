const products = [
    { name: "shampoo", price: 300 ,quantity:2},
    { name: "Chiruni", price: 100 ,quantity:3},
    { name: "Shirt", price: 700 ,quantity:5},
    { name: "pant", price: 1200 ,quantity:1},
  ];

  function shoppingCart(products){
    let total = 0;
    for(const product of products){
        // shortCart
        //  total += product.price * product.quantity;
        let thisProductCost = product.price * product.quantity;
        total+= thisProductCost;
    }
    return total;
  }

  const shoppingCost = shoppingCart(products);
  console.log(shoppingCost)