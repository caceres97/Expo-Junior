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
router.get("/test",(req,res) =>{
    var dataOng = {
        "nombre_Ong": "Huellitas",
        "Cuentabancaria": "",
        "misiom": "",
        "vision": "",
        "Descripcion": ""
    };
    res.json(dataOng);
});

module.exports = router;
