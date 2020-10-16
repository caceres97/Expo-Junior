const { Router } = require('express');
const router = Router();

const Foods = require('../sample.json');

router.get('/', (req, res) => {
    res.json(Foods);
});

router.post('/', (req, res) => {
    const { food, price, username }= req.body;
    
    if (food & price & username) {
        const id = Foods.lenght + 1;
        const newFood = {...req.body, id};
        Foods.push(newMovie);
        res.send('saved');
        
    } else {

        res.status(500).json({error: 'There was an error'});

    }
});

router.delete('/', (req, res) => {
    console.log(req.params);
    res.send('deleted');
});

router.put('/', (req, res) => {
   const {id} = req.params;
   const { food , price , username }= req.body;
   if (food && price && username) {
       _.each(Foods, (food, i) => {
           if (food.id == id) {
               food.food = food;
               food.price = price;
               food.username = username;
           }
       });
       res.json(Foods);
   } else {
       res.status(500).json({error: 'There was an error'})
   }
});     


module.exports = router;