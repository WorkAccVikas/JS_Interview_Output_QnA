// LINK : https://www.instagram.com/p/Cx6PYyBs3Eb/

// TOPIC : PRIMITIVE V/S NON-PRIMITIVE DATA TYPES

/**
 * Primitive :
 * call by value
 * ❌ change (before and after)
 */
function changeValue(no) {
  no = no + no * no;
  return no;
}

let number = 5;

console.log(`before = ${number}`); // * : 5
changeValue(number);
console.log(`after = ${number}`); // * : 5

// #################################################################

/**
 * Non- Primitive :
 * call by reference
 * ✅ change (before and after
 */

function changeValue1(ob) {
  ob.name = "Ram";
  return ob;
}

let obj = {};

console.log(`before = `, obj); // * : before =  {}
changeValue1(obj);
console.log(`after = `, obj); // * : after =  { name: 'Ram' }
