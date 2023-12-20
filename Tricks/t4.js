// TOPIC : constructor

console.log({}.constructor); // * : [λ: Object]
console.log([].constructor); // * : [λ: Array]
console.log(new Date().constructor); // * : [λ: Date]

function f1() {}
console.log(f1.constructor); // * : [λ: Function]

const f2 = () => {};
console.log(f2.constructor); // * : [λ: Function]

class Car {}
console.log(Car.constructor); // * : [λ: Function]

// console.log(null.constructor); // ! : Cannot read properties of null (reading 'constructor')

// ##################################################################

console.log({}.constructor === Object); // * : true
console.log([].constructor === Object); // * : false
console.log([].constructor === Array); // * : true
console.log(new Date().constructor === Date); // * : true
console.log(f1.constructor === Function); // * : true
console.log(f2.constructor === Function); // * : true

/**
 * NOTE :
 * - It apply on non-primitive values
 */
