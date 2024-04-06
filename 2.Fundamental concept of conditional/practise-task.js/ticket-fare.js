let ticketFare = 800;
let age = 65;
// let isStudent = true;


if(age < 10){
    console.log('free')
}
else if(isStudent == true){
 let discount = ticketFare * 0.50;
  let totalFare = ticketFare - discount;
  console.log(totalFare)
}
else if( age >= 60){
    let discount = ticketFare * 0.15;
    let totalFare = ticketFare - discount;
    console.log(totalFare);

}
else{
    console.log('please pay 800tk')
}