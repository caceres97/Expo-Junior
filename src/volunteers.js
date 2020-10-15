const {Router} = require("express");
const router = Router(); 
const volunteer = require("../voluntareers.json");
console.log(volunteers);
console.log(volunteer)
router.get("/volunteers",(req,res) => {
    res.json(volunteers);
})