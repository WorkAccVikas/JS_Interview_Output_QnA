// var x = 10;

// (() => {
//   console.log(x);
//   x = 20; // * : It override value in global scope
//   console.log(x);
// })();

// console.log(x);
// var x = 30;

/** OUTPUT : 10, 20, 20 */

// ###################################################################################
var x = 10;

(() => {
  console.log(x);
  var x = 20;
  x1 = 100; // * : added in global scope
  console.log(x);
})();

console.log(x1); // * : 100 (After IIFE destroy still access it)

console.log(x);
var x = 30;

/** OUTPUT : undefined, 20, 10 */
