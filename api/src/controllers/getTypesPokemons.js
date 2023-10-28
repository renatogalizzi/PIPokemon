const axios = require("axios");
const { TypePokemon } = require("../db");

const getTypesPokemons = async (req, res) => {
    //compruebo si la tabla tiene info
    const vacia = await TypePokemon.findAll();
    //si esta vacia entra a este if y trae types de la API
  if (vacia.length === 0) {
    try {
      const { data } = await axios.get("https://pokeapi.co/api/v2/type/");
      let types = [];
      for (let i = 0; i < data.results.length; i++) {
        let ob = {
          nombre: data.results[i].name,
        };
        types.push(ob);
      }
      await TypePokemon.bulkCreate(types);

      res.status(200).json("Types creados con Exito en la base de datos");
    } catch (err) {
      err.message;
    }
  } else {
    //si tiene info la trae de la bbdd
    const datas = await TypePokemon.findAll();
    return res.status(200).json(datas);
  }
};

module.exports = getTypesPokemons;
