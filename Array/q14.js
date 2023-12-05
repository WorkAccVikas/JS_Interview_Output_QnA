// LINK : https://www.instagram.com/p/CyYlAd_SjRZ/

// TOPIC : Make length 0

let arr1 = [1, 2, 3, 4, 5];

arr1 = [];
console.log(arr1); // * : []

// #################################################################
const arr2 = [1, 2, 3, 4, 5];

arr2.length = 0;
console.log(arr2); // * : []

// #################################################################
const arr3 = [1, 2, 3, 4, 5];

let x = arr3.splice(0, arr3.length);

console.log(x); // * : [1, 2, 3, 4, 5]
console.log(arr3); // * : []
