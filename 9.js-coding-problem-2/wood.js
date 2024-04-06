/*
 * Chair--> 3 cft
 * Table--> 10 cft
 * Bed--> 50 cft
 */

function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
  const perChairWod = 3;
  const perTableWood = 10;
  const perBedWod = 50;

  const allChairWood = perChairWod * chairQuantity;
  const allTableWood = perTableWood * tableQuantity;
  const allBedWood = perBedWod * bedQuantity;
  const totalWood = allChairWood + allTableWood + allBedWood;
  return totalWood;
}

const wood = woodCalculator(0,0,1);
console.log(wood)