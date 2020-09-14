const { Router } = require ("express");
const router = Router(); 
const _ = require ("underscore");

const pets = require("../sample.json");
console.log(pets)

router.get("/pets", (req,res)=>{
    res.json(pets);
});

router.post("/pets", (req, res)=>{
    var {especieanimal, razaanimal, usuario, estadoanimal} = req.body;
    if (especieanimal && razaanimal && usuario && estadoanimal) {
        var id = pets.length + 1; 
        var newReport = {...req.body, id};
        pets.push (newReport);
        res.json (pets)
    } else {
        res.send ("Wrong Request");
    }
});

router.delete ("/pets:id_animal", (req,res) => {
    const {id} = req.params;
    _.each(pets, (pets,i) => {
        if (id_animal == id) {
            pets.splice(i, 1)
        }
    })
    res.send (pets);

}),
module.exports = router;
