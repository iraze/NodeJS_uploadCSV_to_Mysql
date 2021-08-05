const express = require("express");
const app = express();
const db = require("./models");
const initRoutes = require("./routes/routes");

global.__basedir = __dirname + "/..";

app.use(express.urlencoded({ extended: true }));
initRoutes(app);

//db.sequelize.sync();
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Apaga e recria o banco de saldos.");
// });

let port = 3003;
app.listen(port, () => {
  console.log(`Rodando na porta:${port}`);
});