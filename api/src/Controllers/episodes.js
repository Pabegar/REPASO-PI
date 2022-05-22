const axios = require("axios");
const {Episode} = require("../db");

const episodios = async () => {
  let aux = await axios.get("https://rickandmortyapi.com/api/episode");
  let epi = await aux.data.results.map((ep) => {
    return {
      id: ep.id,
      name: ep.name,
    };
  });

  // console.log(epi)
  // Episode.bulkCreate(epi)
  return epi;
};
module.exports = {episodios};
