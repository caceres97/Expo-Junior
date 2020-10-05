const {Router} = require("express");
const router = Router(); 
const volunteer = require("../Sample voluntarios.json");
console.log(volunteer)
router.get("/volunteers",(req,res) => {
    res.json(volunteers);
})