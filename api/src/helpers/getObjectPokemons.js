const getObjectPokemons = (urlsPending) => {

    let info = [];
        for (let i=0;i<urlsPending.length;i++){
            let objPokemons = {
                id:urlsPending[i].id,
                nombre:urlsPending[i].name,
                imagen:urlsPending[i].sprites.other.home.front_default,
                vida:urlsPending[i].base_experience,
                ataque:urlsPending[i].stats[1].base_stat,
                defensa:urlsPending[i].stats[2].base_stat,
                velocidad:urlsPending[i].stats[5].base_stat,
                altura:urlsPending[i].height,
                peso:urlsPending[i].base_experience
            }
            info.push(objPokemons)
        }
         return info;
};

module.exports = getObjectPokemons;