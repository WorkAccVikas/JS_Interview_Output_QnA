// LINK : https://www.instagram.com/p/Cx_0EqVBhhE/

let x = {
  flag: 1,
  get value() {
    return this.flag++;
  },
};

if (x.value == 1 && x.value == 2 && x.value == 3) {
  console.log("All conditions are true"); // * : All conditions are true
}
