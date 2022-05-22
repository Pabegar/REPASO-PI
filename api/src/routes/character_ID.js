const {Router} = require("express");
const {characters, episode} = require("../db");
const {characterID} = require("../Controllers/character_Id");
const router = Router();

router.get("/character/:id", async (req, res) => {
  const {id} = req.params;
  res.status(200).send(await characterID(id));
});

module.exports = router;
