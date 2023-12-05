// LINK : https://www.instagram.com/p/CuBq_KrghoN/

let name = "Sachin";

function hello() {
  console.log(name);
  let name = "Virat";
  /**
   * if line 5 is commented then o/p = Sachin
   * else Error : Cannot access 'name' before initialization
   */
}

hello();
