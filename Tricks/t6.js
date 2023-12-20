// TOPIC : Check whether object empty or not

function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}

console.log(isEmptyObject({})); // * : true
console.log(isEmptyObject({ id: 1 })); // * : false
