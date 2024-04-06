function calculateMoney(ticketQuantity) {
  if (typeof ticketQuantity !== "number") {
  return "please input a valid number";
  } else if (ticketQuantity < 0) {
  return "please input a positive number";
  }
  const perTicketPrice = 120;
  const perWatchManExpense = 500;
  const perStaffLunch = 50;
  const totalEarn = perTicketPrice * ticketQuantity;
  const totalLunchExpense = perStaffLunch * 8;
  const totalExpense = perWatchManExpense + totalLunchExpense;
  const remainsTaka = totalEarn - totalExpense;
  return remainsTaka;
  }

  // 2
  function checkName(name) {
  if (typeof name !== "string") {
  return "invalid";
  }
  const newName = name.toLowerCase();
  if (
  newName.endsWith("a") ||
  newName.endsWith("y") ||
  newName.endsWith("i") ||
  newName.endsWith("e") ||
  newName.endsWith("o") ||
  newName.endsWith("u") ||
  newName.endsWith("w")
  ) {
  return "Good Name";
  }
  return "Bad Name";
  }
  // 3
  function deleteInvalids(array) {
  if (!Array.isArray(array)) {
  return "Invalid Array";
  }
  let newArr = [];
  for (const arr of array) {
  if (typeof arr === "number" && !isNaN(arr)) {
  newArr.push(arr);
  }
  }
  return newArr;
  }

  // 4
  function password(object) {
  if (!("name" in object && "birthYear" in object && "siteName" in object)) {
  return "invalid";
  }
  let birth = object.birthYear.toString();
  if (birth.length !== 4) {
  return "invalid";
  }
  let CapitalWeb = object.siteName;
  let webName = CapitalWeb[0].toUpperCase() + CapitalWeb.slice(1);
  let pass = `${webName}#${object.name}@${object.birthYear}`;
  return pass;
  }

  // monthly saving
  function monthlySavings(array, livingCost) {
  if (!Array.isArray(array) || typeof livingCost !== "number") {
  return "invalid input";
  }
  let totalFromEarn = 0;
  let tax = 0;
  for (const arr of array) {
  if (arr >= 3000) {
  tax = arr * 0.2;
  }
  totalFromEarn += arr;
  }
  let totalEarn = totalFromEarn - tax;
  let savings = totalEarn - livingCost;
  if (savings >= 0) {
  return savings;
  } else if (savings < 0) {
  return "earn more";
  }
  }


  console.log('first',monthlySavings([ 1000 , 2000 , 3000 ] , 5400));
  console.log('second',monthlySavings([ 1000 , 2000 , 2500 ] , 5000));
  console.log('third',monthlySavings([ 900 , 2700 , 3400] , 10000));
  // console.log(monthlySavings(100, [ 900 , 2700 , 3400]));
  