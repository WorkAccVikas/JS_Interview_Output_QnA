// DESC : Link : https://levelup.gitconnected.com/vimp-javascript-promise-implementation-challenges-5a4f120d8606
const promiseArr = [
  new Promise((resolve) => setTimeout(resolve, 100, "apple")),
  new Promise((resolve) => setTimeout(resolve, 100, "banana")),
  new Promise((resolve) => setTimeout(resolve, 3000, "orange")),
];

Promise.all(promiseArr)
  .then((fruits) => console.log(fruits))
  .catch((err) => console.log("Error:", err));

// Output : After 3 seconds, logs out the following
// ["apple", "banana", "orange"]
