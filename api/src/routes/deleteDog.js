const { Router } = require('express');
const router = Router();
const { deleteDog } = require('../controllers/deleteDog')


router.delete('/delete/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const dog = await deleteDog(id);
        return res.status(200).json(`El perro ${dog.name} fue eliminado`);
    } catch (error) {
        return res.status(404).send(error.message);
    }
});

module.exports = router;