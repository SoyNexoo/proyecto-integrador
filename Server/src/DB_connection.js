require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const modelUser = require("./models/User"); 
const modelCharacter = require("./models/Character"); 



console.log(DB_USER)
// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.

// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
const sequelize = new Sequelize(
   "postgres://postgres:JulianDogz12@localhost/rickandmorty",
   // URL
   { logging: false, native: false }
);

async function testConnect (){
   try {
      await sequelize.authenticate()
      console.log("DB running faster!!...")
   } catch (error) {
      console.log("no me pude conectar")
   }
}

testConnect()


// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.
modelUser(sequelize)
modelCharacter(sequelize)

//

//

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!
const { User, Character } = sequelize.models;

User.belongsToMany(Character, {through: "user_favorites"})
Character.belongsToMany(User, {through: "user_favorites"})

module.exports = {
   User,
   Character,
   conn: sequelize,
};
