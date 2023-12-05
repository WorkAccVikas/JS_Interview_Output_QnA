// LINK : https://www.toptal.com/javascript/interview-questions#:~:text=24.-,testing%20your%20this,-knowledge%20in%20JavaScript

var length = 10;
function fn() {
  console.log(this.length);
}

var obj = {
  length: 5,
  method: function (fn) {
    console.log(arguments);
    fn(); // * : 10
    arguments[0](); // * : 2 (total arguments in method)
  },
};

obj.method(fn, 1);
