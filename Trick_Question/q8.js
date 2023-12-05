// LINK : https://www.instagram.com/p/Ct03kbrgWw_/

function Human(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

let ob1 = new Human("Vikas", "Chandlekar");

// PROBLEM (1) : TypeError: ob1.getFullName is not a function
// Human.getFullName = function () {
//   return `${this.firstName} - ${this.lastName}`;
// };

// SOLUTION (1) : use prototype
Human.prototype.getFullName = function () {
  return `${this.firstName} - ${this.lastName}`;
};

console.log(ob1.getFullName()); // * : Vikas - Chandlekar

// ###############################################
// LINK : https://www.instagram.com/p/Ct1C4g5guXY/
const ob2 = new Human("Pooja", "Bedi");
console.log(ob2); // * : Human { firstName: 'Pooja', lastName: 'Bedi' }

const ob3 = Human("Sachin", "Tendulkar");
console.log(ob3); // * : undefined
