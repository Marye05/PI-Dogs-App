const { Dog, Temperament } = require('../db.js');
const { Op } = require('sequelize');


const postDogs = async (name, height, weight, life_span, image, temperament) => {
   
    const newDog = await Dog.create({ name, height, weight, life_span, image  });
    
    // Añadimos el temperamento mediante método add de SQL, gracias a la relación entre Dog y Temperament
    newDog.addTemperament(temperament);
    return newDog;
}

module.exports = {
    postDogs
}