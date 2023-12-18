// LINK : https://www.instagram.com/p/CuHR4G1Ahqp/

const arr = [10, 20, 30];

const arr1 = arr.slice(0, 1); // * : return new array (❌modified original array)
console.log(arr1); // [ 10 ]

const arr2 = arr.splice(0, 1); // * : return deleted element in array (✅modified original array)
console.log(arr2); // [ 10 ]

const arr3 = arr.unshift(55); // * : return total length of array (✅modified original array)
console.log(arr3); // 3

console.log(arr); // [ 55, 20, 30 ]
