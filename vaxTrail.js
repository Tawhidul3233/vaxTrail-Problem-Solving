const vaxTrail = (array) => {

  // First i decleare 4 variables. Let is used for reassing after decleare
  let A = [];
  let B = [];
  let C = [];
  let D = [];

  // now  check conditions. This funcation Expects an array 
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



}





