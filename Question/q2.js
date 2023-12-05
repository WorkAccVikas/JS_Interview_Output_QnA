// Link : https://umarfarooquekhan.medium.com/javascript-tricky-interview-question-and-answer-f140d1dfeaff

console.log(2 + true); // * : 3

// ##########################################
console.log(NaN == NaN); // * : false
console.log(NaN === NaN); // * : false

// ##########################################
const s1 = "5";
const s2 = "3";

const r1 = +s1;
const r2 = -s2;
// POINT : Convert string to number
console.log(r1, typeof r1); // * : 5 'number'
console.log(r2, typeof r2); // * : -3 'number'

// ##########################################
console.log("5" - -"3"); // * : 8

// ##########################################
console.log(null == undefined); // * : true
console.log(null === undefined); // * : false

// ##########################################
console.log(typeof null == typeof undefined); // * : false
console.log(typeof null === typeof undefined); // * : false

// ##########################################
console.log(0.1 + 0.2); // * : 0.30000000000000004
console.log(0.1 + 0.2 == 0.3); // * : false

// ##########################################
console.log(1 + "2"); // * : "12"
console.log("1" + 2); // * : "12"
console.log(1 + 2); // * : 3
console.log(1 + "2" + "2"); // * : "122"
console.log(1 + +"2" + "2"); // * : "32"
console.log(1 + -"1" + "2"); // * : "02"
console.log(+"1" + "1" + "2"); // * : "122"

console.log("5" - "3"); // * : 2
console.log("A" - "3"); // * : NaN
console.log("A" - 3); // * : NaN
console.log("3" - "B"); // * : NaN
console.log(3 - "B"); // * : NaN
console.log("A" - "B"); // * : NaN

console.log("A" - "B" + "2"); // * : "NaN2"
console.log("A" - "B" + 2); // * : NaN

// ##########################################
console.log(+true); //  * : 1
console.log(+false); //  * : 0

console.log(+[]); //  * : 0
console.log(+[1]); //  * : 1
console.log(+[1, 2, 3]); //  * : NaN

console.log(+{}); //  * : NaN
console.log(+{ id: 1 }); //  * : NaN
console.log(+{ id: 1, name: "Ram" }); //  * : NaN

const a1 = NaN;
console.log(a1 == NaN); // * : false
console.log(a1 === NaN); // * : false
// NOTE : Right way to compare NaN value
console.log(Number.isNaN(a1)); // * : true

console.log(+null); //  * : 0
console.log(+undefined); //  * : NaN

// ##########################################
console.log(0 || 1); // * : 1
console.log(55 || 1); // * : 55

console.log("" || 1); // * : 1
console.log("Ram" || 1); // * : Ram

console.log(true || 1); // * : true
console.log(false || 1); // * : 1

// ##########################################
console.log(0 && 1); // * : 0
console.log(0 && "Karan"); // * : 0
console.log("" && "Karan"); // * : Empty string
console.log(1 && 2); // * : 2
console.log(true && "Karan"); // * : Karan
console.log(false && "Karan"); // * : false
console.log(NaN && "Karan"); // * : NaN

// ##########################################
const a3 = false;
const r3 = +a3;
console.log(r3, typeof r3);

console.log(false == "0"); // * : true
console.log(false === "0"); // * : false

// ##########################################
console.log(20 + 30 + "10"); // * : "5010"