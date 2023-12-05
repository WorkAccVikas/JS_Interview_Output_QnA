// LINK : https://www.instagram.com/p/Cydo7w5SuNy/

const obj1 = {};

Object.defineProperty(obj1, "id", { value: 100 });

console.log(obj1); // * : {}
console.log(obj1.id); // * : 100

// #############################################################
const obj2 = {};

Object.defineProperty(obj2, "name", { value: "Ram", enumerable: true });

console.log(obj2); // * : { name: 'Ram' }
console.log(obj2.name); // * : Ram
