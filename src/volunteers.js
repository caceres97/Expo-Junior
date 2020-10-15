
const { Router } = require("express");
const router = Router();

//const _ = require("underscore");

const volunteers = require("../volunteers.json");

console.log(volunteers);

router.get("/volunteers", (req, res) => {

  res.json(volunteers);

});



router.post("/volunteers", (req, res) => {

  var { user, age,gender,city, email} = req.body;

  if (user && age && gender && city && email) {

    var id = volunteers.length + 1;

    var addvolunteer = { ...req.body, id };

   volunteers.push(addvolunteer);

    res.json(volunteers);

  } else {

    res.send("no ha rellenado la informacion solicitada");

  }

});

  (module.exports = router);