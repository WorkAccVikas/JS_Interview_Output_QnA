// LINK : https://www.instagram.com/p/CuH7vsIATAx/

let count1 = 0;

let arr1 = [0, 1, 2, 3];

arr1.forEach((item) => {
  if (item) {
    count1 += 1;
  }
});

console.log(count1); // * : because 0 is falsy value

// ###############################################################
let count2 = 0;
let arr2 = [10, 1, 2, 3];

arr2.forEach((item) => {
  if (item) {
    count2 += 1;
  }
}, count2);

console.log(count2);
