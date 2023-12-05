const promise = new Promise(function (resolve, reject) {
  resolve("Promise has been resolved!");
});

promise.then((value) => console.log(value));
console.log("I am not the promise");

// Output : I am not the promise, Promise has been resolved!
