const { Router } = require('express');
const router = Router();

const Foods = require('../sample.json');

router.get('/', (req, res) => {
    res.json(Foods);
});

router.post('/', (req, res) => {
    const { medicine, price, username }= req.body;
    if (medicine & price & username){
        res.send('saved');
    } else {
        res.send('Wrong Request');
    }
});


module.exports = router;