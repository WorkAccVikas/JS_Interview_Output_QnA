// LINK : https://www.instagram.com/p/Ct4kzKcgOgN/

function f1() {
  console.log("In f1");
}

console.log(typeof f1); // * : function
console.log(typeof f1()); // * : undefined

// ###########################################
function f2() {
  console.log("In f2");
  return "Ram";
}
console.log(typeof f2()); // * : string

// ###########################################
function f3() {
  return (() => 0)();
}

console.log(typeof f3); // * : function
console.log(typeof f3()); // * : number

//  ###########################################
function f4() {
  (() => 0)();
}

console.log(typeof f4); // * : function
console.log(typeof f4()); // * : undefined

//  ###########################################
// LINK :https://www.instagram.com/p/Ct4k-L_gPM6/

console.log(typeof typeof 1); // * : string (typeof "number")
