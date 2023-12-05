// LINK : https://www.instagram.com/p/CxoFZfFsXdn/

function f1(x, y, z) {}

function f2(x, y = 0, z) {}

function f3(x = 0, y, z) {}

console.log(f1.length); // * : 3
console.log(f2.length); // * : 1
console.log(f3.length); // * : 0
