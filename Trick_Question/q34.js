// TOPIC : Convert String to Number

let s1 = "12";

let r1 = parseInt(s1);
console.log(r1, typeof r1); // * : 12 'number'

let r2 = +s1;
console.log(r2, typeof r2); // * : 12 'number'

let r3 = Number(s1);
console.log(r3, typeof r3); // * : 12 'number'

// ###########################################################
let s4 = "12.35"; // * : same value
// let s4 = "12.95"; // * : same value

let r10 = parseInt(s4);
console.log(r10, typeof r10); // * : 12 'number'

let r11 = +s4;
console.log(r11, typeof r11); // * : 12 'number'

let r12 = Number(s4);
console.log(r12, typeof r12); // * : 12 'number'

// ###########################################################
let s2 = "22ab";

let r4 = parseInt(s2);
console.log(r4, typeof r4); // * : 22 'number'

let r5 = +s2;
console.log(r5, typeof r5); // * : NaN 'number'

let r6 = Number(s2);
console.log(r6, typeof r6); // * : NaN 'number'

// ###########################################################
let s3 = "ab22";

let r7 = parseInt(s3);
console.log(r7, typeof r7); // * : NaN 'number'

let r8 = +s3;
console.log(r8, typeof r8); // * : NaN 'number'

let r9 = Number(s3);
console.log(r9, typeof r9); // * : NaN 'number'

/**
 * NOTE :
 * - If "12" => parseInt, +, Number show 12
 * - If "12.25" or "12.95" => parseInt show 12 & Number, + show exact number with decimal point
 * - If "12ab" => parseInt show 12, other will show NaN
 * - If "ab12" => all show NaN
 */
