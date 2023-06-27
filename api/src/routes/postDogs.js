const { Router } = require('express');
const { postDogs } = require('../controllers/postDogs')
const router = Router();

router.post('/', async (req, res) => {
    const { name, height, weight, life_span, image, temperament } = req.body;
    try { 
            const newDog = await postDogs(name, height, weight, life_span, image, temperament);
            return res.status(200).json(newDog);
    } catch (error) {
        return res.status(404).send(error.message);
    }
});

module.exports = router;