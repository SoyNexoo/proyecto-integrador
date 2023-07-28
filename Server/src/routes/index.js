const deleteFav = require("../controllers/deleteFav");
const { getCharById } = require("../controllers/getCharById");
const login  = require("../controllers/login");
const postFav = require("../controllers/postFav");
const postUser = require("../controllers/postUser");

const router = require("express").Router()

//? RUTAS GET!

router.get("/:id", getCharById);
router.get("/login", login);

//* RUTAS POST!
router.post("/fav", postFav)
router.post("/login", postUser);

//! RUTAS DELETE!
router.delete("/fav/:id", deleteFav)


module.exports = router