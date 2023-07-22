
const server = require("./app")
const PORT = 3001




// Permisos -> CORS 

// Routers

server.listen(PORT, () => {
  console.log("Running on... " + PORT)
})