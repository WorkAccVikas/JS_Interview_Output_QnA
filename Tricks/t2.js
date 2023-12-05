// TOPIC : ||

console.log(0 || ""); // * : ''
console.log(0 || "" || "Vikas"); // * : Vikas
console.log("" || "Vikas"); // * : Vikas
console.log(0 || "Vikas"); // * : Vikas
console.log(NaN || "Vikas"); // * : Vikas

console.log(false || "Vikas"); // * : Vikas
console.log(null || "Vikas"); // * : Vikas
console.log(undefined || "Vikas"); // * : Vikas

console.log([] || "Vikas"); // * : []
console.log({} || "Vikas"); // * : {}
console.log("Ram" || "Vikas"); // * : Ram

console.log(true || "Vikas"); // * : true

// NOTE : [] , {} are truthy value
/**
 * IMP :
 * All falsy value result RHS
 * All truthy value result LHS
 */

// ###########################################################
// TOPIC : &&

console.log(false && "Vikas"); // * : false
console.log(null && "Vikas"); // * : null
console.log(undefined && "Vikas"); // * : undefined
console.log(NaN && "Vikas"); // * : NaN
console.log(0 && ""); // * : 0
console.log("" && "Vikas"); // * : ''

console.log(true && "Vikas"); // * : Vikas

console.log([] && "Vikas"); // * : Vikas
console.log({} && "Vikas"); // * : Vikas
console.log("Ram" && "Vikas"); // * : Vikas

// NOTE : [] , {}, "Ram" are truthy value
/**
 * IMP :
 * All falsy value result LHS
 * All truthy value result RHS
 */

// ###########################################################
// TOPIC : ??

console.log(null ?? "Vikas"); // * : Vikas
console.log(undefined ?? "Vikas"); // * : Vikas

console.log(false ?? "Vikas"); // * : false
console.log(NaN ?? "Vikas"); // * : NaN
console.log(0 ?? ""); // * : 0
console.log("" ?? "Vikas"); // * : ''

console.log(true ?? "Vikas"); // * : true

console.log([] ?? "Vikas"); // * : []
console.log({} ?? "Vikas"); // * : {}
console.log("Ram" ?? "Vikas"); // * : Ram

// NOTE : [] , {}, "Ram" are truthy value
/**
 * IMP :
 * All truthy value result LHS
 * All falsy value except null, undefined result LHS
 * For null and undefined result RHS
 */
