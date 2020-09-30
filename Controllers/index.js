const   Controller_para_empresa_comidas = require("./Controllers.js/Controller_para_empresa_comidas");
const Controller_para_empresa_salones = require("./Controllers.js/Controller_para_empresa_salones");
const express = require("express");
const app = express();

app.use(express.json());

app.use("/empresas", Controller_para_empresa_comidas);
app.use("/empresas", Controller_para_empresa_salones);

app.listen(3000, function () {
  console.log("Cool Zone in port 3000!");
});