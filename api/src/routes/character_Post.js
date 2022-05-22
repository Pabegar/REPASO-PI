const {Router} = require("express");
const {Characters} = require("../db");
const router = Router();
const {createCharacter} = require("../Controllers/Post_character");

router.post("/create", (req, res) => {
  const {name, species, origin, image, episodios} = req.body;
  res
    .status(200)
    .send(createCharacter(name, species, origin, image, episodios));
});

module.exports = router;
