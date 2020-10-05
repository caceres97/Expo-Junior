const {Router} = require("express");
const router = Router();
router.get("/test",(req,res) => {
    var volunteersdata = {
        "name": "Geremy Castro",
        "age": "17",
        "gender": "male",
        "need": "books",
        "urgency": "not now",
        "adress": "Santa Tecla",
        "email": "geremy.castro2021@superate.org.sv"
    };
    res.json(volunteersdata);
});
module.exports = router;