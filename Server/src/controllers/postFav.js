const { Sequelize } = require("sequelize");
const {Character} = require("../DB_connection");

const postFav = async (req, res) => {
  const { name, origin, species, status, image, gender } = req.body;
  if (name && origin && species && status && image && gender) {
    try {
      const [character, created] = await Character.findOrCreate({
        where: { name },
        defaults: {
          origin,
          species,
          gender,
          status,
          image,
        },
      });
      res
        .status(200)
        .json({ msg: "Nuevo personaje añadido a favorito!", data: character });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
  } else {
    res.status(401).send("Faltan Datos");
  }
};

module.exports = postFav;