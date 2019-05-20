const pool = require("../../databasePool.js");

class TraitTable {
  static getTraitId({ traitType, traitValue }) {
    return new Promise((resolve, reject) => {
      pool.query(
        'SELECT id FROM trait WHERE "traitType" = $1 AND "traitValue" = $2 ',
        [traitType, traitValue],
        (error, response) => {
          if (error) reject(error);
          resolve({ traitId: response.rows[0].id });
        }
      );
    });
  }
}

module.exports = TraitTable;
/*TraitTable.getTraitId({ traitType: "build", traitValue: "stocky" })
  .then(({ traitId }) => {
    console.log(traitId);
  })
  .catch(error => {
    console.error(error);
  });
*/
