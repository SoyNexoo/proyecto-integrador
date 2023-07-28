// const { Console } = require("console");
// const http = require("http");
// const { getCharById, getDetail } = require("./controllers/getCharById");
// require("dotenv").config();
// const { PORT, PASSWORD } = process.env;

// http
//   .createServer((req, res) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     const id = req.url.split("/").at(-1);

//     if (req.url.includes("/rickandmorty/character")) {
//       return getCharById(res, id)
//       }
//     if (req.url.includes("/detail")){
//       return getDetail(res,id)
//     }
//     }

//     // if (req.url.includes("detail")) {
//     //   return getDetail(res, id);
//     // }
//   )
//   .listen(3001, () => {
//     console.log("Running Ok! on.. " + PORT);
//   });

const express = require("express")
const router = require("./routes/index")
const server = express()


// Middlewars
server.use(express.json())

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
     'Access-Control-Allow-Headers',
     'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header(
     'Access-Control-Allow-Methods',
     'GET, POST, OPTIONS, PUT, DELETE'
  );
  next();
});


// Permisos -> CORS 

// Routers
server.use("/characters", router)
server.use("/user", router)
server.use("/favorites" , router)

module.exports = server