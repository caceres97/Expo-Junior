const express = require("express");
const app = express();
const morgan = require("morgan");
app.use (morgan("dev"));
app.use (express.json());
app.use (require("./routes/index"));
app.use (require("./routes/volunteers"));

app.listen (3000,() => {
    console.log("server comport 3000")
});