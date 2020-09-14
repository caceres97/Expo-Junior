const {Router} = require ("express");
const router = Router ();

router.get("/test",(req,res) =>{
    var datapet = {
        "tipo": "perro",
        "Usuario":"Michelle",
        "Departamento":"La libertad",
        "Estado":"fracturado"
    };
    res.json(datapet);
});

module.exports = router;
