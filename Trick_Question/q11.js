// LINK : https://www.instagram.com/p/Ct3y-u0g-6E/

function f1() {
  "use strict";
  salary = 100; // ! : ReferenceError: salary is not defined
  console.log(salary);
}

f1();
console.log(salary);

// ##########################################################
function f2() {
  city = "MUMBAI"; // ! : city added in global scope
  console.log(city); // * : MUMBAI
  var x = 586;
  console.log(x); // * : 586s
}

// f2();
// console.log(city); // * : MUMBAI
// console.log(x); // ! : x is not defined

// ##########################################################

console.log(city); // ! : city is not defined
f2();
