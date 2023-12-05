// LINK : https://www.toptal.com/javascript/interview-questions#:~:text=consider%20the%20following%20code.

(function () {
  try {
    throw new Error();
  } catch (x) {
    var x = 1,
      y = 2;
    console.log(x);
  }
  console.log(x);
  console.log(y);
})();
