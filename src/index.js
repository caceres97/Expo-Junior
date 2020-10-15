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


module.exports = router;
