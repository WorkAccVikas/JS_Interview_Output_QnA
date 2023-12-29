// TOPIC : illegal shadowing

// let i = 20;

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
let i = 20;

function bye(k) {
  let i = 99;
  console.log(k); // * : 21
}

bye(++i);

console.log(i); // * : 21
