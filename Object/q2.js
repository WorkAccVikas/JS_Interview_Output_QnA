// LINK : https://www.instagram.com/p/CytcUENNnnj/

const obj = {
  x: 1,
  y: 2,
};

let { x: a, y: b } = obj;

console.log(a, b); // * : 1, 2

a = 5;
console.log(a, b); // * : 5, 2

console.log(obj.x, obj.y); // * : 1, 2
