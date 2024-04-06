let myScore = 50;
let friendScore = 32;


if (myScore > 80) {
    if (friendScore > 80) {
        console.log("then go for a lunch.");
      }
      else if(friendScore <= 79 && friendScore >= 60){
        console.log('good luck next time.')
      }
      else if(friendScore <= 59 && friendScore >= 40){
        console.log('keep your friends message unseen.')
      }
      else if(friendScore <= 39){
        console.log('keep your friends message unseen.')
      }
} 
else {
  console.log("go to home and sleep and act sad");
}
