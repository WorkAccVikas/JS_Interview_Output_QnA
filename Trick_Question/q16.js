// LINK : https://www.instagram.com/p/Ct6NrYogWxI/

let person = {
  id: 1,
  name: "Ram",
};

const obj = [person];

console.log(person); // * : { id: 1, name: 'Ram' }

person = null;

console.log(obj); // * : [ { id: 1, name: 'Ram' } ]

console.log(person); // * : null
