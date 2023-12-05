const timer1 = setTimeout(() => {
  console.log("timer1");
}, 0);

var promise = new Promise(function (resolve, reject) {
  console.log("promise1");
  setTimeout(function () {
    resolve("Resolved!");
  }, 0);
});

promise.then(function (value) {
  console.log(value);
});

console.log("start");

// Output : promise1, start, timer1, Resolved!
