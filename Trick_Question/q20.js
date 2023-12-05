// LINK : https://www.instagram.com/p/Ct6fKu5AMSC/

function getInfo(member, city_name) {
  member.name = "Vikas";
  city_name = "Mumbai";
}

const person = { name: "Ram" }; // ! : changed (object pass by reference)
const city = "Delhi"; // * : not changed (primitive pass by value)

getInfo(person, city);

console.log(person, city); // * : { name: 'Vikas' }, 'Delhi'
