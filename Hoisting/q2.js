// LINK : https://www.instagram.com/p/Ct6C1siAcfB/

(() => {
  let x, y;
  try {
    throw new Error("Error aaya");
  } catch (x) {
    x = 1;
    y = 2;
    console.log(x); // * : 1
    // DESC : Here, x is localscope hence print 1, and y is added in global scope
  }

  console.log(x); // * : undefined
  console.log(y); // * : 2
})();
