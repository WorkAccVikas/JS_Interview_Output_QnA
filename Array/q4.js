// LINK : https://www.instagram.com/p/Ct58crCgxrI/

const arr1 = [1, 2, 3];

arr1[10] = 10;

console.log(arr1); // * : [ 1, 2, 3, , , , , , , , 10 ]
console.log(arr1.length); // * : 11

console.log(arr1[6]); // * : undefined
