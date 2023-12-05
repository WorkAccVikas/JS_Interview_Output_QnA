// LINK : https://www.instagram.com/p/Cy17BDEh39c/

// QUESTION : How to make passing argument mandatory ?

function check() {
  throw new Error("Params required");
}

function add(a = check(), b = check()) {
  console.log("In add function = ", a, b);
}

// add(10, 20);
add();
