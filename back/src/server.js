const http = require("http");
const data = require("./utils/data")

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    if (req.url.includes("/rickandmorty/character")) {
      const id = req.url.split("/").at(-1);

      const character = data.find((character) => character.id === Number(id));

      if (character) {
        res
          .writeHead(200, { "Content-type": "application/json" })
          .end(JSON.stringify(character));
      } else {
        res
          .writeHead(404, { "Content-type": "text/plain" })
          .end("Error");
      }
    }
  })
  .listen(3001, "localhost");
