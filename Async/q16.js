// Q : Can we use await only with promises ?
// A : No, we can use await with promise as well as any object that implements a then function.
// Link : https://eishta.medium.com/javascript-tricky-questions-promises-12c1ebeff20c
const person = {
  then: function (cb) {
    setTimeout(() => {
      cb(22);
    }, 5000);
  },
};

(async () => {
  const r1 = await person;
  console.log(r1);
})();

// Output : 22 printed after 5 seconds
