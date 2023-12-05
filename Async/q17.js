function job(state) {
  return new Promise((resolve, reject) => {
    state ? resolve("success") : reject("error");
  });
}

job(true)
  .then(function (data) {
    console.log(data);
    return job(true);
  })
  .then(function (data) {
    if (data !== "victory") {
      throw "Defeat";
    }
    return job(true);
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
    return job(false);
  })
  .then(function (data) {
    console.log(data);
    return job(true);
  })
  .catch(function (error) {
    console.log(error);
    return "Error Caught";
  })
  .then(function (data) {
    console.log(data);
    throw new Error("Test");
  })
  .then(function (data) {
    console.log("Success : ", data.message);
  })
  .catch(function (error) {
    console.log("Error : ", error.message);
  });
