const person = {
  name: "Mohaiminul",
  age: 22,
  profession: "future developer",
  salary: 0,
  married: false,
  "favorite-food": "Biriyani",
};
// access object property
// console.log(person["favorite-food"]);
// console.log(person.age);
person["favorite-food"] = "kacci";
// console.log(person.length);

const keyName = 'profession';
// console.log(person[keyName])
person[keyName] = 'developer MERN';
console.log(person)