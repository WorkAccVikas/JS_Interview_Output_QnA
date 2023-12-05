// LINK : https://www.instagram.com/p/Ct17FMaAU6-/

function checkAge(data) {
  if (data === { age: 18 }) {
    console.log(1);
  } else if (data == { age: 18 }) {
    console.log(2);
  } else {
    console.log(3);
  }
}

checkAge({ age: 18 }); // * : 3
