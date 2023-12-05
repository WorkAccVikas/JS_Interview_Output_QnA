let p1 = new Promise((res) => res(2));

p1.then((v) => {
  console.log(v);
  return v * 2;
})
  .then((v) => {
    console.log(v);
    return v * 2;
  })
  .finally((v) => {
    console.log(v);
    return v * 2;
  })
  .then((v) => {
    console.log(v);
  });

// Output : 2, 4, undefined, 8

// Explanation : https://chat.openai.com/share/1b638df2-be08-4c96-a62c-d1d8a2cb5d2b
