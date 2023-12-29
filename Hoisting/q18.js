// TOPIC : illegal shadowing

// var i = 20;

// function hi(i) {
//   let i = 99;
//   console.log(i);
// }

// hi(++i);

// console.log(i);

// !  : SyntaxError: Identifier 'i' has already been declared
/** DESC :
 * i declared globally and
 * in hi function, i is parameter
 * this is main reason if you change to any other name except i
 * because it is globally declared
 * see bye function (it working fine)
 */

// ######################################################################################
// var i = 20;

// function bye(j) {
//   let i = 99;
//   console.log(j); // * : 21
// }

// bye(++i);

// console.log(i); // * : 21

// ######################################################################################
var i = 20;

function gm(i) {
  console.log(i); // * : 21
  var i = 99;
  console.log(i); // * : 99
}

gm(++i);

console.log(i); // * : 21

/** DESC :
 *  - In var case outside globally var
 *  - In function parameter same var variable
 *  - In function redeclare same var variable
 *  - All this possible in using var variable
 */
