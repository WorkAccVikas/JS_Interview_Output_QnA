function job(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("delay = ", delay);
      resolve(`done = ${delay}`);
    }, delay);
  });
}

(() => {
  let promise = Promise.all([job(1000), job(2000), job(500), job(1500)]);

  promise.then((data) => {
    console.log("All done");
    data.forEach((item) => console.log(item));
  });
})();

/** Output : 
    Resolving 500
    Resolving 1000
    Resolving 1500
    Resolving 2000
    All done
    done 1000
    done 2000
    done 500
    done 1500
 */
