// LINK : https://www.toptal.com/javascript/interview-questions#:~:text=3.-,what%20will%20the%20code%20below%20output%20to%20the%20console%20and%20why%3F,-var%20myObject%20%3D%20%7B%0A%20%20%20%20foo

var myObject = {
  foo: "bar",
  func: function () {
    var self = this;
    console.log("outer func:  this.foo = " + this.foo); // * : bar
    console.log("outer func:  self.foo = " + self.foo); // * : bar

    // DESC : It is like normal function call
    (function () {
      console.log("inner func:  this.foo = " + this.foo); // ! : undefined
      console.log("inner func:  self.foo = " + self.foo); // * : bar
    })();

    // DESC : It is like arrow function call
    (() => {
      console.log("inner func:  this.foo = " + this.foo); // * : bar
      console.log("inner func:  self.foo = " + self.foo); // * : bar
    })();
  },
};
myObject.func();
