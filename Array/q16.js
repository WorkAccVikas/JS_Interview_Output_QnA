// LINK : https://www.instagram.com/p/CyvgHECPmmo/

// QUESTION : HOW TO BREAK forEach

const arr = [1, 2, 3, 4, 5];

arr.forEach((element, index) => {
  if (element === 2) {
    // throw new Error("Error aaya");
    // arr.length = 0;
    arr.splice(index + 1, arr.length);
  }

  console.log(element);
});
