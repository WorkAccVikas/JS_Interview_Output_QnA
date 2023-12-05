(() => {
  var a = 10; // * : garbage collected
  let b = 20; // * : garbage collected
  const c = 30; // * : garbage collected
  d = 40; // ! : not garbage collected (added in global scope)
  console.log(a, b, c, d);
})();

console.log(d);
