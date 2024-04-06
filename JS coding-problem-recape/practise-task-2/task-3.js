
function calculateElectronicsBudget(laptopQuantity, tabletQuantity,mobileQuantity){
    const laptop = 35000; 
    const tablet = 15000; 
    const mobile = 20000;
    
    const totalLaptopPrice = laptop * laptopQuantity;
    const totalTabletPrice = tablet * tabletQuantity;
    const totalMobilePrice = mobile * mobileQuantity;

    const totalMoneyRequired = totalLaptopPrice + totalTabletPrice + totalMobilePrice;
    return totalMoneyRequired;
}

console.log(calculateElectronicsBudget(1,1,1))