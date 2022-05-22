const {Router} = require("express");

const characters = require("./characters");
const episodes = require("./episodes");
const character_id = require("./character_ID");
const charactersEP = require("./character_Post.js");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);)

router.get("/character", characters);
router.get("/character/:id", character_id);
router.get("/episodes", episodes);
router.post("/create", charactersEP);

module.exports = router;
