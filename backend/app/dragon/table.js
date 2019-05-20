const pool = require("../../databasePool.js");
const DragonTraitTable = require("../dragonTrait/table.js");

class DragonTable {
  static storeDragon(dragon) {
    //console.log("generation id: ", generationId);
    const { nickname, birthdate, generationId } = dragon;

    return new Promise((resolve, reject) => {
      console.log("generationId ", generationId);
      pool.query(
        'INSERT INTO dragon(nickname,birthdate,"generationId") VALUES($1,$2,$3) RETURNING id',
        [nickname, birthdate, generationId],
        (error, response) => {
          if (error) reject(error);
          const dragonId = response.rows[0].id;
          Promise.all(
            dragon.traits.map(({ traitType, traitValue }) => {
              return DragonTraitTable.storeDragonTrait({
                dragonId,
                traitType,
                traitValue
              });
            })
          )
            .then(() => {
              resolve(dragonId);
            })
            .catch(error => {
              return reject(error);
            });
        }
      );
    });
  }
}

module.exports = DragonTable;
