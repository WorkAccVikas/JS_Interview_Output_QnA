// TOPIC : Check array empty or not

function isEmptyArray(arr) {
  return !!arr && Array.isArray(arr) && arr.length === 0;
}

console.log(isEmptyArray([])); // * : true
console.log(isEmptyArray([1])); // * : false
console.log(isEmptyArray([1, 2, 3])); // * : false
