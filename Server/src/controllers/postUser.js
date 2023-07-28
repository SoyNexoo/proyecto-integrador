const { Sequelize } = require("sequelize");
const {User} = require("../DB_connection");

const postUser = async (req, res) => {
  
  const { email, password } = req.body;
  try {
      if (!email || !password) res.status(400).json ({message:"Faltan Datos"});
      const [user, created] = await User.findOrCreate({
        where: { email, password },
        // defaults: {
        //   password: password,
        // },
      });
       res
        .status(200)
        .json({ msg: "Nuevo usuario creado con exito!", user });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }




module.exports = postUser;
