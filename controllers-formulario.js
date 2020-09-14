const express = require ('express');
const app = express ();
const morgan = require("morgan");

//midle ware morgan 
app.use(morgan("dev"));

app.use(express.json());

//startin the server
app.listen(3000, () => {
    console.log("Server on port 3000");
});
//settings
app.set("json spaces", 2);

//routes
app.use(require("./routes/index"));
app.use (require("./routes/pets"));
