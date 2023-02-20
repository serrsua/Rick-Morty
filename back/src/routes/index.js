const { Router } = require("express");
const getCharById = require("../controllers/getCharById");
const getCharDetail = require("../controllers/getCharDetail");
let favs = require("../utils/favs");

const router = Router();

router.get("/onsearch/:id", getCharById);
router.get("/detail/:id", getCharDetail);

router.post("/fav", (req, res) => {
  const { id, name, gender, species, image } = req.body;
  let character = {
    id,
    name,
    gender,
    species,
    image,
  };
  favs.push(character);
  res.status(200).json(character);
});

router.get("/fav", (req, res) => {
  if (favs.length) {
    res.status(200).json(favs);
  } else {
    res.status(400).send("favs está vacío");
  }
});

router.delete("/fav/:id", (req, res) => {
  const { id } = req.params;

  let character = favs.find((char) => char.id === Number(id));
  let filter = favs.filter((char) => char.id !== Number(id));

  favs = filter;
  res.status(200).json(character);
});

module.exports = router;
