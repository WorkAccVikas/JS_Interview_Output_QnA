// LINK : https://www.toptal.com/javascript/interview-questions#:~:text=consider%20the%20two%20functions%20below.%20will%20they%20both%20return%20the%20same%20thing%3F%20why%20or%20why%20not%3F

function foo1() {
  return {
    bar: "hello",
  };
}

function foo2() {
  return;
  {
    bar: "hello";
  }
}

(() => {
  console.log("start");
  const r1 = foo1();
  console.log(r1); // * : { bar: 'hello' }
  const r2 = foo2();
  console.log(r2); // * : undefined
  console.log("end");
})();
