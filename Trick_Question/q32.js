// LINK : https://www.instagram.com/p/Cx-hn3-SXSL/

function Person(name) {
  // constructor function
  this.name = name;
  if (new.target) {
    console.log("Instance created");
  } else {
    throw new Error("Cannot create instance");
  }
}

Person();

console.log("Rest Code");

// PROBLEM : At line 8 call without new keyword but there is no error, we want error

/**
 * SOLUTION :
 * 1. "use strict"
 * 2. new.target
 */
