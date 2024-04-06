const briyaniKhor = ['abul','babul','cabul','abul','babul','dabul', 'kabul', 'cabul'];

function noDuplicate(array){
    const unique = []; 
 for(const item of array){
    if(!unique.includes(item)){
        unique.push(item)
    }
 }
 return unique;
 }

console.log(noDuplicate(briyaniKhor));