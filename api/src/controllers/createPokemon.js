const { Pokemon } = require("../db");

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

