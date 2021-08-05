const db = require("../../models");
const Saldo = db.saldos;
const fs = require("fs");
const csv = require("fast-csv");

const upload = async (req, res) => {
  try {
    if (req.file == undefined) {
      return res.status(400).send("Por favor faça upload de arquivo CSV!");
   }

    let saldos = [];
    let path = __basedir + "/srcs/static/assets/uploads/" + req.file.filename;    
    fs.createReadStream(path) 

      .pipe(csv.parse({ headers: true, delimiter: ";" }))

      .on("error", (error) => {
        throw error.message;
      })

      .on("data", (row) => {           
       const saldoindex = saldos.findIndex(key => key.conta.concat(key.nome) === row.conta.concat(row.nome))
       if (saldoindex < 0) {
         saldos.push(row);
       }
       
      })
      .on("end", () => {
        Saldo.bulkCreate(saldos)
          .then(() => {
            res.status(200).send({
              message:
                "Arquivo carregado com sucesso : " + req.file.originalname,
            });
          })
          .catch((error) => {
            res.status(500).send({
              message: "Falha na importação para a base de dados!",
              error: error.message,
            });
          });
      });
      
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Arquivo não pode ser carregado: " + req.file.originalname,
    });
  }
};


const getSaldos = (req, res) => {
    Saldo.findAll()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Aconteceu algum erro enquanto os saldos estavam sendo recuperados .",
        });
      });
  };
  
  module.exports = {
    upload,
    getSaldos
  };