const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character/";

const getCharDetail = async (req, res) => {
  try {
  const {id} = req.params;
  const {data} = await axios.get(`${URL}${id}`)

    const character = {
      id: data.id,
      name: data.name,
      status: data.status,
      gender: data.gender,
      species: data.species,
      image: data.image,
      origin: data.origin.name,
    };
    res.status(200).json(character);
    
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = getCharDetail;

