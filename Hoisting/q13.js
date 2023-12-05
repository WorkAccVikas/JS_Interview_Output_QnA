// a = 100;

// (() => {
//   console.log(a);
//   a = 10;
//   console.log(a);
// })();

// console.log(a);

/** OUTPUT : 100, 10, 10 */

// ####################################################################################
a = 100;

(() => {
  console.log(a);
  var a = 10;
  console.log(a);
})();

console.log(a);

/** OUTPUT : undefined, 10, 100 */
