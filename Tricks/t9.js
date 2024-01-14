// TOPIC : Return true if empty string and null, undefined (work for string, not work for number)

const x = ["Ram", "Seeta"]; // * : false
// const x = ["Ram", "0"]; // * : false
// const x = ["Ram", "1"]; // * : false

// const x = ["Ram", ""];  // * : true
// const x = ["Ram", "     "];  // * : true
// const x = ["Ram", null];  // * : true
// const x = ["Ram", undefined];  // * : true

const result = !x.every((i) => i && i.trim() !== "");

console.log(result);
