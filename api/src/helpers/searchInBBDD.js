const {Pokemon,TypePokemon} = require("../db");

const searchInBBDD =async (id) => {
    if(!id){
       return await Pokemon.findAll({include:{
        model:TypePokemon,
        attributes:["nombre"],
        through:{
            attributes:[]
        }}}); 
    }else {
const {dataValues} = await Pokemon.findOne({where:{id:id},
include:{
    model:TypePokemon,
    attributes:["nombre"],
    through:{
        attributes:[]
    }
}})
    return dataValues;
}};

module.exports = searchInBBDD;
