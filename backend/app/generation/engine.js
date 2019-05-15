const Generation = require("./index.js");
const GenerationTable = require("./table.js");

class GenerationEngine {
  constructor() {
    this.generation = null;
    this.timer = null;
  }
  start() {
    this.buildNewGeneration();
  }
  stop() {
    clearTimeout(this.timer);
  }
  buildNewGeneration() {
    this.generation = new Generation();
    GenerationTable.storeGeneration(this.generation);
    console.log("new generation: ", this.generation);
    //console.log("new dragon: ", this.generation.newDragon());
    this.timer = setTimeout(
      () => this.buildNewGeneration(),
      this.generation.expiration.getTime() - Date.now()
    );
  }
}

module.exports = GenerationEngine;
// Hints:
// Keep track of the current generation using `this.generation` in the class.
// A `newGeneration` method could come in handy.
//This would make a generation object, setting it to `this.generation`.
// Consider using `setTimeout` to schedule calls to `newGeneration` in a timely manner.
// Recursion may come in handy (be careful to avoid infinite loops).
