function deleteInvalids(array) {
  if(!(Array.isArray(array))){
    return 'Invalid Array'
  }
  let newArr = [];
  for(const arr of array){
    if (typeof arr === 'number' && !isNaN(arr)){
      newArr.push(arr)
    }
  }
  return newArr;
}

console.log(deleteInvalids([1 , null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]));
