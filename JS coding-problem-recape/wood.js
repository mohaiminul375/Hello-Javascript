/**
 * chair ==> 3cft
 * table ==> 10 cft
 * bed ==>  50 cft
 * 
 */

function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
  let perChairWood = 3;
  let perTableWood = 10;
  let perBedWood = 50;

  let totalChairWood = perChairWood * chairQuantity;
  let totalTableWood = perTableWood * tableQuantity;
  let totalBedWood = perBedWood * bedQuantity;

  let totalWood = totalChairWood + totalTableWood + totalBedWood;
  return totalWood;
}

console.log(woodCalculator(1,1,1));