let p1 = new Promise((resolve, reject) => {
  console.log(1);
  resolve(2);
});

setTimeout(() => {
  console.log(4);
}, 0);

p1.then((r1) => {
  console.log(r1);
  return r1 * 2;
});

p1.then((r1) => {
  console.log(r1);
});

console.log(5);

// Output : 1, 5, 2, 2, 4
