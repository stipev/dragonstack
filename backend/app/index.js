const GenerationEngine = require("./generation/engine.js");
const express = require("express");
const dragonRouter = require("../api/dragon.js");
const generationRouter = require("../api/generation.js");

const app = express();
const engine = new GenerationEngine();

app.locals.engine = engine;
//console.log("lokalne varijable:", app.locals.engine);
app.use("/dragon", dragonRouter);
app.use("/generation", generationRouter);

engine.start();

module.exports = app;
// setTimeout(() => {
//   engine.stop();
// }, 20000);

//KOD OD PRIJE 2
// const Generation = require("./generation.js");

// const generation = new Generation();

// console.log("generation: ", generation);

// const gooby = generation.newDragon();
// console.log("gooby: ", gooby);
// setTimeout(() => {
//   const generation2 = new Generation();
//   console.log("GENERATION 2 ", generation2);
//   const booby = generation2.newDragon();
//   console.log("booby: ", booby);
// }, 15000);

//KOD OD PRIJE 1
// const Dragon = require("./dragon.js");

// const fooey = new Dragon({
//   birthdate: new Date(),
//   nickname: "fooey",
//   traits: [{ traitType: "backgroundColor", traitValue: "yellow" }]
// });

// const mimar = new Dragon();

// setTimeout(() => {
//   const gooby = new Dragon();
//   console.log("gooby", gooby);
//   const baloo = new Dragon({ nickname: "baloo", birthdate: new Date() });
//   console.log("baloo", baloo);
// }, 3000);

// console.log("fooey ", fooey);
// console.log("mimar", mimar);