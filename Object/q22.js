// LINK : https://www.instagram.com/p/Cymiz8iS32u/

let key = "constructor";

let obj = {};

if (obj[key]) {
  console.log("Present"); // * : Present
} else {
  console.log("Not present");
}

if (key in obj) {
  console.log("Yes"); // * : Yes
} else {
  console.log("No");
}

// SOLUTION:

if (obj.hasOwnProperty(key)) {
  console.log("YES");
} else {
  console.log("NO"); // * : No
}
