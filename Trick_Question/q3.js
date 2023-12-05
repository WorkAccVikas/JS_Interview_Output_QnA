// LINK : https://www.instagram.com/p/CylXwnAN6J4/

let x = 100;
let y = x++;
let z = ++x;

console.log(x, y, z); // * : 102, 100, 102
// console.log(x, y); // * : 101, 100 (if z is commented)
// console.log(x, z); //  * : 101, 101 (if y is commented)

let n = x == y ? z++ : ++z;
console.log(n); // * : 103
console.log(z); // * : 103
