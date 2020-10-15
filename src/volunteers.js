
const { Router } = require("express");

const router = Router();

//const _ = require("underscore");

const volunteer = require("../volunteers.json");

console.log(volunteer);

router.get("/volunteers", (req, res) => {

  res.json(volunteers);

});



router.post("/volunteers", (req, res) => {

  //var { especieanimal, razaanimal, usuario, estadoanimal, fecha } = req.body;

  //if (especieanimal && razaanimal && usuario && estadoanimal && fecha) {

   // var id = pets.length + 1;

    //var newReport = { ...req.body, id };

   // pets.push(newReport);

    //res.json(pets);

  //} else {

    //res.send("Wrong Request");

  //}

//});



router.delete("/pets/:id",(req,res) =>{

  const {id} = req.body;

  _.each (pets ,(pet,i)=>{

if (pets.id == id) {

  pets.splice(i,1);

};

  });

  res.send(pets);

});

  (module.exports = router)