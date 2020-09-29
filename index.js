const volunteeringpsController = require("./volunteeringpsControllers");
const express = require("express");
const app = express();

app.use(express.json());

app.use("/volunteeringps", volunteeringpsController);

app.listen(3000, function () {
  console.log("Server on port 3000!");
});
