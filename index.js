const VolunteersControllers = require("./Controllers/VolunteersControllers");
const express = require("express");
const app = express();

app.use(express.json());

app.use("/Volunteers", VolunteersControllers);

app.listen(3000, function () {
  console.log("Cool Zone in port 3000!");
});