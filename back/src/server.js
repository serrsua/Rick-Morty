
const express = require("express");
const PORT = 3001;
const router = require("./routes/index");
const cors = require("cors");
const { getCharById } = require("./controllers/getCharById");
const { getCharDetail } = require("./controllers/gerCharDetail");
let favs = require("./utils/favs");

const server = express();

server.use(express.json());
server.use("/", router);
server.use(cors());

server.post("/rickandmorty/fav", (req, res) => {
  const { character } = req.body;
  favs.push(character);
  res.status(200)
});

server.get("/rickandmorty/fav", (req, res) => {
  if (favs.length) {
    res.status(200).json(favs);
  } else {
    res.status(400).send("favs está vacío");
  }
});

server.delete("/rickandmorty/fav/:id", (req, res) => {
  const { id } = req.params;

  if (!id) {
    res.status(400).send("no hay ID");
  } else {
    const filter = favs.filter((char) => char.id !== Number(id));
    favs = filter;
    res.status(200)
  }
});

server.listen(PORT, () => {
  console.log("Server listen on port" + PORT);
});




/* http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    const id = req.url.split("/").at(-1);

    if (req.url.includes("onsearch")) {
      getCharById(res, id);
    }

    if (req.url.includes("detail")) {
      getCharDetail(res, id);
    }
  })
  .listen(3001, "localhost"); */
