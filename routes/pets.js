const { Router } = require("express");
const router = Router();
const _ = require("underscore");


const pets = require("../sample.json");
console.log(pets);

const ongs = require ("../ong.json");
console.log(ongs);

router.get("/ongs", (req, res) => {
    res.json(ongs);
});
router.post("/ongs", (req, res) => {
  var { nombreOng, cuentasBancarias, mision, vision, descripcion } = req.body;
  if ( nombreOng && cuentasBancarias && mision && vision && descripcion ) {
    var id = ongs.length + 1;
    var newOng = { ...req.body, id };
    ongs.push(newOng); 
    res.json(ongs);
  } else {
    res.send("Lo sentimos pero no has completado toda la información requerida");
  }
});

router.delete("/ongs/:id",(req,res) =>{
  const {id} = req.body;
  _.each (ongs ,(ongs,i)=>{
if (ongs.id == id) {
  pets.splice(i,1);
};
  });
  res.send(ongs);
});


router.get("/pets", (req, res) => {
  res.json(pets);
});

router.post("/pets", (req, res) => {
  var { especieanimal, razaanimal, usuario, estadoanimal, fecha } = req.body;
  if (especieanimal && razaanimal && usuario && estadoanimal && fecha) {
    var id = pets.length + 1;
    var newReport = { ...req.body, id };
    pets.push(newReport);
    res.json(pets);
  } else {
    res.send("Wrong Request");
  }
});

router.delete("/pets/:id",(req,res) =>{
  const {id} = req.body;
  _.each (pets ,(pet,i)=>{
if (pets.id == id) {
  pets.splice(i,1);
};
  });
  res.send(pets);
});
  (module.exports = router);
  
