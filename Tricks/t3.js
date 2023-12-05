// LINK : https://www.instagram.com/p/CyTICJGhDPA/

// TOPIC : NaN

console.log(NaN == NaN); // * : false
console.log(NaN == NaN); // * : false

// POINT : Correct way to compare NaN
let x = NaN;

console.log(isNaN(x)); // * : true
console.log(Number.isNaN(x)); // * : true
console.log(Object.is(x, NaN)); // * : true
console.log(Object.is(NaN, NaN)); // * : true

// #########################################################
console.log(isNaN()); // * : true

console.log(isNaN("")); // * : false
console.log(isNaN("Ram")); // * : true

console.log(isNaN(0)); // * : false
console.log(isNaN(1)); // * : false
console.log(isNaN(10)); // * : false

console.log(isNaN(true)); // * : false
console.log(isNaN(false)); // * : false

console.log(isNaN(null)); // * : false
console.log(isNaN(undefined)); // * : true

console.log(isNaN({})); // * : true
console.log(isNaN({ id: 1, name: "Ram" })); // * : true

console.log(isNaN([])); // * : false
console.log(isNaN([1])); // * : false
console.log(isNaN([1, 2])); // * : true

console.log(isNaN(NaN)); // * : true
console.log(isNaN()); // * :

/**
 * NOTE :
 * - 0, '', false, true, null = false
 * - undefined, NaN = true
 * - All object/ empty object = true
 * - Don't use for Array
 * - If you don't pass any = true
 */
