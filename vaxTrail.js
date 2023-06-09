const vaxTrail = (array) => {

  // First i decleare 4 variables. Let is used for reassing after decleare
  let A = [];
  let B = [];
  let C = [];
  let D = [];

  // now  check conditions.
  array.forEach(person => {
    if (person.temperature < 100) {
      if (person.age >= 20 && person.age <= 30) {
        A.push(person);
      } else if (person.age >= 31 && person.age <= 40) {
        B.push(person);
      } else if (person.age >= 41 && person.age <= 50) {
        C.push(person);
      }
    } else {
      D.push(person);
    }
  });

  // Each array sort by even ages people
  A.sort((a, b) => a.age - b.age);
  B.sort((a, b) => a.age - b.age);
  C.sort((a, b) => a.age - b.age);
  D.sort((a, b) => a.age - b.age);

  return { A, B, C, D };

}

// const result = vaxTrail([
//   { name: 'sunil', age: 21, temperature: 98 },
//   { name: 'Biplap', age: 31, temperature: 98 },
//   { name: 'juka', age: 70, temperature: 120 },
//   { name: 'juka', age: 25, temperature: 100 },
// ])
// console.log(result)



