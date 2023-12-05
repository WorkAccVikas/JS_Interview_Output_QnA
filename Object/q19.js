// LINK : https://www.instagram.com/p/Cx5YDnvS9wK/

const ob1 = {
  99: "first",
};

// ob1.100 = "second"; // ! : SyntaxError: Unexpected number

// SOLUTION (1) :
const x = 101;
ob1[x] = "second";

// SOLUTION (2) :
ob1[102] = "third";

console.log(ob1); // * : { 99: 'first', 101: 'second', 102: 'third' }
