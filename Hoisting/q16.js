let i = 20;

function hi(i) {
  console.log(i); // * : 20
  var i = 99;
  console.log(i); // * : 99
}

hi(++i);

console.log(i); // * : 21
