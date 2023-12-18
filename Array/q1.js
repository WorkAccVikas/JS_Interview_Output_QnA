// DESC : https://www.youtube.com/watch?v=k73AIk3mz2g&list=PLu71SKxNbfoCy_MsA98SBfvUKF5eQit6L&index=2&ab_channel=ChaiaurCode

Array.prototype.city = "Mumbai";

const arr1 = [11, 12, 13, 14, 15];

// PROBLEM (1) : Here, city also printed
for (let i in arr1) {
  console.log(`${i}: ${arr1[i]}`);
}

/** OUTPUT :
 * 0: 11
 * 1: 12
 * 2: 13
 * 3: 14
 * 4: 15
 * city: Mumbai
 */

// SOLUTION (1) :
for (let i in arr1) {
  if (arr1.hasOwnProperty(i)) {
    console.log(`${i}: ${arr1[i]}`);
  }
}

/** OUTPUT :
 * 0: 11
 * 1: 12
 * 2: 13
 * 3: 14
 * 4: 15
 */
