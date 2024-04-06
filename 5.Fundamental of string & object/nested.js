const school = {
  name: "NDC",
  class: [11, 12],
  events: ["science fair", "Victory Day", "Int. Mother Language Day"],
  unique: {
    color: 'blue',
    result: {
        gpa: 5,
        merit: 'top',
    }
  },
};
// console.log(school.unique.color)
school.unique.result.merit = 'top most'
console.log(school.unique.result.merit)

// delete property
delete school.class
console.log(school)