// Link : https://www.toptal.com/javascript/interview-questions#:~:text=2.-,what%20will%20the%20code%20below%20output%20to%20the%20console%20and%20why

(function () {
  var a = b = 3;
  console.log(a, b);
})();

console.log("a defined? " + (typeof a !== "undefined")); // * : false
console.log("b defined? " + (typeof b !== "undefined")); // * : true

console.log(typeof m); // * : undefined
