// LINK : https://www.toptal.com/javascript/interview-questions#:~:text=assuming%20d%20is%20an%20%E2%80%9Cempty%E2%80%9D%20object%20in%20scope%2C%20say%3A

var d = {};

["zebra", "horse"].forEach(function (k) {
  d[k] = undefined;
});

console.log(d); // * :{ zebra: undefined, horse: undefined }
