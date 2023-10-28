const axios = require("axios");

const searchInApi = async (res,id) => {
    try{
    if(id>40 || id<0)throw new Error("ID debe estar entre 0 y 40");
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    let type=[];
    for (let i=0; i<data.types.length;i++) {
        type.push({name:data.types[i].type.name});
    }
    let obj = {
        id:data.id,
        nombre:data.name,
        imagen:data.sprites.other.home.front_default,
        vida:data.base_experience,
        ataque:data.stats[1].base_stat,
        defensa:data.stats[2].base_stat,
        velocidad:data.stats[5].base_stat,
        altura:data.height,
        peso:data.base_experience,
        types:type
    }
    return obj;
}catch(err){res.json({message:err.message})}

};

module.exports = searchInApi;
