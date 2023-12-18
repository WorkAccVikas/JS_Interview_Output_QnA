console.log([] == []); // * : false
console.log([] == ![]); // * : true
console.log([] === ![]); // * : false

console.log(![]); // * : false
console.log(!![]); // * : true

const arr1 = [];
const arr2 = [1, 2, 3];
const s1 = "Ram";

// IMP : isArray method will always is array or not
console.log(Array.isArray(arr1));   // * : true
console.log(Array.isArray(arr2));   // * : true
console.log(Array.isArray(s1)); // * : false

console.log(typeof arr1); // * : object

console.log(arr1.constructor); // * : [ : Array]
console.log(arr1.constructor == Array); // * : true
console.log(arr1.constructor === Array); // * : true
