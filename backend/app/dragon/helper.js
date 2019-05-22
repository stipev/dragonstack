const DragonTable = require("./table.js");
const pool = require("../../databasePool.js");
const Dragon = require("./index.js");

const getDragonWithTraits = ({ dragonId }) => {
  return Promise.all([
    DragonTable.getDragon({ dragonId }),
    new Promise((resolve, reject) => {
      pool.query(
        `SELECT "traitType", "traitValue" from trait 
      INNER JOIN dragonTrait ON dragonTrait."traitId" = trait.id WHERE dragonTrait."dragonId" = $1`,
        [dragonId],
        (error, response) => {
          if (error) return reject(error);

          resolve(response.rows);
        }
      );
    })
  ])
    .then(([dragon, dragonTraits]) => {
      //   dragon.dragonId = dragonId;
      //   dragon.traits = dragonTraits;
      //   return dragon;
      return new Dragon({
        ...dragon,
        dragonTraits,
        dragonId
        // nickname: dragon.nickname,
        // birthdate: dragon.birthdate,
        // dragonId: dragonId,
        // generationId: dragon.generationId,
        // traits: dragonTraits
      });
    })
    .catch(error => {
      console.error(error);
    });
};

getDragonWithTraits({ dragonId: 1 })
  .then(dragon => console.log("dragon: ", dragon))
  .catch(error => console.log("error", error));

module.exports = { getDragonWithTraits };
