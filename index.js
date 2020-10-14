const   Controller_para_empresa_comidas = require("./Controllers/Controller_para_empresa_comidas");
const Controller_para_empresa_salones = require("./Controllers/Controller_para_empresa_salones");
const Controller_para_empresa_veterinarias = require("./Controllers/Controller_para_empresa_veterinarias");
const Controller_para_empresa_clinicas = require("./Controllers/Controller_para_empresa_clinicas");
// const express = require("express");
const app = express();

app.use(express.json());

app.use("/empresas", Controller_para_empresa_comidas);
app.use("/empresas", Controller_para_empresa_salones);
app.use("/empresas", Controller_para_empresa_veterinarias);
app.use("/empresas", Controller_para_empresa_clinicas);

app.listen(3000, function () {
  console.log("Cool Zone in port 3000!");
});