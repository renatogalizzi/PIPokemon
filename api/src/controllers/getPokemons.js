const axios = require("axios");
const getUrlsApi=require("../helpers/getUrlsApi");
const getObjectPokemons = require("../helpers/getObjectPokemons");
const filterQueryPokemons = require("../helpers/filterQueryPokemons");
const searchInBBDD = require("../helpers/searchInBBDD")

const getPokemons = async (req, res) => {
  try {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=40`); //Recibo objetos tipo {name:"",url:""}
    if(!data){return res.status(404).json({message:"Fallo la conexion a la API Pokemon"})}
    const { name } = req.query;
    const allDataApi = await getUrlsApi(data); //Hago peticion a todas las urls para tener info de los pokemons
    let objPokemons = getObjectPokemons(allDataApi); //Model del object para enviar al front
    let bbdd = await searchInBBDD();
    
    for (let i=0;i<bbdd.length;i++){
      objPokemons=[...objPokemons,bbdd[i].dataValues];
    }
    if(name) { 
        let filter = filterQueryPokemons(obj,name);
        if(!filter){
            return res.status(404).json({message:"No se encontraron Personajes con ese Nombre"})
        }else {
            return res.status(200).json(filter)
        }
     }
    else{
        res.status(200).json(objPokemons);
      }
    }catch (err) {res.send(err.message)}
};

module.exports = getPokemons;
