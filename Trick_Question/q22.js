// LINK : https://www.instagram.com/p/Ct7JN0lAmEN/

const a = "Vikas";

b = 1947;

console.log(delete a); // * : false
console.log(a); // * : Vikas
console.log(delete b); // * : true
// console.log(b); // ! : b is not defined

// ######################################################
const person = {
  id: 1,
  name: "John",
  age: 55,
};

console.log(delete person); // * : false
console.log(delete person.age); // * : true

console.log(person);
