// LINK : https://www.instagram.com/p/Cx_Nw6ny5Zp/

console.log("start");
(async () => {
  const x = await 5;
  console.log("middle");
})();
console.log("end");

/**
 * Output :
 * start
 * end
 * middle
 */

// #########################################

console.log("start");
(async () => {
  const x = 5;
  console.log("middle");
})();
console.log("end");

/**
 * Output :
 * start
 * middle
 * end
 */
