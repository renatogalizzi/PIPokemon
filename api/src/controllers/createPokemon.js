const { Pokemon } = require("../db");
const { TypePokemon } = require("../db");

const createPokemon = async (req, res) => {
  try {
    const {
      id,
      nombre,
      imagen,
      vida,
      ataque,
      defensa,
      velocidad,
      altura,
      peso,
      types,
    } = req.body;
    const pokemon = await Pokemon.create({
      nombre,
      imagen,
      vida,
      ataque,
      defensa,
      velocidad,
      altura,
      peso,
    });
    pokemon.addTypePokemon(types);
    // const find = await Pokemon.findAll({
    //   include: {
    //   model:TypePokemon,
    //   attributes:["id","nombre"],
    //   through:{
    //     attributes:[]
    //   },}
//})
    res.status(200).json({ message: "Pokemon creado correctamente", data: pokemon });
  } catch (err) { res.json(err.message);}
};

module.exports = createPokemon;

// let objPokemons = {
//     id:urlsPending[i].id,
//     nombre:urlsPending[i].name,
//     imagen:urlsPending[i].sprites.other.home.front_default,
//     vida:urlsPending[i].base_experience,
//     ataque:urlsPending[i].stats[1].base_stat,
//     defensa:urlsPending[i].stats[2].base_stat,
//     velocidad:urlsPending[i].stats[5].base_stat,
//     altura:urlsPending[i].height,
//     peso:urlsPending[i].base_experience
// }
