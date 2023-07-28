const Sequelize = require("sequelize")
const Character = require("../DB_connection")

const deleteFav = async (req, res) =>{
    const {id} = req.params;
    try {
        await Character.destroy({
            where: {
                id : id
            }
        });
        const favorites = await Character.findAll();
        res.status(200).json({ msg: "Personaje eliminado de favoritos!", data: favorites });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = deleteFav;