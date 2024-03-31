// LINK : https://www.instagram.com/p/Ct7IWaMAk1c/

function addItem(item, list) {
  return list.push(item);
}
const arr1 = [1];

console.log(arr1); // * : [1]
console.log(addItem(25, arr1)); // * : 2 (push will return arr length)
console.log(arr1); // * : [1, 2]
