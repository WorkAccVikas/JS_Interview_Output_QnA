// LINK : https://www.instagram.com/p/Ct397NygBx1/

const obj = {
  1: "a",
  2: "b",
  3: "c",
};

const set = new Set([1, 2, 3, 4, 5]);

console.log(set); // * : Set { 1, 2, 3, 4, 5 }

console.log(obj.hasOwnProperty("1")); // * : true
console.log(obj.hasOwnProperty(1)); // * : true

console.log(set.has("1")); // * : false
console.log(set.has(1)); // * : true
