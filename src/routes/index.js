const { Router } = require('express');
const router = Router();

config ={

    Host: "192.168.1.179"

    Port: "3306"

    User: "Pomaadmin"

    Password: "Sup3r@t3"

    database: "boost_your_business"
};

router.get('/Alimentos', (req, res) => {
    const data = {
        "name": "Christian",
        "website": "Boost your Business.com"
    };
    res.json(data);
});

module.exports = router;