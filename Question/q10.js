var b = 11;
function outer() {
  var b = 22;
  function inner() {
    b++;
    var b = 33; // * : 23 if this line is commented
    console.log(b); // * : 33
  }
  inner();
}
outer();
