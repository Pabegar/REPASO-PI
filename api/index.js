const server = require("./src/app.js");
const {conn} = require("./src/db.js");
const {episodios} = require("../api/src/Controllers/episodes");

// Para sincronizar nuestra base de datos
conn.sync({force: true}).then(async () => {
  await episodios();
  server.listen(3001, () => {
    console.log("vamos con todo");
  });
});
