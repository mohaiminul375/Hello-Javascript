/**
 * upto 100 --> 100 taka each ticket
 * more than 101-200 ->90
 * more than 200 ->70
 */
// layer discount

function layerDiscount(quantity){
   const first100Price = 100;
   const second100Price = 90;
   const above200Price = 70;

if(quantity <= 100){
  const total = first100Price * quantity;
  return total;
} else if(quantity <= 200){
  const first100Total = first100Price * 100;
  const remainingQuantity = quantity - 100;
  const remainingTotal = remainingQuantity * second200Price;
  const total = first100Total + remainingTotal
  return total
} else{
    const first100Total = first100Price * 100;
    const second200Total = second100Price * 100;
    const remainingQuantity = quantity - 200;
    const remainingTotal  = remainingQuantity * above200Price;
    const total = first100Total + second200Total + remainingTotal
    return total
}

}