(function () {
  var city = "Mumbai";
  pinCode = 400084; // ! : added in global scope
  console.log(city); // * : Mumbai
})();

console.log(pinCode); // * : 400084
console.log(city); // ! : ReferenceError: city is not defined
