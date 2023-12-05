// LINK : https://www.instagram.com/p/Cx0OaKCyyG3/

function sum() {
  console.log("sum");
  return 2 + 2;
}

function square() {
  console.log("square");
  return 4 * 4;
}

let ob = (sum(), square());

console.log(ob);

/**
 * Output :
 * sum
 * square
 * 16
 */
