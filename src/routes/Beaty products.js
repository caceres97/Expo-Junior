const { Router } = require('express');
const router = Router();

const Foods = require('../sample.json');

router.get('/', (req, res) => {
    res.json(Beautyproduct);
});

router.post('/', (req, res) => {
    const { product, price, username }= req.body;
    if (product & price & username){
        res.send('saved');
    } else {
        res.send('Wrong Request');
    }
});


module.exports = router;