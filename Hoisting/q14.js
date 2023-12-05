(() => {
  console.log(a); // * : undefined
  a = 10;
  var a = 20;
  console.log(a); // * : 20
})();

console.log(a); // ! :  a is not defined
