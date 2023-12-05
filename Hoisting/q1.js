// LINK : https://www.instagram.com/p/CyvnnHQPHOU/

let city = "Mumbai";

function hello() {
  console.log(city); // ! : Cannot access 'city' before initialization
  let city = "Goa";
}

hello();
