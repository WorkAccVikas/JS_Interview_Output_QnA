console.log([] == []); // * : false
console.log([] == ![]); // * : true
console.log([] === ![]); // * : false

console.log(![]);
console.log(!![]);

const arr1 = [];
const arr2 = [1, 2, 3];

// IMP : isArray method will always return true if array is empty or not
console.log(Array.isArray(arr1));
console.log(Array.isArray(arr2));

console.log(typeof arr1); // * : object

console.log(arr1.constructor); // * : [ : Array]
console.log(arr1.constructor == Array); // * : true
console.log(arr1.constructor === Array); // * : true
