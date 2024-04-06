const school = 'RAJ UK Uttra Model School';

console.log(school.toUpperCase());

const subject = 'Chemistry'; //UPPERCASE
const book = 'chemistry'; //lowercase

if(subject.toLowerCase() === book.toLowerCase()){
   console.log('Match');
}
else{
    console.log('unmatched');
}

const drink = 'water';
const liquid = 'water ';

// .trim() remove white space if there are.
if(drink.trim() === liquid.trim()){
    console.log('they are same');
}
else{
    console.log('they are not same');
}
