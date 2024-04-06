const mobile = {
    brand: 'Samsung',
    price: 25000,
    color: 'black',
    camera: '12mp',
    isNew: true
}

// print keys
for(const prop in mobile){
    // console.log(prop); //only print keys
    // console.log(mobile[prop]); //only print value
}

const keys = Object.keys(mobile);
// console.log(keys);
for(const prop of keys){
    // console.log(prop);
    console.log(prop, ':' , mobile[prop]) //prop means keys of object, values;
}