const pool = require("../databasePool.js");
const TRAITS = require("../data/traits.json");

TRAITS.forEach(TRAIT => {
  traitType = TRAIT.type;
  traitValues = TRAIT.values;
  traitValues.forEach(traitValue => {
    pool.query(
      'INSERT INTO trait("traitType","traitValue") VALUES($1,$2) RETURNING id',
      [traitType, traitValue],
      (error, response) => {
        if (error) return console.error(error);
        const traitId = response.rows[0].id;
        console.log("trait ID: ", traitId);
      }
    );
  });
});
