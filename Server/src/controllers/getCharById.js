const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character/";

async function getCharById(req, res) {
  const { id } = req.params;
  // axios(URL + id)
  //   .then(({ data }) => {
  //     if(data.error){
  //       return res.status(404).send("Character not found")
  //     }
  //     //* SE HACE LA SOLICITUD
  //     const character = {
  //       id: Number(data.id),
  //       status: data.status,
  //       name: data.status,
  //       species: data.species,
  //       origin: data.origin,
  //       image: data.image,
  //       gender: data.gender,
  //     };
  //     return res.status(200).json(character);
  //   })
  //   .catch((err) => {
  //     //! NO PUDO HACER LA SOLICITUD
  //     return res.status(500).send(err.message);
  //   });


    try {
      const apiReq = await axios(`${URL}${id}`);
      const {data} = apiReq


      //! ERROR EN LA API
      if(data.error){
        return res.status(404).send("Character not found")
      }



      //* SE HACE LA SOLICITUD
      const character = {
        id: Number(data.id),
        status: data.status,
        name: data.name,
        species: data.species,
        origin: data.origin,
        image: data.image,
        gender: data.gender,
      };
      return res.status(200).json(character);

    } catch (error) {
      //! ERROR EN EL GET
      return res.status(500).send(error.essage);

    }
}

module.exports = { getCharById };
