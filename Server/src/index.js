
const { conn } = require("./DB_connection")
const server = require("./app")
const PORT = 3001




// Permisos -> CORS 

// Routers

// server.listen(PORT,async () => {
//   await conn.sync({force: true})
//   console.log()
//   console.log("Running on... " + PORT)
// })


conn.sync({force: false}).then(val =>{
  server.listen(PORT, async () => {
    console.log("Server & Database is running...! 👀")
  })
}).catch((err) => console.error(err))