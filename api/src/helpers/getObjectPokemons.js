const getObjectPokemons = (data) => {

    const getTypes = (types) =>{
        let type = [];
        for (let i=0;i<types.length;i++){
            type.push({nombre:types[i].type.name})
        }
        return type;
        }
    
    let info = [];
        for (let i=0;i<data.length;i++){
            let objPokemons = {
                id:data[i].id,
                nombre:data[i].name,
                imagen:data[i].sprites.other.home.front_default,
                vida:data[i].base_experience,
                ataque:data[i].stats[1].base_stat,
                defensa:data[i].stats[2].base_stat,
                velocidad:data[i].stats[5].base_stat,
                altura:data[i].height,
                peso:data[i].base_experience,
                typePokemons:getTypes(data[i].types),
            }
            info.push(objPokemons)
            
        }
         return info;
};

module.exports = getObjectPokemons;