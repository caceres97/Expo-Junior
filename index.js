const volunteeringpsControllers = require("./Controllers/volunteeringpsControllers");
const express = require("express");
const app = express();

app.use(express.json());

app.use("/volunteeringps:code", volunteeringpsControllers);

app.listen(3000, function () {
  console.log("Server on port 3000!");
});