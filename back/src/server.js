const express = require("express");
const PORT = 3001;
const router = require("./routes/index");
const cors = require("cors");

const morgan = require("morgan")

const server = express();

server.use(cors());
server.use(express.json());
server.use(morgan('dev'));

server.use("/rickandmorty", router);

server.listen(PORT, () => {
  console.log("Server listen on port" + PORT);
});
