//  TOPIC : Return true if empty string and null, undefined (work for both string, number)

const x = ["Ram", 0]; // * : false
// const x = ["Ram", 1]; // * : false
// const x = ["Ram1", 101]; // * : false

// const x = ["Ram", "Seeta"]; // * : false
// const x = ["Ram", "0"]; // * : false
// const x = ["Ram", "1"]; // * : false

// const x = ["Ram", ""];  // * : true
// const x = ["Ram", "     "];  // * : true
// const x = ["Ram", null]; // * : true
// const x = ["Ram", undefined]; // * : true

// POINT : 1st way using method
function isEmptyOrWhitespace(value) {
  /**
   * Checks if a value is null, undefined, an empty string, or a string consisting only of whitespace characters.
   *
   * @param {any} value The value to check.
   * @returns {boolean} True if the value is empty or whitespace, False otherwise.
   */

  return (
    value === null ||
    value === undefined ||
    (typeof value === "string" && value.trim() === "")
  );
}

function hasEmptyOrWhitespaceElements(array) {
  /**
   * Checks if any element in an array is empty or consists only of whitespace characters.
   *
   * @param {any[]} array The array to check.
   * @returns {boolean} True if any element is empty or whitespace, False otherwise.
   */
  return array.some(isEmptyOrWhitespace);
}

// const result = hasEmptyOrWhitespaceElements(x);

// POINT : 2nd way 
// const result = x.some(
//   (i) =>
//     i === null || i === undefined || (typeof i === "string" && i.trim() === "")
// );

// POINT : 3rd way 
const result = x.some(
  (i) =>
    typeof i === 'object' || typeof i  === "undefined" || (typeof i === "string" && i.trim() === "")
);

console.log(result);
