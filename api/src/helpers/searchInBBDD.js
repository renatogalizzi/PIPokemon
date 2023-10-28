const {Pokemon,TypePokemon} = require("../db");

const searchInBBDD =async (id) => {
const {dataValues} = await Pokemon.findOne({where:{id:id},
include:{
    model:TypePokemon,
    attributes:["nombre"],
    through:{
        attributes:[]
    }
}})
    return dataValues;
};

module.exports = searchInBBDD;
