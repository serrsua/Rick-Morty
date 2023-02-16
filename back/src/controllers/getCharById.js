const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {

  try {
    const {id} = req.params;
    const {data} = await axios.get(`${URL}${id}`)

    const character = {
      id: data.id,
      name: data.name,
      gender: data.gender,
      species: data.species,
      image: data.image,
    };
    res.status(200).json(character);

  } catch (error) {
    res.status(500).json(error.message);  
  }
};

module.exports = getCharById;



