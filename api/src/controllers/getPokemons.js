const axios = require("axios");
const getUrlsApi=require("../helpers/getUrlsApi");
const getObjectPokemons = require("../helpers/getObjectPokemons");
const filterQueryPokemons = require("../helpers/filterQueryPokemons");

const getPokemons = async (req, res) => {
  try {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=40`);
    //Recibo objetos tipo {name:"",url:""}
    if(!data){return res.status(404).json({message:"Fallo la conexion a la API Pokemon"})}
    const { name } = req.query;
    const allDataApi = await getUrlsApi(data);
    const objPokemons = getObjectPokemons(allDataApi);
    if(name) { 
        let filter = filterQueryPokemons(objPokemons,name);
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
