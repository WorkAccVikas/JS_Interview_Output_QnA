// LINK : https://www.instagram.com/p/Ct6TYm6A9Mr/

function getMessage() {
  throw "Error aala ahe";
}

function hello() {
  try {
    let data = getMessage();
    console.log({ data });
  } catch (e) {
    console.log("Error : ", e); // * : Error :  Error aala ahe
  }
}

hello();
