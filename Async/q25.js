console.log("start");

const p1 = new Promise((resolve, reject) => {
  console.log(1);
});

console.log("end");

// Output : start, 1, end
