const { Dog, Temperament } = require('../db')


const getDbDogs = async () => {
    const dbDogs = await Dog.findAll({
        include: [{
            model: Temperament,
            attributes: ['name'],
            through: {
                attributes: [],
            },
            raw: true,
        }]
    })
    const reDogs = dbDogs?.map(dog => {
        return {
            id: dog.id,
            name: dog.name,
            weight: dog.weight,
            height: dog.height,
            life_span: dog.life_span,
            image: dog.image,
            created: dog.created,
            temperament: dog.temperaments?.map(temperament => temperament.name)
        }
    })
    return reDogs
}

module.exports = {
    getDbDogs
}