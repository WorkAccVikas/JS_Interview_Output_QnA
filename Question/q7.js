var a = {},
  b = { key: "b" },
  c = { key: "c" },
  d = { key: "d" };

a[b] = 123;
a[c] = 456;

console.log(a);
console.log(a[b]); // * : 456
console.log(a[d]); // * : 456
console.log(a[{}]); // * : 456

// ###########################################
const map = new Map();
const b1 = { key: "b" };
const c1 = { key: "c" };
const d1 = { key: "d" };

map.set(b1, 123);
map.set(c1, 456);

console.log(map);
console.log(map.get(b1)); // * : 123
console.log(map.get(c1)); // * : 456
console.log(map.get(d1)); // * : undefined
console.log(map.get({})); // * : undefined

// ###########################################
// PROBLEM : QUESTION : FACTORIAL
console.log(
  (function f(n) {
    return n > 1 ? n * f(n - 1) : n;
  })(5)
);

// ###########################################
(function (x, z) {
  // POINT : Return word has not any affect
  return (function (y) {
    console.log(x, y, z);
  })(2);
})(1, 55);
