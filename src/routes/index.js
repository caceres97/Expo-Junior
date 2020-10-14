const { Router } = require('express');
const router = Router();

router.get('/Alimentos', (req, res) => {
    const data = {
        "name": "Christian",
        "website": "Boost your Business.com"
    };
    res.json(data);
});

module.exports = router;