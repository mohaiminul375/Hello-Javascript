
function calculateElectronicsBudget(laptopQuantity,tabletQuantity,mobileQuantity){
    let laptop = 35000;
    let tablet = 15000;
    let mobile = 20000;
    let totalLaptopPrice = laptop * laptopQuantity;
    let totalTabletPrice = tablet * tabletQuantity;
    let totalMobilePrice = mobile * mobileQuantity;

    let totalMoneyRequired = totalLaptopPrice + totalTabletPrice + totalMobilePrice;
    return totalMoneyRequired;
}

console.log(calculateElectronicsBudget(1,1,1))