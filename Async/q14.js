const secondPromise = new Promise((resolve, reject) => {
  resolve("Second!");
});

const firstPromise = new Promise((resolve, reject) => {
  resolve(secondPromise);
});

firstPromise
  .then((promise) => {
    console.log({ promise });
    return promise;
  })
  .then((value) => console.log(value));

// Output : { promise: 'Second!' }, Second!
