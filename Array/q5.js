const arr1 = [1, 2, 3, 4, 5];

const copy_arr1 = arr1;

console.log(arr1); // [ 1, 2, 3, 4, 5 ]
console.log(copy_arr1); // [ 1, 2, 3, 4, 5 ]

console.log(arr1 == copy_arr1); // ! : true (both array point to same memory location)
console.log(arr1 === copy_arr1); // ! : true (both array point to same memory location)

copy_arr1.push(48); // ! : changed

console.log(arr1); // [ 1, 2, 3, 4, 5, 48 ]
console.log(copy_arr1); // [ 1, 2, 3, 4, 5, 48 ]

// #######################################
const arr2 = [1, 2, 3, 4, 5];

const copy_arr2 = [...arr2];

console.log(arr2); // [ 1, 2, 3, 4, 5 ]
console.log(copy_arr2); // [ 1, 2, 3, 4, 5 ]

console.log(arr2 == copy_arr2); // * : false (both array point to different memory location)
console.log(arr2 === copy_arr2); // * : false (both array point to different memory location)

copy_arr2.push(48); // *  : not changed

console.log(arr2); // [ 1, 2, 3, 4, 5 ]
console.log(copy_arr2); // [ 1, 2, 3, 4, 5, 48 ]
