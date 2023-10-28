const { Router } = require('express');
const getPokemons = require("../controllers/getPokemons");
const  getPokemonsById = require("../controllers/getPokemonsById")
const createPokemon = require("../controllers/createPokemon");
const getTypesPokemons=require("../controllers/getTypesPokemons");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/", getPokemons);
router.get("/types",getTypesPokemons);
router.get("/:id",getPokemonsById);
router.post("/create",createPokemon);


module.exports = router;
