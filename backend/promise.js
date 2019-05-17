console.log("START!!");
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello");
  });
}).then(mssg1 => {
  console.log("mssg1", mssg1);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("WORLD");
    });
  }).then(mssg2 => {
    console.log("mssg2", mssg1 + " " + mssg2);
  });
});

console.log("START");
new Promise((resolve, reject) => {
  setTimeout(() => resolve("Hello"));
}).then(mssg => {
  console.log("mssg1 ", mssg);
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(mssg + " world"));
  }).then(mssg => {
    console.log("mssg2 ", mssg);
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(mssg + " !!"));
    }).then(mssg => {
      console.log("mssg3 ", mssg);
    });
  });
});

//PRIJASNJI KOD
// const examplePromise = new Promise((resolve, reject) => {
//   const success = true;
//   if (success) {
//     resolve({ message: "yes" });
//   } else {
//     reject({ message: "no" });
//   }
// });

// console.log("log", examplePromise);

// examplePromise
//   .then(({ message }) => {
//     console.log("message ", message);
//   })
//   .catch(error => {
//     console.error("error", error);
//   });
