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
  static getDragon({ dragonId }) {
    return new Promise((resolve, reject) => {
      pool.query(
        'SELECT birthdate,nickname, "generationId" FROM dragon WHERE dragon.id= $1',
        [dragonId],
        (error, response) => {
          if (error) return reject(error);
          if (response.rows.length === 0)
            return reject(new Error("no Dragon!"));
          resolve(response.rows[0]);
        }
      );
    });
  }
}

// DragonTable.getDragon({ dragonId: 1 })
//   .then(dragon => console.log(dragon))
//   .catch(error => console.error(error));

module.exports = DragonTable;
