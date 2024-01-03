const { addToLikedMovies } = require("../controllers/userController");

const router = require("express").Router();

router.post("/add", addToLikedMovies);

module.exports =router;