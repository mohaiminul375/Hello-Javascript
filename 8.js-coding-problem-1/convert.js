//12 inch = 1feet
function inchToFeet(inch) {
  const feetFraction = inch / 12;
  const feetNumber = parseInt(feetFraction);
  const feetInch = inch % 12;
  const feet = `${feetNumber}feet, ${feetInch}inch`;
  return feet;
}
const shubhoHight = inchToFeet(75);
// console.log(shubhoHight)

function mileToKm(mile) {
  const Kilo = mile * 1.06934;
  return Kilo;
}

console.log(mileToKm(18));
