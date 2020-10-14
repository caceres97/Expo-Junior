const { Router } = require('express');
const router = Router();

const Foods = require('../sample.json');

router.get('/', (req, res) => {
    res.json(Foods);
});

router.post('/', (req, res) => {
    const { food, price, username }= req.body;
    if (food & price & username){
        res.json('saved');
    } else {
        res.send('Wrong Request');
    }
});


module.exports = router;