const {Pokemon}=require("../db")



const filterQueryPokemons = (objPokemons,name) => {
let filterPokemons = objPokemons.filter(pokemon => pokemon.nombre === name);
//console.log(filterPokemons)
 return filterPokemons;
}

module.exports=filterQueryPokemons;















// const filterQueryPokemons = async (objPokemons,name) => {
//     let filterPokemons = objPokemons.filter(pokemon => pokemon.nombre === name);
//     let filterBBDD = await Pokemon.findAll({where:{nombre: { [Op.like]: '%{name}%' },}});
//     console.log(filterBBDD)
//     if(!filterPokemons && !filterBBDD){
//         filterPokemons=false;
//         return filterPokemons;
//     }else{
//     // filterPokemons = [...filterPokemons,filterBBDD];
//     filterPokemons = [filterBBDD];
//     return filterPokemons;
//     }
//     }
    
//     module.exports=filterQueryPokemons;