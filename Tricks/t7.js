// TOPIC : Check for isArray or not

function isArray(arr) {
  return !!arr && arr.constructor === Array;
}

console.log(isArray()); // * : false

console.log(isArray([])); // * : true
console.log(isArray([1, 2, 3])); // * : true

console.log(isArray({})); // * : false
console.log(isArray({ id: 1, name: "Ram" })); // * : false

console.log(isArray(new Date())); // * : false

console.log(isArray(null)); // * : false
console.log(isArray(undefined)); // * : false

/**
 * NOTE :
 *  - It return true only if array
 *  - otherwise false
 */
