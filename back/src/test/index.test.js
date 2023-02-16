const server = require("../server");
const session = require("supertest");
const agent = session(server);

describe("Test de RUTAS", () => {
  describe("GET rickandmorty/{id}", () => {
    it("Responde con status 200", () => {
      agent.get("/rickandmorty/character/1").expect(200);
    });

    it("Responde un objeto con las propiedades: id, name, species, gender, image", () => {
      agent.get("/rickandmorty/character/1").then((res) => {
        expect(res.body).toEqual({
          "id": "2",
          "name": "Morty Smith",
          "status": "Alive",
          "species": "Human",
          "type": "",
          "gender": "Male",
          "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        });
      });
    });

    it("Si hay un error responde status 500", ()=>{
        agent.get("/rickandmorty/character/IDqueNoExiste").expect(500)
    })
  });

  describe("GET rickandmorty/detail/{id}", ()=>{
    it("Responde con status 200", ()=>{
        agent.get("/rickandmorty/detail/2").expect(200)
    })
  })
});
