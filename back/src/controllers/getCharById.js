const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = (req, res) => {
  const params = req.params;

  axios
    .get(`${URL}${params.id}`)
    .then((response) => response.data)
    .then((data) => {
      const character = {
        id: data.id,
        name: data.name,
        gender: data.gender,
        species: data.species,
        image: data.image,
      };

      res.status(200).json(character);
    })
    .catch((error) => {
      res.status(500).json(error.message);
    });
};

module.exports = {
  getCharById,
};
/* const getCharById = (res, id) => {
  axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.data)
    .then((data) => {
      const character = {
        id: data.id,
        name: data.name,
        gender: data.gender,
        species: data.species,
        image: data.image,
      }
      res.writeHead(200, { "Content-type": "application/json"})
      res.end(JSON.stringify(character))
    })
    .catch((err) => {
        res.writeHead(500, { "Content-type": "text/plain" })
        res.end(err.message)
    })
}; */

