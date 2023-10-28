const {Pokemon}=require("../db")
const { Op } =require("sequelize");


const filterQueryPokemons = (objPokemons,name) => {
let filterPokemons = objPokemons.filter(pokemon => pokemon.nombre == name);
//console.log(filterPokemons, "FILTERQUERYPOKKEMOS")
let filterBBDD = Pokemon.findAll({where:{nombre: { [Op.like]: '%{name}%' },}});
if(!filterPokemons && !filterBBDD){
    filterPokemons=false;
    return filterPokemons;
}else{
filterPokemons = [...filterPokemons,filterBBDD];
return filterPokemons;
}
}

module.exports=filterQueryPokemons;