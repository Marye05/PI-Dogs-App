const axios = require('axios');
const { API_KEY } = process.env;

const getApiDogs = async () => {
    const getData = await axios(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
    const infoData = await getData.data.map(dog => {
        return {
            id: dog.id,
            name: dog.name,
            life_span: dog.life_span,
            reference_image_id: dog.reference_image_id,
            height: dog["height"]["metric"], //Acceder a las propiedades mediante bracket notation
            weight: dog["weight"]["metric"], // ya que siempre son las mismas
            temperament: dog.temperament
           
        }
    })
    return infoData;
}

module.exports = {
    getApiDogs
}