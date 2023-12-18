let x = [];

console.log(x[0]); // * : undefined
console.log(x["city"]); // * : undefined

console.log(x); // * : []
console.log(x.length); // * : 0

x[0] = 55;

console.log(x); // * : [ 55 ]
console.log(x.length); // * : 1

x["Ram"] = 999;

console.log(x); // * : [ 55, Ram: 999 ]

console.log(x.length); // * : 1

console.log(x["Ram"]);  // * : 999
