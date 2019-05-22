const pool = require("./databasePool.js");

const counter = 4;

pool.query(
  ` SELECT "dragonId", birthdate, nickname, "generationId","traitType","traitValue" from dragon 
  INNER JOIN dragonTrait ON dragon.id = dragonTrait."dragonId"
    INNER JOIN trait ON trait.id = dragonTrait."traitId";`,
  (error, response) => {
    const numberOfDragons = response.rows.length / counter;

    console.log("there are: ", numberOfDragons);
    for (let i = 0; i < numberOfDragons; i++) {
      for (let j = 0; j < counter; j++) {
        console.log(
          `${i + 1}. dragon is:`,
          response.rows[counter * i].dragonId
        );
      }
    }
  }
);
