const axios = require("axios");

const getCharDetail = (res, id) => {
  axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.data)
    .then((data) => {
      const character = {
        id: data.id,
        name: data.name,
        gender: data.gender,
        species: data.species,
        image: data.image,
        status: data.status,
        origin: data.origin.name
      }
      res.writeHead(200, { "Content-type": "application/json"})
      res.end(JSON.stringify(character))
    })
    .catch((err) => {
        res.writeHead(500, { "Content-type": "text/plain" })
        res.end(err.message)
    })
    
};

module.exports = {
  getCharDetail,
};
