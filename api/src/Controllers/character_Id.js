const {characterAll} = require("../Controllers/character");
const {characters, episode} = require("../db");

const characterID = async (id) => {
  const charactertotal = await characterAll();
  const filtercharacter = charactertotal.find((e) => e.id == id);
  if (!filtercharacter) {
    return "no se encontro ningun id";
  }
  return filtercharacter;
};

module.exports = {characterID};
