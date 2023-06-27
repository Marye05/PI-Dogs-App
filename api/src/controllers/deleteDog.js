const { Dog } = require("../db")

const deleteDog = async (id) => {
    if (!id) {
        throw new Error('Este Perro no existe')
    } else if (typeof id === 'number') throw new Error('No puedes eliminar este perro')
    const foundDog = await Dog.findByPk(id)

    foundDog.destroy({
        where: { id: id }
    })
    return foundDog;
}

module.exports = {
    deleteDog
};