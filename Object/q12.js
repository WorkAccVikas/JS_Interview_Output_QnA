// LINK : https://www.instagram.com/p/Cwuvi3bM_9V/

const person = { name: "Ram" };

person.city = person;

console.log(person); // * : { name: 'Ram', city: [Circular] }

// const str = JSON.stringify(person); // ! : Converting circular structure to JSON --> starting at object with constructor 'Object' --- property 'city' closes the ci...

const str = structuredClone(person);

console.log(str); // * : { name: 'Ram', city: [Circular] }
