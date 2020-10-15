const {Router} = require ("express");
const router = Router ();
router.get("/test",(req,res) =>{

    var datavolunteer = {

        "user":"Geremy", 
        "age": "17",
        "gender": "Male",
        "city": "Santa Tecla", 
        "email": "geremy.castro2021@poma.superate.org.sv"
    };

    res.json(datavolunteer);

});
app.use(require("./index"));

app.use (require("./volunteers"));

app.listen(3000, () => {

    console.log("Server on port 3000");

});



module.exports = router; 