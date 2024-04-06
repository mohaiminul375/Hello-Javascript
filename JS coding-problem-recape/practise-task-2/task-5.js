
const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function calculateSalary(employees){
    let salaryExpenseInAMonth = 0;
for(employ of employees){
    let totalIncrement = employ.experience * employ.increment;
    let totalSalary = employ.starting + totalIncrement;
    salaryExpenseInAMonth+= totalSalary;

}
return salaryExpenseInAMonth;
}

console.log(calculateSalary(employees))