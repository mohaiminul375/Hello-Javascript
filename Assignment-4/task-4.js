function password(object) {
    if(!('name' in object && 'birthYear' in object && 'siteName' in object)){
       return 'invalid'
    } 
    let birth = (object.birthYear.toString());
    if(birth.length !== 4){
        return 'invalid'
    }


    let CapitalWeb = object.siteName;
    let webName = CapitalWeb[0].toUpperCase() + CapitalWeb.slice(1);

  let pass = `${webName}#${object.name}@${object.birthYear}`;
  return pass
 
 
}
console.log(password({name: 'rahat' , birthYear: 2002, siteName: 'facebook' }))