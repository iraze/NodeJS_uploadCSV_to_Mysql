const express = require("express");
const router = express.Router();
const csvController = require("../controllers/saldos/csv.controller");
const upload = require("../middlewares/upload");

let routes = (app) => {
  router.post("/upload", upload.single("file"), csvController.upload);
  router.get("/saldos", csvController.getSaldos);

  app.use("/api", router);
};

module.exports = routes;