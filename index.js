const StudentsController = require("./Controllers/StudentsController");
const express = require("express");
const app = express();

app.use(express.json());

app.use("/students", StudentsController);

app.listen(3000, function () {
  console.log("Cool Zone in port 3000!");
});
