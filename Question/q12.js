// LINK : https://www.instagram.com/p/CuFOm7NgaZ-/

let person = {};
person = 22;

console.log(typeof person); // * : number
console.log(!!typeof person); // * : true
console.log(!typeof person); // * : false

console.log(typeof x); // * : undefined
console.log(!!typeof x); // * : true
console.log(!typeof x); // * : false

console.log(typeof person === "string"); // * : false
console.log(!typeof person === "string"); // * : false
console.log(!(typeof person === "string")); // * : true

if (!typeof person === "string") {
  console.log(1);
} else {
  console.log(2); // * : 2
}

if (!(typeof person === "string")) {
  console.log(11); // * : 11
} else {
  console.log(22);
}

// LINK : https://www.instagram.com/p/CuSQMTqgfEw/

const company = "ABC";

console.log(!typeof company == "object"); // * : false
console.log(!typeof company == "string"); // * : false
console.log(!typeof company === "string"); // * : false
