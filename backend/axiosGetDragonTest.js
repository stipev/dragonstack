const axios = require("axios");
const url = "http://localhost:3000/dragon/new";

for (let i = 0; i < 9000; i++) {
  (async function main() {
    const response = await axios.get(url);
    try {
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  })();
}
