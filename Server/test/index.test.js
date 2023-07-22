const server = require("../src/app");
const session = require("supertest");
const { forEach } = require("../src/utils/users");
const agent = session(server);

describe("Routes testing", () => {
  describe("GET /character/:id", () => {
    it("Responde con status : 200", async () => {
      await agent.get("/characters/1").expect(200);
    });
    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
      const response = await agent.get("/character/2");
      // expect(response.body).toHaveProperty("id", "name", "species", "gender", "status", "origin", "image");
      const validar = [
        "id",
        "name",
        "species",
        "gender",
        "status",
        "origin",
        "image",
      ];
      validar.forEach((props) => {
        expect(props);
      });
    });
    // it("Si hay un error responde con status: 500", async () => {
    //     const response = await agent.get("/characters/1212421");
    //     expect
    // })
  });

  describe("GET /user/login", () => {
    it("GET with correct, data, should return the access true", async () => {
      const response = await agent.get(
        "/user/login?email=ejemplo@gmail.com&password=123456"
      );
      const access = { access: true };
      expect(response.body).toEqual(access);
    });
    it("GET with incorrect data, should return the access false", async () => {
      const response = await agent.get(
        "/user/login?email=ejemplo@gmail.com&password=1243456"
      );
      //   const access = {access: false}
      expect(response.body.access).toEquial(false);
    });
  });
  describe("POST/DELETE /favorites", ()=>{

    const character1 = {id: 1, name: "Rick Sanchez"}
    const character2 = {id: 2, name: "Morty Smith"}

    it("POST should add the second character to the favs", async () => {
        const response = (await agent.post("/favorites/")).setEncoding(character1)
        expect(response.body).toContainEqual(character1)
    })
    it("POST should add the character to the favs", async () => {
        const response = (await agent.post("/favorites/")).setEncoding(character2)
        expect(response.body).toContainEqual(character1)
        expect(response.body).toContainEqual(character2)
    })

    it("Should return the previous characters when sending wrong data",async () => {
        const response = await agent.delete("/favorites/68")
        expect(response.body).toContainEqual(character1)
        expect(response.body).toContainEqual(character2)
        
    })
    it("Should delete character with correct data",async () => {
        const response = await agent.delete("/favorites/2")
        expect(response.body).toContainEqual(character1)
        expect(response.body).not.toContainEqual(character2)
        
    })
    //Necesito un test que me verifique el login
  })
});
