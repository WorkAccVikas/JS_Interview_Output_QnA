// TOPIC : Check for isObject or not

function isObject(obj) {
  return !!obj && obj.constructor === Object;
}

console.log(isObject()); // * : false

console.log(isObject({})); // * : true
console.log(isObject({ id: 1, name: "Ram" })); // * : true

console.log(isObject([])); // * : false
console.log(isObject(new Date())); // * : false

console.log(isObject(null)); // * : false
console.log(isObject(undefined)); // * : false

/**
 * NOTE :
 *  - It return true only if object is {}
 *  - It return false for Date Object
 *  - It return false for null
 */
