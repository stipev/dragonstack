const { Pool } = require("pg");
const databaseConfiguration = require("./secrets/databaseConfiguration");

const pool = new Pool(databaseConfiguration);

module.exports = pool;

//DEBUGGING CODE
// pool.query("SELECT * FROM pg_user", (error, response) => {
//   if (error) return console.log("error: ", error);
//   console.log("response.rows: ", response.rows);
// });
