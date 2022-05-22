const {Characters, Episode} = require("../db");

const createCharacter = async (name, species, origin, image, episodios) => {
  if (!name || !species || !origin || !image) {
    return {msj: "te faltan"};
  }

  const create = {name, species, origin, image};
  const nuevoPJ = await Characters.create(create);
  nuevoPJ.addEpisodes(episodios);

  const aux = Characters.findByPk(nuevoPJ.id, {include: [{model: Episode}]});
  return aux;
};
module.exports = {createCharacter};
