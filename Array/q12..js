// LINK : https://www.instagram.com/p/CxyZxHQSBmU/

const arr = new Array(100);

console.log(arr);
console.log(arr.length); // * : 100

function waitForNSecond(sec) {
  let end = sec * 1000 + new Date().getTime();
  while (new Date() < end) {}
}

function findLength() {
  waitForNSecond(1);
  return arr.length;
}

for (let i = 0; i < findLength(); i++) {}

console.log("End");

// PROBLEM (1) : Here, for every iteration length calculate and its sync programming.

// SOLUTION (1) : 
let length = arr.length;
for (let j = 0; j < length; j++) {}

console.log("End");
