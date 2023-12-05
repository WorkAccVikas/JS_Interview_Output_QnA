for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}

// Output : 5,5,5,5,5 (each after 1sec)

// ###############################################
for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}

// Output : 0,1,2,3,4 (each after 1sec)

// ###############################################

for (var i = 0; i < 5; i++) {
  setTimeout(
    ((l) => {
      return () => {
        console.log(l);
      };
    })(i),
    i * 1000
  );
}

// Output : 0,1,2,3,4 (each after 1sec)

// ###############################################
for (var i = 0; i < 5; i++) {
  ((m) => {
    setTimeout(() => {
      console.log(m);
    }, i * 1000);
  })(i);
}

// Output : 0,1,2,3,4 (each after 1sec)
