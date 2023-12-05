const bar1 = {};

console.log(typeof bar1 === "object"); // * : true

const bar2 = null;
console.log(typeof bar2 === "object"); // * : true

// PROBLEM  : But, we want false
console.log(bar2 !== null && typeof bar2 === "object"); // * : false
console.log(bar1 !== null && typeof bar1 === "object"); // * : true

// POINT :  returns false for nulls, arrays, and functions, but true for objects:
const bar3 = [];
console.log(bar1.constructor);
console.log(bar3.constructor);

console.log(bar1 !== null && bar1.constructor == Object); // * : true
console.log(bar2 !== null && bar2.constructor == Object); // * : false
console.log(bar3 !== null && bar3.constructor == Object); // * : false
