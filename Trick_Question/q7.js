// LINK : https://www.instagram.com/p/Ct007PDAKlv/

function showModal() {
  console.log(showModal.timeout);
}

showModal(); // * : undefined
showModal.timeout = 100;
showModal.timeout = 200;

showModal(); // * : 200
