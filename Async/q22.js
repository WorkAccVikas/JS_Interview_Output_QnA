function processing() {
  return new Promise((resolve, reject) => {
    resolve(11);
    reject("Failed");
    resolve(22);
    console.log("After resolve/reject");
  });
}

(() => {
  processing()
    .then((val) => {
      console.log(val + 1);
    })
    .catch((e) => console.log(e));
})();

// Output : 12
