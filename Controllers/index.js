const   Controller_para_empresa_comidas = require("./Controllers.js/Controller_para_empresa_comidas");
const Controller_para_empresa_salones = require("./Controllers.js/Controller_para_empresa_salones");
<<<<<<< HEAD
const Controller_para_empresa_salones = require("./Controllers.js/Controller_para_empresa_veterinarias");
const Controller_para_empresa_salones = require("./Controllers.js/Controller_para_empresa_clinicas");
=======
>>>>>>> 004adc1371a2435752c7e4e36f73d6f400cde159
const express = require("express");
const app = express();

app.use(express.json());

app.use("/empresas", Controller_para_empresa_comidas);
app.use("/empresas", Controller_para_empresa_salones);
<<<<<<< HEAD
app.use("/empresas", Controller_para_empresa_veterinarias);
app.use("/empresas", Controller_para_empresa_clinicas);
=======
>>>>>>> 004adc1371a2435752c7e4e36f73d6f400cde159

app.listen(3000, function () {
  console.log("Cool Zone in port 3000!");
});