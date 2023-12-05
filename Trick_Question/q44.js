// LINK : https://www.instagram.com/p/CzEKfNsyHS0/

console.log(0 == "0"); // * : true
console.log(0 == []); // * : true
console.log("0" == []); // * : false

/**
 * NOTE :
 * Comparison using '=='
 * - Primitive with non-primitive : first convert non-primitive to primitive using toString()
 */

console.log([].toString()); // * : ''
console.log({}.toString()); // * : '[object Object]'

console.log(Number("")); // * : 0
console.log(Number("Ram")); // * : NaN
