// LINK : https://www.instagram.com/p/Cyn8gTCNqzH/

let b = new Boolean(false); // * : 1, object, 0 (it is object hence true block)
// let b = new Boolean(true); // * : 1, object, 1 (it is object hence true block)
// let b = null; // * : 2, object, 0 (it is falsy value hence false block)
// let b = undefined; // * : 2, undefined, NaN (it is falsy value hence false block)
// let b = 0; // * : 2, number, 0 (it is falsy value hence false block)
// let b = ''; // * : 2, string, 0 (it is falsy value hence false block)
// let b = 'Vikas'; // * : 1, string, NaN (it is truly value hence true block)
// let b = "12"; // * : 1, string, 12 (it is truly value hence true block)
// let b = {}; // * : 1, object, NaN (it is Object hence true block)
// let b = { id: 1, name: "abc" }; // * : 1, object, NaN (it is Object hence true block)
// let b = []; // * : 1, object, 0 (it is Array hence true block)
// let b = [1]; // * : 1, object, 1 (it is Array hence true block)
// let b = [1, 2]; // * : 1, object, NaN (it is Array hence true block)

if (b) {
  console.log(1); // * : 1
} else {
  console.log(2);
}

console.log(typeof b); // * : object
console.log(+b);
