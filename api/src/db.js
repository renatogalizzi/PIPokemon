require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/pokemon`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
//console.log(sequelize.models) => { pokemon: pokemon, typePokemon: typePokemon }
//Object.entries: Devuelve un array de todos los pares key:value
let entries = Object.entries(sequelize.models);
//console.log(entries) => [ [ 'pokemon', pokemon ], [ 'typePokemon', typePokemon ] ]
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
//console.log(capsEntries) => [ [ 'pokemon', pokemon ], [ 'typePokemon', typePokemon ] ]
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Pokemon, TypePokemon } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);
Pokemon.belongsToMany(TypePokemon,{through:"pokemon_typepokemon",timestamps:false});
TypePokemon.belongsToMany(Pokemon,{through:"pokemon_typepokemon",timestamps:false});

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
