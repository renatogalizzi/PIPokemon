const { Pokemon } = require("../db");

const createPokemon = async (req, res) => {

  try {
    const {
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
    if (!nombre || !imagen || !vida || !ataque || !defensa || !types) {throw Error ("Faltan Datos")
  }else {
const pokemon = await Pokemon.create({   //Deberia llamar a un controller que haga la conexion con la bbdd
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
res.status(200).json({ message: "Pokemon creado correctamente", data: pokemon.nombre });
}
  } catch (error) { res.status(500).json({message:"Faltan Datos"});}
};

module.exports = createPokemon;

