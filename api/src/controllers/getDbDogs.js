const { Dog, Temperament } = require('../db')


const getDbDogs = async () => {
    const dbDogs = await Dog.findAll({
        include: [{
            model: Temperament,
            attributes: ['name'],
            through: {
                attributes: [],
            },
           
        }]
    })
    return dbDogs
}

module.exports = {
    getDbDogs
}