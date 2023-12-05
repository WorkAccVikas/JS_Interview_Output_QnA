// LINK : https://www.instagram.com/p/Ct6uo1jAVUu/

(() => {
  let x = (y = 10);
  /**
   * Above line look like this
   * y = 10;    // ! : added in global scope even after IIFE finish
   * let x = y; // * : local variable and it will GC after IIFE finish
   */
})();

console.log(typeof x); // * : undefined
console.log(typeof y); // * : number
