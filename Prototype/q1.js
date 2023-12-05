// LINK : https://www.instagram.com/p/Ct4aziFA2j1/

String.prototype.getSalaryByName = function (salary) {
  return `${this} your salary = ${salary}`;
};

const s1 = "Amit";
console.log(s1.getSalaryByName(500)); // * : Amit your salary = 500

console.log("Ram".getSalaryByName(8990)); // * : Ram your salary = 8900
